# `procedureScala` Submodule <a name="`procedureScala` Submodule" id="@cdktf/provider-snowflake.procedureScala"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProcedureScala <a name="ProcedureScala" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.1/docs/resources/procedure_scala snowflake_procedure_scala}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure_scala

procedureScala.ProcedureScala(
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
  handler: str,
  name: str,
  return_type: str,
  runtime_version: str,
  schema: str,
  snowpark_package: str,
  arguments: typing.Union[IResolvable, typing.List[ProcedureScalaArguments]] = None,
  comment: str = None,
  enable_console_output: typing.Union[bool, IResolvable] = None,
  execute_as: str = None,
  external_access_integrations: typing.List[str] = None,
  id: str = None,
  imports: typing.Union[IResolvable, typing.List[ProcedureScalaImports]] = None,
  is_secure: str = None,
  log_level: str = None,
  metric_level: str = None,
  null_input_behavior: str = None,
  packages: typing.List[str] = None,
  procedure_definition: str = None,
  secrets: typing.Union[IResolvable, typing.List[ProcedureScalaSecrets]] = None,
  target_path: ProcedureScalaTargetPath = None,
  timeouts: ProcedureScalaTimeouts = None,
  trace_level: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.Initializer.parameter.database">database</a></code> | <code>str</code> | The database in which to create the procedure. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.Initializer.parameter.handler">handler</a></code> | <code>str</code> | Use the fully qualified name of the method or function for the stored procedure. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the procedure; |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.Initializer.parameter.returnType">return_type</a></code> | <code>str</code> | Specifies the type of the result returned by the stored procedure. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.Initializer.parameter.runtimeVersion">runtime_version</a></code> | <code>str</code> | The language runtime version to use. Currently, the supported versions are: 2.12. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.Initializer.parameter.schema">schema</a></code> | <code>str</code> | The schema in which to create the procedure. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.Initializer.parameter.snowparkPackage">snowpark_package</a></code> | <code>str</code> | The Snowpark package is required for stored procedures, so it must always be present. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.Initializer.parameter.arguments">arguments</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaArguments">ProcedureScalaArguments</a>]]</code> | arguments block. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.Initializer.parameter.comment">comment</a></code> | <code>str</code> | (Default: `user-defined procedure`) Specifies a comment for the procedure. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.Initializer.parameter.enableConsoleOutput">enable_console_output</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable stdout/stderr fast path logging for anonyous stored procs. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.Initializer.parameter.executeAs">execute_as</a></code> | <code>str</code> | Specifies whether the stored procedure executes with the privileges of the owner (an “owner’s rights” stored procedure) or with the privileges of the caller (a “caller’s rights” stored procedure). |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.Initializer.parameter.externalAccessIntegrations">external_access_integrations</a></code> | <code>typing.List[str]</code> | The names of [external access integrations](https://docs.snowflake.com/en/sql-reference/sql/create-external-access-integration) needed in order for this procedure’s handler code to access external networks. An external access integration specifies [network rules](https://docs.snowflake.com/en/sql-reference/sql/create-network-rule) and [secrets](https://docs.snowflake.com/en/sql-reference/sql/create-secret) that specify external locations and credentials (if any) allowed for use by handler code when making requests of an external network, such as an external REST API. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.1/docs/resources/procedure_scala#id ProcedureScala#id}. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.Initializer.parameter.imports">imports</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaImports">ProcedureScalaImports</a>]]</code> | imports block. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.Initializer.parameter.isSecure">is_secure</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies that the procedure is secure. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.Initializer.parameter.logLevel">log_level</a></code> | <code>str</code> | LOG_LEVEL to use when filtering events For more information, check [LOG_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#log-level). |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.Initializer.parameter.metricLevel">metric_level</a></code> | <code>str</code> | METRIC_LEVEL value to control whether to emit metrics to Event Table For more information, check [METRIC_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#metric-level). |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.Initializer.parameter.nullInputBehavior">null_input_behavior</a></code> | <code>str</code> | Specifies the behavior of the procedure when called with null inputs. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.Initializer.parameter.packages">packages</a></code> | <code>typing.List[str]</code> | List of the names of packages deployed in Snowflake that should be included in the handler code’s execution environment. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.Initializer.parameter.procedureDefinition">procedure_definition</a></code> | <code>str</code> | Defines the code executed by the stored procedure. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.Initializer.parameter.secrets">secrets</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecrets">ProcedureScalaSecrets</a>]]</code> | secrets block. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.Initializer.parameter.targetPath">target_path</a></code> | <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaTargetPath">ProcedureScalaTargetPath</a></code> | target_path block. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaTimeouts">ProcedureScalaTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.Initializer.parameter.traceLevel">trace_level</a></code> | <code>str</code> | Trace level value to use when generating/filtering trace events For more information, check [TRACE_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#trace-level). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.Initializer.parameter.database"></a>

- *Type:* str

The database in which to create the procedure.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.1/docs/resources/procedure_scala#database ProcedureScala#database}

---

##### `handler`<sup>Required</sup> <a name="handler" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.Initializer.parameter.handler"></a>

- *Type:* str

Use the fully qualified name of the method or function for the stored procedure.

This is typically in the following form: `com.my_company.my_package.MyClass.myMethod` where `com.my_company.my_package` corresponds to the package containing the object or class: `package com.my_company.my_package;`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.1/docs/resources/procedure_scala#handler ProcedureScala#handler}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.Initializer.parameter.name"></a>

- *Type:* str

The name of the procedure;

the identifier does not need to be unique for the schema in which the procedure is created because stored procedures are [identified and resolved by the combination of the name and argument types](https://docs.snowflake.com/en/developer-guide/udf-stored-procedure-naming-conventions.html#label-procedure-function-name-overloading). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.1/docs/resources/procedure_scala#name ProcedureScala#name}

---

##### `return_type`<sup>Required</sup> <a name="return_type" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.Initializer.parameter.returnType"></a>

- *Type:* str

Specifies the type of the result returned by the stored procedure.

For `<result_data_type>`, use the Snowflake data type that corresponds to the type of the language that you are using (see [SQL-Scala Data Type Mappings](https://docs.snowflake.com/en/developer-guide/udf-stored-procedure-data-type-mapping.html#label-sql-types-to-scala-types)). For `RETURNS TABLE ( [ col_name col_data_type [ , ... ] ] )`, if you know the Snowflake data types of the columns in the returned table, specify the column names and types. Otherwise (e.g. if you are determining the column types during run time), you can omit the column names and types (i.e. `TABLE ()`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.1/docs/resources/procedure_scala#return_type ProcedureScala#return_type}

---

##### `runtime_version`<sup>Required</sup> <a name="runtime_version" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.Initializer.parameter.runtimeVersion"></a>

- *Type:* str

The language runtime version to use. Currently, the supported versions are: 2.12.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.1/docs/resources/procedure_scala#runtime_version ProcedureScala#runtime_version}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.Initializer.parameter.schema"></a>

- *Type:* str

The schema in which to create the procedure.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.1/docs/resources/procedure_scala#schema ProcedureScala#schema}

---

##### `snowpark_package`<sup>Required</sup> <a name="snowpark_package" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.Initializer.parameter.snowparkPackage"></a>

- *Type:* str

The Snowpark package is required for stored procedures, so it must always be present.

For more information about Snowpark, see [Snowpark API](https://docs.snowflake.com/en/developer-guide/snowpark/index).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.1/docs/resources/procedure_scala#snowpark_package ProcedureScala#snowpark_package}

---

##### `arguments`<sup>Optional</sup> <a name="arguments" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.Initializer.parameter.arguments"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaArguments">ProcedureScalaArguments</a>]]

arguments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.1/docs/resources/procedure_scala#arguments ProcedureScala#arguments}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.Initializer.parameter.comment"></a>

- *Type:* str

(Default: `user-defined procedure`) Specifies a comment for the procedure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.1/docs/resources/procedure_scala#comment ProcedureScala#comment}

---

##### `enable_console_output`<sup>Optional</sup> <a name="enable_console_output" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.Initializer.parameter.enableConsoleOutput"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable stdout/stderr fast path logging for anonyous stored procs.

This is a public parameter (similar to LOG_LEVEL). For more information, check [ENABLE_CONSOLE_OUTPUT docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-console-output).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.1/docs/resources/procedure_scala#enable_console_output ProcedureScala#enable_console_output}

---

##### `execute_as`<sup>Optional</sup> <a name="execute_as" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.Initializer.parameter.executeAs"></a>

- *Type:* str

Specifies whether the stored procedure executes with the privileges of the owner (an “owner’s rights” stored procedure) or with the privileges of the caller (a “caller’s rights” stored procedure).

If you execute the statement CREATE PROCEDURE … EXECUTE AS CALLER, then in the future the procedure will execute as a caller’s rights procedure. If you execute CREATE PROCEDURE … EXECUTE AS OWNER, then the procedure will execute as an owner’s rights procedure. For more information, see [Understanding caller’s rights and owner’s rights stored procedures](https://docs.snowflake.com/en/developer-guide/stored-procedure/stored-procedures-rights). Valid values are (case-insensitive): `CALLER` | `OWNER`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.1/docs/resources/procedure_scala#execute_as ProcedureScala#execute_as}

---

##### `external_access_integrations`<sup>Optional</sup> <a name="external_access_integrations" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.Initializer.parameter.externalAccessIntegrations"></a>

- *Type:* typing.List[str]

The names of [external access integrations](https://docs.snowflake.com/en/sql-reference/sql/create-external-access-integration) needed in order for this procedure’s handler code to access external networks. An external access integration specifies [network rules](https://docs.snowflake.com/en/sql-reference/sql/create-network-rule) and [secrets](https://docs.snowflake.com/en/sql-reference/sql/create-secret) that specify external locations and credentials (if any) allowed for use by handler code when making requests of an external network, such as an external REST API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.1/docs/resources/procedure_scala#external_access_integrations ProcedureScala#external_access_integrations}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.1/docs/resources/procedure_scala#id ProcedureScala#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imports`<sup>Optional</sup> <a name="imports" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.Initializer.parameter.imports"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaImports">ProcedureScalaImports</a>]]

imports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.1/docs/resources/procedure_scala#imports ProcedureScala#imports}

---

##### `is_secure`<sup>Optional</sup> <a name="is_secure" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.Initializer.parameter.isSecure"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies that the procedure is secure.

For more information about secure procedures, see [Protecting Sensitive Information with Secure UDFs and Stored Procedures](https://docs.snowflake.com/en/developer-guide/secure-udf-procedure). Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.1/docs/resources/procedure_scala#is_secure ProcedureScala#is_secure}

---

##### `log_level`<sup>Optional</sup> <a name="log_level" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.Initializer.parameter.logLevel"></a>

- *Type:* str

LOG_LEVEL to use when filtering events For more information, check [LOG_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#log-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.1/docs/resources/procedure_scala#log_level ProcedureScala#log_level}

---

##### `metric_level`<sup>Optional</sup> <a name="metric_level" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.Initializer.parameter.metricLevel"></a>

- *Type:* str

METRIC_LEVEL value to control whether to emit metrics to Event Table For more information, check [METRIC_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#metric-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.1/docs/resources/procedure_scala#metric_level ProcedureScala#metric_level}

---

##### `null_input_behavior`<sup>Optional</sup> <a name="null_input_behavior" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.Initializer.parameter.nullInputBehavior"></a>

- *Type:* str

Specifies the behavior of the procedure when called with null inputs.

Valid values are (case-insensitive): `CALLED ON NULL INPUT` | `RETURNS NULL ON NULL INPUT`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.1/docs/resources/procedure_scala#null_input_behavior ProcedureScala#null_input_behavior}

---

##### `packages`<sup>Optional</sup> <a name="packages" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.Initializer.parameter.packages"></a>

- *Type:* typing.List[str]

List of the names of packages deployed in Snowflake that should be included in the handler code’s execution environment.

The Snowpark package is required for stored procedures, but is specified in the `snowpark_package` attribute. For more information about Snowpark, see [Snowpark API](https://docs.snowflake.com/en/developer-guide/snowpark/index).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.1/docs/resources/procedure_scala#packages ProcedureScala#packages}

---

##### `procedure_definition`<sup>Optional</sup> <a name="procedure_definition" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.Initializer.parameter.procedureDefinition"></a>

- *Type:* str

Defines the code executed by the stored procedure.

The definition can consist of any valid code. Wrapping `$$` signs are added by the provider automatically; do not include them. The `procedure_definition` value must be Scala source code. For more information, see [Scala (using Snowpark)](https://docs.snowflake.com/en/developer-guide/stored-procedure/stored-procedures-scala). To mitigate permadiff on this field, the provider replaces blank characters with a space. This can lead to false positives in cases where a change in case or run of whitespace is semantically significant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.1/docs/resources/procedure_scala#procedure_definition ProcedureScala#procedure_definition}

---

##### `secrets`<sup>Optional</sup> <a name="secrets" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.Initializer.parameter.secrets"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecrets">ProcedureScalaSecrets</a>]]

secrets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.1/docs/resources/procedure_scala#secrets ProcedureScala#secrets}

---

##### `target_path`<sup>Optional</sup> <a name="target_path" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.Initializer.parameter.targetPath"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaTargetPath">ProcedureScalaTargetPath</a>

target_path block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.1/docs/resources/procedure_scala#target_path ProcedureScala#target_path}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaTimeouts">ProcedureScalaTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.1/docs/resources/procedure_scala#timeouts ProcedureScala#timeouts}

---

##### `trace_level`<sup>Optional</sup> <a name="trace_level" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.Initializer.parameter.traceLevel"></a>

- *Type:* str

Trace level value to use when generating/filtering trace events For more information, check [TRACE_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#trace-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.1/docs/resources/procedure_scala#trace_level ProcedureScala#trace_level}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.putArguments">put_arguments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.putImports">put_imports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.putSecrets">put_secrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.putTargetPath">put_target_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.resetArguments">reset_arguments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.resetEnableConsoleOutput">reset_enable_console_output</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.resetExecuteAs">reset_execute_as</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.resetExternalAccessIntegrations">reset_external_access_integrations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.resetImports">reset_imports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.resetIsSecure">reset_is_secure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.resetLogLevel">reset_log_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.resetMetricLevel">reset_metric_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.resetNullInputBehavior">reset_null_input_behavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.resetPackages">reset_packages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.resetProcedureDefinition">reset_procedure_definition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.resetSecrets">reset_secrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.resetTargetPath">reset_target_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.resetTraceLevel">reset_trace_level</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_arguments` <a name="put_arguments" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.putArguments"></a>

```python
def put_arguments(
  value: typing.Union[IResolvable, typing.List[ProcedureScalaArguments]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.putArguments.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaArguments">ProcedureScalaArguments</a>]]

---

##### `put_imports` <a name="put_imports" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.putImports"></a>

```python
def put_imports(
  value: typing.Union[IResolvable, typing.List[ProcedureScalaImports]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.putImports.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaImports">ProcedureScalaImports</a>]]

---

##### `put_secrets` <a name="put_secrets" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.putSecrets"></a>

```python
def put_secrets(
  value: typing.Union[IResolvable, typing.List[ProcedureScalaSecrets]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.putSecrets.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecrets">ProcedureScalaSecrets</a>]]

---

##### `put_target_path` <a name="put_target_path" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.putTargetPath"></a>

```python
def put_target_path(
  path_on_stage: str,
  stage_location: str
) -> None
```

###### `path_on_stage`<sup>Required</sup> <a name="path_on_stage" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.putTargetPath.parameter.pathOnStage"></a>

- *Type:* str

Path for import on stage, without the leading `/`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.1/docs/resources/procedure_scala#path_on_stage ProcedureScala#path_on_stage}

---

###### `stage_location`<sup>Required</sup> <a name="stage_location" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.putTargetPath.parameter.stageLocation"></a>

- *Type:* str

Stage location without leading `@`.

To use your user's stage set this to `~`, otherwise pass fully qualified name of the stage (with every part contained in double quotes or use `snowflake_stage.<your stage's resource name>.fully_qualified_name` if you manage this stage through terraform).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.1/docs/resources/procedure_scala#stage_location ProcedureScala#stage_location}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.1/docs/resources/procedure_scala#create ProcedureScala#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.1/docs/resources/procedure_scala#delete ProcedureScala#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.1/docs/resources/procedure_scala#read ProcedureScala#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.1/docs/resources/procedure_scala#update ProcedureScala#update}.

---

##### `reset_arguments` <a name="reset_arguments" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.resetArguments"></a>

```python
def reset_arguments() -> None
```

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_enable_console_output` <a name="reset_enable_console_output" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.resetEnableConsoleOutput"></a>

```python
def reset_enable_console_output() -> None
```

##### `reset_execute_as` <a name="reset_execute_as" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.resetExecuteAs"></a>

```python
def reset_execute_as() -> None
```

##### `reset_external_access_integrations` <a name="reset_external_access_integrations" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.resetExternalAccessIntegrations"></a>

```python
def reset_external_access_integrations() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_imports` <a name="reset_imports" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.resetImports"></a>

```python
def reset_imports() -> None
```

##### `reset_is_secure` <a name="reset_is_secure" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.resetIsSecure"></a>

```python
def reset_is_secure() -> None
```

##### `reset_log_level` <a name="reset_log_level" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.resetLogLevel"></a>

```python
def reset_log_level() -> None
```

##### `reset_metric_level` <a name="reset_metric_level" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.resetMetricLevel"></a>

```python
def reset_metric_level() -> None
```

##### `reset_null_input_behavior` <a name="reset_null_input_behavior" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.resetNullInputBehavior"></a>

```python
def reset_null_input_behavior() -> None
```

##### `reset_packages` <a name="reset_packages" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.resetPackages"></a>

```python
def reset_packages() -> None
```

##### `reset_procedure_definition` <a name="reset_procedure_definition" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.resetProcedureDefinition"></a>

```python
def reset_procedure_definition() -> None
```

##### `reset_secrets` <a name="reset_secrets" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.resetSecrets"></a>

```python
def reset_secrets() -> None
```

##### `reset_target_path` <a name="reset_target_path" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.resetTargetPath"></a>

```python
def reset_target_path() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_trace_level` <a name="reset_trace_level" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.resetTraceLevel"></a>

```python
def reset_trace_level() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ProcedureScala resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.isConstruct"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure_scala

procedureScala.ProcedureScala.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure_scala

procedureScala.ProcedureScala.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure_scala

procedureScala.ProcedureScala.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure_scala

procedureScala.ProcedureScala.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ProcedureScala resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ProcedureScala to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ProcedureScala that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.1/docs/resources/procedure_scala#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ProcedureScala to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.arguments">arguments</a></code> | <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsList">ProcedureScalaArgumentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.fullyQualifiedName">fully_qualified_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.imports">imports</a></code> | <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaImportsList">ProcedureScalaImportsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.parameters">parameters</a></code> | <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersList">ProcedureScalaParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.procedureLanguage">procedure_language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.secrets">secrets</a></code> | <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecretsList">ProcedureScalaSecretsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.showOutput">show_output</a></code> | <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputList">ProcedureScalaShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.targetPath">target_path</a></code> | <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaTargetPathOutputReference">ProcedureScalaTargetPathOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaTimeoutsOutputReference">ProcedureScalaTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.argumentsInput">arguments_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaArguments">ProcedureScalaArguments</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.enableConsoleOutputInput">enable_console_output_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.executeAsInput">execute_as_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.externalAccessIntegrationsInput">external_access_integrations_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.handlerInput">handler_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.importsInput">imports_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaImports">ProcedureScalaImports</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.isSecureInput">is_secure_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.logLevelInput">log_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.metricLevelInput">metric_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.nullInputBehaviorInput">null_input_behavior_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.packagesInput">packages_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.procedureDefinitionInput">procedure_definition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.returnTypeInput">return_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.runtimeVersionInput">runtime_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.schemaInput">schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.secretsInput">secrets_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecrets">ProcedureScalaSecrets</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.snowparkPackageInput">snowpark_package_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.targetPathInput">target_path_input</a></code> | <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaTargetPath">ProcedureScalaTargetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaTimeouts">ProcedureScalaTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.traceLevelInput">trace_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.enableConsoleOutput">enable_console_output</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.executeAs">execute_as</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.externalAccessIntegrations">external_access_integrations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.handler">handler</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.isSecure">is_secure</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.logLevel">log_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.metricLevel">metric_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.nullInputBehavior">null_input_behavior</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.packages">packages</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.procedureDefinition">procedure_definition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.returnType">return_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.runtimeVersion">runtime_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.schema">schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.snowparkPackage">snowpark_package</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.traceLevel">trace_level</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arguments`<sup>Required</sup> <a name="arguments" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.arguments"></a>

```python
arguments: ProcedureScalaArgumentsList
```

- *Type:* <a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsList">ProcedureScalaArgumentsList</a>

---

##### `fully_qualified_name`<sup>Required</sup> <a name="fully_qualified_name" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.fullyQualifiedName"></a>

```python
fully_qualified_name: str
```

- *Type:* str

---

##### `imports`<sup>Required</sup> <a name="imports" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.imports"></a>

```python
imports: ProcedureScalaImportsList
```

- *Type:* <a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaImportsList">ProcedureScalaImportsList</a>

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.parameters"></a>

```python
parameters: ProcedureScalaParametersList
```

- *Type:* <a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersList">ProcedureScalaParametersList</a>

---

##### `procedure_language`<sup>Required</sup> <a name="procedure_language" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.procedureLanguage"></a>

```python
procedure_language: str
```

- *Type:* str

---

##### `secrets`<sup>Required</sup> <a name="secrets" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.secrets"></a>

```python
secrets: ProcedureScalaSecretsList
```

- *Type:* <a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecretsList">ProcedureScalaSecretsList</a>

---

##### `show_output`<sup>Required</sup> <a name="show_output" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.showOutput"></a>

```python
show_output: ProcedureScalaShowOutputList
```

- *Type:* <a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputList">ProcedureScalaShowOutputList</a>

---

##### `target_path`<sup>Required</sup> <a name="target_path" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.targetPath"></a>

```python
target_path: ProcedureScalaTargetPathOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaTargetPathOutputReference">ProcedureScalaTargetPathOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.timeouts"></a>

```python
timeouts: ProcedureScalaTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaTimeoutsOutputReference">ProcedureScalaTimeoutsOutputReference</a>

---

##### `arguments_input`<sup>Optional</sup> <a name="arguments_input" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.argumentsInput"></a>

```python
arguments_input: typing.Union[IResolvable, typing.List[ProcedureScalaArguments]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaArguments">ProcedureScalaArguments</a>]]

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `enable_console_output_input`<sup>Optional</sup> <a name="enable_console_output_input" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.enableConsoleOutputInput"></a>

```python
enable_console_output_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `execute_as_input`<sup>Optional</sup> <a name="execute_as_input" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.executeAsInput"></a>

```python
execute_as_input: str
```

- *Type:* str

---

##### `external_access_integrations_input`<sup>Optional</sup> <a name="external_access_integrations_input" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.externalAccessIntegrationsInput"></a>

```python
external_access_integrations_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `handler_input`<sup>Optional</sup> <a name="handler_input" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.handlerInput"></a>

```python
handler_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `imports_input`<sup>Optional</sup> <a name="imports_input" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.importsInput"></a>

```python
imports_input: typing.Union[IResolvable, typing.List[ProcedureScalaImports]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaImports">ProcedureScalaImports</a>]]

---

##### `is_secure_input`<sup>Optional</sup> <a name="is_secure_input" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.isSecureInput"></a>

```python
is_secure_input: str
```

- *Type:* str

---

##### `log_level_input`<sup>Optional</sup> <a name="log_level_input" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.logLevelInput"></a>

```python
log_level_input: str
```

- *Type:* str

---

##### `metric_level_input`<sup>Optional</sup> <a name="metric_level_input" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.metricLevelInput"></a>

```python
metric_level_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `null_input_behavior_input`<sup>Optional</sup> <a name="null_input_behavior_input" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.nullInputBehaviorInput"></a>

```python
null_input_behavior_input: str
```

- *Type:* str

---

##### `packages_input`<sup>Optional</sup> <a name="packages_input" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.packagesInput"></a>

```python
packages_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `procedure_definition_input`<sup>Optional</sup> <a name="procedure_definition_input" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.procedureDefinitionInput"></a>

```python
procedure_definition_input: str
```

- *Type:* str

---

##### `return_type_input`<sup>Optional</sup> <a name="return_type_input" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.returnTypeInput"></a>

```python
return_type_input: str
```

- *Type:* str

---

##### `runtime_version_input`<sup>Optional</sup> <a name="runtime_version_input" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.runtimeVersionInput"></a>

```python
runtime_version_input: str
```

- *Type:* str

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.schemaInput"></a>

```python
schema_input: str
```

- *Type:* str

---

##### `secrets_input`<sup>Optional</sup> <a name="secrets_input" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.secretsInput"></a>

```python
secrets_input: typing.Union[IResolvable, typing.List[ProcedureScalaSecrets]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecrets">ProcedureScalaSecrets</a>]]

---

##### `snowpark_package_input`<sup>Optional</sup> <a name="snowpark_package_input" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.snowparkPackageInput"></a>

```python
snowpark_package_input: str
```

- *Type:* str

---

##### `target_path_input`<sup>Optional</sup> <a name="target_path_input" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.targetPathInput"></a>

```python
target_path_input: ProcedureScalaTargetPath
```

- *Type:* <a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaTargetPath">ProcedureScalaTargetPath</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ProcedureScalaTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaTimeouts">ProcedureScalaTimeouts</a>]

---

##### `trace_level_input`<sup>Optional</sup> <a name="trace_level_input" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.traceLevelInput"></a>

```python
trace_level_input: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `enable_console_output`<sup>Required</sup> <a name="enable_console_output" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.enableConsoleOutput"></a>

```python
enable_console_output: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `execute_as`<sup>Required</sup> <a name="execute_as" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.executeAs"></a>

```python
execute_as: str
```

- *Type:* str

---

##### `external_access_integrations`<sup>Required</sup> <a name="external_access_integrations" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.externalAccessIntegrations"></a>

```python
external_access_integrations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `handler`<sup>Required</sup> <a name="handler" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.handler"></a>

```python
handler: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_secure`<sup>Required</sup> <a name="is_secure" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.isSecure"></a>

```python
is_secure: str
```

- *Type:* str

---

##### `log_level`<sup>Required</sup> <a name="log_level" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.logLevel"></a>

```python
log_level: str
```

- *Type:* str

---

##### `metric_level`<sup>Required</sup> <a name="metric_level" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.metricLevel"></a>

```python
metric_level: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `null_input_behavior`<sup>Required</sup> <a name="null_input_behavior" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.nullInputBehavior"></a>

```python
null_input_behavior: str
```

- *Type:* str

---

##### `packages`<sup>Required</sup> <a name="packages" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.packages"></a>

```python
packages: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `procedure_definition`<sup>Required</sup> <a name="procedure_definition" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.procedureDefinition"></a>

```python
procedure_definition: str
```

- *Type:* str

---

##### `return_type`<sup>Required</sup> <a name="return_type" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.returnType"></a>

```python
return_type: str
```

- *Type:* str

---

##### `runtime_version`<sup>Required</sup> <a name="runtime_version" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.runtimeVersion"></a>

```python
runtime_version: str
```

- *Type:* str

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.schema"></a>

```python
schema: str
```

- *Type:* str

---

##### `snowpark_package`<sup>Required</sup> <a name="snowpark_package" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.snowparkPackage"></a>

```python
snowpark_package: str
```

- *Type:* str

---

##### `trace_level`<sup>Required</sup> <a name="trace_level" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.traceLevel"></a>

```python
trace_level: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.procedureScala.ProcedureScala.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ProcedureScalaArguments <a name="ProcedureScalaArguments" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaArguments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaArguments.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure_scala

procedureScala.ProcedureScalaArguments(
  arg_data_type: str,
  arg_name: str,
  arg_default_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaArguments.property.argDataType">arg_data_type</a></code> | <code>str</code> | The argument type. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaArguments.property.argName">arg_name</a></code> | <code>str</code> | The argument name. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaArguments.property.argDefaultValue">arg_default_value</a></code> | <code>str</code> | Optional default value for the argument. |

---

##### `arg_data_type`<sup>Required</sup> <a name="arg_data_type" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaArguments.property.argDataType"></a>

```python
arg_data_type: str
```

- *Type:* str

The argument type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.1/docs/resources/procedure_scala#arg_data_type ProcedureScala#arg_data_type}

---

##### `arg_name`<sup>Required</sup> <a name="arg_name" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaArguments.property.argName"></a>

```python
arg_name: str
```

- *Type:* str

The argument name.

The provider wraps it in double quotes by default, so be aware of that while referencing the argument in the procedure definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.1/docs/resources/procedure_scala#arg_name ProcedureScala#arg_name}

---

##### `arg_default_value`<sup>Optional</sup> <a name="arg_default_value" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaArguments.property.argDefaultValue"></a>

```python
arg_default_value: str
```

- *Type:* str

Optional default value for the argument.

For text values use single quotes. Numeric values can be unquoted. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.1/docs/resources/procedure_scala#arg_default_value ProcedureScala#arg_default_value}

---

### ProcedureScalaConfig <a name="ProcedureScalaConfig" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure_scala

procedureScala.ProcedureScalaConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  database: str,
  handler: str,
  name: str,
  return_type: str,
  runtime_version: str,
  schema: str,
  snowpark_package: str,
  arguments: typing.Union[IResolvable, typing.List[ProcedureScalaArguments]] = None,
  comment: str = None,
  enable_console_output: typing.Union[bool, IResolvable] = None,
  execute_as: str = None,
  external_access_integrations: typing.List[str] = None,
  id: str = None,
  imports: typing.Union[IResolvable, typing.List[ProcedureScalaImports]] = None,
  is_secure: str = None,
  log_level: str = None,
  metric_level: str = None,
  null_input_behavior: str = None,
  packages: typing.List[str] = None,
  procedure_definition: str = None,
  secrets: typing.Union[IResolvable, typing.List[ProcedureScalaSecrets]] = None,
  target_path: ProcedureScalaTargetPath = None,
  timeouts: ProcedureScalaTimeouts = None,
  trace_level: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaConfig.property.database">database</a></code> | <code>str</code> | The database in which to create the procedure. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaConfig.property.handler">handler</a></code> | <code>str</code> | Use the fully qualified name of the method or function for the stored procedure. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaConfig.property.name">name</a></code> | <code>str</code> | The name of the procedure; |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaConfig.property.returnType">return_type</a></code> | <code>str</code> | Specifies the type of the result returned by the stored procedure. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaConfig.property.runtimeVersion">runtime_version</a></code> | <code>str</code> | The language runtime version to use. Currently, the supported versions are: 2.12. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaConfig.property.schema">schema</a></code> | <code>str</code> | The schema in which to create the procedure. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaConfig.property.snowparkPackage">snowpark_package</a></code> | <code>str</code> | The Snowpark package is required for stored procedures, so it must always be present. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaConfig.property.arguments">arguments</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaArguments">ProcedureScalaArguments</a>]]</code> | arguments block. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaConfig.property.comment">comment</a></code> | <code>str</code> | (Default: `user-defined procedure`) Specifies a comment for the procedure. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaConfig.property.enableConsoleOutput">enable_console_output</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable stdout/stderr fast path logging for anonyous stored procs. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaConfig.property.executeAs">execute_as</a></code> | <code>str</code> | Specifies whether the stored procedure executes with the privileges of the owner (an “owner’s rights” stored procedure) or with the privileges of the caller (a “caller’s rights” stored procedure). |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaConfig.property.externalAccessIntegrations">external_access_integrations</a></code> | <code>typing.List[str]</code> | The names of [external access integrations](https://docs.snowflake.com/en/sql-reference/sql/create-external-access-integration) needed in order for this procedure’s handler code to access external networks. An external access integration specifies [network rules](https://docs.snowflake.com/en/sql-reference/sql/create-network-rule) and [secrets](https://docs.snowflake.com/en/sql-reference/sql/create-secret) that specify external locations and credentials (if any) allowed for use by handler code when making requests of an external network, such as an external REST API. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.1/docs/resources/procedure_scala#id ProcedureScala#id}. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaConfig.property.imports">imports</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaImports">ProcedureScalaImports</a>]]</code> | imports block. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaConfig.property.isSecure">is_secure</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies that the procedure is secure. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaConfig.property.logLevel">log_level</a></code> | <code>str</code> | LOG_LEVEL to use when filtering events For more information, check [LOG_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#log-level). |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaConfig.property.metricLevel">metric_level</a></code> | <code>str</code> | METRIC_LEVEL value to control whether to emit metrics to Event Table For more information, check [METRIC_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#metric-level). |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaConfig.property.nullInputBehavior">null_input_behavior</a></code> | <code>str</code> | Specifies the behavior of the procedure when called with null inputs. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaConfig.property.packages">packages</a></code> | <code>typing.List[str]</code> | List of the names of packages deployed in Snowflake that should be included in the handler code’s execution environment. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaConfig.property.procedureDefinition">procedure_definition</a></code> | <code>str</code> | Defines the code executed by the stored procedure. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaConfig.property.secrets">secrets</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecrets">ProcedureScalaSecrets</a>]]</code> | secrets block. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaConfig.property.targetPath">target_path</a></code> | <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaTargetPath">ProcedureScalaTargetPath</a></code> | target_path block. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaTimeouts">ProcedureScalaTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaConfig.property.traceLevel">trace_level</a></code> | <code>str</code> | Trace level value to use when generating/filtering trace events For more information, check [TRACE_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#trace-level). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaConfig.property.database"></a>

```python
database: str
```

- *Type:* str

The database in which to create the procedure.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.1/docs/resources/procedure_scala#database ProcedureScala#database}

---

##### `handler`<sup>Required</sup> <a name="handler" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaConfig.property.handler"></a>

```python
handler: str
```

- *Type:* str

Use the fully qualified name of the method or function for the stored procedure.

This is typically in the following form: `com.my_company.my_package.MyClass.myMethod` where `com.my_company.my_package` corresponds to the package containing the object or class: `package com.my_company.my_package;`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.1/docs/resources/procedure_scala#handler ProcedureScala#handler}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the procedure;

the identifier does not need to be unique for the schema in which the procedure is created because stored procedures are [identified and resolved by the combination of the name and argument types](https://docs.snowflake.com/en/developer-guide/udf-stored-procedure-naming-conventions.html#label-procedure-function-name-overloading). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.1/docs/resources/procedure_scala#name ProcedureScala#name}

---

##### `return_type`<sup>Required</sup> <a name="return_type" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaConfig.property.returnType"></a>

```python
return_type: str
```

- *Type:* str

Specifies the type of the result returned by the stored procedure.

For `<result_data_type>`, use the Snowflake data type that corresponds to the type of the language that you are using (see [SQL-Scala Data Type Mappings](https://docs.snowflake.com/en/developer-guide/udf-stored-procedure-data-type-mapping.html#label-sql-types-to-scala-types)). For `RETURNS TABLE ( [ col_name col_data_type [ , ... ] ] )`, if you know the Snowflake data types of the columns in the returned table, specify the column names and types. Otherwise (e.g. if you are determining the column types during run time), you can omit the column names and types (i.e. `TABLE ()`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.1/docs/resources/procedure_scala#return_type ProcedureScala#return_type}

---

##### `runtime_version`<sup>Required</sup> <a name="runtime_version" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaConfig.property.runtimeVersion"></a>

```python
runtime_version: str
```

- *Type:* str

The language runtime version to use. Currently, the supported versions are: 2.12.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.1/docs/resources/procedure_scala#runtime_version ProcedureScala#runtime_version}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaConfig.property.schema"></a>

```python
schema: str
```

- *Type:* str

The schema in which to create the procedure.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.1/docs/resources/procedure_scala#schema ProcedureScala#schema}

---

##### `snowpark_package`<sup>Required</sup> <a name="snowpark_package" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaConfig.property.snowparkPackage"></a>

```python
snowpark_package: str
```

- *Type:* str

The Snowpark package is required for stored procedures, so it must always be present.

For more information about Snowpark, see [Snowpark API](https://docs.snowflake.com/en/developer-guide/snowpark/index).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.1/docs/resources/procedure_scala#snowpark_package ProcedureScala#snowpark_package}

---

##### `arguments`<sup>Optional</sup> <a name="arguments" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaConfig.property.arguments"></a>

```python
arguments: typing.Union[IResolvable, typing.List[ProcedureScalaArguments]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaArguments">ProcedureScalaArguments</a>]]

arguments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.1/docs/resources/procedure_scala#arguments ProcedureScala#arguments}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

(Default: `user-defined procedure`) Specifies a comment for the procedure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.1/docs/resources/procedure_scala#comment ProcedureScala#comment}

---

##### `enable_console_output`<sup>Optional</sup> <a name="enable_console_output" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaConfig.property.enableConsoleOutput"></a>

```python
enable_console_output: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable stdout/stderr fast path logging for anonyous stored procs.

This is a public parameter (similar to LOG_LEVEL). For more information, check [ENABLE_CONSOLE_OUTPUT docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-console-output).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.1/docs/resources/procedure_scala#enable_console_output ProcedureScala#enable_console_output}

---

##### `execute_as`<sup>Optional</sup> <a name="execute_as" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaConfig.property.executeAs"></a>

```python
execute_as: str
```

- *Type:* str

Specifies whether the stored procedure executes with the privileges of the owner (an “owner’s rights” stored procedure) or with the privileges of the caller (a “caller’s rights” stored procedure).

If you execute the statement CREATE PROCEDURE … EXECUTE AS CALLER, then in the future the procedure will execute as a caller’s rights procedure. If you execute CREATE PROCEDURE … EXECUTE AS OWNER, then the procedure will execute as an owner’s rights procedure. For more information, see [Understanding caller’s rights and owner’s rights stored procedures](https://docs.snowflake.com/en/developer-guide/stored-procedure/stored-procedures-rights). Valid values are (case-insensitive): `CALLER` | `OWNER`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.1/docs/resources/procedure_scala#execute_as ProcedureScala#execute_as}

---

##### `external_access_integrations`<sup>Optional</sup> <a name="external_access_integrations" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaConfig.property.externalAccessIntegrations"></a>

```python
external_access_integrations: typing.List[str]
```

- *Type:* typing.List[str]

The names of [external access integrations](https://docs.snowflake.com/en/sql-reference/sql/create-external-access-integration) needed in order for this procedure’s handler code to access external networks. An external access integration specifies [network rules](https://docs.snowflake.com/en/sql-reference/sql/create-network-rule) and [secrets](https://docs.snowflake.com/en/sql-reference/sql/create-secret) that specify external locations and credentials (if any) allowed for use by handler code when making requests of an external network, such as an external REST API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.1/docs/resources/procedure_scala#external_access_integrations ProcedureScala#external_access_integrations}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.1/docs/resources/procedure_scala#id ProcedureScala#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imports`<sup>Optional</sup> <a name="imports" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaConfig.property.imports"></a>

```python
imports: typing.Union[IResolvable, typing.List[ProcedureScalaImports]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaImports">ProcedureScalaImports</a>]]

imports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.1/docs/resources/procedure_scala#imports ProcedureScala#imports}

---

##### `is_secure`<sup>Optional</sup> <a name="is_secure" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaConfig.property.isSecure"></a>

```python
is_secure: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies that the procedure is secure.

For more information about secure procedures, see [Protecting Sensitive Information with Secure UDFs and Stored Procedures](https://docs.snowflake.com/en/developer-guide/secure-udf-procedure). Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.1/docs/resources/procedure_scala#is_secure ProcedureScala#is_secure}

---

##### `log_level`<sup>Optional</sup> <a name="log_level" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaConfig.property.logLevel"></a>

```python
log_level: str
```

- *Type:* str

LOG_LEVEL to use when filtering events For more information, check [LOG_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#log-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.1/docs/resources/procedure_scala#log_level ProcedureScala#log_level}

---

##### `metric_level`<sup>Optional</sup> <a name="metric_level" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaConfig.property.metricLevel"></a>

```python
metric_level: str
```

- *Type:* str

METRIC_LEVEL value to control whether to emit metrics to Event Table For more information, check [METRIC_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#metric-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.1/docs/resources/procedure_scala#metric_level ProcedureScala#metric_level}

---

##### `null_input_behavior`<sup>Optional</sup> <a name="null_input_behavior" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaConfig.property.nullInputBehavior"></a>

```python
null_input_behavior: str
```

- *Type:* str

Specifies the behavior of the procedure when called with null inputs.

Valid values are (case-insensitive): `CALLED ON NULL INPUT` | `RETURNS NULL ON NULL INPUT`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.1/docs/resources/procedure_scala#null_input_behavior ProcedureScala#null_input_behavior}

---

##### `packages`<sup>Optional</sup> <a name="packages" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaConfig.property.packages"></a>

```python
packages: typing.List[str]
```

- *Type:* typing.List[str]

List of the names of packages deployed in Snowflake that should be included in the handler code’s execution environment.

The Snowpark package is required for stored procedures, but is specified in the `snowpark_package` attribute. For more information about Snowpark, see [Snowpark API](https://docs.snowflake.com/en/developer-guide/snowpark/index).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.1/docs/resources/procedure_scala#packages ProcedureScala#packages}

---

##### `procedure_definition`<sup>Optional</sup> <a name="procedure_definition" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaConfig.property.procedureDefinition"></a>

```python
procedure_definition: str
```

- *Type:* str

Defines the code executed by the stored procedure.

The definition can consist of any valid code. Wrapping `$$` signs are added by the provider automatically; do not include them. The `procedure_definition` value must be Scala source code. For more information, see [Scala (using Snowpark)](https://docs.snowflake.com/en/developer-guide/stored-procedure/stored-procedures-scala). To mitigate permadiff on this field, the provider replaces blank characters with a space. This can lead to false positives in cases where a change in case or run of whitespace is semantically significant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.1/docs/resources/procedure_scala#procedure_definition ProcedureScala#procedure_definition}

---

##### `secrets`<sup>Optional</sup> <a name="secrets" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaConfig.property.secrets"></a>

```python
secrets: typing.Union[IResolvable, typing.List[ProcedureScalaSecrets]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecrets">ProcedureScalaSecrets</a>]]

secrets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.1/docs/resources/procedure_scala#secrets ProcedureScala#secrets}

---

##### `target_path`<sup>Optional</sup> <a name="target_path" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaConfig.property.targetPath"></a>

```python
target_path: ProcedureScalaTargetPath
```

- *Type:* <a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaTargetPath">ProcedureScalaTargetPath</a>

target_path block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.1/docs/resources/procedure_scala#target_path ProcedureScala#target_path}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaConfig.property.timeouts"></a>

```python
timeouts: ProcedureScalaTimeouts
```

- *Type:* <a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaTimeouts">ProcedureScalaTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.1/docs/resources/procedure_scala#timeouts ProcedureScala#timeouts}

---

##### `trace_level`<sup>Optional</sup> <a name="trace_level" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaConfig.property.traceLevel"></a>

```python
trace_level: str
```

- *Type:* str

Trace level value to use when generating/filtering trace events For more information, check [TRACE_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#trace-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.1/docs/resources/procedure_scala#trace_level ProcedureScala#trace_level}

---

### ProcedureScalaImports <a name="ProcedureScalaImports" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaImports"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaImports.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure_scala

procedureScala.ProcedureScalaImports(
  path_on_stage: str,
  stage_location: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaImports.property.pathOnStage">path_on_stage</a></code> | <code>str</code> | Path for import on stage, without the leading `/`. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaImports.property.stageLocation">stage_location</a></code> | <code>str</code> | Stage location without leading `@`. |

---

##### `path_on_stage`<sup>Required</sup> <a name="path_on_stage" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaImports.property.pathOnStage"></a>

```python
path_on_stage: str
```

- *Type:* str

Path for import on stage, without the leading `/`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.1/docs/resources/procedure_scala#path_on_stage ProcedureScala#path_on_stage}

---

##### `stage_location`<sup>Required</sup> <a name="stage_location" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaImports.property.stageLocation"></a>

```python
stage_location: str
```

- *Type:* str

Stage location without leading `@`.

To use your user's stage set this to `~`, otherwise pass fully qualified name of the stage (with every part contained in double quotes or use `snowflake_stage.<your stage's resource name>.fully_qualified_name` if you manage this stage through terraform).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.1/docs/resources/procedure_scala#stage_location ProcedureScala#stage_location}

---

### ProcedureScalaParameters <a name="ProcedureScalaParameters" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParameters.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure_scala

procedureScala.ProcedureScalaParameters()
```


### ProcedureScalaParametersEnableConsoleOutput <a name="ProcedureScalaParametersEnableConsoleOutput" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersEnableConsoleOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersEnableConsoleOutput.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure_scala

procedureScala.ProcedureScalaParametersEnableConsoleOutput()
```


### ProcedureScalaParametersLogLevel <a name="ProcedureScalaParametersLogLevel" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersLogLevel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersLogLevel.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure_scala

procedureScala.ProcedureScalaParametersLogLevel()
```


### ProcedureScalaParametersMetricLevel <a name="ProcedureScalaParametersMetricLevel" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersMetricLevel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersMetricLevel.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure_scala

procedureScala.ProcedureScalaParametersMetricLevel()
```


### ProcedureScalaParametersTraceLevel <a name="ProcedureScalaParametersTraceLevel" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersTraceLevel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersTraceLevel.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure_scala

procedureScala.ProcedureScalaParametersTraceLevel()
```


### ProcedureScalaSecrets <a name="ProcedureScalaSecrets" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecrets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecrets.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure_scala

procedureScala.ProcedureScalaSecrets(
  secret_id: str,
  secret_variable_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecrets.property.secretId">secret_id</a></code> | <code>str</code> | Fully qualified name of the allowed [secret](https://docs.snowflake.com/en/sql-reference/sql/create-secret). You will receive an error if you specify a SECRETS value whose secret isn’t also included in an integration specified by the EXTERNAL_ACCESS_INTEGRATIONS parameter. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecrets.property.secretVariableName">secret_variable_name</a></code> | <code>str</code> | The variable that will be used in handler code when retrieving information from the secret. |

---

##### `secret_id`<sup>Required</sup> <a name="secret_id" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecrets.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

Fully qualified name of the allowed [secret](https://docs.snowflake.com/en/sql-reference/sql/create-secret). You will receive an error if you specify a SECRETS value whose secret isn’t also included in an integration specified by the EXTERNAL_ACCESS_INTEGRATIONS parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.1/docs/resources/procedure_scala#secret_id ProcedureScala#secret_id}

---

##### `secret_variable_name`<sup>Required</sup> <a name="secret_variable_name" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecrets.property.secretVariableName"></a>

```python
secret_variable_name: str
```

- *Type:* str

The variable that will be used in handler code when retrieving information from the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.1/docs/resources/procedure_scala#secret_variable_name ProcedureScala#secret_variable_name}

---

### ProcedureScalaShowOutput <a name="ProcedureScalaShowOutput" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutput.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure_scala

procedureScala.ProcedureScalaShowOutput()
```


### ProcedureScalaTargetPath <a name="ProcedureScalaTargetPath" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaTargetPath"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaTargetPath.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure_scala

procedureScala.ProcedureScalaTargetPath(
  path_on_stage: str,
  stage_location: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaTargetPath.property.pathOnStage">path_on_stage</a></code> | <code>str</code> | Path for import on stage, without the leading `/`. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaTargetPath.property.stageLocation">stage_location</a></code> | <code>str</code> | Stage location without leading `@`. |

---

##### `path_on_stage`<sup>Required</sup> <a name="path_on_stage" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaTargetPath.property.pathOnStage"></a>

```python
path_on_stage: str
```

- *Type:* str

Path for import on stage, without the leading `/`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.1/docs/resources/procedure_scala#path_on_stage ProcedureScala#path_on_stage}

---

##### `stage_location`<sup>Required</sup> <a name="stage_location" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaTargetPath.property.stageLocation"></a>

```python
stage_location: str
```

- *Type:* str

Stage location without leading `@`.

To use your user's stage set this to `~`, otherwise pass fully qualified name of the stage (with every part contained in double quotes or use `snowflake_stage.<your stage's resource name>.fully_qualified_name` if you manage this stage through terraform).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.1/docs/resources/procedure_scala#stage_location ProcedureScala#stage_location}

---

### ProcedureScalaTimeouts <a name="ProcedureScalaTimeouts" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure_scala

procedureScala.ProcedureScalaTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.1/docs/resources/procedure_scala#create ProcedureScala#create}. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.1/docs/resources/procedure_scala#delete ProcedureScala#delete}. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.1/docs/resources/procedure_scala#read ProcedureScala#read}. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.1/docs/resources/procedure_scala#update ProcedureScala#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.1/docs/resources/procedure_scala#create ProcedureScala#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.1/docs/resources/procedure_scala#delete ProcedureScala#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.1/docs/resources/procedure_scala#read ProcedureScala#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.1/docs/resources/procedure_scala#update ProcedureScala#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ProcedureScalaArgumentsList <a name="ProcedureScalaArgumentsList" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure_scala

procedureScala.ProcedureScalaArgumentsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ProcedureScalaArgumentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaArguments">ProcedureScalaArguments</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ProcedureScalaArguments]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaArguments">ProcedureScalaArguments</a>]]

---


### ProcedureScalaArgumentsOutputReference <a name="ProcedureScalaArgumentsOutputReference" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure_scala

procedureScala.ProcedureScalaArgumentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsOutputReference.resetArgDefaultValue">reset_arg_default_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_arg_default_value` <a name="reset_arg_default_value" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsOutputReference.resetArgDefaultValue"></a>

```python
def reset_arg_default_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsOutputReference.property.argDataTypeInput">arg_data_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsOutputReference.property.argDefaultValueInput">arg_default_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsOutputReference.property.argNameInput">arg_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsOutputReference.property.argDataType">arg_data_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsOutputReference.property.argDefaultValue">arg_default_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsOutputReference.property.argName">arg_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaArguments">ProcedureScalaArguments</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arg_data_type_input`<sup>Optional</sup> <a name="arg_data_type_input" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsOutputReference.property.argDataTypeInput"></a>

```python
arg_data_type_input: str
```

- *Type:* str

---

##### `arg_default_value_input`<sup>Optional</sup> <a name="arg_default_value_input" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsOutputReference.property.argDefaultValueInput"></a>

```python
arg_default_value_input: str
```

- *Type:* str

---

##### `arg_name_input`<sup>Optional</sup> <a name="arg_name_input" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsOutputReference.property.argNameInput"></a>

```python
arg_name_input: str
```

- *Type:* str

---

##### `arg_data_type`<sup>Required</sup> <a name="arg_data_type" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsOutputReference.property.argDataType"></a>

```python
arg_data_type: str
```

- *Type:* str

---

##### `arg_default_value`<sup>Required</sup> <a name="arg_default_value" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsOutputReference.property.argDefaultValue"></a>

```python
arg_default_value: str
```

- *Type:* str

---

##### `arg_name`<sup>Required</sup> <a name="arg_name" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsOutputReference.property.argName"></a>

```python
arg_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaArgumentsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ProcedureScalaArguments]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaArguments">ProcedureScalaArguments</a>]

---


### ProcedureScalaImportsList <a name="ProcedureScalaImportsList" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaImportsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaImportsList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure_scala

procedureScala.ProcedureScalaImportsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaImportsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaImportsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaImportsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaImportsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaImportsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaImportsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaImportsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaImportsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaImportsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaImportsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaImportsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaImportsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaImportsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaImportsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaImportsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaImportsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaImportsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaImportsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ProcedureScalaImportsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaImportsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaImportsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaImportsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaImportsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaImports">ProcedureScalaImports</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaImportsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaImportsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaImportsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ProcedureScalaImports]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaImports">ProcedureScalaImports</a>]]

---


### ProcedureScalaImportsOutputReference <a name="ProcedureScalaImportsOutputReference" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaImportsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaImportsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure_scala

procedureScala.ProcedureScalaImportsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaImportsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaImportsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaImportsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaImportsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaImportsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaImportsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaImportsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaImportsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaImportsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaImportsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaImportsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaImportsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaImportsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaImportsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaImportsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaImportsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaImportsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaImportsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaImportsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaImportsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaImportsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaImportsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaImportsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaImportsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaImportsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaImportsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaImportsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaImportsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaImportsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaImportsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaImportsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaImportsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaImportsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaImportsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaImportsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaImportsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaImportsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaImportsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaImportsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaImportsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaImportsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaImportsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaImportsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaImportsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaImportsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaImportsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaImportsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaImportsOutputReference.property.pathOnStageInput">path_on_stage_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaImportsOutputReference.property.stageLocationInput">stage_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaImportsOutputReference.property.pathOnStage">path_on_stage</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaImportsOutputReference.property.stageLocation">stage_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaImportsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaImports">ProcedureScalaImports</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaImportsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaImportsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `path_on_stage_input`<sup>Optional</sup> <a name="path_on_stage_input" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaImportsOutputReference.property.pathOnStageInput"></a>

```python
path_on_stage_input: str
```

- *Type:* str

---

##### `stage_location_input`<sup>Optional</sup> <a name="stage_location_input" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaImportsOutputReference.property.stageLocationInput"></a>

```python
stage_location_input: str
```

- *Type:* str

---

##### `path_on_stage`<sup>Required</sup> <a name="path_on_stage" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaImportsOutputReference.property.pathOnStage"></a>

```python
path_on_stage: str
```

- *Type:* str

---

##### `stage_location`<sup>Required</sup> <a name="stage_location" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaImportsOutputReference.property.stageLocation"></a>

```python
stage_location: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaImportsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ProcedureScalaImports]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaImports">ProcedureScalaImports</a>]

---


### ProcedureScalaParametersEnableConsoleOutputList <a name="ProcedureScalaParametersEnableConsoleOutputList" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersEnableConsoleOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersEnableConsoleOutputList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure_scala

procedureScala.ProcedureScalaParametersEnableConsoleOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersEnableConsoleOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersEnableConsoleOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersEnableConsoleOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersEnableConsoleOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersEnableConsoleOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersEnableConsoleOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersEnableConsoleOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersEnableConsoleOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersEnableConsoleOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersEnableConsoleOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersEnableConsoleOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersEnableConsoleOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersEnableConsoleOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersEnableConsoleOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersEnableConsoleOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersEnableConsoleOutputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersEnableConsoleOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersEnableConsoleOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ProcedureScalaParametersEnableConsoleOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersEnableConsoleOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersEnableConsoleOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersEnableConsoleOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersEnableConsoleOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersEnableConsoleOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ProcedureScalaParametersEnableConsoleOutputOutputReference <a name="ProcedureScalaParametersEnableConsoleOutputOutputReference" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersEnableConsoleOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersEnableConsoleOutputOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure_scala

procedureScala.ProcedureScalaParametersEnableConsoleOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersEnableConsoleOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersEnableConsoleOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersEnableConsoleOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersEnableConsoleOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersEnableConsoleOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersEnableConsoleOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersEnableConsoleOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersEnableConsoleOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersEnableConsoleOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersEnableConsoleOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersEnableConsoleOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersEnableConsoleOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersEnableConsoleOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersEnableConsoleOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersEnableConsoleOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersEnableConsoleOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersEnableConsoleOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersEnableConsoleOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersEnableConsoleOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersEnableConsoleOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersEnableConsoleOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersEnableConsoleOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersEnableConsoleOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersEnableConsoleOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersEnableConsoleOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersEnableConsoleOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersEnableConsoleOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersEnableConsoleOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersEnableConsoleOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersEnableConsoleOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersEnableConsoleOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersEnableConsoleOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersEnableConsoleOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersEnableConsoleOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersEnableConsoleOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersEnableConsoleOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersEnableConsoleOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersEnableConsoleOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersEnableConsoleOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersEnableConsoleOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersEnableConsoleOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersEnableConsoleOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersEnableConsoleOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersEnableConsoleOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersEnableConsoleOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersEnableConsoleOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersEnableConsoleOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersEnableConsoleOutputOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersEnableConsoleOutputOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersEnableConsoleOutputOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersEnableConsoleOutputOutputReference.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersEnableConsoleOutputOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersEnableConsoleOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersEnableConsoleOutput">ProcedureScalaParametersEnableConsoleOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersEnableConsoleOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersEnableConsoleOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersEnableConsoleOutputOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersEnableConsoleOutputOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersEnableConsoleOutputOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersEnableConsoleOutputOutputReference.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersEnableConsoleOutputOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersEnableConsoleOutputOutputReference.property.internalValue"></a>

```python
internal_value: ProcedureScalaParametersEnableConsoleOutput
```

- *Type:* <a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersEnableConsoleOutput">ProcedureScalaParametersEnableConsoleOutput</a>

---


### ProcedureScalaParametersList <a name="ProcedureScalaParametersList" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure_scala

procedureScala.ProcedureScalaParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ProcedureScalaParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ProcedureScalaParametersLogLevelList <a name="ProcedureScalaParametersLogLevelList" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersLogLevelList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersLogLevelList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure_scala

procedureScala.ProcedureScalaParametersLogLevelList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersLogLevelList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersLogLevelList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersLogLevelList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersLogLevelList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersLogLevelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersLogLevelList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersLogLevelList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersLogLevelList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersLogLevelList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersLogLevelList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersLogLevelList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersLogLevelList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersLogLevelList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersLogLevelList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersLogLevelList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersLogLevelList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersLogLevelList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersLogLevelList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ProcedureScalaParametersLogLevelOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersLogLevelList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersLogLevelList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersLogLevelList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersLogLevelList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersLogLevelList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ProcedureScalaParametersLogLevelOutputReference <a name="ProcedureScalaParametersLogLevelOutputReference" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersLogLevelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersLogLevelOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure_scala

procedureScala.ProcedureScalaParametersLogLevelOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersLogLevelOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersLogLevelOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersLogLevelOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersLogLevelOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersLogLevelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersLogLevelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersLogLevelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersLogLevelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersLogLevelOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersLogLevelOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersLogLevelOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersLogLevelOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersLogLevelOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersLogLevelOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersLogLevelOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersLogLevelOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersLogLevelOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersLogLevelOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersLogLevelOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersLogLevelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersLogLevelOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersLogLevelOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersLogLevelOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersLogLevelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersLogLevelOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersLogLevelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersLogLevelOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersLogLevelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersLogLevelOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersLogLevelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersLogLevelOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersLogLevelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersLogLevelOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersLogLevelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersLogLevelOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersLogLevelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersLogLevelOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersLogLevelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersLogLevelOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersLogLevelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersLogLevelOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersLogLevelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersLogLevelOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersLogLevelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersLogLevelOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersLogLevelOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersLogLevelOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersLogLevelOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersLogLevelOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersLogLevelOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersLogLevelOutputReference.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersLogLevelOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersLogLevelOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersLogLevel">ProcedureScalaParametersLogLevel</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersLogLevelOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersLogLevelOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersLogLevelOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersLogLevelOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersLogLevelOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersLogLevelOutputReference.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersLogLevelOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersLogLevelOutputReference.property.internalValue"></a>

```python
internal_value: ProcedureScalaParametersLogLevel
```

- *Type:* <a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersLogLevel">ProcedureScalaParametersLogLevel</a>

---


### ProcedureScalaParametersMetricLevelList <a name="ProcedureScalaParametersMetricLevelList" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersMetricLevelList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersMetricLevelList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure_scala

procedureScala.ProcedureScalaParametersMetricLevelList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersMetricLevelList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersMetricLevelList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersMetricLevelList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersMetricLevelList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersMetricLevelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersMetricLevelList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersMetricLevelList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersMetricLevelList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersMetricLevelList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersMetricLevelList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersMetricLevelList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersMetricLevelList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersMetricLevelList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersMetricLevelList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersMetricLevelList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersMetricLevelList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersMetricLevelList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersMetricLevelList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ProcedureScalaParametersMetricLevelOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersMetricLevelList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersMetricLevelList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersMetricLevelList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersMetricLevelList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersMetricLevelList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ProcedureScalaParametersMetricLevelOutputReference <a name="ProcedureScalaParametersMetricLevelOutputReference" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersMetricLevelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersMetricLevelOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure_scala

procedureScala.ProcedureScalaParametersMetricLevelOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersMetricLevelOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersMetricLevelOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersMetricLevelOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersMetricLevelOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersMetricLevelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersMetricLevelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersMetricLevelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersMetricLevelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersMetricLevelOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersMetricLevelOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersMetricLevelOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersMetricLevelOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersMetricLevelOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersMetricLevelOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersMetricLevelOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersMetricLevelOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersMetricLevelOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersMetricLevelOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersMetricLevelOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersMetricLevelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersMetricLevelOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersMetricLevelOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersMetricLevelOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersMetricLevelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersMetricLevelOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersMetricLevelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersMetricLevelOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersMetricLevelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersMetricLevelOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersMetricLevelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersMetricLevelOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersMetricLevelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersMetricLevelOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersMetricLevelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersMetricLevelOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersMetricLevelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersMetricLevelOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersMetricLevelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersMetricLevelOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersMetricLevelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersMetricLevelOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersMetricLevelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersMetricLevelOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersMetricLevelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersMetricLevelOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersMetricLevelOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersMetricLevelOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersMetricLevelOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersMetricLevelOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersMetricLevelOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersMetricLevelOutputReference.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersMetricLevelOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersMetricLevelOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersMetricLevel">ProcedureScalaParametersMetricLevel</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersMetricLevelOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersMetricLevelOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersMetricLevelOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersMetricLevelOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersMetricLevelOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersMetricLevelOutputReference.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersMetricLevelOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersMetricLevelOutputReference.property.internalValue"></a>

```python
internal_value: ProcedureScalaParametersMetricLevel
```

- *Type:* <a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersMetricLevel">ProcedureScalaParametersMetricLevel</a>

---


### ProcedureScalaParametersOutputReference <a name="ProcedureScalaParametersOutputReference" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure_scala

procedureScala.ProcedureScalaParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersOutputReference.property.enableConsoleOutput">enable_console_output</a></code> | <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersEnableConsoleOutputList">ProcedureScalaParametersEnableConsoleOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersOutputReference.property.logLevel">log_level</a></code> | <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersLogLevelList">ProcedureScalaParametersLogLevelList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersOutputReference.property.metricLevel">metric_level</a></code> | <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersMetricLevelList">ProcedureScalaParametersMetricLevelList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersOutputReference.property.traceLevel">trace_level</a></code> | <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersTraceLevelList">ProcedureScalaParametersTraceLevelList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParameters">ProcedureScalaParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_console_output`<sup>Required</sup> <a name="enable_console_output" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersOutputReference.property.enableConsoleOutput"></a>

```python
enable_console_output: ProcedureScalaParametersEnableConsoleOutputList
```

- *Type:* <a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersEnableConsoleOutputList">ProcedureScalaParametersEnableConsoleOutputList</a>

---

##### `log_level`<sup>Required</sup> <a name="log_level" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersOutputReference.property.logLevel"></a>

```python
log_level: ProcedureScalaParametersLogLevelList
```

- *Type:* <a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersLogLevelList">ProcedureScalaParametersLogLevelList</a>

---

##### `metric_level`<sup>Required</sup> <a name="metric_level" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersOutputReference.property.metricLevel"></a>

```python
metric_level: ProcedureScalaParametersMetricLevelList
```

- *Type:* <a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersMetricLevelList">ProcedureScalaParametersMetricLevelList</a>

---

##### `trace_level`<sup>Required</sup> <a name="trace_level" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersOutputReference.property.traceLevel"></a>

```python
trace_level: ProcedureScalaParametersTraceLevelList
```

- *Type:* <a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersTraceLevelList">ProcedureScalaParametersTraceLevelList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersOutputReference.property.internalValue"></a>

```python
internal_value: ProcedureScalaParameters
```

- *Type:* <a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParameters">ProcedureScalaParameters</a>

---


### ProcedureScalaParametersTraceLevelList <a name="ProcedureScalaParametersTraceLevelList" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersTraceLevelList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersTraceLevelList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure_scala

procedureScala.ProcedureScalaParametersTraceLevelList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersTraceLevelList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersTraceLevelList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersTraceLevelList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersTraceLevelList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersTraceLevelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersTraceLevelList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersTraceLevelList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersTraceLevelList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersTraceLevelList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersTraceLevelList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersTraceLevelList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersTraceLevelList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersTraceLevelList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersTraceLevelList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersTraceLevelList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersTraceLevelList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersTraceLevelList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersTraceLevelList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ProcedureScalaParametersTraceLevelOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersTraceLevelList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersTraceLevelList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersTraceLevelList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersTraceLevelList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersTraceLevelList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ProcedureScalaParametersTraceLevelOutputReference <a name="ProcedureScalaParametersTraceLevelOutputReference" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersTraceLevelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersTraceLevelOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure_scala

procedureScala.ProcedureScalaParametersTraceLevelOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersTraceLevelOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersTraceLevelOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersTraceLevelOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersTraceLevelOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersTraceLevelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersTraceLevelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersTraceLevelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersTraceLevelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersTraceLevelOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersTraceLevelOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersTraceLevelOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersTraceLevelOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersTraceLevelOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersTraceLevelOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersTraceLevelOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersTraceLevelOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersTraceLevelOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersTraceLevelOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersTraceLevelOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersTraceLevelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersTraceLevelOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersTraceLevelOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersTraceLevelOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersTraceLevelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersTraceLevelOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersTraceLevelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersTraceLevelOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersTraceLevelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersTraceLevelOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersTraceLevelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersTraceLevelOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersTraceLevelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersTraceLevelOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersTraceLevelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersTraceLevelOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersTraceLevelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersTraceLevelOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersTraceLevelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersTraceLevelOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersTraceLevelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersTraceLevelOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersTraceLevelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersTraceLevelOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersTraceLevelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersTraceLevelOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersTraceLevelOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersTraceLevelOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersTraceLevelOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersTraceLevelOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersTraceLevelOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersTraceLevelOutputReference.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersTraceLevelOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersTraceLevelOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersTraceLevel">ProcedureScalaParametersTraceLevel</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersTraceLevelOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersTraceLevelOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersTraceLevelOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersTraceLevelOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersTraceLevelOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersTraceLevelOutputReference.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersTraceLevelOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersTraceLevelOutputReference.property.internalValue"></a>

```python
internal_value: ProcedureScalaParametersTraceLevel
```

- *Type:* <a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaParametersTraceLevel">ProcedureScalaParametersTraceLevel</a>

---


### ProcedureScalaSecretsList <a name="ProcedureScalaSecretsList" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecretsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecretsList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure_scala

procedureScala.ProcedureScalaSecretsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecretsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecretsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecretsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecretsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecretsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecretsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecretsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecretsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecretsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecretsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecretsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecretsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecretsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecretsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecretsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecretsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecretsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecretsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ProcedureScalaSecretsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecretsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecretsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecretsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecretsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecrets">ProcedureScalaSecrets</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecretsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecretsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecretsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ProcedureScalaSecrets]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecrets">ProcedureScalaSecrets</a>]]

---


### ProcedureScalaSecretsOutputReference <a name="ProcedureScalaSecretsOutputReference" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecretsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecretsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure_scala

procedureScala.ProcedureScalaSecretsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecretsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecretsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecretsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecretsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecretsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecretsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecretsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecretsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecretsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecretsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecretsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecretsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecretsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecretsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecretsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecretsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecretsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecretsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecretsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecretsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecretsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecretsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecretsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecretsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecretsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecretsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecretsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecretsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecretsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecretsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecretsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecretsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecretsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecretsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecretsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecretsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecretsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecretsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecretsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecretsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecretsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecretsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecretsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecretsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecretsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecretsOutputReference.property.secretIdInput">secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecretsOutputReference.property.secretVariableNameInput">secret_variable_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecretsOutputReference.property.secretId">secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecretsOutputReference.property.secretVariableName">secret_variable_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecretsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecrets">ProcedureScalaSecrets</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecretsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecretsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secret_id_input`<sup>Optional</sup> <a name="secret_id_input" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecretsOutputReference.property.secretIdInput"></a>

```python
secret_id_input: str
```

- *Type:* str

---

##### `secret_variable_name_input`<sup>Optional</sup> <a name="secret_variable_name_input" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecretsOutputReference.property.secretVariableNameInput"></a>

```python
secret_variable_name_input: str
```

- *Type:* str

---

##### `secret_id`<sup>Required</sup> <a name="secret_id" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecretsOutputReference.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

---

##### `secret_variable_name`<sup>Required</sup> <a name="secret_variable_name" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecretsOutputReference.property.secretVariableName"></a>

```python
secret_variable_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecretsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ProcedureScalaSecrets]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaSecrets">ProcedureScalaSecrets</a>]

---


### ProcedureScalaShowOutputList <a name="ProcedureScalaShowOutputList" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputList.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure_scala

procedureScala.ProcedureScalaShowOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ProcedureScalaShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ProcedureScalaShowOutputOutputReference <a name="ProcedureScalaShowOutputOutputReference" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure_scala

procedureScala.ProcedureScalaShowOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputOutputReference.property.argumentsRaw">arguments_raw</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputOutputReference.property.catalogName">catalog_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputOutputReference.property.externalAccessIntegrations">external_access_integrations</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputOutputReference.property.isAggregate">is_aggregate</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputOutputReference.property.isAnsi">is_ansi</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputOutputReference.property.isBuiltin">is_builtin</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputOutputReference.property.isSecure">is_secure</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputOutputReference.property.isTableFunction">is_table_function</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputOutputReference.property.maxNumArguments">max_num_arguments</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputOutputReference.property.minNumArguments">min_num_arguments</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputOutputReference.property.secrets">secrets</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputOutputReference.property.validForClustering">valid_for_clustering</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutput">ProcedureScalaShowOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arguments_raw`<sup>Required</sup> <a name="arguments_raw" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputOutputReference.property.argumentsRaw"></a>

```python
arguments_raw: str
```

- *Type:* str

---

##### `catalog_name`<sup>Required</sup> <a name="catalog_name" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputOutputReference.property.catalogName"></a>

```python
catalog_name: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `external_access_integrations`<sup>Required</sup> <a name="external_access_integrations" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputOutputReference.property.externalAccessIntegrations"></a>

```python
external_access_integrations: str
```

- *Type:* str

---

##### `is_aggregate`<sup>Required</sup> <a name="is_aggregate" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputOutputReference.property.isAggregate"></a>

```python
is_aggregate: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_ansi`<sup>Required</sup> <a name="is_ansi" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputOutputReference.property.isAnsi"></a>

```python
is_ansi: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_builtin`<sup>Required</sup> <a name="is_builtin" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputOutputReference.property.isBuiltin"></a>

```python
is_builtin: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_secure`<sup>Required</sup> <a name="is_secure" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputOutputReference.property.isSecure"></a>

```python
is_secure: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_table_function`<sup>Required</sup> <a name="is_table_function" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputOutputReference.property.isTableFunction"></a>

```python
is_table_function: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `max_num_arguments`<sup>Required</sup> <a name="max_num_arguments" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputOutputReference.property.maxNumArguments"></a>

```python
max_num_arguments: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_num_arguments`<sup>Required</sup> <a name="min_num_arguments" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputOutputReference.property.minNumArguments"></a>

```python
min_num_arguments: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `secrets`<sup>Required</sup> <a name="secrets" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputOutputReference.property.secrets"></a>

```python
secrets: str
```

- *Type:* str

---

##### `valid_for_clustering`<sup>Required</sup> <a name="valid_for_clustering" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputOutputReference.property.validForClustering"></a>

```python
valid_for_clustering: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutputOutputReference.property.internalValue"></a>

```python
internal_value: ProcedureScalaShowOutput
```

- *Type:* <a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaShowOutput">ProcedureScalaShowOutput</a>

---


### ProcedureScalaTargetPathOutputReference <a name="ProcedureScalaTargetPathOutputReference" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaTargetPathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaTargetPathOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure_scala

procedureScala.ProcedureScalaTargetPathOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaTargetPathOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaTargetPathOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaTargetPathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaTargetPathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaTargetPathOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaTargetPathOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaTargetPathOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaTargetPathOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaTargetPathOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaTargetPathOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaTargetPathOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaTargetPathOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaTargetPathOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaTargetPathOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaTargetPathOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaTargetPathOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaTargetPathOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaTargetPathOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaTargetPathOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaTargetPathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaTargetPathOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaTargetPathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaTargetPathOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaTargetPathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaTargetPathOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaTargetPathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaTargetPathOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaTargetPathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaTargetPathOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaTargetPathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaTargetPathOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaTargetPathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaTargetPathOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaTargetPathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaTargetPathOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaTargetPathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaTargetPathOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaTargetPathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaTargetPathOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaTargetPathOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaTargetPathOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaTargetPathOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaTargetPathOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaTargetPathOutputReference.property.pathOnStageInput">path_on_stage_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaTargetPathOutputReference.property.stageLocationInput">stage_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaTargetPathOutputReference.property.pathOnStage">path_on_stage</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaTargetPathOutputReference.property.stageLocation">stage_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaTargetPathOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaTargetPath">ProcedureScalaTargetPath</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaTargetPathOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaTargetPathOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `path_on_stage_input`<sup>Optional</sup> <a name="path_on_stage_input" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaTargetPathOutputReference.property.pathOnStageInput"></a>

```python
path_on_stage_input: str
```

- *Type:* str

---

##### `stage_location_input`<sup>Optional</sup> <a name="stage_location_input" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaTargetPathOutputReference.property.stageLocationInput"></a>

```python
stage_location_input: str
```

- *Type:* str

---

##### `path_on_stage`<sup>Required</sup> <a name="path_on_stage" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaTargetPathOutputReference.property.pathOnStage"></a>

```python
path_on_stage: str
```

- *Type:* str

---

##### `stage_location`<sup>Required</sup> <a name="stage_location" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaTargetPathOutputReference.property.stageLocation"></a>

```python
stage_location: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaTargetPathOutputReference.property.internalValue"></a>

```python
internal_value: ProcedureScalaTargetPath
```

- *Type:* <a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaTargetPath">ProcedureScalaTargetPath</a>

---


### ProcedureScalaTimeoutsOutputReference <a name="ProcedureScalaTimeoutsOutputReference" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import procedure_scala

procedureScala.ProcedureScalaTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaTimeouts">ProcedureScalaTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.procedureScala.ProcedureScalaTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ProcedureScalaTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-snowflake.procedureScala.ProcedureScalaTimeouts">ProcedureScalaTimeouts</a>]

---



