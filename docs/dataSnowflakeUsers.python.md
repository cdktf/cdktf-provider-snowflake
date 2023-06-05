# `data_snowflake_users`

Refer to the Terraform Registory for docs: [`data_snowflake_users`](https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.1/docs/data-sources/users).

# `dataSnowflakeUsers` Submodule <a name="`dataSnowflakeUsers` Submodule" id="@cdktf/provider-snowflake.dataSnowflakeUsers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeUsers <a name="DataSnowflakeUsers" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.1/docs/data-sources/users snowflake_users}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_users

dataSnowflakeUsers.DataSnowflakeUsers(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  pattern: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.Initializer.parameter.pattern">pattern</a></code> | <code>str</code> | Users pattern for which to return metadata. Please refer to LIKE keyword from snowflake documentation : https://docs.snowflake.com/en/sql-reference/sql/show-users.html#parameters. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.1/docs/data-sources/users#id DataSnowflakeUsers#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.Initializer.parameter.pattern"></a>

- *Type:* str

Users pattern for which to return metadata. Please refer to LIKE keyword from snowflake documentation : https://docs.snowflake.com/en/sql-reference/sql/show-users.html#parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.1/docs/data-sources/users#pattern DataSnowflakeUsers#pattern}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.1/docs/data-sources/users#id DataSnowflakeUsers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.isConstruct"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_users

dataSnowflakeUsers.DataSnowflakeUsers.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_users

dataSnowflakeUsers.DataSnowflakeUsers.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_users

dataSnowflakeUsers.DataSnowflakeUsers.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.property.users">users</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersList">DataSnowflakeUsersUsersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.property.patternInput">pattern_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.property.pattern">pattern</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `users`<sup>Required</sup> <a name="users" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.property.users"></a>

```python
users: DataSnowflakeUsersUsersList
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersList">DataSnowflakeUsersUsersList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `pattern_input`<sup>Optional</sup> <a name="pattern_input" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.property.patternInput"></a>

```python
pattern_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.property.pattern"></a>

```python
pattern: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsers.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeUsersConfig <a name="DataSnowflakeUsersConfig" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_users

dataSnowflakeUsers.DataSnowflakeUsersConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  pattern: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersConfig.property.pattern">pattern</a></code> | <code>str</code> | Users pattern for which to return metadata. Please refer to LIKE keyword from snowflake documentation : https://docs.snowflake.com/en/sql-reference/sql/show-users.html#parameters. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.1/docs/data-sources/users#id DataSnowflakeUsers#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersConfig.property.pattern"></a>

```python
pattern: str
```

- *Type:* str

Users pattern for which to return metadata. Please refer to LIKE keyword from snowflake documentation : https://docs.snowflake.com/en/sql-reference/sql/show-users.html#parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.1/docs/data-sources/users#pattern DataSnowflakeUsers#pattern}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.1/docs/data-sources/users#id DataSnowflakeUsers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataSnowflakeUsersUsers <a name="DataSnowflakeUsersUsers" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsers.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_users

dataSnowflakeUsers.DataSnowflakeUsersUsers()
```


## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakeUsersUsersList <a name="DataSnowflakeUsersUsersList" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_users

dataSnowflakeUsers.DataSnowflakeUsersUsersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSnowflakeUsersUsersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSnowflakeUsersUsersOutputReference <a name="DataSnowflakeUsersUsersOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_users

dataSnowflakeUsers.DataSnowflakeUsersUsersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersOutputReference.property.defaultNamespace">default_namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersOutputReference.property.defaultRole">default_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersOutputReference.property.defaultSecondaryRoles">default_secondary_roles</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersOutputReference.property.defaultWarehouse">default_warehouse</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersOutputReference.property.disabled">disabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersOutputReference.property.firstName">first_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersOutputReference.property.hasRsaPublicKey">has_rsa_public_key</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersOutputReference.property.lastName">last_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersOutputReference.property.loginName">login_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsers">DataSnowflakeUsersUsers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `default_namespace`<sup>Required</sup> <a name="default_namespace" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersOutputReference.property.defaultNamespace"></a>

```python
default_namespace: str
```

- *Type:* str

---

##### `default_role`<sup>Required</sup> <a name="default_role" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersOutputReference.property.defaultRole"></a>

```python
default_role: str
```

- *Type:* str

---

##### `default_secondary_roles`<sup>Required</sup> <a name="default_secondary_roles" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersOutputReference.property.defaultSecondaryRoles"></a>

```python
default_secondary_roles: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_warehouse`<sup>Required</sup> <a name="default_warehouse" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersOutputReference.property.defaultWarehouse"></a>

```python
default_warehouse: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersOutputReference.property.disabled"></a>

```python
disabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `first_name`<sup>Required</sup> <a name="first_name" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersOutputReference.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

---

##### `has_rsa_public_key`<sup>Required</sup> <a name="has_rsa_public_key" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersOutputReference.property.hasRsaPublicKey"></a>

```python
has_rsa_public_key: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `last_name`<sup>Required</sup> <a name="last_name" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersOutputReference.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

---

##### `login_name`<sup>Required</sup> <a name="login_name" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersOutputReference.property.loginName"></a>

```python
login_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsersOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeUsersUsers
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeUsers.DataSnowflakeUsersUsers">DataSnowflakeUsersUsers</a>

---



