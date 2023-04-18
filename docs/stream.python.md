# `snowflake_stream`

Refer to the Terraform Registory for docs: [`snowflake_stream`](https://www.terraform.io/docs/providers/snowflake/r/stream).

# `stream` Submodule <a name="`stream` Submodule" id="@cdktf/provider-snowflake.stream"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Stream <a name="Stream" id="@cdktf/provider-snowflake.stream.Stream"></a>

Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/stream snowflake_stream}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.stream.Stream.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import stream

stream.Stream(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  database: str,
  name: str,
  schema: str,
  append_only: typing.Union[bool, IResolvable] = None,
  comment: str = None,
  id: str = None,
  insert_only: typing.Union[bool, IResolvable] = None,
  on_stage: str = None,
  on_table: str = None,
  on_view: str = None,
  show_initial_rows: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.Initializer.parameter.database">database</a></code> | <code>str</code> | The database in which to create the stream. |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.Initializer.parameter.name">name</a></code> | <code>str</code> | Specifies the identifier for the stream; |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.Initializer.parameter.schema">schema</a></code> | <code>str</code> | The schema in which to create the stream. |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.Initializer.parameter.appendOnly">append_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Type of the stream that will be created. |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.Initializer.parameter.comment">comment</a></code> | <code>str</code> | Specifies a comment for the stream. |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stream#id Stream#id}. |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.Initializer.parameter.insertOnly">insert_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Create an insert only stream type. |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.Initializer.parameter.onStage">on_stage</a></code> | <code>str</code> | Name of the stage the stream will monitor. |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.Initializer.parameter.onTable">on_table</a></code> | <code>str</code> | Name of the table the stream will monitor. |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.Initializer.parameter.onView">on_view</a></code> | <code>str</code> | Name of the view the stream will monitor. |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.Initializer.parameter.showInitialRows">show_initial_rows</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether to return all existing rows in the source table as row inserts the first time the stream is consumed. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.stream.Stream.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.stream.Stream.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.stream.Stream.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.stream.Stream.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.stream.Stream.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.stream.Stream.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.stream.Stream.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.stream.Stream.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.stream.Stream.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.stream.Stream.Initializer.parameter.database"></a>

- *Type:* str

The database in which to create the stream.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stream#database Stream#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.stream.Stream.Initializer.parameter.name"></a>

- *Type:* str

Specifies the identifier for the stream;

must be unique for the database and schema in which the stream is created.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stream#name Stream#name}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.stream.Stream.Initializer.parameter.schema"></a>

- *Type:* str

The schema in which to create the stream.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stream#schema Stream#schema}

---

##### `append_only`<sup>Optional</sup> <a name="append_only" id="@cdktf/provider-snowflake.stream.Stream.Initializer.parameter.appendOnly"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Type of the stream that will be created.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stream#append_only Stream#append_only}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.stream.Stream.Initializer.parameter.comment"></a>

- *Type:* str

Specifies a comment for the stream.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stream#comment Stream#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.stream.Stream.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stream#id Stream#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `insert_only`<sup>Optional</sup> <a name="insert_only" id="@cdktf/provider-snowflake.stream.Stream.Initializer.parameter.insertOnly"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Create an insert only stream type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stream#insert_only Stream#insert_only}

---

##### `on_stage`<sup>Optional</sup> <a name="on_stage" id="@cdktf/provider-snowflake.stream.Stream.Initializer.parameter.onStage"></a>

- *Type:* str

Name of the stage the stream will monitor.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stream#on_stage Stream#on_stage}

---

##### `on_table`<sup>Optional</sup> <a name="on_table" id="@cdktf/provider-snowflake.stream.Stream.Initializer.parameter.onTable"></a>

- *Type:* str

Name of the table the stream will monitor.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stream#on_table Stream#on_table}

---

##### `on_view`<sup>Optional</sup> <a name="on_view" id="@cdktf/provider-snowflake.stream.Stream.Initializer.parameter.onView"></a>

- *Type:* str

Name of the view the stream will monitor.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stream#on_view Stream#on_view}

---

##### `show_initial_rows`<sup>Optional</sup> <a name="show_initial_rows" id="@cdktf/provider-snowflake.stream.Stream.Initializer.parameter.showInitialRows"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether to return all existing rows in the source table as row inserts the first time the stream is consumed.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stream#show_initial_rows Stream#show_initial_rows}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.resetAppendOnly">reset_append_only</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.resetInsertOnly">reset_insert_only</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.resetOnStage">reset_on_stage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.resetOnTable">reset_on_table</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.resetOnView">reset_on_view</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.resetShowInitialRows">reset_show_initial_rows</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.stream.Stream.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-snowflake.stream.Stream.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.stream.Stream.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.stream.Stream.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-snowflake.stream.Stream.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-snowflake.stream.Stream.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-snowflake.stream.Stream.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-snowflake.stream.Stream.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-snowflake.stream.Stream.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.stream.Stream.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.stream.Stream.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.stream.Stream.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.stream.Stream.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.stream.Stream.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.stream.Stream.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.stream.Stream.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.stream.Stream.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.stream.Stream.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.stream.Stream.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.stream.Stream.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.stream.Stream.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.stream.Stream.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.stream.Stream.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.stream.Stream.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.stream.Stream.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.stream.Stream.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.stream.Stream.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.stream.Stream.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.stream.Stream.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_append_only` <a name="reset_append_only" id="@cdktf/provider-snowflake.stream.Stream.resetAppendOnly"></a>

```python
def reset_append_only() -> None
```

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-snowflake.stream.Stream.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-snowflake.stream.Stream.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_insert_only` <a name="reset_insert_only" id="@cdktf/provider-snowflake.stream.Stream.resetInsertOnly"></a>

```python
def reset_insert_only() -> None
```

##### `reset_on_stage` <a name="reset_on_stage" id="@cdktf/provider-snowflake.stream.Stream.resetOnStage"></a>

```python
def reset_on_stage() -> None
```

##### `reset_on_table` <a name="reset_on_table" id="@cdktf/provider-snowflake.stream.Stream.resetOnTable"></a>

```python
def reset_on_table() -> None
```

##### `reset_on_view` <a name="reset_on_view" id="@cdktf/provider-snowflake.stream.Stream.resetOnView"></a>

```python
def reset_on_view() -> None
```

##### `reset_show_initial_rows` <a name="reset_show_initial_rows" id="@cdktf/provider-snowflake.stream.Stream.resetShowInitialRows"></a>

```python
def reset_show_initial_rows() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-snowflake.stream.Stream.isConstruct"></a>

```python
from cdktf_cdktf_provider_snowflake import stream

stream.Stream.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.stream.Stream.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-snowflake.stream.Stream.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_snowflake import stream

stream.Stream.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.stream.Stream.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-snowflake.stream.Stream.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_snowflake import stream

stream.Stream.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.stream.Stream.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.property.appendOnlyInput">append_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.property.insertOnlyInput">insert_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.property.onStageInput">on_stage_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.property.onTableInput">on_table_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.property.onViewInput">on_view_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.property.schemaInput">schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.property.showInitialRowsInput">show_initial_rows_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.property.appendOnly">append_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.property.insertOnly">insert_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.property.onStage">on_stage</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.property.onTable">on_table</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.property.onView">on_view</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.property.schema">schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.property.showInitialRows">show_initial_rows</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.stream.Stream.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-snowflake.stream.Stream.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.stream.Stream.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-snowflake.stream.Stream.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-snowflake.stream.Stream.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-snowflake.stream.Stream.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-snowflake.stream.Stream.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.stream.Stream.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.stream.Stream.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.stream.Stream.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.stream.Stream.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.stream.Stream.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.stream.Stream.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.stream.Stream.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-snowflake.stream.Stream.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `append_only_input`<sup>Optional</sup> <a name="append_only_input" id="@cdktf/provider-snowflake.stream.Stream.property.appendOnlyInput"></a>

```python
append_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-snowflake.stream.Stream.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktf/provider-snowflake.stream.Stream.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-snowflake.stream.Stream.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `insert_only_input`<sup>Optional</sup> <a name="insert_only_input" id="@cdktf/provider-snowflake.stream.Stream.property.insertOnlyInput"></a>

```python
insert_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-snowflake.stream.Stream.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `on_stage_input`<sup>Optional</sup> <a name="on_stage_input" id="@cdktf/provider-snowflake.stream.Stream.property.onStageInput"></a>

```python
on_stage_input: str
```

- *Type:* str

---

##### `on_table_input`<sup>Optional</sup> <a name="on_table_input" id="@cdktf/provider-snowflake.stream.Stream.property.onTableInput"></a>

```python
on_table_input: str
```

- *Type:* str

---

##### `on_view_input`<sup>Optional</sup> <a name="on_view_input" id="@cdktf/provider-snowflake.stream.Stream.property.onViewInput"></a>

```python
on_view_input: str
```

- *Type:* str

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktf/provider-snowflake.stream.Stream.property.schemaInput"></a>

```python
schema_input: str
```

- *Type:* str

---

##### `show_initial_rows_input`<sup>Optional</sup> <a name="show_initial_rows_input" id="@cdktf/provider-snowflake.stream.Stream.property.showInitialRowsInput"></a>

```python
show_initial_rows_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `append_only`<sup>Required</sup> <a name="append_only" id="@cdktf/provider-snowflake.stream.Stream.property.appendOnly"></a>

```python
append_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.stream.Stream.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.stream.Stream.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.stream.Stream.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `insert_only`<sup>Required</sup> <a name="insert_only" id="@cdktf/provider-snowflake.stream.Stream.property.insertOnly"></a>

```python
insert_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.stream.Stream.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `on_stage`<sup>Required</sup> <a name="on_stage" id="@cdktf/provider-snowflake.stream.Stream.property.onStage"></a>

```python
on_stage: str
```

- *Type:* str

---

##### `on_table`<sup>Required</sup> <a name="on_table" id="@cdktf/provider-snowflake.stream.Stream.property.onTable"></a>

```python
on_table: str
```

- *Type:* str

---

##### `on_view`<sup>Required</sup> <a name="on_view" id="@cdktf/provider-snowflake.stream.Stream.property.onView"></a>

```python
on_view: str
```

- *Type:* str

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.stream.Stream.property.schema"></a>

```python
schema: str
```

- *Type:* str

---

##### `show_initial_rows`<sup>Required</sup> <a name="show_initial_rows" id="@cdktf/provider-snowflake.stream.Stream.property.showInitialRows"></a>

```python
show_initial_rows: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.stream.Stream.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.stream.Stream.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### StreamConfig <a name="StreamConfig" id="@cdktf/provider-snowflake.stream.StreamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.stream.StreamConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import stream

stream.StreamConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  database: str,
  name: str,
  schema: str,
  append_only: typing.Union[bool, IResolvable] = None,
  comment: str = None,
  id: str = None,
  insert_only: typing.Union[bool, IResolvable] = None,
  on_stage: str = None,
  on_table: str = None,
  on_view: str = None,
  show_initial_rows: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.stream.StreamConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.StreamConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.StreamConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.StreamConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.StreamConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.StreamConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.StreamConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.stream.StreamConfig.property.database">database</a></code> | <code>str</code> | The database in which to create the stream. |
| <code><a href="#@cdktf/provider-snowflake.stream.StreamConfig.property.name">name</a></code> | <code>str</code> | Specifies the identifier for the stream; |
| <code><a href="#@cdktf/provider-snowflake.stream.StreamConfig.property.schema">schema</a></code> | <code>str</code> | The schema in which to create the stream. |
| <code><a href="#@cdktf/provider-snowflake.stream.StreamConfig.property.appendOnly">append_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Type of the stream that will be created. |
| <code><a href="#@cdktf/provider-snowflake.stream.StreamConfig.property.comment">comment</a></code> | <code>str</code> | Specifies a comment for the stream. |
| <code><a href="#@cdktf/provider-snowflake.stream.StreamConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stream#id Stream#id}. |
| <code><a href="#@cdktf/provider-snowflake.stream.StreamConfig.property.insertOnly">insert_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Create an insert only stream type. |
| <code><a href="#@cdktf/provider-snowflake.stream.StreamConfig.property.onStage">on_stage</a></code> | <code>str</code> | Name of the stage the stream will monitor. |
| <code><a href="#@cdktf/provider-snowflake.stream.StreamConfig.property.onTable">on_table</a></code> | <code>str</code> | Name of the table the stream will monitor. |
| <code><a href="#@cdktf/provider-snowflake.stream.StreamConfig.property.onView">on_view</a></code> | <code>str</code> | Name of the view the stream will monitor. |
| <code><a href="#@cdktf/provider-snowflake.stream.StreamConfig.property.showInitialRows">show_initial_rows</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether to return all existing rows in the source table as row inserts the first time the stream is consumed. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.stream.StreamConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.stream.StreamConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.stream.StreamConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.stream.StreamConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.stream.StreamConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.stream.StreamConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.stream.StreamConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.stream.StreamConfig.property.database"></a>

```python
database: str
```

- *Type:* str

The database in which to create the stream.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stream#database Stream#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.stream.StreamConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Specifies the identifier for the stream;

must be unique for the database and schema in which the stream is created.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stream#name Stream#name}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.stream.StreamConfig.property.schema"></a>

```python
schema: str
```

- *Type:* str

The schema in which to create the stream.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stream#schema Stream#schema}

---

##### `append_only`<sup>Optional</sup> <a name="append_only" id="@cdktf/provider-snowflake.stream.StreamConfig.property.appendOnly"></a>

```python
append_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Type of the stream that will be created.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stream#append_only Stream#append_only}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.stream.StreamConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

Specifies a comment for the stream.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stream#comment Stream#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.stream.StreamConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stream#id Stream#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `insert_only`<sup>Optional</sup> <a name="insert_only" id="@cdktf/provider-snowflake.stream.StreamConfig.property.insertOnly"></a>

```python
insert_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Create an insert only stream type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stream#insert_only Stream#insert_only}

---

##### `on_stage`<sup>Optional</sup> <a name="on_stage" id="@cdktf/provider-snowflake.stream.StreamConfig.property.onStage"></a>

```python
on_stage: str
```

- *Type:* str

Name of the stage the stream will monitor.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stream#on_stage Stream#on_stage}

---

##### `on_table`<sup>Optional</sup> <a name="on_table" id="@cdktf/provider-snowflake.stream.StreamConfig.property.onTable"></a>

```python
on_table: str
```

- *Type:* str

Name of the table the stream will monitor.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stream#on_table Stream#on_table}

---

##### `on_view`<sup>Optional</sup> <a name="on_view" id="@cdktf/provider-snowflake.stream.StreamConfig.property.onView"></a>

```python
on_view: str
```

- *Type:* str

Name of the view the stream will monitor.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stream#on_view Stream#on_view}

---

##### `show_initial_rows`<sup>Optional</sup> <a name="show_initial_rows" id="@cdktf/provider-snowflake.stream.StreamConfig.property.showInitialRows"></a>

```python
show_initial_rows: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether to return all existing rows in the source table as row inserts the first time the stream is consumed.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/stream#show_initial_rows Stream#show_initial_rows}

---



