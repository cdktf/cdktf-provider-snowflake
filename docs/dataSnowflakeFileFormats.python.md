# `dataSnowflakeFileFormats` Submodule <a name="`dataSnowflakeFileFormats` Submodule" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeFileFormats <a name="DataSnowflakeFileFormats" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/data-sources/file_formats snowflake_file_formats}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_file_formats

dataSnowflakeFileFormats.DataSnowflakeFileFormats(
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
  schema: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.Initializer.parameter.database">database</a></code> | <code>str</code> | The database from which to return the schemas from. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.Initializer.parameter.schema">schema</a></code> | <code>str</code> | The schema from which to return the file formats from. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/data-sources/file_formats#id DataSnowflakeFileFormats#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.Initializer.parameter.database"></a>

- *Type:* str

The database from which to return the schemas from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/data-sources/file_formats#database DataSnowflakeFileFormats#database}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.Initializer.parameter.schema"></a>

- *Type:* str

The schema from which to return the file formats from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/data-sources/file_formats#schema DataSnowflakeFileFormats#schema}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/data-sources/file_formats#id DataSnowflakeFileFormats#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataSnowflakeFileFormats resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.isConstruct"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_file_formats

dataSnowflakeFileFormats.DataSnowflakeFileFormats.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_file_formats

dataSnowflakeFileFormats.DataSnowflakeFileFormats.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_file_formats

dataSnowflakeFileFormats.DataSnowflakeFileFormats.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_file_formats

dataSnowflakeFileFormats.DataSnowflakeFileFormats.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataSnowflakeFileFormats resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataSnowflakeFileFormats to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataSnowflakeFileFormats that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/data-sources/file_formats#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataSnowflakeFileFormats to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.fileFormats">file_formats</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList">DataSnowflakeFileFormatsFileFormatsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.schemaInput">schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.schema">schema</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `file_formats`<sup>Required</sup> <a name="file_formats" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.fileFormats"></a>

```python
file_formats: DataSnowflakeFileFormatsFileFormatsList
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList">DataSnowflakeFileFormatsFileFormatsList</a>

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.schemaInput"></a>

```python
schema_input: str
```

- *Type:* str

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.schema"></a>

```python
schema: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormats.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeFileFormatsConfig <a name="DataSnowflakeFileFormatsConfig" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_file_formats

dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  database: str,
  schema: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.database">database</a></code> | <code>str</code> | The database from which to return the schemas from. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.schema">schema</a></code> | <code>str</code> | The schema from which to return the file formats from. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/data-sources/file_formats#id DataSnowflakeFileFormats#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.database"></a>

```python
database: str
```

- *Type:* str

The database from which to return the schemas from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/data-sources/file_formats#database DataSnowflakeFileFormats#database}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.schema"></a>

```python
schema: str
```

- *Type:* str

The schema from which to return the file formats from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/data-sources/file_formats#schema DataSnowflakeFileFormats#schema}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/data-sources/file_formats#id DataSnowflakeFileFormats#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataSnowflakeFileFormatsFileFormats <a name="DataSnowflakeFileFormatsFileFormats" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormats"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormats.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_file_formats

dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormats()
```


## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakeFileFormatsFileFormatsList <a name="DataSnowflakeFileFormatsFileFormatsList" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_file_formats

dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSnowflakeFileFormatsFileFormatsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSnowflakeFileFormatsFileFormatsOutputReference <a name="DataSnowflakeFileFormatsFileFormatsOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_file_formats

dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.property.formatType">format_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.property.schema">schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormats">DataSnowflakeFileFormatsFileFormats</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `format_type`<sup>Required</sup> <a name="format_type" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.property.formatType"></a>

```python
format_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.property.schema"></a>

```python
schema: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormatsOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeFileFormatsFileFormats
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeFileFormats.DataSnowflakeFileFormatsFileFormats">DataSnowflakeFileFormatsFileFormats</a>

---



