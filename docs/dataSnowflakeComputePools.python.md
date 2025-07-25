# `dataSnowflakeComputePools` Submodule <a name="`dataSnowflakeComputePools` Submodule" id="@cdktf/provider-snowflake.dataSnowflakeComputePools"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeComputePools <a name="DataSnowflakeComputePools" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/data-sources/compute_pools snowflake_compute_pools}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_compute_pools

dataSnowflakeComputePools.DataSnowflakeComputePools(
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
  like: str = None,
  limit: DataSnowflakeComputePoolsLimit = None,
  starts_with: str = None,
  with_describe: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/data-sources/compute_pools#id DataSnowflakeComputePools#id}. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.Initializer.parameter.like">like</a></code> | <code>str</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.Initializer.parameter.limit">limit</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsLimit">DataSnowflakeComputePoolsLimit</a></code> | limit block. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.Initializer.parameter.startsWith">starts_with</a></code> | <code>str</code> | Filters the output with **case-sensitive** characters indicating the beginning of the object name. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.Initializer.parameter.withDescribe">with_describe</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | (Default: `true`) Runs DESC COMPUTE POOL for each compute pool returned by SHOW COMPUTE POOLS. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/data-sources/compute_pools#id DataSnowflakeComputePools#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `like`<sup>Optional</sup> <a name="like" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.Initializer.parameter.like"></a>

- *Type:* str

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/data-sources/compute_pools#like DataSnowflakeComputePools#like}

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.Initializer.parameter.limit"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsLimit">DataSnowflakeComputePoolsLimit</a>

limit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/data-sources/compute_pools#limit DataSnowflakeComputePools#limit}

---

##### `starts_with`<sup>Optional</sup> <a name="starts_with" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.Initializer.parameter.startsWith"></a>

- *Type:* str

Filters the output with **case-sensitive** characters indicating the beginning of the object name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/data-sources/compute_pools#starts_with DataSnowflakeComputePools#starts_with}

---

##### `with_describe`<sup>Optional</sup> <a name="with_describe" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.Initializer.parameter.withDescribe"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

(Default: `true`) Runs DESC COMPUTE POOL for each compute pool returned by SHOW COMPUTE POOLS.

The output of describe is saved to the description field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/data-sources/compute_pools#with_describe DataSnowflakeComputePools#with_describe}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.putLimit">put_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.resetLike">reset_like</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.resetLimit">reset_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.resetStartsWith">reset_starts_with</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.resetWithDescribe">reset_with_describe</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_limit` <a name="put_limit" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.putLimit"></a>

```python
def put_limit(
  rows: typing.Union[int, float],
  from: str = None
) -> None
```

###### `rows`<sup>Required</sup> <a name="rows" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.putLimit.parameter.rows"></a>

- *Type:* typing.Union[int, float]

The maximum number of rows to return.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/data-sources/compute_pools#rows DataSnowflakeComputePools#rows}

---

###### `from`<sup>Optional</sup> <a name="from" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.putLimit.parameter.from"></a>

- *Type:* str

Specifies a **case-sensitive** pattern that is used to match object name.

After the first match, the limit on the number of rows will be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/data-sources/compute_pools#from DataSnowflakeComputePools#from}

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_like` <a name="reset_like" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.resetLike"></a>

```python
def reset_like() -> None
```

##### `reset_limit` <a name="reset_limit" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.resetLimit"></a>

```python
def reset_limit() -> None
```

##### `reset_starts_with` <a name="reset_starts_with" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.resetStartsWith"></a>

```python
def reset_starts_with() -> None
```

##### `reset_with_describe` <a name="reset_with_describe" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.resetWithDescribe"></a>

```python
def reset_with_describe() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataSnowflakeComputePools resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.isConstruct"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_compute_pools

dataSnowflakeComputePools.DataSnowflakeComputePools.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_compute_pools

dataSnowflakeComputePools.DataSnowflakeComputePools.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_compute_pools

dataSnowflakeComputePools.DataSnowflakeComputePools.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_compute_pools

dataSnowflakeComputePools.DataSnowflakeComputePools.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataSnowflakeComputePools resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataSnowflakeComputePools to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataSnowflakeComputePools that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/data-sources/compute_pools#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataSnowflakeComputePools to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.property.computePools">compute_pools</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsList">DataSnowflakeComputePoolsComputePoolsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.property.limit">limit</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsLimitOutputReference">DataSnowflakeComputePoolsLimitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.property.likeInput">like_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.property.limitInput">limit_input</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsLimit">DataSnowflakeComputePoolsLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.property.startsWithInput">starts_with_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.property.withDescribeInput">with_describe_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.property.like">like</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.property.startsWith">starts_with</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.property.withDescribe">with_describe</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `compute_pools`<sup>Required</sup> <a name="compute_pools" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.property.computePools"></a>

```python
compute_pools: DataSnowflakeComputePoolsComputePoolsList
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsList">DataSnowflakeComputePoolsComputePoolsList</a>

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.property.limit"></a>

```python
limit: DataSnowflakeComputePoolsLimitOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsLimitOutputReference">DataSnowflakeComputePoolsLimitOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `like_input`<sup>Optional</sup> <a name="like_input" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.property.likeInput"></a>

```python
like_input: str
```

- *Type:* str

---

##### `limit_input`<sup>Optional</sup> <a name="limit_input" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.property.limitInput"></a>

```python
limit_input: DataSnowflakeComputePoolsLimit
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsLimit">DataSnowflakeComputePoolsLimit</a>

---

##### `starts_with_input`<sup>Optional</sup> <a name="starts_with_input" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.property.startsWithInput"></a>

```python
starts_with_input: str
```

- *Type:* str

---

##### `with_describe_input`<sup>Optional</sup> <a name="with_describe_input" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.property.withDescribeInput"></a>

```python
with_describe_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `like`<sup>Required</sup> <a name="like" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.property.like"></a>

```python
like: str
```

- *Type:* str

---

##### `starts_with`<sup>Required</sup> <a name="starts_with" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.property.startsWith"></a>

```python
starts_with: str
```

- *Type:* str

---

##### `with_describe`<sup>Required</sup> <a name="with_describe" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.property.withDescribe"></a>

```python
with_describe: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePools.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeComputePoolsComputePools <a name="DataSnowflakeComputePoolsComputePools" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePools"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePools.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_compute_pools

dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePools()
```


### DataSnowflakeComputePoolsComputePoolsDescribeOutput <a name="DataSnowflakeComputePoolsComputePoolsDescribeOutput" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutput.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_compute_pools

dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutput()
```


### DataSnowflakeComputePoolsComputePoolsShowOutput <a name="DataSnowflakeComputePoolsComputePoolsShowOutput" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutput.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_compute_pools

dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutput()
```


### DataSnowflakeComputePoolsConfig <a name="DataSnowflakeComputePoolsConfig" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_compute_pools

dataSnowflakeComputePools.DataSnowflakeComputePoolsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  like: str = None,
  limit: DataSnowflakeComputePoolsLimit = None,
  starts_with: str = None,
  with_describe: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/data-sources/compute_pools#id DataSnowflakeComputePools#id}. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsConfig.property.like">like</a></code> | <code>str</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsConfig.property.limit">limit</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsLimit">DataSnowflakeComputePoolsLimit</a></code> | limit block. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsConfig.property.startsWith">starts_with</a></code> | <code>str</code> | Filters the output with **case-sensitive** characters indicating the beginning of the object name. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsConfig.property.withDescribe">with_describe</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | (Default: `true`) Runs DESC COMPUTE POOL for each compute pool returned by SHOW COMPUTE POOLS. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/data-sources/compute_pools#id DataSnowflakeComputePools#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `like`<sup>Optional</sup> <a name="like" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsConfig.property.like"></a>

```python
like: str
```

- *Type:* str

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/data-sources/compute_pools#like DataSnowflakeComputePools#like}

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsConfig.property.limit"></a>

```python
limit: DataSnowflakeComputePoolsLimit
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsLimit">DataSnowflakeComputePoolsLimit</a>

limit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/data-sources/compute_pools#limit DataSnowflakeComputePools#limit}

---

##### `starts_with`<sup>Optional</sup> <a name="starts_with" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsConfig.property.startsWith"></a>

```python
starts_with: str
```

- *Type:* str

Filters the output with **case-sensitive** characters indicating the beginning of the object name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/data-sources/compute_pools#starts_with DataSnowflakeComputePools#starts_with}

---

##### `with_describe`<sup>Optional</sup> <a name="with_describe" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsConfig.property.withDescribe"></a>

```python
with_describe: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

(Default: `true`) Runs DESC COMPUTE POOL for each compute pool returned by SHOW COMPUTE POOLS.

The output of describe is saved to the description field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/data-sources/compute_pools#with_describe DataSnowflakeComputePools#with_describe}

---

### DataSnowflakeComputePoolsLimit <a name="DataSnowflakeComputePoolsLimit" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsLimit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsLimit.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_compute_pools

dataSnowflakeComputePools.DataSnowflakeComputePoolsLimit(
  rows: typing.Union[int, float],
  from: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsLimit.property.rows">rows</a></code> | <code>typing.Union[int, float]</code> | The maximum number of rows to return. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsLimit.property.from">from</a></code> | <code>str</code> | Specifies a **case-sensitive** pattern that is used to match object name. |

---

##### `rows`<sup>Required</sup> <a name="rows" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsLimit.property.rows"></a>

```python
rows: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of rows to return.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/data-sources/compute_pools#rows DataSnowflakeComputePools#rows}

---

##### `from`<sup>Optional</sup> <a name="from" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsLimit.property.from"></a>

```python
from: str
```

- *Type:* str

Specifies a **case-sensitive** pattern that is used to match object name.

After the first match, the limit on the number of rows will be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/data-sources/compute_pools#from DataSnowflakeComputePools#from}

---

## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakeComputePoolsComputePoolsDescribeOutputList <a name="DataSnowflakeComputePoolsComputePoolsDescribeOutputList" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_compute_pools

dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference <a name="DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_compute_pools

dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference.property.activeNodes">active_nodes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference.property.application">application</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference.property.autoResume">auto_resume</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference.property.autoSuspendSecs">auto_suspend_secs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference.property.errorCode">error_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference.property.idleNodes">idle_nodes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference.property.instanceFamily">instance_family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference.property.isExclusive">is_exclusive</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference.property.maxNodes">max_nodes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference.property.minNodes">min_nodes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference.property.numJobs">num_jobs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference.property.numServices">num_services</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference.property.resumedOn">resumed_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference.property.statusMessage">status_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference.property.targetNodes">target_nodes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference.property.updatedOn">updated_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutput">DataSnowflakeComputePoolsComputePoolsDescribeOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `active_nodes`<sup>Required</sup> <a name="active_nodes" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference.property.activeNodes"></a>

```python
active_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `application`<sup>Required</sup> <a name="application" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference.property.application"></a>

```python
application: str
```

- *Type:* str

---

##### `auto_resume`<sup>Required</sup> <a name="auto_resume" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference.property.autoResume"></a>

```python
auto_resume: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `auto_suspend_secs`<sup>Required</sup> <a name="auto_suspend_secs" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference.property.autoSuspendSecs"></a>

```python
auto_suspend_secs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `error_code`<sup>Required</sup> <a name="error_code" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference.property.errorCode"></a>

```python
error_code: str
```

- *Type:* str

---

##### `idle_nodes`<sup>Required</sup> <a name="idle_nodes" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference.property.idleNodes"></a>

```python
idle_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_family`<sup>Required</sup> <a name="instance_family" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference.property.instanceFamily"></a>

```python
instance_family: str
```

- *Type:* str

---

##### `is_exclusive`<sup>Required</sup> <a name="is_exclusive" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference.property.isExclusive"></a>

```python
is_exclusive: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `max_nodes`<sup>Required</sup> <a name="max_nodes" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference.property.maxNodes"></a>

```python
max_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_nodes`<sup>Required</sup> <a name="min_nodes" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference.property.minNodes"></a>

```python
min_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `num_jobs`<sup>Required</sup> <a name="num_jobs" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference.property.numJobs"></a>

```python
num_jobs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `num_services`<sup>Required</sup> <a name="num_services" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference.property.numServices"></a>

```python
num_services: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `resumed_on`<sup>Required</sup> <a name="resumed_on" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference.property.resumedOn"></a>

```python
resumed_on: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `status_message`<sup>Required</sup> <a name="status_message" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference.property.statusMessage"></a>

```python
status_message: str
```

- *Type:* str

---

##### `target_nodes`<sup>Required</sup> <a name="target_nodes" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference.property.targetNodes"></a>

```python
target_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `updated_on`<sup>Required</sup> <a name="updated_on" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference.property.updatedOn"></a>

```python
updated_on: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeComputePoolsComputePoolsDescribeOutput
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutput">DataSnowflakeComputePoolsComputePoolsDescribeOutput</a>

---


### DataSnowflakeComputePoolsComputePoolsList <a name="DataSnowflakeComputePoolsComputePoolsList" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_compute_pools

dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSnowflakeComputePoolsComputePoolsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSnowflakeComputePoolsComputePoolsOutputReference <a name="DataSnowflakeComputePoolsComputePoolsOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_compute_pools

dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsOutputReference.property.describeOutput">describe_output</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputList">DataSnowflakeComputePoolsComputePoolsDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsOutputReference.property.showOutput">show_output</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputList">DataSnowflakeComputePoolsComputePoolsShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePools">DataSnowflakeComputePoolsComputePools</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `describe_output`<sup>Required</sup> <a name="describe_output" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsOutputReference.property.describeOutput"></a>

```python
describe_output: DataSnowflakeComputePoolsComputePoolsDescribeOutputList
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsDescribeOutputList">DataSnowflakeComputePoolsComputePoolsDescribeOutputList</a>

---

##### `show_output`<sup>Required</sup> <a name="show_output" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsOutputReference.property.showOutput"></a>

```python
show_output: DataSnowflakeComputePoolsComputePoolsShowOutputList
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputList">DataSnowflakeComputePoolsComputePoolsShowOutputList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeComputePoolsComputePools
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePools">DataSnowflakeComputePoolsComputePools</a>

---


### DataSnowflakeComputePoolsComputePoolsShowOutputList <a name="DataSnowflakeComputePoolsComputePoolsShowOutputList" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_compute_pools

dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference <a name="DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_compute_pools

dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference.property.activeNodes">active_nodes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference.property.application">application</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference.property.autoResume">auto_resume</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference.property.autoSuspendSecs">auto_suspend_secs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference.property.idleNodes">idle_nodes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference.property.instanceFamily">instance_family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference.property.isExclusive">is_exclusive</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference.property.maxNodes">max_nodes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference.property.minNodes">min_nodes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference.property.numJobs">num_jobs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference.property.numServices">num_services</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference.property.resumedOn">resumed_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference.property.targetNodes">target_nodes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference.property.updatedOn">updated_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutput">DataSnowflakeComputePoolsComputePoolsShowOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `active_nodes`<sup>Required</sup> <a name="active_nodes" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference.property.activeNodes"></a>

```python
active_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `application`<sup>Required</sup> <a name="application" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference.property.application"></a>

```python
application: str
```

- *Type:* str

---

##### `auto_resume`<sup>Required</sup> <a name="auto_resume" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference.property.autoResume"></a>

```python
auto_resume: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `auto_suspend_secs`<sup>Required</sup> <a name="auto_suspend_secs" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference.property.autoSuspendSecs"></a>

```python
auto_suspend_secs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `idle_nodes`<sup>Required</sup> <a name="idle_nodes" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference.property.idleNodes"></a>

```python
idle_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_family`<sup>Required</sup> <a name="instance_family" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference.property.instanceFamily"></a>

```python
instance_family: str
```

- *Type:* str

---

##### `is_exclusive`<sup>Required</sup> <a name="is_exclusive" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference.property.isExclusive"></a>

```python
is_exclusive: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `max_nodes`<sup>Required</sup> <a name="max_nodes" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference.property.maxNodes"></a>

```python
max_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_nodes`<sup>Required</sup> <a name="min_nodes" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference.property.minNodes"></a>

```python
min_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `num_jobs`<sup>Required</sup> <a name="num_jobs" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference.property.numJobs"></a>

```python
num_jobs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `num_services`<sup>Required</sup> <a name="num_services" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference.property.numServices"></a>

```python
num_services: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `resumed_on`<sup>Required</sup> <a name="resumed_on" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference.property.resumedOn"></a>

```python
resumed_on: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `target_nodes`<sup>Required</sup> <a name="target_nodes" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference.property.targetNodes"></a>

```python
target_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `updated_on`<sup>Required</sup> <a name="updated_on" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference.property.updatedOn"></a>

```python
updated_on: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutputOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeComputePoolsComputePoolsShowOutput
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsComputePoolsShowOutput">DataSnowflakeComputePoolsComputePoolsShowOutput</a>

---


### DataSnowflakeComputePoolsLimitOutputReference <a name="DataSnowflakeComputePoolsLimitOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsLimitOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_compute_pools

dataSnowflakeComputePools.DataSnowflakeComputePoolsLimitOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsLimitOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsLimitOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsLimitOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsLimitOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsLimitOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsLimitOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsLimitOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsLimitOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsLimitOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsLimitOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsLimitOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsLimitOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsLimitOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsLimitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsLimitOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsLimitOutputReference.resetFrom">reset_from</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsLimitOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsLimitOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsLimitOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsLimitOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsLimitOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsLimitOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsLimitOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsLimitOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsLimitOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsLimitOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsLimitOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsLimitOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsLimitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsLimitOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_from` <a name="reset_from" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsLimitOutputReference.resetFrom"></a>

```python
def reset_from() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsLimitOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsLimitOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsLimitOutputReference.property.fromInput">from_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsLimitOutputReference.property.rowsInput">rows_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsLimitOutputReference.property.from">from</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsLimitOutputReference.property.rows">rows</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsLimitOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsLimit">DataSnowflakeComputePoolsLimit</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsLimitOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsLimitOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `from_input`<sup>Optional</sup> <a name="from_input" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsLimitOutputReference.property.fromInput"></a>

```python
from_input: str
```

- *Type:* str

---

##### `rows_input`<sup>Optional</sup> <a name="rows_input" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsLimitOutputReference.property.rowsInput"></a>

```python
rows_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsLimitOutputReference.property.from"></a>

```python
from: str
```

- *Type:* str

---

##### `rows`<sup>Required</sup> <a name="rows" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsLimitOutputReference.property.rows"></a>

```python
rows: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsLimitOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeComputePoolsLimit
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeComputePools.DataSnowflakeComputePoolsLimit">DataSnowflakeComputePoolsLimit</a>

---



