# `snowflake_external_function`

Refer to the Terraform Registory for docs: [`snowflake_external_function`](https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/external_function).

# `externalFunction` Submodule <a name="`externalFunction` Submodule" id="@cdktf/provider-snowflake.externalFunction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ExternalFunction <a name="ExternalFunction" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/external_function snowflake_external_function}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import external_function

externalFunction.ExternalFunction(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  api_integration: str,
  database: str,
  name: str,
  return_behavior: str,
  return_type: str,
  schema: str,
  url_of_proxy_and_resource: str,
  arg: typing.Union[IResolvable, typing.List[ExternalFunctionArg]] = None,
  comment: str = None,
  compression: str = None,
  context_headers: typing.List[str] = None,
  header: typing.Union[IResolvable, typing.List[ExternalFunctionHeader]] = None,
  id: str = None,
  max_batch_rows: typing.Union[int, float] = None,
  null_input_behavior: str = None,
  request_translator: str = None,
  response_translator: str = None,
  return_null_allowed: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.apiIntegration">api_integration</a></code> | <code>str</code> | The name of the API integration object that should be used to authenticate the call to the proxy service. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.database">database</a></code> | <code>str</code> | The database in which to create the external function. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.name">name</a></code> | <code>str</code> | Specifies the identifier for the external function. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.returnBehavior">return_behavior</a></code> | <code>str</code> | Specifies the behavior of the function when returning results. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.returnType">return_type</a></code> | <code>str</code> | Specifies the data type returned by the external function. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.schema">schema</a></code> | <code>str</code> | The schema in which to create the external function. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.urlOfProxyAndResource">url_of_proxy_and_resource</a></code> | <code>str</code> | This is the invocation URL of the proxy service and resource through which Snowflake calls the remote service. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.arg">arg</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArg">ExternalFunctionArg</a>]]</code> | arg block. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.comment">comment</a></code> | <code>str</code> | A description of the external function. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.compression">compression</a></code> | <code>str</code> | If specified, the JSON payload is compressed when sent from Snowflake to the proxy service, and when sent back from the proxy service to Snowflake. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.contextHeaders">context_headers</a></code> | <code>typing.List[str]</code> | Binds Snowflake context function results to HTTP headers. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.header">header</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeader">ExternalFunctionHeader</a>]]</code> | header block. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/external_function#id ExternalFunction#id}. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.maxBatchRows">max_batch_rows</a></code> | <code>typing.Union[int, float]</code> | This specifies the maximum number of rows in each batch sent to the proxy service. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.nullInputBehavior">null_input_behavior</a></code> | <code>str</code> | Specifies the behavior of the external function when called with null inputs. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.requestTranslator">request_translator</a></code> | <code>str</code> | This specifies the name of the request translator function. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.responseTranslator">response_translator</a></code> | <code>str</code> | This specifies the name of the response translator function. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.returnNullAllowed">return_null_allowed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether the function can return NULL values or must return only NON-NULL values. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `api_integration`<sup>Required</sup> <a name="api_integration" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.apiIntegration"></a>

- *Type:* str

The name of the API integration object that should be used to authenticate the call to the proxy service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/external_function#api_integration ExternalFunction#api_integration}

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.database"></a>

- *Type:* str

The database in which to create the external function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/external_function#database ExternalFunction#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.name"></a>

- *Type:* str

Specifies the identifier for the external function.

The identifier can contain the schema name and database name, as well as the function name. The function's signature (name and argument data types) must be unique within the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/external_function#name ExternalFunction#name}

---

##### `return_behavior`<sup>Required</sup> <a name="return_behavior" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.returnBehavior"></a>

- *Type:* str

Specifies the behavior of the function when returning results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/external_function#return_behavior ExternalFunction#return_behavior}

---

##### `return_type`<sup>Required</sup> <a name="return_type" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.returnType"></a>

- *Type:* str

Specifies the data type returned by the external function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/external_function#return_type ExternalFunction#return_type}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.schema"></a>

- *Type:* str

The schema in which to create the external function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/external_function#schema ExternalFunction#schema}

---

##### `url_of_proxy_and_resource`<sup>Required</sup> <a name="url_of_proxy_and_resource" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.urlOfProxyAndResource"></a>

- *Type:* str

This is the invocation URL of the proxy service and resource through which Snowflake calls the remote service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/external_function#url_of_proxy_and_resource ExternalFunction#url_of_proxy_and_resource}

---

##### `arg`<sup>Optional</sup> <a name="arg" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.arg"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArg">ExternalFunctionArg</a>]]

arg block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/external_function#arg ExternalFunction#arg}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.comment"></a>

- *Type:* str

A description of the external function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/external_function#comment ExternalFunction#comment}

---

##### `compression`<sup>Optional</sup> <a name="compression" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.compression"></a>

- *Type:* str

If specified, the JSON payload is compressed when sent from Snowflake to the proxy service, and when sent back from the proxy service to Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/external_function#compression ExternalFunction#compression}

---

##### `context_headers`<sup>Optional</sup> <a name="context_headers" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.contextHeaders"></a>

- *Type:* typing.List[str]

Binds Snowflake context function results to HTTP headers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/external_function#context_headers ExternalFunction#context_headers}

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.header"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeader">ExternalFunctionHeader</a>]]

header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/external_function#header ExternalFunction#header}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/external_function#id ExternalFunction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `max_batch_rows`<sup>Optional</sup> <a name="max_batch_rows" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.maxBatchRows"></a>

- *Type:* typing.Union[int, float]

This specifies the maximum number of rows in each batch sent to the proxy service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/external_function#max_batch_rows ExternalFunction#max_batch_rows}

---

##### `null_input_behavior`<sup>Optional</sup> <a name="null_input_behavior" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.nullInputBehavior"></a>

- *Type:* str

Specifies the behavior of the external function when called with null inputs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/external_function#null_input_behavior ExternalFunction#null_input_behavior}

---

##### `request_translator`<sup>Optional</sup> <a name="request_translator" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.requestTranslator"></a>

- *Type:* str

This specifies the name of the request translator function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/external_function#request_translator ExternalFunction#request_translator}

---

##### `response_translator`<sup>Optional</sup> <a name="response_translator" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.responseTranslator"></a>

- *Type:* str

This specifies the name of the response translator function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/external_function#response_translator ExternalFunction#response_translator}

---

##### `return_null_allowed`<sup>Optional</sup> <a name="return_null_allowed" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.Initializer.parameter.returnNullAllowed"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether the function can return NULL values or must return only NON-NULL values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/external_function#return_null_allowed ExternalFunction#return_null_allowed}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.putArg">put_arg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.putHeader">put_header</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetArg">reset_arg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetCompression">reset_compression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetContextHeaders">reset_context_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetHeader">reset_header</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetMaxBatchRows">reset_max_batch_rows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetNullInputBehavior">reset_null_input_behavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetRequestTranslator">reset_request_translator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetResponseTranslator">reset_response_translator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetReturnNullAllowed">reset_return_null_allowed</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `put_arg` <a name="put_arg" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.putArg"></a>

```python
def put_arg(
  value: typing.Union[IResolvable, typing.List[ExternalFunctionArg]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.putArg.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArg">ExternalFunctionArg</a>]]

---

##### `put_header` <a name="put_header" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.putHeader"></a>

```python
def put_header(
  value: typing.Union[IResolvable, typing.List[ExternalFunctionHeader]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.putHeader.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeader">ExternalFunctionHeader</a>]]

---

##### `reset_arg` <a name="reset_arg" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetArg"></a>

```python
def reset_arg() -> None
```

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_compression` <a name="reset_compression" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetCompression"></a>

```python
def reset_compression() -> None
```

##### `reset_context_headers` <a name="reset_context_headers" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetContextHeaders"></a>

```python
def reset_context_headers() -> None
```

##### `reset_header` <a name="reset_header" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetHeader"></a>

```python
def reset_header() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_max_batch_rows` <a name="reset_max_batch_rows" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetMaxBatchRows"></a>

```python
def reset_max_batch_rows() -> None
```

##### `reset_null_input_behavior` <a name="reset_null_input_behavior" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetNullInputBehavior"></a>

```python
def reset_null_input_behavior() -> None
```

##### `reset_request_translator` <a name="reset_request_translator" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetRequestTranslator"></a>

```python
def reset_request_translator() -> None
```

##### `reset_response_translator` <a name="reset_response_translator" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetResponseTranslator"></a>

```python
def reset_response_translator() -> None
```

##### `reset_return_null_allowed` <a name="reset_return_null_allowed" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.resetReturnNullAllowed"></a>

```python
def reset_return_null_allowed() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ExternalFunction resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.isConstruct"></a>

```python
from cdktf_cdktf_provider_snowflake import external_function

externalFunction.ExternalFunction.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_snowflake import external_function

externalFunction.ExternalFunction.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_snowflake import external_function

externalFunction.ExternalFunction.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_snowflake import external_function

externalFunction.ExternalFunction.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ExternalFunction resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ExternalFunction to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ExternalFunction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/external_function#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ExternalFunction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.arg">arg</a></code> | <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList">ExternalFunctionArgList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.header">header</a></code> | <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList">ExternalFunctionHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.apiIntegrationInput">api_integration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.argInput">arg_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArg">ExternalFunctionArg</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.compressionInput">compression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.contextHeadersInput">context_headers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.headerInput">header_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeader">ExternalFunctionHeader</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.maxBatchRowsInput">max_batch_rows_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.nullInputBehaviorInput">null_input_behavior_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.requestTranslatorInput">request_translator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.responseTranslatorInput">response_translator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.returnBehaviorInput">return_behavior_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.returnNullAllowedInput">return_null_allowed_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.returnTypeInput">return_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.schemaInput">schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.urlOfProxyAndResourceInput">url_of_proxy_and_resource_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.apiIntegration">api_integration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.compression">compression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.contextHeaders">context_headers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.maxBatchRows">max_batch_rows</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.nullInputBehavior">null_input_behavior</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.requestTranslator">request_translator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.responseTranslator">response_translator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.returnBehavior">return_behavior</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.returnNullAllowed">return_null_allowed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.returnType">return_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.schema">schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.urlOfProxyAndResource">url_of_proxy_and_resource</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arg`<sup>Required</sup> <a name="arg" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.arg"></a>

```python
arg: ExternalFunctionArgList
```

- *Type:* <a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList">ExternalFunctionArgList</a>

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.header"></a>

```python
header: ExternalFunctionHeaderList
```

- *Type:* <a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList">ExternalFunctionHeaderList</a>

---

##### `api_integration_input`<sup>Optional</sup> <a name="api_integration_input" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.apiIntegrationInput"></a>

```python
api_integration_input: str
```

- *Type:* str

---

##### `arg_input`<sup>Optional</sup> <a name="arg_input" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.argInput"></a>

```python
arg_input: typing.Union[IResolvable, typing.List[ExternalFunctionArg]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArg">ExternalFunctionArg</a>]]

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `compression_input`<sup>Optional</sup> <a name="compression_input" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.compressionInput"></a>

```python
compression_input: str
```

- *Type:* str

---

##### `context_headers_input`<sup>Optional</sup> <a name="context_headers_input" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.contextHeadersInput"></a>

```python
context_headers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `header_input`<sup>Optional</sup> <a name="header_input" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.headerInput"></a>

```python
header_input: typing.Union[IResolvable, typing.List[ExternalFunctionHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeader">ExternalFunctionHeader</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `max_batch_rows_input`<sup>Optional</sup> <a name="max_batch_rows_input" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.maxBatchRowsInput"></a>

```python
max_batch_rows_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `null_input_behavior_input`<sup>Optional</sup> <a name="null_input_behavior_input" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.nullInputBehaviorInput"></a>

```python
null_input_behavior_input: str
```

- *Type:* str

---

##### `request_translator_input`<sup>Optional</sup> <a name="request_translator_input" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.requestTranslatorInput"></a>

```python
request_translator_input: str
```

- *Type:* str

---

##### `response_translator_input`<sup>Optional</sup> <a name="response_translator_input" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.responseTranslatorInput"></a>

```python
response_translator_input: str
```

- *Type:* str

---

##### `return_behavior_input`<sup>Optional</sup> <a name="return_behavior_input" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.returnBehaviorInput"></a>

```python
return_behavior_input: str
```

- *Type:* str

---

##### `return_null_allowed_input`<sup>Optional</sup> <a name="return_null_allowed_input" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.returnNullAllowedInput"></a>

```python
return_null_allowed_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `return_type_input`<sup>Optional</sup> <a name="return_type_input" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.returnTypeInput"></a>

```python
return_type_input: str
```

- *Type:* str

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.schemaInput"></a>

```python
schema_input: str
```

- *Type:* str

---

##### `url_of_proxy_and_resource_input`<sup>Optional</sup> <a name="url_of_proxy_and_resource_input" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.urlOfProxyAndResourceInput"></a>

```python
url_of_proxy_and_resource_input: str
```

- *Type:* str

---

##### `api_integration`<sup>Required</sup> <a name="api_integration" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.apiIntegration"></a>

```python
api_integration: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.compression"></a>

```python
compression: str
```

- *Type:* str

---

##### `context_headers`<sup>Required</sup> <a name="context_headers" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.contextHeaders"></a>

```python
context_headers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `max_batch_rows`<sup>Required</sup> <a name="max_batch_rows" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.maxBatchRows"></a>

```python
max_batch_rows: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `null_input_behavior`<sup>Required</sup> <a name="null_input_behavior" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.nullInputBehavior"></a>

```python
null_input_behavior: str
```

- *Type:* str

---

##### `request_translator`<sup>Required</sup> <a name="request_translator" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.requestTranslator"></a>

```python
request_translator: str
```

- *Type:* str

---

##### `response_translator`<sup>Required</sup> <a name="response_translator" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.responseTranslator"></a>

```python
response_translator: str
```

- *Type:* str

---

##### `return_behavior`<sup>Required</sup> <a name="return_behavior" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.returnBehavior"></a>

```python
return_behavior: str
```

- *Type:* str

---

##### `return_null_allowed`<sup>Required</sup> <a name="return_null_allowed" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.returnNullAllowed"></a>

```python
return_null_allowed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `return_type`<sup>Required</sup> <a name="return_type" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.returnType"></a>

```python
return_type: str
```

- *Type:* str

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.schema"></a>

```python
schema: str
```

- *Type:* str

---

##### `url_of_proxy_and_resource`<sup>Required</sup> <a name="url_of_proxy_and_resource" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.urlOfProxyAndResource"></a>

```python
url_of_proxy_and_resource: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.externalFunction.ExternalFunction.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ExternalFunctionArg <a name="ExternalFunctionArg" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArg"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArg.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import external_function

externalFunction.ExternalFunctionArg(
  name: str,
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArg.property.name">name</a></code> | <code>str</code> | Argument name. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArg.property.type">type</a></code> | <code>str</code> | Argument type, e.g. VARCHAR. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArg.property.name"></a>

```python
name: str
```

- *Type:* str

Argument name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/external_function#name ExternalFunction#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArg.property.type"></a>

```python
type: str
```

- *Type:* str

Argument type, e.g. VARCHAR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/external_function#type ExternalFunction#type}

---

### ExternalFunctionConfig <a name="ExternalFunctionConfig" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import external_function

externalFunction.ExternalFunctionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  api_integration: str,
  database: str,
  name: str,
  return_behavior: str,
  return_type: str,
  schema: str,
  url_of_proxy_and_resource: str,
  arg: typing.Union[IResolvable, typing.List[ExternalFunctionArg]] = None,
  comment: str = None,
  compression: str = None,
  context_headers: typing.List[str] = None,
  header: typing.Union[IResolvable, typing.List[ExternalFunctionHeader]] = None,
  id: str = None,
  max_batch_rows: typing.Union[int, float] = None,
  null_input_behavior: str = None,
  request_translator: str = None,
  response_translator: str = None,
  return_null_allowed: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.apiIntegration">api_integration</a></code> | <code>str</code> | The name of the API integration object that should be used to authenticate the call to the proxy service. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.database">database</a></code> | <code>str</code> | The database in which to create the external function. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.name">name</a></code> | <code>str</code> | Specifies the identifier for the external function. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.returnBehavior">return_behavior</a></code> | <code>str</code> | Specifies the behavior of the function when returning results. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.returnType">return_type</a></code> | <code>str</code> | Specifies the data type returned by the external function. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.schema">schema</a></code> | <code>str</code> | The schema in which to create the external function. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.urlOfProxyAndResource">url_of_proxy_and_resource</a></code> | <code>str</code> | This is the invocation URL of the proxy service and resource through which Snowflake calls the remote service. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.arg">arg</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArg">ExternalFunctionArg</a>]]</code> | arg block. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.comment">comment</a></code> | <code>str</code> | A description of the external function. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.compression">compression</a></code> | <code>str</code> | If specified, the JSON payload is compressed when sent from Snowflake to the proxy service, and when sent back from the proxy service to Snowflake. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.contextHeaders">context_headers</a></code> | <code>typing.List[str]</code> | Binds Snowflake context function results to HTTP headers. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.header">header</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeader">ExternalFunctionHeader</a>]]</code> | header block. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/external_function#id ExternalFunction#id}. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.maxBatchRows">max_batch_rows</a></code> | <code>typing.Union[int, float]</code> | This specifies the maximum number of rows in each batch sent to the proxy service. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.nullInputBehavior">null_input_behavior</a></code> | <code>str</code> | Specifies the behavior of the external function when called with null inputs. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.requestTranslator">request_translator</a></code> | <code>str</code> | This specifies the name of the request translator function. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.responseTranslator">response_translator</a></code> | <code>str</code> | This specifies the name of the response translator function. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.returnNullAllowed">return_null_allowed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether the function can return NULL values or must return only NON-NULL values. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `api_integration`<sup>Required</sup> <a name="api_integration" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.apiIntegration"></a>

```python
api_integration: str
```

- *Type:* str

The name of the API integration object that should be used to authenticate the call to the proxy service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/external_function#api_integration ExternalFunction#api_integration}

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.database"></a>

```python
database: str
```

- *Type:* str

The database in which to create the external function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/external_function#database ExternalFunction#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Specifies the identifier for the external function.

The identifier can contain the schema name and database name, as well as the function name. The function's signature (name and argument data types) must be unique within the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/external_function#name ExternalFunction#name}

---

##### `return_behavior`<sup>Required</sup> <a name="return_behavior" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.returnBehavior"></a>

```python
return_behavior: str
```

- *Type:* str

Specifies the behavior of the function when returning results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/external_function#return_behavior ExternalFunction#return_behavior}

---

##### `return_type`<sup>Required</sup> <a name="return_type" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.returnType"></a>

```python
return_type: str
```

- *Type:* str

Specifies the data type returned by the external function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/external_function#return_type ExternalFunction#return_type}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.schema"></a>

```python
schema: str
```

- *Type:* str

The schema in which to create the external function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/external_function#schema ExternalFunction#schema}

---

##### `url_of_proxy_and_resource`<sup>Required</sup> <a name="url_of_proxy_and_resource" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.urlOfProxyAndResource"></a>

```python
url_of_proxy_and_resource: str
```

- *Type:* str

This is the invocation URL of the proxy service and resource through which Snowflake calls the remote service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/external_function#url_of_proxy_and_resource ExternalFunction#url_of_proxy_and_resource}

---

##### `arg`<sup>Optional</sup> <a name="arg" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.arg"></a>

```python
arg: typing.Union[IResolvable, typing.List[ExternalFunctionArg]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArg">ExternalFunctionArg</a>]]

arg block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/external_function#arg ExternalFunction#arg}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

A description of the external function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/external_function#comment ExternalFunction#comment}

---

##### `compression`<sup>Optional</sup> <a name="compression" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.compression"></a>

```python
compression: str
```

- *Type:* str

If specified, the JSON payload is compressed when sent from Snowflake to the proxy service, and when sent back from the proxy service to Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/external_function#compression ExternalFunction#compression}

---

##### `context_headers`<sup>Optional</sup> <a name="context_headers" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.contextHeaders"></a>

```python
context_headers: typing.List[str]
```

- *Type:* typing.List[str]

Binds Snowflake context function results to HTTP headers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/external_function#context_headers ExternalFunction#context_headers}

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.header"></a>

```python
header: typing.Union[IResolvable, typing.List[ExternalFunctionHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeader">ExternalFunctionHeader</a>]]

header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/external_function#header ExternalFunction#header}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/external_function#id ExternalFunction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `max_batch_rows`<sup>Optional</sup> <a name="max_batch_rows" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.maxBatchRows"></a>

```python
max_batch_rows: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

This specifies the maximum number of rows in each batch sent to the proxy service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/external_function#max_batch_rows ExternalFunction#max_batch_rows}

---

##### `null_input_behavior`<sup>Optional</sup> <a name="null_input_behavior" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.nullInputBehavior"></a>

```python
null_input_behavior: str
```

- *Type:* str

Specifies the behavior of the external function when called with null inputs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/external_function#null_input_behavior ExternalFunction#null_input_behavior}

---

##### `request_translator`<sup>Optional</sup> <a name="request_translator" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.requestTranslator"></a>

```python
request_translator: str
```

- *Type:* str

This specifies the name of the request translator function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/external_function#request_translator ExternalFunction#request_translator}

---

##### `response_translator`<sup>Optional</sup> <a name="response_translator" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.responseTranslator"></a>

```python
response_translator: str
```

- *Type:* str

This specifies the name of the response translator function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/external_function#response_translator ExternalFunction#response_translator}

---

##### `return_null_allowed`<sup>Optional</sup> <a name="return_null_allowed" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionConfig.property.returnNullAllowed"></a>

```python
return_null_allowed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether the function can return NULL values or must return only NON-NULL values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/external_function#return_null_allowed ExternalFunction#return_null_allowed}

---

### ExternalFunctionHeader <a name="ExternalFunctionHeader" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeader.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import external_function

externalFunction.ExternalFunctionHeader(
  name: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeader.property.name">name</a></code> | <code>str</code> | Header name. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeader.property.value">value</a></code> | <code>str</code> | Header value. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeader.property.name"></a>

```python
name: str
```

- *Type:* str

Header name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/external_function#name ExternalFunction#name}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeader.property.value"></a>

```python
value: str
```

- *Type:* str

Header value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/external_function#value ExternalFunction#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ExternalFunctionArgList <a name="ExternalFunctionArgList" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import external_function

externalFunction.ExternalFunctionArgList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ExternalFunctionArgOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArg">ExternalFunctionArg</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ExternalFunctionArg]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArg">ExternalFunctionArg</a>]]

---


### ExternalFunctionArgOutputReference <a name="ExternalFunctionArgOutputReference" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import external_function

externalFunction.ExternalFunctionArgOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArg">ExternalFunctionArg</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionArgOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ExternalFunctionArg]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionArg">ExternalFunctionArg</a>]

---


### ExternalFunctionHeaderList <a name="ExternalFunctionHeaderList" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import external_function

externalFunction.ExternalFunctionHeaderList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ExternalFunctionHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeader">ExternalFunctionHeader</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ExternalFunctionHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeader">ExternalFunctionHeader</a>]]

---


### ExternalFunctionHeaderOutputReference <a name="ExternalFunctionHeaderOutputReference" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import external_function

externalFunction.ExternalFunctionHeaderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeader">ExternalFunctionHeader</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeaderOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ExternalFunctionHeader]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-snowflake.externalFunction.ExternalFunctionHeader">ExternalFunctionHeader</a>]

---



