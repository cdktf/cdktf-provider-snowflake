# `pipe` Submodule <a name="`pipe` Submodule" id="@cdktf/provider-snowflake.pipe"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Pipe <a name="Pipe" id="@cdktf/provider-snowflake.pipe.Pipe"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/pipe snowflake_pipe}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.pipe.Pipe.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import pipe

pipe.Pipe(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  copy_statement: str,
  database: str,
  name: str,
  schema: str,
  auto_ingest: typing.Union[bool, IResolvable] = None,
  aws_sns_topic_arn: str = None,
  comment: str = None,
  error_integration: str = None,
  id: str = None,
  integration: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.Initializer.parameter.copyStatement">copy_statement</a></code> | <code>str</code> | Specifies the copy statement for the pipe. |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.Initializer.parameter.database">database</a></code> | <code>str</code> | The database in which to create the pipe. |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.Initializer.parameter.name">name</a></code> | <code>str</code> | Specifies the identifier for the pipe; |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.Initializer.parameter.schema">schema</a></code> | <code>str</code> | The schema in which to create the pipe. |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.Initializer.parameter.autoIngest">auto_ingest</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies a auto_ingest param for the pipe. |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.Initializer.parameter.awsSnsTopicArn">aws_sns_topic_arn</a></code> | <code>str</code> | Specifies the Amazon Resource Name (ARN) for the SNS topic for your S3 bucket. |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.Initializer.parameter.comment">comment</a></code> | <code>str</code> | Specifies a comment for the pipe. |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.Initializer.parameter.errorIntegration">error_integration</a></code> | <code>str</code> | Specifies the name of the notification integration used for error notifications. |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/pipe#id Pipe#id}. |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.Initializer.parameter.integration">integration</a></code> | <code>str</code> | Specifies an integration for the pipe. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.pipe.Pipe.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.pipe.Pipe.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.pipe.Pipe.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.pipe.Pipe.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.pipe.Pipe.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.pipe.Pipe.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.pipe.Pipe.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.pipe.Pipe.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.pipe.Pipe.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `copy_statement`<sup>Required</sup> <a name="copy_statement" id="@cdktf/provider-snowflake.pipe.Pipe.Initializer.parameter.copyStatement"></a>

- *Type:* str

Specifies the copy statement for the pipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/pipe#copy_statement Pipe#copy_statement}

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.pipe.Pipe.Initializer.parameter.database"></a>

- *Type:* str

The database in which to create the pipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/pipe#database Pipe#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.pipe.Pipe.Initializer.parameter.name"></a>

- *Type:* str

Specifies the identifier for the pipe;

must be unique for the database and schema in which the pipe is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/pipe#name Pipe#name}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.pipe.Pipe.Initializer.parameter.schema"></a>

- *Type:* str

The schema in which to create the pipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/pipe#schema Pipe#schema}

---

##### `auto_ingest`<sup>Optional</sup> <a name="auto_ingest" id="@cdktf/provider-snowflake.pipe.Pipe.Initializer.parameter.autoIngest"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies a auto_ingest param for the pipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/pipe#auto_ingest Pipe#auto_ingest}

---

##### `aws_sns_topic_arn`<sup>Optional</sup> <a name="aws_sns_topic_arn" id="@cdktf/provider-snowflake.pipe.Pipe.Initializer.parameter.awsSnsTopicArn"></a>

- *Type:* str

Specifies the Amazon Resource Name (ARN) for the SNS topic for your S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/pipe#aws_sns_topic_arn Pipe#aws_sns_topic_arn}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.pipe.Pipe.Initializer.parameter.comment"></a>

- *Type:* str

Specifies a comment for the pipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/pipe#comment Pipe#comment}

---

##### `error_integration`<sup>Optional</sup> <a name="error_integration" id="@cdktf/provider-snowflake.pipe.Pipe.Initializer.parameter.errorIntegration"></a>

- *Type:* str

Specifies the name of the notification integration used for error notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/pipe#error_integration Pipe#error_integration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.pipe.Pipe.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/pipe#id Pipe#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `integration`<sup>Optional</sup> <a name="integration" id="@cdktf/provider-snowflake.pipe.Pipe.Initializer.parameter.integration"></a>

- *Type:* str

Specifies an integration for the pipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/pipe#integration Pipe#integration}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.resetAutoIngest">reset_auto_ingest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.resetAwsSnsTopicArn">reset_aws_sns_topic_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.resetErrorIntegration">reset_error_integration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.resetIntegration">reset_integration</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.pipe.Pipe.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-snowflake.pipe.Pipe.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.pipe.Pipe.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.pipe.Pipe.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-snowflake.pipe.Pipe.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-snowflake.pipe.Pipe.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-snowflake.pipe.Pipe.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-snowflake.pipe.Pipe.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-snowflake.pipe.Pipe.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-snowflake.pipe.Pipe.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-snowflake.pipe.Pipe.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-snowflake.pipe.Pipe.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.pipe.Pipe.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.pipe.Pipe.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.pipe.Pipe.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.pipe.Pipe.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.pipe.Pipe.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.pipe.Pipe.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.pipe.Pipe.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.pipe.Pipe.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.pipe.Pipe.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.pipe.Pipe.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.pipe.Pipe.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.pipe.Pipe.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.pipe.Pipe.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.pipe.Pipe.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.pipe.Pipe.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.pipe.Pipe.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.pipe.Pipe.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.pipe.Pipe.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-snowflake.pipe.Pipe.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-snowflake.pipe.Pipe.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.pipe.Pipe.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.pipe.Pipe.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.pipe.Pipe.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.pipe.Pipe.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-snowflake.pipe.Pipe.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.pipe.Pipe.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-snowflake.pipe.Pipe.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-snowflake.pipe.Pipe.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.pipe.Pipe.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-snowflake.pipe.Pipe.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.pipe.Pipe.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_auto_ingest` <a name="reset_auto_ingest" id="@cdktf/provider-snowflake.pipe.Pipe.resetAutoIngest"></a>

```python
def reset_auto_ingest() -> None
```

##### `reset_aws_sns_topic_arn` <a name="reset_aws_sns_topic_arn" id="@cdktf/provider-snowflake.pipe.Pipe.resetAwsSnsTopicArn"></a>

```python
def reset_aws_sns_topic_arn() -> None
```

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-snowflake.pipe.Pipe.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_error_integration` <a name="reset_error_integration" id="@cdktf/provider-snowflake.pipe.Pipe.resetErrorIntegration"></a>

```python
def reset_error_integration() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-snowflake.pipe.Pipe.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_integration` <a name="reset_integration" id="@cdktf/provider-snowflake.pipe.Pipe.resetIntegration"></a>

```python
def reset_integration() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Pipe resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-snowflake.pipe.Pipe.isConstruct"></a>

```python
from cdktf_cdktf_provider_snowflake import pipe

pipe.Pipe.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.pipe.Pipe.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-snowflake.pipe.Pipe.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_snowflake import pipe

pipe.Pipe.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.pipe.Pipe.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-snowflake.pipe.Pipe.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_snowflake import pipe

pipe.Pipe.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.pipe.Pipe.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-snowflake.pipe.Pipe.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_snowflake import pipe

pipe.Pipe.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Pipe resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.pipe.Pipe.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-snowflake.pipe.Pipe.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Pipe to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-snowflake.pipe.Pipe.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Pipe that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/pipe#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.pipe.Pipe.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Pipe to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.notificationChannel">notification_channel</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.autoIngestInput">auto_ingest_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.awsSnsTopicArnInput">aws_sns_topic_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.copyStatementInput">copy_statement_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.errorIntegrationInput">error_integration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.integrationInput">integration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.schemaInput">schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.autoIngest">auto_ingest</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.awsSnsTopicArn">aws_sns_topic_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.copyStatement">copy_statement</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.errorIntegration">error_integration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.integration">integration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.schema">schema</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.pipe.Pipe.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-snowflake.pipe.Pipe.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.pipe.Pipe.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-snowflake.pipe.Pipe.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-snowflake.pipe.Pipe.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-snowflake.pipe.Pipe.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-snowflake.pipe.Pipe.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.pipe.Pipe.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.pipe.Pipe.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.pipe.Pipe.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.pipe.Pipe.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.pipe.Pipe.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.pipe.Pipe.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.pipe.Pipe.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `notification_channel`<sup>Required</sup> <a name="notification_channel" id="@cdktf/provider-snowflake.pipe.Pipe.property.notificationChannel"></a>

```python
notification_channel: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-snowflake.pipe.Pipe.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `auto_ingest_input`<sup>Optional</sup> <a name="auto_ingest_input" id="@cdktf/provider-snowflake.pipe.Pipe.property.autoIngestInput"></a>

```python
auto_ingest_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `aws_sns_topic_arn_input`<sup>Optional</sup> <a name="aws_sns_topic_arn_input" id="@cdktf/provider-snowflake.pipe.Pipe.property.awsSnsTopicArnInput"></a>

```python
aws_sns_topic_arn_input: str
```

- *Type:* str

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-snowflake.pipe.Pipe.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `copy_statement_input`<sup>Optional</sup> <a name="copy_statement_input" id="@cdktf/provider-snowflake.pipe.Pipe.property.copyStatementInput"></a>

```python
copy_statement_input: str
```

- *Type:* str

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktf/provider-snowflake.pipe.Pipe.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `error_integration_input`<sup>Optional</sup> <a name="error_integration_input" id="@cdktf/provider-snowflake.pipe.Pipe.property.errorIntegrationInput"></a>

```python
error_integration_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-snowflake.pipe.Pipe.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `integration_input`<sup>Optional</sup> <a name="integration_input" id="@cdktf/provider-snowflake.pipe.Pipe.property.integrationInput"></a>

```python
integration_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-snowflake.pipe.Pipe.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktf/provider-snowflake.pipe.Pipe.property.schemaInput"></a>

```python
schema_input: str
```

- *Type:* str

---

##### `auto_ingest`<sup>Required</sup> <a name="auto_ingest" id="@cdktf/provider-snowflake.pipe.Pipe.property.autoIngest"></a>

```python
auto_ingest: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `aws_sns_topic_arn`<sup>Required</sup> <a name="aws_sns_topic_arn" id="@cdktf/provider-snowflake.pipe.Pipe.property.awsSnsTopicArn"></a>

```python
aws_sns_topic_arn: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.pipe.Pipe.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `copy_statement`<sup>Required</sup> <a name="copy_statement" id="@cdktf/provider-snowflake.pipe.Pipe.property.copyStatement"></a>

```python
copy_statement: str
```

- *Type:* str

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.pipe.Pipe.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `error_integration`<sup>Required</sup> <a name="error_integration" id="@cdktf/provider-snowflake.pipe.Pipe.property.errorIntegration"></a>

```python
error_integration: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.pipe.Pipe.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `integration`<sup>Required</sup> <a name="integration" id="@cdktf/provider-snowflake.pipe.Pipe.property.integration"></a>

```python
integration: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.pipe.Pipe.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.pipe.Pipe.property.schema"></a>

```python
schema: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.pipe.Pipe.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.pipe.Pipe.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PipeConfig <a name="PipeConfig" id="@cdktf/provider-snowflake.pipe.PipeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.pipe.PipeConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import pipe

pipe.PipeConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  copy_statement: str,
  database: str,
  name: str,
  schema: str,
  auto_ingest: typing.Union[bool, IResolvable] = None,
  aws_sns_topic_arn: str = None,
  comment: str = None,
  error_integration: str = None,
  id: str = None,
  integration: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.pipe.PipeConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.PipeConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.PipeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.PipeConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.PipeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.PipeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.PipeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.pipe.PipeConfig.property.copyStatement">copy_statement</a></code> | <code>str</code> | Specifies the copy statement for the pipe. |
| <code><a href="#@cdktf/provider-snowflake.pipe.PipeConfig.property.database">database</a></code> | <code>str</code> | The database in which to create the pipe. |
| <code><a href="#@cdktf/provider-snowflake.pipe.PipeConfig.property.name">name</a></code> | <code>str</code> | Specifies the identifier for the pipe; |
| <code><a href="#@cdktf/provider-snowflake.pipe.PipeConfig.property.schema">schema</a></code> | <code>str</code> | The schema in which to create the pipe. |
| <code><a href="#@cdktf/provider-snowflake.pipe.PipeConfig.property.autoIngest">auto_ingest</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies a auto_ingest param for the pipe. |
| <code><a href="#@cdktf/provider-snowflake.pipe.PipeConfig.property.awsSnsTopicArn">aws_sns_topic_arn</a></code> | <code>str</code> | Specifies the Amazon Resource Name (ARN) for the SNS topic for your S3 bucket. |
| <code><a href="#@cdktf/provider-snowflake.pipe.PipeConfig.property.comment">comment</a></code> | <code>str</code> | Specifies a comment for the pipe. |
| <code><a href="#@cdktf/provider-snowflake.pipe.PipeConfig.property.errorIntegration">error_integration</a></code> | <code>str</code> | Specifies the name of the notification integration used for error notifications. |
| <code><a href="#@cdktf/provider-snowflake.pipe.PipeConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/pipe#id Pipe#id}. |
| <code><a href="#@cdktf/provider-snowflake.pipe.PipeConfig.property.integration">integration</a></code> | <code>str</code> | Specifies an integration for the pipe. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.pipe.PipeConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.pipe.PipeConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.pipe.PipeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.pipe.PipeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.pipe.PipeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.pipe.PipeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.pipe.PipeConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `copy_statement`<sup>Required</sup> <a name="copy_statement" id="@cdktf/provider-snowflake.pipe.PipeConfig.property.copyStatement"></a>

```python
copy_statement: str
```

- *Type:* str

Specifies the copy statement for the pipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/pipe#copy_statement Pipe#copy_statement}

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.pipe.PipeConfig.property.database"></a>

```python
database: str
```

- *Type:* str

The database in which to create the pipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/pipe#database Pipe#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.pipe.PipeConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Specifies the identifier for the pipe;

must be unique for the database and schema in which the pipe is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/pipe#name Pipe#name}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.pipe.PipeConfig.property.schema"></a>

```python
schema: str
```

- *Type:* str

The schema in which to create the pipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/pipe#schema Pipe#schema}

---

##### `auto_ingest`<sup>Optional</sup> <a name="auto_ingest" id="@cdktf/provider-snowflake.pipe.PipeConfig.property.autoIngest"></a>

```python
auto_ingest: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies a auto_ingest param for the pipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/pipe#auto_ingest Pipe#auto_ingest}

---

##### `aws_sns_topic_arn`<sup>Optional</sup> <a name="aws_sns_topic_arn" id="@cdktf/provider-snowflake.pipe.PipeConfig.property.awsSnsTopicArn"></a>

```python
aws_sns_topic_arn: str
```

- *Type:* str

Specifies the Amazon Resource Name (ARN) for the SNS topic for your S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/pipe#aws_sns_topic_arn Pipe#aws_sns_topic_arn}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.pipe.PipeConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

Specifies a comment for the pipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/pipe#comment Pipe#comment}

---

##### `error_integration`<sup>Optional</sup> <a name="error_integration" id="@cdktf/provider-snowflake.pipe.PipeConfig.property.errorIntegration"></a>

```python
error_integration: str
```

- *Type:* str

Specifies the name of the notification integration used for error notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/pipe#error_integration Pipe#error_integration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.pipe.PipeConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/pipe#id Pipe#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `integration`<sup>Optional</sup> <a name="integration" id="@cdktf/provider-snowflake.pipe.PipeConfig.property.integration"></a>

```python
integration: str
```

- *Type:* str

Specifies an integration for the pipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/pipe#integration Pipe#integration}

---



