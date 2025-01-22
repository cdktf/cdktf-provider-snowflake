# `dataSnowflakeFailoverGroups` Submodule <a name="`dataSnowflakeFailoverGroups` Submodule" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeFailoverGroups <a name="DataSnowflakeFailoverGroups" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/data-sources/failover_groups snowflake_failover_groups}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_failover_groups

dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups(
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
  in_account: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/data-sources/failover_groups#id DataSnowflakeFailoverGroups#id}. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.Initializer.parameter.inAccount">in_account</a></code> | <code>str</code> | Specifies the identifier for the account. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/data-sources/failover_groups#id DataSnowflakeFailoverGroups#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `in_account`<sup>Optional</sup> <a name="in_account" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.Initializer.parameter.inAccount"></a>

- *Type:* str

Specifies the identifier for the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/data-sources/failover_groups#in_account DataSnowflakeFailoverGroups#in_account}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.resetInAccount">reset_in_account</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_in_account` <a name="reset_in_account" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.resetInAccount"></a>

```python
def reset_in_account() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataSnowflakeFailoverGroups resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.isConstruct"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_failover_groups

dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_failover_groups

dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_failover_groups

dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_failover_groups

dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataSnowflakeFailoverGroups resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataSnowflakeFailoverGroups to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataSnowflakeFailoverGroups that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/data-sources/failover_groups#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataSnowflakeFailoverGroups to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.failoverGroups">failover_groups</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsList">DataSnowflakeFailoverGroupsFailoverGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.inAccountInput">in_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.inAccount">in_account</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `failover_groups`<sup>Required</sup> <a name="failover_groups" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.failoverGroups"></a>

```python
failover_groups: DataSnowflakeFailoverGroupsFailoverGroupsList
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsList">DataSnowflakeFailoverGroupsFailoverGroupsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `in_account_input`<sup>Optional</sup> <a name="in_account_input" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.inAccountInput"></a>

```python
in_account_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `in_account`<sup>Required</sup> <a name="in_account" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.inAccount"></a>

```python
in_account: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroups.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeFailoverGroupsConfig <a name="DataSnowflakeFailoverGroupsConfig" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_failover_groups

dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  in_account: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/data-sources/failover_groups#id DataSnowflakeFailoverGroups#id}. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsConfig.property.inAccount">in_account</a></code> | <code>str</code> | Specifies the identifier for the account. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/data-sources/failover_groups#id DataSnowflakeFailoverGroups#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `in_account`<sup>Optional</sup> <a name="in_account" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsConfig.property.inAccount"></a>

```python
in_account: str
```

- *Type:* str

Specifies the identifier for the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/data-sources/failover_groups#in_account DataSnowflakeFailoverGroups#in_account}

---

### DataSnowflakeFailoverGroupsFailoverGroups <a name="DataSnowflakeFailoverGroupsFailoverGroups" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroups.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_failover_groups

dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroups()
```


## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakeFailoverGroupsFailoverGroupsList <a name="DataSnowflakeFailoverGroupsFailoverGroupsList" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_failover_groups

dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSnowflakeFailoverGroupsFailoverGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSnowflakeFailoverGroupsFailoverGroupsOutputReference <a name="DataSnowflakeFailoverGroupsFailoverGroupsOutputReference" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import data_snowflake_failover_groups

dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.accountLocator">account_locator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.accountName">account_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.allowedAccounts">allowed_accounts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.allowedIntegrationTypes">allowed_integration_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.isPrimary">is_primary</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.nextScheduledRefresh">next_scheduled_refresh</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.objectTypes">object_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.organizationName">organization_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.primary">primary</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.regionGroup">region_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.replicationSchedule">replication_schedule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.secondaryState">secondary_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.snowflakeRegion">snowflake_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroups">DataSnowflakeFailoverGroupsFailoverGroups</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_locator`<sup>Required</sup> <a name="account_locator" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.accountLocator"></a>

```python
account_locator: str
```

- *Type:* str

---

##### `account_name`<sup>Required</sup> <a name="account_name" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.accountName"></a>

```python
account_name: str
```

- *Type:* str

---

##### `allowed_accounts`<sup>Required</sup> <a name="allowed_accounts" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.allowedAccounts"></a>

```python
allowed_accounts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_integration_types`<sup>Required</sup> <a name="allowed_integration_types" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.allowedIntegrationTypes"></a>

```python
allowed_integration_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `is_primary`<sup>Required</sup> <a name="is_primary" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.isPrimary"></a>

```python
is_primary: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `next_scheduled_refresh`<sup>Required</sup> <a name="next_scheduled_refresh" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.nextScheduledRefresh"></a>

```python
next_scheduled_refresh: str
```

- *Type:* str

---

##### `object_types`<sup>Required</sup> <a name="object_types" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.objectTypes"></a>

```python
object_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `organization_name`<sup>Required</sup> <a name="organization_name" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.organizationName"></a>

```python
organization_name: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.primary"></a>

```python
primary: str
```

- *Type:* str

---

##### `region_group`<sup>Required</sup> <a name="region_group" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.regionGroup"></a>

```python
region_group: str
```

- *Type:* str

---

##### `replication_schedule`<sup>Required</sup> <a name="replication_schedule" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.replicationSchedule"></a>

```python
replication_schedule: str
```

- *Type:* str

---

##### `secondary_state`<sup>Required</sup> <a name="secondary_state" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.secondaryState"></a>

```python
secondary_state: str
```

- *Type:* str

---

##### `snowflake_region`<sup>Required</sup> <a name="snowflake_region" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.snowflakeRegion"></a>

```python
snowflake_region: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroupsOutputReference.property.internalValue"></a>

```python
internal_value: DataSnowflakeFailoverGroupsFailoverGroups
```

- *Type:* <a href="#@cdktf/provider-snowflake.dataSnowflakeFailoverGroups.DataSnowflakeFailoverGroupsFailoverGroups">DataSnowflakeFailoverGroupsFailoverGroups</a>

---



