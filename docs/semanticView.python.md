# `semanticView` Submodule <a name="`semanticView` Submodule" id="@cdktf/provider-snowflake.semanticView"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SemanticView <a name="SemanticView" id="@cdktf/provider-snowflake.semanticView.SemanticView"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view snowflake_semantic_view}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.semanticView.SemanticView.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import semantic_view

semanticView.SemanticView(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  database: str,
  name: str,
  schema: str,
  tables: IResolvable | typing.List[SemanticViewTables],
  comment: str = None,
  dimensions: IResolvable | typing.List[SemanticViewDimensions] = None,
  facts: IResolvable | typing.List[SemanticViewFacts] = None,
  id: str = None,
  metrics: IResolvable | typing.List[SemanticViewMetrics] = None,
  relationships: IResolvable | typing.List[SemanticViewRelationships] = None,
  timeouts: SemanticViewTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.Initializer.parameter.database">database</a></code> | <code>str</code> | The database in which to create the semantic view. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.Initializer.parameter.name">name</a></code> | <code>str</code> | Specifies the identifier for the semantic view; |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.Initializer.parameter.schema">schema</a></code> | <code>str</code> | The schema in which to create the semantic view. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.Initializer.parameter.tables">tables</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTables">SemanticViewTables</a>]</code> | tables block. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.Initializer.parameter.comment">comment</a></code> | <code>str</code> | Specifies a comment for the semantic view. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.Initializer.parameter.dimensions">dimensions</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensions">SemanticViewDimensions</a>]</code> | dimensions block. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.Initializer.parameter.facts">facts</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFacts">SemanticViewFacts</a>]</code> | facts block. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#id SemanticView#id}. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.Initializer.parameter.metrics">metrics</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetrics">SemanticViewMetrics</a>]</code> | metrics block. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.Initializer.parameter.relationships">relationships</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationships">SemanticViewRelationships</a>]</code> | relationships block. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeouts">SemanticViewTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.semanticView.SemanticView.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.semanticView.SemanticView.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.semanticView.SemanticView.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.semanticView.SemanticView.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.semanticView.SemanticView.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.semanticView.SemanticView.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.semanticView.SemanticView.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.semanticView.SemanticView.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.semanticView.SemanticView.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.semanticView.SemanticView.Initializer.parameter.database"></a>

- *Type:* str

The database in which to create the semantic view.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#database SemanticView#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.semanticView.SemanticView.Initializer.parameter.name"></a>

- *Type:* str

Specifies the identifier for the semantic view;

must be unique within the schema. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#name SemanticView#name}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.semanticView.SemanticView.Initializer.parameter.schema"></a>

- *Type:* str

The schema in which to create the semantic view.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#schema SemanticView#schema}

---

##### `tables`<sup>Required</sup> <a name="tables" id="@cdktf/provider-snowflake.semanticView.SemanticView.Initializer.parameter.tables"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTables">SemanticViewTables</a>]

tables block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#tables SemanticView#tables}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.semanticView.SemanticView.Initializer.parameter.comment"></a>

- *Type:* str

Specifies a comment for the semantic view.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#comment SemanticView#comment}

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktf/provider-snowflake.semanticView.SemanticView.Initializer.parameter.dimensions"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensions">SemanticViewDimensions</a>]

dimensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#dimensions SemanticView#dimensions}

---

##### `facts`<sup>Optional</sup> <a name="facts" id="@cdktf/provider-snowflake.semanticView.SemanticView.Initializer.parameter.facts"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFacts">SemanticViewFacts</a>]

facts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#facts SemanticView#facts}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.semanticView.SemanticView.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#id SemanticView#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metrics`<sup>Optional</sup> <a name="metrics" id="@cdktf/provider-snowflake.semanticView.SemanticView.Initializer.parameter.metrics"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetrics">SemanticViewMetrics</a>]

metrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#metrics SemanticView#metrics}

---

##### `relationships`<sup>Optional</sup> <a name="relationships" id="@cdktf/provider-snowflake.semanticView.SemanticView.Initializer.parameter.relationships"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationships">SemanticViewRelationships</a>]

relationships block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#relationships SemanticView#relationships}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-snowflake.semanticView.SemanticView.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeouts">SemanticViewTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#timeouts SemanticView#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.putDimensions">put_dimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.putFacts">put_facts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.putMetrics">put_metrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.putRelationships">put_relationships</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.putTables">put_tables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.resetDimensions">reset_dimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.resetFacts">reset_facts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.resetMetrics">reset_metrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.resetRelationships">reset_relationships</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.semanticView.SemanticView.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-snowflake.semanticView.SemanticView.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.semanticView.SemanticView.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.semanticView.SemanticView.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-snowflake.semanticView.SemanticView.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-snowflake.semanticView.SemanticView.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-snowflake.semanticView.SemanticView.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-snowflake.semanticView.SemanticView.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-snowflake.semanticView.SemanticView.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-snowflake.semanticView.SemanticView.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-snowflake.semanticView.SemanticView.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-snowflake.semanticView.SemanticView.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticView.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticView.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticView.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticView.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticView.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticView.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticView.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticView.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticView.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticView.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticView.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticView.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticView.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticView.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticView.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticView.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticView.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticView.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-snowflake.semanticView.SemanticView.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-snowflake.semanticView.SemanticView.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.semanticView.SemanticView.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.semanticView.SemanticView.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticView.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticView.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-snowflake.semanticView.SemanticView.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.semanticView.SemanticView.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-snowflake.semanticView.SemanticView.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-snowflake.semanticView.SemanticView.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.semanticView.SemanticView.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-snowflake.semanticView.SemanticView.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.semanticView.SemanticView.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_dimensions` <a name="put_dimensions" id="@cdktf/provider-snowflake.semanticView.SemanticView.putDimensions"></a>

```python
def put_dimensions(
  value: IResolvable | typing.List[SemanticViewDimensions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.semanticView.SemanticView.putDimensions.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensions">SemanticViewDimensions</a>]

---

##### `put_facts` <a name="put_facts" id="@cdktf/provider-snowflake.semanticView.SemanticView.putFacts"></a>

```python
def put_facts(
  value: IResolvable | typing.List[SemanticViewFacts]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.semanticView.SemanticView.putFacts.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFacts">SemanticViewFacts</a>]

---

##### `put_metrics` <a name="put_metrics" id="@cdktf/provider-snowflake.semanticView.SemanticView.putMetrics"></a>

```python
def put_metrics(
  value: IResolvable | typing.List[SemanticViewMetrics]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.semanticView.SemanticView.putMetrics.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetrics">SemanticViewMetrics</a>]

---

##### `put_relationships` <a name="put_relationships" id="@cdktf/provider-snowflake.semanticView.SemanticView.putRelationships"></a>

```python
def put_relationships(
  value: IResolvable | typing.List[SemanticViewRelationships]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.semanticView.SemanticView.putRelationships.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationships">SemanticViewRelationships</a>]

---

##### `put_tables` <a name="put_tables" id="@cdktf/provider-snowflake.semanticView.SemanticView.putTables"></a>

```python
def put_tables(
  value: IResolvable | typing.List[SemanticViewTables]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.semanticView.SemanticView.putTables.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTables">SemanticViewTables</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-snowflake.semanticView.SemanticView.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-snowflake.semanticView.SemanticView.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#create SemanticView#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-snowflake.semanticView.SemanticView.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#delete SemanticView#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-snowflake.semanticView.SemanticView.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#read SemanticView#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-snowflake.semanticView.SemanticView.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#update SemanticView#update}.

---

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-snowflake.semanticView.SemanticView.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_dimensions` <a name="reset_dimensions" id="@cdktf/provider-snowflake.semanticView.SemanticView.resetDimensions"></a>

```python
def reset_dimensions() -> None
```

##### `reset_facts` <a name="reset_facts" id="@cdktf/provider-snowflake.semanticView.SemanticView.resetFacts"></a>

```python
def reset_facts() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-snowflake.semanticView.SemanticView.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_metrics` <a name="reset_metrics" id="@cdktf/provider-snowflake.semanticView.SemanticView.resetMetrics"></a>

```python
def reset_metrics() -> None
```

##### `reset_relationships` <a name="reset_relationships" id="@cdktf/provider-snowflake.semanticView.SemanticView.resetRelationships"></a>

```python
def reset_relationships() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-snowflake.semanticView.SemanticView.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SemanticView resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-snowflake.semanticView.SemanticView.isConstruct"></a>

```python
from cdktf_cdktf_provider_snowflake import semantic_view

semanticView.SemanticView.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.semanticView.SemanticView.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-snowflake.semanticView.SemanticView.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_snowflake import semantic_view

semanticView.SemanticView.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.semanticView.SemanticView.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-snowflake.semanticView.SemanticView.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_snowflake import semantic_view

semanticView.SemanticView.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.semanticView.SemanticView.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-snowflake.semanticView.SemanticView.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_snowflake import semantic_view

semanticView.SemanticView.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SemanticView resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.semanticView.SemanticView.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-snowflake.semanticView.SemanticView.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SemanticView to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-snowflake.semanticView.SemanticView.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SemanticView that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.semanticView.SemanticView.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SemanticView to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.dimensions">dimensions</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList">SemanticViewDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.facts">facts</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsList">SemanticViewFactsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.fullyQualifiedName">fully_qualified_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.metrics">metrics</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList">SemanticViewMetricsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.relationships">relationships</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList">SemanticViewRelationshipsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.showOutput">show_output</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList">SemanticViewShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.tables">tables</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesList">SemanticViewTablesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference">SemanticViewTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.dimensionsInput">dimensions_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensions">SemanticViewDimensions</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.factsInput">facts_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFacts">SemanticViewFacts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.metricsInput">metrics_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetrics">SemanticViewMetrics</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.relationshipsInput">relationships_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationships">SemanticViewRelationships</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.schemaInput">schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.tablesInput">tables_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTables">SemanticViewTables</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.timeoutsInput">timeouts_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeouts">SemanticViewTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.schema">schema</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.dimensions"></a>

```python
dimensions: SemanticViewDimensionsList
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList">SemanticViewDimensionsList</a>

---

##### `facts`<sup>Required</sup> <a name="facts" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.facts"></a>

```python
facts: SemanticViewFactsList
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsList">SemanticViewFactsList</a>

---

##### `fully_qualified_name`<sup>Required</sup> <a name="fully_qualified_name" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.fullyQualifiedName"></a>

```python
fully_qualified_name: str
```

- *Type:* str

---

##### `metrics`<sup>Required</sup> <a name="metrics" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.metrics"></a>

```python
metrics: SemanticViewMetricsList
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList">SemanticViewMetricsList</a>

---

##### `relationships`<sup>Required</sup> <a name="relationships" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.relationships"></a>

```python
relationships: SemanticViewRelationshipsList
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList">SemanticViewRelationshipsList</a>

---

##### `show_output`<sup>Required</sup> <a name="show_output" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.showOutput"></a>

```python
show_output: SemanticViewShowOutputList
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList">SemanticViewShowOutputList</a>

---

##### `tables`<sup>Required</sup> <a name="tables" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.tables"></a>

```python
tables: SemanticViewTablesList
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesList">SemanticViewTablesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.timeouts"></a>

```python
timeouts: SemanticViewTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference">SemanticViewTimeoutsOutputReference</a>

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `dimensions_input`<sup>Optional</sup> <a name="dimensions_input" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.dimensionsInput"></a>

```python
dimensions_input: IResolvable | typing.List[SemanticViewDimensions]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensions">SemanticViewDimensions</a>]

---

##### `facts_input`<sup>Optional</sup> <a name="facts_input" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.factsInput"></a>

```python
facts_input: IResolvable | typing.List[SemanticViewFacts]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFacts">SemanticViewFacts</a>]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `metrics_input`<sup>Optional</sup> <a name="metrics_input" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.metricsInput"></a>

```python
metrics_input: IResolvable | typing.List[SemanticViewMetrics]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetrics">SemanticViewMetrics</a>]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `relationships_input`<sup>Optional</sup> <a name="relationships_input" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.relationshipsInput"></a>

```python
relationships_input: IResolvable | typing.List[SemanticViewRelationships]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationships">SemanticViewRelationships</a>]

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.schemaInput"></a>

```python
schema_input: str
```

- *Type:* str

---

##### `tables_input`<sup>Optional</sup> <a name="tables_input" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.tablesInput"></a>

```python
tables_input: IResolvable | typing.List[SemanticViewTables]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTables">SemanticViewTables</a>]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | SemanticViewTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeouts">SemanticViewTimeouts</a>

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.schema"></a>

```python
schema: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticView.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.semanticView.SemanticView.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SemanticViewConfig <a name="SemanticViewConfig" id="@cdktf/provider-snowflake.semanticView.SemanticViewConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.semanticView.SemanticViewConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import semantic_view

semanticView.SemanticViewConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  database: str,
  name: str,
  schema: str,
  tables: IResolvable | typing.List[SemanticViewTables],
  comment: str = None,
  dimensions: IResolvable | typing.List[SemanticViewDimensions] = None,
  facts: IResolvable | typing.List[SemanticViewFacts] = None,
  id: str = None,
  metrics: IResolvable | typing.List[SemanticViewMetrics] = None,
  relationships: IResolvable | typing.List[SemanticViewRelationships] = None,
  timeouts: SemanticViewTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.database">database</a></code> | <code>str</code> | The database in which to create the semantic view. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.name">name</a></code> | <code>str</code> | Specifies the identifier for the semantic view; |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.schema">schema</a></code> | <code>str</code> | The schema in which to create the semantic view. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.tables">tables</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTables">SemanticViewTables</a>]</code> | tables block. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.comment">comment</a></code> | <code>str</code> | Specifies a comment for the semantic view. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.dimensions">dimensions</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensions">SemanticViewDimensions</a>]</code> | dimensions block. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.facts">facts</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFacts">SemanticViewFacts</a>]</code> | facts block. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#id SemanticView#id}. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.metrics">metrics</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetrics">SemanticViewMetrics</a>]</code> | metrics block. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.relationships">relationships</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationships">SemanticViewRelationships</a>]</code> | relationships block. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeouts">SemanticViewTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.database"></a>

```python
database: str
```

- *Type:* str

The database in which to create the semantic view.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#database SemanticView#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Specifies the identifier for the semantic view;

must be unique within the schema. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#name SemanticView#name}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.schema"></a>

```python
schema: str
```

- *Type:* str

The schema in which to create the semantic view.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#schema SemanticView#schema}

---

##### `tables`<sup>Required</sup> <a name="tables" id="@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.tables"></a>

```python
tables: IResolvable | typing.List[SemanticViewTables]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTables">SemanticViewTables</a>]

tables block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#tables SemanticView#tables}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

Specifies a comment for the semantic view.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#comment SemanticView#comment}

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.dimensions"></a>

```python
dimensions: IResolvable | typing.List[SemanticViewDimensions]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensions">SemanticViewDimensions</a>]

dimensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#dimensions SemanticView#dimensions}

---

##### `facts`<sup>Optional</sup> <a name="facts" id="@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.facts"></a>

```python
facts: IResolvable | typing.List[SemanticViewFacts]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFacts">SemanticViewFacts</a>]

facts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#facts SemanticView#facts}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#id SemanticView#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metrics`<sup>Optional</sup> <a name="metrics" id="@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.metrics"></a>

```python
metrics: IResolvable | typing.List[SemanticViewMetrics]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetrics">SemanticViewMetrics</a>]

metrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#metrics SemanticView#metrics}

---

##### `relationships`<sup>Optional</sup> <a name="relationships" id="@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.relationships"></a>

```python
relationships: IResolvable | typing.List[SemanticViewRelationships]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationships">SemanticViewRelationships</a>]

relationships block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#relationships SemanticView#relationships}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-snowflake.semanticView.SemanticViewConfig.property.timeouts"></a>

```python
timeouts: SemanticViewTimeouts
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeouts">SemanticViewTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#timeouts SemanticView#timeouts}

---

### SemanticViewDimensions <a name="SemanticViewDimensions" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensions.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import semantic_view

semanticView.SemanticViewDimensions(
  qualified_expression_name: str,
  sql_expression: str,
  comment: str = None,
  synonym: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensions.property.qualifiedExpressionName">qualified_expression_name</a></code> | <code>str</code> | Specifies a qualified name for the dimension, including the table name and a unique identifier for the dimension: `<table_alias>.<semantic_expression_name>`. Remember to wrap each part in double quotes like `"\"<table_alias>\".\"<semantic_expression_name>\""`. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensions.property.sqlExpression">sql_expression</a></code> | <code>str</code> | The SQL expression used to compute the dimension. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensions.property.comment">comment</a></code> | <code>str</code> | Specifies a comment for the dimension. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensions.property.synonym">synonym</a></code> | <code>typing.List[str]</code> | List of synonyms for the dimension. |

---

##### `qualified_expression_name`<sup>Required</sup> <a name="qualified_expression_name" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensions.property.qualifiedExpressionName"></a>

```python
qualified_expression_name: str
```

- *Type:* str

Specifies a qualified name for the dimension, including the table name and a unique identifier for the dimension: `<table_alias>.<semantic_expression_name>`. Remember to wrap each part in double quotes like `"\"<table_alias>\".\"<semantic_expression_name>\""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#qualified_expression_name SemanticView#qualified_expression_name}

---

##### `sql_expression`<sup>Required</sup> <a name="sql_expression" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensions.property.sqlExpression"></a>

```python
sql_expression: str
```

- *Type:* str

The SQL expression used to compute the dimension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#sql_expression SemanticView#sql_expression}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensions.property.comment"></a>

```python
comment: str
```

- *Type:* str

Specifies a comment for the dimension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#comment SemanticView#comment}

---

##### `synonym`<sup>Optional</sup> <a name="synonym" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensions.property.synonym"></a>

```python
synonym: typing.List[str]
```

- *Type:* typing.List[str]

List of synonyms for the dimension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#synonym SemanticView#synonym}

---

### SemanticViewFacts <a name="SemanticViewFacts" id="@cdktf/provider-snowflake.semanticView.SemanticViewFacts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.semanticView.SemanticViewFacts.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import semantic_view

semanticView.SemanticViewFacts(
  qualified_expression_name: str,
  sql_expression: str,
  comment: str = None,
  synonym: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFacts.property.qualifiedExpressionName">qualified_expression_name</a></code> | <code>str</code> | Specifies a qualified name for the fact, including the table name and a unique identifier for the fact: `<table_alias>.<semantic_expression_name>`. Remember to wrap each part in double quotes like `"\"<table_alias>\".\"<semantic_expression_name>\""`. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFacts.property.sqlExpression">sql_expression</a></code> | <code>str</code> | The SQL expression used to compute the fact. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFacts.property.comment">comment</a></code> | <code>str</code> | Specifies a comment for the fact. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFacts.property.synonym">synonym</a></code> | <code>typing.List[str]</code> | List of synonyms for the fact. |

---

##### `qualified_expression_name`<sup>Required</sup> <a name="qualified_expression_name" id="@cdktf/provider-snowflake.semanticView.SemanticViewFacts.property.qualifiedExpressionName"></a>

```python
qualified_expression_name: str
```

- *Type:* str

Specifies a qualified name for the fact, including the table name and a unique identifier for the fact: `<table_alias>.<semantic_expression_name>`. Remember to wrap each part in double quotes like `"\"<table_alias>\".\"<semantic_expression_name>\""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#qualified_expression_name SemanticView#qualified_expression_name}

---

##### `sql_expression`<sup>Required</sup> <a name="sql_expression" id="@cdktf/provider-snowflake.semanticView.SemanticViewFacts.property.sqlExpression"></a>

```python
sql_expression: str
```

- *Type:* str

The SQL expression used to compute the fact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#sql_expression SemanticView#sql_expression}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.semanticView.SemanticViewFacts.property.comment"></a>

```python
comment: str
```

- *Type:* str

Specifies a comment for the fact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#comment SemanticView#comment}

---

##### `synonym`<sup>Optional</sup> <a name="synonym" id="@cdktf/provider-snowflake.semanticView.SemanticViewFacts.property.synonym"></a>

```python
synonym: typing.List[str]
```

- *Type:* typing.List[str]

List of synonyms for the fact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#synonym SemanticView#synonym}

---

### SemanticViewMetrics <a name="SemanticViewMetrics" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetrics.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import semantic_view

semanticView.SemanticViewMetrics(
  semantic_expression: SemanticViewMetricsSemanticExpression = None,
  window_function: SemanticViewMetricsWindowFunction = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetrics.property.semanticExpression">semantic_expression</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpression">SemanticViewMetricsSemanticExpression</a></code> | semantic_expression block. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetrics.property.windowFunction">window_function</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunction">SemanticViewMetricsWindowFunction</a></code> | window_function block. |

---

##### `semantic_expression`<sup>Optional</sup> <a name="semantic_expression" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetrics.property.semanticExpression"></a>

```python
semantic_expression: SemanticViewMetricsSemanticExpression
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpression">SemanticViewMetricsSemanticExpression</a>

semantic_expression block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#semantic_expression SemanticView#semantic_expression}

---

##### `window_function`<sup>Optional</sup> <a name="window_function" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetrics.property.windowFunction"></a>

```python
window_function: SemanticViewMetricsWindowFunction
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunction">SemanticViewMetricsWindowFunction</a>

window_function block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#window_function SemanticView#window_function}

---

### SemanticViewMetricsSemanticExpression <a name="SemanticViewMetricsSemanticExpression" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpression"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpression.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import semantic_view

semanticView.SemanticViewMetricsSemanticExpression(
  qualified_expression_name: str,
  sql_expression: str,
  comment: str = None,
  synonym: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpression.property.qualifiedExpressionName">qualified_expression_name</a></code> | <code>str</code> | Specifies a qualified name for the metric: `<table_alias>.<semantic_expression_name>`. Remember to wrap each part in double quotes like `"\"<table_alias>\".\"<semantic_expression_name>\""`. For the [derived metric](https://docs.snowflake.com/en/user-guide/views-semantic/sql#label-semantic-views-create-derived-metrics) omit the `<table_alias>.` part but still wrap in double quotes, e.g. `"\"<semantic_expression_name>\""`. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpression.property.sqlExpression">sql_expression</a></code> | <code>str</code> | The SQL expression used to compute the metric. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpression.property.comment">comment</a></code> | <code>str</code> | Specifies a comment for the semantic expression. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpression.property.synonym">synonym</a></code> | <code>typing.List[str]</code> | List of synonyms for this semantic expression. |

---

##### `qualified_expression_name`<sup>Required</sup> <a name="qualified_expression_name" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpression.property.qualifiedExpressionName"></a>

```python
qualified_expression_name: str
```

- *Type:* str

Specifies a qualified name for the metric: `<table_alias>.<semantic_expression_name>`. Remember to wrap each part in double quotes like `"\"<table_alias>\".\"<semantic_expression_name>\""`. For the [derived metric](https://docs.snowflake.com/en/user-guide/views-semantic/sql#label-semantic-views-create-derived-metrics) omit the `<table_alias>.` part but still wrap in double quotes, e.g. `"\"<semantic_expression_name>\""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#qualified_expression_name SemanticView#qualified_expression_name}

---

##### `sql_expression`<sup>Required</sup> <a name="sql_expression" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpression.property.sqlExpression"></a>

```python
sql_expression: str
```

- *Type:* str

The SQL expression used to compute the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#sql_expression SemanticView#sql_expression}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpression.property.comment"></a>

```python
comment: str
```

- *Type:* str

Specifies a comment for the semantic expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#comment SemanticView#comment}

---

##### `synonym`<sup>Optional</sup> <a name="synonym" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpression.property.synonym"></a>

```python
synonym: typing.List[str]
```

- *Type:* typing.List[str]

List of synonyms for this semantic expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#synonym SemanticView#synonym}

---

### SemanticViewMetricsWindowFunction <a name="SemanticViewMetricsWindowFunction" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunction.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import semantic_view

semanticView.SemanticViewMetricsWindowFunction(
  over_clause: SemanticViewMetricsWindowFunctionOverClause,
  qualified_expression_name: str,
  sql_expression: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunction.property.overClause">over_clause</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClause">SemanticViewMetricsWindowFunctionOverClause</a></code> | over_clause block. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunction.property.qualifiedExpressionName">qualified_expression_name</a></code> | <code>str</code> | Specifies a qualified name for the metric: `<table_alias>.<semantic_expression_name>`. Remember to wrap each part in double quotes like `"\"<table_alias>\".\"<semantic_expression_name>\""`. For the [derived metric](https://docs.snowflake.com/en/user-guide/views-semantic/sql#label-semantic-views-create-derived-metrics) omit the `<table_alias>.` part but still wrap in double quotes, e.g. `"\"<semantic_expression_name>\""`. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunction.property.sqlExpression">sql_expression</a></code> | <code>str</code> | The SQL expression used to compute the metric following the `<window_function>(<metric>)` format. |

---

##### `over_clause`<sup>Required</sup> <a name="over_clause" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunction.property.overClause"></a>

```python
over_clause: SemanticViewMetricsWindowFunctionOverClause
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClause">SemanticViewMetricsWindowFunctionOverClause</a>

over_clause block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#over_clause SemanticView#over_clause}

---

##### `qualified_expression_name`<sup>Required</sup> <a name="qualified_expression_name" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunction.property.qualifiedExpressionName"></a>

```python
qualified_expression_name: str
```

- *Type:* str

Specifies a qualified name for the metric: `<table_alias>.<semantic_expression_name>`. Remember to wrap each part in double quotes like `"\"<table_alias>\".\"<semantic_expression_name>\""`. For the [derived metric](https://docs.snowflake.com/en/user-guide/views-semantic/sql#label-semantic-views-create-derived-metrics) omit the `<table_alias>.` part but still wrap in double quotes, e.g. `"\"<semantic_expression_name>\""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#qualified_expression_name SemanticView#qualified_expression_name}

---

##### `sql_expression`<sup>Required</sup> <a name="sql_expression" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunction.property.sqlExpression"></a>

```python
sql_expression: str
```

- *Type:* str

The SQL expression used to compute the metric following the `<window_function>(<metric>)` format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#sql_expression SemanticView#sql_expression}

---

### SemanticViewMetricsWindowFunctionOverClause <a name="SemanticViewMetricsWindowFunctionOverClause" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClause"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClause.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import semantic_view

semanticView.SemanticViewMetricsWindowFunctionOverClause(
  order_by: str = None,
  partition_by: str = None,
  window_frame_clause: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClause.property.orderBy">order_by</a></code> | <code>str</code> | Specifies an order by clause. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClause.property.partitionBy">partition_by</a></code> | <code>str</code> | Specifies a partition by clause. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClause.property.windowFrameClause">window_frame_clause</a></code> | <code>str</code> | Specifies a window frame clause. |

---

##### `order_by`<sup>Optional</sup> <a name="order_by" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClause.property.orderBy"></a>

```python
order_by: str
```

- *Type:* str

Specifies an order by clause.

It must be a complete SQL expression, including any `[ ASC | DESC ] [ NULLS { FIRST | LAST } ]` modifiers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#order_by SemanticView#order_by}

---

##### `partition_by`<sup>Optional</sup> <a name="partition_by" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClause.property.partitionBy"></a>

```python
partition_by: str
```

- *Type:* str

Specifies a partition by clause.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#partition_by SemanticView#partition_by}

---

##### `window_frame_clause`<sup>Optional</sup> <a name="window_frame_clause" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClause.property.windowFrameClause"></a>

```python
window_frame_clause: str
```

- *Type:* str

Specifies a window frame clause.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#window_frame_clause SemanticView#window_frame_clause}

---

### SemanticViewRelationships <a name="SemanticViewRelationships" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationships"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationships.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import semantic_view

semanticView.SemanticViewRelationships(
  referenced_table_name_or_alias: SemanticViewRelationshipsReferencedTableNameOrAlias,
  relationship_columns: typing.List[str],
  table_name_or_alias: SemanticViewRelationshipsTableNameOrAlias,
  referenced_relationship_columns: typing.List[str] = None,
  relationship_identifier: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationships.property.referencedTableNameOrAlias">referenced_table_name_or_alias</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAlias">SemanticViewRelationshipsReferencedTableNameOrAlias</a></code> | referenced_table_name_or_alias block. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationships.property.relationshipColumns">relationship_columns</a></code> | <code>typing.List[str]</code> | Specifies one or more columns in the first logical table that refers to columns in another logical table. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationships.property.tableNameOrAlias">table_name_or_alias</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAlias">SemanticViewRelationshipsTableNameOrAlias</a></code> | table_name_or_alias block. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationships.property.referencedRelationshipColumns">referenced_relationship_columns</a></code> | <code>typing.List[str]</code> | Specifies one or more columns in the second logical table that are referred to by the first logical table. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationships.property.relationshipIdentifier">relationship_identifier</a></code> | <code>str</code> | Specifies an optional identifier for the relationship. |

---

##### `referenced_table_name_or_alias`<sup>Required</sup> <a name="referenced_table_name_or_alias" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationships.property.referencedTableNameOrAlias"></a>

```python
referenced_table_name_or_alias: SemanticViewRelationshipsReferencedTableNameOrAlias
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAlias">SemanticViewRelationshipsReferencedTableNameOrAlias</a>

referenced_table_name_or_alias block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#referenced_table_name_or_alias SemanticView#referenced_table_name_or_alias}

---

##### `relationship_columns`<sup>Required</sup> <a name="relationship_columns" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationships.property.relationshipColumns"></a>

```python
relationship_columns: typing.List[str]
```

- *Type:* typing.List[str]

Specifies one or more columns in the first logical table that refers to columns in another logical table.

Column names in this list are case-sensitive - the provider uses double quotes to wrap each of them when sending the SQL to Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#relationship_columns SemanticView#relationship_columns}

---

##### `table_name_or_alias`<sup>Required</sup> <a name="table_name_or_alias" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationships.property.tableNameOrAlias"></a>

```python
table_name_or_alias: SemanticViewRelationshipsTableNameOrAlias
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAlias">SemanticViewRelationshipsTableNameOrAlias</a>

table_name_or_alias block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#table_name_or_alias SemanticView#table_name_or_alias}

---

##### `referenced_relationship_columns`<sup>Optional</sup> <a name="referenced_relationship_columns" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationships.property.referencedRelationshipColumns"></a>

```python
referenced_relationship_columns: typing.List[str]
```

- *Type:* typing.List[str]

Specifies one or more columns in the second logical table that are referred to by the first logical table.

Column names in this list are case-sensitive - the provider uses double quotes to wrap each of them when sending the SQL to Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#referenced_relationship_columns SemanticView#referenced_relationship_columns}

---

##### `relationship_identifier`<sup>Optional</sup> <a name="relationship_identifier" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationships.property.relationshipIdentifier"></a>

```python
relationship_identifier: str
```

- *Type:* str

Specifies an optional identifier for the relationship.

This field is case-sensitive - the provider uses double quotes to wrap it when sending the SQL to Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#relationship_identifier SemanticView#relationship_identifier}

---

### SemanticViewRelationshipsReferencedTableNameOrAlias <a name="SemanticViewRelationshipsReferencedTableNameOrAlias" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAlias"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAlias.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import semantic_view

semanticView.SemanticViewRelationshipsReferencedTableNameOrAlias(
  table_alias: str = None,
  table_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAlias.property.tableAlias">table_alias</a></code> | <code>str</code> | The alias used for the logical table, cannot be used in combination with the `table_name`. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAlias.property.tableName">table_name</a></code> | <code>str</code> | The name of the logical table, cannot be used in combination with the `table_alias`. |

---

##### `table_alias`<sup>Optional</sup> <a name="table_alias" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAlias.property.tableAlias"></a>

```python
table_alias: str
```

- *Type:* str

The alias used for the logical table, cannot be used in combination with the `table_name`.

This field is case-sensitive - the provider uses double quotes to wrap it when sending the SQL to Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#table_alias SemanticView#table_alias}

---

##### `table_name`<sup>Optional</sup> <a name="table_name" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAlias.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

The name of the logical table, cannot be used in combination with the `table_alias`.

This field is case-sensitive - the provider uses double quotes to wrap it when sending the SQL to Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#table_name SemanticView#table_name}

---

### SemanticViewRelationshipsTableNameOrAlias <a name="SemanticViewRelationshipsTableNameOrAlias" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAlias"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAlias.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import semantic_view

semanticView.SemanticViewRelationshipsTableNameOrAlias(
  table_alias: str = None,
  table_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAlias.property.tableAlias">table_alias</a></code> | <code>str</code> | The alias used for the logical table, cannot be used in combination with the `table_name`. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAlias.property.tableName">table_name</a></code> | <code>str</code> | The name of the logical table, cannot be used in combination with the `table_alias`. |

---

##### `table_alias`<sup>Optional</sup> <a name="table_alias" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAlias.property.tableAlias"></a>

```python
table_alias: str
```

- *Type:* str

The alias used for the logical table, cannot be used in combination with the `table_name`.

This field is case-sensitive - the provider uses double quotes to wrap it when sending the SQL to Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#table_alias SemanticView#table_alias}

---

##### `table_name`<sup>Optional</sup> <a name="table_name" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAlias.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

The name of the logical table, cannot be used in combination with the `table_alias`.

This field is case-sensitive - the provider uses double quotes to wrap it when sending the SQL to Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#table_name SemanticView#table_name}

---

### SemanticViewShowOutput <a name="SemanticViewShowOutput" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutput.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import semantic_view

semanticView.SemanticViewShowOutput()
```


### SemanticViewTables <a name="SemanticViewTables" id="@cdktf/provider-snowflake.semanticView.SemanticViewTables"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.semanticView.SemanticViewTables.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import semantic_view

semanticView.SemanticViewTables(
  table_alias: str,
  table_name: str,
  comment: str = None,
  primary_key: typing.List[str] = None,
  synonym: typing.List[str] = None,
  unique: IResolvable | typing.List[SemanticViewTablesUnique] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTables.property.tableAlias">table_alias</a></code> | <code>str</code> | Specifies an alias for a logical table in the semantic view. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTables.property.tableName">table_name</a></code> | <code>str</code> | Specifies an identifier for the logical table. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTables.property.comment">comment</a></code> | <code>str</code> | Specifies a comment for the logical table. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTables.property.primaryKey">primary_key</a></code> | <code>typing.List[str]</code> | Definitions of primary keys in the logical table. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTables.property.synonym">synonym</a></code> | <code>typing.List[str]</code> | List of synonyms for the logical table. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTables.property.unique">unique</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUnique">SemanticViewTablesUnique</a>]</code> | unique block. |

---

##### `table_alias`<sup>Required</sup> <a name="table_alias" id="@cdktf/provider-snowflake.semanticView.SemanticViewTables.property.tableAlias"></a>

```python
table_alias: str
```

- *Type:* str

Specifies an alias for a logical table in the semantic view.

This field is case-sensitive - the provider uses double quotes to wrap it when sending the SQL to Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#table_alias SemanticView#table_alias}

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktf/provider-snowflake.semanticView.SemanticViewTables.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

Specifies an identifier for the logical table.

Example: `"\"<db_name>\".\"<schema_name>\".\"<table_name>\""`. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#table_name SemanticView#table_name}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.semanticView.SemanticViewTables.property.comment"></a>

```python
comment: str
```

- *Type:* str

Specifies a comment for the logical table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#comment SemanticView#comment}

---

##### `primary_key`<sup>Optional</sup> <a name="primary_key" id="@cdktf/provider-snowflake.semanticView.SemanticViewTables.property.primaryKey"></a>

```python
primary_key: typing.List[str]
```

- *Type:* typing.List[str]

Definitions of primary keys in the logical table.

This field is case-sensitive - the provider uses double quotes to wrap it when sending the SQL to Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#primary_key SemanticView#primary_key}

---

##### `synonym`<sup>Optional</sup> <a name="synonym" id="@cdktf/provider-snowflake.semanticView.SemanticViewTables.property.synonym"></a>

```python
synonym: typing.List[str]
```

- *Type:* typing.List[str]

List of synonyms for the logical table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#synonym SemanticView#synonym}

---

##### `unique`<sup>Optional</sup> <a name="unique" id="@cdktf/provider-snowflake.semanticView.SemanticViewTables.property.unique"></a>

```python
unique: IResolvable | typing.List[SemanticViewTablesUnique]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUnique">SemanticViewTablesUnique</a>]

unique block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#unique SemanticView#unique}

---

### SemanticViewTablesUnique <a name="SemanticViewTablesUnique" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUnique"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUnique.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import semantic_view

semanticView.SemanticViewTablesUnique(
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUnique.property.values">values</a></code> | <code>typing.List[str]</code> | Unique key combinations in the logical table. |

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUnique.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Unique key combinations in the logical table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#values SemanticView#values}

---

### SemanticViewTimeouts <a name="SemanticViewTimeouts" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import semantic_view

semanticView.SemanticViewTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#create SemanticView#create}. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#delete SemanticView#delete}. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#read SemanticView#read}. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#update SemanticView#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#create SemanticView#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#delete SemanticView#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#read SemanticView#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#update SemanticView#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SemanticViewDimensionsList <a name="SemanticViewDimensionsList" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import semantic_view

semanticView.SemanticViewDimensionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SemanticViewDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensions">SemanticViewDimensions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SemanticViewDimensions]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensions">SemanticViewDimensions</a>]

---


### SemanticViewDimensionsOutputReference <a name="SemanticViewDimensionsOutputReference" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import semantic_view

semanticView.SemanticViewDimensionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.resetSynonym">reset_synonym</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_synonym` <a name="reset_synonym" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.resetSynonym"></a>

```python
def reset_synonym() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.property.qualifiedExpressionNameInput">qualified_expression_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.property.sqlExpressionInput">sql_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.property.synonymInput">synonym_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.property.qualifiedExpressionName">qualified_expression_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.property.sqlExpression">sql_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.property.synonym">synonym</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensions">SemanticViewDimensions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `qualified_expression_name_input`<sup>Optional</sup> <a name="qualified_expression_name_input" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.property.qualifiedExpressionNameInput"></a>

```python
qualified_expression_name_input: str
```

- *Type:* str

---

##### `sql_expression_input`<sup>Optional</sup> <a name="sql_expression_input" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.property.sqlExpressionInput"></a>

```python
sql_expression_input: str
```

- *Type:* str

---

##### `synonym_input`<sup>Optional</sup> <a name="synonym_input" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.property.synonymInput"></a>

```python
synonym_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `qualified_expression_name`<sup>Required</sup> <a name="qualified_expression_name" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.property.qualifiedExpressionName"></a>

```python
qualified_expression_name: str
```

- *Type:* str

---

##### `sql_expression`<sup>Required</sup> <a name="sql_expression" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.property.sqlExpression"></a>

```python
sql_expression: str
```

- *Type:* str

---

##### `synonym`<sup>Required</sup> <a name="synonym" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.property.synonym"></a>

```python
synonym: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.semanticView.SemanticViewDimensionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SemanticViewDimensions
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewDimensions">SemanticViewDimensions</a>

---


### SemanticViewFactsList <a name="SemanticViewFactsList" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import semantic_view

semanticView.SemanticViewFactsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SemanticViewFactsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFacts">SemanticViewFacts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SemanticViewFacts]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFacts">SemanticViewFacts</a>]

---


### SemanticViewFactsOutputReference <a name="SemanticViewFactsOutputReference" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import semantic_view

semanticView.SemanticViewFactsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.resetSynonym">reset_synonym</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_synonym` <a name="reset_synonym" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.resetSynonym"></a>

```python
def reset_synonym() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.property.qualifiedExpressionNameInput">qualified_expression_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.property.sqlExpressionInput">sql_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.property.synonymInput">synonym_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.property.qualifiedExpressionName">qualified_expression_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.property.sqlExpression">sql_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.property.synonym">synonym</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFacts">SemanticViewFacts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `qualified_expression_name_input`<sup>Optional</sup> <a name="qualified_expression_name_input" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.property.qualifiedExpressionNameInput"></a>

```python
qualified_expression_name_input: str
```

- *Type:* str

---

##### `sql_expression_input`<sup>Optional</sup> <a name="sql_expression_input" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.property.sqlExpressionInput"></a>

```python
sql_expression_input: str
```

- *Type:* str

---

##### `synonym_input`<sup>Optional</sup> <a name="synonym_input" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.property.synonymInput"></a>

```python
synonym_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `qualified_expression_name`<sup>Required</sup> <a name="qualified_expression_name" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.property.qualifiedExpressionName"></a>

```python
qualified_expression_name: str
```

- *Type:* str

---

##### `sql_expression`<sup>Required</sup> <a name="sql_expression" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.property.sqlExpression"></a>

```python
sql_expression: str
```

- *Type:* str

---

##### `synonym`<sup>Required</sup> <a name="synonym" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.property.synonym"></a>

```python
synonym: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.semanticView.SemanticViewFactsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SemanticViewFacts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewFacts">SemanticViewFacts</a>

---


### SemanticViewMetricsList <a name="SemanticViewMetricsList" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import semantic_view

semanticView.SemanticViewMetricsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SemanticViewMetricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetrics">SemanticViewMetrics</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SemanticViewMetrics]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetrics">SemanticViewMetrics</a>]

---


### SemanticViewMetricsOutputReference <a name="SemanticViewMetricsOutputReference" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import semantic_view

semanticView.SemanticViewMetricsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.putSemanticExpression">put_semantic_expression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.putWindowFunction">put_window_function</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.resetSemanticExpression">reset_semantic_expression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.resetWindowFunction">reset_window_function</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_semantic_expression` <a name="put_semantic_expression" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.putSemanticExpression"></a>

```python
def put_semantic_expression(
  qualified_expression_name: str,
  sql_expression: str,
  comment: str = None,
  synonym: typing.List[str] = None
) -> None
```

###### `qualified_expression_name`<sup>Required</sup> <a name="qualified_expression_name" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.putSemanticExpression.parameter.qualifiedExpressionName"></a>

- *Type:* str

Specifies a qualified name for the metric: `<table_alias>.<semantic_expression_name>`. Remember to wrap each part in double quotes like `"\"<table_alias>\".\"<semantic_expression_name>\""`. For the [derived metric](https://docs.snowflake.com/en/user-guide/views-semantic/sql#label-semantic-views-create-derived-metrics) omit the `<table_alias>.` part but still wrap in double quotes, e.g. `"\"<semantic_expression_name>\""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#qualified_expression_name SemanticView#qualified_expression_name}

---

###### `sql_expression`<sup>Required</sup> <a name="sql_expression" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.putSemanticExpression.parameter.sqlExpression"></a>

- *Type:* str

The SQL expression used to compute the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#sql_expression SemanticView#sql_expression}

---

###### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.putSemanticExpression.parameter.comment"></a>

- *Type:* str

Specifies a comment for the semantic expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#comment SemanticView#comment}

---

###### `synonym`<sup>Optional</sup> <a name="synonym" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.putSemanticExpression.parameter.synonym"></a>

- *Type:* typing.List[str]

List of synonyms for this semantic expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#synonym SemanticView#synonym}

---

##### `put_window_function` <a name="put_window_function" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.putWindowFunction"></a>

```python
def put_window_function(
  over_clause: SemanticViewMetricsWindowFunctionOverClause,
  qualified_expression_name: str,
  sql_expression: str
) -> None
```

###### `over_clause`<sup>Required</sup> <a name="over_clause" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.putWindowFunction.parameter.overClause"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClause">SemanticViewMetricsWindowFunctionOverClause</a>

over_clause block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#over_clause SemanticView#over_clause}

---

###### `qualified_expression_name`<sup>Required</sup> <a name="qualified_expression_name" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.putWindowFunction.parameter.qualifiedExpressionName"></a>

- *Type:* str

Specifies a qualified name for the metric: `<table_alias>.<semantic_expression_name>`. Remember to wrap each part in double quotes like `"\"<table_alias>\".\"<semantic_expression_name>\""`. For the [derived metric](https://docs.snowflake.com/en/user-guide/views-semantic/sql#label-semantic-views-create-derived-metrics) omit the `<table_alias>.` part but still wrap in double quotes, e.g. `"\"<semantic_expression_name>\""`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#qualified_expression_name SemanticView#qualified_expression_name}

---

###### `sql_expression`<sup>Required</sup> <a name="sql_expression" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.putWindowFunction.parameter.sqlExpression"></a>

- *Type:* str

The SQL expression used to compute the metric following the `<window_function>(<metric>)` format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#sql_expression SemanticView#sql_expression}

---

##### `reset_semantic_expression` <a name="reset_semantic_expression" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.resetSemanticExpression"></a>

```python
def reset_semantic_expression() -> None
```

##### `reset_window_function` <a name="reset_window_function" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.resetWindowFunction"></a>

```python
def reset_window_function() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.property.semanticExpression">semantic_expression</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference">SemanticViewMetricsSemanticExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.property.windowFunction">window_function</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference">SemanticViewMetricsWindowFunctionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.property.semanticExpressionInput">semantic_expression_input</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpression">SemanticViewMetricsSemanticExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.property.windowFunctionInput">window_function_input</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunction">SemanticViewMetricsWindowFunction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetrics">SemanticViewMetrics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `semantic_expression`<sup>Required</sup> <a name="semantic_expression" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.property.semanticExpression"></a>

```python
semantic_expression: SemanticViewMetricsSemanticExpressionOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference">SemanticViewMetricsSemanticExpressionOutputReference</a>

---

##### `window_function`<sup>Required</sup> <a name="window_function" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.property.windowFunction"></a>

```python
window_function: SemanticViewMetricsWindowFunctionOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference">SemanticViewMetricsWindowFunctionOutputReference</a>

---

##### `semantic_expression_input`<sup>Optional</sup> <a name="semantic_expression_input" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.property.semanticExpressionInput"></a>

```python
semantic_expression_input: SemanticViewMetricsSemanticExpression
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpression">SemanticViewMetricsSemanticExpression</a>

---

##### `window_function_input`<sup>Optional</sup> <a name="window_function_input" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.property.windowFunctionInput"></a>

```python
window_function_input: SemanticViewMetricsWindowFunction
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunction">SemanticViewMetricsWindowFunction</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SemanticViewMetrics
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetrics">SemanticViewMetrics</a>

---


### SemanticViewMetricsSemanticExpressionOutputReference <a name="SemanticViewMetricsSemanticExpressionOutputReference" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import semantic_view

semanticView.SemanticViewMetricsSemanticExpressionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.resetSynonym">reset_synonym</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_synonym` <a name="reset_synonym" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.resetSynonym"></a>

```python
def reset_synonym() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.property.qualifiedExpressionNameInput">qualified_expression_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.property.sqlExpressionInput">sql_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.property.synonymInput">synonym_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.property.qualifiedExpressionName">qualified_expression_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.property.sqlExpression">sql_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.property.synonym">synonym</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpression">SemanticViewMetricsSemanticExpression</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `qualified_expression_name_input`<sup>Optional</sup> <a name="qualified_expression_name_input" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.property.qualifiedExpressionNameInput"></a>

```python
qualified_expression_name_input: str
```

- *Type:* str

---

##### `sql_expression_input`<sup>Optional</sup> <a name="sql_expression_input" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.property.sqlExpressionInput"></a>

```python
sql_expression_input: str
```

- *Type:* str

---

##### `synonym_input`<sup>Optional</sup> <a name="synonym_input" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.property.synonymInput"></a>

```python
synonym_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `qualified_expression_name`<sup>Required</sup> <a name="qualified_expression_name" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.property.qualifiedExpressionName"></a>

```python
qualified_expression_name: str
```

- *Type:* str

---

##### `sql_expression`<sup>Required</sup> <a name="sql_expression" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.property.sqlExpression"></a>

```python
sql_expression: str
```

- *Type:* str

---

##### `synonym`<sup>Required</sup> <a name="synonym" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.property.synonym"></a>

```python
synonym: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpressionOutputReference.property.internalValue"></a>

```python
internal_value: SemanticViewMetricsSemanticExpression
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsSemanticExpression">SemanticViewMetricsSemanticExpression</a>

---


### SemanticViewMetricsWindowFunctionOutputReference <a name="SemanticViewMetricsWindowFunctionOutputReference" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import semantic_view

semanticView.SemanticViewMetricsWindowFunctionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.putOverClause">put_over_clause</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_over_clause` <a name="put_over_clause" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.putOverClause"></a>

```python
def put_over_clause(
  order_by: str = None,
  partition_by: str = None,
  window_frame_clause: str = None
) -> None
```

###### `order_by`<sup>Optional</sup> <a name="order_by" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.putOverClause.parameter.orderBy"></a>

- *Type:* str

Specifies an order by clause.

It must be a complete SQL expression, including any `[ ASC | DESC ] [ NULLS { FIRST | LAST } ]` modifiers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#order_by SemanticView#order_by}

---

###### `partition_by`<sup>Optional</sup> <a name="partition_by" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.putOverClause.parameter.partitionBy"></a>

- *Type:* str

Specifies a partition by clause.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#partition_by SemanticView#partition_by}

---

###### `window_frame_clause`<sup>Optional</sup> <a name="window_frame_clause" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.putOverClause.parameter.windowFrameClause"></a>

- *Type:* str

Specifies a window frame clause.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#window_frame_clause SemanticView#window_frame_clause}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.property.overClause">over_clause</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference">SemanticViewMetricsWindowFunctionOverClauseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.property.overClauseInput">over_clause_input</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClause">SemanticViewMetricsWindowFunctionOverClause</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.property.qualifiedExpressionNameInput">qualified_expression_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.property.sqlExpressionInput">sql_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.property.qualifiedExpressionName">qualified_expression_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.property.sqlExpression">sql_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunction">SemanticViewMetricsWindowFunction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `over_clause`<sup>Required</sup> <a name="over_clause" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.property.overClause"></a>

```python
over_clause: SemanticViewMetricsWindowFunctionOverClauseOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference">SemanticViewMetricsWindowFunctionOverClauseOutputReference</a>

---

##### `over_clause_input`<sup>Optional</sup> <a name="over_clause_input" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.property.overClauseInput"></a>

```python
over_clause_input: SemanticViewMetricsWindowFunctionOverClause
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClause">SemanticViewMetricsWindowFunctionOverClause</a>

---

##### `qualified_expression_name_input`<sup>Optional</sup> <a name="qualified_expression_name_input" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.property.qualifiedExpressionNameInput"></a>

```python
qualified_expression_name_input: str
```

- *Type:* str

---

##### `sql_expression_input`<sup>Optional</sup> <a name="sql_expression_input" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.property.sqlExpressionInput"></a>

```python
sql_expression_input: str
```

- *Type:* str

---

##### `qualified_expression_name`<sup>Required</sup> <a name="qualified_expression_name" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.property.qualifiedExpressionName"></a>

```python
qualified_expression_name: str
```

- *Type:* str

---

##### `sql_expression`<sup>Required</sup> <a name="sql_expression" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.property.sqlExpression"></a>

```python
sql_expression: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOutputReference.property.internalValue"></a>

```python
internal_value: SemanticViewMetricsWindowFunction
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunction">SemanticViewMetricsWindowFunction</a>

---


### SemanticViewMetricsWindowFunctionOverClauseOutputReference <a name="SemanticViewMetricsWindowFunctionOverClauseOutputReference" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import semantic_view

semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.resetOrderBy">reset_order_by</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.resetPartitionBy">reset_partition_by</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.resetWindowFrameClause">reset_window_frame_clause</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_order_by` <a name="reset_order_by" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.resetOrderBy"></a>

```python
def reset_order_by() -> None
```

##### `reset_partition_by` <a name="reset_partition_by" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.resetPartitionBy"></a>

```python
def reset_partition_by() -> None
```

##### `reset_window_frame_clause` <a name="reset_window_frame_clause" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.resetWindowFrameClause"></a>

```python
def reset_window_frame_clause() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.property.orderByInput">order_by_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.property.partitionByInput">partition_by_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.property.windowFrameClauseInput">window_frame_clause_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.property.orderBy">order_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.property.partitionBy">partition_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.property.windowFrameClause">window_frame_clause</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClause">SemanticViewMetricsWindowFunctionOverClause</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `order_by_input`<sup>Optional</sup> <a name="order_by_input" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.property.orderByInput"></a>

```python
order_by_input: str
```

- *Type:* str

---

##### `partition_by_input`<sup>Optional</sup> <a name="partition_by_input" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.property.partitionByInput"></a>

```python
partition_by_input: str
```

- *Type:* str

---

##### `window_frame_clause_input`<sup>Optional</sup> <a name="window_frame_clause_input" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.property.windowFrameClauseInput"></a>

```python
window_frame_clause_input: str
```

- *Type:* str

---

##### `order_by`<sup>Required</sup> <a name="order_by" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.property.orderBy"></a>

```python
order_by: str
```

- *Type:* str

---

##### `partition_by`<sup>Required</sup> <a name="partition_by" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.property.partitionBy"></a>

```python
partition_by: str
```

- *Type:* str

---

##### `window_frame_clause`<sup>Required</sup> <a name="window_frame_clause" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.property.windowFrameClause"></a>

```python
window_frame_clause: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClauseOutputReference.property.internalValue"></a>

```python
internal_value: SemanticViewMetricsWindowFunctionOverClause
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewMetricsWindowFunctionOverClause">SemanticViewMetricsWindowFunctionOverClause</a>

---


### SemanticViewRelationshipsList <a name="SemanticViewRelationshipsList" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import semantic_view

semanticView.SemanticViewRelationshipsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SemanticViewRelationshipsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationships">SemanticViewRelationships</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SemanticViewRelationships]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationships">SemanticViewRelationships</a>]

---


### SemanticViewRelationshipsOutputReference <a name="SemanticViewRelationshipsOutputReference" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import semantic_view

semanticView.SemanticViewRelationshipsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.putReferencedTableNameOrAlias">put_referenced_table_name_or_alias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.putTableNameOrAlias">put_table_name_or_alias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.resetReferencedRelationshipColumns">reset_referenced_relationship_columns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.resetRelationshipIdentifier">reset_relationship_identifier</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_referenced_table_name_or_alias` <a name="put_referenced_table_name_or_alias" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.putReferencedTableNameOrAlias"></a>

```python
def put_referenced_table_name_or_alias(
  table_alias: str = None,
  table_name: str = None
) -> None
```

###### `table_alias`<sup>Optional</sup> <a name="table_alias" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.putReferencedTableNameOrAlias.parameter.tableAlias"></a>

- *Type:* str

The alias used for the logical table, cannot be used in combination with the `table_name`.

This field is case-sensitive - the provider uses double quotes to wrap it when sending the SQL to Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#table_alias SemanticView#table_alias}

---

###### `table_name`<sup>Optional</sup> <a name="table_name" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.putReferencedTableNameOrAlias.parameter.tableName"></a>

- *Type:* str

The name of the logical table, cannot be used in combination with the `table_alias`.

This field is case-sensitive - the provider uses double quotes to wrap it when sending the SQL to Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#table_name SemanticView#table_name}

---

##### `put_table_name_or_alias` <a name="put_table_name_or_alias" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.putTableNameOrAlias"></a>

```python
def put_table_name_or_alias(
  table_alias: str = None,
  table_name: str = None
) -> None
```

###### `table_alias`<sup>Optional</sup> <a name="table_alias" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.putTableNameOrAlias.parameter.tableAlias"></a>

- *Type:* str

The alias used for the logical table, cannot be used in combination with the `table_name`.

This field is case-sensitive - the provider uses double quotes to wrap it when sending the SQL to Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#table_alias SemanticView#table_alias}

---

###### `table_name`<sup>Optional</sup> <a name="table_name" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.putTableNameOrAlias.parameter.tableName"></a>

- *Type:* str

The name of the logical table, cannot be used in combination with the `table_alias`.

This field is case-sensitive - the provider uses double quotes to wrap it when sending the SQL to Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#table_name SemanticView#table_name}

---

##### `reset_referenced_relationship_columns` <a name="reset_referenced_relationship_columns" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.resetReferencedRelationshipColumns"></a>

```python
def reset_referenced_relationship_columns() -> None
```

##### `reset_relationship_identifier` <a name="reset_relationship_identifier" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.resetRelationshipIdentifier"></a>

```python
def reset_relationship_identifier() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.referencedTableNameOrAlias">referenced_table_name_or_alias</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference">SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.tableNameOrAlias">table_name_or_alias</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference">SemanticViewRelationshipsTableNameOrAliasOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.referencedRelationshipColumnsInput">referenced_relationship_columns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.referencedTableNameOrAliasInput">referenced_table_name_or_alias_input</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAlias">SemanticViewRelationshipsReferencedTableNameOrAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.relationshipColumnsInput">relationship_columns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.relationshipIdentifierInput">relationship_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.tableNameOrAliasInput">table_name_or_alias_input</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAlias">SemanticViewRelationshipsTableNameOrAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.referencedRelationshipColumns">referenced_relationship_columns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.relationshipColumns">relationship_columns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.relationshipIdentifier">relationship_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationships">SemanticViewRelationships</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `referenced_table_name_or_alias`<sup>Required</sup> <a name="referenced_table_name_or_alias" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.referencedTableNameOrAlias"></a>

```python
referenced_table_name_or_alias: SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference">SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference</a>

---

##### `table_name_or_alias`<sup>Required</sup> <a name="table_name_or_alias" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.tableNameOrAlias"></a>

```python
table_name_or_alias: SemanticViewRelationshipsTableNameOrAliasOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference">SemanticViewRelationshipsTableNameOrAliasOutputReference</a>

---

##### `referenced_relationship_columns_input`<sup>Optional</sup> <a name="referenced_relationship_columns_input" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.referencedRelationshipColumnsInput"></a>

```python
referenced_relationship_columns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `referenced_table_name_or_alias_input`<sup>Optional</sup> <a name="referenced_table_name_or_alias_input" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.referencedTableNameOrAliasInput"></a>

```python
referenced_table_name_or_alias_input: SemanticViewRelationshipsReferencedTableNameOrAlias
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAlias">SemanticViewRelationshipsReferencedTableNameOrAlias</a>

---

##### `relationship_columns_input`<sup>Optional</sup> <a name="relationship_columns_input" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.relationshipColumnsInput"></a>

```python
relationship_columns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `relationship_identifier_input`<sup>Optional</sup> <a name="relationship_identifier_input" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.relationshipIdentifierInput"></a>

```python
relationship_identifier_input: str
```

- *Type:* str

---

##### `table_name_or_alias_input`<sup>Optional</sup> <a name="table_name_or_alias_input" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.tableNameOrAliasInput"></a>

```python
table_name_or_alias_input: SemanticViewRelationshipsTableNameOrAlias
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAlias">SemanticViewRelationshipsTableNameOrAlias</a>

---

##### `referenced_relationship_columns`<sup>Required</sup> <a name="referenced_relationship_columns" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.referencedRelationshipColumns"></a>

```python
referenced_relationship_columns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `relationship_columns`<sup>Required</sup> <a name="relationship_columns" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.relationshipColumns"></a>

```python
relationship_columns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `relationship_identifier`<sup>Required</sup> <a name="relationship_identifier" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.relationshipIdentifier"></a>

```python
relationship_identifier: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SemanticViewRelationships
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationships">SemanticViewRelationships</a>

---


### SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference <a name="SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import semantic_view

semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.resetTableAlias">reset_table_alias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.resetTableName">reset_table_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_table_alias` <a name="reset_table_alias" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.resetTableAlias"></a>

```python
def reset_table_alias() -> None
```

##### `reset_table_name` <a name="reset_table_name" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.resetTableName"></a>

```python
def reset_table_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.property.tableAliasInput">table_alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.property.tableNameInput">table_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.property.tableAlias">table_alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.property.tableName">table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAlias">SemanticViewRelationshipsReferencedTableNameOrAlias</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `table_alias_input`<sup>Optional</sup> <a name="table_alias_input" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.property.tableAliasInput"></a>

```python
table_alias_input: str
```

- *Type:* str

---

##### `table_name_input`<sup>Optional</sup> <a name="table_name_input" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.property.tableNameInput"></a>

```python
table_name_input: str
```

- *Type:* str

---

##### `table_alias`<sup>Required</sup> <a name="table_alias" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.property.tableAlias"></a>

```python
table_alias: str
```

- *Type:* str

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference.property.internalValue"></a>

```python
internal_value: SemanticViewRelationshipsReferencedTableNameOrAlias
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsReferencedTableNameOrAlias">SemanticViewRelationshipsReferencedTableNameOrAlias</a>

---


### SemanticViewRelationshipsTableNameOrAliasOutputReference <a name="SemanticViewRelationshipsTableNameOrAliasOutputReference" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import semantic_view

semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.resetTableAlias">reset_table_alias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.resetTableName">reset_table_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_table_alias` <a name="reset_table_alias" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.resetTableAlias"></a>

```python
def reset_table_alias() -> None
```

##### `reset_table_name` <a name="reset_table_name" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.resetTableName"></a>

```python
def reset_table_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.property.tableAliasInput">table_alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.property.tableNameInput">table_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.property.tableAlias">table_alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.property.tableName">table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAlias">SemanticViewRelationshipsTableNameOrAlias</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `table_alias_input`<sup>Optional</sup> <a name="table_alias_input" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.property.tableAliasInput"></a>

```python
table_alias_input: str
```

- *Type:* str

---

##### `table_name_input`<sup>Optional</sup> <a name="table_name_input" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.property.tableNameInput"></a>

```python
table_name_input: str
```

- *Type:* str

---

##### `table_alias`<sup>Required</sup> <a name="table_alias" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.property.tableAlias"></a>

```python
table_alias: str
```

- *Type:* str

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAliasOutputReference.property.internalValue"></a>

```python
internal_value: SemanticViewRelationshipsTableNameOrAlias
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewRelationshipsTableNameOrAlias">SemanticViewRelationshipsTableNameOrAlias</a>

---


### SemanticViewShowOutputList <a name="SemanticViewShowOutputList" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import semantic_view

semanticView.SemanticViewShowOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SemanticViewShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### SemanticViewShowOutputOutputReference <a name="SemanticViewShowOutputOutputReference" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import semantic_view

semanticView.SemanticViewShowOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.property.extension">extension</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.property.ownerRoleType">owner_role_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutput">SemanticViewShowOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `extension`<sup>Required</sup> <a name="extension" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.property.extension"></a>

```python
extension: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `owner_role_type`<sup>Required</sup> <a name="owner_role_type" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.property.ownerRoleType"></a>

```python
owner_role_type: str
```

- *Type:* str

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.semanticView.SemanticViewShowOutputOutputReference.property.internalValue"></a>

```python
internal_value: SemanticViewShowOutput
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewShowOutput">SemanticViewShowOutput</a>

---


### SemanticViewTablesList <a name="SemanticViewTablesList" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import semantic_view

semanticView.SemanticViewTablesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SemanticViewTablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTables">SemanticViewTables</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SemanticViewTables]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTables">SemanticViewTables</a>]

---


### SemanticViewTablesOutputReference <a name="SemanticViewTablesOutputReference" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import semantic_view

semanticView.SemanticViewTablesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.putUnique">put_unique</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.resetPrimaryKey">reset_primary_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.resetSynonym">reset_synonym</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.resetUnique">reset_unique</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_unique` <a name="put_unique" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.putUnique"></a>

```python
def put_unique(
  value: IResolvable | typing.List[SemanticViewTablesUnique]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.putUnique.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUnique">SemanticViewTablesUnique</a>]

---

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_primary_key` <a name="reset_primary_key" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.resetPrimaryKey"></a>

```python
def reset_primary_key() -> None
```

##### `reset_synonym` <a name="reset_synonym" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.resetSynonym"></a>

```python
def reset_synonym() -> None
```

##### `reset_unique` <a name="reset_unique" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.resetUnique"></a>

```python
def reset_unique() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.unique">unique</a></code> | <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList">SemanticViewTablesUniqueList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.primaryKeyInput">primary_key_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.synonymInput">synonym_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.tableAliasInput">table_alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.tableNameInput">table_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.uniqueInput">unique_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUnique">SemanticViewTablesUnique</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.primaryKey">primary_key</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.synonym">synonym</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.tableAlias">table_alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.tableName">table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTables">SemanticViewTables</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `unique`<sup>Required</sup> <a name="unique" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.unique"></a>

```python
unique: SemanticViewTablesUniqueList
```

- *Type:* <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList">SemanticViewTablesUniqueList</a>

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `primary_key_input`<sup>Optional</sup> <a name="primary_key_input" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.primaryKeyInput"></a>

```python
primary_key_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `synonym_input`<sup>Optional</sup> <a name="synonym_input" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.synonymInput"></a>

```python
synonym_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `table_alias_input`<sup>Optional</sup> <a name="table_alias_input" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.tableAliasInput"></a>

```python
table_alias_input: str
```

- *Type:* str

---

##### `table_name_input`<sup>Optional</sup> <a name="table_name_input" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.tableNameInput"></a>

```python
table_name_input: str
```

- *Type:* str

---

##### `unique_input`<sup>Optional</sup> <a name="unique_input" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.uniqueInput"></a>

```python
unique_input: IResolvable | typing.List[SemanticViewTablesUnique]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUnique">SemanticViewTablesUnique</a>]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `primary_key`<sup>Required</sup> <a name="primary_key" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.primaryKey"></a>

```python
primary_key: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `synonym`<sup>Required</sup> <a name="synonym" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.synonym"></a>

```python
synonym: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `table_alias`<sup>Required</sup> <a name="table_alias" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.tableAlias"></a>

```python
table_alias: str
```

- *Type:* str

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SemanticViewTables
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTables">SemanticViewTables</a>

---


### SemanticViewTablesUniqueList <a name="SemanticViewTablesUniqueList" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import semantic_view

semanticView.SemanticViewTablesUniqueList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SemanticViewTablesUniqueOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUnique">SemanticViewTablesUnique</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SemanticViewTablesUnique]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUnique">SemanticViewTablesUnique</a>]

---


### SemanticViewTablesUniqueOutputReference <a name="SemanticViewTablesUniqueOutputReference" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import semantic_view

semanticView.SemanticViewTablesUniqueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUnique">SemanticViewTablesUnique</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.semanticView.SemanticViewTablesUniqueOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SemanticViewTablesUnique
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTablesUnique">SemanticViewTablesUnique</a>

---


### SemanticViewTimeoutsOutputReference <a name="SemanticViewTimeoutsOutputReference" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import semantic_view

semanticView.SemanticViewTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeouts">SemanticViewTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.semanticView.SemanticViewTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SemanticViewTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.semanticView.SemanticViewTimeouts">SemanticViewTimeouts</a>

---



