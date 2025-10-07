# `functionPython` Submodule <a name="`functionPython` Submodule" id="@cdktf/provider-snowflake.functionPython"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FunctionPython <a name="FunctionPython" id="@cdktf/provider-snowflake.functionPython.FunctionPython"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/function_python snowflake_function_python}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.functionPython.FunctionPython.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import function_python

functionPython.FunctionPython(
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
  handler: str,
  name: str,
  return_type: str,
  runtime_version: str,
  schema: str,
  arguments: IResolvable | typing.List[FunctionPythonArguments] = None,
  comment: str = None,
  enable_console_output: bool | IResolvable = None,
  external_access_integrations: typing.List[str] = None,
  function_definition: str = None,
  id: str = None,
  imports: IResolvable | typing.List[FunctionPythonImports] = None,
  is_aggregate: str = None,
  is_secure: str = None,
  log_level: str = None,
  metric_level: str = None,
  null_input_behavior: str = None,
  packages: typing.List[str] = None,
  return_results_behavior: str = None,
  secrets: IResolvable | typing.List[FunctionPythonSecrets] = None,
  timeouts: FunctionPythonTimeouts = None,
  trace_level: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.Initializer.parameter.database">database</a></code> | <code>str</code> | The database in which to create the function. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.Initializer.parameter.handler">handler</a></code> | <code>str</code> | The name of the handler function or class. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the function; |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.Initializer.parameter.returnType">return_type</a></code> | <code>str</code> | Specifies the results returned by the UDF, which determines the UDF type. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.Initializer.parameter.runtimeVersion">runtime_version</a></code> | <code>str</code> | Specifies the Python version to use. The supported versions of Python are: 3.9, 3.10, and 3.11. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.Initializer.parameter.schema">schema</a></code> | <code>str</code> | The schema in which to create the function. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.Initializer.parameter.arguments">arguments</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArguments">FunctionPythonArguments</a>]</code> | arguments block. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.Initializer.parameter.comment">comment</a></code> | <code>str</code> | (Default: `user-defined function`) Specifies a comment for the function. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.Initializer.parameter.enableConsoleOutput">enable_console_output</a></code> | <code>bool \| cdktf.IResolvable</code> | Enable stdout/stderr fast path logging for anonymous stored procs. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.Initializer.parameter.externalAccessIntegrations">external_access_integrations</a></code> | <code>typing.List[str]</code> | The names of [external access integrations](https://docs.snowflake.com/en/sql-reference/sql/create-external-access-integration) needed in order for this function’s handler code to access external networks. An external access integration specifies [network rules](https://docs.snowflake.com/en/sql-reference/sql/create-network-rule) and [secrets](https://docs.snowflake.com/en/sql-reference/sql/create-secret) that specify external locations and credentials (if any) allowed for use by handler code when making requests of an external network, such as an external REST API. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.Initializer.parameter.functionDefinition">function_definition</a></code> | <code>str</code> | Defines the handler code executed when the UDF is called. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/function_python#id FunctionPython#id}. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.Initializer.parameter.imports">imports</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImports">FunctionPythonImports</a>]</code> | imports block. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.Initializer.parameter.isAggregate">is_aggregate</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies that the function is an aggregate function. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.Initializer.parameter.isSecure">is_secure</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies that the function is secure. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.Initializer.parameter.logLevel">log_level</a></code> | <code>str</code> | LOG_LEVEL to use when filtering events For more information, check [LOG_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#log-level). |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.Initializer.parameter.metricLevel">metric_level</a></code> | <code>str</code> | METRIC_LEVEL value to control whether to emit metrics to Event Table For more information, check [METRIC_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#metric-level). |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.Initializer.parameter.nullInputBehavior">null_input_behavior</a></code> | <code>str</code> | Specifies the behavior of the function when called with null inputs. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.Initializer.parameter.packages">packages</a></code> | <code>typing.List[str]</code> | The name and version number of packages required as dependencies. The value should be of the form `package_name==version_number`. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.Initializer.parameter.returnResultsBehavior">return_results_behavior</a></code> | <code>str</code> | Specifies the behavior of the function when returning results. Valid values are (case-insensitive): `VOLATILE` \| `IMMUTABLE`. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.Initializer.parameter.secrets">secrets</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecrets">FunctionPythonSecrets</a>]</code> | secrets block. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonTimeouts">FunctionPythonTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.Initializer.parameter.traceLevel">trace_level</a></code> | <code>str</code> | Trace level value to use when generating/filtering trace events For more information, check [TRACE_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#trace-level). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.functionPython.FunctionPython.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.functionPython.FunctionPython.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.functionPython.FunctionPython.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.functionPython.FunctionPython.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.functionPython.FunctionPython.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.functionPython.FunctionPython.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.functionPython.FunctionPython.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.functionPython.FunctionPython.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.functionPython.FunctionPython.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.functionPython.FunctionPython.Initializer.parameter.database"></a>

- *Type:* str

The database in which to create the function.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/function_python#database FunctionPython#database}

---

##### `handler`<sup>Required</sup> <a name="handler" id="@cdktf/provider-snowflake.functionPython.FunctionPython.Initializer.parameter.handler"></a>

- *Type:* str

The name of the handler function or class.

If the handler is for a scalar UDF, returning a non-tabular value, the HANDLER value should be a function name. If the handler code is in-line with the CREATE FUNCTION statement, you can use the function name alone. When the handler code is referenced at a stage, this value should be qualified with the module name, as in the following form: `my_module.my_function`. If the handler is for a tabular UDF, the HANDLER value should be the name of a handler class.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/function_python#handler FunctionPython#handler}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.functionPython.FunctionPython.Initializer.parameter.name"></a>

- *Type:* str

The name of the function;

the identifier does not need to be unique for the schema in which the function is created because UDFs are identified and resolved by the combination of the name and argument types. Check the [docs](https://docs.snowflake.com/en/sql-reference/sql/create-function#all-languages). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/function_python#name FunctionPython#name}

---

##### `return_type`<sup>Required</sup> <a name="return_type" id="@cdktf/provider-snowflake.functionPython.FunctionPython.Initializer.parameter.returnType"></a>

- *Type:* str

Specifies the results returned by the UDF, which determines the UDF type.

Use `<result_data_type>` to create a scalar UDF that returns a single value with the specified data type. Use `TABLE (col_name col_data_type, ...)` to creates a table UDF that returns tabular results with the specified table column(s) and column type(s). For the details, consult the [docs](https://docs.snowflake.com/en/sql-reference/sql/create-function#all-languages).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/function_python#return_type FunctionPython#return_type}

---

##### `runtime_version`<sup>Required</sup> <a name="runtime_version" id="@cdktf/provider-snowflake.functionPython.FunctionPython.Initializer.parameter.runtimeVersion"></a>

- *Type:* str

Specifies the Python version to use. The supported versions of Python are: 3.9, 3.10, and 3.11.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/function_python#runtime_version FunctionPython#runtime_version}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.functionPython.FunctionPython.Initializer.parameter.schema"></a>

- *Type:* str

The schema in which to create the function.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/function_python#schema FunctionPython#schema}

---

##### `arguments`<sup>Optional</sup> <a name="arguments" id="@cdktf/provider-snowflake.functionPython.FunctionPython.Initializer.parameter.arguments"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArguments">FunctionPythonArguments</a>]

arguments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/function_python#arguments FunctionPython#arguments}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.functionPython.FunctionPython.Initializer.parameter.comment"></a>

- *Type:* str

(Default: `user-defined function`) Specifies a comment for the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/function_python#comment FunctionPython#comment}

---

##### `enable_console_output`<sup>Optional</sup> <a name="enable_console_output" id="@cdktf/provider-snowflake.functionPython.FunctionPython.Initializer.parameter.enableConsoleOutput"></a>

- *Type:* bool | cdktf.IResolvable

Enable stdout/stderr fast path logging for anonymous stored procs.

This is a public parameter (similar to LOG_LEVEL). For more information, check [ENABLE_CONSOLE_OUTPUT docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-console-output).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/function_python#enable_console_output FunctionPython#enable_console_output}

---

##### `external_access_integrations`<sup>Optional</sup> <a name="external_access_integrations" id="@cdktf/provider-snowflake.functionPython.FunctionPython.Initializer.parameter.externalAccessIntegrations"></a>

- *Type:* typing.List[str]

The names of [external access integrations](https://docs.snowflake.com/en/sql-reference/sql/create-external-access-integration) needed in order for this function’s handler code to access external networks. An external access integration specifies [network rules](https://docs.snowflake.com/en/sql-reference/sql/create-network-rule) and [secrets](https://docs.snowflake.com/en/sql-reference/sql/create-secret) that specify external locations and credentials (if any) allowed for use by handler code when making requests of an external network, such as an external REST API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/function_python#external_access_integrations FunctionPython#external_access_integrations}

---

##### `function_definition`<sup>Optional</sup> <a name="function_definition" id="@cdktf/provider-snowflake.functionPython.FunctionPython.Initializer.parameter.functionDefinition"></a>

- *Type:* str

Defines the handler code executed when the UDF is called.

Wrapping `$$` signs are added by the provider automatically; do not include them. The `function_definition` value must be Python source code. For more information, see [Introduction to Python UDFs](https://docs.snowflake.com/en/developer-guide/udf/python/udf-python-introduction). To mitigate permadiff on this field, the provider replaces blank characters with a space. This can lead to false positives in cases where a change in case or run of whitespace is semantically significant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/function_python#function_definition FunctionPython#function_definition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.functionPython.FunctionPython.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/function_python#id FunctionPython#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imports`<sup>Optional</sup> <a name="imports" id="@cdktf/provider-snowflake.functionPython.FunctionPython.Initializer.parameter.imports"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImports">FunctionPythonImports</a>]

imports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/function_python#imports FunctionPython#imports}

---

##### `is_aggregate`<sup>Optional</sup> <a name="is_aggregate" id="@cdktf/provider-snowflake.functionPython.FunctionPython.Initializer.parameter.isAggregate"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies that the function is an aggregate function.

For more information about user-defined aggregate functions, see [Python user-defined aggregate functions](https://docs.snowflake.com/en/developer-guide/udf/python/udf-python-aggregate-functions). Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/function_python#is_aggregate FunctionPython#is_aggregate}

---

##### `is_secure`<sup>Optional</sup> <a name="is_secure" id="@cdktf/provider-snowflake.functionPython.FunctionPython.Initializer.parameter.isSecure"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies that the function is secure.

By design, the Snowflake's `SHOW FUNCTIONS` command does not provide information about secure functions (consult [function docs](https://docs.snowflake.com/en/sql-reference/sql/create-function#id1) and [Protecting Sensitive Information with Secure UDFs and Stored Procedures](https://docs.snowflake.com/en/developer-guide/secure-udf-procedure)) which is essential to manage/import function with Terraform. Use the role owning the function while managing secure functions. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/function_python#is_secure FunctionPython#is_secure}

---

##### `log_level`<sup>Optional</sup> <a name="log_level" id="@cdktf/provider-snowflake.functionPython.FunctionPython.Initializer.parameter.logLevel"></a>

- *Type:* str

LOG_LEVEL to use when filtering events For more information, check [LOG_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#log-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/function_python#log_level FunctionPython#log_level}

---

##### `metric_level`<sup>Optional</sup> <a name="metric_level" id="@cdktf/provider-snowflake.functionPython.FunctionPython.Initializer.parameter.metricLevel"></a>

- *Type:* str

METRIC_LEVEL value to control whether to emit metrics to Event Table For more information, check [METRIC_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#metric-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/function_python#metric_level FunctionPython#metric_level}

---

##### `null_input_behavior`<sup>Optional</sup> <a name="null_input_behavior" id="@cdktf/provider-snowflake.functionPython.FunctionPython.Initializer.parameter.nullInputBehavior"></a>

- *Type:* str

Specifies the behavior of the function when called with null inputs.

Valid values are (case-insensitive): `CALLED ON NULL INPUT` | `RETURNS NULL ON NULL INPUT`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/function_python#null_input_behavior FunctionPython#null_input_behavior}

---

##### `packages`<sup>Optional</sup> <a name="packages" id="@cdktf/provider-snowflake.functionPython.FunctionPython.Initializer.parameter.packages"></a>

- *Type:* typing.List[str]

The name and version number of packages required as dependencies. The value should be of the form `package_name==version_number`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/function_python#packages FunctionPython#packages}

---

##### `return_results_behavior`<sup>Optional</sup> <a name="return_results_behavior" id="@cdktf/provider-snowflake.functionPython.FunctionPython.Initializer.parameter.returnResultsBehavior"></a>

- *Type:* str

Specifies the behavior of the function when returning results. Valid values are (case-insensitive): `VOLATILE` | `IMMUTABLE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/function_python#return_results_behavior FunctionPython#return_results_behavior}

---

##### `secrets`<sup>Optional</sup> <a name="secrets" id="@cdktf/provider-snowflake.functionPython.FunctionPython.Initializer.parameter.secrets"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecrets">FunctionPythonSecrets</a>]

secrets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/function_python#secrets FunctionPython#secrets}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-snowflake.functionPython.FunctionPython.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonTimeouts">FunctionPythonTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/function_python#timeouts FunctionPython#timeouts}

---

##### `trace_level`<sup>Optional</sup> <a name="trace_level" id="@cdktf/provider-snowflake.functionPython.FunctionPython.Initializer.parameter.traceLevel"></a>

- *Type:* str

Trace level value to use when generating/filtering trace events For more information, check [TRACE_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#trace-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/function_python#trace_level FunctionPython#trace_level}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.putArguments">put_arguments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.putImports">put_imports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.putSecrets">put_secrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.resetArguments">reset_arguments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.resetEnableConsoleOutput">reset_enable_console_output</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.resetExternalAccessIntegrations">reset_external_access_integrations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.resetFunctionDefinition">reset_function_definition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.resetImports">reset_imports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.resetIsAggregate">reset_is_aggregate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.resetIsSecure">reset_is_secure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.resetLogLevel">reset_log_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.resetMetricLevel">reset_metric_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.resetNullInputBehavior">reset_null_input_behavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.resetPackages">reset_packages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.resetReturnResultsBehavior">reset_return_results_behavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.resetSecrets">reset_secrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.resetTraceLevel">reset_trace_level</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.functionPython.FunctionPython.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-snowflake.functionPython.FunctionPython.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.functionPython.FunctionPython.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.functionPython.FunctionPython.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-snowflake.functionPython.FunctionPython.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-snowflake.functionPython.FunctionPython.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-snowflake.functionPython.FunctionPython.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-snowflake.functionPython.FunctionPython.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-snowflake.functionPython.FunctionPython.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-snowflake.functionPython.FunctionPython.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-snowflake.functionPython.FunctionPython.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-snowflake.functionPython.FunctionPython.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPython.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPython.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPython.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPython.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPython.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPython.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPython.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPython.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPython.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPython.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPython.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPython.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPython.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPython.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPython.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPython.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPython.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPython.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-snowflake.functionPython.FunctionPython.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-snowflake.functionPython.FunctionPython.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.functionPython.FunctionPython.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.functionPython.FunctionPython.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPython.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPython.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-snowflake.functionPython.FunctionPython.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.functionPython.FunctionPython.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-snowflake.functionPython.FunctionPython.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-snowflake.functionPython.FunctionPython.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.functionPython.FunctionPython.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-snowflake.functionPython.FunctionPython.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.functionPython.FunctionPython.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_arguments` <a name="put_arguments" id="@cdktf/provider-snowflake.functionPython.FunctionPython.putArguments"></a>

```python
def put_arguments(
  value: IResolvable | typing.List[FunctionPythonArguments]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.functionPython.FunctionPython.putArguments.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArguments">FunctionPythonArguments</a>]

---

##### `put_imports` <a name="put_imports" id="@cdktf/provider-snowflake.functionPython.FunctionPython.putImports"></a>

```python
def put_imports(
  value: IResolvable | typing.List[FunctionPythonImports]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.functionPython.FunctionPython.putImports.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImports">FunctionPythonImports</a>]

---

##### `put_secrets` <a name="put_secrets" id="@cdktf/provider-snowflake.functionPython.FunctionPython.putSecrets"></a>

```python
def put_secrets(
  value: IResolvable | typing.List[FunctionPythonSecrets]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.functionPython.FunctionPython.putSecrets.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecrets">FunctionPythonSecrets</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-snowflake.functionPython.FunctionPython.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-snowflake.functionPython.FunctionPython.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/function_python#create FunctionPython#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-snowflake.functionPython.FunctionPython.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/function_python#delete FunctionPython#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-snowflake.functionPython.FunctionPython.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/function_python#read FunctionPython#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-snowflake.functionPython.FunctionPython.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/function_python#update FunctionPython#update}.

---

##### `reset_arguments` <a name="reset_arguments" id="@cdktf/provider-snowflake.functionPython.FunctionPython.resetArguments"></a>

```python
def reset_arguments() -> None
```

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-snowflake.functionPython.FunctionPython.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_enable_console_output` <a name="reset_enable_console_output" id="@cdktf/provider-snowflake.functionPython.FunctionPython.resetEnableConsoleOutput"></a>

```python
def reset_enable_console_output() -> None
```

##### `reset_external_access_integrations` <a name="reset_external_access_integrations" id="@cdktf/provider-snowflake.functionPython.FunctionPython.resetExternalAccessIntegrations"></a>

```python
def reset_external_access_integrations() -> None
```

##### `reset_function_definition` <a name="reset_function_definition" id="@cdktf/provider-snowflake.functionPython.FunctionPython.resetFunctionDefinition"></a>

```python
def reset_function_definition() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-snowflake.functionPython.FunctionPython.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_imports` <a name="reset_imports" id="@cdktf/provider-snowflake.functionPython.FunctionPython.resetImports"></a>

```python
def reset_imports() -> None
```

##### `reset_is_aggregate` <a name="reset_is_aggregate" id="@cdktf/provider-snowflake.functionPython.FunctionPython.resetIsAggregate"></a>

```python
def reset_is_aggregate() -> None
```

##### `reset_is_secure` <a name="reset_is_secure" id="@cdktf/provider-snowflake.functionPython.FunctionPython.resetIsSecure"></a>

```python
def reset_is_secure() -> None
```

##### `reset_log_level` <a name="reset_log_level" id="@cdktf/provider-snowflake.functionPython.FunctionPython.resetLogLevel"></a>

```python
def reset_log_level() -> None
```

##### `reset_metric_level` <a name="reset_metric_level" id="@cdktf/provider-snowflake.functionPython.FunctionPython.resetMetricLevel"></a>

```python
def reset_metric_level() -> None
```

##### `reset_null_input_behavior` <a name="reset_null_input_behavior" id="@cdktf/provider-snowflake.functionPython.FunctionPython.resetNullInputBehavior"></a>

```python
def reset_null_input_behavior() -> None
```

##### `reset_packages` <a name="reset_packages" id="@cdktf/provider-snowflake.functionPython.FunctionPython.resetPackages"></a>

```python
def reset_packages() -> None
```

##### `reset_return_results_behavior` <a name="reset_return_results_behavior" id="@cdktf/provider-snowflake.functionPython.FunctionPython.resetReturnResultsBehavior"></a>

```python
def reset_return_results_behavior() -> None
```

##### `reset_secrets` <a name="reset_secrets" id="@cdktf/provider-snowflake.functionPython.FunctionPython.resetSecrets"></a>

```python
def reset_secrets() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-snowflake.functionPython.FunctionPython.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_trace_level` <a name="reset_trace_level" id="@cdktf/provider-snowflake.functionPython.FunctionPython.resetTraceLevel"></a>

```python
def reset_trace_level() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a FunctionPython resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-snowflake.functionPython.FunctionPython.isConstruct"></a>

```python
from cdktf_cdktf_provider_snowflake import function_python

functionPython.FunctionPython.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.functionPython.FunctionPython.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-snowflake.functionPython.FunctionPython.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_snowflake import function_python

functionPython.FunctionPython.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.functionPython.FunctionPython.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-snowflake.functionPython.FunctionPython.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_snowflake import function_python

functionPython.FunctionPython.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.functionPython.FunctionPython.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-snowflake.functionPython.FunctionPython.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_snowflake import function_python

functionPython.FunctionPython.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a FunctionPython resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.functionPython.FunctionPython.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-snowflake.functionPython.FunctionPython.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the FunctionPython to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-snowflake.functionPython.FunctionPython.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing FunctionPython that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/function_python#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.functionPython.FunctionPython.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the FunctionPython to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.arguments">arguments</a></code> | <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsList">FunctionPythonArgumentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.fullyQualifiedName">fully_qualified_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.functionLanguage">function_language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.imports">imports</a></code> | <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImportsList">FunctionPythonImportsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.parameters">parameters</a></code> | <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersList">FunctionPythonParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.secrets">secrets</a></code> | <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsList">FunctionPythonSecretsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.showOutput">show_output</a></code> | <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputList">FunctionPythonShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference">FunctionPythonTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.argumentsInput">arguments_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArguments">FunctionPythonArguments</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.enableConsoleOutputInput">enable_console_output_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.externalAccessIntegrationsInput">external_access_integrations_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.functionDefinitionInput">function_definition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.handlerInput">handler_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.importsInput">imports_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImports">FunctionPythonImports</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.isAggregateInput">is_aggregate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.isSecureInput">is_secure_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.logLevelInput">log_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.metricLevelInput">metric_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.nullInputBehaviorInput">null_input_behavior_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.packagesInput">packages_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.returnResultsBehaviorInput">return_results_behavior_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.returnTypeInput">return_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.runtimeVersionInput">runtime_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.schemaInput">schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.secretsInput">secrets_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecrets">FunctionPythonSecrets</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.timeoutsInput">timeouts_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonTimeouts">FunctionPythonTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.traceLevelInput">trace_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.enableConsoleOutput">enable_console_output</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.externalAccessIntegrations">external_access_integrations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.functionDefinition">function_definition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.handler">handler</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.isAggregate">is_aggregate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.isSecure">is_secure</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.logLevel">log_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.metricLevel">metric_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.nullInputBehavior">null_input_behavior</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.packages">packages</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.returnResultsBehavior">return_results_behavior</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.returnType">return_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.runtimeVersion">runtime_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.schema">schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.traceLevel">trace_level</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `arguments`<sup>Required</sup> <a name="arguments" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.arguments"></a>

```python
arguments: FunctionPythonArgumentsList
```

- *Type:* <a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsList">FunctionPythonArgumentsList</a>

---

##### `fully_qualified_name`<sup>Required</sup> <a name="fully_qualified_name" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.fullyQualifiedName"></a>

```python
fully_qualified_name: str
```

- *Type:* str

---

##### `function_language`<sup>Required</sup> <a name="function_language" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.functionLanguage"></a>

```python
function_language: str
```

- *Type:* str

---

##### `imports`<sup>Required</sup> <a name="imports" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.imports"></a>

```python
imports: FunctionPythonImportsList
```

- *Type:* <a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImportsList">FunctionPythonImportsList</a>

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.parameters"></a>

```python
parameters: FunctionPythonParametersList
```

- *Type:* <a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersList">FunctionPythonParametersList</a>

---

##### `secrets`<sup>Required</sup> <a name="secrets" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.secrets"></a>

```python
secrets: FunctionPythonSecretsList
```

- *Type:* <a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsList">FunctionPythonSecretsList</a>

---

##### `show_output`<sup>Required</sup> <a name="show_output" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.showOutput"></a>

```python
show_output: FunctionPythonShowOutputList
```

- *Type:* <a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputList">FunctionPythonShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.timeouts"></a>

```python
timeouts: FunctionPythonTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference">FunctionPythonTimeoutsOutputReference</a>

---

##### `arguments_input`<sup>Optional</sup> <a name="arguments_input" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.argumentsInput"></a>

```python
arguments_input: IResolvable | typing.List[FunctionPythonArguments]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArguments">FunctionPythonArguments</a>]

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `enable_console_output_input`<sup>Optional</sup> <a name="enable_console_output_input" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.enableConsoleOutputInput"></a>

```python
enable_console_output_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `external_access_integrations_input`<sup>Optional</sup> <a name="external_access_integrations_input" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.externalAccessIntegrationsInput"></a>

```python
external_access_integrations_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `function_definition_input`<sup>Optional</sup> <a name="function_definition_input" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.functionDefinitionInput"></a>

```python
function_definition_input: str
```

- *Type:* str

---

##### `handler_input`<sup>Optional</sup> <a name="handler_input" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.handlerInput"></a>

```python
handler_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `imports_input`<sup>Optional</sup> <a name="imports_input" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.importsInput"></a>

```python
imports_input: IResolvable | typing.List[FunctionPythonImports]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImports">FunctionPythonImports</a>]

---

##### `is_aggregate_input`<sup>Optional</sup> <a name="is_aggregate_input" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.isAggregateInput"></a>

```python
is_aggregate_input: str
```

- *Type:* str

---

##### `is_secure_input`<sup>Optional</sup> <a name="is_secure_input" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.isSecureInput"></a>

```python
is_secure_input: str
```

- *Type:* str

---

##### `log_level_input`<sup>Optional</sup> <a name="log_level_input" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.logLevelInput"></a>

```python
log_level_input: str
```

- *Type:* str

---

##### `metric_level_input`<sup>Optional</sup> <a name="metric_level_input" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.metricLevelInput"></a>

```python
metric_level_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `null_input_behavior_input`<sup>Optional</sup> <a name="null_input_behavior_input" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.nullInputBehaviorInput"></a>

```python
null_input_behavior_input: str
```

- *Type:* str

---

##### `packages_input`<sup>Optional</sup> <a name="packages_input" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.packagesInput"></a>

```python
packages_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `return_results_behavior_input`<sup>Optional</sup> <a name="return_results_behavior_input" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.returnResultsBehaviorInput"></a>

```python
return_results_behavior_input: str
```

- *Type:* str

---

##### `return_type_input`<sup>Optional</sup> <a name="return_type_input" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.returnTypeInput"></a>

```python
return_type_input: str
```

- *Type:* str

---

##### `runtime_version_input`<sup>Optional</sup> <a name="runtime_version_input" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.runtimeVersionInput"></a>

```python
runtime_version_input: str
```

- *Type:* str

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.schemaInput"></a>

```python
schema_input: str
```

- *Type:* str

---

##### `secrets_input`<sup>Optional</sup> <a name="secrets_input" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.secretsInput"></a>

```python
secrets_input: IResolvable | typing.List[FunctionPythonSecrets]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecrets">FunctionPythonSecrets</a>]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | FunctionPythonTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonTimeouts">FunctionPythonTimeouts</a>

---

##### `trace_level_input`<sup>Optional</sup> <a name="trace_level_input" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.traceLevelInput"></a>

```python
trace_level_input: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `enable_console_output`<sup>Required</sup> <a name="enable_console_output" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.enableConsoleOutput"></a>

```python
enable_console_output: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `external_access_integrations`<sup>Required</sup> <a name="external_access_integrations" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.externalAccessIntegrations"></a>

```python
external_access_integrations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `function_definition`<sup>Required</sup> <a name="function_definition" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.functionDefinition"></a>

```python
function_definition: str
```

- *Type:* str

---

##### `handler`<sup>Required</sup> <a name="handler" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.handler"></a>

```python
handler: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_aggregate`<sup>Required</sup> <a name="is_aggregate" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.isAggregate"></a>

```python
is_aggregate: str
```

- *Type:* str

---

##### `is_secure`<sup>Required</sup> <a name="is_secure" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.isSecure"></a>

```python
is_secure: str
```

- *Type:* str

---

##### `log_level`<sup>Required</sup> <a name="log_level" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.logLevel"></a>

```python
log_level: str
```

- *Type:* str

---

##### `metric_level`<sup>Required</sup> <a name="metric_level" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.metricLevel"></a>

```python
metric_level: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `null_input_behavior`<sup>Required</sup> <a name="null_input_behavior" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.nullInputBehavior"></a>

```python
null_input_behavior: str
```

- *Type:* str

---

##### `packages`<sup>Required</sup> <a name="packages" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.packages"></a>

```python
packages: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `return_results_behavior`<sup>Required</sup> <a name="return_results_behavior" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.returnResultsBehavior"></a>

```python
return_results_behavior: str
```

- *Type:* str

---

##### `return_type`<sup>Required</sup> <a name="return_type" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.returnType"></a>

```python
return_type: str
```

- *Type:* str

---

##### `runtime_version`<sup>Required</sup> <a name="runtime_version" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.runtimeVersion"></a>

```python
runtime_version: str
```

- *Type:* str

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.schema"></a>

```python
schema: str
```

- *Type:* str

---

##### `trace_level`<sup>Required</sup> <a name="trace_level" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.traceLevel"></a>

```python
trace_level: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPython.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.functionPython.FunctionPython.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### FunctionPythonArguments <a name="FunctionPythonArguments" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArguments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArguments.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import function_python

functionPython.FunctionPythonArguments(
  arg_data_type: str,
  arg_name: str,
  arg_default_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArguments.property.argDataType">arg_data_type</a></code> | <code>str</code> | The argument type. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArguments.property.argName">arg_name</a></code> | <code>str</code> | The argument name. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArguments.property.argDefaultValue">arg_default_value</a></code> | <code>str</code> | Optional default value for the argument. |

---

##### `arg_data_type`<sup>Required</sup> <a name="arg_data_type" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArguments.property.argDataType"></a>

```python
arg_data_type: str
```

- *Type:* str

The argument type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/function_python#arg_data_type FunctionPython#arg_data_type}

---

##### `arg_name`<sup>Required</sup> <a name="arg_name" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArguments.property.argName"></a>

```python
arg_name: str
```

- *Type:* str

The argument name.

The provider wraps it in double quotes by default, so be aware of that while referencing the argument in the function definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/function_python#arg_name FunctionPython#arg_name}

---

##### `arg_default_value`<sup>Optional</sup> <a name="arg_default_value" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArguments.property.argDefaultValue"></a>

```python
arg_default_value: str
```

- *Type:* str

Optional default value for the argument.

For text values use single quotes. Numeric values can be unquoted. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/function_python#arg_default_value FunctionPython#arg_default_value}

---

### FunctionPythonConfig <a name="FunctionPythonConfig" id="@cdktf/provider-snowflake.functionPython.FunctionPythonConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import function_python

functionPython.FunctionPythonConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  database: str,
  handler: str,
  name: str,
  return_type: str,
  runtime_version: str,
  schema: str,
  arguments: IResolvable | typing.List[FunctionPythonArguments] = None,
  comment: str = None,
  enable_console_output: bool | IResolvable = None,
  external_access_integrations: typing.List[str] = None,
  function_definition: str = None,
  id: str = None,
  imports: IResolvable | typing.List[FunctionPythonImports] = None,
  is_aggregate: str = None,
  is_secure: str = None,
  log_level: str = None,
  metric_level: str = None,
  null_input_behavior: str = None,
  packages: typing.List[str] = None,
  return_results_behavior: str = None,
  secrets: IResolvable | typing.List[FunctionPythonSecrets] = None,
  timeouts: FunctionPythonTimeouts = None,
  trace_level: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.database">database</a></code> | <code>str</code> | The database in which to create the function. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.handler">handler</a></code> | <code>str</code> | The name of the handler function or class. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.name">name</a></code> | <code>str</code> | The name of the function; |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.returnType">return_type</a></code> | <code>str</code> | Specifies the results returned by the UDF, which determines the UDF type. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.runtimeVersion">runtime_version</a></code> | <code>str</code> | Specifies the Python version to use. The supported versions of Python are: 3.9, 3.10, and 3.11. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.schema">schema</a></code> | <code>str</code> | The schema in which to create the function. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.arguments">arguments</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArguments">FunctionPythonArguments</a>]</code> | arguments block. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.comment">comment</a></code> | <code>str</code> | (Default: `user-defined function`) Specifies a comment for the function. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.enableConsoleOutput">enable_console_output</a></code> | <code>bool \| cdktf.IResolvable</code> | Enable stdout/stderr fast path logging for anonymous stored procs. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.externalAccessIntegrations">external_access_integrations</a></code> | <code>typing.List[str]</code> | The names of [external access integrations](https://docs.snowflake.com/en/sql-reference/sql/create-external-access-integration) needed in order for this function’s handler code to access external networks. An external access integration specifies [network rules](https://docs.snowflake.com/en/sql-reference/sql/create-network-rule) and [secrets](https://docs.snowflake.com/en/sql-reference/sql/create-secret) that specify external locations and credentials (if any) allowed for use by handler code when making requests of an external network, such as an external REST API. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.functionDefinition">function_definition</a></code> | <code>str</code> | Defines the handler code executed when the UDF is called. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/function_python#id FunctionPython#id}. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.imports">imports</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImports">FunctionPythonImports</a>]</code> | imports block. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.isAggregate">is_aggregate</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies that the function is an aggregate function. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.isSecure">is_secure</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies that the function is secure. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.logLevel">log_level</a></code> | <code>str</code> | LOG_LEVEL to use when filtering events For more information, check [LOG_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#log-level). |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.metricLevel">metric_level</a></code> | <code>str</code> | METRIC_LEVEL value to control whether to emit metrics to Event Table For more information, check [METRIC_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#metric-level). |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.nullInputBehavior">null_input_behavior</a></code> | <code>str</code> | Specifies the behavior of the function when called with null inputs. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.packages">packages</a></code> | <code>typing.List[str]</code> | The name and version number of packages required as dependencies. The value should be of the form `package_name==version_number`. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.returnResultsBehavior">return_results_behavior</a></code> | <code>str</code> | Specifies the behavior of the function when returning results. Valid values are (case-insensitive): `VOLATILE` \| `IMMUTABLE`. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.secrets">secrets</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecrets">FunctionPythonSecrets</a>]</code> | secrets block. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonTimeouts">FunctionPythonTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.traceLevel">trace_level</a></code> | <code>str</code> | Trace level value to use when generating/filtering trace events For more information, check [TRACE_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#trace-level). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.database"></a>

```python
database: str
```

- *Type:* str

The database in which to create the function.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/function_python#database FunctionPython#database}

---

##### `handler`<sup>Required</sup> <a name="handler" id="@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.handler"></a>

```python
handler: str
```

- *Type:* str

The name of the handler function or class.

If the handler is for a scalar UDF, returning a non-tabular value, the HANDLER value should be a function name. If the handler code is in-line with the CREATE FUNCTION statement, you can use the function name alone. When the handler code is referenced at a stage, this value should be qualified with the module name, as in the following form: `my_module.my_function`. If the handler is for a tabular UDF, the HANDLER value should be the name of a handler class.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/function_python#handler FunctionPython#handler}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the function;

the identifier does not need to be unique for the schema in which the function is created because UDFs are identified and resolved by the combination of the name and argument types. Check the [docs](https://docs.snowflake.com/en/sql-reference/sql/create-function#all-languages). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/function_python#name FunctionPython#name}

---

##### `return_type`<sup>Required</sup> <a name="return_type" id="@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.returnType"></a>

```python
return_type: str
```

- *Type:* str

Specifies the results returned by the UDF, which determines the UDF type.

Use `<result_data_type>` to create a scalar UDF that returns a single value with the specified data type. Use `TABLE (col_name col_data_type, ...)` to creates a table UDF that returns tabular results with the specified table column(s) and column type(s). For the details, consult the [docs](https://docs.snowflake.com/en/sql-reference/sql/create-function#all-languages).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/function_python#return_type FunctionPython#return_type}

---

##### `runtime_version`<sup>Required</sup> <a name="runtime_version" id="@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.runtimeVersion"></a>

```python
runtime_version: str
```

- *Type:* str

Specifies the Python version to use. The supported versions of Python are: 3.9, 3.10, and 3.11.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/function_python#runtime_version FunctionPython#runtime_version}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.schema"></a>

```python
schema: str
```

- *Type:* str

The schema in which to create the function.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/function_python#schema FunctionPython#schema}

---

##### `arguments`<sup>Optional</sup> <a name="arguments" id="@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.arguments"></a>

```python
arguments: IResolvable | typing.List[FunctionPythonArguments]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArguments">FunctionPythonArguments</a>]

arguments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/function_python#arguments FunctionPython#arguments}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

(Default: `user-defined function`) Specifies a comment for the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/function_python#comment FunctionPython#comment}

---

##### `enable_console_output`<sup>Optional</sup> <a name="enable_console_output" id="@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.enableConsoleOutput"></a>

```python
enable_console_output: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Enable stdout/stderr fast path logging for anonymous stored procs.

This is a public parameter (similar to LOG_LEVEL). For more information, check [ENABLE_CONSOLE_OUTPUT docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-console-output).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/function_python#enable_console_output FunctionPython#enable_console_output}

---

##### `external_access_integrations`<sup>Optional</sup> <a name="external_access_integrations" id="@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.externalAccessIntegrations"></a>

```python
external_access_integrations: typing.List[str]
```

- *Type:* typing.List[str]

The names of [external access integrations](https://docs.snowflake.com/en/sql-reference/sql/create-external-access-integration) needed in order for this function’s handler code to access external networks. An external access integration specifies [network rules](https://docs.snowflake.com/en/sql-reference/sql/create-network-rule) and [secrets](https://docs.snowflake.com/en/sql-reference/sql/create-secret) that specify external locations and credentials (if any) allowed for use by handler code when making requests of an external network, such as an external REST API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/function_python#external_access_integrations FunctionPython#external_access_integrations}

---

##### `function_definition`<sup>Optional</sup> <a name="function_definition" id="@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.functionDefinition"></a>

```python
function_definition: str
```

- *Type:* str

Defines the handler code executed when the UDF is called.

Wrapping `$$` signs are added by the provider automatically; do not include them. The `function_definition` value must be Python source code. For more information, see [Introduction to Python UDFs](https://docs.snowflake.com/en/developer-guide/udf/python/udf-python-introduction). To mitigate permadiff on this field, the provider replaces blank characters with a space. This can lead to false positives in cases where a change in case or run of whitespace is semantically significant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/function_python#function_definition FunctionPython#function_definition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/function_python#id FunctionPython#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imports`<sup>Optional</sup> <a name="imports" id="@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.imports"></a>

```python
imports: IResolvable | typing.List[FunctionPythonImports]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImports">FunctionPythonImports</a>]

imports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/function_python#imports FunctionPython#imports}

---

##### `is_aggregate`<sup>Optional</sup> <a name="is_aggregate" id="@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.isAggregate"></a>

```python
is_aggregate: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies that the function is an aggregate function.

For more information about user-defined aggregate functions, see [Python user-defined aggregate functions](https://docs.snowflake.com/en/developer-guide/udf/python/udf-python-aggregate-functions). Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/function_python#is_aggregate FunctionPython#is_aggregate}

---

##### `is_secure`<sup>Optional</sup> <a name="is_secure" id="@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.isSecure"></a>

```python
is_secure: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies that the function is secure.

By design, the Snowflake's `SHOW FUNCTIONS` command does not provide information about secure functions (consult [function docs](https://docs.snowflake.com/en/sql-reference/sql/create-function#id1) and [Protecting Sensitive Information with Secure UDFs and Stored Procedures](https://docs.snowflake.com/en/developer-guide/secure-udf-procedure)) which is essential to manage/import function with Terraform. Use the role owning the function while managing secure functions. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/function_python#is_secure FunctionPython#is_secure}

---

##### `log_level`<sup>Optional</sup> <a name="log_level" id="@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.logLevel"></a>

```python
log_level: str
```

- *Type:* str

LOG_LEVEL to use when filtering events For more information, check [LOG_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#log-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/function_python#log_level FunctionPython#log_level}

---

##### `metric_level`<sup>Optional</sup> <a name="metric_level" id="@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.metricLevel"></a>

```python
metric_level: str
```

- *Type:* str

METRIC_LEVEL value to control whether to emit metrics to Event Table For more information, check [METRIC_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#metric-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/function_python#metric_level FunctionPython#metric_level}

---

##### `null_input_behavior`<sup>Optional</sup> <a name="null_input_behavior" id="@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.nullInputBehavior"></a>

```python
null_input_behavior: str
```

- *Type:* str

Specifies the behavior of the function when called with null inputs.

Valid values are (case-insensitive): `CALLED ON NULL INPUT` | `RETURNS NULL ON NULL INPUT`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/function_python#null_input_behavior FunctionPython#null_input_behavior}

---

##### `packages`<sup>Optional</sup> <a name="packages" id="@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.packages"></a>

```python
packages: typing.List[str]
```

- *Type:* typing.List[str]

The name and version number of packages required as dependencies. The value should be of the form `package_name==version_number`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/function_python#packages FunctionPython#packages}

---

##### `return_results_behavior`<sup>Optional</sup> <a name="return_results_behavior" id="@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.returnResultsBehavior"></a>

```python
return_results_behavior: str
```

- *Type:* str

Specifies the behavior of the function when returning results. Valid values are (case-insensitive): `VOLATILE` | `IMMUTABLE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/function_python#return_results_behavior FunctionPython#return_results_behavior}

---

##### `secrets`<sup>Optional</sup> <a name="secrets" id="@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.secrets"></a>

```python
secrets: IResolvable | typing.List[FunctionPythonSecrets]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecrets">FunctionPythonSecrets</a>]

secrets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/function_python#secrets FunctionPython#secrets}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.timeouts"></a>

```python
timeouts: FunctionPythonTimeouts
```

- *Type:* <a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonTimeouts">FunctionPythonTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/function_python#timeouts FunctionPython#timeouts}

---

##### `trace_level`<sup>Optional</sup> <a name="trace_level" id="@cdktf/provider-snowflake.functionPython.FunctionPythonConfig.property.traceLevel"></a>

```python
trace_level: str
```

- *Type:* str

Trace level value to use when generating/filtering trace events For more information, check [TRACE_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#trace-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/function_python#trace_level FunctionPython#trace_level}

---

### FunctionPythonImports <a name="FunctionPythonImports" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImports"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImports.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import function_python

functionPython.FunctionPythonImports(
  path_on_stage: str,
  stage_location: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImports.property.pathOnStage">path_on_stage</a></code> | <code>str</code> | Path for import on stage, without the leading `/`. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImports.property.stageLocation">stage_location</a></code> | <code>str</code> | Stage location without leading `@`. |

---

##### `path_on_stage`<sup>Required</sup> <a name="path_on_stage" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImports.property.pathOnStage"></a>

```python
path_on_stage: str
```

- *Type:* str

Path for import on stage, without the leading `/`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/function_python#path_on_stage FunctionPython#path_on_stage}

---

##### `stage_location`<sup>Required</sup> <a name="stage_location" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImports.property.stageLocation"></a>

```python
stage_location: str
```

- *Type:* str

Stage location without leading `@`.

To use your user's stage set this to `~`, otherwise pass fully qualified name of the stage (with every part contained in double quotes or use `snowflake_stage.<your stage's resource name>.fully_qualified_name` if you manage this stage through terraform).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/function_python#stage_location FunctionPython#stage_location}

---

### FunctionPythonParameters <a name="FunctionPythonParameters" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParameters.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import function_python

functionPython.FunctionPythonParameters()
```


### FunctionPythonParametersEnableConsoleOutput <a name="FunctionPythonParametersEnableConsoleOutput" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutput.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import function_python

functionPython.FunctionPythonParametersEnableConsoleOutput()
```


### FunctionPythonParametersLogLevel <a name="FunctionPythonParametersLogLevel" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevel.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import function_python

functionPython.FunctionPythonParametersLogLevel()
```


### FunctionPythonParametersMetricLevel <a name="FunctionPythonParametersMetricLevel" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevel.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import function_python

functionPython.FunctionPythonParametersMetricLevel()
```


### FunctionPythonParametersTraceLevel <a name="FunctionPythonParametersTraceLevel" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevel.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import function_python

functionPython.FunctionPythonParametersTraceLevel()
```


### FunctionPythonSecrets <a name="FunctionPythonSecrets" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecrets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecrets.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import function_python

functionPython.FunctionPythonSecrets(
  secret_id: str,
  secret_variable_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecrets.property.secretId">secret_id</a></code> | <code>str</code> | Fully qualified name of the allowed [secret](https://docs.snowflake.com/en/sql-reference/sql/create-secret). You will receive an error if you specify a SECRETS value whose secret isn’t also included in an integration specified by the EXTERNAL_ACCESS_INTEGRATIONS parameter. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecrets.property.secretVariableName">secret_variable_name</a></code> | <code>str</code> | The variable that will be used in handler code when retrieving information from the secret. |

---

##### `secret_id`<sup>Required</sup> <a name="secret_id" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecrets.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

Fully qualified name of the allowed [secret](https://docs.snowflake.com/en/sql-reference/sql/create-secret). You will receive an error if you specify a SECRETS value whose secret isn’t also included in an integration specified by the EXTERNAL_ACCESS_INTEGRATIONS parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/function_python#secret_id FunctionPython#secret_id}

---

##### `secret_variable_name`<sup>Required</sup> <a name="secret_variable_name" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecrets.property.secretVariableName"></a>

```python
secret_variable_name: str
```

- *Type:* str

The variable that will be used in handler code when retrieving information from the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/function_python#secret_variable_name FunctionPython#secret_variable_name}

---

### FunctionPythonShowOutput <a name="FunctionPythonShowOutput" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutput.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import function_python

functionPython.FunctionPythonShowOutput()
```


### FunctionPythonTimeouts <a name="FunctionPythonTimeouts" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import function_python

functionPython.FunctionPythonTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/function_python#create FunctionPython#create}. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/function_python#delete FunctionPython#delete}. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/function_python#read FunctionPython#read}. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/function_python#update FunctionPython#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/function_python#create FunctionPython#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/function_python#delete FunctionPython#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/function_python#read FunctionPython#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/function_python#update FunctionPython#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FunctionPythonArgumentsList <a name="FunctionPythonArgumentsList" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import function_python

functionPython.FunctionPythonArgumentsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FunctionPythonArgumentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArguments">FunctionPythonArguments</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[FunctionPythonArguments]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArguments">FunctionPythonArguments</a>]

---


### FunctionPythonArgumentsOutputReference <a name="FunctionPythonArgumentsOutputReference" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import function_python

functionPython.FunctionPythonArgumentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.resetArgDefaultValue">reset_arg_default_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_arg_default_value` <a name="reset_arg_default_value" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.resetArgDefaultValue"></a>

```python
def reset_arg_default_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.property.argDataTypeInput">arg_data_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.property.argDefaultValueInput">arg_default_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.property.argNameInput">arg_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.property.argDataType">arg_data_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.property.argDefaultValue">arg_default_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.property.argName">arg_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArguments">FunctionPythonArguments</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arg_data_type_input`<sup>Optional</sup> <a name="arg_data_type_input" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.property.argDataTypeInput"></a>

```python
arg_data_type_input: str
```

- *Type:* str

---

##### `arg_default_value_input`<sup>Optional</sup> <a name="arg_default_value_input" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.property.argDefaultValueInput"></a>

```python
arg_default_value_input: str
```

- *Type:* str

---

##### `arg_name_input`<sup>Optional</sup> <a name="arg_name_input" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.property.argNameInput"></a>

```python
arg_name_input: str
```

- *Type:* str

---

##### `arg_data_type`<sup>Required</sup> <a name="arg_data_type" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.property.argDataType"></a>

```python
arg_data_type: str
```

- *Type:* str

---

##### `arg_default_value`<sup>Required</sup> <a name="arg_default_value" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.property.argDefaultValue"></a>

```python
arg_default_value: str
```

- *Type:* str

---

##### `arg_name`<sup>Required</sup> <a name="arg_name" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.property.argName"></a>

```python
arg_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.functionPython.FunctionPythonArgumentsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FunctionPythonArguments
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonArguments">FunctionPythonArguments</a>

---


### FunctionPythonImportsList <a name="FunctionPythonImportsList" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import function_python

functionPython.FunctionPythonImportsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImportsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImportsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImportsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImportsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImportsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImportsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImportsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImportsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FunctionPythonImportsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImportsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImportsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImportsList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImports">FunctionPythonImports</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[FunctionPythonImports]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImports">FunctionPythonImports</a>]

---


### FunctionPythonImportsOutputReference <a name="FunctionPythonImportsOutputReference" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import function_python

functionPython.FunctionPythonImportsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.property.pathOnStageInput">path_on_stage_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.property.stageLocationInput">stage_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.property.pathOnStage">path_on_stage</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.property.stageLocation">stage_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImports">FunctionPythonImports</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `path_on_stage_input`<sup>Optional</sup> <a name="path_on_stage_input" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.property.pathOnStageInput"></a>

```python
path_on_stage_input: str
```

- *Type:* str

---

##### `stage_location_input`<sup>Optional</sup> <a name="stage_location_input" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.property.stageLocationInput"></a>

```python
stage_location_input: str
```

- *Type:* str

---

##### `path_on_stage`<sup>Required</sup> <a name="path_on_stage" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.property.pathOnStage"></a>

```python
path_on_stage: str
```

- *Type:* str

---

##### `stage_location`<sup>Required</sup> <a name="stage_location" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.property.stageLocation"></a>

```python
stage_location: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.functionPython.FunctionPythonImportsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FunctionPythonImports
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonImports">FunctionPythonImports</a>

---


### FunctionPythonParametersEnableConsoleOutputList <a name="FunctionPythonParametersEnableConsoleOutputList" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import function_python

functionPython.FunctionPythonParametersEnableConsoleOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FunctionPythonParametersEnableConsoleOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### FunctionPythonParametersEnableConsoleOutputOutputReference <a name="FunctionPythonParametersEnableConsoleOutputOutputReference" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import function_python

functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutput">FunctionPythonParametersEnableConsoleOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputOutputReference.property.internalValue"></a>

```python
internal_value: FunctionPythonParametersEnableConsoleOutput
```

- *Type:* <a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutput">FunctionPythonParametersEnableConsoleOutput</a>

---


### FunctionPythonParametersList <a name="FunctionPythonParametersList" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import function_python

functionPython.FunctionPythonParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FunctionPythonParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### FunctionPythonParametersLogLevelList <a name="FunctionPythonParametersLogLevelList" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import function_python

functionPython.FunctionPythonParametersLogLevelList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FunctionPythonParametersLogLevelOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### FunctionPythonParametersLogLevelOutputReference <a name="FunctionPythonParametersLogLevelOutputReference" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import function_python

functionPython.FunctionPythonParametersLogLevelOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevel">FunctionPythonParametersLogLevel</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelOutputReference.property.internalValue"></a>

```python
internal_value: FunctionPythonParametersLogLevel
```

- *Type:* <a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevel">FunctionPythonParametersLogLevel</a>

---


### FunctionPythonParametersMetricLevelList <a name="FunctionPythonParametersMetricLevelList" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import function_python

functionPython.FunctionPythonParametersMetricLevelList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FunctionPythonParametersMetricLevelOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### FunctionPythonParametersMetricLevelOutputReference <a name="FunctionPythonParametersMetricLevelOutputReference" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import function_python

functionPython.FunctionPythonParametersMetricLevelOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevel">FunctionPythonParametersMetricLevel</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelOutputReference.property.internalValue"></a>

```python
internal_value: FunctionPythonParametersMetricLevel
```

- *Type:* <a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevel">FunctionPythonParametersMetricLevel</a>

---


### FunctionPythonParametersOutputReference <a name="FunctionPythonParametersOutputReference" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import function_python

functionPython.FunctionPythonParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.property.enableConsoleOutput">enable_console_output</a></code> | <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputList">FunctionPythonParametersEnableConsoleOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.property.logLevel">log_level</a></code> | <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelList">FunctionPythonParametersLogLevelList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.property.metricLevel">metric_level</a></code> | <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelList">FunctionPythonParametersMetricLevelList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.property.traceLevel">trace_level</a></code> | <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelList">FunctionPythonParametersTraceLevelList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParameters">FunctionPythonParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_console_output`<sup>Required</sup> <a name="enable_console_output" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.property.enableConsoleOutput"></a>

```python
enable_console_output: FunctionPythonParametersEnableConsoleOutputList
```

- *Type:* <a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersEnableConsoleOutputList">FunctionPythonParametersEnableConsoleOutputList</a>

---

##### `log_level`<sup>Required</sup> <a name="log_level" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.property.logLevel"></a>

```python
log_level: FunctionPythonParametersLogLevelList
```

- *Type:* <a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersLogLevelList">FunctionPythonParametersLogLevelList</a>

---

##### `metric_level`<sup>Required</sup> <a name="metric_level" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.property.metricLevel"></a>

```python
metric_level: FunctionPythonParametersMetricLevelList
```

- *Type:* <a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersMetricLevelList">FunctionPythonParametersMetricLevelList</a>

---

##### `trace_level`<sup>Required</sup> <a name="trace_level" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.property.traceLevel"></a>

```python
trace_level: FunctionPythonParametersTraceLevelList
```

- *Type:* <a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelList">FunctionPythonParametersTraceLevelList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersOutputReference.property.internalValue"></a>

```python
internal_value: FunctionPythonParameters
```

- *Type:* <a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParameters">FunctionPythonParameters</a>

---


### FunctionPythonParametersTraceLevelList <a name="FunctionPythonParametersTraceLevelList" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import function_python

functionPython.FunctionPythonParametersTraceLevelList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FunctionPythonParametersTraceLevelOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### FunctionPythonParametersTraceLevelOutputReference <a name="FunctionPythonParametersTraceLevelOutputReference" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import function_python

functionPython.FunctionPythonParametersTraceLevelOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevel">FunctionPythonParametersTraceLevel</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevelOutputReference.property.internalValue"></a>

```python
internal_value: FunctionPythonParametersTraceLevel
```

- *Type:* <a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonParametersTraceLevel">FunctionPythonParametersTraceLevel</a>

---


### FunctionPythonSecretsList <a name="FunctionPythonSecretsList" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import function_python

functionPython.FunctionPythonSecretsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FunctionPythonSecretsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecrets">FunctionPythonSecrets</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[FunctionPythonSecrets]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecrets">FunctionPythonSecrets</a>]

---


### FunctionPythonSecretsOutputReference <a name="FunctionPythonSecretsOutputReference" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import function_python

functionPython.FunctionPythonSecretsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.property.secretIdInput">secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.property.secretVariableNameInput">secret_variable_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.property.secretId">secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.property.secretVariableName">secret_variable_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecrets">FunctionPythonSecrets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secret_id_input`<sup>Optional</sup> <a name="secret_id_input" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.property.secretIdInput"></a>

```python
secret_id_input: str
```

- *Type:* str

---

##### `secret_variable_name_input`<sup>Optional</sup> <a name="secret_variable_name_input" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.property.secretVariableNameInput"></a>

```python
secret_variable_name_input: str
```

- *Type:* str

---

##### `secret_id`<sup>Required</sup> <a name="secret_id" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

---

##### `secret_variable_name`<sup>Required</sup> <a name="secret_variable_name" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.property.secretVariableName"></a>

```python
secret_variable_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.functionPython.FunctionPythonSecretsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FunctionPythonSecrets
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonSecrets">FunctionPythonSecrets</a>

---


### FunctionPythonShowOutputList <a name="FunctionPythonShowOutputList" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import function_python

functionPython.FunctionPythonShowOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FunctionPythonShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### FunctionPythonShowOutputOutputReference <a name="FunctionPythonShowOutputOutputReference" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import function_python

functionPython.FunctionPythonShowOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.property.argumentsRaw">arguments_raw</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.property.catalogName">catalog_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.property.externalAccessIntegrations">external_access_integrations</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.property.isAggregate">is_aggregate</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.property.isAnsi">is_ansi</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.property.isBuiltin">is_builtin</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.property.isDataMetric">is_data_metric</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.property.isExternalFunction">is_external_function</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.property.isMemoizable">is_memoizable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.property.isSecure">is_secure</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.property.isTableFunction">is_table_function</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.property.language">language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.property.maxNumArguments">max_num_arguments</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.property.minNumArguments">min_num_arguments</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.property.secrets">secrets</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.property.validForClustering">valid_for_clustering</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutput">FunctionPythonShowOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arguments_raw`<sup>Required</sup> <a name="arguments_raw" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.property.argumentsRaw"></a>

```python
arguments_raw: str
```

- *Type:* str

---

##### `catalog_name`<sup>Required</sup> <a name="catalog_name" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.property.catalogName"></a>

```python
catalog_name: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `external_access_integrations`<sup>Required</sup> <a name="external_access_integrations" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.property.externalAccessIntegrations"></a>

```python
external_access_integrations: str
```

- *Type:* str

---

##### `is_aggregate`<sup>Required</sup> <a name="is_aggregate" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.property.isAggregate"></a>

```python
is_aggregate: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_ansi`<sup>Required</sup> <a name="is_ansi" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.property.isAnsi"></a>

```python
is_ansi: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_builtin`<sup>Required</sup> <a name="is_builtin" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.property.isBuiltin"></a>

```python
is_builtin: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_data_metric`<sup>Required</sup> <a name="is_data_metric" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.property.isDataMetric"></a>

```python
is_data_metric: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_external_function`<sup>Required</sup> <a name="is_external_function" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.property.isExternalFunction"></a>

```python
is_external_function: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_memoizable`<sup>Required</sup> <a name="is_memoizable" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.property.isMemoizable"></a>

```python
is_memoizable: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_secure`<sup>Required</sup> <a name="is_secure" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.property.isSecure"></a>

```python
is_secure: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_table_function`<sup>Required</sup> <a name="is_table_function" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.property.isTableFunction"></a>

```python
is_table_function: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `language`<sup>Required</sup> <a name="language" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.property.language"></a>

```python
language: str
```

- *Type:* str

---

##### `max_num_arguments`<sup>Required</sup> <a name="max_num_arguments" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.property.maxNumArguments"></a>

```python
max_num_arguments: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_num_arguments`<sup>Required</sup> <a name="min_num_arguments" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.property.minNumArguments"></a>

```python
min_num_arguments: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `secrets`<sup>Required</sup> <a name="secrets" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.property.secrets"></a>

```python
secrets: str
```

- *Type:* str

---

##### `valid_for_clustering`<sup>Required</sup> <a name="valid_for_clustering" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.property.validForClustering"></a>

```python
valid_for_clustering: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutputOutputReference.property.internalValue"></a>

```python
internal_value: FunctionPythonShowOutput
```

- *Type:* <a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonShowOutput">FunctionPythonShowOutput</a>

---


### FunctionPythonTimeoutsOutputReference <a name="FunctionPythonTimeoutsOutputReference" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import function_python

functionPython.FunctionPythonTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonTimeouts">FunctionPythonTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.functionPython.FunctionPythonTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FunctionPythonTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.functionPython.FunctionPythonTimeouts">FunctionPythonTimeouts</a>

---



