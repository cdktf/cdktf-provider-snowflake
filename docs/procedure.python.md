# `procedure` Submodule <a name="`procedure` Submodule" id="@cdktf/provider-snowflake.procedure"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Procedure <a name="Procedure" id="@cdktf/provider-snowflake.procedure.Procedure"></a>

Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/procedure snowflake_procedure}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedure.Procedure.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure

procedure.Procedure(
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
  return_type: str,
  schema: str,
  statement: str,
  arguments: typing.Union[IResolvable, typing.List[ProcedureArguments]] = None,
  comment: str = None,
  execute_as: str = None,
  handler: str = None,
  id: str = None,
  imports: typing.List[str] = None,
  language: str = None,
  null_input_behavior: str = None,
  packages: typing.List[str] = None,
  return_behavior: str = None,
  runtime_version: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.Initializer.parameter.database">database</a></code> | <code>str</code> | The database in which to create the procedure. Don't use the \| character. |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.Initializer.parameter.name">name</a></code> | <code>str</code> | Specifies the identifier for the procedure; |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.Initializer.parameter.returnType">return_type</a></code> | <code>str</code> | The return type of the procedure. |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.Initializer.parameter.schema">schema</a></code> | <code>str</code> | The schema in which to create the procedure. Don't use the \| character. |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.Initializer.parameter.statement">statement</a></code> | <code>str</code> | Specifies the code used to create the procedure. |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.Initializer.parameter.arguments">arguments</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.procedure.ProcedureArguments">ProcedureArguments</a>]]</code> | arguments block. |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.Initializer.parameter.comment">comment</a></code> | <code>str</code> | Specifies a comment for the procedure. |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.Initializer.parameter.executeAs">execute_as</a></code> | <code>str</code> | Sets execute context - see caller's rights and owner's rights. |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.Initializer.parameter.handler">handler</a></code> | <code>str</code> | The handler method for Java / Python procedures. |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure#id Procedure#id}. |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.Initializer.parameter.imports">imports</a></code> | <code>typing.List[str]</code> | Imports for Java / Python procedures. |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.Initializer.parameter.language">language</a></code> | <code>str</code> | Specifies the language of the stored procedure code. |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.Initializer.parameter.nullInputBehavior">null_input_behavior</a></code> | <code>str</code> | Specifies the behavior of the procedure when called with null inputs. |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.Initializer.parameter.packages">packages</a></code> | <code>typing.List[str]</code> | List of package imports to use for Java / Python procedures. |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.Initializer.parameter.returnBehavior">return_behavior</a></code> | <code>str</code> | Specifies the behavior of the function when returning results. |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.Initializer.parameter.runtimeVersion">runtime_version</a></code> | <code>str</code> | Required for Python procedures. Specifies Python runtime version. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.procedure.Procedure.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.procedure.Procedure.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.procedure.Procedure.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.procedure.Procedure.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.procedure.Procedure.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.procedure.Procedure.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.procedure.Procedure.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.procedure.Procedure.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.procedure.Procedure.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.procedure.Procedure.Initializer.parameter.database"></a>

- *Type:* str

The database in which to create the procedure. Don't use the | character.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure#database Procedure#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.procedure.Procedure.Initializer.parameter.name"></a>

- *Type:* str

Specifies the identifier for the procedure;

does not have to be unique for the schema in which the procedure is created. Don't use the | character.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure#name Procedure#name}

---

##### `return_type`<sup>Required</sup> <a name="return_type" id="@cdktf/provider-snowflake.procedure.Procedure.Initializer.parameter.returnType"></a>

- *Type:* str

The return type of the procedure.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure#return_type Procedure#return_type}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.procedure.Procedure.Initializer.parameter.schema"></a>

- *Type:* str

The schema in which to create the procedure. Don't use the | character.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure#schema Procedure#schema}

---

##### `statement`<sup>Required</sup> <a name="statement" id="@cdktf/provider-snowflake.procedure.Procedure.Initializer.parameter.statement"></a>

- *Type:* str

Specifies the code used to create the procedure.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure#statement Procedure#statement}

---

##### `arguments`<sup>Optional</sup> <a name="arguments" id="@cdktf/provider-snowflake.procedure.Procedure.Initializer.parameter.arguments"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.procedure.ProcedureArguments">ProcedureArguments</a>]]

arguments block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure#arguments Procedure#arguments}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.procedure.Procedure.Initializer.parameter.comment"></a>

- *Type:* str

Specifies a comment for the procedure.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure#comment Procedure#comment}

---

##### `execute_as`<sup>Optional</sup> <a name="execute_as" id="@cdktf/provider-snowflake.procedure.Procedure.Initializer.parameter.executeAs"></a>

- *Type:* str

Sets execute context - see caller's rights and owner's rights.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure#execute_as Procedure#execute_as}

---

##### `handler`<sup>Optional</sup> <a name="handler" id="@cdktf/provider-snowflake.procedure.Procedure.Initializer.parameter.handler"></a>

- *Type:* str

The handler method for Java / Python procedures.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure#handler Procedure#handler}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.procedure.Procedure.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure#id Procedure#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imports`<sup>Optional</sup> <a name="imports" id="@cdktf/provider-snowflake.procedure.Procedure.Initializer.parameter.imports"></a>

- *Type:* typing.List[str]

Imports for Java / Python procedures.

For Java this a list of jar files, for Python this is a list of Python files.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure#imports Procedure#imports}

---

##### `language`<sup>Optional</sup> <a name="language" id="@cdktf/provider-snowflake.procedure.Procedure.Initializer.parameter.language"></a>

- *Type:* str

Specifies the language of the stored procedure code.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure#language Procedure#language}

---

##### `null_input_behavior`<sup>Optional</sup> <a name="null_input_behavior" id="@cdktf/provider-snowflake.procedure.Procedure.Initializer.parameter.nullInputBehavior"></a>

- *Type:* str

Specifies the behavior of the procedure when called with null inputs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure#null_input_behavior Procedure#null_input_behavior}

---

##### `packages`<sup>Optional</sup> <a name="packages" id="@cdktf/provider-snowflake.procedure.Procedure.Initializer.parameter.packages"></a>

- *Type:* typing.List[str]

List of package imports to use for Java / Python procedures.

For Java, package imports should be of the form: package_name:version_number, where package_name is snowflake_domain:package. For Python use it should be: ('numpy','pandas','xgboost==1.5.0').

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure#packages Procedure#packages}

---

##### `return_behavior`<sup>Optional</sup> <a name="return_behavior" id="@cdktf/provider-snowflake.procedure.Procedure.Initializer.parameter.returnBehavior"></a>

- *Type:* str

Specifies the behavior of the function when returning results.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure#return_behavior Procedure#return_behavior}

---

##### `runtime_version`<sup>Optional</sup> <a name="runtime_version" id="@cdktf/provider-snowflake.procedure.Procedure.Initializer.parameter.runtimeVersion"></a>

- *Type:* str

Required for Python procedures. Specifies Python runtime version.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure#runtime_version Procedure#runtime_version}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.putArguments">put_arguments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.resetArguments">reset_arguments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.resetExecuteAs">reset_execute_as</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.resetHandler">reset_handler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.resetImports">reset_imports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.resetLanguage">reset_language</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.resetNullInputBehavior">reset_null_input_behavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.resetPackages">reset_packages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.resetReturnBehavior">reset_return_behavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.resetRuntimeVersion">reset_runtime_version</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.procedure.Procedure.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-snowflake.procedure.Procedure.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.procedure.Procedure.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.procedure.Procedure.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-snowflake.procedure.Procedure.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-snowflake.procedure.Procedure.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-snowflake.procedure.Procedure.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-snowflake.procedure.Procedure.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-snowflake.procedure.Procedure.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.procedure.Procedure.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedure.Procedure.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.procedure.Procedure.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedure.Procedure.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.procedure.Procedure.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedure.Procedure.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.procedure.Procedure.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedure.Procedure.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.procedure.Procedure.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedure.Procedure.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.procedure.Procedure.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedure.Procedure.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.procedure.Procedure.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedure.Procedure.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.procedure.Procedure.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedure.Procedure.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.procedure.Procedure.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedure.Procedure.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.procedure.Procedure.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedure.Procedure.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_arguments` <a name="put_arguments" id="@cdktf/provider-snowflake.procedure.Procedure.putArguments"></a>

```python
def put_arguments(
  value: typing.Union[IResolvable, typing.List[ProcedureArguments]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.procedure.Procedure.putArguments.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.procedure.ProcedureArguments">ProcedureArguments</a>]]

---

##### `reset_arguments` <a name="reset_arguments" id="@cdktf/provider-snowflake.procedure.Procedure.resetArguments"></a>

```python
def reset_arguments() -> None
```

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-snowflake.procedure.Procedure.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_execute_as` <a name="reset_execute_as" id="@cdktf/provider-snowflake.procedure.Procedure.resetExecuteAs"></a>

```python
def reset_execute_as() -> None
```

##### `reset_handler` <a name="reset_handler" id="@cdktf/provider-snowflake.procedure.Procedure.resetHandler"></a>

```python
def reset_handler() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-snowflake.procedure.Procedure.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_imports` <a name="reset_imports" id="@cdktf/provider-snowflake.procedure.Procedure.resetImports"></a>

```python
def reset_imports() -> None
```

##### `reset_language` <a name="reset_language" id="@cdktf/provider-snowflake.procedure.Procedure.resetLanguage"></a>

```python
def reset_language() -> None
```

##### `reset_null_input_behavior` <a name="reset_null_input_behavior" id="@cdktf/provider-snowflake.procedure.Procedure.resetNullInputBehavior"></a>

```python
def reset_null_input_behavior() -> None
```

##### `reset_packages` <a name="reset_packages" id="@cdktf/provider-snowflake.procedure.Procedure.resetPackages"></a>

```python
def reset_packages() -> None
```

##### `reset_return_behavior` <a name="reset_return_behavior" id="@cdktf/provider-snowflake.procedure.Procedure.resetReturnBehavior"></a>

```python
def reset_return_behavior() -> None
```

##### `reset_runtime_version` <a name="reset_runtime_version" id="@cdktf/provider-snowflake.procedure.Procedure.resetRuntimeVersion"></a>

```python
def reset_runtime_version() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-snowflake.procedure.Procedure.isConstruct"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure

procedure.Procedure.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.procedure.Procedure.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-snowflake.procedure.Procedure.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure

procedure.Procedure.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.procedure.Procedure.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-snowflake.procedure.Procedure.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure

procedure.Procedure.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.procedure.Procedure.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.property.arguments">arguments</a></code> | <code><a href="#@cdktf/provider-snowflake.procedure.ProcedureArgumentsList">ProcedureArgumentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.property.argumentsInput">arguments_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.procedure.ProcedureArguments">ProcedureArguments</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.property.executeAsInput">execute_as_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.property.handlerInput">handler_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.property.importsInput">imports_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.property.languageInput">language_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.property.nullInputBehaviorInput">null_input_behavior_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.property.packagesInput">packages_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.property.returnBehaviorInput">return_behavior_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.property.returnTypeInput">return_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.property.runtimeVersionInput">runtime_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.property.schemaInput">schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.property.statementInput">statement_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.property.executeAs">execute_as</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.property.handler">handler</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.property.imports">imports</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.property.language">language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.property.nullInputBehavior">null_input_behavior</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.property.packages">packages</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.property.returnBehavior">return_behavior</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.property.returnType">return_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.property.runtimeVersion">runtime_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.property.schema">schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.property.statement">statement</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.procedure.Procedure.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-snowflake.procedure.Procedure.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedure.Procedure.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-snowflake.procedure.Procedure.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-snowflake.procedure.Procedure.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-snowflake.procedure.Procedure.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-snowflake.procedure.Procedure.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.procedure.Procedure.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.procedure.Procedure.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.procedure.Procedure.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.procedure.Procedure.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.procedure.Procedure.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.procedure.Procedure.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.procedure.Procedure.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arguments`<sup>Required</sup> <a name="arguments" id="@cdktf/provider-snowflake.procedure.Procedure.property.arguments"></a>

```python
arguments: ProcedureArgumentsList
```

- *Type:* <a href="#@cdktf/provider-snowflake.procedure.ProcedureArgumentsList">ProcedureArgumentsList</a>

---

##### `arguments_input`<sup>Optional</sup> <a name="arguments_input" id="@cdktf/provider-snowflake.procedure.Procedure.property.argumentsInput"></a>

```python
arguments_input: typing.Union[IResolvable, typing.List[ProcedureArguments]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.procedure.ProcedureArguments">ProcedureArguments</a>]]

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-snowflake.procedure.Procedure.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktf/provider-snowflake.procedure.Procedure.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `execute_as_input`<sup>Optional</sup> <a name="execute_as_input" id="@cdktf/provider-snowflake.procedure.Procedure.property.executeAsInput"></a>

```python
execute_as_input: str
```

- *Type:* str

---

##### `handler_input`<sup>Optional</sup> <a name="handler_input" id="@cdktf/provider-snowflake.procedure.Procedure.property.handlerInput"></a>

```python
handler_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-snowflake.procedure.Procedure.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `imports_input`<sup>Optional</sup> <a name="imports_input" id="@cdktf/provider-snowflake.procedure.Procedure.property.importsInput"></a>

```python
imports_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `language_input`<sup>Optional</sup> <a name="language_input" id="@cdktf/provider-snowflake.procedure.Procedure.property.languageInput"></a>

```python
language_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-snowflake.procedure.Procedure.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `null_input_behavior_input`<sup>Optional</sup> <a name="null_input_behavior_input" id="@cdktf/provider-snowflake.procedure.Procedure.property.nullInputBehaviorInput"></a>

```python
null_input_behavior_input: str
```

- *Type:* str

---

##### `packages_input`<sup>Optional</sup> <a name="packages_input" id="@cdktf/provider-snowflake.procedure.Procedure.property.packagesInput"></a>

```python
packages_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `return_behavior_input`<sup>Optional</sup> <a name="return_behavior_input" id="@cdktf/provider-snowflake.procedure.Procedure.property.returnBehaviorInput"></a>

```python
return_behavior_input: str
```

- *Type:* str

---

##### `return_type_input`<sup>Optional</sup> <a name="return_type_input" id="@cdktf/provider-snowflake.procedure.Procedure.property.returnTypeInput"></a>

```python
return_type_input: str
```

- *Type:* str

---

##### `runtime_version_input`<sup>Optional</sup> <a name="runtime_version_input" id="@cdktf/provider-snowflake.procedure.Procedure.property.runtimeVersionInput"></a>

```python
runtime_version_input: str
```

- *Type:* str

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktf/provider-snowflake.procedure.Procedure.property.schemaInput"></a>

```python
schema_input: str
```

- *Type:* str

---

##### `statement_input`<sup>Optional</sup> <a name="statement_input" id="@cdktf/provider-snowflake.procedure.Procedure.property.statementInput"></a>

```python
statement_input: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.procedure.Procedure.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.procedure.Procedure.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `execute_as`<sup>Required</sup> <a name="execute_as" id="@cdktf/provider-snowflake.procedure.Procedure.property.executeAs"></a>

```python
execute_as: str
```

- *Type:* str

---

##### `handler`<sup>Required</sup> <a name="handler" id="@cdktf/provider-snowflake.procedure.Procedure.property.handler"></a>

```python
handler: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.procedure.Procedure.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `imports`<sup>Required</sup> <a name="imports" id="@cdktf/provider-snowflake.procedure.Procedure.property.imports"></a>

```python
imports: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `language`<sup>Required</sup> <a name="language" id="@cdktf/provider-snowflake.procedure.Procedure.property.language"></a>

```python
language: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.procedure.Procedure.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `null_input_behavior`<sup>Required</sup> <a name="null_input_behavior" id="@cdktf/provider-snowflake.procedure.Procedure.property.nullInputBehavior"></a>

```python
null_input_behavior: str
```

- *Type:* str

---

##### `packages`<sup>Required</sup> <a name="packages" id="@cdktf/provider-snowflake.procedure.Procedure.property.packages"></a>

```python
packages: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `return_behavior`<sup>Required</sup> <a name="return_behavior" id="@cdktf/provider-snowflake.procedure.Procedure.property.returnBehavior"></a>

```python
return_behavior: str
```

- *Type:* str

---

##### `return_type`<sup>Required</sup> <a name="return_type" id="@cdktf/provider-snowflake.procedure.Procedure.property.returnType"></a>

```python
return_type: str
```

- *Type:* str

---

##### `runtime_version`<sup>Required</sup> <a name="runtime_version" id="@cdktf/provider-snowflake.procedure.Procedure.property.runtimeVersion"></a>

```python
runtime_version: str
```

- *Type:* str

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.procedure.Procedure.property.schema"></a>

```python
schema: str
```

- *Type:* str

---

##### `statement`<sup>Required</sup> <a name="statement" id="@cdktf/provider-snowflake.procedure.Procedure.property.statement"></a>

```python
statement: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedure.Procedure.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.procedure.Procedure.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ProcedureArguments <a name="ProcedureArguments" id="@cdktf/provider-snowflake.procedure.ProcedureArguments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.procedure.ProcedureArguments.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure

procedure.ProcedureArguments(
  name: str,
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedure.ProcedureArguments.property.name">name</a></code> | <code>str</code> | The argument name. |
| <code><a href="#@cdktf/provider-snowflake.procedure.ProcedureArguments.property.type">type</a></code> | <code>str</code> | The argument type. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.procedure.ProcedureArguments.property.name"></a>

```python
name: str
```

- *Type:* str

The argument name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure#name Procedure#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.procedure.ProcedureArguments.property.type"></a>

```python
type: str
```

- *Type:* str

The argument type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure#type Procedure#type}

---

### ProcedureConfig <a name="ProcedureConfig" id="@cdktf/provider-snowflake.procedure.ProcedureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.procedure.ProcedureConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure

procedure.ProcedureConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  database: str,
  name: str,
  return_type: str,
  schema: str,
  statement: str,
  arguments: typing.Union[IResolvable, typing.List[ProcedureArguments]] = None,
  comment: str = None,
  execute_as: str = None,
  handler: str = None,
  id: str = None,
  imports: typing.List[str] = None,
  language: str = None,
  null_input_behavior: str = None,
  packages: typing.List[str] = None,
  return_behavior: str = None,
  runtime_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedure.ProcedureConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.ProcedureConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.ProcedureConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.ProcedureConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.ProcedureConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.ProcedureConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.ProcedureConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.ProcedureConfig.property.database">database</a></code> | <code>str</code> | The database in which to create the procedure. Don't use the \| character. |
| <code><a href="#@cdktf/provider-snowflake.procedure.ProcedureConfig.property.name">name</a></code> | <code>str</code> | Specifies the identifier for the procedure; |
| <code><a href="#@cdktf/provider-snowflake.procedure.ProcedureConfig.property.returnType">return_type</a></code> | <code>str</code> | The return type of the procedure. |
| <code><a href="#@cdktf/provider-snowflake.procedure.ProcedureConfig.property.schema">schema</a></code> | <code>str</code> | The schema in which to create the procedure. Don't use the \| character. |
| <code><a href="#@cdktf/provider-snowflake.procedure.ProcedureConfig.property.statement">statement</a></code> | <code>str</code> | Specifies the code used to create the procedure. |
| <code><a href="#@cdktf/provider-snowflake.procedure.ProcedureConfig.property.arguments">arguments</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.procedure.ProcedureArguments">ProcedureArguments</a>]]</code> | arguments block. |
| <code><a href="#@cdktf/provider-snowflake.procedure.ProcedureConfig.property.comment">comment</a></code> | <code>str</code> | Specifies a comment for the procedure. |
| <code><a href="#@cdktf/provider-snowflake.procedure.ProcedureConfig.property.executeAs">execute_as</a></code> | <code>str</code> | Sets execute context - see caller's rights and owner's rights. |
| <code><a href="#@cdktf/provider-snowflake.procedure.ProcedureConfig.property.handler">handler</a></code> | <code>str</code> | The handler method for Java / Python procedures. |
| <code><a href="#@cdktf/provider-snowflake.procedure.ProcedureConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure#id Procedure#id}. |
| <code><a href="#@cdktf/provider-snowflake.procedure.ProcedureConfig.property.imports">imports</a></code> | <code>typing.List[str]</code> | Imports for Java / Python procedures. |
| <code><a href="#@cdktf/provider-snowflake.procedure.ProcedureConfig.property.language">language</a></code> | <code>str</code> | Specifies the language of the stored procedure code. |
| <code><a href="#@cdktf/provider-snowflake.procedure.ProcedureConfig.property.nullInputBehavior">null_input_behavior</a></code> | <code>str</code> | Specifies the behavior of the procedure when called with null inputs. |
| <code><a href="#@cdktf/provider-snowflake.procedure.ProcedureConfig.property.packages">packages</a></code> | <code>typing.List[str]</code> | List of package imports to use for Java / Python procedures. |
| <code><a href="#@cdktf/provider-snowflake.procedure.ProcedureConfig.property.returnBehavior">return_behavior</a></code> | <code>str</code> | Specifies the behavior of the function when returning results. |
| <code><a href="#@cdktf/provider-snowflake.procedure.ProcedureConfig.property.runtimeVersion">runtime_version</a></code> | <code>str</code> | Required for Python procedures. Specifies Python runtime version. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.procedure.ProcedureConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.procedure.ProcedureConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.procedure.ProcedureConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.procedure.ProcedureConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.procedure.ProcedureConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.procedure.ProcedureConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.procedure.ProcedureConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.procedure.ProcedureConfig.property.database"></a>

```python
database: str
```

- *Type:* str

The database in which to create the procedure. Don't use the | character.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure#database Procedure#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.procedure.ProcedureConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Specifies the identifier for the procedure;

does not have to be unique for the schema in which the procedure is created. Don't use the | character.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure#name Procedure#name}

---

##### `return_type`<sup>Required</sup> <a name="return_type" id="@cdktf/provider-snowflake.procedure.ProcedureConfig.property.returnType"></a>

```python
return_type: str
```

- *Type:* str

The return type of the procedure.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure#return_type Procedure#return_type}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.procedure.ProcedureConfig.property.schema"></a>

```python
schema: str
```

- *Type:* str

The schema in which to create the procedure. Don't use the | character.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure#schema Procedure#schema}

---

##### `statement`<sup>Required</sup> <a name="statement" id="@cdktf/provider-snowflake.procedure.ProcedureConfig.property.statement"></a>

```python
statement: str
```

- *Type:* str

Specifies the code used to create the procedure.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure#statement Procedure#statement}

---

##### `arguments`<sup>Optional</sup> <a name="arguments" id="@cdktf/provider-snowflake.procedure.ProcedureConfig.property.arguments"></a>

```python
arguments: typing.Union[IResolvable, typing.List[ProcedureArguments]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.procedure.ProcedureArguments">ProcedureArguments</a>]]

arguments block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure#arguments Procedure#arguments}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.procedure.ProcedureConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

Specifies a comment for the procedure.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure#comment Procedure#comment}

---

##### `execute_as`<sup>Optional</sup> <a name="execute_as" id="@cdktf/provider-snowflake.procedure.ProcedureConfig.property.executeAs"></a>

```python
execute_as: str
```

- *Type:* str

Sets execute context - see caller's rights and owner's rights.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure#execute_as Procedure#execute_as}

---

##### `handler`<sup>Optional</sup> <a name="handler" id="@cdktf/provider-snowflake.procedure.ProcedureConfig.property.handler"></a>

```python
handler: str
```

- *Type:* str

The handler method for Java / Python procedures.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure#handler Procedure#handler}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.procedure.ProcedureConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure#id Procedure#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imports`<sup>Optional</sup> <a name="imports" id="@cdktf/provider-snowflake.procedure.ProcedureConfig.property.imports"></a>

```python
imports: typing.List[str]
```

- *Type:* typing.List[str]

Imports for Java / Python procedures.

For Java this a list of jar files, for Python this is a list of Python files.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure#imports Procedure#imports}

---

##### `language`<sup>Optional</sup> <a name="language" id="@cdktf/provider-snowflake.procedure.ProcedureConfig.property.language"></a>

```python
language: str
```

- *Type:* str

Specifies the language of the stored procedure code.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure#language Procedure#language}

---

##### `null_input_behavior`<sup>Optional</sup> <a name="null_input_behavior" id="@cdktf/provider-snowflake.procedure.ProcedureConfig.property.nullInputBehavior"></a>

```python
null_input_behavior: str
```

- *Type:* str

Specifies the behavior of the procedure when called with null inputs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure#null_input_behavior Procedure#null_input_behavior}

---

##### `packages`<sup>Optional</sup> <a name="packages" id="@cdktf/provider-snowflake.procedure.ProcedureConfig.property.packages"></a>

```python
packages: typing.List[str]
```

- *Type:* typing.List[str]

List of package imports to use for Java / Python procedures.

For Java, package imports should be of the form: package_name:version_number, where package_name is snowflake_domain:package. For Python use it should be: ('numpy','pandas','xgboost==1.5.0').

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure#packages Procedure#packages}

---

##### `return_behavior`<sup>Optional</sup> <a name="return_behavior" id="@cdktf/provider-snowflake.procedure.ProcedureConfig.property.returnBehavior"></a>

```python
return_behavior: str
```

- *Type:* str

Specifies the behavior of the function when returning results.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure#return_behavior Procedure#return_behavior}

---

##### `runtime_version`<sup>Optional</sup> <a name="runtime_version" id="@cdktf/provider-snowflake.procedure.ProcedureConfig.property.runtimeVersion"></a>

```python
runtime_version: str
```

- *Type:* str

Required for Python procedures. Specifies Python runtime version.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure#runtime_version Procedure#runtime_version}

---

## Classes <a name="Classes" id="Classes"></a>

### ProcedureArgumentsList <a name="ProcedureArgumentsList" id="@cdktf/provider-snowflake.procedure.ProcedureArgumentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedure.ProcedureArgumentsList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure

procedure.ProcedureArgumentsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedure.ProcedureArgumentsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.procedure.ProcedureArgumentsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.procedure.ProcedureArgumentsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.procedure.ProcedureArgumentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedure.ProcedureArgumentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.procedure.ProcedureArgumentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedure.ProcedureArgumentsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.ProcedureArgumentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.procedure.ProcedureArgumentsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.procedure.ProcedureArgumentsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.procedure.ProcedureArgumentsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.procedure.ProcedureArgumentsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.procedure.ProcedureArgumentsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.procedure.ProcedureArgumentsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.procedure.ProcedureArgumentsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ProcedureArgumentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.procedure.ProcedureArgumentsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedure.ProcedureArgumentsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.procedure.ProcedureArgumentsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.ProcedureArgumentsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.procedure.ProcedureArguments">ProcedureArguments</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.procedure.ProcedureArgumentsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedure.ProcedureArgumentsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.procedure.ProcedureArgumentsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ProcedureArguments]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.procedure.ProcedureArguments">ProcedureArguments</a>]]

---


### ProcedureArgumentsOutputReference <a name="ProcedureArgumentsOutputReference" id="@cdktf/provider-snowflake.procedure.ProcedureArgumentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedure.ProcedureArgumentsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure

procedure.ProcedureArgumentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedure.ProcedureArgumentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.procedure.ProcedureArgumentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.procedure.ProcedureArgumentsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.procedure.ProcedureArgumentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.procedure.ProcedureArgumentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedure.ProcedureArgumentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.procedure.ProcedureArgumentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.procedure.ProcedureArgumentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedure.ProcedureArgumentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.ProcedureArgumentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.ProcedureArgumentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.ProcedureArgumentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.ProcedureArgumentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.ProcedureArgumentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.ProcedureArgumentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.ProcedureArgumentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.ProcedureArgumentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.ProcedureArgumentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.ProcedureArgumentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.ProcedureArgumentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.procedure.ProcedureArgumentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.procedure.ProcedureArgumentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.procedure.ProcedureArgumentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedure.ProcedureArgumentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.procedure.ProcedureArgumentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedure.ProcedureArgumentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.procedure.ProcedureArgumentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedure.ProcedureArgumentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.procedure.ProcedureArgumentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedure.ProcedureArgumentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.procedure.ProcedureArgumentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedure.ProcedureArgumentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.procedure.ProcedureArgumentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedure.ProcedureArgumentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.procedure.ProcedureArgumentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedure.ProcedureArgumentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.procedure.ProcedureArgumentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedure.ProcedureArgumentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.procedure.ProcedureArgumentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedure.ProcedureArgumentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.procedure.ProcedureArgumentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.procedure.ProcedureArgumentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.procedure.ProcedureArgumentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.procedure.ProcedureArgumentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.procedure.ProcedureArgumentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedure.ProcedureArgumentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.procedure.ProcedureArgumentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.ProcedureArgumentsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.ProcedureArgumentsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.ProcedureArgumentsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.ProcedureArgumentsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedure.ProcedureArgumentsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-snowflake.procedure.ProcedureArguments">ProcedureArguments</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.procedure.ProcedureArgumentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedure.ProcedureArgumentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-snowflake.procedure.ProcedureArgumentsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-snowflake.procedure.ProcedureArgumentsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.procedure.ProcedureArgumentsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.procedure.ProcedureArgumentsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.procedure.ProcedureArgumentsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[ProcedureArguments, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-snowflake.procedure.ProcedureArguments">ProcedureArguments</a>, cdktf.IResolvable]

---



