# `dataSnowflakeSystemGenerateScimAccessToken` Submodule <a name="`dataSnowflakeSystemGenerateScimAccessToken` Submodule" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeSystemGenerateScimAccessToken <a name="DataSnowflakeSystemGenerateScimAccessToken" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/data-sources/system_generate_scim_access_token snowflake_system_generate_scim_access_token}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_system_generate_scim_access_token

dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  integration_name: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.Initializer.parameter.integrationName">integration_name</a></code> | <code>str</code> | SCIM Integration Name. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/data-sources/system_generate_scim_access_token#id DataSnowflakeSystemGenerateScimAccessToken#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `integration_name`<sup>Required</sup> <a name="integration_name" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.Initializer.parameter.integrationName"></a>

- *Type:* str

SCIM Integration Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/data-sources/system_generate_scim_access_token#integration_name DataSnowflakeSystemGenerateScimAccessToken#integration_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/data-sources/system_generate_scim_access_token#id DataSnowflakeSystemGenerateScimAccessToken#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataSnowflakeSystemGenerateScimAccessToken resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.isConstruct"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_system_generate_scim_access_token

dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_system_generate_scim_access_token

dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_system_generate_scim_access_token

dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_system_generate_scim_access_token

dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataSnowflakeSystemGenerateScimAccessToken resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataSnowflakeSystemGenerateScimAccessToken to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataSnowflakeSystemGenerateScimAccessToken that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/data-sources/system_generate_scim_access_token#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataSnowflakeSystemGenerateScimAccessToken to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.property.accessToken">access_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.property.integrationNameInput">integration_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.property.integrationName">integration_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `access_token`<sup>Required</sup> <a name="access_token" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.property.accessToken"></a>

```python
access_token: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `integration_name_input`<sup>Optional</sup> <a name="integration_name_input" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.property.integrationNameInput"></a>

```python
integration_name_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `integration_name`<sup>Required</sup> <a name="integration_name" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.property.integrationName"></a>

```python
integration_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessToken.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeSystemGenerateScimAccessTokenConfig <a name="DataSnowflakeSystemGenerateScimAccessTokenConfig" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessTokenConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_system_generate_scim_access_token

dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessTokenConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  integration_name: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessTokenConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessTokenConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessTokenConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessTokenConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessTokenConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessTokenConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessTokenConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessTokenConfig.property.integrationName">integration_name</a></code> | <code>str</code> | SCIM Integration Name. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessTokenConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/data-sources/system_generate_scim_access_token#id DataSnowflakeSystemGenerateScimAccessToken#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessTokenConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessTokenConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessTokenConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessTokenConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessTokenConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessTokenConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessTokenConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `integration_name`<sup>Required</sup> <a name="integration_name" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessTokenConfig.property.integrationName"></a>

```python
integration_name: str
```

- *Type:* str

SCIM Integration Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/data-sources/system_generate_scim_access_token#integration_name DataSnowflakeSystemGenerateScimAccessToken#integration_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeSystemGenerateScimAccessToken.DataSnowflakeSystemGenerateScimAccessTokenConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/data-sources/system_generate_scim_access_token#id DataSnowflakeSystemGenerateScimAccessToken#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



