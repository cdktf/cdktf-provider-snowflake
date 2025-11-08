# `dataSnowflakeAuthenticationPolicies` Submodule <a name="`dataSnowflakeAuthenticationPolicies` Submodule" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeAuthenticationPolicies <a name="DataSnowflakeAuthenticationPolicies" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/data-sources/authentication_policies snowflake_authentication_policies}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_authentication_policies

dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  id: str = None,
  in: DataSnowflakeAuthenticationPoliciesIn = None,
  like: str = None,
  limit: DataSnowflakeAuthenticationPoliciesLimit = None,
  on: DataSnowflakeAuthenticationPoliciesOn = None,
  starts_with: str = None,
  with_describe: bool | IResolvable = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/data-sources/authentication_policies#id DataSnowflakeAuthenticationPolicies#id}. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.Initializer.parameter.in">in</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesIn">DataSnowflakeAuthenticationPoliciesIn</a></code> | in block. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.Initializer.parameter.like">like</a></code> | <code>str</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.Initializer.parameter.limit">limit</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimit">DataSnowflakeAuthenticationPoliciesLimit</a></code> | limit block. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.Initializer.parameter.on">on</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOn">DataSnowflakeAuthenticationPoliciesOn</a></code> | on block. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.Initializer.parameter.startsWith">starts_with</a></code> | <code>str</code> | Filters the output with **case-sensitive** characters indicating the beginning of the object name. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.Initializer.parameter.withDescribe">with_describe</a></code> | <code>bool \| cdktf.IResolvable</code> | (Default: `true`) Runs DESC AUTHENTICATION POLICY for each service returned by SHOW AUTHENTICATION POLICIES. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/data-sources/authentication_policies#id DataSnowflakeAuthenticationPolicies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `in`<sup>Optional</sup> <a name="in" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.Initializer.parameter.in"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesIn">DataSnowflakeAuthenticationPoliciesIn</a>

in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/data-sources/authentication_policies#in DataSnowflakeAuthenticationPolicies#in}

---

##### `like`<sup>Optional</sup> <a name="like" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.Initializer.parameter.like"></a>

- *Type:* str

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/data-sources/authentication_policies#like DataSnowflakeAuthenticationPolicies#like}

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.Initializer.parameter.limit"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimit">DataSnowflakeAuthenticationPoliciesLimit</a>

limit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/data-sources/authentication_policies#limit DataSnowflakeAuthenticationPolicies#limit}

---

##### `on`<sup>Optional</sup> <a name="on" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.Initializer.parameter.on"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOn">DataSnowflakeAuthenticationPoliciesOn</a>

on block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/data-sources/authentication_policies#on DataSnowflakeAuthenticationPolicies#on}

---

##### `starts_with`<sup>Optional</sup> <a name="starts_with" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.Initializer.parameter.startsWith"></a>

- *Type:* str

Filters the output with **case-sensitive** characters indicating the beginning of the object name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/data-sources/authentication_policies#starts_with DataSnowflakeAuthenticationPolicies#starts_with}

---

##### `with_describe`<sup>Optional</sup> <a name="with_describe" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.Initializer.parameter.withDescribe"></a>

- *Type:* bool | cdktf.IResolvable

(Default: `true`) Runs DESC AUTHENTICATION POLICY for each service returned by SHOW AUTHENTICATION POLICIES.

The output of describe is saved to the description field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/data-sources/authentication_policies#with_describe DataSnowflakeAuthenticationPolicies#with_describe}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.putIn">put_in</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.putLimit">put_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.putOn">put_on</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.resetIn">reset_in</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.resetLike">reset_like</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.resetLimit">reset_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.resetOn">reset_on</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.resetStartsWith">reset_starts_with</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.resetWithDescribe">reset_with_describe</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_in` <a name="put_in" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.putIn"></a>

```python
def put_in(
  account: bool | IResolvable = None,
  application: str = None,
  application_package: str = None,
  database: str = None,
  schema: str = None
) -> None
```

###### `account`<sup>Optional</sup> <a name="account" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.putIn.parameter.account"></a>

- *Type:* bool | cdktf.IResolvable

Returns records for the entire account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/data-sources/authentication_policies#account DataSnowflakeAuthenticationPolicies#account}

---

###### `application`<sup>Optional</sup> <a name="application" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.putIn.parameter.application"></a>

- *Type:* str

Returns records for the specified application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/data-sources/authentication_policies#application DataSnowflakeAuthenticationPolicies#application}

---

###### `application_package`<sup>Optional</sup> <a name="application_package" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.putIn.parameter.applicationPackage"></a>

- *Type:* str

Returns records for the specified application package.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/data-sources/authentication_policies#application_package DataSnowflakeAuthenticationPolicies#application_package}

---

###### `database`<sup>Optional</sup> <a name="database" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.putIn.parameter.database"></a>

- *Type:* str

Returns records for the current database in use or for a specified database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/data-sources/authentication_policies#database DataSnowflakeAuthenticationPolicies#database}

---

###### `schema`<sup>Optional</sup> <a name="schema" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.putIn.parameter.schema"></a>

- *Type:* str

Returns records for the current schema in use or a specified schema. Use fully qualified name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/data-sources/authentication_policies#schema DataSnowflakeAuthenticationPolicies#schema}

---

##### `put_limit` <a name="put_limit" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.putLimit"></a>

```python
def put_limit(
  rows: typing.Union[int, float],
  from: str = None
) -> None
```

###### `rows`<sup>Required</sup> <a name="rows" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.putLimit.parameter.rows"></a>

- *Type:* typing.Union[int, float]

The maximum number of rows to return.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/data-sources/authentication_policies#rows DataSnowflakeAuthenticationPolicies#rows}

---

###### `from`<sup>Optional</sup> <a name="from" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.putLimit.parameter.from"></a>

- *Type:* str

Specifies a **case-sensitive** pattern that is used to match object name.

After the first match, the limit on the number of rows will be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/data-sources/authentication_policies#from DataSnowflakeAuthenticationPolicies#from}

---

##### `put_on` <a name="put_on" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.putOn"></a>

```python
def put_on(
  account: bool | IResolvable = None,
  user: str = None
) -> None
```

###### `account`<sup>Optional</sup> <a name="account" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.putOn.parameter.account"></a>

- *Type:* bool | cdktf.IResolvable

Returns records for the entire account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/data-sources/authentication_policies#account DataSnowflakeAuthenticationPolicies#account}

---

###### `user`<sup>Optional</sup> <a name="user" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.putOn.parameter.user"></a>

- *Type:* str

Returns records for the specified user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/data-sources/authentication_policies#user DataSnowflakeAuthenticationPolicies#user}

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_in` <a name="reset_in" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.resetIn"></a>

```python
def reset_in() -> None
```

##### `reset_like` <a name="reset_like" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.resetLike"></a>

```python
def reset_like() -> None
```

##### `reset_limit` <a name="reset_limit" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.resetLimit"></a>

```python
def reset_limit() -> None
```

##### `reset_on` <a name="reset_on" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.resetOn"></a>

```python
def reset_on() -> None
```

##### `reset_starts_with` <a name="reset_starts_with" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.resetStartsWith"></a>

```python
def reset_starts_with() -> None
```

##### `reset_with_describe` <a name="reset_with_describe" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.resetWithDescribe"></a>

```python
def reset_with_describe() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataSnowflakeAuthenticationPolicies resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.isConstruct"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_authentication_policies

dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_authentication_policies

dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_authentication_policies

dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_authentication_policies

dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataSnowflakeAuthenticationPolicies resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataSnowflakeAuthenticationPolicies to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataSnowflakeAuthenticationPolicies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/data-sources/authentication_policies#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataSnowflakeAuthenticationPolicies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.authenticationPolicies">authentication_policies</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesList">DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.in">in</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference">DataSnowflakeAuthenticationPoliciesInOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.limit">limit</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference">DataSnowflakeAuthenticationPoliciesLimitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.on">on</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference">DataSnowflakeAuthenticationPoliciesOnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.inInput">in_input</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesIn">DataSnowflakeAuthenticationPoliciesIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.likeInput">like_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.limitInput">limit_input</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimit">DataSnowflakeAuthenticationPoliciesLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.onInput">on_input</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOn">DataSnowflakeAuthenticationPoliciesOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.startsWithInput">starts_with_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.withDescribeInput">with_describe_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.like">like</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.startsWith">starts_with</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.withDescribe">with_describe</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `authentication_policies`<sup>Required</sup> <a name="authentication_policies" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.authenticationPolicies"></a>

```python
authentication_policies: DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesList
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesList">DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesList</a>

---

##### `in`<sup>Required</sup> <a name="in" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.in"></a>

```python
in: DataSnowflakeAuthenticationPoliciesInOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference">DataSnowflakeAuthenticationPoliciesInOutputReference</a>

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.limit"></a>

```python
limit: DataSnowflakeAuthenticationPoliciesLimitOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference">DataSnowflakeAuthenticationPoliciesLimitOutputReference</a>

---

##### `on`<sup>Required</sup> <a name="on" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.on"></a>

```python
on: DataSnowflakeAuthenticationPoliciesOnOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference">DataSnowflakeAuthenticationPoliciesOnOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `in_input`<sup>Optional</sup> <a name="in_input" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.inInput"></a>

```python
in_input: DataSnowflakeAuthenticationPoliciesIn
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesIn">DataSnowflakeAuthenticationPoliciesIn</a>

---

##### `like_input`<sup>Optional</sup> <a name="like_input" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.likeInput"></a>

```python
like_input: str
```

- *Type:* str

---

##### `limit_input`<sup>Optional</sup> <a name="limit_input" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.limitInput"></a>

```python
limit_input: DataSnowflakeAuthenticationPoliciesLimit
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimit">DataSnowflakeAuthenticationPoliciesLimit</a>

---

##### `on_input`<sup>Optional</sup> <a name="on_input" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.onInput"></a>

```python
on_input: DataSnowflakeAuthenticationPoliciesOn
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOn">DataSnowflakeAuthenticationPoliciesOn</a>

---

##### `starts_with_input`<sup>Optional</sup> <a name="starts_with_input" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.startsWithInput"></a>

```python
starts_with_input: str
```

- *Type:* str

---

##### `with_describe_input`<sup>Optional</sup> <a name="with_describe_input" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.withDescribeInput"></a>

```python
with_describe_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `like`<sup>Required</sup> <a name="like" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.like"></a>

```python
like: str
```

- *Type:* str

---

##### `starts_with`<sup>Required</sup> <a name="starts_with" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.startsWith"></a>

```python
starts_with: str
```

- *Type:* str

---

##### `with_describe`<sup>Required</sup> <a name="with_describe" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.withDescribe"></a>

```python
with_describe: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPolicies.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeAuthenticationPoliciesAuthenticationPolicies <a name="DataSnowflakeAuthenticationPoliciesAuthenticationPolicies" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPolicies.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_authentication_policies

dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPolicies()
```


### DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutput <a name="DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutput" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutput.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_authentication_policies

dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutput()
```


### DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutput <a name="DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutput" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutput.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_authentication_policies

dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutput()
```


### DataSnowflakeAuthenticationPoliciesConfig <a name="DataSnowflakeAuthenticationPoliciesConfig" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_authentication_policies

dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  id: str = None,
  in: DataSnowflakeAuthenticationPoliciesIn = None,
  like: str = None,
  limit: DataSnowflakeAuthenticationPoliciesLimit = None,
  on: DataSnowflakeAuthenticationPoliciesOn = None,
  starts_with: str = None,
  with_describe: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/data-sources/authentication_policies#id DataSnowflakeAuthenticationPolicies#id}. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesConfig.property.in">in</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesIn">DataSnowflakeAuthenticationPoliciesIn</a></code> | in block. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesConfig.property.like">like</a></code> | <code>str</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesConfig.property.limit">limit</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimit">DataSnowflakeAuthenticationPoliciesLimit</a></code> | limit block. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesConfig.property.on">on</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOn">DataSnowflakeAuthenticationPoliciesOn</a></code> | on block. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesConfig.property.startsWith">starts_with</a></code> | <code>str</code> | Filters the output with **case-sensitive** characters indicating the beginning of the object name. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesConfig.property.withDescribe">with_describe</a></code> | <code>bool \| cdktf.IResolvable</code> | (Default: `true`) Runs DESC AUTHENTICATION POLICY for each service returned by SHOW AUTHENTICATION POLICIES. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/data-sources/authentication_policies#id DataSnowflakeAuthenticationPolicies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `in`<sup>Optional</sup> <a name="in" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesConfig.property.in"></a>

```python
in: DataSnowflakeAuthenticationPoliciesIn
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesIn">DataSnowflakeAuthenticationPoliciesIn</a>

in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/data-sources/authentication_policies#in DataSnowflakeAuthenticationPolicies#in}

---

##### `like`<sup>Optional</sup> <a name="like" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesConfig.property.like"></a>

```python
like: str
```

- *Type:* str

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/data-sources/authentication_policies#like DataSnowflakeAuthenticationPolicies#like}

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesConfig.property.limit"></a>

```python
limit: DataSnowflakeAuthenticationPoliciesLimit
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimit">DataSnowflakeAuthenticationPoliciesLimit</a>

limit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/data-sources/authentication_policies#limit DataSnowflakeAuthenticationPolicies#limit}

---

##### `on`<sup>Optional</sup> <a name="on" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesConfig.property.on"></a>

```python
on: DataSnowflakeAuthenticationPoliciesOn
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOn">DataSnowflakeAuthenticationPoliciesOn</a>

on block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/data-sources/authentication_policies#on DataSnowflakeAuthenticationPolicies#on}

---

##### `starts_with`<sup>Optional</sup> <a name="starts_with" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesConfig.property.startsWith"></a>

```python
starts_with: str
```

- *Type:* str

Filters the output with **case-sensitive** characters indicating the beginning of the object name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/data-sources/authentication_policies#starts_with DataSnowflakeAuthenticationPolicies#starts_with}

---

##### `with_describe`<sup>Optional</sup> <a name="with_describe" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesConfig.property.withDescribe"></a>

```python
with_describe: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

(Default: `true`) Runs DESC AUTHENTICATION POLICY for each service returned by SHOW AUTHENTICATION POLICIES.

The output of describe is saved to the description field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/data-sources/authentication_policies#with_describe DataSnowflakeAuthenticationPolicies#with_describe}

---

### DataSnowflakeAuthenticationPoliciesIn <a name="DataSnowflakeAuthenticationPoliciesIn" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesIn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesIn.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_authentication_policies

dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesIn(
  account: bool | IResolvable = None,
  application: str = None,
  application_package: str = None,
  database: str = None,
  schema: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesIn.property.account">account</a></code> | <code>bool \| cdktf.IResolvable</code> | Returns records for the entire account. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesIn.property.application">application</a></code> | <code>str</code> | Returns records for the specified application. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesIn.property.applicationPackage">application_package</a></code> | <code>str</code> | Returns records for the specified application package. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesIn.property.database">database</a></code> | <code>str</code> | Returns records for the current database in use or for a specified database. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesIn.property.schema">schema</a></code> | <code>str</code> | Returns records for the current schema in use or a specified schema. Use fully qualified name. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesIn.property.account"></a>

```python
account: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Returns records for the entire account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/data-sources/authentication_policies#account DataSnowflakeAuthenticationPolicies#account}

---

##### `application`<sup>Optional</sup> <a name="application" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesIn.property.application"></a>

```python
application: str
```

- *Type:* str

Returns records for the specified application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/data-sources/authentication_policies#application DataSnowflakeAuthenticationPolicies#application}

---

##### `application_package`<sup>Optional</sup> <a name="application_package" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesIn.property.applicationPackage"></a>

```python
application_package: str
```

- *Type:* str

Returns records for the specified application package.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/data-sources/authentication_policies#application_package DataSnowflakeAuthenticationPolicies#application_package}

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesIn.property.database"></a>

```python
database: str
```

- *Type:* str

Returns records for the current database in use or for a specified database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/data-sources/authentication_policies#database DataSnowflakeAuthenticationPolicies#database}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesIn.property.schema"></a>

```python
schema: str
```

- *Type:* str

Returns records for the current schema in use or a specified schema. Use fully qualified name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/data-sources/authentication_policies#schema DataSnowflakeAuthenticationPolicies#schema}

---

### DataSnowflakeAuthenticationPoliciesLimit <a name="DataSnowflakeAuthenticationPoliciesLimit" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimit.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_authentication_policies

dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimit(
  rows: typing.Union[int, float],
  from: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimit.property.rows">rows</a></code> | <code>typing.Union[int, float]</code> | The maximum number of rows to return. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimit.property.from">from</a></code> | <code>str</code> | Specifies a **case-sensitive** pattern that is used to match object name. |

---

##### `rows`<sup>Required</sup> <a name="rows" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimit.property.rows"></a>

```python
rows: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of rows to return.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/data-sources/authentication_policies#rows DataSnowflakeAuthenticationPolicies#rows}

---

##### `from`<sup>Optional</sup> <a name="from" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimit.property.from"></a>

```python
from: str
```

- *Type:* str

Specifies a **case-sensitive** pattern that is used to match object name.

After the first match, the limit on the number of rows will be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/data-sources/authentication_policies#from DataSnowflakeAuthenticationPolicies#from}

---

### DataSnowflakeAuthenticationPoliciesOn <a name="DataSnowflakeAuthenticationPoliciesOn" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOn.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_authentication_policies

dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOn(
  account: bool | IResolvable = None,
  user: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOn.property.account">account</a></code> | <code>bool \| cdktf.IResolvable</code> | Returns records for the entire account. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOn.property.user">user</a></code> | <code>str</code> | Returns records for the specified user. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOn.property.account"></a>

```python
account: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Returns records for the entire account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/data-sources/authentication_policies#account DataSnowflakeAuthenticationPolicies#account}

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOn.property.user"></a>

```python
user: str
```

- *Type:* str

Returns records for the specified user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/data-sources/authentication_policies#user DataSnowflakeAuthenticationPolicies#user}

---

## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputList <a name="DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputList" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_authentication_policies

dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference <a name="DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_authentication_policies

dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.property.authenticationMethods">authentication_methods</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.property.clientTypes">client_types</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.property.mfaAuthenticationMethods">mfa_authentication_methods</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.property.mfaEnrollment">mfa_enrollment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.property.mfaPolicy">mfa_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.property.patPolicy">pat_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.property.securityIntegrations">security_integrations</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.property.workloadIdentityPolicy">workload_identity_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutput">DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authentication_methods`<sup>Required</sup> <a name="authentication_methods" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.property.authenticationMethods"></a>

```python
authentication_methods: str
```

- *Type:* str

---

##### `client_types`<sup>Required</sup> <a name="client_types" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.property.clientTypes"></a>

```python
client_types: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `mfa_authentication_methods`<sup>Required</sup> <a name="mfa_authentication_methods" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.property.mfaAuthenticationMethods"></a>

```python
mfa_authentication_methods: str
```

- *Type:* str

---

##### `mfa_enrollment`<sup>Required</sup> <a name="mfa_enrollment" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.property.mfaEnrollment"></a>

```python
mfa_enrollment: str
```

- *Type:* str

---

##### `mfa_policy`<sup>Required</sup> <a name="mfa_policy" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.property.mfaPolicy"></a>

```python
mfa_policy: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `pat_policy`<sup>Required</sup> <a name="pat_policy" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.property.patPolicy"></a>

```python
pat_policy: str
```

- *Type:* str

---

##### `security_integrations`<sup>Required</sup> <a name="security_integrations" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.property.securityIntegrations"></a>

```python
security_integrations: str
```

- *Type:* str

---

##### `workload_identity_policy`<sup>Required</sup> <a name="workload_identity_policy" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.property.workloadIdentityPolicy"></a>

```python
workload_identity_policy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutput
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutput">DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutput</a>

---


### DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesList <a name="DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesList" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_authentication_policies

dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference <a name="DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_authentication_policies

dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.property.describeOutput">describe_output</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputList">DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.property.showOutput">show_output</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputList">DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPolicies">DataSnowflakeAuthenticationPoliciesAuthenticationPolicies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `describe_output`<sup>Required</sup> <a name="describe_output" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.property.describeOutput"></a>

```python
describe_output: DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputList
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputList">DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesDescribeOutputList</a>

---

##### `show_output`<sup>Required</sup> <a name="show_output" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.property.showOutput"></a>

```python
show_output: DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputList
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputList">DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeAuthenticationPoliciesAuthenticationPolicies
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPolicies">DataSnowflakeAuthenticationPoliciesAuthenticationPolicies</a>

---


### DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputList <a name="DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputList" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_authentication_policies

dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference <a name="DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_authentication_policies

dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.property.options">options</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.property.ownerRoleType">owner_role_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutput">DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.property.options"></a>

```python
options: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `owner_role_type`<sup>Required</sup> <a name="owner_role_type" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.property.ownerRoleType"></a>

```python
owner_role_type: str
```

- *Type:* str

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutputOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutput
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutput">DataSnowflakeAuthenticationPoliciesAuthenticationPoliciesShowOutput</a>

---


### DataSnowflakeAuthenticationPoliciesInOutputReference <a name="DataSnowflakeAuthenticationPoliciesInOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_authentication_policies

dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.resetAccount">reset_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.resetApplication">reset_application</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.resetApplicationPackage">reset_application_package</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.resetDatabase">reset_database</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.resetSchema">reset_schema</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_account` <a name="reset_account" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.resetAccount"></a>

```python
def reset_account() -> None
```

##### `reset_application` <a name="reset_application" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.resetApplication"></a>

```python
def reset_application() -> None
```

##### `reset_application_package` <a name="reset_application_package" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.resetApplicationPackage"></a>

```python
def reset_application_package() -> None
```

##### `reset_database` <a name="reset_database" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.resetDatabase"></a>

```python
def reset_database() -> None
```

##### `reset_schema` <a name="reset_schema" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.resetSchema"></a>

```python
def reset_schema() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.property.accountInput">account_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.property.applicationInput">application_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.property.applicationPackageInput">application_package_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.property.schemaInput">schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.property.account">account</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.property.application">application</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.property.applicationPackage">application_package</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.property.schema">schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesIn">DataSnowflakeAuthenticationPoliciesIn</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_input`<sup>Optional</sup> <a name="account_input" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.property.accountInput"></a>

```python
account_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `application_input`<sup>Optional</sup> <a name="application_input" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.property.applicationInput"></a>

```python
application_input: str
```

- *Type:* str

---

##### `application_package_input`<sup>Optional</sup> <a name="application_package_input" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.property.applicationPackageInput"></a>

```python
application_package_input: str
```

- *Type:* str

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.property.schemaInput"></a>

```python
schema_input: str
```

- *Type:* str

---

##### `account`<sup>Required</sup> <a name="account" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.property.account"></a>

```python
account: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `application`<sup>Required</sup> <a name="application" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.property.application"></a>

```python
application: str
```

- *Type:* str

---

##### `application_package`<sup>Required</sup> <a name="application_package" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.property.applicationPackage"></a>

```python
application_package: str
```

- *Type:* str

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.property.schema"></a>

```python
schema: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesInOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeAuthenticationPoliciesIn
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesIn">DataSnowflakeAuthenticationPoliciesIn</a>

---


### DataSnowflakeAuthenticationPoliciesLimitOutputReference <a name="DataSnowflakeAuthenticationPoliciesLimitOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_authentication_policies

dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.resetFrom">reset_from</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_from` <a name="reset_from" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.resetFrom"></a>

```python
def reset_from() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.property.fromInput">from_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.property.rowsInput">rows_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.property.from">from</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.property.rows">rows</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimit">DataSnowflakeAuthenticationPoliciesLimit</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `from_input`<sup>Optional</sup> <a name="from_input" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.property.fromInput"></a>

```python
from_input: str
```

- *Type:* str

---

##### `rows_input`<sup>Optional</sup> <a name="rows_input" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.property.rowsInput"></a>

```python
rows_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.property.from"></a>

```python
from: str
```

- *Type:* str

---

##### `rows`<sup>Required</sup> <a name="rows" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.property.rows"></a>

```python
rows: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimitOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeAuthenticationPoliciesLimit
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesLimit">DataSnowflakeAuthenticationPoliciesLimit</a>

---


### DataSnowflakeAuthenticationPoliciesOnOutputReference <a name="DataSnowflakeAuthenticationPoliciesOnOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_authentication_policies

dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.resetAccount">reset_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.resetUser">reset_user</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_account` <a name="reset_account" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.resetAccount"></a>

```python
def reset_account() -> None
```

##### `reset_user` <a name="reset_user" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.resetUser"></a>

```python
def reset_user() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.property.accountInput">account_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.property.userInput">user_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.property.account">account</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.property.user">user</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOn">DataSnowflakeAuthenticationPoliciesOn</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_input`<sup>Optional</sup> <a name="account_input" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.property.accountInput"></a>

```python
account_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `user_input`<sup>Optional</sup> <a name="user_input" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.property.userInput"></a>

```python
user_input: str
```

- *Type:* str

---

##### `account`<sup>Required</sup> <a name="account" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.property.account"></a>

```python
account: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.property.user"></a>

```python
user: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOnOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeAuthenticationPoliciesOn
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeAuthenticationPolicies.DataSnowflakeAuthenticationPoliciesOn">DataSnowflakeAuthenticationPoliciesOn</a>

---



