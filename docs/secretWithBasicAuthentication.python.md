# `secretWithBasicAuthentication` Submodule <a name="`secretWithBasicAuthentication` Submodule" id="@cdktf/provider-snowflake.secretWithBasicAuthentication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecretWithBasicAuthentication <a name="SecretWithBasicAuthentication" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/secret_with_basic_authentication snowflake_secret_with_basic_authentication}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import secret_with_basic_authentication

secretWithBasicAuthentication.SecretWithBasicAuthentication(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  database: str,
  name: str,
  password: str,
  schema: str,
  username: str,
  comment: str = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.Initializer.parameter.database">database</a></code> | <code>str</code> | The database in which to create the secret Due to technical limitations (read more [here](https://github.com/Snowflake-Labs/terraform-provider-snowflake/blob/main/docs/technical-documentation/identifiers_rework_design_decisions.md#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `(`, `)`, `"`. |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.Initializer.parameter.name">name</a></code> | <code>str</code> | String that specifies the identifier (i.e. name) for the secret, must be unique in your schema. Due to technical limitations (read more [here](https://github.com/Snowflake-Labs/terraform-provider-snowflake/blob/main/docs/technical-documentation/identifiers_rework_design_decisions.md#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `(`, `)`, `"`. |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.Initializer.parameter.password">password</a></code> | <code>str</code> | Specifies the password value to store in the secret. |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.Initializer.parameter.schema">schema</a></code> | <code>str</code> | The schema in which to create the secret. |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.Initializer.parameter.username">username</a></code> | <code>str</code> | Specifies the username value to store in the secret. |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.Initializer.parameter.comment">comment</a></code> | <code>str</code> | Specifies a comment for the secret. |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/secret_with_basic_authentication#id SecretWithBasicAuthentication#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.Initializer.parameter.database"></a>

- *Type:* str

The database in which to create the secret Due to technical limitations (read more [here](https://github.com/Snowflake-Labs/terraform-provider-snowflake/blob/main/docs/technical-documentation/identifiers_rework_design_decisions.md#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `(`, `)`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/secret_with_basic_authentication#database SecretWithBasicAuthentication#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.Initializer.parameter.name"></a>

- *Type:* str

String that specifies the identifier (i.e. name) for the secret, must be unique in your schema. Due to technical limitations (read more [here](https://github.com/Snowflake-Labs/terraform-provider-snowflake/blob/main/docs/technical-documentation/identifiers_rework_design_decisions.md#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `(`, `)`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/secret_with_basic_authentication#name SecretWithBasicAuthentication#name}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.Initializer.parameter.password"></a>

- *Type:* str

Specifies the password value to store in the secret.

External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/secret_with_basic_authentication#password SecretWithBasicAuthentication#password}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.Initializer.parameter.schema"></a>

- *Type:* str

The schema in which to create the secret.

Due to technical limitations (read more [here](https://github.com/Snowflake-Labs/terraform-provider-snowflake/blob/main/docs/technical-documentation/identifiers_rework_design_decisions.md#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `(`, `)`, `"`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/secret_with_basic_authentication#schema SecretWithBasicAuthentication#schema}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.Initializer.parameter.username"></a>

- *Type:* str

Specifies the username value to store in the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/secret_with_basic_authentication#username SecretWithBasicAuthentication#username}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.Initializer.parameter.comment"></a>

- *Type:* str

Specifies a comment for the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/secret_with_basic_authentication#comment SecretWithBasicAuthentication#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/secret_with_basic_authentication#id SecretWithBasicAuthentication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SecretWithBasicAuthentication resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.isConstruct"></a>

```python
from cdktf_cdktf_provider_snowflake import secret_with_basic_authentication

secretWithBasicAuthentication.SecretWithBasicAuthentication.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_snowflake import secret_with_basic_authentication

secretWithBasicAuthentication.SecretWithBasicAuthentication.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_snowflake import secret_with_basic_authentication

secretWithBasicAuthentication.SecretWithBasicAuthentication.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_snowflake import secret_with_basic_authentication

secretWithBasicAuthentication.SecretWithBasicAuthentication.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SecretWithBasicAuthentication resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SecretWithBasicAuthentication to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SecretWithBasicAuthentication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/secret_with_basic_authentication#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SecretWithBasicAuthentication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.describeOutput">describe_output</a></code> | <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputList">SecretWithBasicAuthenticationDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.fullyQualifiedName">fully_qualified_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.secretType">secret_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.showOutput">show_output</a></code> | <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputList">SecretWithBasicAuthenticationShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.schemaInput">schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.schema">schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.username">username</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `describe_output`<sup>Required</sup> <a name="describe_output" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.describeOutput"></a>

```python
describe_output: SecretWithBasicAuthenticationDescribeOutputList
```

- *Type:* <a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputList">SecretWithBasicAuthenticationDescribeOutputList</a>

---

##### `fully_qualified_name`<sup>Required</sup> <a name="fully_qualified_name" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.fullyQualifiedName"></a>

```python
fully_qualified_name: str
```

- *Type:* str

---

##### `secret_type`<sup>Required</sup> <a name="secret_type" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.secretType"></a>

```python
secret_type: str
```

- *Type:* str

---

##### `show_output`<sup>Required</sup> <a name="show_output" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.showOutput"></a>

```python
show_output: SecretWithBasicAuthenticationShowOutputList
```

- *Type:* <a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputList">SecretWithBasicAuthenticationShowOutputList</a>

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.schemaInput"></a>

```python
schema_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.schema"></a>

```python
schema: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.username"></a>

```python
username: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthentication.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SecretWithBasicAuthenticationConfig <a name="SecretWithBasicAuthenticationConfig" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import secret_with_basic_authentication

secretWithBasicAuthentication.SecretWithBasicAuthenticationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  database: str,
  name: str,
  password: str,
  schema: str,
  username: str,
  comment: str = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationConfig.property.database">database</a></code> | <code>str</code> | The database in which to create the secret Due to technical limitations (read more [here](https://github.com/Snowflake-Labs/terraform-provider-snowflake/blob/main/docs/technical-documentation/identifiers_rework_design_decisions.md#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `(`, `)`, `"`. |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationConfig.property.name">name</a></code> | <code>str</code> | String that specifies the identifier (i.e. name) for the secret, must be unique in your schema. Due to technical limitations (read more [here](https://github.com/Snowflake-Labs/terraform-provider-snowflake/blob/main/docs/technical-documentation/identifiers_rework_design_decisions.md#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `(`, `)`, `"`. |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationConfig.property.password">password</a></code> | <code>str</code> | Specifies the password value to store in the secret. |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationConfig.property.schema">schema</a></code> | <code>str</code> | The schema in which to create the secret. |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationConfig.property.username">username</a></code> | <code>str</code> | Specifies the username value to store in the secret. |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationConfig.property.comment">comment</a></code> | <code>str</code> | Specifies a comment for the secret. |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/secret_with_basic_authentication#id SecretWithBasicAuthentication#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationConfig.property.database"></a>

```python
database: str
```

- *Type:* str

The database in which to create the secret Due to technical limitations (read more [here](https://github.com/Snowflake-Labs/terraform-provider-snowflake/blob/main/docs/technical-documentation/identifiers_rework_design_decisions.md#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `(`, `)`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/secret_with_basic_authentication#database SecretWithBasicAuthentication#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

String that specifies the identifier (i.e. name) for the secret, must be unique in your schema. Due to technical limitations (read more [here](https://github.com/Snowflake-Labs/terraform-provider-snowflake/blob/main/docs/technical-documentation/identifiers_rework_design_decisions.md#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `(`, `)`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/secret_with_basic_authentication#name SecretWithBasicAuthentication#name}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationConfig.property.password"></a>

```python
password: str
```

- *Type:* str

Specifies the password value to store in the secret.

External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/secret_with_basic_authentication#password SecretWithBasicAuthentication#password}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationConfig.property.schema"></a>

```python
schema: str
```

- *Type:* str

The schema in which to create the secret.

Due to technical limitations (read more [here](https://github.com/Snowflake-Labs/terraform-provider-snowflake/blob/main/docs/technical-documentation/identifiers_rework_design_decisions.md#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `(`, `)`, `"`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/secret_with_basic_authentication#schema SecretWithBasicAuthentication#schema}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationConfig.property.username"></a>

```python
username: str
```

- *Type:* str

Specifies the username value to store in the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/secret_with_basic_authentication#username SecretWithBasicAuthentication#username}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

Specifies a comment for the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/secret_with_basic_authentication#comment SecretWithBasicAuthentication#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.98.0/docs/resources/secret_with_basic_authentication#id SecretWithBasicAuthentication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### SecretWithBasicAuthenticationDescribeOutput <a name="SecretWithBasicAuthenticationDescribeOutput" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutput.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import secret_with_basic_authentication

secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutput()
```


### SecretWithBasicAuthenticationShowOutput <a name="SecretWithBasicAuthenticationShowOutput" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutput.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import secret_with_basic_authentication

secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutput()
```


## Classes <a name="Classes" id="Classes"></a>

### SecretWithBasicAuthenticationDescribeOutputList <a name="SecretWithBasicAuthenticationDescribeOutputList" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import secret_with_basic_authentication

secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SecretWithBasicAuthenticationDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### SecretWithBasicAuthenticationDescribeOutputOutputReference <a name="SecretWithBasicAuthenticationDescribeOutputOutputReference" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import secret_with_basic_authentication

secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.property.integrationName">integration_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.property.oauthAccessTokenExpiryTime">oauth_access_token_expiry_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.property.oauthRefreshTokenExpiryTime">oauth_refresh_token_expiry_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.property.oauthScopes">oauth_scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.property.secretType">secret_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutput">SecretWithBasicAuthenticationDescribeOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `integration_name`<sup>Required</sup> <a name="integration_name" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.property.integrationName"></a>

```python
integration_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `oauth_access_token_expiry_time`<sup>Required</sup> <a name="oauth_access_token_expiry_time" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.property.oauthAccessTokenExpiryTime"></a>

```python
oauth_access_token_expiry_time: str
```

- *Type:* str

---

##### `oauth_refresh_token_expiry_time`<sup>Required</sup> <a name="oauth_refresh_token_expiry_time" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.property.oauthRefreshTokenExpiryTime"></a>

```python
oauth_refresh_token_expiry_time: str
```

- *Type:* str

---

##### `oauth_scopes`<sup>Required</sup> <a name="oauth_scopes" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.property.oauthScopes"></a>

```python
oauth_scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `secret_type`<sup>Required</sup> <a name="secret_type" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.property.secretType"></a>

```python
secret_type: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutputOutputReference.property.internalValue"></a>

```python
internal_value: SecretWithBasicAuthenticationDescribeOutput
```

- *Type:* <a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationDescribeOutput">SecretWithBasicAuthenticationDescribeOutput</a>

---


### SecretWithBasicAuthenticationShowOutputList <a name="SecretWithBasicAuthenticationShowOutputList" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import secret_with_basic_authentication

secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SecretWithBasicAuthenticationShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### SecretWithBasicAuthenticationShowOutputOutputReference <a name="SecretWithBasicAuthenticationShowOutputOutputReference" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import secret_with_basic_authentication

secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.property.oauthScopes">oauth_scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.property.ownerRoleType">owner_role_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.property.secretType">secret_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutput">SecretWithBasicAuthenticationShowOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `oauth_scopes`<sup>Required</sup> <a name="oauth_scopes" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.property.oauthScopes"></a>

```python
oauth_scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `owner_role_type`<sup>Required</sup> <a name="owner_role_type" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.property.ownerRoleType"></a>

```python
owner_role_type: str
```

- *Type:* str

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `secret_type`<sup>Required</sup> <a name="secret_type" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.property.secretType"></a>

```python
secret_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutputOutputReference.property.internalValue"></a>

```python
internal_value: SecretWithBasicAuthenticationShowOutput
```

- *Type:* <a href="#@cdktf/provider-snowflake.secretWithBasicAuthentication.SecretWithBasicAuthenticationShowOutput">SecretWithBasicAuthenticationShowOutput</a>

---



