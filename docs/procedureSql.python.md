# `procedureSql` Submodule <a name="`procedureSql` Submodule" id="@cdktf/provider-snowflake.procedureSql"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProcedureSql <a name="ProcedureSql" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/procedure_sql snowflake_procedure_sql}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure_sql

procedureSql.ProcedureSql(
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
  arguments: typing.Union[IResolvable, typing.List[ProcedureSqlArguments]] = None,
  comment: str = None,
  enable_console_output: typing.Union[bool, IResolvable] = None,
  execute_as: str = None,
  id: str = None,
  is_secure: str = None,
  log_level: str = None,
  metric_level: str = None,
  null_input_behavior: str = None,
  trace_level: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.Initializer.parameter.database">database</a></code> | <code>str</code> | The database in which to create the procedure. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the procedure; |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.Initializer.parameter.procedureDefinition">procedure_definition</a></code> | <code>str</code> | Defines the code executed by the stored procedure. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.Initializer.parameter.returnType">return_type</a></code> | <code>str</code> | Specifies the type of the result returned by the stored procedure. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.Initializer.parameter.schema">schema</a></code> | <code>str</code> | The schema in which to create the procedure. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.Initializer.parameter.arguments">arguments</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlArguments">ProcedureSqlArguments</a>]]</code> | arguments block. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.Initializer.parameter.comment">comment</a></code> | <code>str</code> | Specifies a comment for the procedure. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.Initializer.parameter.enableConsoleOutput">enable_console_output</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable stdout/stderr fast path logging for anonyous stored procs. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.Initializer.parameter.executeAs">execute_as</a></code> | <code>str</code> | Specifies whether the stored procedure executes with the privileges of the owner (an “owner’s rights” stored procedure) or with the privileges of the caller (a “caller’s rights” stored procedure). |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/procedure_sql#id ProcedureSql#id}. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.Initializer.parameter.isSecure">is_secure</a></code> | <code>str</code> | Specifies that the procedure is secure. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.Initializer.parameter.logLevel">log_level</a></code> | <code>str</code> | LOG_LEVEL to use when filtering events For more information, check [LOG_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#log-level). |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.Initializer.parameter.metricLevel">metric_level</a></code> | <code>str</code> | METRIC_LEVEL value to control whether to emit metrics to Event Table For more information, check [METRIC_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#metric-level). |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.Initializer.parameter.nullInputBehavior">null_input_behavior</a></code> | <code>str</code> | Specifies the behavior of the procedure when called with null inputs. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.Initializer.parameter.traceLevel">trace_level</a></code> | <code>str</code> | Trace level value to use when generating/filtering trace events For more information, check [TRACE_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#trace-level). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.Initializer.parameter.database"></a>

- *Type:* str

The database in which to create the procedure.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/procedure_sql#database ProcedureSql#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.Initializer.parameter.name"></a>

- *Type:* str

The name of the procedure;

the identifier does not need to be unique for the schema in which the procedure is created because stored procedures are [identified and resolved by the combination of the name and argument types](https://docs.snowflake.com/en/developer-guide/udf-stored-procedure-naming-conventions.html#label-procedure-function-name-overloading). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/procedure_sql#name ProcedureSql#name}

---

##### `procedure_definition`<sup>Required</sup> <a name="procedure_definition" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.Initializer.parameter.procedureDefinition"></a>

- *Type:* str

Defines the code executed by the stored procedure.

The definition can consist of any valid code. Wrapping `$$` signs are added by the provider automatically; do not include them. The `procedure_definition` value must be SQL source code. For more information, see [Snowflake Scripting](https://docs.snowflake.com/en/developer-guide/snowflake-scripting/index). To mitigate permadiff on this field, the provider replaces blank characters with a space. This can lead to false positives in cases where a change in case or run of whitespace is semantically significant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/procedure_sql#procedure_definition ProcedureSql#procedure_definition}

---

##### `return_type`<sup>Required</sup> <a name="return_type" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.Initializer.parameter.returnType"></a>

- *Type:* str

Specifies the type of the result returned by the stored procedure.

For `<result_data_type>`, use the Snowflake data type that corresponds to the type of the language that you are using (see [SQL data type](https://docs.snowflake.com/en/sql-reference-data-types)). For `RETURNS TABLE ( [ col_name col_data_type [ , ... ] ] )`, if you know the Snowflake data types of the columns in the returned table, specify the column names and types. Otherwise (e.g. if you are determining the column types during run time), you can omit the column names and types (i.e. `TABLE ()`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/procedure_sql#return_type ProcedureSql#return_type}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.Initializer.parameter.schema"></a>

- *Type:* str

The schema in which to create the procedure.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/procedure_sql#schema ProcedureSql#schema}

---

##### `arguments`<sup>Optional</sup> <a name="arguments" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.Initializer.parameter.arguments"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlArguments">ProcedureSqlArguments</a>]]

arguments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/procedure_sql#arguments ProcedureSql#arguments}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.Initializer.parameter.comment"></a>

- *Type:* str

Specifies a comment for the procedure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/procedure_sql#comment ProcedureSql#comment}

---

##### `enable_console_output`<sup>Optional</sup> <a name="enable_console_output" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.Initializer.parameter.enableConsoleOutput"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable stdout/stderr fast path logging for anonyous stored procs.

This is a public parameter (similar to LOG_LEVEL). For more information, check [ENABLE_CONSOLE_OUTPUT docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-console-output).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/procedure_sql#enable_console_output ProcedureSql#enable_console_output}

---

##### `execute_as`<sup>Optional</sup> <a name="execute_as" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.Initializer.parameter.executeAs"></a>

- *Type:* str

Specifies whether the stored procedure executes with the privileges of the owner (an “owner’s rights” stored procedure) or with the privileges of the caller (a “caller’s rights” stored procedure).

If you execute the statement CREATE PROCEDURE … EXECUTE AS CALLER, then in the future the procedure will execute as a caller’s rights procedure. If you execute CREATE PROCEDURE … EXECUTE AS OWNER, then the procedure will execute as an owner’s rights procedure. For more information, see [Understanding caller’s rights and owner’s rights stored procedures](https://docs.snowflake.com/en/developer-guide/stored-procedure/stored-procedures-rights). Valid values are (case-insensitive): `CALLER` | `OWNER`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/procedure_sql#execute_as ProcedureSql#execute_as}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/procedure_sql#id ProcedureSql#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_secure`<sup>Optional</sup> <a name="is_secure" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.Initializer.parameter.isSecure"></a>

- *Type:* str

Specifies that the procedure is secure.

For more information about secure procedures, see [Protecting Sensitive Information with Secure UDFs and Stored Procedures](https://docs.snowflake.com/en/developer-guide/secure-udf-procedure). Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/procedure_sql#is_secure ProcedureSql#is_secure}

---

##### `log_level`<sup>Optional</sup> <a name="log_level" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.Initializer.parameter.logLevel"></a>

- *Type:* str

LOG_LEVEL to use when filtering events For more information, check [LOG_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#log-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/procedure_sql#log_level ProcedureSql#log_level}

---

##### `metric_level`<sup>Optional</sup> <a name="metric_level" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.Initializer.parameter.metricLevel"></a>

- *Type:* str

METRIC_LEVEL value to control whether to emit metrics to Event Table For more information, check [METRIC_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#metric-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/procedure_sql#metric_level ProcedureSql#metric_level}

---

##### `null_input_behavior`<sup>Optional</sup> <a name="null_input_behavior" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.Initializer.parameter.nullInputBehavior"></a>

- *Type:* str

Specifies the behavior of the procedure when called with null inputs.

Valid values are (case-insensitive): `CALLED ON NULL INPUT` | `RETURNS NULL ON NULL INPUT`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/procedure_sql#null_input_behavior ProcedureSql#null_input_behavior}

---

##### `trace_level`<sup>Optional</sup> <a name="trace_level" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.Initializer.parameter.traceLevel"></a>

- *Type:* str

Trace level value to use when generating/filtering trace events For more information, check [TRACE_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#trace-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/procedure_sql#trace_level ProcedureSql#trace_level}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.putArguments">put_arguments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.resetArguments">reset_arguments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.resetEnableConsoleOutput">reset_enable_console_output</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.resetExecuteAs">reset_execute_as</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.resetIsSecure">reset_is_secure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.resetLogLevel">reset_log_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.resetMetricLevel">reset_metric_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.resetNullInputBehavior">reset_null_input_behavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.resetTraceLevel">reset_trace_level</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_arguments` <a name="put_arguments" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.putArguments"></a>

```python
def put_arguments(
  value: typing.Union[IResolvable, typing.List[ProcedureSqlArguments]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.putArguments.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlArguments">ProcedureSqlArguments</a>]]

---

##### `reset_arguments` <a name="reset_arguments" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.resetArguments"></a>

```python
def reset_arguments() -> None
```

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_enable_console_output` <a name="reset_enable_console_output" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.resetEnableConsoleOutput"></a>

```python
def reset_enable_console_output() -> None
```

##### `reset_execute_as` <a name="reset_execute_as" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.resetExecuteAs"></a>

```python
def reset_execute_as() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_secure` <a name="reset_is_secure" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.resetIsSecure"></a>

```python
def reset_is_secure() -> None
```

##### `reset_log_level` <a name="reset_log_level" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.resetLogLevel"></a>

```python
def reset_log_level() -> None
```

##### `reset_metric_level` <a name="reset_metric_level" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.resetMetricLevel"></a>

```python
def reset_metric_level() -> None
```

##### `reset_null_input_behavior` <a name="reset_null_input_behavior" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.resetNullInputBehavior"></a>

```python
def reset_null_input_behavior() -> None
```

##### `reset_trace_level` <a name="reset_trace_level" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.resetTraceLevel"></a>

```python
def reset_trace_level() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ProcedureSql resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.isConstruct"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure_sql

procedureSql.ProcedureSql.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure_sql

procedureSql.ProcedureSql.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure_sql

procedureSql.ProcedureSql.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure_sql

procedureSql.ProcedureSql.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ProcedureSql resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ProcedureSql to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ProcedureSql that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/procedure_sql#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ProcedureSql to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.arguments">arguments</a></code> | <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsList">ProcedureSqlArgumentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.fullyQualifiedName">fully_qualified_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.parameters">parameters</a></code> | <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersList">ProcedureSqlParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.procedureLanguage">procedure_language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.showOutput">show_output</a></code> | <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputList">ProcedureSqlShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.argumentsInput">arguments_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlArguments">ProcedureSqlArguments</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.enableConsoleOutputInput">enable_console_output_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.executeAsInput">execute_as_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.isSecureInput">is_secure_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.logLevelInput">log_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.metricLevelInput">metric_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.nullInputBehaviorInput">null_input_behavior_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.procedureDefinitionInput">procedure_definition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.returnTypeInput">return_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.schemaInput">schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.traceLevelInput">trace_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.enableConsoleOutput">enable_console_output</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.executeAs">execute_as</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.isSecure">is_secure</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.logLevel">log_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.metricLevel">metric_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.nullInputBehavior">null_input_behavior</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.procedureDefinition">procedure_definition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.returnType">return_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.schema">schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.traceLevel">trace_level</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arguments`<sup>Required</sup> <a name="arguments" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.arguments"></a>

```python
arguments: ProcedureSqlArgumentsList
```

- *Type:* <a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsList">ProcedureSqlArgumentsList</a>

---

##### `fully_qualified_name`<sup>Required</sup> <a name="fully_qualified_name" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.fullyQualifiedName"></a>

```python
fully_qualified_name: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.parameters"></a>

```python
parameters: ProcedureSqlParametersList
```

- *Type:* <a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersList">ProcedureSqlParametersList</a>

---

##### `procedure_language`<sup>Required</sup> <a name="procedure_language" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.procedureLanguage"></a>

```python
procedure_language: str
```

- *Type:* str

---

##### `show_output`<sup>Required</sup> <a name="show_output" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.showOutput"></a>

```python
show_output: ProcedureSqlShowOutputList
```

- *Type:* <a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputList">ProcedureSqlShowOutputList</a>

---

##### `arguments_input`<sup>Optional</sup> <a name="arguments_input" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.argumentsInput"></a>

```python
arguments_input: typing.Union[IResolvable, typing.List[ProcedureSqlArguments]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlArguments">ProcedureSqlArguments</a>]]

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `enable_console_output_input`<sup>Optional</sup> <a name="enable_console_output_input" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.enableConsoleOutputInput"></a>

```python
enable_console_output_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `execute_as_input`<sup>Optional</sup> <a name="execute_as_input" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.executeAsInput"></a>

```python
execute_as_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_secure_input`<sup>Optional</sup> <a name="is_secure_input" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.isSecureInput"></a>

```python
is_secure_input: str
```

- *Type:* str

---

##### `log_level_input`<sup>Optional</sup> <a name="log_level_input" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.logLevelInput"></a>

```python
log_level_input: str
```

- *Type:* str

---

##### `metric_level_input`<sup>Optional</sup> <a name="metric_level_input" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.metricLevelInput"></a>

```python
metric_level_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `null_input_behavior_input`<sup>Optional</sup> <a name="null_input_behavior_input" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.nullInputBehaviorInput"></a>

```python
null_input_behavior_input: str
```

- *Type:* str

---

##### `procedure_definition_input`<sup>Optional</sup> <a name="procedure_definition_input" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.procedureDefinitionInput"></a>

```python
procedure_definition_input: str
```

- *Type:* str

---

##### `return_type_input`<sup>Optional</sup> <a name="return_type_input" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.returnTypeInput"></a>

```python
return_type_input: str
```

- *Type:* str

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.schemaInput"></a>

```python
schema_input: str
```

- *Type:* str

---

##### `trace_level_input`<sup>Optional</sup> <a name="trace_level_input" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.traceLevelInput"></a>

```python
trace_level_input: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `enable_console_output`<sup>Required</sup> <a name="enable_console_output" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.enableConsoleOutput"></a>

```python
enable_console_output: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `execute_as`<sup>Required</sup> <a name="execute_as" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.executeAs"></a>

```python
execute_as: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_secure`<sup>Required</sup> <a name="is_secure" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.isSecure"></a>

```python
is_secure: str
```

- *Type:* str

---

##### `log_level`<sup>Required</sup> <a name="log_level" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.logLevel"></a>

```python
log_level: str
```

- *Type:* str

---

##### `metric_level`<sup>Required</sup> <a name="metric_level" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.metricLevel"></a>

```python
metric_level: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `null_input_behavior`<sup>Required</sup> <a name="null_input_behavior" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.nullInputBehavior"></a>

```python
null_input_behavior: str
```

- *Type:* str

---

##### `procedure_definition`<sup>Required</sup> <a name="procedure_definition" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.procedureDefinition"></a>

```python
procedure_definition: str
```

- *Type:* str

---

##### `return_type`<sup>Required</sup> <a name="return_type" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.returnType"></a>

```python
return_type: str
```

- *Type:* str

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.schema"></a>

```python
schema: str
```

- *Type:* str

---

##### `trace_level`<sup>Required</sup> <a name="trace_level" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.traceLevel"></a>

```python
trace_level: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.procedureSql.ProcedureSql.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ProcedureSqlArguments <a name="ProcedureSqlArguments" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlArguments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlArguments.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure_sql

procedureSql.ProcedureSqlArguments(
  arg_data_type: str,
  arg_name: str,
  arg_default_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlArguments.property.argDataType">arg_data_type</a></code> | <code>str</code> | The argument type. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlArguments.property.argName">arg_name</a></code> | <code>str</code> | The argument name. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlArguments.property.argDefaultValue">arg_default_value</a></code> | <code>str</code> | Optional default value for the argument. |

---

##### `arg_data_type`<sup>Required</sup> <a name="arg_data_type" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlArguments.property.argDataType"></a>

```python
arg_data_type: str
```

- *Type:* str

The argument type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/procedure_sql#arg_data_type ProcedureSql#arg_data_type}

---

##### `arg_name`<sup>Required</sup> <a name="arg_name" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlArguments.property.argName"></a>

```python
arg_name: str
```

- *Type:* str

The argument name.

The provider wraps it in double quotes by default, so be aware of that while referencing the argument in the procedure definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/procedure_sql#arg_name ProcedureSql#arg_name}

---

##### `arg_default_value`<sup>Optional</sup> <a name="arg_default_value" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlArguments.property.argDefaultValue"></a>

```python
arg_default_value: str
```

- *Type:* str

Optional default value for the argument.

For text values use single quotes. Numeric values can be unquoted. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/procedure_sql#arg_default_value ProcedureSql#arg_default_value}

---

### ProcedureSqlConfig <a name="ProcedureSqlConfig" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure_sql

procedureSql.ProcedureSqlConfig(
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
  arguments: typing.Union[IResolvable, typing.List[ProcedureSqlArguments]] = None,
  comment: str = None,
  enable_console_output: typing.Union[bool, IResolvable] = None,
  execute_as: str = None,
  id: str = None,
  is_secure: str = None,
  log_level: str = None,
  metric_level: str = None,
  null_input_behavior: str = None,
  trace_level: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlConfig.property.database">database</a></code> | <code>str</code> | The database in which to create the procedure. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlConfig.property.name">name</a></code> | <code>str</code> | The name of the procedure; |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlConfig.property.procedureDefinition">procedure_definition</a></code> | <code>str</code> | Defines the code executed by the stored procedure. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlConfig.property.returnType">return_type</a></code> | <code>str</code> | Specifies the type of the result returned by the stored procedure. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlConfig.property.schema">schema</a></code> | <code>str</code> | The schema in which to create the procedure. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlConfig.property.arguments">arguments</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlArguments">ProcedureSqlArguments</a>]]</code> | arguments block. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlConfig.property.comment">comment</a></code> | <code>str</code> | Specifies a comment for the procedure. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlConfig.property.enableConsoleOutput">enable_console_output</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable stdout/stderr fast path logging for anonyous stored procs. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlConfig.property.executeAs">execute_as</a></code> | <code>str</code> | Specifies whether the stored procedure executes with the privileges of the owner (an “owner’s rights” stored procedure) or with the privileges of the caller (a “caller’s rights” stored procedure). |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/procedure_sql#id ProcedureSql#id}. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlConfig.property.isSecure">is_secure</a></code> | <code>str</code> | Specifies that the procedure is secure. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlConfig.property.logLevel">log_level</a></code> | <code>str</code> | LOG_LEVEL to use when filtering events For more information, check [LOG_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#log-level). |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlConfig.property.metricLevel">metric_level</a></code> | <code>str</code> | METRIC_LEVEL value to control whether to emit metrics to Event Table For more information, check [METRIC_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#metric-level). |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlConfig.property.nullInputBehavior">null_input_behavior</a></code> | <code>str</code> | Specifies the behavior of the procedure when called with null inputs. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlConfig.property.traceLevel">trace_level</a></code> | <code>str</code> | Trace level value to use when generating/filtering trace events For more information, check [TRACE_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#trace-level). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlConfig.property.database"></a>

```python
database: str
```

- *Type:* str

The database in which to create the procedure.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/procedure_sql#database ProcedureSql#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the procedure;

the identifier does not need to be unique for the schema in which the procedure is created because stored procedures are [identified and resolved by the combination of the name and argument types](https://docs.snowflake.com/en/developer-guide/udf-stored-procedure-naming-conventions.html#label-procedure-function-name-overloading). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/procedure_sql#name ProcedureSql#name}

---

##### `procedure_definition`<sup>Required</sup> <a name="procedure_definition" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlConfig.property.procedureDefinition"></a>

```python
procedure_definition: str
```

- *Type:* str

Defines the code executed by the stored procedure.

The definition can consist of any valid code. Wrapping `$$` signs are added by the provider automatically; do not include them. The `procedure_definition` value must be SQL source code. For more information, see [Snowflake Scripting](https://docs.snowflake.com/en/developer-guide/snowflake-scripting/index). To mitigate permadiff on this field, the provider replaces blank characters with a space. This can lead to false positives in cases where a change in case or run of whitespace is semantically significant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/procedure_sql#procedure_definition ProcedureSql#procedure_definition}

---

##### `return_type`<sup>Required</sup> <a name="return_type" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlConfig.property.returnType"></a>

```python
return_type: str
```

- *Type:* str

Specifies the type of the result returned by the stored procedure.

For `<result_data_type>`, use the Snowflake data type that corresponds to the type of the language that you are using (see [SQL data type](https://docs.snowflake.com/en/sql-reference-data-types)). For `RETURNS TABLE ( [ col_name col_data_type [ , ... ] ] )`, if you know the Snowflake data types of the columns in the returned table, specify the column names and types. Otherwise (e.g. if you are determining the column types during run time), you can omit the column names and types (i.e. `TABLE ()`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/procedure_sql#return_type ProcedureSql#return_type}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlConfig.property.schema"></a>

```python
schema: str
```

- *Type:* str

The schema in which to create the procedure.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/procedure_sql#schema ProcedureSql#schema}

---

##### `arguments`<sup>Optional</sup> <a name="arguments" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlConfig.property.arguments"></a>

```python
arguments: typing.Union[IResolvable, typing.List[ProcedureSqlArguments]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlArguments">ProcedureSqlArguments</a>]]

arguments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/procedure_sql#arguments ProcedureSql#arguments}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

Specifies a comment for the procedure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/procedure_sql#comment ProcedureSql#comment}

---

##### `enable_console_output`<sup>Optional</sup> <a name="enable_console_output" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlConfig.property.enableConsoleOutput"></a>

```python
enable_console_output: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable stdout/stderr fast path logging for anonyous stored procs.

This is a public parameter (similar to LOG_LEVEL). For more information, check [ENABLE_CONSOLE_OUTPUT docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-console-output).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/procedure_sql#enable_console_output ProcedureSql#enable_console_output}

---

##### `execute_as`<sup>Optional</sup> <a name="execute_as" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlConfig.property.executeAs"></a>

```python
execute_as: str
```

- *Type:* str

Specifies whether the stored procedure executes with the privileges of the owner (an “owner’s rights” stored procedure) or with the privileges of the caller (a “caller’s rights” stored procedure).

If you execute the statement CREATE PROCEDURE … EXECUTE AS CALLER, then in the future the procedure will execute as a caller’s rights procedure. If you execute CREATE PROCEDURE … EXECUTE AS OWNER, then the procedure will execute as an owner’s rights procedure. For more information, see [Understanding caller’s rights and owner’s rights stored procedures](https://docs.snowflake.com/en/developer-guide/stored-procedure/stored-procedures-rights). Valid values are (case-insensitive): `CALLER` | `OWNER`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/procedure_sql#execute_as ProcedureSql#execute_as}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/procedure_sql#id ProcedureSql#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_secure`<sup>Optional</sup> <a name="is_secure" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlConfig.property.isSecure"></a>

```python
is_secure: str
```

- *Type:* str

Specifies that the procedure is secure.

For more information about secure procedures, see [Protecting Sensitive Information with Secure UDFs and Stored Procedures](https://docs.snowflake.com/en/developer-guide/secure-udf-procedure). Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/procedure_sql#is_secure ProcedureSql#is_secure}

---

##### `log_level`<sup>Optional</sup> <a name="log_level" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlConfig.property.logLevel"></a>

```python
log_level: str
```

- *Type:* str

LOG_LEVEL to use when filtering events For more information, check [LOG_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#log-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/procedure_sql#log_level ProcedureSql#log_level}

---

##### `metric_level`<sup>Optional</sup> <a name="metric_level" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlConfig.property.metricLevel"></a>

```python
metric_level: str
```

- *Type:* str

METRIC_LEVEL value to control whether to emit metrics to Event Table For more information, check [METRIC_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#metric-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/procedure_sql#metric_level ProcedureSql#metric_level}

---

##### `null_input_behavior`<sup>Optional</sup> <a name="null_input_behavior" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlConfig.property.nullInputBehavior"></a>

```python
null_input_behavior: str
```

- *Type:* str

Specifies the behavior of the procedure when called with null inputs.

Valid values are (case-insensitive): `CALLED ON NULL INPUT` | `RETURNS NULL ON NULL INPUT`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/procedure_sql#null_input_behavior ProcedureSql#null_input_behavior}

---

##### `trace_level`<sup>Optional</sup> <a name="trace_level" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlConfig.property.traceLevel"></a>

```python
trace_level: str
```

- *Type:* str

Trace level value to use when generating/filtering trace events For more information, check [TRACE_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#trace-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/procedure_sql#trace_level ProcedureSql#trace_level}

---

### ProcedureSqlParameters <a name="ProcedureSqlParameters" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParameters.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure_sql

procedureSql.ProcedureSqlParameters()
```


### ProcedureSqlParametersEnableConsoleOutput <a name="ProcedureSqlParametersEnableConsoleOutput" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersEnableConsoleOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersEnableConsoleOutput.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure_sql

procedureSql.ProcedureSqlParametersEnableConsoleOutput()
```


### ProcedureSqlParametersLogLevel <a name="ProcedureSqlParametersLogLevel" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersLogLevel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersLogLevel.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure_sql

procedureSql.ProcedureSqlParametersLogLevel()
```


### ProcedureSqlParametersMetricLevel <a name="ProcedureSqlParametersMetricLevel" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersMetricLevel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersMetricLevel.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure_sql

procedureSql.ProcedureSqlParametersMetricLevel()
```


### ProcedureSqlParametersTraceLevel <a name="ProcedureSqlParametersTraceLevel" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersTraceLevel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersTraceLevel.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure_sql

procedureSql.ProcedureSqlParametersTraceLevel()
```


### ProcedureSqlShowOutput <a name="ProcedureSqlShowOutput" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutput.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure_sql

procedureSql.ProcedureSqlShowOutput()
```


## Classes <a name="Classes" id="Classes"></a>

### ProcedureSqlArgumentsList <a name="ProcedureSqlArgumentsList" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure_sql

procedureSql.ProcedureSqlArgumentsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ProcedureSqlArgumentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlArguments">ProcedureSqlArguments</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ProcedureSqlArguments]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlArguments">ProcedureSqlArguments</a>]]

---


### ProcedureSqlArgumentsOutputReference <a name="ProcedureSqlArgumentsOutputReference" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure_sql

procedureSql.ProcedureSqlArgumentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsOutputReference.resetArgDefaultValue">reset_arg_default_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_arg_default_value` <a name="reset_arg_default_value" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsOutputReference.resetArgDefaultValue"></a>

```python
def reset_arg_default_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsOutputReference.property.argDataTypeInput">arg_data_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsOutputReference.property.argDefaultValueInput">arg_default_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsOutputReference.property.argNameInput">arg_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsOutputReference.property.argDataType">arg_data_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsOutputReference.property.argDefaultValue">arg_default_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsOutputReference.property.argName">arg_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlArguments">ProcedureSqlArguments</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arg_data_type_input`<sup>Optional</sup> <a name="arg_data_type_input" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsOutputReference.property.argDataTypeInput"></a>

```python
arg_data_type_input: str
```

- *Type:* str

---

##### `arg_default_value_input`<sup>Optional</sup> <a name="arg_default_value_input" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsOutputReference.property.argDefaultValueInput"></a>

```python
arg_default_value_input: str
```

- *Type:* str

---

##### `arg_name_input`<sup>Optional</sup> <a name="arg_name_input" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsOutputReference.property.argNameInput"></a>

```python
arg_name_input: str
```

- *Type:* str

---

##### `arg_data_type`<sup>Required</sup> <a name="arg_data_type" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsOutputReference.property.argDataType"></a>

```python
arg_data_type: str
```

- *Type:* str

---

##### `arg_default_value`<sup>Required</sup> <a name="arg_default_value" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsOutputReference.property.argDefaultValue"></a>

```python
arg_default_value: str
```

- *Type:* str

---

##### `arg_name`<sup>Required</sup> <a name="arg_name" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsOutputReference.property.argName"></a>

```python
arg_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlArgumentsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ProcedureSqlArguments]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlArguments">ProcedureSqlArguments</a>]

---


### ProcedureSqlParametersEnableConsoleOutputList <a name="ProcedureSqlParametersEnableConsoleOutputList" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersEnableConsoleOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersEnableConsoleOutputList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure_sql

procedureSql.ProcedureSqlParametersEnableConsoleOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersEnableConsoleOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersEnableConsoleOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersEnableConsoleOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersEnableConsoleOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersEnableConsoleOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersEnableConsoleOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersEnableConsoleOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersEnableConsoleOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersEnableConsoleOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersEnableConsoleOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersEnableConsoleOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersEnableConsoleOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersEnableConsoleOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersEnableConsoleOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersEnableConsoleOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersEnableConsoleOutputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersEnableConsoleOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersEnableConsoleOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ProcedureSqlParametersEnableConsoleOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersEnableConsoleOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersEnableConsoleOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersEnableConsoleOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersEnableConsoleOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersEnableConsoleOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ProcedureSqlParametersEnableConsoleOutputOutputReference <a name="ProcedureSqlParametersEnableConsoleOutputOutputReference" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersEnableConsoleOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersEnableConsoleOutputOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure_sql

procedureSql.ProcedureSqlParametersEnableConsoleOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersEnableConsoleOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersEnableConsoleOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersEnableConsoleOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersEnableConsoleOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersEnableConsoleOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersEnableConsoleOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersEnableConsoleOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersEnableConsoleOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersEnableConsoleOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersEnableConsoleOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersEnableConsoleOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersEnableConsoleOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersEnableConsoleOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersEnableConsoleOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersEnableConsoleOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersEnableConsoleOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersEnableConsoleOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersEnableConsoleOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersEnableConsoleOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersEnableConsoleOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersEnableConsoleOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersEnableConsoleOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersEnableConsoleOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersEnableConsoleOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersEnableConsoleOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersEnableConsoleOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersEnableConsoleOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersEnableConsoleOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersEnableConsoleOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersEnableConsoleOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersEnableConsoleOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersEnableConsoleOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersEnableConsoleOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersEnableConsoleOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersEnableConsoleOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersEnableConsoleOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersEnableConsoleOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersEnableConsoleOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersEnableConsoleOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersEnableConsoleOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersEnableConsoleOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersEnableConsoleOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersEnableConsoleOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersEnableConsoleOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersEnableConsoleOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersEnableConsoleOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersEnableConsoleOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersEnableConsoleOutputOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersEnableConsoleOutputOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersEnableConsoleOutputOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersEnableConsoleOutputOutputReference.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersEnableConsoleOutputOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersEnableConsoleOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersEnableConsoleOutput">ProcedureSqlParametersEnableConsoleOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersEnableConsoleOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersEnableConsoleOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersEnableConsoleOutputOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersEnableConsoleOutputOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersEnableConsoleOutputOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersEnableConsoleOutputOutputReference.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersEnableConsoleOutputOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersEnableConsoleOutputOutputReference.property.internalValue"></a>

```python
internal_value: ProcedureSqlParametersEnableConsoleOutput
```

- *Type:* <a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersEnableConsoleOutput">ProcedureSqlParametersEnableConsoleOutput</a>

---


### ProcedureSqlParametersList <a name="ProcedureSqlParametersList" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure_sql

procedureSql.ProcedureSqlParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ProcedureSqlParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ProcedureSqlParametersLogLevelList <a name="ProcedureSqlParametersLogLevelList" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersLogLevelList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersLogLevelList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure_sql

procedureSql.ProcedureSqlParametersLogLevelList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersLogLevelList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersLogLevelList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersLogLevelList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersLogLevelList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersLogLevelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersLogLevelList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersLogLevelList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersLogLevelList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersLogLevelList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersLogLevelList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersLogLevelList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersLogLevelList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersLogLevelList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersLogLevelList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersLogLevelList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersLogLevelList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersLogLevelList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersLogLevelList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ProcedureSqlParametersLogLevelOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersLogLevelList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersLogLevelList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersLogLevelList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersLogLevelList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersLogLevelList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ProcedureSqlParametersLogLevelOutputReference <a name="ProcedureSqlParametersLogLevelOutputReference" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersLogLevelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersLogLevelOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure_sql

procedureSql.ProcedureSqlParametersLogLevelOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersLogLevelOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersLogLevelOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersLogLevelOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersLogLevelOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersLogLevelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersLogLevelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersLogLevelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersLogLevelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersLogLevelOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersLogLevelOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersLogLevelOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersLogLevelOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersLogLevelOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersLogLevelOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersLogLevelOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersLogLevelOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersLogLevelOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersLogLevelOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersLogLevelOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersLogLevelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersLogLevelOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersLogLevelOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersLogLevelOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersLogLevelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersLogLevelOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersLogLevelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersLogLevelOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersLogLevelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersLogLevelOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersLogLevelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersLogLevelOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersLogLevelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersLogLevelOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersLogLevelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersLogLevelOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersLogLevelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersLogLevelOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersLogLevelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersLogLevelOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersLogLevelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersLogLevelOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersLogLevelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersLogLevelOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersLogLevelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersLogLevelOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersLogLevelOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersLogLevelOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersLogLevelOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersLogLevelOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersLogLevelOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersLogLevelOutputReference.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersLogLevelOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersLogLevelOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersLogLevel">ProcedureSqlParametersLogLevel</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersLogLevelOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersLogLevelOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersLogLevelOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersLogLevelOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersLogLevelOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersLogLevelOutputReference.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersLogLevelOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersLogLevelOutputReference.property.internalValue"></a>

```python
internal_value: ProcedureSqlParametersLogLevel
```

- *Type:* <a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersLogLevel">ProcedureSqlParametersLogLevel</a>

---


### ProcedureSqlParametersMetricLevelList <a name="ProcedureSqlParametersMetricLevelList" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersMetricLevelList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersMetricLevelList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure_sql

procedureSql.ProcedureSqlParametersMetricLevelList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersMetricLevelList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersMetricLevelList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersMetricLevelList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersMetricLevelList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersMetricLevelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersMetricLevelList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersMetricLevelList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersMetricLevelList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersMetricLevelList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersMetricLevelList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersMetricLevelList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersMetricLevelList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersMetricLevelList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersMetricLevelList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersMetricLevelList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersMetricLevelList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersMetricLevelList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersMetricLevelList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ProcedureSqlParametersMetricLevelOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersMetricLevelList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersMetricLevelList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersMetricLevelList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersMetricLevelList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersMetricLevelList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ProcedureSqlParametersMetricLevelOutputReference <a name="ProcedureSqlParametersMetricLevelOutputReference" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersMetricLevelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersMetricLevelOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure_sql

procedureSql.ProcedureSqlParametersMetricLevelOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersMetricLevelOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersMetricLevelOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersMetricLevelOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersMetricLevelOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersMetricLevelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersMetricLevelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersMetricLevelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersMetricLevelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersMetricLevelOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersMetricLevelOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersMetricLevelOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersMetricLevelOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersMetricLevelOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersMetricLevelOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersMetricLevelOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersMetricLevelOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersMetricLevelOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersMetricLevelOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersMetricLevelOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersMetricLevelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersMetricLevelOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersMetricLevelOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersMetricLevelOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersMetricLevelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersMetricLevelOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersMetricLevelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersMetricLevelOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersMetricLevelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersMetricLevelOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersMetricLevelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersMetricLevelOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersMetricLevelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersMetricLevelOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersMetricLevelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersMetricLevelOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersMetricLevelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersMetricLevelOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersMetricLevelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersMetricLevelOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersMetricLevelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersMetricLevelOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersMetricLevelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersMetricLevelOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersMetricLevelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersMetricLevelOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersMetricLevelOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersMetricLevelOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersMetricLevelOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersMetricLevelOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersMetricLevelOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersMetricLevelOutputReference.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersMetricLevelOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersMetricLevelOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersMetricLevel">ProcedureSqlParametersMetricLevel</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersMetricLevelOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersMetricLevelOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersMetricLevelOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersMetricLevelOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersMetricLevelOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersMetricLevelOutputReference.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersMetricLevelOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersMetricLevelOutputReference.property.internalValue"></a>

```python
internal_value: ProcedureSqlParametersMetricLevel
```

- *Type:* <a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersMetricLevel">ProcedureSqlParametersMetricLevel</a>

---


### ProcedureSqlParametersOutputReference <a name="ProcedureSqlParametersOutputReference" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure_sql

procedureSql.ProcedureSqlParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersOutputReference.property.enableConsoleOutput">enable_console_output</a></code> | <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersEnableConsoleOutputList">ProcedureSqlParametersEnableConsoleOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersOutputReference.property.logLevel">log_level</a></code> | <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersLogLevelList">ProcedureSqlParametersLogLevelList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersOutputReference.property.metricLevel">metric_level</a></code> | <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersMetricLevelList">ProcedureSqlParametersMetricLevelList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersOutputReference.property.traceLevel">trace_level</a></code> | <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersTraceLevelList">ProcedureSqlParametersTraceLevelList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParameters">ProcedureSqlParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_console_output`<sup>Required</sup> <a name="enable_console_output" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersOutputReference.property.enableConsoleOutput"></a>

```python
enable_console_output: ProcedureSqlParametersEnableConsoleOutputList
```

- *Type:* <a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersEnableConsoleOutputList">ProcedureSqlParametersEnableConsoleOutputList</a>

---

##### `log_level`<sup>Required</sup> <a name="log_level" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersOutputReference.property.logLevel"></a>

```python
log_level: ProcedureSqlParametersLogLevelList
```

- *Type:* <a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersLogLevelList">ProcedureSqlParametersLogLevelList</a>

---

##### `metric_level`<sup>Required</sup> <a name="metric_level" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersOutputReference.property.metricLevel"></a>

```python
metric_level: ProcedureSqlParametersMetricLevelList
```

- *Type:* <a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersMetricLevelList">ProcedureSqlParametersMetricLevelList</a>

---

##### `trace_level`<sup>Required</sup> <a name="trace_level" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersOutputReference.property.traceLevel"></a>

```python
trace_level: ProcedureSqlParametersTraceLevelList
```

- *Type:* <a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersTraceLevelList">ProcedureSqlParametersTraceLevelList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersOutputReference.property.internalValue"></a>

```python
internal_value: ProcedureSqlParameters
```

- *Type:* <a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParameters">ProcedureSqlParameters</a>

---


### ProcedureSqlParametersTraceLevelList <a name="ProcedureSqlParametersTraceLevelList" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersTraceLevelList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersTraceLevelList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure_sql

procedureSql.ProcedureSqlParametersTraceLevelList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersTraceLevelList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersTraceLevelList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersTraceLevelList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersTraceLevelList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersTraceLevelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersTraceLevelList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersTraceLevelList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersTraceLevelList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersTraceLevelList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersTraceLevelList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersTraceLevelList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersTraceLevelList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersTraceLevelList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersTraceLevelList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersTraceLevelList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersTraceLevelList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersTraceLevelList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersTraceLevelList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ProcedureSqlParametersTraceLevelOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersTraceLevelList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersTraceLevelList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersTraceLevelList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersTraceLevelList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersTraceLevelList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ProcedureSqlParametersTraceLevelOutputReference <a name="ProcedureSqlParametersTraceLevelOutputReference" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersTraceLevelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersTraceLevelOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure_sql

procedureSql.ProcedureSqlParametersTraceLevelOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersTraceLevelOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersTraceLevelOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersTraceLevelOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersTraceLevelOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersTraceLevelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersTraceLevelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersTraceLevelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersTraceLevelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersTraceLevelOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersTraceLevelOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersTraceLevelOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersTraceLevelOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersTraceLevelOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersTraceLevelOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersTraceLevelOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersTraceLevelOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersTraceLevelOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersTraceLevelOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersTraceLevelOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersTraceLevelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersTraceLevelOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersTraceLevelOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersTraceLevelOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersTraceLevelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersTraceLevelOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersTraceLevelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersTraceLevelOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersTraceLevelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersTraceLevelOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersTraceLevelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersTraceLevelOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersTraceLevelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersTraceLevelOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersTraceLevelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersTraceLevelOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersTraceLevelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersTraceLevelOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersTraceLevelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersTraceLevelOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersTraceLevelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersTraceLevelOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersTraceLevelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersTraceLevelOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersTraceLevelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersTraceLevelOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersTraceLevelOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersTraceLevelOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersTraceLevelOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersTraceLevelOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersTraceLevelOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersTraceLevelOutputReference.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersTraceLevelOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersTraceLevelOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersTraceLevel">ProcedureSqlParametersTraceLevel</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersTraceLevelOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersTraceLevelOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersTraceLevelOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersTraceLevelOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersTraceLevelOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersTraceLevelOutputReference.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersTraceLevelOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersTraceLevelOutputReference.property.internalValue"></a>

```python
internal_value: ProcedureSqlParametersTraceLevel
```

- *Type:* <a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlParametersTraceLevel">ProcedureSqlParametersTraceLevel</a>

---


### ProcedureSqlShowOutputList <a name="ProcedureSqlShowOutputList" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure_sql

procedureSql.ProcedureSqlShowOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ProcedureSqlShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ProcedureSqlShowOutputOutputReference <a name="ProcedureSqlShowOutputOutputReference" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure_sql

procedureSql.ProcedureSqlShowOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputOutputReference.property.argumentsRaw">arguments_raw</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputOutputReference.property.catalogName">catalog_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputOutputReference.property.externalAccessIntegrations">external_access_integrations</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputOutputReference.property.isAggregate">is_aggregate</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputOutputReference.property.isAnsi">is_ansi</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputOutputReference.property.isBuiltin">is_builtin</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputOutputReference.property.isSecure">is_secure</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputOutputReference.property.isTableFunction">is_table_function</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputOutputReference.property.maxNumArguments">max_num_arguments</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputOutputReference.property.minNumArguments">min_num_arguments</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputOutputReference.property.secrets">secrets</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputOutputReference.property.validForClustering">valid_for_clustering</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutput">ProcedureSqlShowOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arguments_raw`<sup>Required</sup> <a name="arguments_raw" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputOutputReference.property.argumentsRaw"></a>

```python
arguments_raw: str
```

- *Type:* str

---

##### `catalog_name`<sup>Required</sup> <a name="catalog_name" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputOutputReference.property.catalogName"></a>

```python
catalog_name: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `external_access_integrations`<sup>Required</sup> <a name="external_access_integrations" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputOutputReference.property.externalAccessIntegrations"></a>

```python
external_access_integrations: str
```

- *Type:* str

---

##### `is_aggregate`<sup>Required</sup> <a name="is_aggregate" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputOutputReference.property.isAggregate"></a>

```python
is_aggregate: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_ansi`<sup>Required</sup> <a name="is_ansi" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputOutputReference.property.isAnsi"></a>

```python
is_ansi: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_builtin`<sup>Required</sup> <a name="is_builtin" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputOutputReference.property.isBuiltin"></a>

```python
is_builtin: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_secure`<sup>Required</sup> <a name="is_secure" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputOutputReference.property.isSecure"></a>

```python
is_secure: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_table_function`<sup>Required</sup> <a name="is_table_function" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputOutputReference.property.isTableFunction"></a>

```python
is_table_function: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `max_num_arguments`<sup>Required</sup> <a name="max_num_arguments" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputOutputReference.property.maxNumArguments"></a>

```python
max_num_arguments: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_num_arguments`<sup>Required</sup> <a name="min_num_arguments" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputOutputReference.property.minNumArguments"></a>

```python
min_num_arguments: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `secrets`<sup>Required</sup> <a name="secrets" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputOutputReference.property.secrets"></a>

```python
secrets: str
```

- *Type:* str

---

##### `valid_for_clustering`<sup>Required</sup> <a name="valid_for_clustering" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputOutputReference.property.validForClustering"></a>

```python
valid_for_clustering: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutputOutputReference.property.internalValue"></a>

```python
internal_value: ProcedureSqlShowOutput
```

- *Type:* <a href="#@cdktf/provider-snowflake.procedureSql.ProcedureSqlShowOutput">ProcedureSqlShowOutput</a>

---



