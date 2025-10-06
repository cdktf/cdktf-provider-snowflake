# `rowAccessPolicy` Submodule <a name="`rowAccessPolicy` Submodule" id="@cdktf/provider-snowflake.rowAccessPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RowAccessPolicy <a name="RowAccessPolicy" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/row_access_policy snowflake_row_access_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import row_access_policy

rowAccessPolicy.RowAccessPolicy(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  argument: IResolvable | typing.List[RowAccessPolicyArgument],
  body: str,
  database: str,
  name: str,
  schema: str,
  comment: str = None,
  id: str = None,
  timeouts: RowAccessPolicyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.Initializer.parameter.argument">argument</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgument">RowAccessPolicyArgument</a>]</code> | argument block. |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.Initializer.parameter.body">body</a></code> | <code>str</code> | Specifies the SQL expression. |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.Initializer.parameter.database">database</a></code> | <code>str</code> | The database in which to create the row access policy. |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.Initializer.parameter.name">name</a></code> | <code>str</code> | Specifies the identifier for the row access policy; |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.Initializer.parameter.schema">schema</a></code> | <code>str</code> | The schema in which to create the row access policy. |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.Initializer.parameter.comment">comment</a></code> | <code>str</code> | Specifies a comment for the row access policy. |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/row_access_policy#id RowAccessPolicy#id}. |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyTimeouts">RowAccessPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `argument`<sup>Required</sup> <a name="argument" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.Initializer.parameter.argument"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgument">RowAccessPolicyArgument</a>]

argument block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/row_access_policy#argument RowAccessPolicy#argument}

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.Initializer.parameter.body"></a>

- *Type:* str

Specifies the SQL expression.

The expression can be any boolean-valued SQL expression. To mitigate permadiff on this field, the provider replaces blank characters with a space. This can lead to false positives in cases where a change in case or run of whitespace is semantically significant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/row_access_policy#body RowAccessPolicy#body}

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.Initializer.parameter.database"></a>

- *Type:* str

The database in which to create the row access policy.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/row_access_policy#database RowAccessPolicy#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.Initializer.parameter.name"></a>

- *Type:* str

Specifies the identifier for the row access policy;

must be unique for the database and schema in which the row access policy is created. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/row_access_policy#name RowAccessPolicy#name}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.Initializer.parameter.schema"></a>

- *Type:* str

The schema in which to create the row access policy.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/row_access_policy#schema RowAccessPolicy#schema}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.Initializer.parameter.comment"></a>

- *Type:* str

Specifies a comment for the row access policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/row_access_policy#comment RowAccessPolicy#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/row_access_policy#id RowAccessPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyTimeouts">RowAccessPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/row_access_policy#timeouts RowAccessPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.putArgument">put_argument</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_argument` <a name="put_argument" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.putArgument"></a>

```python
def put_argument(
  value: IResolvable | typing.List[RowAccessPolicyArgument]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.putArgument.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgument">RowAccessPolicyArgument</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/row_access_policy#create RowAccessPolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/row_access_policy#delete RowAccessPolicy#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/row_access_policy#read RowAccessPolicy#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/row_access_policy#update RowAccessPolicy#update}.

---

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a RowAccessPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_snowflake import row_access_policy

rowAccessPolicy.RowAccessPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_snowflake import row_access_policy

rowAccessPolicy.RowAccessPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_snowflake import row_access_policy

rowAccessPolicy.RowAccessPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_snowflake import row_access_policy

rowAccessPolicy.RowAccessPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a RowAccessPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the RowAccessPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing RowAccessPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/row_access_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the RowAccessPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.property.argument">argument</a></code> | <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgumentList">RowAccessPolicyArgumentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.property.describeOutput">describe_output</a></code> | <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputList">RowAccessPolicyDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.property.fullyQualifiedName">fully_qualified_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.property.showOutput">show_output</a></code> | <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputList">RowAccessPolicyShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyTimeoutsOutputReference">RowAccessPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.property.argumentInput">argument_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgument">RowAccessPolicyArgument</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.property.bodyInput">body_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.property.schemaInput">schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyTimeouts">RowAccessPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.property.body">body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.property.schema">schema</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `argument`<sup>Required</sup> <a name="argument" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.property.argument"></a>

```python
argument: RowAccessPolicyArgumentList
```

- *Type:* <a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgumentList">RowAccessPolicyArgumentList</a>

---

##### `describe_output`<sup>Required</sup> <a name="describe_output" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.property.describeOutput"></a>

```python
describe_output: RowAccessPolicyDescribeOutputList
```

- *Type:* <a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputList">RowAccessPolicyDescribeOutputList</a>

---

##### `fully_qualified_name`<sup>Required</sup> <a name="fully_qualified_name" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.property.fullyQualifiedName"></a>

```python
fully_qualified_name: str
```

- *Type:* str

---

##### `show_output`<sup>Required</sup> <a name="show_output" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.property.showOutput"></a>

```python
show_output: RowAccessPolicyShowOutputList
```

- *Type:* <a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputList">RowAccessPolicyShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.property.timeouts"></a>

```python
timeouts: RowAccessPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyTimeoutsOutputReference">RowAccessPolicyTimeoutsOutputReference</a>

---

##### `argument_input`<sup>Optional</sup> <a name="argument_input" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.property.argumentInput"></a>

```python
argument_input: IResolvable | typing.List[RowAccessPolicyArgument]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgument">RowAccessPolicyArgument</a>]

---

##### `body_input`<sup>Optional</sup> <a name="body_input" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.property.bodyInput"></a>

```python
body_input: str
```

- *Type:* str

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.property.schemaInput"></a>

```python
schema_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | RowAccessPolicyTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyTimeouts">RowAccessPolicyTimeouts</a>

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.property.body"></a>

```python
body: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.property.schema"></a>

```python
schema: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RowAccessPolicyArgument <a name="RowAccessPolicyArgument" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgument"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgument.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import row_access_policy

rowAccessPolicy.RowAccessPolicyArgument(
  name: str,
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgument.property.name">name</a></code> | <code>str</code> | The argument name. |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgument.property.type">type</a></code> | <code>str</code> | The argument type. VECTOR data types are not yet supported. For more information about data types, check [Snowflake docs](https://docs.snowflake.com/en/sql-reference/intro-summary-data-types). |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgument.property.name"></a>

```python
name: str
```

- *Type:* str

The argument name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/row_access_policy#name RowAccessPolicy#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgument.property.type"></a>

```python
type: str
```

- *Type:* str

The argument type. VECTOR data types are not yet supported. For more information about data types, check [Snowflake docs](https://docs.snowflake.com/en/sql-reference/intro-summary-data-types).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/row_access_policy#type RowAccessPolicy#type}

---

### RowAccessPolicyConfig <a name="RowAccessPolicyConfig" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import row_access_policy

rowAccessPolicy.RowAccessPolicyConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  argument: IResolvable | typing.List[RowAccessPolicyArgument],
  body: str,
  database: str,
  name: str,
  schema: str,
  comment: str = None,
  id: str = None,
  timeouts: RowAccessPolicyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyConfig.property.argument">argument</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgument">RowAccessPolicyArgument</a>]</code> | argument block. |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyConfig.property.body">body</a></code> | <code>str</code> | Specifies the SQL expression. |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyConfig.property.database">database</a></code> | <code>str</code> | The database in which to create the row access policy. |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyConfig.property.name">name</a></code> | <code>str</code> | Specifies the identifier for the row access policy; |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyConfig.property.schema">schema</a></code> | <code>str</code> | The schema in which to create the row access policy. |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyConfig.property.comment">comment</a></code> | <code>str</code> | Specifies a comment for the row access policy. |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/row_access_policy#id RowAccessPolicy#id}. |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyTimeouts">RowAccessPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `argument`<sup>Required</sup> <a name="argument" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyConfig.property.argument"></a>

```python
argument: IResolvable | typing.List[RowAccessPolicyArgument]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgument">RowAccessPolicyArgument</a>]

argument block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/row_access_policy#argument RowAccessPolicy#argument}

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyConfig.property.body"></a>

```python
body: str
```

- *Type:* str

Specifies the SQL expression.

The expression can be any boolean-valued SQL expression. To mitigate permadiff on this field, the provider replaces blank characters with a space. This can lead to false positives in cases where a change in case or run of whitespace is semantically significant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/row_access_policy#body RowAccessPolicy#body}

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyConfig.property.database"></a>

```python
database: str
```

- *Type:* str

The database in which to create the row access policy.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/row_access_policy#database RowAccessPolicy#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Specifies the identifier for the row access policy;

must be unique for the database and schema in which the row access policy is created. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/row_access_policy#name RowAccessPolicy#name}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyConfig.property.schema"></a>

```python
schema: str
```

- *Type:* str

The schema in which to create the row access policy.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/row_access_policy#schema RowAccessPolicy#schema}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

Specifies a comment for the row access policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/row_access_policy#comment RowAccessPolicy#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/row_access_policy#id RowAccessPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyConfig.property.timeouts"></a>

```python
timeouts: RowAccessPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyTimeouts">RowAccessPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/row_access_policy#timeouts RowAccessPolicy#timeouts}

---

### RowAccessPolicyDescribeOutput <a name="RowAccessPolicyDescribeOutput" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutput.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import row_access_policy

rowAccessPolicy.RowAccessPolicyDescribeOutput()
```


### RowAccessPolicyDescribeOutputSignature <a name="RowAccessPolicyDescribeOutputSignature" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputSignature"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputSignature.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import row_access_policy

rowAccessPolicy.RowAccessPolicyDescribeOutputSignature()
```


### RowAccessPolicyShowOutput <a name="RowAccessPolicyShowOutput" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutput.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import row_access_policy

rowAccessPolicy.RowAccessPolicyShowOutput()
```


### RowAccessPolicyTimeouts <a name="RowAccessPolicyTimeouts" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import row_access_policy

rowAccessPolicy.RowAccessPolicyTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/row_access_policy#create RowAccessPolicy#create}. |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/row_access_policy#delete RowAccessPolicy#delete}. |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/row_access_policy#read RowAccessPolicy#read}. |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/row_access_policy#update RowAccessPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/row_access_policy#create RowAccessPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/row_access_policy#delete RowAccessPolicy#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/row_access_policy#read RowAccessPolicy#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/row_access_policy#update RowAccessPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### RowAccessPolicyArgumentList <a name="RowAccessPolicyArgumentList" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgumentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgumentList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import row_access_policy

rowAccessPolicy.RowAccessPolicyArgumentList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgumentList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgumentList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgumentList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgumentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgumentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgumentList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgumentList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgumentList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgumentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgumentList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgumentList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgumentList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgumentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgumentList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgumentList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgumentList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgumentList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgumentList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RowAccessPolicyArgumentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgumentList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgumentList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgumentList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgumentList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgument">RowAccessPolicyArgument</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgumentList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgumentList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgumentList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[RowAccessPolicyArgument]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgument">RowAccessPolicyArgument</a>]

---


### RowAccessPolicyArgumentOutputReference <a name="RowAccessPolicyArgumentOutputReference" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgumentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgumentOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import row_access_policy

rowAccessPolicy.RowAccessPolicyArgumentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgumentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgumentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgumentOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgumentOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgumentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgumentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgumentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgumentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgumentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgumentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgumentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgumentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgumentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgumentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgumentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgumentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgumentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgumentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgumentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgumentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgumentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgumentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgumentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgumentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgumentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgumentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgumentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgumentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgumentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgumentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgumentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgumentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgumentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgumentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgumentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgumentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgumentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgumentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgumentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgumentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgumentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgumentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgumentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgumentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgumentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgumentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgumentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgumentOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgumentOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgumentOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgumentOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgumentOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgument">RowAccessPolicyArgument</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgumentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgumentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgumentOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgumentOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgumentOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgumentOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgumentOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RowAccessPolicyArgument
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyArgument">RowAccessPolicyArgument</a>

---


### RowAccessPolicyDescribeOutputList <a name="RowAccessPolicyDescribeOutputList" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import row_access_policy

rowAccessPolicy.RowAccessPolicyDescribeOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RowAccessPolicyDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### RowAccessPolicyDescribeOutputOutputReference <a name="RowAccessPolicyDescribeOutputOutputReference" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import row_access_policy

rowAccessPolicy.RowAccessPolicyDescribeOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputOutputReference.property.body">body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputOutputReference.property.returnType">return_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputOutputReference.property.signature">signature</a></code> | <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputSignatureList">RowAccessPolicyDescribeOutputSignatureList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutput">RowAccessPolicyDescribeOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputOutputReference.property.body"></a>

```python
body: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `return_type`<sup>Required</sup> <a name="return_type" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputOutputReference.property.returnType"></a>

```python
return_type: str
```

- *Type:* str

---

##### `signature`<sup>Required</sup> <a name="signature" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputOutputReference.property.signature"></a>

```python
signature: RowAccessPolicyDescribeOutputSignatureList
```

- *Type:* <a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputSignatureList">RowAccessPolicyDescribeOutputSignatureList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputOutputReference.property.internalValue"></a>

```python
internal_value: RowAccessPolicyDescribeOutput
```

- *Type:* <a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutput">RowAccessPolicyDescribeOutput</a>

---


### RowAccessPolicyDescribeOutputSignatureList <a name="RowAccessPolicyDescribeOutputSignatureList" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputSignatureList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputSignatureList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import row_access_policy

rowAccessPolicy.RowAccessPolicyDescribeOutputSignatureList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputSignatureList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputSignatureList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputSignatureList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputSignatureList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputSignatureList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputSignatureList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputSignatureList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputSignatureList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputSignatureList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputSignatureList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputSignatureList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputSignatureList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputSignatureList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputSignatureList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputSignatureList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputSignatureList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputSignatureList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputSignatureList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RowAccessPolicyDescribeOutputSignatureOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputSignatureList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputSignatureList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputSignatureList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputSignatureList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputSignatureList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### RowAccessPolicyDescribeOutputSignatureOutputReference <a name="RowAccessPolicyDescribeOutputSignatureOutputReference" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputSignatureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputSignatureOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import row_access_policy

rowAccessPolicy.RowAccessPolicyDescribeOutputSignatureOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputSignatureOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputSignatureOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputSignatureOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputSignatureOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputSignatureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputSignatureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputSignatureOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputSignatureOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputSignatureOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputSignatureOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputSignatureOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputSignatureOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputSignatureOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputSignatureOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputSignatureOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputSignatureOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputSignatureOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputSignatureOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputSignatureOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputSignatureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputSignatureOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputSignatureOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputSignatureOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputSignatureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputSignatureOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputSignatureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputSignatureOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputSignatureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputSignatureOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputSignatureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputSignatureOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputSignatureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputSignatureOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputSignatureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputSignatureOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputSignatureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputSignatureOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputSignatureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputSignatureOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputSignatureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputSignatureOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputSignatureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputSignatureOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputSignatureOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputSignatureOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputSignatureOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputSignatureOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputSignatureOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputSignatureOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputSignatureOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputSignature">RowAccessPolicyDescribeOutputSignature</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputSignatureOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputSignatureOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputSignatureOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputSignatureOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputSignatureOutputReference.property.internalValue"></a>

```python
internal_value: RowAccessPolicyDescribeOutputSignature
```

- *Type:* <a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyDescribeOutputSignature">RowAccessPolicyDescribeOutputSignature</a>

---


### RowAccessPolicyShowOutputList <a name="RowAccessPolicyShowOutputList" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import row_access_policy

rowAccessPolicy.RowAccessPolicyShowOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RowAccessPolicyShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### RowAccessPolicyShowOutputOutputReference <a name="RowAccessPolicyShowOutputOutputReference" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import row_access_policy

rowAccessPolicy.RowAccessPolicyShowOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputOutputReference.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputOutputReference.property.options">options</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputOutputReference.property.ownerRoleType">owner_role_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutput">RowAccessPolicyShowOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputOutputReference.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputOutputReference.property.options"></a>

```python
options: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `owner_role_type`<sup>Required</sup> <a name="owner_role_type" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputOutputReference.property.ownerRoleType"></a>

```python
owner_role_type: str
```

- *Type:* str

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutputOutputReference.property.internalValue"></a>

```python
internal_value: RowAccessPolicyShowOutput
```

- *Type:* <a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyShowOutput">RowAccessPolicyShowOutput</a>

---


### RowAccessPolicyTimeoutsOutputReference <a name="RowAccessPolicyTimeoutsOutputReference" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import row_access_policy

rowAccessPolicy.RowAccessPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyTimeouts">RowAccessPolicyTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RowAccessPolicyTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.rowAccessPolicy.RowAccessPolicyTimeouts">RowAccessPolicyTimeouts</a>

---



