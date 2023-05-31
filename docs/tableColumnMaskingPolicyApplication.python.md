# `snowflake_table_column_masking_policy_application`

Refer to the Terraform Registory for docs: [`snowflake_table_column_masking_policy_application`](https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/table_column_masking_policy_application).

# `tableColumnMaskingPolicyApplication` Submodule <a name="`tableColumnMaskingPolicyApplication` Submodule" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TableColumnMaskingPolicyApplication <a name="TableColumnMaskingPolicyApplication" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/table_column_masking_policy_application snowflake_table_column_masking_policy_application}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import table_column_masking_policy_application

tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  column: str,
  masking_policy: str,
  table: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.Initializer.parameter.column">column</a></code> | <code>str</code> | The column to apply the masking policy to. |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.Initializer.parameter.maskingPolicy">masking_policy</a></code> | <code>str</code> | Fully qualified name (`database.schema.policyname`) of the policy to apply. |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.Initializer.parameter.table">table</a></code> | <code>str</code> | The fully qualified name (`database.schema.table`) of the table to apply the masking policy to. |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/table_column_masking_policy_application#id TableColumnMaskingPolicyApplication#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.Initializer.parameter.column"></a>

- *Type:* str

The column to apply the masking policy to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/table_column_masking_policy_application#column TableColumnMaskingPolicyApplication#column}

---

##### `masking_policy`<sup>Required</sup> <a name="masking_policy" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.Initializer.parameter.maskingPolicy"></a>

- *Type:* str

Fully qualified name (`database.schema.policyname`) of the policy to apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/table_column_masking_policy_application#masking_policy TableColumnMaskingPolicyApplication#masking_policy}

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.Initializer.parameter.table"></a>

- *Type:* str

The fully qualified name (`database.schema.table`) of the table to apply the masking policy to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/table_column_masking_policy_application#table TableColumnMaskingPolicyApplication#table}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/table_column_masking_policy_application#id TableColumnMaskingPolicyApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.isConstruct"></a>

```python
from cdktf_cdktf_provider_snowflake import table_column_masking_policy_application

tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_snowflake import table_column_masking_policy_application

tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_snowflake import table_column_masking_policy_application

tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.columnInput">column_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.maskingPolicyInput">masking_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.tableInput">table_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.column">column</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.maskingPolicy">masking_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.table">table</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `column_input`<sup>Optional</sup> <a name="column_input" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.columnInput"></a>

```python
column_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `masking_policy_input`<sup>Optional</sup> <a name="masking_policy_input" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.maskingPolicyInput"></a>

```python
masking_policy_input: str
```

- *Type:* str

---

##### `table_input`<sup>Optional</sup> <a name="table_input" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.tableInput"></a>

```python
table_input: str
```

- *Type:* str

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.column"></a>

```python
column: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `masking_policy`<sup>Required</sup> <a name="masking_policy" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.maskingPolicy"></a>

```python
masking_policy: str
```

- *Type:* str

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.table"></a>

```python
table: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### TableColumnMaskingPolicyApplicationConfig <a name="TableColumnMaskingPolicyApplicationConfig" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import table_column_masking_policy_application

tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  column: str,
  masking_policy: str,
  table: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig.property.column">column</a></code> | <code>str</code> | The column to apply the masking policy to. |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig.property.maskingPolicy">masking_policy</a></code> | <code>str</code> | Fully qualified name (`database.schema.policyname`) of the policy to apply. |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig.property.table">table</a></code> | <code>str</code> | The fully qualified name (`database.schema.table`) of the table to apply the masking policy to. |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/table_column_masking_policy_application#id TableColumnMaskingPolicyApplication#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig.property.column"></a>

```python
column: str
```

- *Type:* str

The column to apply the masking policy to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/table_column_masking_policy_application#column TableColumnMaskingPolicyApplication#column}

---

##### `masking_policy`<sup>Required</sup> <a name="masking_policy" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig.property.maskingPolicy"></a>

```python
masking_policy: str
```

- *Type:* str

Fully qualified name (`database.schema.policyname`) of the policy to apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/table_column_masking_policy_application#masking_policy TableColumnMaskingPolicyApplication#masking_policy}

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig.property.table"></a>

```python
table: str
```

- *Type:* str

The fully qualified name (`database.schema.table`) of the table to apply the masking policy to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/table_column_masking_policy_application#table TableColumnMaskingPolicyApplication#table}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.65.0/docs/resources/table_column_masking_policy_application#id TableColumnMaskingPolicyApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



