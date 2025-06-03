# `dataSnowflakeAccountRoles` Submodule <a name="`dataSnowflakeAccountRoles` Submodule" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeAccountRoles <a name="DataSnowflakeAccountRoles" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/data-sources/account_roles snowflake_account_roles}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_account_roles

dataSnowflakeAccountRoles.DataSnowflakeAccountRoles(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  in_class: str = None,
  like: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/data-sources/account_roles#id DataSnowflakeAccountRoles#id}. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.Initializer.parameter.inClass">in_class</a></code> | <code>str</code> | Filters the SHOW GRANTS output by class name. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.Initializer.parameter.like">like</a></code> | <code>str</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/data-sources/account_roles#id DataSnowflakeAccountRoles#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `in_class`<sup>Optional</sup> <a name="in_class" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.Initializer.parameter.inClass"></a>

- *Type:* str

Filters the SHOW GRANTS output by class name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/data-sources/account_roles#in_class DataSnowflakeAccountRoles#in_class}

---

##### `like`<sup>Optional</sup> <a name="like" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.Initializer.parameter.like"></a>

- *Type:* str

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/data-sources/account_roles#like DataSnowflakeAccountRoles#like}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.resetInClass">reset_in_class</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.resetLike">reset_like</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_in_class` <a name="reset_in_class" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.resetInClass"></a>

```python
def reset_in_class() -> None
```

##### `reset_like` <a name="reset_like" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.resetLike"></a>

```python
def reset_like() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataSnowflakeAccountRoles resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.isConstruct"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_account_roles

dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_account_roles

dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_account_roles

dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_account_roles

dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataSnowflakeAccountRoles resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataSnowflakeAccountRoles to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataSnowflakeAccountRoles that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/data-sources/account_roles#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataSnowflakeAccountRoles to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.property.accountRoles">account_roles</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesList">DataSnowflakeAccountRolesAccountRolesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.property.inClassInput">in_class_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.property.likeInput">like_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.property.inClass">in_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.property.like">like</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `account_roles`<sup>Required</sup> <a name="account_roles" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.property.accountRoles"></a>

```python
account_roles: DataSnowflakeAccountRolesAccountRolesList
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesList">DataSnowflakeAccountRolesAccountRolesList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `in_class_input`<sup>Optional</sup> <a name="in_class_input" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.property.inClassInput"></a>

```python
in_class_input: str
```

- *Type:* str

---

##### `like_input`<sup>Optional</sup> <a name="like_input" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.property.likeInput"></a>

```python
like_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `in_class`<sup>Required</sup> <a name="in_class" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.property.inClass"></a>

```python
in_class: str
```

- *Type:* str

---

##### `like`<sup>Required</sup> <a name="like" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.property.like"></a>

```python
like: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRoles.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeAccountRolesAccountRoles <a name="DataSnowflakeAccountRolesAccountRoles" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRoles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRoles.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_account_roles

dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRoles()
```


### DataSnowflakeAccountRolesAccountRolesShowOutput <a name="DataSnowflakeAccountRolesAccountRolesShowOutput" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutput.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_account_roles

dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutput()
```


### DataSnowflakeAccountRolesConfig <a name="DataSnowflakeAccountRolesConfig" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_account_roles

dataSnowflakeAccountRoles.DataSnowflakeAccountRolesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  in_class: str = None,
  like: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/data-sources/account_roles#id DataSnowflakeAccountRoles#id}. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesConfig.property.inClass">in_class</a></code> | <code>str</code> | Filters the SHOW GRANTS output by class name. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesConfig.property.like">like</a></code> | <code>str</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/data-sources/account_roles#id DataSnowflakeAccountRoles#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `in_class`<sup>Optional</sup> <a name="in_class" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesConfig.property.inClass"></a>

```python
in_class: str
```

- *Type:* str

Filters the SHOW GRANTS output by class name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/data-sources/account_roles#in_class DataSnowflakeAccountRoles#in_class}

---

##### `like`<sup>Optional</sup> <a name="like" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesConfig.property.like"></a>

```python
like: str
```

- *Type:* str

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/data-sources/account_roles#like DataSnowflakeAccountRoles#like}

---

## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakeAccountRolesAccountRolesList <a name="DataSnowflakeAccountRolesAccountRolesList" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_account_roles

dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSnowflakeAccountRolesAccountRolesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSnowflakeAccountRolesAccountRolesOutputReference <a name="DataSnowflakeAccountRolesAccountRolesOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_account_roles

dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesOutputReference.property.showOutput">show_output</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputList">DataSnowflakeAccountRolesAccountRolesShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRoles">DataSnowflakeAccountRolesAccountRoles</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `show_output`<sup>Required</sup> <a name="show_output" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesOutputReference.property.showOutput"></a>

```python
show_output: DataSnowflakeAccountRolesAccountRolesShowOutputList
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputList">DataSnowflakeAccountRolesAccountRolesShowOutputList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeAccountRolesAccountRoles
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRoles">DataSnowflakeAccountRolesAccountRoles</a>

---


### DataSnowflakeAccountRolesAccountRolesShowOutputList <a name="DataSnowflakeAccountRolesAccountRolesShowOutputList" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_account_roles

dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSnowflakeAccountRolesAccountRolesShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSnowflakeAccountRolesAccountRolesShowOutputOutputReference <a name="DataSnowflakeAccountRolesAccountRolesShowOutputOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_account_roles

dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputOutputReference.property.assignedToUsers">assigned_to_users</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputOutputReference.property.grantedRoles">granted_roles</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputOutputReference.property.grantedToRoles">granted_to_roles</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputOutputReference.property.isCurrent">is_current</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputOutputReference.property.isDefault">is_default</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputOutputReference.property.isInherited">is_inherited</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutput">DataSnowflakeAccountRolesAccountRolesShowOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `assigned_to_users`<sup>Required</sup> <a name="assigned_to_users" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputOutputReference.property.assignedToUsers"></a>

```python
assigned_to_users: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `granted_roles`<sup>Required</sup> <a name="granted_roles" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputOutputReference.property.grantedRoles"></a>

```python
granted_roles: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `granted_to_roles`<sup>Required</sup> <a name="granted_to_roles" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputOutputReference.property.grantedToRoles"></a>

```python
granted_to_roles: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_current`<sup>Required</sup> <a name="is_current" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputOutputReference.property.isCurrent"></a>

```python
is_current: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_default`<sup>Required</sup> <a name="is_default" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputOutputReference.property.isDefault"></a>

```python
is_default: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_inherited`<sup>Required</sup> <a name="is_inherited" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputOutputReference.property.isInherited"></a>

```python
is_inherited: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutputOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeAccountRolesAccountRolesShowOutput
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeAccountRoles.DataSnowflakeAccountRolesAccountRolesShowOutput">DataSnowflakeAccountRolesAccountRolesShowOutput</a>

---



