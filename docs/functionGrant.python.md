# `snowflake_function_grant`

Refer to the Terraform Registory for docs: [`snowflake_function_grant`](https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/function_grant).

# `functionGrant` Submodule <a name="`functionGrant` Submodule" id="@cdktf/provider-snowflake.functionGrant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FunctionGrant <a name="FunctionGrant" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/function_grant snowflake_function_grant}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import function_grant

functionGrant.FunctionGrant(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  database_name: str,
  roles: typing.List[str],
  argument_data_types: typing.List[str] = None,
  enable_multiple_grants: typing.Union[bool, IResolvable] = None,
  function_name: str = None,
  id: str = None,
  on_all: typing.Union[bool, IResolvable] = None,
  on_future: typing.Union[bool, IResolvable] = None,
  privilege: str = None,
  schema_name: str = None,
  shares: typing.List[str] = None,
  with_grant_option: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.Initializer.parameter.databaseName">database_name</a></code> | <code>str</code> | The name of the database containing the current or future functions on which to grant privileges. |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.Initializer.parameter.roles">roles</a></code> | <code>typing.List[str]</code> | Grants privilege to these roles. |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.Initializer.parameter.argumentDataTypes">argument_data_types</a></code> | <code>typing.List[str]</code> | List of the argument data types for the function (must be present if function has arguments and function_name is present). |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.Initializer.parameter.enableMultipleGrants">enable_multiple_grants</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When this is set to true, multiple grants of the same type can be created. |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.Initializer.parameter.functionName">function_name</a></code> | <code>str</code> | The name of the function on which to grant privileges immediately (only valid if on_future is false). |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/function_grant#id FunctionGrant#id}. |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.Initializer.parameter.onAll">on_all</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When this is set to true and a schema_name is provided, apply this grant on all functions in the given schema. |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.Initializer.parameter.onFuture">on_future</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When this is set to true and a schema_name is provided, apply this grant on all future functions in the given schema. |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.Initializer.parameter.privilege">privilege</a></code> | <code>str</code> | The privilege to grant on the current or future function. Must be one of `USAGE` or `OWNERSHIP`. |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.Initializer.parameter.schemaName">schema_name</a></code> | <code>str</code> | The name of the schema containing the current or future functions on which to grant privileges. |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.Initializer.parameter.shares">shares</a></code> | <code>typing.List[str]</code> | Grants privilege to these shares (only valid if on_future is false). |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.Initializer.parameter.withGrantOption">with_grant_option</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When this is set to true, allows the recipient role to grant the privileges to other roles. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.Initializer.parameter.databaseName"></a>

- *Type:* str

The name of the database containing the current or future functions on which to grant privileges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/function_grant#database_name FunctionGrant#database_name}

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.Initializer.parameter.roles"></a>

- *Type:* typing.List[str]

Grants privilege to these roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/function_grant#roles FunctionGrant#roles}

---

##### `argument_data_types`<sup>Optional</sup> <a name="argument_data_types" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.Initializer.parameter.argumentDataTypes"></a>

- *Type:* typing.List[str]

List of the argument data types for the function (must be present if function has arguments and function_name is present).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/function_grant#argument_data_types FunctionGrant#argument_data_types}

---

##### `enable_multiple_grants`<sup>Optional</sup> <a name="enable_multiple_grants" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.Initializer.parameter.enableMultipleGrants"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

When this is set to true, multiple grants of the same type can be created.

This will cause Terraform to not revoke grants applied to roles and objects outside Terraform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/function_grant#enable_multiple_grants FunctionGrant#enable_multiple_grants}

---

##### `function_name`<sup>Optional</sup> <a name="function_name" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.Initializer.parameter.functionName"></a>

- *Type:* str

The name of the function on which to grant privileges immediately (only valid if on_future is false).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/function_grant#function_name FunctionGrant#function_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/function_grant#id FunctionGrant#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `on_all`<sup>Optional</sup> <a name="on_all" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.Initializer.parameter.onAll"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

When this is set to true and a schema_name is provided, apply this grant on all functions in the given schema.

When this is true and no schema_name is provided apply this grant on all functions in the given database. The function_name, arguments, return_type, and shares fields must be unset in order to use on_all. Cannot be used together with on_future.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/function_grant#on_all FunctionGrant#on_all}

---

##### `on_future`<sup>Optional</sup> <a name="on_future" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.Initializer.parameter.onFuture"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

When this is set to true and a schema_name is provided, apply this grant on all future functions in the given schema.

When this is true and no schema_name is provided apply this grant on all future functions in the given database. The function_name, arguments, return_type, and shares fields must be unset in order to use on_future. Cannot be used together with on_all.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/function_grant#on_future FunctionGrant#on_future}

---

##### `privilege`<sup>Optional</sup> <a name="privilege" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.Initializer.parameter.privilege"></a>

- *Type:* str

The privilege to grant on the current or future function. Must be one of `USAGE` or `OWNERSHIP`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/function_grant#privilege FunctionGrant#privilege}

---

##### `schema_name`<sup>Optional</sup> <a name="schema_name" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.Initializer.parameter.schemaName"></a>

- *Type:* str

The name of the schema containing the current or future functions on which to grant privileges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/function_grant#schema_name FunctionGrant#schema_name}

---

##### `shares`<sup>Optional</sup> <a name="shares" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.Initializer.parameter.shares"></a>

- *Type:* typing.List[str]

Grants privilege to these shares (only valid if on_future is false).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/function_grant#shares FunctionGrant#shares}

---

##### `with_grant_option`<sup>Optional</sup> <a name="with_grant_option" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.Initializer.parameter.withGrantOption"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

When this is set to true, allows the recipient role to grant the privileges to other roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/function_grant#with_grant_option FunctionGrant#with_grant_option}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.resetArgumentDataTypes">reset_argument_data_types</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.resetEnableMultipleGrants">reset_enable_multiple_grants</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.resetFunctionName">reset_function_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.resetOnAll">reset_on_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.resetOnFuture">reset_on_future</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.resetPrivilege">reset_privilege</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.resetSchemaName">reset_schema_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.resetShares">reset_shares</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.resetWithGrantOption">reset_with_grant_option</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_argument_data_types` <a name="reset_argument_data_types" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.resetArgumentDataTypes"></a>

```python
def reset_argument_data_types() -> None
```

##### `reset_enable_multiple_grants` <a name="reset_enable_multiple_grants" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.resetEnableMultipleGrants"></a>

```python
def reset_enable_multiple_grants() -> None
```

##### `reset_function_name` <a name="reset_function_name" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.resetFunctionName"></a>

```python
def reset_function_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_on_all` <a name="reset_on_all" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.resetOnAll"></a>

```python
def reset_on_all() -> None
```

##### `reset_on_future` <a name="reset_on_future" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.resetOnFuture"></a>

```python
def reset_on_future() -> None
```

##### `reset_privilege` <a name="reset_privilege" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.resetPrivilege"></a>

```python
def reset_privilege() -> None
```

##### `reset_schema_name` <a name="reset_schema_name" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.resetSchemaName"></a>

```python
def reset_schema_name() -> None
```

##### `reset_shares` <a name="reset_shares" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.resetShares"></a>

```python
def reset_shares() -> None
```

##### `reset_with_grant_option` <a name="reset_with_grant_option" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.resetWithGrantOption"></a>

```python
def reset_with_grant_option() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.isConstruct"></a>

```python
from cdktf_cdktf_provider_snowflake import function_grant

functionGrant.FunctionGrant.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_snowflake import function_grant

functionGrant.FunctionGrant.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_snowflake import function_grant

functionGrant.FunctionGrant.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.argumentDataTypesInput">argument_data_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.enableMultipleGrantsInput">enable_multiple_grants_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.functionNameInput">function_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.onAllInput">on_all_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.onFutureInput">on_future_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.privilegeInput">privilege_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.rolesInput">roles_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.schemaNameInput">schema_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.sharesInput">shares_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.withGrantOptionInput">with_grant_option_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.argumentDataTypes">argument_data_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.enableMultipleGrants">enable_multiple_grants</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.functionName">function_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.onAll">on_all</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.onFuture">on_future</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.privilege">privilege</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.roles">roles</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.shares">shares</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.withGrantOption">with_grant_option</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `argument_data_types_input`<sup>Optional</sup> <a name="argument_data_types_input" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.argumentDataTypesInput"></a>

```python
argument_data_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `enable_multiple_grants_input`<sup>Optional</sup> <a name="enable_multiple_grants_input" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.enableMultipleGrantsInput"></a>

```python
enable_multiple_grants_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `function_name_input`<sup>Optional</sup> <a name="function_name_input" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.functionNameInput"></a>

```python
function_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `on_all_input`<sup>Optional</sup> <a name="on_all_input" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.onAllInput"></a>

```python
on_all_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `on_future_input`<sup>Optional</sup> <a name="on_future_input" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.onFutureInput"></a>

```python
on_future_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `privilege_input`<sup>Optional</sup> <a name="privilege_input" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.privilegeInput"></a>

```python
privilege_input: str
```

- *Type:* str

---

##### `roles_input`<sup>Optional</sup> <a name="roles_input" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.rolesInput"></a>

```python
roles_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `schema_name_input`<sup>Optional</sup> <a name="schema_name_input" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.schemaNameInput"></a>

```python
schema_name_input: str
```

- *Type:* str

---

##### `shares_input`<sup>Optional</sup> <a name="shares_input" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.sharesInput"></a>

```python
shares_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `with_grant_option_input`<sup>Optional</sup> <a name="with_grant_option_input" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.withGrantOptionInput"></a>

```python
with_grant_option_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `argument_data_types`<sup>Required</sup> <a name="argument_data_types" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.argumentDataTypes"></a>

```python
argument_data_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `enable_multiple_grants`<sup>Required</sup> <a name="enable_multiple_grants" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.enableMultipleGrants"></a>

```python
enable_multiple_grants: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `function_name`<sup>Required</sup> <a name="function_name" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.functionName"></a>

```python
function_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `on_all`<sup>Required</sup> <a name="on_all" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.onAll"></a>

```python
on_all: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `on_future`<sup>Required</sup> <a name="on_future" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.onFuture"></a>

```python
on_future: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `privilege`<sup>Required</sup> <a name="privilege" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.privilege"></a>

```python
privilege: str
```

- *Type:* str

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.roles"></a>

```python
roles: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `shares`<sup>Required</sup> <a name="shares" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.shares"></a>

```python
shares: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `with_grant_option`<sup>Required</sup> <a name="with_grant_option" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.withGrantOption"></a>

```python
with_grant_option: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.functionGrant.FunctionGrant.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### FunctionGrantConfig <a name="FunctionGrantConfig" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import function_grant

functionGrant.FunctionGrantConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  database_name: str,
  roles: typing.List[str],
  argument_data_types: typing.List[str] = None,
  enable_multiple_grants: typing.Union[bool, IResolvable] = None,
  function_name: str = None,
  id: str = None,
  on_all: typing.Union[bool, IResolvable] = None,
  on_future: typing.Union[bool, IResolvable] = None,
  privilege: str = None,
  schema_name: str = None,
  shares: typing.List[str] = None,
  with_grant_option: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrantConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrantConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrantConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrantConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrantConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrantConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrantConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrantConfig.property.databaseName">database_name</a></code> | <code>str</code> | The name of the database containing the current or future functions on which to grant privileges. |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrantConfig.property.roles">roles</a></code> | <code>typing.List[str]</code> | Grants privilege to these roles. |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrantConfig.property.argumentDataTypes">argument_data_types</a></code> | <code>typing.List[str]</code> | List of the argument data types for the function (must be present if function has arguments and function_name is present). |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrantConfig.property.enableMultipleGrants">enable_multiple_grants</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When this is set to true, multiple grants of the same type can be created. |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrantConfig.property.functionName">function_name</a></code> | <code>str</code> | The name of the function on which to grant privileges immediately (only valid if on_future is false). |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrantConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/function_grant#id FunctionGrant#id}. |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrantConfig.property.onAll">on_all</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When this is set to true and a schema_name is provided, apply this grant on all functions in the given schema. |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrantConfig.property.onFuture">on_future</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When this is set to true and a schema_name is provided, apply this grant on all future functions in the given schema. |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrantConfig.property.privilege">privilege</a></code> | <code>str</code> | The privilege to grant on the current or future function. Must be one of `USAGE` or `OWNERSHIP`. |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrantConfig.property.schemaName">schema_name</a></code> | <code>str</code> | The name of the schema containing the current or future functions on which to grant privileges. |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrantConfig.property.shares">shares</a></code> | <code>typing.List[str]</code> | Grants privilege to these shares (only valid if on_future is false). |
| <code><a href="#@cdktf/provider-snowflake.functionGrant.FunctionGrantConfig.property.withGrantOption">with_grant_option</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When this is set to true, allows the recipient role to grant the privileges to other roles. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantConfig.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

The name of the database containing the current or future functions on which to grant privileges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/function_grant#database_name FunctionGrant#database_name}

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantConfig.property.roles"></a>

```python
roles: typing.List[str]
```

- *Type:* typing.List[str]

Grants privilege to these roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/function_grant#roles FunctionGrant#roles}

---

##### `argument_data_types`<sup>Optional</sup> <a name="argument_data_types" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantConfig.property.argumentDataTypes"></a>

```python
argument_data_types: typing.List[str]
```

- *Type:* typing.List[str]

List of the argument data types for the function (must be present if function has arguments and function_name is present).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/function_grant#argument_data_types FunctionGrant#argument_data_types}

---

##### `enable_multiple_grants`<sup>Optional</sup> <a name="enable_multiple_grants" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantConfig.property.enableMultipleGrants"></a>

```python
enable_multiple_grants: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When this is set to true, multiple grants of the same type can be created.

This will cause Terraform to not revoke grants applied to roles and objects outside Terraform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/function_grant#enable_multiple_grants FunctionGrant#enable_multiple_grants}

---

##### `function_name`<sup>Optional</sup> <a name="function_name" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantConfig.property.functionName"></a>

```python
function_name: str
```

- *Type:* str

The name of the function on which to grant privileges immediately (only valid if on_future is false).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/function_grant#function_name FunctionGrant#function_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/function_grant#id FunctionGrant#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `on_all`<sup>Optional</sup> <a name="on_all" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantConfig.property.onAll"></a>

```python
on_all: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When this is set to true and a schema_name is provided, apply this grant on all functions in the given schema.

When this is true and no schema_name is provided apply this grant on all functions in the given database. The function_name, arguments, return_type, and shares fields must be unset in order to use on_all. Cannot be used together with on_future.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/function_grant#on_all FunctionGrant#on_all}

---

##### `on_future`<sup>Optional</sup> <a name="on_future" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantConfig.property.onFuture"></a>

```python
on_future: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When this is set to true and a schema_name is provided, apply this grant on all future functions in the given schema.

When this is true and no schema_name is provided apply this grant on all future functions in the given database. The function_name, arguments, return_type, and shares fields must be unset in order to use on_future. Cannot be used together with on_all.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/function_grant#on_future FunctionGrant#on_future}

---

##### `privilege`<sup>Optional</sup> <a name="privilege" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantConfig.property.privilege"></a>

```python
privilege: str
```

- *Type:* str

The privilege to grant on the current or future function. Must be one of `USAGE` or `OWNERSHIP`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/function_grant#privilege FunctionGrant#privilege}

---

##### `schema_name`<sup>Optional</sup> <a name="schema_name" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantConfig.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

The name of the schema containing the current or future functions on which to grant privileges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/function_grant#schema_name FunctionGrant#schema_name}

---

##### `shares`<sup>Optional</sup> <a name="shares" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantConfig.property.shares"></a>

```python
shares: typing.List[str]
```

- *Type:* typing.List[str]

Grants privilege to these shares (only valid if on_future is false).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/function_grant#shares FunctionGrant#shares}

---

##### `with_grant_option`<sup>Optional</sup> <a name="with_grant_option" id="@cdktf/provider-snowflake.functionGrant.FunctionGrantConfig.property.withGrantOption"></a>

```python
with_grant_option: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When this is set to true, allows the recipient role to grant the privileges to other roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.64.0/docs/resources/function_grant#with_grant_option FunctionGrant#with_grant_option}

---



