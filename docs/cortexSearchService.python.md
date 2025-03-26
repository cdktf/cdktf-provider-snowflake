# `cortexSearchService` Submodule <a name="`cortexSearchService` Submodule" id="@cdktf/provider-snowflake.cortexSearchService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CortexSearchService <a name="CortexSearchService" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/cortex_search_service snowflake_cortex_search_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import cortex_search_service

cortexSearchService.CortexSearchService(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  database: str,
  name: str,
  on: str,
  query: str,
  schema: str,
  target_lag: str,
  warehouse: str,
  attributes: typing.List[str] = None,
  comment: str = None,
  id: str = None,
  timeouts: CortexSearchServiceTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.Initializer.parameter.database">database</a></code> | <code>str</code> | The database in which to create the Cortex search service. |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.Initializer.parameter.name">name</a></code> | <code>str</code> | Specifies the name of the Cortex search service. |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.Initializer.parameter.on">on</a></code> | <code>str</code> | Specifies the column to use as the search column for the Cortex search service; must be a text value. |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.Initializer.parameter.query">query</a></code> | <code>str</code> | Specifies the query to use to populate the Cortex search service. |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.Initializer.parameter.schema">schema</a></code> | <code>str</code> | The schema in which to create the Cortex search service. |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.Initializer.parameter.targetLag">target_lag</a></code> | <code>str</code> | Specifies the maximum target lag time for the Cortex search service. |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.Initializer.parameter.warehouse">warehouse</a></code> | <code>str</code> | The warehouse in which to create the Cortex search service. |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.Initializer.parameter.attributes">attributes</a></code> | <code>typing.List[str]</code> | Specifies the list of columns in the base table to enable filtering on when issuing queries to the service. |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.Initializer.parameter.comment">comment</a></code> | <code>str</code> | Specifies a comment for the Cortex search service. |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/cortex_search_service#id CortexSearchService#id}. |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceTimeouts">CortexSearchServiceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.Initializer.parameter.database"></a>

- *Type:* str

The database in which to create the Cortex search service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/cortex_search_service#database CortexSearchService#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.Initializer.parameter.name"></a>

- *Type:* str

Specifies the name of the Cortex search service.

The name must be unique for the schema in which the service is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/cortex_search_service#name CortexSearchService#name}

---

##### `on`<sup>Required</sup> <a name="on" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.Initializer.parameter.on"></a>

- *Type:* str

Specifies the column to use as the search column for the Cortex search service; must be a text value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/cortex_search_service#on CortexSearchService#on}

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.Initializer.parameter.query"></a>

- *Type:* str

Specifies the query to use to populate the Cortex search service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/cortex_search_service#query CortexSearchService#query}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.Initializer.parameter.schema"></a>

- *Type:* str

The schema in which to create the Cortex search service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/cortex_search_service#schema CortexSearchService#schema}

---

##### `target_lag`<sup>Required</sup> <a name="target_lag" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.Initializer.parameter.targetLag"></a>

- *Type:* str

Specifies the maximum target lag time for the Cortex search service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/cortex_search_service#target_lag CortexSearchService#target_lag}

---

##### `warehouse`<sup>Required</sup> <a name="warehouse" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.Initializer.parameter.warehouse"></a>

- *Type:* str

The warehouse in which to create the Cortex search service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/cortex_search_service#warehouse CortexSearchService#warehouse}

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.Initializer.parameter.attributes"></a>

- *Type:* typing.List[str]

Specifies the list of columns in the base table to enable filtering on when issuing queries to the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/cortex_search_service#attributes CortexSearchService#attributes}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.Initializer.parameter.comment"></a>

- *Type:* str

Specifies a comment for the Cortex search service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/cortex_search_service#comment CortexSearchService#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/cortex_search_service#id CortexSearchService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceTimeouts">CortexSearchServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/cortex_search_service#timeouts CortexSearchService#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.resetAttributes">reset_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/cortex_search_service#create CortexSearchService#create}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/cortex_search_service#update CortexSearchService#update}.

---

##### `reset_attributes` <a name="reset_attributes" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.resetAttributes"></a>

```python
def reset_attributes() -> None
```

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CortexSearchService resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.isConstruct"></a>

```python
from cdktf_cdktf_provider_snowflake import cortex_search_service

cortexSearchService.CortexSearchService.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_snowflake import cortex_search_service

cortexSearchService.CortexSearchService.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_snowflake import cortex_search_service

cortexSearchService.CortexSearchService.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_snowflake import cortex_search_service

cortexSearchService.CortexSearchService.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CortexSearchService resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CortexSearchService to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CortexSearchService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/cortex_search_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CortexSearchService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.fullyQualifiedName">fully_qualified_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceTimeoutsOutputReference">CortexSearchServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.attributesInput">attributes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.onInput">on_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.queryInput">query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.schemaInput">schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.targetLagInput">target_lag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceTimeouts">CortexSearchServiceTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.warehouseInput">warehouse_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.attributes">attributes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.on">on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.schema">schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.targetLag">target_lag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.warehouse">warehouse</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `fully_qualified_name`<sup>Required</sup> <a name="fully_qualified_name" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.fullyQualifiedName"></a>

```python
fully_qualified_name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.timeouts"></a>

```python
timeouts: CortexSearchServiceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceTimeoutsOutputReference">CortexSearchServiceTimeoutsOutputReference</a>

---

##### `attributes_input`<sup>Optional</sup> <a name="attributes_input" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.attributesInput"></a>

```python
attributes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `on_input`<sup>Optional</sup> <a name="on_input" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.onInput"></a>

```python
on_input: str
```

- *Type:* str

---

##### `query_input`<sup>Optional</sup> <a name="query_input" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.queryInput"></a>

```python
query_input: str
```

- *Type:* str

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.schemaInput"></a>

```python
schema_input: str
```

- *Type:* str

---

##### `target_lag_input`<sup>Optional</sup> <a name="target_lag_input" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.targetLagInput"></a>

```python
target_lag_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, CortexSearchServiceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceTimeouts">CortexSearchServiceTimeouts</a>]

---

##### `warehouse_input`<sup>Optional</sup> <a name="warehouse_input" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.warehouseInput"></a>

```python
warehouse_input: str
```

- *Type:* str

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.attributes"></a>

```python
attributes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `on`<sup>Required</sup> <a name="on" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.on"></a>

```python
on: str
```

- *Type:* str

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.schema"></a>

```python
schema: str
```

- *Type:* str

---

##### `target_lag`<sup>Required</sup> <a name="target_lag" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.targetLag"></a>

```python
target_lag: str
```

- *Type:* str

---

##### `warehouse`<sup>Required</sup> <a name="warehouse" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.warehouse"></a>

```python
warehouse: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchService.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CortexSearchServiceConfig <a name="CortexSearchServiceConfig" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import cortex_search_service

cortexSearchService.CortexSearchServiceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  database: str,
  name: str,
  on: str,
  query: str,
  schema: str,
  target_lag: str,
  warehouse: str,
  attributes: typing.List[str] = None,
  comment: str = None,
  id: str = None,
  timeouts: CortexSearchServiceTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceConfig.property.database">database</a></code> | <code>str</code> | The database in which to create the Cortex search service. |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceConfig.property.name">name</a></code> | <code>str</code> | Specifies the name of the Cortex search service. |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceConfig.property.on">on</a></code> | <code>str</code> | Specifies the column to use as the search column for the Cortex search service; must be a text value. |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceConfig.property.query">query</a></code> | <code>str</code> | Specifies the query to use to populate the Cortex search service. |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceConfig.property.schema">schema</a></code> | <code>str</code> | The schema in which to create the Cortex search service. |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceConfig.property.targetLag">target_lag</a></code> | <code>str</code> | Specifies the maximum target lag time for the Cortex search service. |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceConfig.property.warehouse">warehouse</a></code> | <code>str</code> | The warehouse in which to create the Cortex search service. |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceConfig.property.attributes">attributes</a></code> | <code>typing.List[str]</code> | Specifies the list of columns in the base table to enable filtering on when issuing queries to the service. |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceConfig.property.comment">comment</a></code> | <code>str</code> | Specifies a comment for the Cortex search service. |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/cortex_search_service#id CortexSearchService#id}. |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceTimeouts">CortexSearchServiceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceConfig.property.database"></a>

```python
database: str
```

- *Type:* str

The database in which to create the Cortex search service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/cortex_search_service#database CortexSearchService#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Specifies the name of the Cortex search service.

The name must be unique for the schema in which the service is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/cortex_search_service#name CortexSearchService#name}

---

##### `on`<sup>Required</sup> <a name="on" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceConfig.property.on"></a>

```python
on: str
```

- *Type:* str

Specifies the column to use as the search column for the Cortex search service; must be a text value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/cortex_search_service#on CortexSearchService#on}

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceConfig.property.query"></a>

```python
query: str
```

- *Type:* str

Specifies the query to use to populate the Cortex search service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/cortex_search_service#query CortexSearchService#query}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceConfig.property.schema"></a>

```python
schema: str
```

- *Type:* str

The schema in which to create the Cortex search service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/cortex_search_service#schema CortexSearchService#schema}

---

##### `target_lag`<sup>Required</sup> <a name="target_lag" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceConfig.property.targetLag"></a>

```python
target_lag: str
```

- *Type:* str

Specifies the maximum target lag time for the Cortex search service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/cortex_search_service#target_lag CortexSearchService#target_lag}

---

##### `warehouse`<sup>Required</sup> <a name="warehouse" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceConfig.property.warehouse"></a>

```python
warehouse: str
```

- *Type:* str

The warehouse in which to create the Cortex search service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/cortex_search_service#warehouse CortexSearchService#warehouse}

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceConfig.property.attributes"></a>

```python
attributes: typing.List[str]
```

- *Type:* typing.List[str]

Specifies the list of columns in the base table to enable filtering on when issuing queries to the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/cortex_search_service#attributes CortexSearchService#attributes}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

Specifies a comment for the Cortex search service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/cortex_search_service#comment CortexSearchService#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/cortex_search_service#id CortexSearchService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceConfig.property.timeouts"></a>

```python
timeouts: CortexSearchServiceTimeouts
```

- *Type:* <a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceTimeouts">CortexSearchServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/cortex_search_service#timeouts CortexSearchService#timeouts}

---

### CortexSearchServiceTimeouts <a name="CortexSearchServiceTimeouts" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import cortex_search_service

cortexSearchService.CortexSearchServiceTimeouts(
  create: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/cortex_search_service#create CortexSearchService#create}. |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/cortex_search_service#update CortexSearchService#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/cortex_search_service#create CortexSearchService#create}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.5/docs/resources/cortex_search_service#update CortexSearchService#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CortexSearchServiceTimeoutsOutputReference <a name="CortexSearchServiceTimeoutsOutputReference" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import cortex_search_service

cortexSearchService.CortexSearchServiceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceTimeouts">CortexSearchServiceTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CortexSearchServiceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-snowflake.cortexSearchService.CortexSearchServiceTimeouts">CortexSearchServiceTimeouts</a>]

---



