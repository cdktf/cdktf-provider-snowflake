# `dataSnowflakeServices` Submodule <a name="`dataSnowflakeServices` Submodule" id="@cdktf/provider-snowflake.dataSnowflakeServices"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeServices <a name="DataSnowflakeServices" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/data-sources/services snowflake_services}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_services

dataSnowflakeServices.DataSnowflakeServices(
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
  in: DataSnowflakeServicesIn = None,
  like: str = None,
  limit: DataSnowflakeServicesLimit = None,
  service_type: str = None,
  starts_with: str = None,
  with_describe: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/data-sources/services#id DataSnowflakeServices#id}. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.Initializer.parameter.in">in</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesIn">DataSnowflakeServicesIn</a></code> | in block. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.Initializer.parameter.like">like</a></code> | <code>str</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.Initializer.parameter.limit">limit</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesLimit">DataSnowflakeServicesLimit</a></code> | limit block. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.Initializer.parameter.serviceType">service_type</a></code> | <code>str</code> | (Default: `ALL`) The type filtering of `SHOW SERVICES` results. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.Initializer.parameter.startsWith">starts_with</a></code> | <code>str</code> | Filters the output with **case-sensitive** characters indicating the beginning of the object name. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.Initializer.parameter.withDescribe">with_describe</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | (Default: `true`) Runs DESC SERVICE for each service returned by SHOW SERVICES. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/data-sources/services#id DataSnowflakeServices#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `in`<sup>Optional</sup> <a name="in" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.Initializer.parameter.in"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesIn">DataSnowflakeServicesIn</a>

in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/data-sources/services#in DataSnowflakeServices#in}

---

##### `like`<sup>Optional</sup> <a name="like" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.Initializer.parameter.like"></a>

- *Type:* str

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/data-sources/services#like DataSnowflakeServices#like}

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.Initializer.parameter.limit"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesLimit">DataSnowflakeServicesLimit</a>

limit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/data-sources/services#limit DataSnowflakeServices#limit}

---

##### `service_type`<sup>Optional</sup> <a name="service_type" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.Initializer.parameter.serviceType"></a>

- *Type:* str

(Default: `ALL`) The type filtering of `SHOW SERVICES` results.

`ALL` returns both services and job services. `JOBS_ONLY` returns only job services (`JOB` option in SQL). `SERVICES_ONLY` returns only services (`EXCLUDE_JOBS` option in SQL).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/data-sources/services#service_type DataSnowflakeServices#service_type}

---

##### `starts_with`<sup>Optional</sup> <a name="starts_with" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.Initializer.parameter.startsWith"></a>

- *Type:* str

Filters the output with **case-sensitive** characters indicating the beginning of the object name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/data-sources/services#starts_with DataSnowflakeServices#starts_with}

---

##### `with_describe`<sup>Optional</sup> <a name="with_describe" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.Initializer.parameter.withDescribe"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

(Default: `true`) Runs DESC SERVICE for each service returned by SHOW SERVICES.

The output of describe is saved to the description field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/data-sources/services#with_describe DataSnowflakeServices#with_describe}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.putIn">put_in</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.putLimit">put_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.resetIn">reset_in</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.resetLike">reset_like</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.resetLimit">reset_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.resetServiceType">reset_service_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.resetStartsWith">reset_starts_with</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.resetWithDescribe">reset_with_describe</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_in` <a name="put_in" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.putIn"></a>

```python
def put_in(
  account: typing.Union[bool, IResolvable] = None,
  compute_pool: str = None,
  database: str = None,
  schema: str = None
) -> None
```

###### `account`<sup>Optional</sup> <a name="account" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.putIn.parameter.account"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Returns records for the entire account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/data-sources/services#account DataSnowflakeServices#account}

---

###### `compute_pool`<sup>Optional</sup> <a name="compute_pool" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.putIn.parameter.computePool"></a>

- *Type:* str

Returns records for the specified compute pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/data-sources/services#compute_pool DataSnowflakeServices#compute_pool}

---

###### `database`<sup>Optional</sup> <a name="database" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.putIn.parameter.database"></a>

- *Type:* str

Returns records for the current database in use or for a specified database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/data-sources/services#database DataSnowflakeServices#database}

---

###### `schema`<sup>Optional</sup> <a name="schema" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.putIn.parameter.schema"></a>

- *Type:* str

Returns records for the current schema in use or a specified schema. Use fully qualified name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/data-sources/services#schema DataSnowflakeServices#schema}

---

##### `put_limit` <a name="put_limit" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.putLimit"></a>

```python
def put_limit(
  rows: typing.Union[int, float],
  from: str = None
) -> None
```

###### `rows`<sup>Required</sup> <a name="rows" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.putLimit.parameter.rows"></a>

- *Type:* typing.Union[int, float]

The maximum number of rows to return.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/data-sources/services#rows DataSnowflakeServices#rows}

---

###### `from`<sup>Optional</sup> <a name="from" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.putLimit.parameter.from"></a>

- *Type:* str

Specifies a **case-sensitive** pattern that is used to match object name.

After the first match, the limit on the number of rows will be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/data-sources/services#from DataSnowflakeServices#from}

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_in` <a name="reset_in" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.resetIn"></a>

```python
def reset_in() -> None
```

##### `reset_like` <a name="reset_like" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.resetLike"></a>

```python
def reset_like() -> None
```

##### `reset_limit` <a name="reset_limit" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.resetLimit"></a>

```python
def reset_limit() -> None
```

##### `reset_service_type` <a name="reset_service_type" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.resetServiceType"></a>

```python
def reset_service_type() -> None
```

##### `reset_starts_with` <a name="reset_starts_with" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.resetStartsWith"></a>

```python
def reset_starts_with() -> None
```

##### `reset_with_describe` <a name="reset_with_describe" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.resetWithDescribe"></a>

```python
def reset_with_describe() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataSnowflakeServices resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.isConstruct"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_services

dataSnowflakeServices.DataSnowflakeServices.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_services

dataSnowflakeServices.DataSnowflakeServices.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_services

dataSnowflakeServices.DataSnowflakeServices.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_services

dataSnowflakeServices.DataSnowflakeServices.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataSnowflakeServices resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataSnowflakeServices to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataSnowflakeServices that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/data-sources/services#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataSnowflakeServices to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.property.in">in</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesInOutputReference">DataSnowflakeServicesInOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.property.limit">limit</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesLimitOutputReference">DataSnowflakeServicesLimitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.property.services">services</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesList">DataSnowflakeServicesServicesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.property.inInput">in_input</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesIn">DataSnowflakeServicesIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.property.likeInput">like_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.property.limitInput">limit_input</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesLimit">DataSnowflakeServicesLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.property.serviceTypeInput">service_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.property.startsWithInput">starts_with_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.property.withDescribeInput">with_describe_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.property.like">like</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.property.serviceType">service_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.property.startsWith">starts_with</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.property.withDescribe">with_describe</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `in`<sup>Required</sup> <a name="in" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.property.in"></a>

```python
in: DataSnowflakeServicesInOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesInOutputReference">DataSnowflakeServicesInOutputReference</a>

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.property.limit"></a>

```python
limit: DataSnowflakeServicesLimitOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesLimitOutputReference">DataSnowflakeServicesLimitOutputReference</a>

---

##### `services`<sup>Required</sup> <a name="services" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.property.services"></a>

```python
services: DataSnowflakeServicesServicesList
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesList">DataSnowflakeServicesServicesList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `in_input`<sup>Optional</sup> <a name="in_input" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.property.inInput"></a>

```python
in_input: DataSnowflakeServicesIn
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesIn">DataSnowflakeServicesIn</a>

---

##### `like_input`<sup>Optional</sup> <a name="like_input" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.property.likeInput"></a>

```python
like_input: str
```

- *Type:* str

---

##### `limit_input`<sup>Optional</sup> <a name="limit_input" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.property.limitInput"></a>

```python
limit_input: DataSnowflakeServicesLimit
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesLimit">DataSnowflakeServicesLimit</a>

---

##### `service_type_input`<sup>Optional</sup> <a name="service_type_input" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.property.serviceTypeInput"></a>

```python
service_type_input: str
```

- *Type:* str

---

##### `starts_with_input`<sup>Optional</sup> <a name="starts_with_input" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.property.startsWithInput"></a>

```python
starts_with_input: str
```

- *Type:* str

---

##### `with_describe_input`<sup>Optional</sup> <a name="with_describe_input" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.property.withDescribeInput"></a>

```python
with_describe_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `like`<sup>Required</sup> <a name="like" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.property.like"></a>

```python
like: str
```

- *Type:* str

---

##### `service_type`<sup>Required</sup> <a name="service_type" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.property.serviceType"></a>

```python
service_type: str
```

- *Type:* str

---

##### `starts_with`<sup>Required</sup> <a name="starts_with" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.property.startsWith"></a>

```python
starts_with: str
```

- *Type:* str

---

##### `with_describe`<sup>Required</sup> <a name="with_describe" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.property.withDescribe"></a>

```python
with_describe: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServices.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeServicesConfig <a name="DataSnowflakeServicesConfig" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_services

dataSnowflakeServices.DataSnowflakeServicesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  in: DataSnowflakeServicesIn = None,
  like: str = None,
  limit: DataSnowflakeServicesLimit = None,
  service_type: str = None,
  starts_with: str = None,
  with_describe: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/data-sources/services#id DataSnowflakeServices#id}. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesConfig.property.in">in</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesIn">DataSnowflakeServicesIn</a></code> | in block. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesConfig.property.like">like</a></code> | <code>str</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesConfig.property.limit">limit</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesLimit">DataSnowflakeServicesLimit</a></code> | limit block. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesConfig.property.serviceType">service_type</a></code> | <code>str</code> | (Default: `ALL`) The type filtering of `SHOW SERVICES` results. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesConfig.property.startsWith">starts_with</a></code> | <code>str</code> | Filters the output with **case-sensitive** characters indicating the beginning of the object name. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesConfig.property.withDescribe">with_describe</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | (Default: `true`) Runs DESC SERVICE for each service returned by SHOW SERVICES. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/data-sources/services#id DataSnowflakeServices#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `in`<sup>Optional</sup> <a name="in" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesConfig.property.in"></a>

```python
in: DataSnowflakeServicesIn
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesIn">DataSnowflakeServicesIn</a>

in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/data-sources/services#in DataSnowflakeServices#in}

---

##### `like`<sup>Optional</sup> <a name="like" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesConfig.property.like"></a>

```python
like: str
```

- *Type:* str

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/data-sources/services#like DataSnowflakeServices#like}

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesConfig.property.limit"></a>

```python
limit: DataSnowflakeServicesLimit
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesLimit">DataSnowflakeServicesLimit</a>

limit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/data-sources/services#limit DataSnowflakeServices#limit}

---

##### `service_type`<sup>Optional</sup> <a name="service_type" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesConfig.property.serviceType"></a>

```python
service_type: str
```

- *Type:* str

(Default: `ALL`) The type filtering of `SHOW SERVICES` results.

`ALL` returns both services and job services. `JOBS_ONLY` returns only job services (`JOB` option in SQL). `SERVICES_ONLY` returns only services (`EXCLUDE_JOBS` option in SQL).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/data-sources/services#service_type DataSnowflakeServices#service_type}

---

##### `starts_with`<sup>Optional</sup> <a name="starts_with" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesConfig.property.startsWith"></a>

```python
starts_with: str
```

- *Type:* str

Filters the output with **case-sensitive** characters indicating the beginning of the object name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/data-sources/services#starts_with DataSnowflakeServices#starts_with}

---

##### `with_describe`<sup>Optional</sup> <a name="with_describe" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesConfig.property.withDescribe"></a>

```python
with_describe: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

(Default: `true`) Runs DESC SERVICE for each service returned by SHOW SERVICES.

The output of describe is saved to the description field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/data-sources/services#with_describe DataSnowflakeServices#with_describe}

---

### DataSnowflakeServicesIn <a name="DataSnowflakeServicesIn" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesIn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesIn.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_services

dataSnowflakeServices.DataSnowflakeServicesIn(
  account: typing.Union[bool, IResolvable] = None,
  compute_pool: str = None,
  database: str = None,
  schema: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesIn.property.account">account</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Returns records for the entire account. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesIn.property.computePool">compute_pool</a></code> | <code>str</code> | Returns records for the specified compute pool. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesIn.property.database">database</a></code> | <code>str</code> | Returns records for the current database in use or for a specified database. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesIn.property.schema">schema</a></code> | <code>str</code> | Returns records for the current schema in use or a specified schema. Use fully qualified name. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesIn.property.account"></a>

```python
account: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Returns records for the entire account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/data-sources/services#account DataSnowflakeServices#account}

---

##### `compute_pool`<sup>Optional</sup> <a name="compute_pool" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesIn.property.computePool"></a>

```python
compute_pool: str
```

- *Type:* str

Returns records for the specified compute pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/data-sources/services#compute_pool DataSnowflakeServices#compute_pool}

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesIn.property.database"></a>

```python
database: str
```

- *Type:* str

Returns records for the current database in use or for a specified database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/data-sources/services#database DataSnowflakeServices#database}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesIn.property.schema"></a>

```python
schema: str
```

- *Type:* str

Returns records for the current schema in use or a specified schema. Use fully qualified name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/data-sources/services#schema DataSnowflakeServices#schema}

---

### DataSnowflakeServicesLimit <a name="DataSnowflakeServicesLimit" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesLimit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesLimit.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_services

dataSnowflakeServices.DataSnowflakeServicesLimit(
  rows: typing.Union[int, float],
  from: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesLimit.property.rows">rows</a></code> | <code>typing.Union[int, float]</code> | The maximum number of rows to return. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesLimit.property.from">from</a></code> | <code>str</code> | Specifies a **case-sensitive** pattern that is used to match object name. |

---

##### `rows`<sup>Required</sup> <a name="rows" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesLimit.property.rows"></a>

```python
rows: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of rows to return.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/data-sources/services#rows DataSnowflakeServices#rows}

---

##### `from`<sup>Optional</sup> <a name="from" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesLimit.property.from"></a>

```python
from: str
```

- *Type:* str

Specifies a **case-sensitive** pattern that is used to match object name.

After the first match, the limit on the number of rows will be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.5.0/docs/data-sources/services#from DataSnowflakeServices#from}

---

### DataSnowflakeServicesServices <a name="DataSnowflakeServicesServices" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServices"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServices.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_services

dataSnowflakeServices.DataSnowflakeServicesServices()
```


### DataSnowflakeServicesServicesDescribeOutput <a name="DataSnowflakeServicesServicesDescribeOutput" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutput.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_services

dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutput()
```


### DataSnowflakeServicesServicesShowOutput <a name="DataSnowflakeServicesServicesShowOutput" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutput.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_services

dataSnowflakeServices.DataSnowflakeServicesServicesShowOutput()
```


## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakeServicesInOutputReference <a name="DataSnowflakeServicesInOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesInOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesInOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_services

dataSnowflakeServices.DataSnowflakeServicesInOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesInOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesInOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesInOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesInOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesInOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesInOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesInOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesInOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesInOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesInOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesInOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesInOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesInOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesInOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesInOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesInOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesInOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesInOutputReference.resetAccount">reset_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesInOutputReference.resetComputePool">reset_compute_pool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesInOutputReference.resetDatabase">reset_database</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesInOutputReference.resetSchema">reset_schema</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesInOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesInOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesInOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesInOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesInOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesInOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesInOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesInOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesInOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesInOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesInOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesInOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesInOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesInOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesInOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesInOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesInOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesInOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesInOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesInOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesInOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesInOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesInOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesInOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_account` <a name="reset_account" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesInOutputReference.resetAccount"></a>

```python
def reset_account() -> None
```

##### `reset_compute_pool` <a name="reset_compute_pool" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesInOutputReference.resetComputePool"></a>

```python
def reset_compute_pool() -> None
```

##### `reset_database` <a name="reset_database" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesInOutputReference.resetDatabase"></a>

```python
def reset_database() -> None
```

##### `reset_schema` <a name="reset_schema" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesInOutputReference.resetSchema"></a>

```python
def reset_schema() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesInOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesInOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesInOutputReference.property.accountInput">account_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesInOutputReference.property.computePoolInput">compute_pool_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesInOutputReference.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesInOutputReference.property.schemaInput">schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesInOutputReference.property.account">account</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesInOutputReference.property.computePool">compute_pool</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesInOutputReference.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesInOutputReference.property.schema">schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesInOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesIn">DataSnowflakeServicesIn</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesInOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesInOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_input`<sup>Optional</sup> <a name="account_input" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesInOutputReference.property.accountInput"></a>

```python
account_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `compute_pool_input`<sup>Optional</sup> <a name="compute_pool_input" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesInOutputReference.property.computePoolInput"></a>

```python
compute_pool_input: str
```

- *Type:* str

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesInOutputReference.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesInOutputReference.property.schemaInput"></a>

```python
schema_input: str
```

- *Type:* str

---

##### `account`<sup>Required</sup> <a name="account" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesInOutputReference.property.account"></a>

```python
account: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `compute_pool`<sup>Required</sup> <a name="compute_pool" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesInOutputReference.property.computePool"></a>

```python
compute_pool: str
```

- *Type:* str

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesInOutputReference.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesInOutputReference.property.schema"></a>

```python
schema: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesInOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeServicesIn
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesIn">DataSnowflakeServicesIn</a>

---


### DataSnowflakeServicesLimitOutputReference <a name="DataSnowflakeServicesLimitOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesLimitOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_services

dataSnowflakeServices.DataSnowflakeServicesLimitOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesLimitOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesLimitOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesLimitOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesLimitOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesLimitOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesLimitOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesLimitOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesLimitOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesLimitOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesLimitOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesLimitOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesLimitOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesLimitOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesLimitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesLimitOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesLimitOutputReference.resetFrom">reset_from</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesLimitOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesLimitOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesLimitOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesLimitOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesLimitOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesLimitOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesLimitOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesLimitOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesLimitOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesLimitOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesLimitOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesLimitOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesLimitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesLimitOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_from` <a name="reset_from" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesLimitOutputReference.resetFrom"></a>

```python
def reset_from() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesLimitOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesLimitOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesLimitOutputReference.property.fromInput">from_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesLimitOutputReference.property.rowsInput">rows_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesLimitOutputReference.property.from">from</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesLimitOutputReference.property.rows">rows</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesLimitOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesLimit">DataSnowflakeServicesLimit</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesLimitOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesLimitOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `from_input`<sup>Optional</sup> <a name="from_input" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesLimitOutputReference.property.fromInput"></a>

```python
from_input: str
```

- *Type:* str

---

##### `rows_input`<sup>Optional</sup> <a name="rows_input" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesLimitOutputReference.property.rowsInput"></a>

```python
rows_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesLimitOutputReference.property.from"></a>

```python
from: str
```

- *Type:* str

---

##### `rows`<sup>Required</sup> <a name="rows" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesLimitOutputReference.property.rows"></a>

```python
rows: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesLimitOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeServicesLimit
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesLimit">DataSnowflakeServicesLimit</a>

---


### DataSnowflakeServicesServicesDescribeOutputList <a name="DataSnowflakeServicesServicesDescribeOutputList" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_services

dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSnowflakeServicesServicesDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSnowflakeServicesServicesDescribeOutputOutputReference <a name="DataSnowflakeServicesServicesDescribeOutputOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_services

dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.property.autoResume">auto_resume</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.property.autoSuspendSecs">auto_suspend_secs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.property.computePool">compute_pool</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.property.currentInstances">current_instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.property.dnsName">dns_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.property.externalAccessIntegrations">external_access_integrations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.property.isAsyncJob">is_async_job</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.property.isJob">is_job</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.property.isUpgrading">is_upgrading</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.property.managingObjectDomain">managing_object_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.property.managingObjectName">managing_object_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.property.maxInstances">max_instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.property.minInstances">min_instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.property.minReadyInstances">min_ready_instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.property.ownerRoleType">owner_role_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.property.queryWarehouse">query_warehouse</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.property.resumedOn">resumed_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.property.spec">spec</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.property.specDigest">spec_digest</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.property.suspendedOn">suspended_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.property.targetInstances">target_instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.property.updatedOn">updated_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutput">DataSnowflakeServicesServicesDescribeOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_resume`<sup>Required</sup> <a name="auto_resume" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.property.autoResume"></a>

```python
auto_resume: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `auto_suspend_secs`<sup>Required</sup> <a name="auto_suspend_secs" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.property.autoSuspendSecs"></a>

```python
auto_suspend_secs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `compute_pool`<sup>Required</sup> <a name="compute_pool" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.property.computePool"></a>

```python
compute_pool: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `current_instances`<sup>Required</sup> <a name="current_instances" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.property.currentInstances"></a>

```python
current_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `dns_name`<sup>Required</sup> <a name="dns_name" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.property.dnsName"></a>

```python
dns_name: str
```

- *Type:* str

---

##### `external_access_integrations`<sup>Required</sup> <a name="external_access_integrations" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.property.externalAccessIntegrations"></a>

```python
external_access_integrations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `is_async_job`<sup>Required</sup> <a name="is_async_job" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.property.isAsyncJob"></a>

```python
is_async_job: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_job`<sup>Required</sup> <a name="is_job" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.property.isJob"></a>

```python
is_job: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_upgrading`<sup>Required</sup> <a name="is_upgrading" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.property.isUpgrading"></a>

```python
is_upgrading: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `managing_object_domain`<sup>Required</sup> <a name="managing_object_domain" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.property.managingObjectDomain"></a>

```python
managing_object_domain: str
```

- *Type:* str

---

##### `managing_object_name`<sup>Required</sup> <a name="managing_object_name" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.property.managingObjectName"></a>

```python
managing_object_name: str
```

- *Type:* str

---

##### `max_instances`<sup>Required</sup> <a name="max_instances" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.property.maxInstances"></a>

```python
max_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_instances`<sup>Required</sup> <a name="min_instances" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.property.minInstances"></a>

```python
min_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_ready_instances`<sup>Required</sup> <a name="min_ready_instances" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.property.minReadyInstances"></a>

```python
min_ready_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `owner_role_type`<sup>Required</sup> <a name="owner_role_type" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.property.ownerRoleType"></a>

```python
owner_role_type: str
```

- *Type:* str

---

##### `query_warehouse`<sup>Required</sup> <a name="query_warehouse" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.property.queryWarehouse"></a>

```python
query_warehouse: str
```

- *Type:* str

---

##### `resumed_on`<sup>Required</sup> <a name="resumed_on" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.property.resumedOn"></a>

```python
resumed_on: str
```

- *Type:* str

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.property.spec"></a>

```python
spec: str
```

- *Type:* str

---

##### `spec_digest`<sup>Required</sup> <a name="spec_digest" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.property.specDigest"></a>

```python
spec_digest: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `suspended_on`<sup>Required</sup> <a name="suspended_on" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.property.suspendedOn"></a>

```python
suspended_on: str
```

- *Type:* str

---

##### `target_instances`<sup>Required</sup> <a name="target_instances" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.property.targetInstances"></a>

```python
target_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `updated_on`<sup>Required</sup> <a name="updated_on" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.property.updatedOn"></a>

```python
updated_on: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeServicesServicesDescribeOutput
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutput">DataSnowflakeServicesServicesDescribeOutput</a>

---


### DataSnowflakeServicesServicesList <a name="DataSnowflakeServicesServicesList" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_services

dataSnowflakeServices.DataSnowflakeServicesServicesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSnowflakeServicesServicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSnowflakeServicesServicesOutputReference <a name="DataSnowflakeServicesServicesOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_services

dataSnowflakeServices.DataSnowflakeServicesServicesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesOutputReference.property.describeOutput">describe_output</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputList">DataSnowflakeServicesServicesDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesOutputReference.property.showOutput">show_output</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputList">DataSnowflakeServicesServicesShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServices">DataSnowflakeServicesServices</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `describe_output`<sup>Required</sup> <a name="describe_output" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesOutputReference.property.describeOutput"></a>

```python
describe_output: DataSnowflakeServicesServicesDescribeOutputList
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesDescribeOutputList">DataSnowflakeServicesServicesDescribeOutputList</a>

---

##### `show_output`<sup>Required</sup> <a name="show_output" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesOutputReference.property.showOutput"></a>

```python
show_output: DataSnowflakeServicesServicesShowOutputList
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputList">DataSnowflakeServicesServicesShowOutputList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeServicesServices
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServices">DataSnowflakeServicesServices</a>

---


### DataSnowflakeServicesServicesShowOutputList <a name="DataSnowflakeServicesServicesShowOutputList" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_services

dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSnowflakeServicesServicesShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSnowflakeServicesServicesShowOutputOutputReference <a name="DataSnowflakeServicesServicesShowOutputOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_services

dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.property.autoResume">auto_resume</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.property.autoSuspendSecs">auto_suspend_secs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.property.computePool">compute_pool</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.property.currentInstances">current_instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.property.dnsName">dns_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.property.externalAccessIntegrations">external_access_integrations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.property.isAsyncJob">is_async_job</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.property.isJob">is_job</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.property.isUpgrading">is_upgrading</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.property.managingObjectDomain">managing_object_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.property.managingObjectName">managing_object_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.property.maxInstances">max_instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.property.minInstances">min_instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.property.minReadyInstances">min_ready_instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.property.ownerRoleType">owner_role_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.property.queryWarehouse">query_warehouse</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.property.resumedOn">resumed_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.property.specDigest">spec_digest</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.property.suspendedOn">suspended_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.property.targetInstances">target_instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.property.updatedOn">updated_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutput">DataSnowflakeServicesServicesShowOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_resume`<sup>Required</sup> <a name="auto_resume" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.property.autoResume"></a>

```python
auto_resume: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `auto_suspend_secs`<sup>Required</sup> <a name="auto_suspend_secs" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.property.autoSuspendSecs"></a>

```python
auto_suspend_secs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `compute_pool`<sup>Required</sup> <a name="compute_pool" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.property.computePool"></a>

```python
compute_pool: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `current_instances`<sup>Required</sup> <a name="current_instances" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.property.currentInstances"></a>

```python
current_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `dns_name`<sup>Required</sup> <a name="dns_name" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.property.dnsName"></a>

```python
dns_name: str
```

- *Type:* str

---

##### `external_access_integrations`<sup>Required</sup> <a name="external_access_integrations" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.property.externalAccessIntegrations"></a>

```python
external_access_integrations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `is_async_job`<sup>Required</sup> <a name="is_async_job" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.property.isAsyncJob"></a>

```python
is_async_job: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_job`<sup>Required</sup> <a name="is_job" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.property.isJob"></a>

```python
is_job: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_upgrading`<sup>Required</sup> <a name="is_upgrading" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.property.isUpgrading"></a>

```python
is_upgrading: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `managing_object_domain`<sup>Required</sup> <a name="managing_object_domain" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.property.managingObjectDomain"></a>

```python
managing_object_domain: str
```

- *Type:* str

---

##### `managing_object_name`<sup>Required</sup> <a name="managing_object_name" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.property.managingObjectName"></a>

```python
managing_object_name: str
```

- *Type:* str

---

##### `max_instances`<sup>Required</sup> <a name="max_instances" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.property.maxInstances"></a>

```python
max_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_instances`<sup>Required</sup> <a name="min_instances" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.property.minInstances"></a>

```python
min_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_ready_instances`<sup>Required</sup> <a name="min_ready_instances" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.property.minReadyInstances"></a>

```python
min_ready_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `owner_role_type`<sup>Required</sup> <a name="owner_role_type" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.property.ownerRoleType"></a>

```python
owner_role_type: str
```

- *Type:* str

---

##### `query_warehouse`<sup>Required</sup> <a name="query_warehouse" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.property.queryWarehouse"></a>

```python
query_warehouse: str
```

- *Type:* str

---

##### `resumed_on`<sup>Required</sup> <a name="resumed_on" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.property.resumedOn"></a>

```python
resumed_on: str
```

- *Type:* str

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `spec_digest`<sup>Required</sup> <a name="spec_digest" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.property.specDigest"></a>

```python
spec_digest: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `suspended_on`<sup>Required</sup> <a name="suspended_on" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.property.suspendedOn"></a>

```python
suspended_on: str
```

- *Type:* str

---

##### `target_instances`<sup>Required</sup> <a name="target_instances" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.property.targetInstances"></a>

```python
target_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `updated_on`<sup>Required</sup> <a name="updated_on" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.property.updatedOn"></a>

```python
updated_on: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutputOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeServicesServicesShowOutput
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeServices.DataSnowflakeServicesServicesShowOutput">DataSnowflakeServicesServicesShowOutput</a>

---



