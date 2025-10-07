# `dataSnowflakeGitRepositories` Submodule <a name="`dataSnowflakeGitRepositories` Submodule" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeGitRepositories <a name="DataSnowflakeGitRepositories" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/data-sources/git_repositories snowflake_git_repositories}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_git_repositories

dataSnowflakeGitRepositories.DataSnowflakeGitRepositories(
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
  in: DataSnowflakeGitRepositoriesIn = None,
  like: str = None,
  limit: DataSnowflakeGitRepositoriesLimit = None,
  with_describe: bool | IResolvable = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/data-sources/git_repositories#id DataSnowflakeGitRepositories#id}. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.Initializer.parameter.in">in</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesIn">DataSnowflakeGitRepositoriesIn</a></code> | in block. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.Initializer.parameter.like">like</a></code> | <code>str</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.Initializer.parameter.limit">limit</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesLimit">DataSnowflakeGitRepositoriesLimit</a></code> | limit block. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.Initializer.parameter.withDescribe">with_describe</a></code> | <code>bool \| cdktf.IResolvable</code> | (Default: `true`) Runs DESC GIT REPOSITORY for each git repository returned by SHOW GIT REPOSITORIES. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/data-sources/git_repositories#id DataSnowflakeGitRepositories#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `in`<sup>Optional</sup> <a name="in" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.Initializer.parameter.in"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesIn">DataSnowflakeGitRepositoriesIn</a>

in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/data-sources/git_repositories#in DataSnowflakeGitRepositories#in}

---

##### `like`<sup>Optional</sup> <a name="like" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.Initializer.parameter.like"></a>

- *Type:* str

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/data-sources/git_repositories#like DataSnowflakeGitRepositories#like}

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.Initializer.parameter.limit"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesLimit">DataSnowflakeGitRepositoriesLimit</a>

limit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/data-sources/git_repositories#limit DataSnowflakeGitRepositories#limit}

---

##### `with_describe`<sup>Optional</sup> <a name="with_describe" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.Initializer.parameter.withDescribe"></a>

- *Type:* bool | cdktf.IResolvable

(Default: `true`) Runs DESC GIT REPOSITORY for each git repository returned by SHOW GIT REPOSITORIES.

The output of describe is saved to the description field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/data-sources/git_repositories#with_describe DataSnowflakeGitRepositories#with_describe}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.putIn">put_in</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.putLimit">put_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.resetIn">reset_in</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.resetLike">reset_like</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.resetLimit">reset_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.resetWithDescribe">reset_with_describe</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_in` <a name="put_in" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.putIn"></a>

```python
def put_in(
  account: bool | IResolvable = None,
  database: str = None,
  schema: str = None
) -> None
```

###### `account`<sup>Optional</sup> <a name="account" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.putIn.parameter.account"></a>

- *Type:* bool | cdktf.IResolvable

Returns records for the entire account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/data-sources/git_repositories#account DataSnowflakeGitRepositories#account}

---

###### `database`<sup>Optional</sup> <a name="database" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.putIn.parameter.database"></a>

- *Type:* str

Returns records for the current database in use or for a specified database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/data-sources/git_repositories#database DataSnowflakeGitRepositories#database}

---

###### `schema`<sup>Optional</sup> <a name="schema" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.putIn.parameter.schema"></a>

- *Type:* str

Returns records for the current schema in use or a specified schema. Use fully qualified name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/data-sources/git_repositories#schema DataSnowflakeGitRepositories#schema}

---

##### `put_limit` <a name="put_limit" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.putLimit"></a>

```python
def put_limit(
  rows: typing.Union[int, float],
  from: str = None
) -> None
```

###### `rows`<sup>Required</sup> <a name="rows" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.putLimit.parameter.rows"></a>

- *Type:* typing.Union[int, float]

The maximum number of rows to return.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/data-sources/git_repositories#rows DataSnowflakeGitRepositories#rows}

---

###### `from`<sup>Optional</sup> <a name="from" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.putLimit.parameter.from"></a>

- *Type:* str

Specifies a **case-sensitive** pattern that is used to match object name.

After the first match, the limit on the number of rows will be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/data-sources/git_repositories#from DataSnowflakeGitRepositories#from}

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_in` <a name="reset_in" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.resetIn"></a>

```python
def reset_in() -> None
```

##### `reset_like` <a name="reset_like" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.resetLike"></a>

```python
def reset_like() -> None
```

##### `reset_limit` <a name="reset_limit" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.resetLimit"></a>

```python
def reset_limit() -> None
```

##### `reset_with_describe` <a name="reset_with_describe" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.resetWithDescribe"></a>

```python
def reset_with_describe() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataSnowflakeGitRepositories resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.isConstruct"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_git_repositories

dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_git_repositories

dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_git_repositories

dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_git_repositories

dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataSnowflakeGitRepositories resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataSnowflakeGitRepositories to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataSnowflakeGitRepositories that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/data-sources/git_repositories#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataSnowflakeGitRepositories to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.property.gitRepositories">git_repositories</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesList">DataSnowflakeGitRepositoriesGitRepositoriesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.property.in">in</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesInOutputReference">DataSnowflakeGitRepositoriesInOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.property.limit">limit</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesLimitOutputReference">DataSnowflakeGitRepositoriesLimitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.property.inInput">in_input</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesIn">DataSnowflakeGitRepositoriesIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.property.likeInput">like_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.property.limitInput">limit_input</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesLimit">DataSnowflakeGitRepositoriesLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.property.withDescribeInput">with_describe_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.property.like">like</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.property.withDescribe">with_describe</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `git_repositories`<sup>Required</sup> <a name="git_repositories" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.property.gitRepositories"></a>

```python
git_repositories: DataSnowflakeGitRepositoriesGitRepositoriesList
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesList">DataSnowflakeGitRepositoriesGitRepositoriesList</a>

---

##### `in`<sup>Required</sup> <a name="in" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.property.in"></a>

```python
in: DataSnowflakeGitRepositoriesInOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesInOutputReference">DataSnowflakeGitRepositoriesInOutputReference</a>

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.property.limit"></a>

```python
limit: DataSnowflakeGitRepositoriesLimitOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesLimitOutputReference">DataSnowflakeGitRepositoriesLimitOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `in_input`<sup>Optional</sup> <a name="in_input" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.property.inInput"></a>

```python
in_input: DataSnowflakeGitRepositoriesIn
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesIn">DataSnowflakeGitRepositoriesIn</a>

---

##### `like_input`<sup>Optional</sup> <a name="like_input" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.property.likeInput"></a>

```python
like_input: str
```

- *Type:* str

---

##### `limit_input`<sup>Optional</sup> <a name="limit_input" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.property.limitInput"></a>

```python
limit_input: DataSnowflakeGitRepositoriesLimit
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesLimit">DataSnowflakeGitRepositoriesLimit</a>

---

##### `with_describe_input`<sup>Optional</sup> <a name="with_describe_input" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.property.withDescribeInput"></a>

```python
with_describe_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `like`<sup>Required</sup> <a name="like" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.property.like"></a>

```python
like: str
```

- *Type:* str

---

##### `with_describe`<sup>Required</sup> <a name="with_describe" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.property.withDescribe"></a>

```python
with_describe: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositories.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeGitRepositoriesConfig <a name="DataSnowflakeGitRepositoriesConfig" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_git_repositories

dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  id: str = None,
  in: DataSnowflakeGitRepositoriesIn = None,
  like: str = None,
  limit: DataSnowflakeGitRepositoriesLimit = None,
  with_describe: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/data-sources/git_repositories#id DataSnowflakeGitRepositories#id}. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesConfig.property.in">in</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesIn">DataSnowflakeGitRepositoriesIn</a></code> | in block. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesConfig.property.like">like</a></code> | <code>str</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesConfig.property.limit">limit</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesLimit">DataSnowflakeGitRepositoriesLimit</a></code> | limit block. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesConfig.property.withDescribe">with_describe</a></code> | <code>bool \| cdktf.IResolvable</code> | (Default: `true`) Runs DESC GIT REPOSITORY for each git repository returned by SHOW GIT REPOSITORIES. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/data-sources/git_repositories#id DataSnowflakeGitRepositories#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `in`<sup>Optional</sup> <a name="in" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesConfig.property.in"></a>

```python
in: DataSnowflakeGitRepositoriesIn
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesIn">DataSnowflakeGitRepositoriesIn</a>

in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/data-sources/git_repositories#in DataSnowflakeGitRepositories#in}

---

##### `like`<sup>Optional</sup> <a name="like" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesConfig.property.like"></a>

```python
like: str
```

- *Type:* str

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/data-sources/git_repositories#like DataSnowflakeGitRepositories#like}

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesConfig.property.limit"></a>

```python
limit: DataSnowflakeGitRepositoriesLimit
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesLimit">DataSnowflakeGitRepositoriesLimit</a>

limit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/data-sources/git_repositories#limit DataSnowflakeGitRepositories#limit}

---

##### `with_describe`<sup>Optional</sup> <a name="with_describe" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesConfig.property.withDescribe"></a>

```python
with_describe: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

(Default: `true`) Runs DESC GIT REPOSITORY for each git repository returned by SHOW GIT REPOSITORIES.

The output of describe is saved to the description field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/data-sources/git_repositories#with_describe DataSnowflakeGitRepositories#with_describe}

---

### DataSnowflakeGitRepositoriesGitRepositories <a name="DataSnowflakeGitRepositoriesGitRepositories" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositories"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositories.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_git_repositories

dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositories()
```


### DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutput <a name="DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutput" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutput.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_git_repositories

dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutput()
```


### DataSnowflakeGitRepositoriesGitRepositoriesShowOutput <a name="DataSnowflakeGitRepositoriesGitRepositoriesShowOutput" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutput.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_git_repositories

dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutput()
```


### DataSnowflakeGitRepositoriesIn <a name="DataSnowflakeGitRepositoriesIn" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesIn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesIn.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_git_repositories

dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesIn(
  account: bool | IResolvable = None,
  database: str = None,
  schema: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesIn.property.account">account</a></code> | <code>bool \| cdktf.IResolvable</code> | Returns records for the entire account. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesIn.property.database">database</a></code> | <code>str</code> | Returns records for the current database in use or for a specified database. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesIn.property.schema">schema</a></code> | <code>str</code> | Returns records for the current schema in use or a specified schema. Use fully qualified name. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesIn.property.account"></a>

```python
account: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Returns records for the entire account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/data-sources/git_repositories#account DataSnowflakeGitRepositories#account}

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesIn.property.database"></a>

```python
database: str
```

- *Type:* str

Returns records for the current database in use or for a specified database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/data-sources/git_repositories#database DataSnowflakeGitRepositories#database}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesIn.property.schema"></a>

```python
schema: str
```

- *Type:* str

Returns records for the current schema in use or a specified schema. Use fully qualified name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/data-sources/git_repositories#schema DataSnowflakeGitRepositories#schema}

---

### DataSnowflakeGitRepositoriesLimit <a name="DataSnowflakeGitRepositoriesLimit" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesLimit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesLimit.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_git_repositories

dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesLimit(
  rows: typing.Union[int, float],
  from: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesLimit.property.rows">rows</a></code> | <code>typing.Union[int, float]</code> | The maximum number of rows to return. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesLimit.property.from">from</a></code> | <code>str</code> | Specifies a **case-sensitive** pattern that is used to match object name. |

---

##### `rows`<sup>Required</sup> <a name="rows" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesLimit.property.rows"></a>

```python
rows: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of rows to return.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/data-sources/git_repositories#rows DataSnowflakeGitRepositories#rows}

---

##### `from`<sup>Optional</sup> <a name="from" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesLimit.property.from"></a>

```python
from: str
```

- *Type:* str

Specifies a **case-sensitive** pattern that is used to match object name.

After the first match, the limit on the number of rows will be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/data-sources/git_repositories#from DataSnowflakeGitRepositories#from}

---

## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputList <a name="DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputList" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_git_repositories

dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputOutputReference <a name="DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_git_repositories

dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputOutputReference.property.apiIntegration">api_integration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputOutputReference.property.gitCredentials">git_credentials</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputOutputReference.property.lastFetchedAt">last_fetched_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputOutputReference.property.origin">origin</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputOutputReference.property.ownerRoleType">owner_role_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutput">DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_integration`<sup>Required</sup> <a name="api_integration" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputOutputReference.property.apiIntegration"></a>

```python
api_integration: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `git_credentials`<sup>Required</sup> <a name="git_credentials" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputOutputReference.property.gitCredentials"></a>

```python
git_credentials: str
```

- *Type:* str

---

##### `last_fetched_at`<sup>Required</sup> <a name="last_fetched_at" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputOutputReference.property.lastFetchedAt"></a>

```python
last_fetched_at: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputOutputReference.property.origin"></a>

```python
origin: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `owner_role_type`<sup>Required</sup> <a name="owner_role_type" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputOutputReference.property.ownerRoleType"></a>

```python
owner_role_type: str
```

- *Type:* str

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutput
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutput">DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutput</a>

---


### DataSnowflakeGitRepositoriesGitRepositoriesList <a name="DataSnowflakeGitRepositoriesGitRepositoriesList" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_git_repositories

dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSnowflakeGitRepositoriesGitRepositoriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSnowflakeGitRepositoriesGitRepositoriesOutputReference <a name="DataSnowflakeGitRepositoriesGitRepositoriesOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_git_repositories

dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesOutputReference.property.describeOutput">describe_output</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputList">DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesOutputReference.property.showOutput">show_output</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputList">DataSnowflakeGitRepositoriesGitRepositoriesShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositories">DataSnowflakeGitRepositoriesGitRepositories</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `describe_output`<sup>Required</sup> <a name="describe_output" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesOutputReference.property.describeOutput"></a>

```python
describe_output: DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputList
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputList">DataSnowflakeGitRepositoriesGitRepositoriesDescribeOutputList</a>

---

##### `show_output`<sup>Required</sup> <a name="show_output" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesOutputReference.property.showOutput"></a>

```python
show_output: DataSnowflakeGitRepositoriesGitRepositoriesShowOutputList
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputList">DataSnowflakeGitRepositoriesGitRepositoriesShowOutputList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeGitRepositoriesGitRepositories
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositories">DataSnowflakeGitRepositoriesGitRepositories</a>

---


### DataSnowflakeGitRepositoriesGitRepositoriesShowOutputList <a name="DataSnowflakeGitRepositoriesGitRepositoriesShowOutputList" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_git_repositories

dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSnowflakeGitRepositoriesGitRepositoriesShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSnowflakeGitRepositoriesGitRepositoriesShowOutputOutputReference <a name="DataSnowflakeGitRepositoriesGitRepositoriesShowOutputOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_git_repositories

dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputOutputReference.property.apiIntegration">api_integration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputOutputReference.property.gitCredentials">git_credentials</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputOutputReference.property.lastFetchedAt">last_fetched_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputOutputReference.property.origin">origin</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputOutputReference.property.ownerRoleType">owner_role_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutput">DataSnowflakeGitRepositoriesGitRepositoriesShowOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_integration`<sup>Required</sup> <a name="api_integration" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputOutputReference.property.apiIntegration"></a>

```python
api_integration: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `git_credentials`<sup>Required</sup> <a name="git_credentials" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputOutputReference.property.gitCredentials"></a>

```python
git_credentials: str
```

- *Type:* str

---

##### `last_fetched_at`<sup>Required</sup> <a name="last_fetched_at" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputOutputReference.property.lastFetchedAt"></a>

```python
last_fetched_at: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputOutputReference.property.origin"></a>

```python
origin: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `owner_role_type`<sup>Required</sup> <a name="owner_role_type" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputOutputReference.property.ownerRoleType"></a>

```python
owner_role_type: str
```

- *Type:* str

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutputOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeGitRepositoriesGitRepositoriesShowOutput
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesGitRepositoriesShowOutput">DataSnowflakeGitRepositoriesGitRepositoriesShowOutput</a>

---


### DataSnowflakeGitRepositoriesInOutputReference <a name="DataSnowflakeGitRepositoriesInOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesInOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesInOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_git_repositories

dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesInOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesInOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesInOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesInOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesInOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesInOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesInOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesInOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesInOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesInOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesInOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesInOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesInOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesInOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesInOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesInOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesInOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesInOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesInOutputReference.resetAccount">reset_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesInOutputReference.resetDatabase">reset_database</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesInOutputReference.resetSchema">reset_schema</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesInOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesInOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesInOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesInOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesInOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesInOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesInOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesInOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesInOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesInOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesInOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesInOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesInOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesInOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesInOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesInOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesInOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesInOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesInOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesInOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesInOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesInOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesInOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesInOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_account` <a name="reset_account" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesInOutputReference.resetAccount"></a>

```python
def reset_account() -> None
```

##### `reset_database` <a name="reset_database" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesInOutputReference.resetDatabase"></a>

```python
def reset_database() -> None
```

##### `reset_schema` <a name="reset_schema" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesInOutputReference.resetSchema"></a>

```python
def reset_schema() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesInOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesInOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesInOutputReference.property.accountInput">account_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesInOutputReference.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesInOutputReference.property.schemaInput">schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesInOutputReference.property.account">account</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesInOutputReference.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesInOutputReference.property.schema">schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesInOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesIn">DataSnowflakeGitRepositoriesIn</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesInOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesInOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_input`<sup>Optional</sup> <a name="account_input" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesInOutputReference.property.accountInput"></a>

```python
account_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesInOutputReference.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesInOutputReference.property.schemaInput"></a>

```python
schema_input: str
```

- *Type:* str

---

##### `account`<sup>Required</sup> <a name="account" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesInOutputReference.property.account"></a>

```python
account: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesInOutputReference.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesInOutputReference.property.schema"></a>

```python
schema: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesInOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeGitRepositoriesIn
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesIn">DataSnowflakeGitRepositoriesIn</a>

---


### DataSnowflakeGitRepositoriesLimitOutputReference <a name="DataSnowflakeGitRepositoriesLimitOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesLimitOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_git_repositories

dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesLimitOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesLimitOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesLimitOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesLimitOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesLimitOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesLimitOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesLimitOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesLimitOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesLimitOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesLimitOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesLimitOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesLimitOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesLimitOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesLimitOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesLimitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesLimitOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesLimitOutputReference.resetFrom">reset_from</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesLimitOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesLimitOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesLimitOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesLimitOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesLimitOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesLimitOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesLimitOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesLimitOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesLimitOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesLimitOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesLimitOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesLimitOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesLimitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesLimitOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_from` <a name="reset_from" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesLimitOutputReference.resetFrom"></a>

```python
def reset_from() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesLimitOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesLimitOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesLimitOutputReference.property.fromInput">from_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesLimitOutputReference.property.rowsInput">rows_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesLimitOutputReference.property.from">from</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesLimitOutputReference.property.rows">rows</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesLimitOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesLimit">DataSnowflakeGitRepositoriesLimit</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesLimitOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesLimitOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `from_input`<sup>Optional</sup> <a name="from_input" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesLimitOutputReference.property.fromInput"></a>

```python
from_input: str
```

- *Type:* str

---

##### `rows_input`<sup>Optional</sup> <a name="rows_input" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesLimitOutputReference.property.rowsInput"></a>

```python
rows_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesLimitOutputReference.property.from"></a>

```python
from: str
```

- *Type:* str

---

##### `rows`<sup>Required</sup> <a name="rows" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesLimitOutputReference.property.rows"></a>

```python
rows: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesLimitOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeGitRepositoriesLimit
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeGitRepositories.DataSnowflakeGitRepositoriesLimit">DataSnowflakeGitRepositoriesLimit</a>

---



