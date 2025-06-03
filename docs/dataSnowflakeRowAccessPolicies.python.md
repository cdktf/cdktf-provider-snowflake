# `dataSnowflakeRowAccessPolicies` Submodule <a name="`dataSnowflakeRowAccessPolicies` Submodule" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeRowAccessPolicies <a name="DataSnowflakeRowAccessPolicies" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/data-sources/row_access_policies snowflake_row_access_policies}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_row_access_policies

dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies(
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
  in: DataSnowflakeRowAccessPoliciesIn = None,
  like: str = None,
  limit: DataSnowflakeRowAccessPoliciesLimit = None,
  with_describe: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/data-sources/row_access_policies#id DataSnowflakeRowAccessPolicies#id}. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.Initializer.parameter.in">in</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesIn">DataSnowflakeRowAccessPoliciesIn</a></code> | in block. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.Initializer.parameter.like">like</a></code> | <code>str</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.Initializer.parameter.limit">limit</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimit">DataSnowflakeRowAccessPoliciesLimit</a></code> | limit block. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.Initializer.parameter.withDescribe">with_describe</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | (Default: `true`) Runs DESC ROW ACCESS POLICY for each row access policy returned by SHOW ROW ACCESS POLICIES. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/data-sources/row_access_policies#id DataSnowflakeRowAccessPolicies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `in`<sup>Optional</sup> <a name="in" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.Initializer.parameter.in"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesIn">DataSnowflakeRowAccessPoliciesIn</a>

in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/data-sources/row_access_policies#in DataSnowflakeRowAccessPolicies#in}

---

##### `like`<sup>Optional</sup> <a name="like" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.Initializer.parameter.like"></a>

- *Type:* str

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/data-sources/row_access_policies#like DataSnowflakeRowAccessPolicies#like}

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.Initializer.parameter.limit"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimit">DataSnowflakeRowAccessPoliciesLimit</a>

limit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/data-sources/row_access_policies#limit DataSnowflakeRowAccessPolicies#limit}

---

##### `with_describe`<sup>Optional</sup> <a name="with_describe" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.Initializer.parameter.withDescribe"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

(Default: `true`) Runs DESC ROW ACCESS POLICY for each row access policy returned by SHOW ROW ACCESS POLICIES.

The output of describe is saved to the description field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/data-sources/row_access_policies#with_describe DataSnowflakeRowAccessPolicies#with_describe}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.putIn">put_in</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.putLimit">put_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.resetIn">reset_in</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.resetLike">reset_like</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.resetLimit">reset_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.resetWithDescribe">reset_with_describe</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_in` <a name="put_in" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.putIn"></a>

```python
def put_in(
  account: typing.Union[bool, IResolvable] = None,
  application: str = None,
  application_package: str = None,
  database: str = None,
  schema: str = None
) -> None
```

###### `account`<sup>Optional</sup> <a name="account" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.putIn.parameter.account"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Returns records for the entire account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/data-sources/row_access_policies#account DataSnowflakeRowAccessPolicies#account}

---

###### `application`<sup>Optional</sup> <a name="application" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.putIn.parameter.application"></a>

- *Type:* str

Returns records for the specified application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/data-sources/row_access_policies#application DataSnowflakeRowAccessPolicies#application}

---

###### `application_package`<sup>Optional</sup> <a name="application_package" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.putIn.parameter.applicationPackage"></a>

- *Type:* str

Returns records for the specified application package.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/data-sources/row_access_policies#application_package DataSnowflakeRowAccessPolicies#application_package}

---

###### `database`<sup>Optional</sup> <a name="database" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.putIn.parameter.database"></a>

- *Type:* str

Returns records for the current database in use or for a specified database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/data-sources/row_access_policies#database DataSnowflakeRowAccessPolicies#database}

---

###### `schema`<sup>Optional</sup> <a name="schema" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.putIn.parameter.schema"></a>

- *Type:* str

Returns records for the current schema in use or a specified schema. Use fully qualified name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/data-sources/row_access_policies#schema DataSnowflakeRowAccessPolicies#schema}

---

##### `put_limit` <a name="put_limit" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.putLimit"></a>

```python
def put_limit(
  rows: typing.Union[int, float],
  from: str = None
) -> None
```

###### `rows`<sup>Required</sup> <a name="rows" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.putLimit.parameter.rows"></a>

- *Type:* typing.Union[int, float]

The maximum number of rows to return.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/data-sources/row_access_policies#rows DataSnowflakeRowAccessPolicies#rows}

---

###### `from`<sup>Optional</sup> <a name="from" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.putLimit.parameter.from"></a>

- *Type:* str

Specifies a **case-sensitive** pattern that is used to match object name.

After the first match, the limit on the number of rows will be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/data-sources/row_access_policies#from DataSnowflakeRowAccessPolicies#from}

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_in` <a name="reset_in" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.resetIn"></a>

```python
def reset_in() -> None
```

##### `reset_like` <a name="reset_like" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.resetLike"></a>

```python
def reset_like() -> None
```

##### `reset_limit` <a name="reset_limit" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.resetLimit"></a>

```python
def reset_limit() -> None
```

##### `reset_with_describe` <a name="reset_with_describe" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.resetWithDescribe"></a>

```python
def reset_with_describe() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataSnowflakeRowAccessPolicies resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.isConstruct"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_row_access_policies

dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_row_access_policies

dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_row_access_policies

dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_row_access_policies

dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataSnowflakeRowAccessPolicies resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataSnowflakeRowAccessPolicies to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataSnowflakeRowAccessPolicies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/data-sources/row_access_policies#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataSnowflakeRowAccessPolicies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.in">in</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference">DataSnowflakeRowAccessPoliciesInOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.limit">limit</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference">DataSnowflakeRowAccessPoliciesLimitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.rowAccessPolicies">row_access_policies</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesList">DataSnowflakeRowAccessPoliciesRowAccessPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.inInput">in_input</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesIn">DataSnowflakeRowAccessPoliciesIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.likeInput">like_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.limitInput">limit_input</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimit">DataSnowflakeRowAccessPoliciesLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.withDescribeInput">with_describe_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.like">like</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.withDescribe">with_describe</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `in`<sup>Required</sup> <a name="in" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.in"></a>

```python
in: DataSnowflakeRowAccessPoliciesInOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference">DataSnowflakeRowAccessPoliciesInOutputReference</a>

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.limit"></a>

```python
limit: DataSnowflakeRowAccessPoliciesLimitOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference">DataSnowflakeRowAccessPoliciesLimitOutputReference</a>

---

##### `row_access_policies`<sup>Required</sup> <a name="row_access_policies" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.rowAccessPolicies"></a>

```python
row_access_policies: DataSnowflakeRowAccessPoliciesRowAccessPoliciesList
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesList">DataSnowflakeRowAccessPoliciesRowAccessPoliciesList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `in_input`<sup>Optional</sup> <a name="in_input" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.inInput"></a>

```python
in_input: DataSnowflakeRowAccessPoliciesIn
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesIn">DataSnowflakeRowAccessPoliciesIn</a>

---

##### `like_input`<sup>Optional</sup> <a name="like_input" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.likeInput"></a>

```python
like_input: str
```

- *Type:* str

---

##### `limit_input`<sup>Optional</sup> <a name="limit_input" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.limitInput"></a>

```python
limit_input: DataSnowflakeRowAccessPoliciesLimit
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimit">DataSnowflakeRowAccessPoliciesLimit</a>

---

##### `with_describe_input`<sup>Optional</sup> <a name="with_describe_input" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.withDescribeInput"></a>

```python
with_describe_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `like`<sup>Required</sup> <a name="like" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.like"></a>

```python
like: str
```

- *Type:* str

---

##### `with_describe`<sup>Required</sup> <a name="with_describe" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.withDescribe"></a>

```python
with_describe: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPolicies.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeRowAccessPoliciesConfig <a name="DataSnowflakeRowAccessPoliciesConfig" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_row_access_policies

dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  in: DataSnowflakeRowAccessPoliciesIn = None,
  like: str = None,
  limit: DataSnowflakeRowAccessPoliciesLimit = None,
  with_describe: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/data-sources/row_access_policies#id DataSnowflakeRowAccessPolicies#id}. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesConfig.property.in">in</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesIn">DataSnowflakeRowAccessPoliciesIn</a></code> | in block. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesConfig.property.like">like</a></code> | <code>str</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesConfig.property.limit">limit</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimit">DataSnowflakeRowAccessPoliciesLimit</a></code> | limit block. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesConfig.property.withDescribe">with_describe</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | (Default: `true`) Runs DESC ROW ACCESS POLICY for each row access policy returned by SHOW ROW ACCESS POLICIES. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/data-sources/row_access_policies#id DataSnowflakeRowAccessPolicies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `in`<sup>Optional</sup> <a name="in" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesConfig.property.in"></a>

```python
in: DataSnowflakeRowAccessPoliciesIn
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesIn">DataSnowflakeRowAccessPoliciesIn</a>

in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/data-sources/row_access_policies#in DataSnowflakeRowAccessPolicies#in}

---

##### `like`<sup>Optional</sup> <a name="like" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesConfig.property.like"></a>

```python
like: str
```

- *Type:* str

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/data-sources/row_access_policies#like DataSnowflakeRowAccessPolicies#like}

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesConfig.property.limit"></a>

```python
limit: DataSnowflakeRowAccessPoliciesLimit
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimit">DataSnowflakeRowAccessPoliciesLimit</a>

limit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/data-sources/row_access_policies#limit DataSnowflakeRowAccessPolicies#limit}

---

##### `with_describe`<sup>Optional</sup> <a name="with_describe" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesConfig.property.withDescribe"></a>

```python
with_describe: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

(Default: `true`) Runs DESC ROW ACCESS POLICY for each row access policy returned by SHOW ROW ACCESS POLICIES.

The output of describe is saved to the description field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/data-sources/row_access_policies#with_describe DataSnowflakeRowAccessPolicies#with_describe}

---

### DataSnowflakeRowAccessPoliciesIn <a name="DataSnowflakeRowAccessPoliciesIn" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesIn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesIn.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_row_access_policies

dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesIn(
  account: typing.Union[bool, IResolvable] = None,
  application: str = None,
  application_package: str = None,
  database: str = None,
  schema: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesIn.property.account">account</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Returns records for the entire account. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesIn.property.application">application</a></code> | <code>str</code> | Returns records for the specified application. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesIn.property.applicationPackage">application_package</a></code> | <code>str</code> | Returns records for the specified application package. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesIn.property.database">database</a></code> | <code>str</code> | Returns records for the current database in use or for a specified database. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesIn.property.schema">schema</a></code> | <code>str</code> | Returns records for the current schema in use or a specified schema. Use fully qualified name. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesIn.property.account"></a>

```python
account: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Returns records for the entire account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/data-sources/row_access_policies#account DataSnowflakeRowAccessPolicies#account}

---

##### `application`<sup>Optional</sup> <a name="application" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesIn.property.application"></a>

```python
application: str
```

- *Type:* str

Returns records for the specified application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/data-sources/row_access_policies#application DataSnowflakeRowAccessPolicies#application}

---

##### `application_package`<sup>Optional</sup> <a name="application_package" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesIn.property.applicationPackage"></a>

```python
application_package: str
```

- *Type:* str

Returns records for the specified application package.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/data-sources/row_access_policies#application_package DataSnowflakeRowAccessPolicies#application_package}

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesIn.property.database"></a>

```python
database: str
```

- *Type:* str

Returns records for the current database in use or for a specified database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/data-sources/row_access_policies#database DataSnowflakeRowAccessPolicies#database}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesIn.property.schema"></a>

```python
schema: str
```

- *Type:* str

Returns records for the current schema in use or a specified schema. Use fully qualified name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/data-sources/row_access_policies#schema DataSnowflakeRowAccessPolicies#schema}

---

### DataSnowflakeRowAccessPoliciesLimit <a name="DataSnowflakeRowAccessPoliciesLimit" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimit.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_row_access_policies

dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimit(
  rows: typing.Union[int, float],
  from: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimit.property.rows">rows</a></code> | <code>typing.Union[int, float]</code> | The maximum number of rows to return. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimit.property.from">from</a></code> | <code>str</code> | Specifies a **case-sensitive** pattern that is used to match object name. |

---

##### `rows`<sup>Required</sup> <a name="rows" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimit.property.rows"></a>

```python
rows: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of rows to return.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/data-sources/row_access_policies#rows DataSnowflakeRowAccessPolicies#rows}

---

##### `from`<sup>Optional</sup> <a name="from" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimit.property.from"></a>

```python
from: str
```

- *Type:* str

Specifies a **case-sensitive** pattern that is used to match object name.

After the first match, the limit on the number of rows will be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/data-sources/row_access_policies#from DataSnowflakeRowAccessPolicies#from}

---

### DataSnowflakeRowAccessPoliciesRowAccessPolicies <a name="DataSnowflakeRowAccessPoliciesRowAccessPolicies" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPolicies.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_row_access_policies

dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPolicies()
```


### DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutput <a name="DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutput" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutput.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_row_access_policies

dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutput()
```


### DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignature <a name="DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignature" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignature"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignature.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_row_access_policies

dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignature()
```


### DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutput <a name="DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutput" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutput.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_row_access_policies

dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutput()
```


## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakeRowAccessPoliciesInOutputReference <a name="DataSnowflakeRowAccessPoliciesInOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_row_access_policies

dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.resetAccount">reset_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.resetApplication">reset_application</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.resetApplicationPackage">reset_application_package</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.resetDatabase">reset_database</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.resetSchema">reset_schema</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_account` <a name="reset_account" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.resetAccount"></a>

```python
def reset_account() -> None
```

##### `reset_application` <a name="reset_application" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.resetApplication"></a>

```python
def reset_application() -> None
```

##### `reset_application_package` <a name="reset_application_package" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.resetApplicationPackage"></a>

```python
def reset_application_package() -> None
```

##### `reset_database` <a name="reset_database" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.resetDatabase"></a>

```python
def reset_database() -> None
```

##### `reset_schema` <a name="reset_schema" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.resetSchema"></a>

```python
def reset_schema() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.property.accountInput">account_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.property.applicationInput">application_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.property.applicationPackageInput">application_package_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.property.schemaInput">schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.property.account">account</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.property.application">application</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.property.applicationPackage">application_package</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.property.schema">schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesIn">DataSnowflakeRowAccessPoliciesIn</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_input`<sup>Optional</sup> <a name="account_input" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.property.accountInput"></a>

```python
account_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `application_input`<sup>Optional</sup> <a name="application_input" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.property.applicationInput"></a>

```python
application_input: str
```

- *Type:* str

---

##### `application_package_input`<sup>Optional</sup> <a name="application_package_input" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.property.applicationPackageInput"></a>

```python
application_package_input: str
```

- *Type:* str

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.property.schemaInput"></a>

```python
schema_input: str
```

- *Type:* str

---

##### `account`<sup>Required</sup> <a name="account" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.property.account"></a>

```python
account: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `application`<sup>Required</sup> <a name="application" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.property.application"></a>

```python
application: str
```

- *Type:* str

---

##### `application_package`<sup>Required</sup> <a name="application_package" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.property.applicationPackage"></a>

```python
application_package: str
```

- *Type:* str

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.property.schema"></a>

```python
schema: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesInOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeRowAccessPoliciesIn
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesIn">DataSnowflakeRowAccessPoliciesIn</a>

---


### DataSnowflakeRowAccessPoliciesLimitOutputReference <a name="DataSnowflakeRowAccessPoliciesLimitOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_row_access_policies

dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.resetFrom">reset_from</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_from` <a name="reset_from" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.resetFrom"></a>

```python
def reset_from() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.property.fromInput">from_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.property.rowsInput">rows_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.property.from">from</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.property.rows">rows</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimit">DataSnowflakeRowAccessPoliciesLimit</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `from_input`<sup>Optional</sup> <a name="from_input" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.property.fromInput"></a>

```python
from_input: str
```

- *Type:* str

---

##### `rows_input`<sup>Optional</sup> <a name="rows_input" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.property.rowsInput"></a>

```python
rows_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.property.from"></a>

```python
from: str
```

- *Type:* str

---

##### `rows`<sup>Required</sup> <a name="rows" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.property.rows"></a>

```python
rows: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimitOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeRowAccessPoliciesLimit
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesLimit">DataSnowflakeRowAccessPoliciesLimit</a>

---


### DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputList <a name="DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputList" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_row_access_policies

dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference <a name="DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_row_access_policies

dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.property.body">body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.property.returnType">return_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.property.signature">signature</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureList">DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutput">DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.property.body"></a>

```python
body: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `return_type`<sup>Required</sup> <a name="return_type" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.property.returnType"></a>

```python
return_type: str
```

- *Type:* str

---

##### `signature`<sup>Required</sup> <a name="signature" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.property.signature"></a>

```python
signature: DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureList
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureList">DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutput
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutput">DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutput</a>

---


### DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureList <a name="DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureList" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_row_access_policies

dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference <a name="DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_row_access_policies

dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignature">DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignature</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignatureOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignature
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignature">DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputSignature</a>

---


### DataSnowflakeRowAccessPoliciesRowAccessPoliciesList <a name="DataSnowflakeRowAccessPoliciesRowAccessPoliciesList" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_row_access_policies

dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference <a name="DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_row_access_policies

dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.property.describeOutput">describe_output</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputList">DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.property.showOutput">show_output</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputList">DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPolicies">DataSnowflakeRowAccessPoliciesRowAccessPolicies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `describe_output`<sup>Required</sup> <a name="describe_output" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.property.describeOutput"></a>

```python
describe_output: DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputList
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputList">DataSnowflakeRowAccessPoliciesRowAccessPoliciesDescribeOutputList</a>

---

##### `show_output`<sup>Required</sup> <a name="show_output" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.property.showOutput"></a>

```python
show_output: DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputList
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputList">DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeRowAccessPoliciesRowAccessPolicies
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPolicies">DataSnowflakeRowAccessPoliciesRowAccessPolicies</a>

---


### DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputList <a name="DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputList" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_row_access_policies

dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference <a name="DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_row_access_policies

dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.property.options">options</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.property.ownerRoleType">owner_role_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutput">DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.property.options"></a>

```python
options: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `owner_role_type`<sup>Required</sup> <a name="owner_role_type" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.property.ownerRoleType"></a>

```python
owner_role_type: str
```

- *Type:* str

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutputOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutput
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeRowAccessPolicies.DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutput">DataSnowflakeRowAccessPoliciesRowAccessPoliciesShowOutput</a>

---



