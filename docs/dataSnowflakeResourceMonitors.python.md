# `dataSnowflakeResourceMonitors` Submodule <a name="`dataSnowflakeResourceMonitors` Submodule" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeResourceMonitors <a name="DataSnowflakeResourceMonitors" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/data-sources/resource_monitors snowflake_resource_monitors}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_resource_monitors

dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors(
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
  like: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/data-sources/resource_monitors#id DataSnowflakeResourceMonitors#id}. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.Initializer.parameter.like">like</a></code> | <code>str</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/data-sources/resource_monitors#id DataSnowflakeResourceMonitors#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `like`<sup>Optional</sup> <a name="like" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.Initializer.parameter.like"></a>

- *Type:* str

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/data-sources/resource_monitors#like DataSnowflakeResourceMonitors#like}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.resetLike">reset_like</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_like` <a name="reset_like" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.resetLike"></a>

```python
def reset_like() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataSnowflakeResourceMonitors resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.isConstruct"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_resource_monitors

dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_resource_monitors

dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_resource_monitors

dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_resource_monitors

dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataSnowflakeResourceMonitors resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataSnowflakeResourceMonitors to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataSnowflakeResourceMonitors that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/data-sources/resource_monitors#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataSnowflakeResourceMonitors to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.resourceMonitors">resource_monitors</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsList">DataSnowflakeResourceMonitorsResourceMonitorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.likeInput">like_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.like">like</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `resource_monitors`<sup>Required</sup> <a name="resource_monitors" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.resourceMonitors"></a>

```python
resource_monitors: DataSnowflakeResourceMonitorsResourceMonitorsList
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsList">DataSnowflakeResourceMonitorsResourceMonitorsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `like_input`<sup>Optional</sup> <a name="like_input" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.likeInput"></a>

```python
like_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `like`<sup>Required</sup> <a name="like" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.like"></a>

```python
like: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitors.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeResourceMonitorsConfig <a name="DataSnowflakeResourceMonitorsConfig" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_resource_monitors

dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  like: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/data-sources/resource_monitors#id DataSnowflakeResourceMonitors#id}. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsConfig.property.like">like</a></code> | <code>str</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/data-sources/resource_monitors#id DataSnowflakeResourceMonitors#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `like`<sup>Optional</sup> <a name="like" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsConfig.property.like"></a>

```python
like: str
```

- *Type:* str

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/data-sources/resource_monitors#like DataSnowflakeResourceMonitors#like}

---

### DataSnowflakeResourceMonitorsResourceMonitors <a name="DataSnowflakeResourceMonitorsResourceMonitors" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitors.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_resource_monitors

dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitors()
```


### DataSnowflakeResourceMonitorsResourceMonitorsShowOutput <a name="DataSnowflakeResourceMonitorsResourceMonitorsShowOutput" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutput.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_resource_monitors

dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutput()
```


## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakeResourceMonitorsResourceMonitorsList <a name="DataSnowflakeResourceMonitorsResourceMonitorsList" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_resource_monitors

dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSnowflakeResourceMonitorsResourceMonitorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSnowflakeResourceMonitorsResourceMonitorsOutputReference <a name="DataSnowflakeResourceMonitorsResourceMonitorsOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_resource_monitors

dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.property.showOutput">show_output</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList">DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitors">DataSnowflakeResourceMonitorsResourceMonitors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `show_output`<sup>Required</sup> <a name="show_output" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.property.showOutput"></a>

```python
show_output: DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList">DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeResourceMonitorsResourceMonitors
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitors">DataSnowflakeResourceMonitorsResourceMonitors</a>

---


### DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList <a name="DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_resource_monitors

dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference <a name="DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_resource_monitors

dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.creditQuota">credit_quota</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.endTime">end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.frequency">frequency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.remainingCredits">remaining_credits</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.suspendAt">suspend_at</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.suspendImmediateAt">suspend_immediate_at</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.usedCredits">used_credits</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutput">DataSnowflakeResourceMonitorsResourceMonitorsShowOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `credit_quota`<sup>Required</sup> <a name="credit_quota" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.creditQuota"></a>

```python
credit_quota: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.frequency"></a>

```python
frequency: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `remaining_credits`<sup>Required</sup> <a name="remaining_credits" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.remainingCredits"></a>

```python
remaining_credits: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `suspend_at`<sup>Required</sup> <a name="suspend_at" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.suspendAt"></a>

```python
suspend_at: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `suspend_immediate_at`<sup>Required</sup> <a name="suspend_immediate_at" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.suspendImmediateAt"></a>

```python
suspend_immediate_at: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `used_credits`<sup>Required</sup> <a name="used_credits" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.usedCredits"></a>

```python
used_credits: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutputOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeResourceMonitorsResourceMonitorsShowOutput
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeResourceMonitors.DataSnowflakeResourceMonitorsResourceMonitorsShowOutput">DataSnowflakeResourceMonitorsResourceMonitorsShowOutput</a>

---



