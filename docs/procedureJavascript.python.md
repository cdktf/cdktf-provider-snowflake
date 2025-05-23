# `procedureJavascript` Submodule <a name="`procedureJavascript` Submodule" id="@cdktf/provider-snowflake.procedureJavascript"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProcedureJavascript <a name="ProcedureJavascript" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/procedure_javascript snowflake_procedure_javascript}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure_javascript

procedureJavascript.ProcedureJavascript(
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
  procedure_definition: str,
  return_type: str,
  schema: str,
  arguments: typing.Union[IResolvable, typing.List[ProcedureJavascriptArguments]] = None,
  comment: str = None,
  enable_console_output: typing.Union[bool, IResolvable] = None,
  execute_as: str = None,
  id: str = None,
  is_secure: str = None,
  log_level: str = None,
  metric_level: str = None,
  null_input_behavior: str = None,
  timeouts: ProcedureJavascriptTimeouts = None,
  trace_level: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.Initializer.parameter.database">database</a></code> | <code>str</code> | The database in which to create the procedure. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the procedure; |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.Initializer.parameter.procedureDefinition">procedure_definition</a></code> | <code>str</code> | Defines the code executed by the stored procedure. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.Initializer.parameter.returnType">return_type</a></code> | <code>str</code> | Specifies the type of the result returned by the stored procedure. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.Initializer.parameter.schema">schema</a></code> | <code>str</code> | The schema in which to create the procedure. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.Initializer.parameter.arguments">arguments</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArguments">ProcedureJavascriptArguments</a>]]</code> | arguments block. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.Initializer.parameter.comment">comment</a></code> | <code>str</code> | (Default: `user-defined procedure`) Specifies a comment for the procedure. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.Initializer.parameter.enableConsoleOutput">enable_console_output</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable stdout/stderr fast path logging for anonyous stored procs. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.Initializer.parameter.executeAs">execute_as</a></code> | <code>str</code> | Specifies whether the stored procedure executes with the privileges of the owner (an “owner’s rights” stored procedure) or with the privileges of the caller (a “caller’s rights” stored procedure). |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/procedure_javascript#id ProcedureJavascript#id}. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.Initializer.parameter.isSecure">is_secure</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies that the procedure is secure. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.Initializer.parameter.logLevel">log_level</a></code> | <code>str</code> | LOG_LEVEL to use when filtering events For more information, check [LOG_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#log-level). |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.Initializer.parameter.metricLevel">metric_level</a></code> | <code>str</code> | METRIC_LEVEL value to control whether to emit metrics to Event Table For more information, check [METRIC_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#metric-level). |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.Initializer.parameter.nullInputBehavior">null_input_behavior</a></code> | <code>str</code> | Specifies the behavior of the procedure when called with null inputs. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptTimeouts">ProcedureJavascriptTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.Initializer.parameter.traceLevel">trace_level</a></code> | <code>str</code> | Trace level value to use when generating/filtering trace events For more information, check [TRACE_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#trace-level). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.Initializer.parameter.database"></a>

- *Type:* str

The database in which to create the procedure.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/procedure_javascript#database ProcedureJavascript#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.Initializer.parameter.name"></a>

- *Type:* str

The name of the procedure;

the identifier does not need to be unique for the schema in which the procedure is created because stored procedures are [identified and resolved by the combination of the name and argument types](https://docs.snowflake.com/en/developer-guide/udf-stored-procedure-naming-conventions.html#label-procedure-function-name-overloading). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/procedure_javascript#name ProcedureJavascript#name}

---

##### `procedure_definition`<sup>Required</sup> <a name="procedure_definition" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.Initializer.parameter.procedureDefinition"></a>

- *Type:* str

Defines the code executed by the stored procedure.

The definition can consist of any valid code. Wrapping `$$` signs are added by the provider automatically; do not include them. The `procedure_definition` value must be JavaScript source code. For more information, see [JavaScript](https://docs.snowflake.com/en/developer-guide/stored-procedure/stored-procedures-javascript). To mitigate permadiff on this field, the provider replaces blank characters with a space. This can lead to false positives in cases where a change in case or run of whitespace is semantically significant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/procedure_javascript#procedure_definition ProcedureJavascript#procedure_definition}

---

##### `return_type`<sup>Required</sup> <a name="return_type" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.Initializer.parameter.returnType"></a>

- *Type:* str

Specifies the type of the result returned by the stored procedure.

For `<result_data_type>`, use the Snowflake data type that corresponds to the type of the language that you are using (see [SQL and JavaScript data type mapping](https://docs.snowflake.com/en/developer-guide/stored-procedure/stored-procedures-javascript.html#label-stored-procedure-data-type-mapping)). For `RETURNS TABLE ( [ col_name col_data_type [ , ... ] ] )`, if you know the Snowflake data types of the columns in the returned table, specify the column names and types. Otherwise (e.g. if you are determining the column types during run time), you can omit the column names and types (i.e. `TABLE ()`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/procedure_javascript#return_type ProcedureJavascript#return_type}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.Initializer.parameter.schema"></a>

- *Type:* str

The schema in which to create the procedure.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/procedure_javascript#schema ProcedureJavascript#schema}

---

##### `arguments`<sup>Optional</sup> <a name="arguments" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.Initializer.parameter.arguments"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArguments">ProcedureJavascriptArguments</a>]]

arguments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/procedure_javascript#arguments ProcedureJavascript#arguments}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.Initializer.parameter.comment"></a>

- *Type:* str

(Default: `user-defined procedure`) Specifies a comment for the procedure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/procedure_javascript#comment ProcedureJavascript#comment}

---

##### `enable_console_output`<sup>Optional</sup> <a name="enable_console_output" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.Initializer.parameter.enableConsoleOutput"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable stdout/stderr fast path logging for anonyous stored procs.

This is a public parameter (similar to LOG_LEVEL). For more information, check [ENABLE_CONSOLE_OUTPUT docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-console-output).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/procedure_javascript#enable_console_output ProcedureJavascript#enable_console_output}

---

##### `execute_as`<sup>Optional</sup> <a name="execute_as" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.Initializer.parameter.executeAs"></a>

- *Type:* str

Specifies whether the stored procedure executes with the privileges of the owner (an “owner’s rights” stored procedure) or with the privileges of the caller (a “caller’s rights” stored procedure).

If you execute the statement CREATE PROCEDURE … EXECUTE AS CALLER, then in the future the procedure will execute as a caller’s rights procedure. If you execute CREATE PROCEDURE … EXECUTE AS OWNER, then the procedure will execute as an owner’s rights procedure. For more information, see [Understanding caller’s rights and owner’s rights stored procedures](https://docs.snowflake.com/en/developer-guide/stored-procedure/stored-procedures-rights). Valid values are (case-insensitive): `CALLER` | `OWNER`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/procedure_javascript#execute_as ProcedureJavascript#execute_as}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/procedure_javascript#id ProcedureJavascript#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_secure`<sup>Optional</sup> <a name="is_secure" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.Initializer.parameter.isSecure"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies that the procedure is secure.

For more information about secure procedures, see [Protecting Sensitive Information with Secure UDFs and Stored Procedures](https://docs.snowflake.com/en/developer-guide/secure-udf-procedure). Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/procedure_javascript#is_secure ProcedureJavascript#is_secure}

---

##### `log_level`<sup>Optional</sup> <a name="log_level" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.Initializer.parameter.logLevel"></a>

- *Type:* str

LOG_LEVEL to use when filtering events For more information, check [LOG_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#log-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/procedure_javascript#log_level ProcedureJavascript#log_level}

---

##### `metric_level`<sup>Optional</sup> <a name="metric_level" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.Initializer.parameter.metricLevel"></a>

- *Type:* str

METRIC_LEVEL value to control whether to emit metrics to Event Table For more information, check [METRIC_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#metric-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/procedure_javascript#metric_level ProcedureJavascript#metric_level}

---

##### `null_input_behavior`<sup>Optional</sup> <a name="null_input_behavior" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.Initializer.parameter.nullInputBehavior"></a>

- *Type:* str

Specifies the behavior of the procedure when called with null inputs.

Valid values are (case-insensitive): `CALLED ON NULL INPUT` | `RETURNS NULL ON NULL INPUT`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/procedure_javascript#null_input_behavior ProcedureJavascript#null_input_behavior}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptTimeouts">ProcedureJavascriptTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/procedure_javascript#timeouts ProcedureJavascript#timeouts}

---

##### `trace_level`<sup>Optional</sup> <a name="trace_level" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.Initializer.parameter.traceLevel"></a>

- *Type:* str

Trace level value to use when generating/filtering trace events For more information, check [TRACE_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#trace-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/procedure_javascript#trace_level ProcedureJavascript#trace_level}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.putArguments">put_arguments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.resetArguments">reset_arguments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.resetEnableConsoleOutput">reset_enable_console_output</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.resetExecuteAs">reset_execute_as</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.resetIsSecure">reset_is_secure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.resetLogLevel">reset_log_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.resetMetricLevel">reset_metric_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.resetNullInputBehavior">reset_null_input_behavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.resetTraceLevel">reset_trace_level</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_arguments` <a name="put_arguments" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.putArguments"></a>

```python
def put_arguments(
  value: typing.Union[IResolvable, typing.List[ProcedureJavascriptArguments]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.putArguments.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArguments">ProcedureJavascriptArguments</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/procedure_javascript#create ProcedureJavascript#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/procedure_javascript#delete ProcedureJavascript#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/procedure_javascript#read ProcedureJavascript#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/procedure_javascript#update ProcedureJavascript#update}.

---

##### `reset_arguments` <a name="reset_arguments" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.resetArguments"></a>

```python
def reset_arguments() -> None
```

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_enable_console_output` <a name="reset_enable_console_output" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.resetEnableConsoleOutput"></a>

```python
def reset_enable_console_output() -> None
```

##### `reset_execute_as` <a name="reset_execute_as" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.resetExecuteAs"></a>

```python
def reset_execute_as() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_secure` <a name="reset_is_secure" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.resetIsSecure"></a>

```python
def reset_is_secure() -> None
```

##### `reset_log_level` <a name="reset_log_level" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.resetLogLevel"></a>

```python
def reset_log_level() -> None
```

##### `reset_metric_level` <a name="reset_metric_level" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.resetMetricLevel"></a>

```python
def reset_metric_level() -> None
```

##### `reset_null_input_behavior` <a name="reset_null_input_behavior" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.resetNullInputBehavior"></a>

```python
def reset_null_input_behavior() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_trace_level` <a name="reset_trace_level" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.resetTraceLevel"></a>

```python
def reset_trace_level() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ProcedureJavascript resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.isConstruct"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure_javascript

procedureJavascript.ProcedureJavascript.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure_javascript

procedureJavascript.ProcedureJavascript.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure_javascript

procedureJavascript.ProcedureJavascript.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure_javascript

procedureJavascript.ProcedureJavascript.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ProcedureJavascript resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ProcedureJavascript to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ProcedureJavascript that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/procedure_javascript#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ProcedureJavascript to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.arguments">arguments</a></code> | <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsList">ProcedureJavascriptArgumentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.fullyQualifiedName">fully_qualified_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.parameters">parameters</a></code> | <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersList">ProcedureJavascriptParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.procedureLanguage">procedure_language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.showOutput">show_output</a></code> | <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputList">ProcedureJavascriptShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptTimeoutsOutputReference">ProcedureJavascriptTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.argumentsInput">arguments_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArguments">ProcedureJavascriptArguments</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.enableConsoleOutputInput">enable_console_output_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.executeAsInput">execute_as_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.isSecureInput">is_secure_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.logLevelInput">log_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.metricLevelInput">metric_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.nullInputBehaviorInput">null_input_behavior_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.procedureDefinitionInput">procedure_definition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.returnTypeInput">return_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.schemaInput">schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptTimeouts">ProcedureJavascriptTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.traceLevelInput">trace_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.enableConsoleOutput">enable_console_output</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.executeAs">execute_as</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.isSecure">is_secure</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.logLevel">log_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.metricLevel">metric_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.nullInputBehavior">null_input_behavior</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.procedureDefinition">procedure_definition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.returnType">return_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.schema">schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.traceLevel">trace_level</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arguments`<sup>Required</sup> <a name="arguments" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.arguments"></a>

```python
arguments: ProcedureJavascriptArgumentsList
```

- *Type:* <a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsList">ProcedureJavascriptArgumentsList</a>

---

##### `fully_qualified_name`<sup>Required</sup> <a name="fully_qualified_name" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.fullyQualifiedName"></a>

```python
fully_qualified_name: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.parameters"></a>

```python
parameters: ProcedureJavascriptParametersList
```

- *Type:* <a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersList">ProcedureJavascriptParametersList</a>

---

##### `procedure_language`<sup>Required</sup> <a name="procedure_language" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.procedureLanguage"></a>

```python
procedure_language: str
```

- *Type:* str

---

##### `show_output`<sup>Required</sup> <a name="show_output" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.showOutput"></a>

```python
show_output: ProcedureJavascriptShowOutputList
```

- *Type:* <a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputList">ProcedureJavascriptShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.timeouts"></a>

```python
timeouts: ProcedureJavascriptTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptTimeoutsOutputReference">ProcedureJavascriptTimeoutsOutputReference</a>

---

##### `arguments_input`<sup>Optional</sup> <a name="arguments_input" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.argumentsInput"></a>

```python
arguments_input: typing.Union[IResolvable, typing.List[ProcedureJavascriptArguments]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArguments">ProcedureJavascriptArguments</a>]]

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `enable_console_output_input`<sup>Optional</sup> <a name="enable_console_output_input" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.enableConsoleOutputInput"></a>

```python
enable_console_output_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `execute_as_input`<sup>Optional</sup> <a name="execute_as_input" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.executeAsInput"></a>

```python
execute_as_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_secure_input`<sup>Optional</sup> <a name="is_secure_input" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.isSecureInput"></a>

```python
is_secure_input: str
```

- *Type:* str

---

##### `log_level_input`<sup>Optional</sup> <a name="log_level_input" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.logLevelInput"></a>

```python
log_level_input: str
```

- *Type:* str

---

##### `metric_level_input`<sup>Optional</sup> <a name="metric_level_input" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.metricLevelInput"></a>

```python
metric_level_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `null_input_behavior_input`<sup>Optional</sup> <a name="null_input_behavior_input" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.nullInputBehaviorInput"></a>

```python
null_input_behavior_input: str
```

- *Type:* str

---

##### `procedure_definition_input`<sup>Optional</sup> <a name="procedure_definition_input" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.procedureDefinitionInput"></a>

```python
procedure_definition_input: str
```

- *Type:* str

---

##### `return_type_input`<sup>Optional</sup> <a name="return_type_input" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.returnTypeInput"></a>

```python
return_type_input: str
```

- *Type:* str

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.schemaInput"></a>

```python
schema_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ProcedureJavascriptTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptTimeouts">ProcedureJavascriptTimeouts</a>]

---

##### `trace_level_input`<sup>Optional</sup> <a name="trace_level_input" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.traceLevelInput"></a>

```python
trace_level_input: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `enable_console_output`<sup>Required</sup> <a name="enable_console_output" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.enableConsoleOutput"></a>

```python
enable_console_output: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `execute_as`<sup>Required</sup> <a name="execute_as" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.executeAs"></a>

```python
execute_as: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_secure`<sup>Required</sup> <a name="is_secure" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.isSecure"></a>

```python
is_secure: str
```

- *Type:* str

---

##### `log_level`<sup>Required</sup> <a name="log_level" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.logLevel"></a>

```python
log_level: str
```

- *Type:* str

---

##### `metric_level`<sup>Required</sup> <a name="metric_level" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.metricLevel"></a>

```python
metric_level: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `null_input_behavior`<sup>Required</sup> <a name="null_input_behavior" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.nullInputBehavior"></a>

```python
null_input_behavior: str
```

- *Type:* str

---

##### `procedure_definition`<sup>Required</sup> <a name="procedure_definition" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.procedureDefinition"></a>

```python
procedure_definition: str
```

- *Type:* str

---

##### `return_type`<sup>Required</sup> <a name="return_type" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.returnType"></a>

```python
return_type: str
```

- *Type:* str

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.schema"></a>

```python
schema: str
```

- *Type:* str

---

##### `trace_level`<sup>Required</sup> <a name="trace_level" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.traceLevel"></a>

```python
trace_level: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascript.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ProcedureJavascriptArguments <a name="ProcedureJavascriptArguments" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArguments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArguments.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure_javascript

procedureJavascript.ProcedureJavascriptArguments(
  arg_data_type: str,
  arg_name: str,
  arg_default_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArguments.property.argDataType">arg_data_type</a></code> | <code>str</code> | The argument type. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArguments.property.argName">arg_name</a></code> | <code>str</code> | The argument name. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArguments.property.argDefaultValue">arg_default_value</a></code> | <code>str</code> | Optional default value for the argument. |

---

##### `arg_data_type`<sup>Required</sup> <a name="arg_data_type" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArguments.property.argDataType"></a>

```python
arg_data_type: str
```

- *Type:* str

The argument type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/procedure_javascript#arg_data_type ProcedureJavascript#arg_data_type}

---

##### `arg_name`<sup>Required</sup> <a name="arg_name" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArguments.property.argName"></a>

```python
arg_name: str
```

- *Type:* str

The argument name.

The provider wraps it in double quotes by default, so be aware of that while referencing the argument in the procedure definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/procedure_javascript#arg_name ProcedureJavascript#arg_name}

---

##### `arg_default_value`<sup>Optional</sup> <a name="arg_default_value" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArguments.property.argDefaultValue"></a>

```python
arg_default_value: str
```

- *Type:* str

Optional default value for the argument.

For text values use single quotes. Numeric values can be unquoted. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/procedure_javascript#arg_default_value ProcedureJavascript#arg_default_value}

---

### ProcedureJavascriptConfig <a name="ProcedureJavascriptConfig" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure_javascript

procedureJavascript.ProcedureJavascriptConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  database: str,
  name: str,
  procedure_definition: str,
  return_type: str,
  schema: str,
  arguments: typing.Union[IResolvable, typing.List[ProcedureJavascriptArguments]] = None,
  comment: str = None,
  enable_console_output: typing.Union[bool, IResolvable] = None,
  execute_as: str = None,
  id: str = None,
  is_secure: str = None,
  log_level: str = None,
  metric_level: str = None,
  null_input_behavior: str = None,
  timeouts: ProcedureJavascriptTimeouts = None,
  trace_level: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptConfig.property.database">database</a></code> | <code>str</code> | The database in which to create the procedure. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptConfig.property.name">name</a></code> | <code>str</code> | The name of the procedure; |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptConfig.property.procedureDefinition">procedure_definition</a></code> | <code>str</code> | Defines the code executed by the stored procedure. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptConfig.property.returnType">return_type</a></code> | <code>str</code> | Specifies the type of the result returned by the stored procedure. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptConfig.property.schema">schema</a></code> | <code>str</code> | The schema in which to create the procedure. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptConfig.property.arguments">arguments</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArguments">ProcedureJavascriptArguments</a>]]</code> | arguments block. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptConfig.property.comment">comment</a></code> | <code>str</code> | (Default: `user-defined procedure`) Specifies a comment for the procedure. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptConfig.property.enableConsoleOutput">enable_console_output</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable stdout/stderr fast path logging for anonyous stored procs. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptConfig.property.executeAs">execute_as</a></code> | <code>str</code> | Specifies whether the stored procedure executes with the privileges of the owner (an “owner’s rights” stored procedure) or with the privileges of the caller (a “caller’s rights” stored procedure). |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/procedure_javascript#id ProcedureJavascript#id}. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptConfig.property.isSecure">is_secure</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies that the procedure is secure. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptConfig.property.logLevel">log_level</a></code> | <code>str</code> | LOG_LEVEL to use when filtering events For more information, check [LOG_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#log-level). |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptConfig.property.metricLevel">metric_level</a></code> | <code>str</code> | METRIC_LEVEL value to control whether to emit metrics to Event Table For more information, check [METRIC_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#metric-level). |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptConfig.property.nullInputBehavior">null_input_behavior</a></code> | <code>str</code> | Specifies the behavior of the procedure when called with null inputs. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptTimeouts">ProcedureJavascriptTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptConfig.property.traceLevel">trace_level</a></code> | <code>str</code> | Trace level value to use when generating/filtering trace events For more information, check [TRACE_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#trace-level). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptConfig.property.database"></a>

```python
database: str
```

- *Type:* str

The database in which to create the procedure.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/procedure_javascript#database ProcedureJavascript#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the procedure;

the identifier does not need to be unique for the schema in which the procedure is created because stored procedures are [identified and resolved by the combination of the name and argument types](https://docs.snowflake.com/en/developer-guide/udf-stored-procedure-naming-conventions.html#label-procedure-function-name-overloading). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/procedure_javascript#name ProcedureJavascript#name}

---

##### `procedure_definition`<sup>Required</sup> <a name="procedure_definition" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptConfig.property.procedureDefinition"></a>

```python
procedure_definition: str
```

- *Type:* str

Defines the code executed by the stored procedure.

The definition can consist of any valid code. Wrapping `$$` signs are added by the provider automatically; do not include them. The `procedure_definition` value must be JavaScript source code. For more information, see [JavaScript](https://docs.snowflake.com/en/developer-guide/stored-procedure/stored-procedures-javascript). To mitigate permadiff on this field, the provider replaces blank characters with a space. This can lead to false positives in cases where a change in case or run of whitespace is semantically significant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/procedure_javascript#procedure_definition ProcedureJavascript#procedure_definition}

---

##### `return_type`<sup>Required</sup> <a name="return_type" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptConfig.property.returnType"></a>

```python
return_type: str
```

- *Type:* str

Specifies the type of the result returned by the stored procedure.

For `<result_data_type>`, use the Snowflake data type that corresponds to the type of the language that you are using (see [SQL and JavaScript data type mapping](https://docs.snowflake.com/en/developer-guide/stored-procedure/stored-procedures-javascript.html#label-stored-procedure-data-type-mapping)). For `RETURNS TABLE ( [ col_name col_data_type [ , ... ] ] )`, if you know the Snowflake data types of the columns in the returned table, specify the column names and types. Otherwise (e.g. if you are determining the column types during run time), you can omit the column names and types (i.e. `TABLE ()`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/procedure_javascript#return_type ProcedureJavascript#return_type}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptConfig.property.schema"></a>

```python
schema: str
```

- *Type:* str

The schema in which to create the procedure.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/procedure_javascript#schema ProcedureJavascript#schema}

---

##### `arguments`<sup>Optional</sup> <a name="arguments" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptConfig.property.arguments"></a>

```python
arguments: typing.Union[IResolvable, typing.List[ProcedureJavascriptArguments]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArguments">ProcedureJavascriptArguments</a>]]

arguments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/procedure_javascript#arguments ProcedureJavascript#arguments}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

(Default: `user-defined procedure`) Specifies a comment for the procedure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/procedure_javascript#comment ProcedureJavascript#comment}

---

##### `enable_console_output`<sup>Optional</sup> <a name="enable_console_output" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptConfig.property.enableConsoleOutput"></a>

```python
enable_console_output: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable stdout/stderr fast path logging for anonyous stored procs.

This is a public parameter (similar to LOG_LEVEL). For more information, check [ENABLE_CONSOLE_OUTPUT docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-console-output).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/procedure_javascript#enable_console_output ProcedureJavascript#enable_console_output}

---

##### `execute_as`<sup>Optional</sup> <a name="execute_as" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptConfig.property.executeAs"></a>

```python
execute_as: str
```

- *Type:* str

Specifies whether the stored procedure executes with the privileges of the owner (an “owner’s rights” stored procedure) or with the privileges of the caller (a “caller’s rights” stored procedure).

If you execute the statement CREATE PROCEDURE … EXECUTE AS CALLER, then in the future the procedure will execute as a caller’s rights procedure. If you execute CREATE PROCEDURE … EXECUTE AS OWNER, then the procedure will execute as an owner’s rights procedure. For more information, see [Understanding caller’s rights and owner’s rights stored procedures](https://docs.snowflake.com/en/developer-guide/stored-procedure/stored-procedures-rights). Valid values are (case-insensitive): `CALLER` | `OWNER`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/procedure_javascript#execute_as ProcedureJavascript#execute_as}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/procedure_javascript#id ProcedureJavascript#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_secure`<sup>Optional</sup> <a name="is_secure" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptConfig.property.isSecure"></a>

```python
is_secure: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies that the procedure is secure.

For more information about secure procedures, see [Protecting Sensitive Information with Secure UDFs and Stored Procedures](https://docs.snowflake.com/en/developer-guide/secure-udf-procedure). Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/procedure_javascript#is_secure ProcedureJavascript#is_secure}

---

##### `log_level`<sup>Optional</sup> <a name="log_level" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptConfig.property.logLevel"></a>

```python
log_level: str
```

- *Type:* str

LOG_LEVEL to use when filtering events For more information, check [LOG_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#log-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/procedure_javascript#log_level ProcedureJavascript#log_level}

---

##### `metric_level`<sup>Optional</sup> <a name="metric_level" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptConfig.property.metricLevel"></a>

```python
metric_level: str
```

- *Type:* str

METRIC_LEVEL value to control whether to emit metrics to Event Table For more information, check [METRIC_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#metric-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/procedure_javascript#metric_level ProcedureJavascript#metric_level}

---

##### `null_input_behavior`<sup>Optional</sup> <a name="null_input_behavior" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptConfig.property.nullInputBehavior"></a>

```python
null_input_behavior: str
```

- *Type:* str

Specifies the behavior of the procedure when called with null inputs.

Valid values are (case-insensitive): `CALLED ON NULL INPUT` | `RETURNS NULL ON NULL INPUT`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/procedure_javascript#null_input_behavior ProcedureJavascript#null_input_behavior}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptConfig.property.timeouts"></a>

```python
timeouts: ProcedureJavascriptTimeouts
```

- *Type:* <a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptTimeouts">ProcedureJavascriptTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/procedure_javascript#timeouts ProcedureJavascript#timeouts}

---

##### `trace_level`<sup>Optional</sup> <a name="trace_level" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptConfig.property.traceLevel"></a>

```python
trace_level: str
```

- *Type:* str

Trace level value to use when generating/filtering trace events For more information, check [TRACE_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#trace-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/procedure_javascript#trace_level ProcedureJavascript#trace_level}

---

### ProcedureJavascriptParameters <a name="ProcedureJavascriptParameters" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParameters.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure_javascript

procedureJavascript.ProcedureJavascriptParameters()
```


### ProcedureJavascriptParametersEnableConsoleOutput <a name="ProcedureJavascriptParametersEnableConsoleOutput" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutput.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure_javascript

procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutput()
```


### ProcedureJavascriptParametersLogLevel <a name="ProcedureJavascriptParametersLogLevel" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersLogLevel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersLogLevel.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure_javascript

procedureJavascript.ProcedureJavascriptParametersLogLevel()
```


### ProcedureJavascriptParametersMetricLevel <a name="ProcedureJavascriptParametersMetricLevel" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersMetricLevel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersMetricLevel.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure_javascript

procedureJavascript.ProcedureJavascriptParametersMetricLevel()
```


### ProcedureJavascriptParametersTraceLevel <a name="ProcedureJavascriptParametersTraceLevel" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersTraceLevel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersTraceLevel.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure_javascript

procedureJavascript.ProcedureJavascriptParametersTraceLevel()
```


### ProcedureJavascriptShowOutput <a name="ProcedureJavascriptShowOutput" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutput.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure_javascript

procedureJavascript.ProcedureJavascriptShowOutput()
```


### ProcedureJavascriptTimeouts <a name="ProcedureJavascriptTimeouts" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure_javascript

procedureJavascript.ProcedureJavascriptTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/procedure_javascript#create ProcedureJavascript#create}. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/procedure_javascript#delete ProcedureJavascript#delete}. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/procedure_javascript#read ProcedureJavascript#read}. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/procedure_javascript#update ProcedureJavascript#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/procedure_javascript#create ProcedureJavascript#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/procedure_javascript#delete ProcedureJavascript#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/procedure_javascript#read ProcedureJavascript#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/1.2.1/docs/resources/procedure_javascript#update ProcedureJavascript#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ProcedureJavascriptArgumentsList <a name="ProcedureJavascriptArgumentsList" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure_javascript

procedureJavascript.ProcedureJavascriptArgumentsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ProcedureJavascriptArgumentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArguments">ProcedureJavascriptArguments</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ProcedureJavascriptArguments]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArguments">ProcedureJavascriptArguments</a>]]

---


### ProcedureJavascriptArgumentsOutputReference <a name="ProcedureJavascriptArgumentsOutputReference" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure_javascript

procedureJavascript.ProcedureJavascriptArgumentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsOutputReference.resetArgDefaultValue">reset_arg_default_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_arg_default_value` <a name="reset_arg_default_value" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsOutputReference.resetArgDefaultValue"></a>

```python
def reset_arg_default_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsOutputReference.property.argDataTypeInput">arg_data_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsOutputReference.property.argDefaultValueInput">arg_default_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsOutputReference.property.argNameInput">arg_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsOutputReference.property.argDataType">arg_data_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsOutputReference.property.argDefaultValue">arg_default_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsOutputReference.property.argName">arg_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArguments">ProcedureJavascriptArguments</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arg_data_type_input`<sup>Optional</sup> <a name="arg_data_type_input" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsOutputReference.property.argDataTypeInput"></a>

```python
arg_data_type_input: str
```

- *Type:* str

---

##### `arg_default_value_input`<sup>Optional</sup> <a name="arg_default_value_input" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsOutputReference.property.argDefaultValueInput"></a>

```python
arg_default_value_input: str
```

- *Type:* str

---

##### `arg_name_input`<sup>Optional</sup> <a name="arg_name_input" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsOutputReference.property.argNameInput"></a>

```python
arg_name_input: str
```

- *Type:* str

---

##### `arg_data_type`<sup>Required</sup> <a name="arg_data_type" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsOutputReference.property.argDataType"></a>

```python
arg_data_type: str
```

- *Type:* str

---

##### `arg_default_value`<sup>Required</sup> <a name="arg_default_value" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsOutputReference.property.argDefaultValue"></a>

```python
arg_default_value: str
```

- *Type:* str

---

##### `arg_name`<sup>Required</sup> <a name="arg_name" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsOutputReference.property.argName"></a>

```python
arg_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArgumentsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ProcedureJavascriptArguments]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptArguments">ProcedureJavascriptArguments</a>]

---


### ProcedureJavascriptParametersEnableConsoleOutputList <a name="ProcedureJavascriptParametersEnableConsoleOutputList" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutputList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure_javascript

procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ProcedureJavascriptParametersEnableConsoleOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ProcedureJavascriptParametersEnableConsoleOutputOutputReference <a name="ProcedureJavascriptParametersEnableConsoleOutputOutputReference" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutputOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure_javascript

procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutputOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutputOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutputOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutputOutputReference.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutputOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutput">ProcedureJavascriptParametersEnableConsoleOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutputOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutputOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutputOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutputOutputReference.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutputOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutputOutputReference.property.internalValue"></a>

```python
internal_value: ProcedureJavascriptParametersEnableConsoleOutput
```

- *Type:* <a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutput">ProcedureJavascriptParametersEnableConsoleOutput</a>

---


### ProcedureJavascriptParametersList <a name="ProcedureJavascriptParametersList" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure_javascript

procedureJavascript.ProcedureJavascriptParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ProcedureJavascriptParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ProcedureJavascriptParametersLogLevelList <a name="ProcedureJavascriptParametersLogLevelList" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersLogLevelList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersLogLevelList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure_javascript

procedureJavascript.ProcedureJavascriptParametersLogLevelList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersLogLevelList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersLogLevelList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersLogLevelList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersLogLevelList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersLogLevelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersLogLevelList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersLogLevelList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersLogLevelList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersLogLevelList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersLogLevelList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersLogLevelList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersLogLevelList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersLogLevelList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersLogLevelList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersLogLevelList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersLogLevelList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersLogLevelList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersLogLevelList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ProcedureJavascriptParametersLogLevelOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersLogLevelList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersLogLevelList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersLogLevelList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersLogLevelList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersLogLevelList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ProcedureJavascriptParametersLogLevelOutputReference <a name="ProcedureJavascriptParametersLogLevelOutputReference" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersLogLevelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersLogLevelOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure_javascript

procedureJavascript.ProcedureJavascriptParametersLogLevelOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersLogLevelOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersLogLevelOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersLogLevelOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersLogLevelOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersLogLevelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersLogLevelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersLogLevelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersLogLevelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersLogLevelOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersLogLevelOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersLogLevelOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersLogLevelOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersLogLevelOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersLogLevelOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersLogLevelOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersLogLevelOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersLogLevelOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersLogLevelOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersLogLevelOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersLogLevelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersLogLevelOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersLogLevelOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersLogLevelOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersLogLevelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersLogLevelOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersLogLevelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersLogLevelOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersLogLevelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersLogLevelOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersLogLevelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersLogLevelOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersLogLevelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersLogLevelOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersLogLevelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersLogLevelOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersLogLevelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersLogLevelOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersLogLevelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersLogLevelOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersLogLevelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersLogLevelOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersLogLevelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersLogLevelOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersLogLevelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersLogLevelOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersLogLevelOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersLogLevelOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersLogLevelOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersLogLevelOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersLogLevelOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersLogLevelOutputReference.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersLogLevelOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersLogLevelOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersLogLevel">ProcedureJavascriptParametersLogLevel</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersLogLevelOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersLogLevelOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersLogLevelOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersLogLevelOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersLogLevelOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersLogLevelOutputReference.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersLogLevelOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersLogLevelOutputReference.property.internalValue"></a>

```python
internal_value: ProcedureJavascriptParametersLogLevel
```

- *Type:* <a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersLogLevel">ProcedureJavascriptParametersLogLevel</a>

---


### ProcedureJavascriptParametersMetricLevelList <a name="ProcedureJavascriptParametersMetricLevelList" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersMetricLevelList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersMetricLevelList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure_javascript

procedureJavascript.ProcedureJavascriptParametersMetricLevelList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersMetricLevelList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersMetricLevelList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersMetricLevelList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersMetricLevelList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersMetricLevelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersMetricLevelList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersMetricLevelList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersMetricLevelList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersMetricLevelList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersMetricLevelList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersMetricLevelList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersMetricLevelList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersMetricLevelList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersMetricLevelList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersMetricLevelList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersMetricLevelList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersMetricLevelList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersMetricLevelList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ProcedureJavascriptParametersMetricLevelOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersMetricLevelList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersMetricLevelList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersMetricLevelList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersMetricLevelList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersMetricLevelList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ProcedureJavascriptParametersMetricLevelOutputReference <a name="ProcedureJavascriptParametersMetricLevelOutputReference" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersMetricLevelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersMetricLevelOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure_javascript

procedureJavascript.ProcedureJavascriptParametersMetricLevelOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersMetricLevelOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersMetricLevelOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersMetricLevelOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersMetricLevelOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersMetricLevelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersMetricLevelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersMetricLevelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersMetricLevelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersMetricLevelOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersMetricLevelOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersMetricLevelOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersMetricLevelOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersMetricLevelOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersMetricLevelOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersMetricLevelOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersMetricLevelOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersMetricLevelOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersMetricLevelOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersMetricLevelOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersMetricLevelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersMetricLevelOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersMetricLevelOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersMetricLevelOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersMetricLevelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersMetricLevelOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersMetricLevelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersMetricLevelOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersMetricLevelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersMetricLevelOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersMetricLevelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersMetricLevelOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersMetricLevelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersMetricLevelOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersMetricLevelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersMetricLevelOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersMetricLevelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersMetricLevelOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersMetricLevelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersMetricLevelOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersMetricLevelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersMetricLevelOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersMetricLevelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersMetricLevelOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersMetricLevelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersMetricLevelOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersMetricLevelOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersMetricLevelOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersMetricLevelOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersMetricLevelOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersMetricLevelOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersMetricLevelOutputReference.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersMetricLevelOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersMetricLevelOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersMetricLevel">ProcedureJavascriptParametersMetricLevel</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersMetricLevelOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersMetricLevelOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersMetricLevelOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersMetricLevelOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersMetricLevelOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersMetricLevelOutputReference.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersMetricLevelOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersMetricLevelOutputReference.property.internalValue"></a>

```python
internal_value: ProcedureJavascriptParametersMetricLevel
```

- *Type:* <a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersMetricLevel">ProcedureJavascriptParametersMetricLevel</a>

---


### ProcedureJavascriptParametersOutputReference <a name="ProcedureJavascriptParametersOutputReference" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure_javascript

procedureJavascript.ProcedureJavascriptParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersOutputReference.property.enableConsoleOutput">enable_console_output</a></code> | <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutputList">ProcedureJavascriptParametersEnableConsoleOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersOutputReference.property.logLevel">log_level</a></code> | <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersLogLevelList">ProcedureJavascriptParametersLogLevelList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersOutputReference.property.metricLevel">metric_level</a></code> | <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersMetricLevelList">ProcedureJavascriptParametersMetricLevelList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersOutputReference.property.traceLevel">trace_level</a></code> | <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersTraceLevelList">ProcedureJavascriptParametersTraceLevelList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParameters">ProcedureJavascriptParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_console_output`<sup>Required</sup> <a name="enable_console_output" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersOutputReference.property.enableConsoleOutput"></a>

```python
enable_console_output: ProcedureJavascriptParametersEnableConsoleOutputList
```

- *Type:* <a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersEnableConsoleOutputList">ProcedureJavascriptParametersEnableConsoleOutputList</a>

---

##### `log_level`<sup>Required</sup> <a name="log_level" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersOutputReference.property.logLevel"></a>

```python
log_level: ProcedureJavascriptParametersLogLevelList
```

- *Type:* <a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersLogLevelList">ProcedureJavascriptParametersLogLevelList</a>

---

##### `metric_level`<sup>Required</sup> <a name="metric_level" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersOutputReference.property.metricLevel"></a>

```python
metric_level: ProcedureJavascriptParametersMetricLevelList
```

- *Type:* <a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersMetricLevelList">ProcedureJavascriptParametersMetricLevelList</a>

---

##### `trace_level`<sup>Required</sup> <a name="trace_level" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersOutputReference.property.traceLevel"></a>

```python
trace_level: ProcedureJavascriptParametersTraceLevelList
```

- *Type:* <a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersTraceLevelList">ProcedureJavascriptParametersTraceLevelList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersOutputReference.property.internalValue"></a>

```python
internal_value: ProcedureJavascriptParameters
```

- *Type:* <a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParameters">ProcedureJavascriptParameters</a>

---


### ProcedureJavascriptParametersTraceLevelList <a name="ProcedureJavascriptParametersTraceLevelList" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersTraceLevelList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersTraceLevelList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure_javascript

procedureJavascript.ProcedureJavascriptParametersTraceLevelList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersTraceLevelList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersTraceLevelList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersTraceLevelList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersTraceLevelList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersTraceLevelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersTraceLevelList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersTraceLevelList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersTraceLevelList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersTraceLevelList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersTraceLevelList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersTraceLevelList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersTraceLevelList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersTraceLevelList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersTraceLevelList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersTraceLevelList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersTraceLevelList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersTraceLevelList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersTraceLevelList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ProcedureJavascriptParametersTraceLevelOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersTraceLevelList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersTraceLevelList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersTraceLevelList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersTraceLevelList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersTraceLevelList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ProcedureJavascriptParametersTraceLevelOutputReference <a name="ProcedureJavascriptParametersTraceLevelOutputReference" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersTraceLevelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersTraceLevelOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure_javascript

procedureJavascript.ProcedureJavascriptParametersTraceLevelOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersTraceLevelOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersTraceLevelOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersTraceLevelOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersTraceLevelOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersTraceLevelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersTraceLevelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersTraceLevelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersTraceLevelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersTraceLevelOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersTraceLevelOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersTraceLevelOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersTraceLevelOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersTraceLevelOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersTraceLevelOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersTraceLevelOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersTraceLevelOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersTraceLevelOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersTraceLevelOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersTraceLevelOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersTraceLevelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersTraceLevelOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersTraceLevelOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersTraceLevelOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersTraceLevelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersTraceLevelOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersTraceLevelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersTraceLevelOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersTraceLevelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersTraceLevelOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersTraceLevelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersTraceLevelOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersTraceLevelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersTraceLevelOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersTraceLevelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersTraceLevelOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersTraceLevelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersTraceLevelOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersTraceLevelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersTraceLevelOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersTraceLevelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersTraceLevelOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersTraceLevelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersTraceLevelOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersTraceLevelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersTraceLevelOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersTraceLevelOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersTraceLevelOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersTraceLevelOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersTraceLevelOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersTraceLevelOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersTraceLevelOutputReference.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersTraceLevelOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersTraceLevelOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersTraceLevel">ProcedureJavascriptParametersTraceLevel</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersTraceLevelOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersTraceLevelOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersTraceLevelOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersTraceLevelOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersTraceLevelOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersTraceLevelOutputReference.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersTraceLevelOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersTraceLevelOutputReference.property.internalValue"></a>

```python
internal_value: ProcedureJavascriptParametersTraceLevel
```

- *Type:* <a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptParametersTraceLevel">ProcedureJavascriptParametersTraceLevel</a>

---


### ProcedureJavascriptShowOutputList <a name="ProcedureJavascriptShowOutputList" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure_javascript

procedureJavascript.ProcedureJavascriptShowOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ProcedureJavascriptShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ProcedureJavascriptShowOutputOutputReference <a name="ProcedureJavascriptShowOutputOutputReference" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure_javascript

procedureJavascript.ProcedureJavascriptShowOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputOutputReference.property.argumentsRaw">arguments_raw</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputOutputReference.property.catalogName">catalog_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputOutputReference.property.externalAccessIntegrations">external_access_integrations</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputOutputReference.property.isAggregate">is_aggregate</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputOutputReference.property.isAnsi">is_ansi</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputOutputReference.property.isBuiltin">is_builtin</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputOutputReference.property.isSecure">is_secure</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputOutputReference.property.isTableFunction">is_table_function</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputOutputReference.property.maxNumArguments">max_num_arguments</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputOutputReference.property.minNumArguments">min_num_arguments</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputOutputReference.property.secrets">secrets</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputOutputReference.property.validForClustering">valid_for_clustering</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutput">ProcedureJavascriptShowOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arguments_raw`<sup>Required</sup> <a name="arguments_raw" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputOutputReference.property.argumentsRaw"></a>

```python
arguments_raw: str
```

- *Type:* str

---

##### `catalog_name`<sup>Required</sup> <a name="catalog_name" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputOutputReference.property.catalogName"></a>

```python
catalog_name: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `external_access_integrations`<sup>Required</sup> <a name="external_access_integrations" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputOutputReference.property.externalAccessIntegrations"></a>

```python
external_access_integrations: str
```

- *Type:* str

---

##### `is_aggregate`<sup>Required</sup> <a name="is_aggregate" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputOutputReference.property.isAggregate"></a>

```python
is_aggregate: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_ansi`<sup>Required</sup> <a name="is_ansi" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputOutputReference.property.isAnsi"></a>

```python
is_ansi: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_builtin`<sup>Required</sup> <a name="is_builtin" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputOutputReference.property.isBuiltin"></a>

```python
is_builtin: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_secure`<sup>Required</sup> <a name="is_secure" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputOutputReference.property.isSecure"></a>

```python
is_secure: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_table_function`<sup>Required</sup> <a name="is_table_function" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputOutputReference.property.isTableFunction"></a>

```python
is_table_function: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `max_num_arguments`<sup>Required</sup> <a name="max_num_arguments" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputOutputReference.property.maxNumArguments"></a>

```python
max_num_arguments: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_num_arguments`<sup>Required</sup> <a name="min_num_arguments" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputOutputReference.property.minNumArguments"></a>

```python
min_num_arguments: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `secrets`<sup>Required</sup> <a name="secrets" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputOutputReference.property.secrets"></a>

```python
secrets: str
```

- *Type:* str

---

##### `valid_for_clustering`<sup>Required</sup> <a name="valid_for_clustering" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputOutputReference.property.validForClustering"></a>

```python
valid_for_clustering: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutputOutputReference.property.internalValue"></a>

```python
internal_value: ProcedureJavascriptShowOutput
```

- *Type:* <a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptShowOutput">ProcedureJavascriptShowOutput</a>

---


### ProcedureJavascriptTimeoutsOutputReference <a name="ProcedureJavascriptTimeoutsOutputReference" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure_javascript

procedureJavascript.ProcedureJavascriptTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptTimeouts">ProcedureJavascriptTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ProcedureJavascriptTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-snowflake.procedureJavascript.ProcedureJavascriptTimeouts">ProcedureJavascriptTimeouts</a>]

---



