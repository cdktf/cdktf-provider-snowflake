# `streamGrant` Submodule <a name="`streamGrant` Submodule" id="@cdktf/provider-snowflake.streamGrant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StreamGrant <a name="StreamGrant" id="@cdktf/provider-snowflake.streamGrant.StreamGrant"></a>

Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/stream_grant snowflake_stream_grant}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.streamGrant.StreamGrant.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import stream_grant

streamGrant.StreamGrant(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  database_name: str,
  roles: typing.List[str],
  enable_multiple_grants: typing.Union[bool, IResolvable] = None,
  id: str = None,
  on_future: typing.Union[bool, IResolvable] = None,
  privilege: str = None,
  schema_name: str = None,
  stream_name: str = None,
  with_grant_option: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamGrant.StreamGrant.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.streamGrant.StreamGrant.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.streamGrant.StreamGrant.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamGrant.StreamGrant.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamGrant.StreamGrant.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamGrant.StreamGrant.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamGrant.StreamGrant.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamGrant.StreamGrant.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamGrant.StreamGrant.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamGrant.StreamGrant.Initializer.parameter.databaseName">database_name</a></code> | <code>str</code> | The name of the database containing the current or future streams on which to grant privileges. |
| <code><a href="#@cdktf/provider-snowflake.streamGrant.StreamGrant.Initializer.parameter.roles">roles</a></code> | <code>typing.List[str]</code> | Grants privilege to these roles. |
| <code><a href="#@cdktf/provider-snowflake.streamGrant.StreamGrant.Initializer.parameter.enableMultipleGrants">enable_multiple_grants</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When this is set to true, multiple grants of the same type can be created. |
| <code><a href="#@cdktf/provider-snowflake.streamGrant.StreamGrant.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stream_grant#id StreamGrant#id}. |
| <code><a href="#@cdktf/provider-snowflake.streamGrant.StreamGrant.Initializer.parameter.onFuture">on_future</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When this is set to true and a schema_name is provided, apply this grant on all future streams in the given schema. |
| <code><a href="#@cdktf/provider-snowflake.streamGrant.StreamGrant.Initializer.parameter.privilege">privilege</a></code> | <code>str</code> | The privilege to grant on the current or future stream. |
| <code><a href="#@cdktf/provider-snowflake.streamGrant.StreamGrant.Initializer.parameter.schemaName">schema_name</a></code> | <code>str</code> | The name of the schema containing the current or future streams on which to grant privileges. |
| <code><a href="#@cdktf/provider-snowflake.streamGrant.StreamGrant.Initializer.parameter.streamName">stream_name</a></code> | <code>str</code> | The name of the stream on which to grant privileges immediately (only valid if on_future is false). |
| <code><a href="#@cdktf/provider-snowflake.streamGrant.StreamGrant.Initializer.parameter.withGrantOption">with_grant_option</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When this is set to true, allows the recipient role to grant the privileges to other roles. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.streamGrant.StreamGrant.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.streamGrant.StreamGrant.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.streamGrant.StreamGrant.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.streamGrant.StreamGrant.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.streamGrant.StreamGrant.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.streamGrant.StreamGrant.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.streamGrant.StreamGrant.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.streamGrant.StreamGrant.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.streamGrant.StreamGrant.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-snowflake.streamGrant.StreamGrant.Initializer.parameter.databaseName"></a>

- *Type:* str

The name of the database containing the current or future streams on which to grant privileges.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stream_grant#database_name StreamGrant#database_name}

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-snowflake.streamGrant.StreamGrant.Initializer.parameter.roles"></a>

- *Type:* typing.List[str]

Grants privilege to these roles.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stream_grant#roles StreamGrant#roles}

---

##### `enable_multiple_grants`<sup>Optional</sup> <a name="enable_multiple_grants" id="@cdktf/provider-snowflake.streamGrant.StreamGrant.Initializer.parameter.enableMultipleGrants"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

When this is set to true, multiple grants of the same type can be created.

This will cause Terraform to not revoke grants applied to roles and objects outside Terraform.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stream_grant#enable_multiple_grants StreamGrant#enable_multiple_grants}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.streamGrant.StreamGrant.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stream_grant#id StreamGrant#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `on_future`<sup>Optional</sup> <a name="on_future" id="@cdktf/provider-snowflake.streamGrant.StreamGrant.Initializer.parameter.onFuture"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

When this is set to true and a schema_name is provided, apply this grant on all future streams in the given schema.

When this is true and no schema_name is provided apply this grant on all future streams in the given database. The stream_name field must be unset in order to use on_future.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stream_grant#on_future StreamGrant#on_future}

---

##### `privilege`<sup>Optional</sup> <a name="privilege" id="@cdktf/provider-snowflake.streamGrant.StreamGrant.Initializer.parameter.privilege"></a>

- *Type:* str

The privilege to grant on the current or future stream.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stream_grant#privilege StreamGrant#privilege}

---

##### `schema_name`<sup>Optional</sup> <a name="schema_name" id="@cdktf/provider-snowflake.streamGrant.StreamGrant.Initializer.parameter.schemaName"></a>

- *Type:* str

The name of the schema containing the current or future streams on which to grant privileges.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stream_grant#schema_name StreamGrant#schema_name}

---

##### `stream_name`<sup>Optional</sup> <a name="stream_name" id="@cdktf/provider-snowflake.streamGrant.StreamGrant.Initializer.parameter.streamName"></a>

- *Type:* str

The name of the stream on which to grant privileges immediately (only valid if on_future is false).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stream_grant#stream_name StreamGrant#stream_name}

---

##### `with_grant_option`<sup>Optional</sup> <a name="with_grant_option" id="@cdktf/provider-snowflake.streamGrant.StreamGrant.Initializer.parameter.withGrantOption"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

When this is set to true, allows the recipient role to grant the privileges to other roles.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stream_grant#with_grant_option StreamGrant#with_grant_option}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamGrant.StreamGrant.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.streamGrant.StreamGrant.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamGrant.StreamGrant.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.streamGrant.StreamGrant.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.streamGrant.StreamGrant.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamGrant.StreamGrant.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.streamGrant.StreamGrant.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamGrant.StreamGrant.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamGrant.StreamGrant.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamGrant.StreamGrant.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamGrant.StreamGrant.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamGrant.StreamGrant.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamGrant.StreamGrant.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamGrant.StreamGrant.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamGrant.StreamGrant.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamGrant.StreamGrant.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamGrant.StreamGrant.resetEnableMultipleGrants">reset_enable_multiple_grants</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamGrant.StreamGrant.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamGrant.StreamGrant.resetOnFuture">reset_on_future</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamGrant.StreamGrant.resetPrivilege">reset_privilege</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamGrant.StreamGrant.resetSchemaName">reset_schema_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamGrant.StreamGrant.resetStreamName">reset_stream_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamGrant.StreamGrant.resetWithGrantOption">reset_with_grant_option</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.streamGrant.StreamGrant.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-snowflake.streamGrant.StreamGrant.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.streamGrant.StreamGrant.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.streamGrant.StreamGrant.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-snowflake.streamGrant.StreamGrant.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-snowflake.streamGrant.StreamGrant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-snowflake.streamGrant.StreamGrant.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-snowflake.streamGrant.StreamGrant.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-snowflake.streamGrant.StreamGrant.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.streamGrant.StreamGrant.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.streamGrant.StreamGrant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.streamGrant.StreamGrant.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.streamGrant.StreamGrant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.streamGrant.StreamGrant.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.streamGrant.StreamGrant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.streamGrant.StreamGrant.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.streamGrant.StreamGrant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.streamGrant.StreamGrant.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.streamGrant.StreamGrant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.streamGrant.StreamGrant.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.streamGrant.StreamGrant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.streamGrant.StreamGrant.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.streamGrant.StreamGrant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.streamGrant.StreamGrant.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.streamGrant.StreamGrant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.streamGrant.StreamGrant.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.streamGrant.StreamGrant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.streamGrant.StreamGrant.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.streamGrant.StreamGrant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_enable_multiple_grants` <a name="reset_enable_multiple_grants" id="@cdktf/provider-snowflake.streamGrant.StreamGrant.resetEnableMultipleGrants"></a>

```python
def reset_enable_multiple_grants() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-snowflake.streamGrant.StreamGrant.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_on_future` <a name="reset_on_future" id="@cdktf/provider-snowflake.streamGrant.StreamGrant.resetOnFuture"></a>

```python
def reset_on_future() -> None
```

##### `reset_privilege` <a name="reset_privilege" id="@cdktf/provider-snowflake.streamGrant.StreamGrant.resetPrivilege"></a>

```python
def reset_privilege() -> None
```

##### `reset_schema_name` <a name="reset_schema_name" id="@cdktf/provider-snowflake.streamGrant.StreamGrant.resetSchemaName"></a>

```python
def reset_schema_name() -> None
```

##### `reset_stream_name` <a name="reset_stream_name" id="@cdktf/provider-snowflake.streamGrant.StreamGrant.resetStreamName"></a>

```python
def reset_stream_name() -> None
```

##### `reset_with_grant_option` <a name="reset_with_grant_option" id="@cdktf/provider-snowflake.streamGrant.StreamGrant.resetWithGrantOption"></a>

```python
def reset_with_grant_option() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamGrant.StreamGrant.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.streamGrant.StreamGrant.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamGrant.StreamGrant.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-snowflake.streamGrant.StreamGrant.isConstruct"></a>

```python
from cdktf_cdktf_provider_snowflake import stream_grant

streamGrant.StreamGrant.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.streamGrant.StreamGrant.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-snowflake.streamGrant.StreamGrant.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_snowflake import stream_grant

streamGrant.StreamGrant.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.streamGrant.StreamGrant.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-snowflake.streamGrant.StreamGrant.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_snowflake import stream_grant

streamGrant.StreamGrant.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.streamGrant.StreamGrant.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamGrant.StreamGrant.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.streamGrant.StreamGrant.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamGrant.StreamGrant.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamGrant.StreamGrant.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamGrant.StreamGrant.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamGrant.StreamGrant.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamGrant.StreamGrant.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamGrant.StreamGrant.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamGrant.StreamGrant.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamGrant.StreamGrant.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamGrant.StreamGrant.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamGrant.StreamGrant.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamGrant.StreamGrant.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamGrant.StreamGrant.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamGrant.StreamGrant.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamGrant.StreamGrant.property.enableMultipleGrantsInput">enable_multiple_grants_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamGrant.StreamGrant.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamGrant.StreamGrant.property.onFutureInput">on_future_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamGrant.StreamGrant.property.privilegeInput">privilege_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamGrant.StreamGrant.property.rolesInput">roles_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamGrant.StreamGrant.property.schemaNameInput">schema_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamGrant.StreamGrant.property.streamNameInput">stream_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamGrant.StreamGrant.property.withGrantOptionInput">with_grant_option_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamGrant.StreamGrant.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamGrant.StreamGrant.property.enableMultipleGrants">enable_multiple_grants</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamGrant.StreamGrant.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamGrant.StreamGrant.property.onFuture">on_future</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamGrant.StreamGrant.property.privilege">privilege</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamGrant.StreamGrant.property.roles">roles</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamGrant.StreamGrant.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamGrant.StreamGrant.property.streamName">stream_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamGrant.StreamGrant.property.withGrantOption">with_grant_option</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.streamGrant.StreamGrant.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-snowflake.streamGrant.StreamGrant.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.streamGrant.StreamGrant.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-snowflake.streamGrant.StreamGrant.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-snowflake.streamGrant.StreamGrant.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-snowflake.streamGrant.StreamGrant.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-snowflake.streamGrant.StreamGrant.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.streamGrant.StreamGrant.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.streamGrant.StreamGrant.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.streamGrant.StreamGrant.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.streamGrant.StreamGrant.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.streamGrant.StreamGrant.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.streamGrant.StreamGrant.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.streamGrant.StreamGrant.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktf/provider-snowflake.streamGrant.StreamGrant.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `enable_multiple_grants_input`<sup>Optional</sup> <a name="enable_multiple_grants_input" id="@cdktf/provider-snowflake.streamGrant.StreamGrant.property.enableMultipleGrantsInput"></a>

```python
enable_multiple_grants_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-snowflake.streamGrant.StreamGrant.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `on_future_input`<sup>Optional</sup> <a name="on_future_input" id="@cdktf/provider-snowflake.streamGrant.StreamGrant.property.onFutureInput"></a>

```python
on_future_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `privilege_input`<sup>Optional</sup> <a name="privilege_input" id="@cdktf/provider-snowflake.streamGrant.StreamGrant.property.privilegeInput"></a>

```python
privilege_input: str
```

- *Type:* str

---

##### `roles_input`<sup>Optional</sup> <a name="roles_input" id="@cdktf/provider-snowflake.streamGrant.StreamGrant.property.rolesInput"></a>

```python
roles_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `schema_name_input`<sup>Optional</sup> <a name="schema_name_input" id="@cdktf/provider-snowflake.streamGrant.StreamGrant.property.schemaNameInput"></a>

```python
schema_name_input: str
```

- *Type:* str

---

##### `stream_name_input`<sup>Optional</sup> <a name="stream_name_input" id="@cdktf/provider-snowflake.streamGrant.StreamGrant.property.streamNameInput"></a>

```python
stream_name_input: str
```

- *Type:* str

---

##### `with_grant_option_input`<sup>Optional</sup> <a name="with_grant_option_input" id="@cdktf/provider-snowflake.streamGrant.StreamGrant.property.withGrantOptionInput"></a>

```python
with_grant_option_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-snowflake.streamGrant.StreamGrant.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `enable_multiple_grants`<sup>Required</sup> <a name="enable_multiple_grants" id="@cdktf/provider-snowflake.streamGrant.StreamGrant.property.enableMultipleGrants"></a>

```python
enable_multiple_grants: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.streamGrant.StreamGrant.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `on_future`<sup>Required</sup> <a name="on_future" id="@cdktf/provider-snowflake.streamGrant.StreamGrant.property.onFuture"></a>

```python
on_future: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `privilege`<sup>Required</sup> <a name="privilege" id="@cdktf/provider-snowflake.streamGrant.StreamGrant.property.privilege"></a>

```python
privilege: str
```

- *Type:* str

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-snowflake.streamGrant.StreamGrant.property.roles"></a>

```python
roles: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktf/provider-snowflake.streamGrant.StreamGrant.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `stream_name`<sup>Required</sup> <a name="stream_name" id="@cdktf/provider-snowflake.streamGrant.StreamGrant.property.streamName"></a>

```python
stream_name: str
```

- *Type:* str

---

##### `with_grant_option`<sup>Required</sup> <a name="with_grant_option" id="@cdktf/provider-snowflake.streamGrant.StreamGrant.property.withGrantOption"></a>

```python
with_grant_option: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamGrant.StreamGrant.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.streamGrant.StreamGrant.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### StreamGrantConfig <a name="StreamGrantConfig" id="@cdktf/provider-snowflake.streamGrant.StreamGrantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.streamGrant.StreamGrantConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import stream_grant

streamGrant.StreamGrantConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  database_name: str,
  roles: typing.List[str],
  enable_multiple_grants: typing.Union[bool, IResolvable] = None,
  id: str = None,
  on_future: typing.Union[bool, IResolvable] = None,
  privilege: str = None,
  schema_name: str = None,
  stream_name: str = None,
  with_grant_option: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamGrant.StreamGrantConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamGrant.StreamGrantConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamGrant.StreamGrantConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamGrant.StreamGrantConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamGrant.StreamGrantConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamGrant.StreamGrantConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamGrant.StreamGrantConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamGrant.StreamGrantConfig.property.databaseName">database_name</a></code> | <code>str</code> | The name of the database containing the current or future streams on which to grant privileges. |
| <code><a href="#@cdktf/provider-snowflake.streamGrant.StreamGrantConfig.property.roles">roles</a></code> | <code>typing.List[str]</code> | Grants privilege to these roles. |
| <code><a href="#@cdktf/provider-snowflake.streamGrant.StreamGrantConfig.property.enableMultipleGrants">enable_multiple_grants</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When this is set to true, multiple grants of the same type can be created. |
| <code><a href="#@cdktf/provider-snowflake.streamGrant.StreamGrantConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stream_grant#id StreamGrant#id}. |
| <code><a href="#@cdktf/provider-snowflake.streamGrant.StreamGrantConfig.property.onFuture">on_future</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When this is set to true and a schema_name is provided, apply this grant on all future streams in the given schema. |
| <code><a href="#@cdktf/provider-snowflake.streamGrant.StreamGrantConfig.property.privilege">privilege</a></code> | <code>str</code> | The privilege to grant on the current or future stream. |
| <code><a href="#@cdktf/provider-snowflake.streamGrant.StreamGrantConfig.property.schemaName">schema_name</a></code> | <code>str</code> | The name of the schema containing the current or future streams on which to grant privileges. |
| <code><a href="#@cdktf/provider-snowflake.streamGrant.StreamGrantConfig.property.streamName">stream_name</a></code> | <code>str</code> | The name of the stream on which to grant privileges immediately (only valid if on_future is false). |
| <code><a href="#@cdktf/provider-snowflake.streamGrant.StreamGrantConfig.property.withGrantOption">with_grant_option</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When this is set to true, allows the recipient role to grant the privileges to other roles. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.streamGrant.StreamGrantConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.streamGrant.StreamGrantConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.streamGrant.StreamGrantConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.streamGrant.StreamGrantConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.streamGrant.StreamGrantConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.streamGrant.StreamGrantConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.streamGrant.StreamGrantConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-snowflake.streamGrant.StreamGrantConfig.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

The name of the database containing the current or future streams on which to grant privileges.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stream_grant#database_name StreamGrant#database_name}

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-snowflake.streamGrant.StreamGrantConfig.property.roles"></a>

```python
roles: typing.List[str]
```

- *Type:* typing.List[str]

Grants privilege to these roles.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stream_grant#roles StreamGrant#roles}

---

##### `enable_multiple_grants`<sup>Optional</sup> <a name="enable_multiple_grants" id="@cdktf/provider-snowflake.streamGrant.StreamGrantConfig.property.enableMultipleGrants"></a>

```python
enable_multiple_grants: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When this is set to true, multiple grants of the same type can be created.

This will cause Terraform to not revoke grants applied to roles and objects outside Terraform.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stream_grant#enable_multiple_grants StreamGrant#enable_multiple_grants}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.streamGrant.StreamGrantConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stream_grant#id StreamGrant#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `on_future`<sup>Optional</sup> <a name="on_future" id="@cdktf/provider-snowflake.streamGrant.StreamGrantConfig.property.onFuture"></a>

```python
on_future: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When this is set to true and a schema_name is provided, apply this grant on all future streams in the given schema.

When this is true and no schema_name is provided apply this grant on all future streams in the given database. The stream_name field must be unset in order to use on_future.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stream_grant#on_future StreamGrant#on_future}

---

##### `privilege`<sup>Optional</sup> <a name="privilege" id="@cdktf/provider-snowflake.streamGrant.StreamGrantConfig.property.privilege"></a>

```python
privilege: str
```

- *Type:* str

The privilege to grant on the current or future stream.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stream_grant#privilege StreamGrant#privilege}

---

##### `schema_name`<sup>Optional</sup> <a name="schema_name" id="@cdktf/provider-snowflake.streamGrant.StreamGrantConfig.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

The name of the schema containing the current or future streams on which to grant privileges.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stream_grant#schema_name StreamGrant#schema_name}

---

##### `stream_name`<sup>Optional</sup> <a name="stream_name" id="@cdktf/provider-snowflake.streamGrant.StreamGrantConfig.property.streamName"></a>

```python
stream_name: str
```

- *Type:* str

The name of the stream on which to grant privileges immediately (only valid if on_future is false).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stream_grant#stream_name StreamGrant#stream_name}

---

##### `with_grant_option`<sup>Optional</sup> <a name="with_grant_option" id="@cdktf/provider-snowflake.streamGrant.StreamGrantConfig.property.withGrantOption"></a>

```python
with_grant_option: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When this is set to true, allows the recipient role to grant the privileges to other roles.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stream_grant#with_grant_option StreamGrant#with_grant_option}

---


