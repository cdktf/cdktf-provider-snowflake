# `procedureJava` Submodule <a name="`procedureJava` Submodule" id="@cdktf/provider-snowflake.procedureJava"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProcedureJava <a name="ProcedureJava" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/procedure_java snowflake_procedure_java}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.procedure_java.ProcedureJava;

ProcedureJava.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .database(java.lang.String)
    .handler(java.lang.String)
    .name(java.lang.String)
    .returnType(java.lang.String)
    .runtimeVersion(java.lang.String)
    .schema(java.lang.String)
    .snowparkPackage(java.lang.String)
//  .arguments(IResolvable|java.util.List<ProcedureJavaArguments>)
//  .comment(java.lang.String)
//  .enableConsoleOutput(java.lang.Boolean|IResolvable)
//  .executeAs(java.lang.String)
//  .externalAccessIntegrations(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .imports(IResolvable|java.util.List<ProcedureJavaImports>)
//  .isSecure(java.lang.String)
//  .logLevel(java.lang.String)
//  .metricLevel(java.lang.String)
//  .nullInputBehavior(java.lang.String)
//  .packages(java.util.List<java.lang.String>)
//  .procedureDefinition(java.lang.String)
//  .secrets(IResolvable|java.util.List<ProcedureJavaSecrets>)
//  .targetPath(ProcedureJavaTargetPath)
//  .timeouts(ProcedureJavaTimeouts)
//  .traceLevel(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.Initializer.parameter.database">database</a></code> | <code>java.lang.String</code> | The database in which to create the procedure. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.Initializer.parameter.handler">handler</a></code> | <code>java.lang.String</code> | Use the fully qualified name of the method or function for the stored procedure. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the procedure; |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.Initializer.parameter.returnType">returnType</a></code> | <code>java.lang.String</code> | Specifies the type of the result returned by the stored procedure. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.Initializer.parameter.runtimeVersion">runtimeVersion</a></code> | <code>java.lang.String</code> | The language runtime version to use. Currently, the supported versions are: 11. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.Initializer.parameter.schema">schema</a></code> | <code>java.lang.String</code> | The schema in which to create the procedure. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.Initializer.parameter.snowparkPackage">snowparkPackage</a></code> | <code>java.lang.String</code> | The Snowpark package is required for stored procedures, so it must always be present. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.Initializer.parameter.arguments">arguments</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaArguments">ProcedureJavaArguments</a>></code> | arguments block. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.Initializer.parameter.comment">comment</a></code> | <code>java.lang.String</code> | (Default: `user-defined procedure`) Specifies a comment for the procedure. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.Initializer.parameter.enableConsoleOutput">enableConsoleOutput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable stdout/stderr fast path logging for anonyous stored procs. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.Initializer.parameter.executeAs">executeAs</a></code> | <code>java.lang.String</code> | Specifies whether the stored procedure executes with the privileges of the owner (an “owner’s rights” stored procedure) or with the privileges of the caller (a “caller’s rights” stored procedure). |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.Initializer.parameter.externalAccessIntegrations">externalAccessIntegrations</a></code> | <code>java.util.List<java.lang.String></code> | The names of [external access integrations](https://docs.snowflake.com/en/sql-reference/sql/create-external-access-integration) needed in order for this procedure’s handler code to access external networks. An external access integration specifies [network rules](https://docs.snowflake.com/en/sql-reference/sql/create-network-rule) and [secrets](https://docs.snowflake.com/en/sql-reference/sql/create-secret) that specify external locations and credentials (if any) allowed for use by handler code when making requests of an external network, such as an external REST API. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/procedure_java#id ProcedureJava#id}. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.Initializer.parameter.imports">imports</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaImports">ProcedureJavaImports</a>></code> | imports block. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.Initializer.parameter.isSecure">isSecure</a></code> | <code>java.lang.String</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies that the procedure is secure. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.Initializer.parameter.logLevel">logLevel</a></code> | <code>java.lang.String</code> | LOG_LEVEL to use when filtering events For more information, check [LOG_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#log-level). |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.Initializer.parameter.metricLevel">metricLevel</a></code> | <code>java.lang.String</code> | METRIC_LEVEL value to control whether to emit metrics to Event Table For more information, check [METRIC_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#metric-level). |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.Initializer.parameter.nullInputBehavior">nullInputBehavior</a></code> | <code>java.lang.String</code> | Specifies the behavior of the procedure when called with null inputs. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.Initializer.parameter.packages">packages</a></code> | <code>java.util.List<java.lang.String></code> | List of the names of packages deployed in Snowflake that should be included in the handler code’s execution environment. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.Initializer.parameter.procedureDefinition">procedureDefinition</a></code> | <code>java.lang.String</code> | Defines the code executed by the stored procedure. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.Initializer.parameter.secrets">secrets</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecrets">ProcedureJavaSecrets</a>></code> | secrets block. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.Initializer.parameter.targetPath">targetPath</a></code> | <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaTargetPath">ProcedureJavaTargetPath</a></code> | target_path block. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaTimeouts">ProcedureJavaTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.Initializer.parameter.traceLevel">traceLevel</a></code> | <code>java.lang.String</code> | Trace level value to use when generating/filtering trace events For more information, check [TRACE_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#trace-level). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.Initializer.parameter.database"></a>

- *Type:* java.lang.String

The database in which to create the procedure.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/procedure_java#database ProcedureJava#database}

---

##### `handler`<sup>Required</sup> <a name="handler" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.Initializer.parameter.handler"></a>

- *Type:* java.lang.String

Use the fully qualified name of the method or function for the stored procedure.

This is typically in the following form `com.my_company.my_package.MyClass.myMethod` where `com.my_company.my_package` corresponds to the package containing the object or class: `package com.my_company.my_package;`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/procedure_java#handler ProcedureJava#handler}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the procedure;

the identifier does not need to be unique for the schema in which the procedure is created because stored procedures are [identified and resolved by the combination of the name and argument types](https://docs.snowflake.com/en/developer-guide/udf-stored-procedure-naming-conventions.html#label-procedure-function-name-overloading). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/procedure_java#name ProcedureJava#name}

---

##### `returnType`<sup>Required</sup> <a name="returnType" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.Initializer.parameter.returnType"></a>

- *Type:* java.lang.String

Specifies the type of the result returned by the stored procedure.

For `<result_data_type>`, use the Snowflake data type that corresponds to the type of the language that you are using (see [SQL-Java Data Type Mappings](https://docs.snowflake.com/en/developer-guide/udf-stored-procedure-data-type-mapping.html#label-sql-java-data-type-mappings)). For `RETURNS TABLE ( [ col_name col_data_type [ , ... ] ] )`, if you know the Snowflake data types of the columns in the returned table, specify the column names and types. Otherwise (e.g. if you are determining the column types during run time), you can omit the column names and types (i.e. `TABLE ()`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/procedure_java#return_type ProcedureJava#return_type}

---

##### `runtimeVersion`<sup>Required</sup> <a name="runtimeVersion" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.Initializer.parameter.runtimeVersion"></a>

- *Type:* java.lang.String

The language runtime version to use. Currently, the supported versions are: 11.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/procedure_java#runtime_version ProcedureJava#runtime_version}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.Initializer.parameter.schema"></a>

- *Type:* java.lang.String

The schema in which to create the procedure.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/procedure_java#schema ProcedureJava#schema}

---

##### `snowparkPackage`<sup>Required</sup> <a name="snowparkPackage" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.Initializer.parameter.snowparkPackage"></a>

- *Type:* java.lang.String

The Snowpark package is required for stored procedures, so it must always be present.

For more information about Snowpark, see [Snowpark API](https://docs.snowflake.com/en/developer-guide/snowpark/index).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/procedure_java#snowpark_package ProcedureJava#snowpark_package}

---

##### `arguments`<sup>Optional</sup> <a name="arguments" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.Initializer.parameter.arguments"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaArguments">ProcedureJavaArguments</a>>

arguments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/procedure_java#arguments ProcedureJava#arguments}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.Initializer.parameter.comment"></a>

- *Type:* java.lang.String

(Default: `user-defined procedure`) Specifies a comment for the procedure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/procedure_java#comment ProcedureJava#comment}

---

##### `enableConsoleOutput`<sup>Optional</sup> <a name="enableConsoleOutput" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.Initializer.parameter.enableConsoleOutput"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable stdout/stderr fast path logging for anonyous stored procs.

This is a public parameter (similar to LOG_LEVEL). For more information, check [ENABLE_CONSOLE_OUTPUT docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-console-output).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/procedure_java#enable_console_output ProcedureJava#enable_console_output}

---

##### `executeAs`<sup>Optional</sup> <a name="executeAs" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.Initializer.parameter.executeAs"></a>

- *Type:* java.lang.String

Specifies whether the stored procedure executes with the privileges of the owner (an “owner’s rights” stored procedure) or with the privileges of the caller (a “caller’s rights” stored procedure).

If you execute the statement CREATE PROCEDURE … EXECUTE AS CALLER, then in the future the procedure will execute as a caller’s rights procedure. If you execute CREATE PROCEDURE … EXECUTE AS OWNER, then the procedure will execute as an owner’s rights procedure. For more information, see [Understanding caller’s rights and owner’s rights stored procedures](https://docs.snowflake.com/en/developer-guide/stored-procedure/stored-procedures-rights). Valid values are (case-insensitive): `CALLER` | `OWNER`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/procedure_java#execute_as ProcedureJava#execute_as}

---

##### `externalAccessIntegrations`<sup>Optional</sup> <a name="externalAccessIntegrations" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.Initializer.parameter.externalAccessIntegrations"></a>

- *Type:* java.util.List<java.lang.String>

The names of [external access integrations](https://docs.snowflake.com/en/sql-reference/sql/create-external-access-integration) needed in order for this procedure’s handler code to access external networks. An external access integration specifies [network rules](https://docs.snowflake.com/en/sql-reference/sql/create-network-rule) and [secrets](https://docs.snowflake.com/en/sql-reference/sql/create-secret) that specify external locations and credentials (if any) allowed for use by handler code when making requests of an external network, such as an external REST API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/procedure_java#external_access_integrations ProcedureJava#external_access_integrations}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/procedure_java#id ProcedureJava#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imports`<sup>Optional</sup> <a name="imports" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.Initializer.parameter.imports"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaImports">ProcedureJavaImports</a>>

imports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/procedure_java#imports ProcedureJava#imports}

---

##### `isSecure`<sup>Optional</sup> <a name="isSecure" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.Initializer.parameter.isSecure"></a>

- *Type:* java.lang.String

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies that the procedure is secure.

For more information about secure procedures, see [Protecting Sensitive Information with Secure UDFs and Stored Procedures](https://docs.snowflake.com/en/developer-guide/secure-udf-procedure). Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/procedure_java#is_secure ProcedureJava#is_secure}

---

##### `logLevel`<sup>Optional</sup> <a name="logLevel" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.Initializer.parameter.logLevel"></a>

- *Type:* java.lang.String

LOG_LEVEL to use when filtering events For more information, check [LOG_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#log-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/procedure_java#log_level ProcedureJava#log_level}

---

##### `metricLevel`<sup>Optional</sup> <a name="metricLevel" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.Initializer.parameter.metricLevel"></a>

- *Type:* java.lang.String

METRIC_LEVEL value to control whether to emit metrics to Event Table For more information, check [METRIC_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#metric-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/procedure_java#metric_level ProcedureJava#metric_level}

---

##### `nullInputBehavior`<sup>Optional</sup> <a name="nullInputBehavior" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.Initializer.parameter.nullInputBehavior"></a>

- *Type:* java.lang.String

Specifies the behavior of the procedure when called with null inputs.

Valid values are (case-insensitive): `CALLED ON NULL INPUT` | `RETURNS NULL ON NULL INPUT`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/procedure_java#null_input_behavior ProcedureJava#null_input_behavior}

---

##### `packages`<sup>Optional</sup> <a name="packages" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.Initializer.parameter.packages"></a>

- *Type:* java.util.List<java.lang.String>

List of the names of packages deployed in Snowflake that should be included in the handler code’s execution environment.

The Snowpark package is required for stored procedures, but is specified in the `snowpark_package` attribute. For more information about Snowpark, see [Snowpark API](https://docs.snowflake.com/en/developer-guide/snowpark/index).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/procedure_java#packages ProcedureJava#packages}

---

##### `procedureDefinition`<sup>Optional</sup> <a name="procedureDefinition" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.Initializer.parameter.procedureDefinition"></a>

- *Type:* java.lang.String

Defines the code executed by the stored procedure.

The definition can consist of any valid code. Wrapping `$$` signs are added by the provider automatically; do not include them. The `procedure_definition` value must be Java source code. For more information, see [Java (using Snowpark)](https://docs.snowflake.com/en/developer-guide/stored-procedure/stored-procedures-java). To mitigate permadiff on this field, the provider replaces blank characters with a space. This can lead to false positives in cases where a change in case or run of whitespace is semantically significant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/procedure_java#procedure_definition ProcedureJava#procedure_definition}

---

##### `secrets`<sup>Optional</sup> <a name="secrets" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.Initializer.parameter.secrets"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecrets">ProcedureJavaSecrets</a>>

secrets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/procedure_java#secrets ProcedureJava#secrets}

---

##### `targetPath`<sup>Optional</sup> <a name="targetPath" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.Initializer.parameter.targetPath"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaTargetPath">ProcedureJavaTargetPath</a>

target_path block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/procedure_java#target_path ProcedureJava#target_path}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaTimeouts">ProcedureJavaTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/procedure_java#timeouts ProcedureJava#timeouts}

---

##### `traceLevel`<sup>Optional</sup> <a name="traceLevel" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.Initializer.parameter.traceLevel"></a>

- *Type:* java.lang.String

Trace level value to use when generating/filtering trace events For more information, check [TRACE_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#trace-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/procedure_java#trace_level ProcedureJava#trace_level}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.putArguments">putArguments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.putImports">putImports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.putSecrets">putSecrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.putTargetPath">putTargetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.resetArguments">resetArguments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.resetEnableConsoleOutput">resetEnableConsoleOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.resetExecuteAs">resetExecuteAs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.resetExternalAccessIntegrations">resetExternalAccessIntegrations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.resetImports">resetImports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.resetIsSecure">resetIsSecure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.resetLogLevel">resetLogLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.resetMetricLevel">resetMetricLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.resetNullInputBehavior">resetNullInputBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.resetPackages">resetPackages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.resetProcedureDefinition">resetProcedureDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.resetSecrets">resetSecrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.resetTargetPath">resetTargetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.resetTraceLevel">resetTraceLevel</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putArguments` <a name="putArguments" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.putArguments"></a>

```java
public void putArguments(IResolvable|java.util.List<ProcedureJavaArguments> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.putArguments.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaArguments">ProcedureJavaArguments</a>>

---

##### `putImports` <a name="putImports" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.putImports"></a>

```java
public void putImports(IResolvable|java.util.List<ProcedureJavaImports> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.putImports.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaImports">ProcedureJavaImports</a>>

---

##### `putSecrets` <a name="putSecrets" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.putSecrets"></a>

```java
public void putSecrets(IResolvable|java.util.List<ProcedureJavaSecrets> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.putSecrets.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecrets">ProcedureJavaSecrets</a>>

---

##### `putTargetPath` <a name="putTargetPath" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.putTargetPath"></a>

```java
public void putTargetPath(ProcedureJavaTargetPath value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.putTargetPath.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaTargetPath">ProcedureJavaTargetPath</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.putTimeouts"></a>

```java
public void putTimeouts(ProcedureJavaTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaTimeouts">ProcedureJavaTimeouts</a>

---

##### `resetArguments` <a name="resetArguments" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.resetArguments"></a>

```java
public void resetArguments()
```

##### `resetComment` <a name="resetComment" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.resetComment"></a>

```java
public void resetComment()
```

##### `resetEnableConsoleOutput` <a name="resetEnableConsoleOutput" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.resetEnableConsoleOutput"></a>

```java
public void resetEnableConsoleOutput()
```

##### `resetExecuteAs` <a name="resetExecuteAs" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.resetExecuteAs"></a>

```java
public void resetExecuteAs()
```

##### `resetExternalAccessIntegrations` <a name="resetExternalAccessIntegrations" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.resetExternalAccessIntegrations"></a>

```java
public void resetExternalAccessIntegrations()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.resetId"></a>

```java
public void resetId()
```

##### `resetImports` <a name="resetImports" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.resetImports"></a>

```java
public void resetImports()
```

##### `resetIsSecure` <a name="resetIsSecure" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.resetIsSecure"></a>

```java
public void resetIsSecure()
```

##### `resetLogLevel` <a name="resetLogLevel" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.resetLogLevel"></a>

```java
public void resetLogLevel()
```

##### `resetMetricLevel` <a name="resetMetricLevel" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.resetMetricLevel"></a>

```java
public void resetMetricLevel()
```

##### `resetNullInputBehavior` <a name="resetNullInputBehavior" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.resetNullInputBehavior"></a>

```java
public void resetNullInputBehavior()
```

##### `resetPackages` <a name="resetPackages" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.resetPackages"></a>

```java
public void resetPackages()
```

##### `resetProcedureDefinition` <a name="resetProcedureDefinition" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.resetProcedureDefinition"></a>

```java
public void resetProcedureDefinition()
```

##### `resetSecrets` <a name="resetSecrets" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.resetSecrets"></a>

```java
public void resetSecrets()
```

##### `resetTargetPath` <a name="resetTargetPath" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.resetTargetPath"></a>

```java
public void resetTargetPath()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTraceLevel` <a name="resetTraceLevel" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.resetTraceLevel"></a>

```java
public void resetTraceLevel()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ProcedureJava resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.procedure_java.ProcedureJava;

ProcedureJava.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.procedure_java.ProcedureJava;

ProcedureJava.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.procedure_java.ProcedureJava;

ProcedureJava.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.procedure_java.ProcedureJava;

ProcedureJava.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ProcedureJava.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ProcedureJava resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ProcedureJava to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ProcedureJava that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/procedure_java#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ProcedureJava to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.arguments">arguments</a></code> | <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsList">ProcedureJavaArgumentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.imports">imports</a></code> | <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaImportsList">ProcedureJavaImportsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.parameters">parameters</a></code> | <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersList">ProcedureJavaParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.procedureLanguage">procedureLanguage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.secrets">secrets</a></code> | <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecretsList">ProcedureJavaSecretsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.showOutput">showOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputList">ProcedureJavaShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.targetPath">targetPath</a></code> | <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaTargetPathOutputReference">ProcedureJavaTargetPathOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaTimeoutsOutputReference">ProcedureJavaTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.argumentsInput">argumentsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaArguments">ProcedureJavaArguments</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.databaseInput">databaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.enableConsoleOutputInput">enableConsoleOutputInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.executeAsInput">executeAsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.externalAccessIntegrationsInput">externalAccessIntegrationsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.handlerInput">handlerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.importsInput">importsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaImports">ProcedureJavaImports</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.isSecureInput">isSecureInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.logLevelInput">logLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.metricLevelInput">metricLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.nullInputBehaviorInput">nullInputBehaviorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.packagesInput">packagesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.procedureDefinitionInput">procedureDefinitionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.returnTypeInput">returnTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.runtimeVersionInput">runtimeVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.schemaInput">schemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.secretsInput">secretsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecrets">ProcedureJavaSecrets</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.snowparkPackageInput">snowparkPackageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.targetPathInput">targetPathInput</a></code> | <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaTargetPath">ProcedureJavaTargetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaTimeouts">ProcedureJavaTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.traceLevelInput">traceLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.database">database</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.enableConsoleOutput">enableConsoleOutput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.executeAs">executeAs</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.externalAccessIntegrations">externalAccessIntegrations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.handler">handler</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.isSecure">isSecure</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.logLevel">logLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.metricLevel">metricLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.nullInputBehavior">nullInputBehavior</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.packages">packages</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.procedureDefinition">procedureDefinition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.returnType">returnType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.runtimeVersion">runtimeVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.schema">schema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.snowparkPackage">snowparkPackage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.traceLevel">traceLevel</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arguments`<sup>Required</sup> <a name="arguments" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.arguments"></a>

```java
public ProcedureJavaArgumentsList getArguments();
```

- *Type:* <a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsList">ProcedureJavaArgumentsList</a>

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.fullyQualifiedName"></a>

```java
public java.lang.String getFullyQualifiedName();
```

- *Type:* java.lang.String

---

##### `imports`<sup>Required</sup> <a name="imports" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.imports"></a>

```java
public ProcedureJavaImportsList getImports();
```

- *Type:* <a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaImportsList">ProcedureJavaImportsList</a>

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.parameters"></a>

```java
public ProcedureJavaParametersList getParameters();
```

- *Type:* <a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersList">ProcedureJavaParametersList</a>

---

##### `procedureLanguage`<sup>Required</sup> <a name="procedureLanguage" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.procedureLanguage"></a>

```java
public java.lang.String getProcedureLanguage();
```

- *Type:* java.lang.String

---

##### `secrets`<sup>Required</sup> <a name="secrets" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.secrets"></a>

```java
public ProcedureJavaSecretsList getSecrets();
```

- *Type:* <a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecretsList">ProcedureJavaSecretsList</a>

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.showOutput"></a>

```java
public ProcedureJavaShowOutputList getShowOutput();
```

- *Type:* <a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputList">ProcedureJavaShowOutputList</a>

---

##### `targetPath`<sup>Required</sup> <a name="targetPath" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.targetPath"></a>

```java
public ProcedureJavaTargetPathOutputReference getTargetPath();
```

- *Type:* <a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaTargetPathOutputReference">ProcedureJavaTargetPathOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.timeouts"></a>

```java
public ProcedureJavaTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaTimeoutsOutputReference">ProcedureJavaTimeoutsOutputReference</a>

---

##### `argumentsInput`<sup>Optional</sup> <a name="argumentsInput" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.argumentsInput"></a>

```java
public IResolvable|java.util.List<ProcedureJavaArguments> getArgumentsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaArguments">ProcedureJavaArguments</a>>

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.databaseInput"></a>

```java
public java.lang.String getDatabaseInput();
```

- *Type:* java.lang.String

---

##### `enableConsoleOutputInput`<sup>Optional</sup> <a name="enableConsoleOutputInput" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.enableConsoleOutputInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableConsoleOutputInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `executeAsInput`<sup>Optional</sup> <a name="executeAsInput" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.executeAsInput"></a>

```java
public java.lang.String getExecuteAsInput();
```

- *Type:* java.lang.String

---

##### `externalAccessIntegrationsInput`<sup>Optional</sup> <a name="externalAccessIntegrationsInput" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.externalAccessIntegrationsInput"></a>

```java
public java.util.List<java.lang.String> getExternalAccessIntegrationsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `handlerInput`<sup>Optional</sup> <a name="handlerInput" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.handlerInput"></a>

```java
public java.lang.String getHandlerInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `importsInput`<sup>Optional</sup> <a name="importsInput" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.importsInput"></a>

```java
public IResolvable|java.util.List<ProcedureJavaImports> getImportsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaImports">ProcedureJavaImports</a>>

---

##### `isSecureInput`<sup>Optional</sup> <a name="isSecureInput" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.isSecureInput"></a>

```java
public java.lang.String getIsSecureInput();
```

- *Type:* java.lang.String

---

##### `logLevelInput`<sup>Optional</sup> <a name="logLevelInput" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.logLevelInput"></a>

```java
public java.lang.String getLogLevelInput();
```

- *Type:* java.lang.String

---

##### `metricLevelInput`<sup>Optional</sup> <a name="metricLevelInput" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.metricLevelInput"></a>

```java
public java.lang.String getMetricLevelInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `nullInputBehaviorInput`<sup>Optional</sup> <a name="nullInputBehaviorInput" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.nullInputBehaviorInput"></a>

```java
public java.lang.String getNullInputBehaviorInput();
```

- *Type:* java.lang.String

---

##### `packagesInput`<sup>Optional</sup> <a name="packagesInput" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.packagesInput"></a>

```java
public java.util.List<java.lang.String> getPackagesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `procedureDefinitionInput`<sup>Optional</sup> <a name="procedureDefinitionInput" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.procedureDefinitionInput"></a>

```java
public java.lang.String getProcedureDefinitionInput();
```

- *Type:* java.lang.String

---

##### `returnTypeInput`<sup>Optional</sup> <a name="returnTypeInput" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.returnTypeInput"></a>

```java
public java.lang.String getReturnTypeInput();
```

- *Type:* java.lang.String

---

##### `runtimeVersionInput`<sup>Optional</sup> <a name="runtimeVersionInput" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.runtimeVersionInput"></a>

```java
public java.lang.String getRuntimeVersionInput();
```

- *Type:* java.lang.String

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.schemaInput"></a>

```java
public java.lang.String getSchemaInput();
```

- *Type:* java.lang.String

---

##### `secretsInput`<sup>Optional</sup> <a name="secretsInput" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.secretsInput"></a>

```java
public IResolvable|java.util.List<ProcedureJavaSecrets> getSecretsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecrets">ProcedureJavaSecrets</a>>

---

##### `snowparkPackageInput`<sup>Optional</sup> <a name="snowparkPackageInput" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.snowparkPackageInput"></a>

```java
public java.lang.String getSnowparkPackageInput();
```

- *Type:* java.lang.String

---

##### `targetPathInput`<sup>Optional</sup> <a name="targetPathInput" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.targetPathInput"></a>

```java
public ProcedureJavaTargetPath getTargetPathInput();
```

- *Type:* <a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaTargetPath">ProcedureJavaTargetPath</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.timeoutsInput"></a>

```java
public IResolvable|ProcedureJavaTimeouts getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaTimeouts">ProcedureJavaTimeouts</a>

---

##### `traceLevelInput`<sup>Optional</sup> <a name="traceLevelInput" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.traceLevelInput"></a>

```java
public java.lang.String getTraceLevelInput();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

---

##### `enableConsoleOutput`<sup>Required</sup> <a name="enableConsoleOutput" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.enableConsoleOutput"></a>

```java
public java.lang.Boolean|IResolvable getEnableConsoleOutput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `executeAs`<sup>Required</sup> <a name="executeAs" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.executeAs"></a>

```java
public java.lang.String getExecuteAs();
```

- *Type:* java.lang.String

---

##### `externalAccessIntegrations`<sup>Required</sup> <a name="externalAccessIntegrations" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.externalAccessIntegrations"></a>

```java
public java.util.List<java.lang.String> getExternalAccessIntegrations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `handler`<sup>Required</sup> <a name="handler" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.handler"></a>

```java
public java.lang.String getHandler();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isSecure`<sup>Required</sup> <a name="isSecure" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.isSecure"></a>

```java
public java.lang.String getIsSecure();
```

- *Type:* java.lang.String

---

##### `logLevel`<sup>Required</sup> <a name="logLevel" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.logLevel"></a>

```java
public java.lang.String getLogLevel();
```

- *Type:* java.lang.String

---

##### `metricLevel`<sup>Required</sup> <a name="metricLevel" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.metricLevel"></a>

```java
public java.lang.String getMetricLevel();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nullInputBehavior`<sup>Required</sup> <a name="nullInputBehavior" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.nullInputBehavior"></a>

```java
public java.lang.String getNullInputBehavior();
```

- *Type:* java.lang.String

---

##### `packages`<sup>Required</sup> <a name="packages" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.packages"></a>

```java
public java.util.List<java.lang.String> getPackages();
```

- *Type:* java.util.List<java.lang.String>

---

##### `procedureDefinition`<sup>Required</sup> <a name="procedureDefinition" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.procedureDefinition"></a>

```java
public java.lang.String getProcedureDefinition();
```

- *Type:* java.lang.String

---

##### `returnType`<sup>Required</sup> <a name="returnType" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.returnType"></a>

```java
public java.lang.String getReturnType();
```

- *Type:* java.lang.String

---

##### `runtimeVersion`<sup>Required</sup> <a name="runtimeVersion" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.runtimeVersion"></a>

```java
public java.lang.String getRuntimeVersion();
```

- *Type:* java.lang.String

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

---

##### `snowparkPackage`<sup>Required</sup> <a name="snowparkPackage" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.snowparkPackage"></a>

```java
public java.lang.String getSnowparkPackage();
```

- *Type:* java.lang.String

---

##### `traceLevel`<sup>Required</sup> <a name="traceLevel" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.traceLevel"></a>

```java
public java.lang.String getTraceLevel();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.procedureJava.ProcedureJava.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ProcedureJavaArguments <a name="ProcedureJavaArguments" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaArguments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaArguments.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.procedure_java.ProcedureJavaArguments;

ProcedureJavaArguments.builder()
    .argDataType(java.lang.String)
    .argName(java.lang.String)
//  .argDefaultValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaArguments.property.argDataType">argDataType</a></code> | <code>java.lang.String</code> | The argument type. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaArguments.property.argName">argName</a></code> | <code>java.lang.String</code> | The argument name. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaArguments.property.argDefaultValue">argDefaultValue</a></code> | <code>java.lang.String</code> | Optional default value for the argument. |

---

##### `argDataType`<sup>Required</sup> <a name="argDataType" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaArguments.property.argDataType"></a>

```java
public java.lang.String getArgDataType();
```

- *Type:* java.lang.String

The argument type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/procedure_java#arg_data_type ProcedureJava#arg_data_type}

---

##### `argName`<sup>Required</sup> <a name="argName" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaArguments.property.argName"></a>

```java
public java.lang.String getArgName();
```

- *Type:* java.lang.String

The argument name.

The provider wraps it in double quotes by default, so be aware of that while referencing the argument in the procedure definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/procedure_java#arg_name ProcedureJava#arg_name}

---

##### `argDefaultValue`<sup>Optional</sup> <a name="argDefaultValue" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaArguments.property.argDefaultValue"></a>

```java
public java.lang.String getArgDefaultValue();
```

- *Type:* java.lang.String

Optional default value for the argument.

For text values use single quotes. Numeric values can be unquoted. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/procedure_java#arg_default_value ProcedureJava#arg_default_value}

---

### ProcedureJavaConfig <a name="ProcedureJavaConfig" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.procedure_java.ProcedureJavaConfig;

ProcedureJavaConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .database(java.lang.String)
    .handler(java.lang.String)
    .name(java.lang.String)
    .returnType(java.lang.String)
    .runtimeVersion(java.lang.String)
    .schema(java.lang.String)
    .snowparkPackage(java.lang.String)
//  .arguments(IResolvable|java.util.List<ProcedureJavaArguments>)
//  .comment(java.lang.String)
//  .enableConsoleOutput(java.lang.Boolean|IResolvable)
//  .executeAs(java.lang.String)
//  .externalAccessIntegrations(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .imports(IResolvable|java.util.List<ProcedureJavaImports>)
//  .isSecure(java.lang.String)
//  .logLevel(java.lang.String)
//  .metricLevel(java.lang.String)
//  .nullInputBehavior(java.lang.String)
//  .packages(java.util.List<java.lang.String>)
//  .procedureDefinition(java.lang.String)
//  .secrets(IResolvable|java.util.List<ProcedureJavaSecrets>)
//  .targetPath(ProcedureJavaTargetPath)
//  .timeouts(ProcedureJavaTimeouts)
//  .traceLevel(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaConfig.property.database">database</a></code> | <code>java.lang.String</code> | The database in which to create the procedure. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaConfig.property.handler">handler</a></code> | <code>java.lang.String</code> | Use the fully qualified name of the method or function for the stored procedure. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the procedure; |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaConfig.property.returnType">returnType</a></code> | <code>java.lang.String</code> | Specifies the type of the result returned by the stored procedure. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaConfig.property.runtimeVersion">runtimeVersion</a></code> | <code>java.lang.String</code> | The language runtime version to use. Currently, the supported versions are: 11. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaConfig.property.schema">schema</a></code> | <code>java.lang.String</code> | The schema in which to create the procedure. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaConfig.property.snowparkPackage">snowparkPackage</a></code> | <code>java.lang.String</code> | The Snowpark package is required for stored procedures, so it must always be present. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaConfig.property.arguments">arguments</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaArguments">ProcedureJavaArguments</a>></code> | arguments block. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaConfig.property.comment">comment</a></code> | <code>java.lang.String</code> | (Default: `user-defined procedure`) Specifies a comment for the procedure. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaConfig.property.enableConsoleOutput">enableConsoleOutput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable stdout/stderr fast path logging for anonyous stored procs. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaConfig.property.executeAs">executeAs</a></code> | <code>java.lang.String</code> | Specifies whether the stored procedure executes with the privileges of the owner (an “owner’s rights” stored procedure) or with the privileges of the caller (a “caller’s rights” stored procedure). |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaConfig.property.externalAccessIntegrations">externalAccessIntegrations</a></code> | <code>java.util.List<java.lang.String></code> | The names of [external access integrations](https://docs.snowflake.com/en/sql-reference/sql/create-external-access-integration) needed in order for this procedure’s handler code to access external networks. An external access integration specifies [network rules](https://docs.snowflake.com/en/sql-reference/sql/create-network-rule) and [secrets](https://docs.snowflake.com/en/sql-reference/sql/create-secret) that specify external locations and credentials (if any) allowed for use by handler code when making requests of an external network, such as an external REST API. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/procedure_java#id ProcedureJava#id}. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaConfig.property.imports">imports</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaImports">ProcedureJavaImports</a>></code> | imports block. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaConfig.property.isSecure">isSecure</a></code> | <code>java.lang.String</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies that the procedure is secure. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaConfig.property.logLevel">logLevel</a></code> | <code>java.lang.String</code> | LOG_LEVEL to use when filtering events For more information, check [LOG_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#log-level). |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaConfig.property.metricLevel">metricLevel</a></code> | <code>java.lang.String</code> | METRIC_LEVEL value to control whether to emit metrics to Event Table For more information, check [METRIC_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#metric-level). |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaConfig.property.nullInputBehavior">nullInputBehavior</a></code> | <code>java.lang.String</code> | Specifies the behavior of the procedure when called with null inputs. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaConfig.property.packages">packages</a></code> | <code>java.util.List<java.lang.String></code> | List of the names of packages deployed in Snowflake that should be included in the handler code’s execution environment. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaConfig.property.procedureDefinition">procedureDefinition</a></code> | <code>java.lang.String</code> | Defines the code executed by the stored procedure. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaConfig.property.secrets">secrets</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecrets">ProcedureJavaSecrets</a>></code> | secrets block. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaConfig.property.targetPath">targetPath</a></code> | <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaTargetPath">ProcedureJavaTargetPath</a></code> | target_path block. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaTimeouts">ProcedureJavaTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaConfig.property.traceLevel">traceLevel</a></code> | <code>java.lang.String</code> | Trace level value to use when generating/filtering trace events For more information, check [TRACE_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#trace-level). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaConfig.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

The database in which to create the procedure.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/procedure_java#database ProcedureJava#database}

---

##### `handler`<sup>Required</sup> <a name="handler" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaConfig.property.handler"></a>

```java
public java.lang.String getHandler();
```

- *Type:* java.lang.String

Use the fully qualified name of the method or function for the stored procedure.

This is typically in the following form `com.my_company.my_package.MyClass.myMethod` where `com.my_company.my_package` corresponds to the package containing the object or class: `package com.my_company.my_package;`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/procedure_java#handler ProcedureJava#handler}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the procedure;

the identifier does not need to be unique for the schema in which the procedure is created because stored procedures are [identified and resolved by the combination of the name and argument types](https://docs.snowflake.com/en/developer-guide/udf-stored-procedure-naming-conventions.html#label-procedure-function-name-overloading). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/procedure_java#name ProcedureJava#name}

---

##### `returnType`<sup>Required</sup> <a name="returnType" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaConfig.property.returnType"></a>

```java
public java.lang.String getReturnType();
```

- *Type:* java.lang.String

Specifies the type of the result returned by the stored procedure.

For `<result_data_type>`, use the Snowflake data type that corresponds to the type of the language that you are using (see [SQL-Java Data Type Mappings](https://docs.snowflake.com/en/developer-guide/udf-stored-procedure-data-type-mapping.html#label-sql-java-data-type-mappings)). For `RETURNS TABLE ( [ col_name col_data_type [ , ... ] ] )`, if you know the Snowflake data types of the columns in the returned table, specify the column names and types. Otherwise (e.g. if you are determining the column types during run time), you can omit the column names and types (i.e. `TABLE ()`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/procedure_java#return_type ProcedureJava#return_type}

---

##### `runtimeVersion`<sup>Required</sup> <a name="runtimeVersion" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaConfig.property.runtimeVersion"></a>

```java
public java.lang.String getRuntimeVersion();
```

- *Type:* java.lang.String

The language runtime version to use. Currently, the supported versions are: 11.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/procedure_java#runtime_version ProcedureJava#runtime_version}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaConfig.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

The schema in which to create the procedure.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/procedure_java#schema ProcedureJava#schema}

---

##### `snowparkPackage`<sup>Required</sup> <a name="snowparkPackage" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaConfig.property.snowparkPackage"></a>

```java
public java.lang.String getSnowparkPackage();
```

- *Type:* java.lang.String

The Snowpark package is required for stored procedures, so it must always be present.

For more information about Snowpark, see [Snowpark API](https://docs.snowflake.com/en/developer-guide/snowpark/index).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/procedure_java#snowpark_package ProcedureJava#snowpark_package}

---

##### `arguments`<sup>Optional</sup> <a name="arguments" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaConfig.property.arguments"></a>

```java
public IResolvable|java.util.List<ProcedureJavaArguments> getArguments();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaArguments">ProcedureJavaArguments</a>>

arguments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/procedure_java#arguments ProcedureJava#arguments}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaConfig.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

(Default: `user-defined procedure`) Specifies a comment for the procedure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/procedure_java#comment ProcedureJava#comment}

---

##### `enableConsoleOutput`<sup>Optional</sup> <a name="enableConsoleOutput" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaConfig.property.enableConsoleOutput"></a>

```java
public java.lang.Boolean|IResolvable getEnableConsoleOutput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable stdout/stderr fast path logging for anonyous stored procs.

This is a public parameter (similar to LOG_LEVEL). For more information, check [ENABLE_CONSOLE_OUTPUT docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-console-output).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/procedure_java#enable_console_output ProcedureJava#enable_console_output}

---

##### `executeAs`<sup>Optional</sup> <a name="executeAs" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaConfig.property.executeAs"></a>

```java
public java.lang.String getExecuteAs();
```

- *Type:* java.lang.String

Specifies whether the stored procedure executes with the privileges of the owner (an “owner’s rights” stored procedure) or with the privileges of the caller (a “caller’s rights” stored procedure).

If you execute the statement CREATE PROCEDURE … EXECUTE AS CALLER, then in the future the procedure will execute as a caller’s rights procedure. If you execute CREATE PROCEDURE … EXECUTE AS OWNER, then the procedure will execute as an owner’s rights procedure. For more information, see [Understanding caller’s rights and owner’s rights stored procedures](https://docs.snowflake.com/en/developer-guide/stored-procedure/stored-procedures-rights). Valid values are (case-insensitive): `CALLER` | `OWNER`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/procedure_java#execute_as ProcedureJava#execute_as}

---

##### `externalAccessIntegrations`<sup>Optional</sup> <a name="externalAccessIntegrations" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaConfig.property.externalAccessIntegrations"></a>

```java
public java.util.List<java.lang.String> getExternalAccessIntegrations();
```

- *Type:* java.util.List<java.lang.String>

The names of [external access integrations](https://docs.snowflake.com/en/sql-reference/sql/create-external-access-integration) needed in order for this procedure’s handler code to access external networks. An external access integration specifies [network rules](https://docs.snowflake.com/en/sql-reference/sql/create-network-rule) and [secrets](https://docs.snowflake.com/en/sql-reference/sql/create-secret) that specify external locations and credentials (if any) allowed for use by handler code when making requests of an external network, such as an external REST API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/procedure_java#external_access_integrations ProcedureJava#external_access_integrations}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/procedure_java#id ProcedureJava#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imports`<sup>Optional</sup> <a name="imports" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaConfig.property.imports"></a>

```java
public IResolvable|java.util.List<ProcedureJavaImports> getImports();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaImports">ProcedureJavaImports</a>>

imports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/procedure_java#imports ProcedureJava#imports}

---

##### `isSecure`<sup>Optional</sup> <a name="isSecure" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaConfig.property.isSecure"></a>

```java
public java.lang.String getIsSecure();
```

- *Type:* java.lang.String

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies that the procedure is secure.

For more information about secure procedures, see [Protecting Sensitive Information with Secure UDFs and Stored Procedures](https://docs.snowflake.com/en/developer-guide/secure-udf-procedure). Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/procedure_java#is_secure ProcedureJava#is_secure}

---

##### `logLevel`<sup>Optional</sup> <a name="logLevel" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaConfig.property.logLevel"></a>

```java
public java.lang.String getLogLevel();
```

- *Type:* java.lang.String

LOG_LEVEL to use when filtering events For more information, check [LOG_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#log-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/procedure_java#log_level ProcedureJava#log_level}

---

##### `metricLevel`<sup>Optional</sup> <a name="metricLevel" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaConfig.property.metricLevel"></a>

```java
public java.lang.String getMetricLevel();
```

- *Type:* java.lang.String

METRIC_LEVEL value to control whether to emit metrics to Event Table For more information, check [METRIC_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#metric-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/procedure_java#metric_level ProcedureJava#metric_level}

---

##### `nullInputBehavior`<sup>Optional</sup> <a name="nullInputBehavior" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaConfig.property.nullInputBehavior"></a>

```java
public java.lang.String getNullInputBehavior();
```

- *Type:* java.lang.String

Specifies the behavior of the procedure when called with null inputs.

Valid values are (case-insensitive): `CALLED ON NULL INPUT` | `RETURNS NULL ON NULL INPUT`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/procedure_java#null_input_behavior ProcedureJava#null_input_behavior}

---

##### `packages`<sup>Optional</sup> <a name="packages" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaConfig.property.packages"></a>

```java
public java.util.List<java.lang.String> getPackages();
```

- *Type:* java.util.List<java.lang.String>

List of the names of packages deployed in Snowflake that should be included in the handler code’s execution environment.

The Snowpark package is required for stored procedures, but is specified in the `snowpark_package` attribute. For more information about Snowpark, see [Snowpark API](https://docs.snowflake.com/en/developer-guide/snowpark/index).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/procedure_java#packages ProcedureJava#packages}

---

##### `procedureDefinition`<sup>Optional</sup> <a name="procedureDefinition" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaConfig.property.procedureDefinition"></a>

```java
public java.lang.String getProcedureDefinition();
```

- *Type:* java.lang.String

Defines the code executed by the stored procedure.

The definition can consist of any valid code. Wrapping `$$` signs are added by the provider automatically; do not include them. The `procedure_definition` value must be Java source code. For more information, see [Java (using Snowpark)](https://docs.snowflake.com/en/developer-guide/stored-procedure/stored-procedures-java). To mitigate permadiff on this field, the provider replaces blank characters with a space. This can lead to false positives in cases where a change in case or run of whitespace is semantically significant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/procedure_java#procedure_definition ProcedureJava#procedure_definition}

---

##### `secrets`<sup>Optional</sup> <a name="secrets" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaConfig.property.secrets"></a>

```java
public IResolvable|java.util.List<ProcedureJavaSecrets> getSecrets();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecrets">ProcedureJavaSecrets</a>>

secrets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/procedure_java#secrets ProcedureJava#secrets}

---

##### `targetPath`<sup>Optional</sup> <a name="targetPath" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaConfig.property.targetPath"></a>

```java
public ProcedureJavaTargetPath getTargetPath();
```

- *Type:* <a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaTargetPath">ProcedureJavaTargetPath</a>

target_path block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/procedure_java#target_path ProcedureJava#target_path}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaConfig.property.timeouts"></a>

```java
public ProcedureJavaTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaTimeouts">ProcedureJavaTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/procedure_java#timeouts ProcedureJava#timeouts}

---

##### `traceLevel`<sup>Optional</sup> <a name="traceLevel" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaConfig.property.traceLevel"></a>

```java
public java.lang.String getTraceLevel();
```

- *Type:* java.lang.String

Trace level value to use when generating/filtering trace events For more information, check [TRACE_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#trace-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/procedure_java#trace_level ProcedureJava#trace_level}

---

### ProcedureJavaImports <a name="ProcedureJavaImports" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaImports"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaImports.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.procedure_java.ProcedureJavaImports;

ProcedureJavaImports.builder()
    .pathOnStage(java.lang.String)
    .stageLocation(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaImports.property.pathOnStage">pathOnStage</a></code> | <code>java.lang.String</code> | Path for import on stage, without the leading `/`. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaImports.property.stageLocation">stageLocation</a></code> | <code>java.lang.String</code> | Stage location without leading `@`. |

---

##### `pathOnStage`<sup>Required</sup> <a name="pathOnStage" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaImports.property.pathOnStage"></a>

```java
public java.lang.String getPathOnStage();
```

- *Type:* java.lang.String

Path for import on stage, without the leading `/`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/procedure_java#path_on_stage ProcedureJava#path_on_stage}

---

##### `stageLocation`<sup>Required</sup> <a name="stageLocation" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaImports.property.stageLocation"></a>

```java
public java.lang.String getStageLocation();
```

- *Type:* java.lang.String

Stage location without leading `@`.

To use your user's stage set this to `~`, otherwise pass fully qualified name of the stage (with every part contained in double quotes or use `snowflake_stage.<your stage's resource name>.fully_qualified_name` if you manage this stage through terraform).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/procedure_java#stage_location ProcedureJava#stage_location}

---

### ProcedureJavaParameters <a name="ProcedureJavaParameters" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParameters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.procedure_java.ProcedureJavaParameters;

ProcedureJavaParameters.builder()
    .build();
```


### ProcedureJavaParametersEnableConsoleOutput <a name="ProcedureJavaParametersEnableConsoleOutput" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersEnableConsoleOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersEnableConsoleOutput.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.procedure_java.ProcedureJavaParametersEnableConsoleOutput;

ProcedureJavaParametersEnableConsoleOutput.builder()
    .build();
```


### ProcedureJavaParametersLogLevel <a name="ProcedureJavaParametersLogLevel" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersLogLevel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersLogLevel.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.procedure_java.ProcedureJavaParametersLogLevel;

ProcedureJavaParametersLogLevel.builder()
    .build();
```


### ProcedureJavaParametersMetricLevel <a name="ProcedureJavaParametersMetricLevel" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersMetricLevel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersMetricLevel.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.procedure_java.ProcedureJavaParametersMetricLevel;

ProcedureJavaParametersMetricLevel.builder()
    .build();
```


### ProcedureJavaParametersTraceLevel <a name="ProcedureJavaParametersTraceLevel" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersTraceLevel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersTraceLevel.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.procedure_java.ProcedureJavaParametersTraceLevel;

ProcedureJavaParametersTraceLevel.builder()
    .build();
```


### ProcedureJavaSecrets <a name="ProcedureJavaSecrets" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecrets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecrets.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.procedure_java.ProcedureJavaSecrets;

ProcedureJavaSecrets.builder()
    .secretId(java.lang.String)
    .secretVariableName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecrets.property.secretId">secretId</a></code> | <code>java.lang.String</code> | Fully qualified name of the allowed [secret](https://docs.snowflake.com/en/sql-reference/sql/create-secret). You will receive an error if you specify a SECRETS value whose secret isn’t also included in an integration specified by the EXTERNAL_ACCESS_INTEGRATIONS parameter. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecrets.property.secretVariableName">secretVariableName</a></code> | <code>java.lang.String</code> | The variable that will be used in handler code when retrieving information from the secret. |

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecrets.property.secretId"></a>

```java
public java.lang.String getSecretId();
```

- *Type:* java.lang.String

Fully qualified name of the allowed [secret](https://docs.snowflake.com/en/sql-reference/sql/create-secret). You will receive an error if you specify a SECRETS value whose secret isn’t also included in an integration specified by the EXTERNAL_ACCESS_INTEGRATIONS parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/procedure_java#secret_id ProcedureJava#secret_id}

---

##### `secretVariableName`<sup>Required</sup> <a name="secretVariableName" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecrets.property.secretVariableName"></a>

```java
public java.lang.String getSecretVariableName();
```

- *Type:* java.lang.String

The variable that will be used in handler code when retrieving information from the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/procedure_java#secret_variable_name ProcedureJava#secret_variable_name}

---

### ProcedureJavaShowOutput <a name="ProcedureJavaShowOutput" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutput.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.procedure_java.ProcedureJavaShowOutput;

ProcedureJavaShowOutput.builder()
    .build();
```


### ProcedureJavaTargetPath <a name="ProcedureJavaTargetPath" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaTargetPath"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaTargetPath.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.procedure_java.ProcedureJavaTargetPath;

ProcedureJavaTargetPath.builder()
    .pathOnStage(java.lang.String)
    .stageLocation(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaTargetPath.property.pathOnStage">pathOnStage</a></code> | <code>java.lang.String</code> | Path for import on stage, without the leading `/`. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaTargetPath.property.stageLocation">stageLocation</a></code> | <code>java.lang.String</code> | Stage location without leading `@`. |

---

##### `pathOnStage`<sup>Required</sup> <a name="pathOnStage" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaTargetPath.property.pathOnStage"></a>

```java
public java.lang.String getPathOnStage();
```

- *Type:* java.lang.String

Path for import on stage, without the leading `/`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/procedure_java#path_on_stage ProcedureJava#path_on_stage}

---

##### `stageLocation`<sup>Required</sup> <a name="stageLocation" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaTargetPath.property.stageLocation"></a>

```java
public java.lang.String getStageLocation();
```

- *Type:* java.lang.String

Stage location without leading `@`.

To use your user's stage set this to `~`, otherwise pass fully qualified name of the stage (with every part contained in double quotes or use `snowflake_stage.<your stage's resource name>.fully_qualified_name` if you manage this stage through terraform).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/procedure_java#stage_location ProcedureJava#stage_location}

---

### ProcedureJavaTimeouts <a name="ProcedureJavaTimeouts" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.procedure_java.ProcedureJavaTimeouts;

ProcedureJavaTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/procedure_java#create ProcedureJava#create}. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/procedure_java#delete ProcedureJava#delete}. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/procedure_java#read ProcedureJava#read}. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/procedure_java#update ProcedureJava#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/procedure_java#create ProcedureJava#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/procedure_java#delete ProcedureJava#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/procedure_java#read ProcedureJava#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/procedure_java#update ProcedureJava#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ProcedureJavaArgumentsList <a name="ProcedureJavaArgumentsList" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.procedure_java.ProcedureJavaArgumentsList;

new ProcedureJavaArgumentsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsList.get"></a>

```java
public ProcedureJavaArgumentsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaArguments">ProcedureJavaArguments</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ProcedureJavaArguments> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaArguments">ProcedureJavaArguments</a>>

---


### ProcedureJavaArgumentsOutputReference <a name="ProcedureJavaArgumentsOutputReference" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.procedure_java.ProcedureJavaArgumentsOutputReference;

new ProcedureJavaArgumentsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsOutputReference.resetArgDefaultValue">resetArgDefaultValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArgDefaultValue` <a name="resetArgDefaultValue" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsOutputReference.resetArgDefaultValue"></a>

```java
public void resetArgDefaultValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsOutputReference.property.argDataTypeInput">argDataTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsOutputReference.property.argDefaultValueInput">argDefaultValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsOutputReference.property.argNameInput">argNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsOutputReference.property.argDataType">argDataType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsOutputReference.property.argDefaultValue">argDefaultValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsOutputReference.property.argName">argName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaArguments">ProcedureJavaArguments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `argDataTypeInput`<sup>Optional</sup> <a name="argDataTypeInput" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsOutputReference.property.argDataTypeInput"></a>

```java
public java.lang.String getArgDataTypeInput();
```

- *Type:* java.lang.String

---

##### `argDefaultValueInput`<sup>Optional</sup> <a name="argDefaultValueInput" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsOutputReference.property.argDefaultValueInput"></a>

```java
public java.lang.String getArgDefaultValueInput();
```

- *Type:* java.lang.String

---

##### `argNameInput`<sup>Optional</sup> <a name="argNameInput" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsOutputReference.property.argNameInput"></a>

```java
public java.lang.String getArgNameInput();
```

- *Type:* java.lang.String

---

##### `argDataType`<sup>Required</sup> <a name="argDataType" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsOutputReference.property.argDataType"></a>

```java
public java.lang.String getArgDataType();
```

- *Type:* java.lang.String

---

##### `argDefaultValue`<sup>Required</sup> <a name="argDefaultValue" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsOutputReference.property.argDefaultValue"></a>

```java
public java.lang.String getArgDefaultValue();
```

- *Type:* java.lang.String

---

##### `argName`<sup>Required</sup> <a name="argName" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsOutputReference.property.argName"></a>

```java
public java.lang.String getArgName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaArgumentsOutputReference.property.internalValue"></a>

```java
public IResolvable|ProcedureJavaArguments getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaArguments">ProcedureJavaArguments</a>

---


### ProcedureJavaImportsList <a name="ProcedureJavaImportsList" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaImportsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaImportsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.procedure_java.ProcedureJavaImportsList;

new ProcedureJavaImportsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaImportsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaImportsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaImportsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaImportsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaImportsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaImportsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaImportsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaImportsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaImportsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaImportsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaImportsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaImportsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaImportsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaImportsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaImportsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaImportsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaImportsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaImportsList.get"></a>

```java
public ProcedureJavaImportsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaImportsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaImportsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaImportsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaImportsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaImports">ProcedureJavaImports</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaImportsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaImportsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaImportsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ProcedureJavaImports> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaImports">ProcedureJavaImports</a>>

---


### ProcedureJavaImportsOutputReference <a name="ProcedureJavaImportsOutputReference" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaImportsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaImportsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.procedure_java.ProcedureJavaImportsOutputReference;

new ProcedureJavaImportsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaImportsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaImportsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaImportsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaImportsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaImportsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaImportsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaImportsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaImportsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaImportsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaImportsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaImportsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaImportsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaImportsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaImportsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaImportsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaImportsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaImportsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaImportsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaImportsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaImportsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaImportsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaImportsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaImportsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaImportsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaImportsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaImportsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaImportsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaImportsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaImportsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaImportsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaImportsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaImportsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaImportsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaImportsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaImportsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaImportsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaImportsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaImportsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaImportsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaImportsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaImportsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaImportsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaImportsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaImportsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaImportsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaImportsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaImportsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaImportsOutputReference.property.pathOnStageInput">pathOnStageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaImportsOutputReference.property.stageLocationInput">stageLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaImportsOutputReference.property.pathOnStage">pathOnStage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaImportsOutputReference.property.stageLocation">stageLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaImportsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaImports">ProcedureJavaImports</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaImportsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaImportsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pathOnStageInput`<sup>Optional</sup> <a name="pathOnStageInput" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaImportsOutputReference.property.pathOnStageInput"></a>

```java
public java.lang.String getPathOnStageInput();
```

- *Type:* java.lang.String

---

##### `stageLocationInput`<sup>Optional</sup> <a name="stageLocationInput" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaImportsOutputReference.property.stageLocationInput"></a>

```java
public java.lang.String getStageLocationInput();
```

- *Type:* java.lang.String

---

##### `pathOnStage`<sup>Required</sup> <a name="pathOnStage" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaImportsOutputReference.property.pathOnStage"></a>

```java
public java.lang.String getPathOnStage();
```

- *Type:* java.lang.String

---

##### `stageLocation`<sup>Required</sup> <a name="stageLocation" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaImportsOutputReference.property.stageLocation"></a>

```java
public java.lang.String getStageLocation();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaImportsOutputReference.property.internalValue"></a>

```java
public IResolvable|ProcedureJavaImports getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaImports">ProcedureJavaImports</a>

---


### ProcedureJavaParametersEnableConsoleOutputList <a name="ProcedureJavaParametersEnableConsoleOutputList" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersEnableConsoleOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersEnableConsoleOutputList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.procedure_java.ProcedureJavaParametersEnableConsoleOutputList;

new ProcedureJavaParametersEnableConsoleOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersEnableConsoleOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersEnableConsoleOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersEnableConsoleOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersEnableConsoleOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersEnableConsoleOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersEnableConsoleOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersEnableConsoleOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersEnableConsoleOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersEnableConsoleOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersEnableConsoleOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersEnableConsoleOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersEnableConsoleOutputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersEnableConsoleOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersEnableConsoleOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersEnableConsoleOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersEnableConsoleOutputList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersEnableConsoleOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersEnableConsoleOutputList.get"></a>

```java
public ProcedureJavaParametersEnableConsoleOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersEnableConsoleOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersEnableConsoleOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersEnableConsoleOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersEnableConsoleOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersEnableConsoleOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ProcedureJavaParametersEnableConsoleOutputOutputReference <a name="ProcedureJavaParametersEnableConsoleOutputOutputReference" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersEnableConsoleOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersEnableConsoleOutputOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.procedure_java.ProcedureJavaParametersEnableConsoleOutputOutputReference;

new ProcedureJavaParametersEnableConsoleOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersEnableConsoleOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersEnableConsoleOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersEnableConsoleOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersEnableConsoleOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersEnableConsoleOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersEnableConsoleOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersEnableConsoleOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersEnableConsoleOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersEnableConsoleOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersEnableConsoleOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersEnableConsoleOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersEnableConsoleOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersEnableConsoleOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersEnableConsoleOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersEnableConsoleOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersEnableConsoleOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersEnableConsoleOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersEnableConsoleOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersEnableConsoleOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersEnableConsoleOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersEnableConsoleOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersEnableConsoleOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersEnableConsoleOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersEnableConsoleOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersEnableConsoleOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersEnableConsoleOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersEnableConsoleOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersEnableConsoleOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersEnableConsoleOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersEnableConsoleOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersEnableConsoleOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersEnableConsoleOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersEnableConsoleOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersEnableConsoleOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersEnableConsoleOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersEnableConsoleOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersEnableConsoleOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersEnableConsoleOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersEnableConsoleOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersEnableConsoleOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersEnableConsoleOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersEnableConsoleOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersEnableConsoleOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersEnableConsoleOutputOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersEnableConsoleOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersEnableConsoleOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersEnableConsoleOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersEnableConsoleOutputOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersEnableConsoleOutputOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersEnableConsoleOutputOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersEnableConsoleOutputOutputReference.property.level">level</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersEnableConsoleOutputOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersEnableConsoleOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersEnableConsoleOutput">ProcedureJavaParametersEnableConsoleOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersEnableConsoleOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersEnableConsoleOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersEnableConsoleOutputOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersEnableConsoleOutputOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersEnableConsoleOutputOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersEnableConsoleOutputOutputReference.property.level"></a>

```java
public java.lang.String getLevel();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersEnableConsoleOutputOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersEnableConsoleOutputOutputReference.property.internalValue"></a>

```java
public ProcedureJavaParametersEnableConsoleOutput getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersEnableConsoleOutput">ProcedureJavaParametersEnableConsoleOutput</a>

---


### ProcedureJavaParametersList <a name="ProcedureJavaParametersList" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.procedure_java.ProcedureJavaParametersList;

new ProcedureJavaParametersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersList.get"></a>

```java
public ProcedureJavaParametersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ProcedureJavaParametersLogLevelList <a name="ProcedureJavaParametersLogLevelList" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersLogLevelList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersLogLevelList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.procedure_java.ProcedureJavaParametersLogLevelList;

new ProcedureJavaParametersLogLevelList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersLogLevelList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersLogLevelList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersLogLevelList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersLogLevelList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersLogLevelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersLogLevelList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersLogLevelList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersLogLevelList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersLogLevelList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersLogLevelList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersLogLevelList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersLogLevelList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersLogLevelList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersLogLevelList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersLogLevelList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersLogLevelList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersLogLevelList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersLogLevelList.get"></a>

```java
public ProcedureJavaParametersLogLevelOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersLogLevelList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersLogLevelList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersLogLevelList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersLogLevelList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersLogLevelList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ProcedureJavaParametersLogLevelOutputReference <a name="ProcedureJavaParametersLogLevelOutputReference" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersLogLevelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersLogLevelOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.procedure_java.ProcedureJavaParametersLogLevelOutputReference;

new ProcedureJavaParametersLogLevelOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersLogLevelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersLogLevelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersLogLevelOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersLogLevelOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersLogLevelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersLogLevelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersLogLevelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersLogLevelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersLogLevelOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersLogLevelOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersLogLevelOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersLogLevelOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersLogLevelOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersLogLevelOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersLogLevelOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersLogLevelOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersLogLevelOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersLogLevelOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersLogLevelOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersLogLevelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersLogLevelOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersLogLevelOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersLogLevelOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersLogLevelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersLogLevelOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersLogLevelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersLogLevelOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersLogLevelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersLogLevelOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersLogLevelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersLogLevelOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersLogLevelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersLogLevelOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersLogLevelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersLogLevelOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersLogLevelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersLogLevelOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersLogLevelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersLogLevelOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersLogLevelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersLogLevelOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersLogLevelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersLogLevelOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersLogLevelOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersLogLevelOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersLogLevelOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersLogLevelOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersLogLevelOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersLogLevelOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersLogLevelOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersLogLevelOutputReference.property.level">level</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersLogLevelOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersLogLevelOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersLogLevel">ProcedureJavaParametersLogLevel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersLogLevelOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersLogLevelOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersLogLevelOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersLogLevelOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersLogLevelOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersLogLevelOutputReference.property.level"></a>

```java
public java.lang.String getLevel();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersLogLevelOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersLogLevelOutputReference.property.internalValue"></a>

```java
public ProcedureJavaParametersLogLevel getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersLogLevel">ProcedureJavaParametersLogLevel</a>

---


### ProcedureJavaParametersMetricLevelList <a name="ProcedureJavaParametersMetricLevelList" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersMetricLevelList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersMetricLevelList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.procedure_java.ProcedureJavaParametersMetricLevelList;

new ProcedureJavaParametersMetricLevelList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersMetricLevelList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersMetricLevelList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersMetricLevelList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersMetricLevelList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersMetricLevelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersMetricLevelList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersMetricLevelList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersMetricLevelList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersMetricLevelList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersMetricLevelList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersMetricLevelList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersMetricLevelList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersMetricLevelList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersMetricLevelList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersMetricLevelList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersMetricLevelList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersMetricLevelList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersMetricLevelList.get"></a>

```java
public ProcedureJavaParametersMetricLevelOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersMetricLevelList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersMetricLevelList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersMetricLevelList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersMetricLevelList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersMetricLevelList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ProcedureJavaParametersMetricLevelOutputReference <a name="ProcedureJavaParametersMetricLevelOutputReference" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersMetricLevelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersMetricLevelOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.procedure_java.ProcedureJavaParametersMetricLevelOutputReference;

new ProcedureJavaParametersMetricLevelOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersMetricLevelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersMetricLevelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersMetricLevelOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersMetricLevelOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersMetricLevelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersMetricLevelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersMetricLevelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersMetricLevelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersMetricLevelOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersMetricLevelOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersMetricLevelOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersMetricLevelOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersMetricLevelOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersMetricLevelOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersMetricLevelOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersMetricLevelOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersMetricLevelOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersMetricLevelOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersMetricLevelOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersMetricLevelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersMetricLevelOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersMetricLevelOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersMetricLevelOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersMetricLevelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersMetricLevelOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersMetricLevelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersMetricLevelOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersMetricLevelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersMetricLevelOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersMetricLevelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersMetricLevelOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersMetricLevelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersMetricLevelOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersMetricLevelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersMetricLevelOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersMetricLevelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersMetricLevelOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersMetricLevelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersMetricLevelOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersMetricLevelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersMetricLevelOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersMetricLevelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersMetricLevelOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersMetricLevelOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersMetricLevelOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersMetricLevelOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersMetricLevelOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersMetricLevelOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersMetricLevelOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersMetricLevelOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersMetricLevelOutputReference.property.level">level</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersMetricLevelOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersMetricLevelOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersMetricLevel">ProcedureJavaParametersMetricLevel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersMetricLevelOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersMetricLevelOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersMetricLevelOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersMetricLevelOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersMetricLevelOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersMetricLevelOutputReference.property.level"></a>

```java
public java.lang.String getLevel();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersMetricLevelOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersMetricLevelOutputReference.property.internalValue"></a>

```java
public ProcedureJavaParametersMetricLevel getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersMetricLevel">ProcedureJavaParametersMetricLevel</a>

---


### ProcedureJavaParametersOutputReference <a name="ProcedureJavaParametersOutputReference" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.procedure_java.ProcedureJavaParametersOutputReference;

new ProcedureJavaParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersOutputReference.property.enableConsoleOutput">enableConsoleOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersEnableConsoleOutputList">ProcedureJavaParametersEnableConsoleOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersOutputReference.property.logLevel">logLevel</a></code> | <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersLogLevelList">ProcedureJavaParametersLogLevelList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersOutputReference.property.metricLevel">metricLevel</a></code> | <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersMetricLevelList">ProcedureJavaParametersMetricLevelList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersOutputReference.property.traceLevel">traceLevel</a></code> | <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersTraceLevelList">ProcedureJavaParametersTraceLevelList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParameters">ProcedureJavaParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableConsoleOutput`<sup>Required</sup> <a name="enableConsoleOutput" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersOutputReference.property.enableConsoleOutput"></a>

```java
public ProcedureJavaParametersEnableConsoleOutputList getEnableConsoleOutput();
```

- *Type:* <a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersEnableConsoleOutputList">ProcedureJavaParametersEnableConsoleOutputList</a>

---

##### `logLevel`<sup>Required</sup> <a name="logLevel" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersOutputReference.property.logLevel"></a>

```java
public ProcedureJavaParametersLogLevelList getLogLevel();
```

- *Type:* <a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersLogLevelList">ProcedureJavaParametersLogLevelList</a>

---

##### `metricLevel`<sup>Required</sup> <a name="metricLevel" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersOutputReference.property.metricLevel"></a>

```java
public ProcedureJavaParametersMetricLevelList getMetricLevel();
```

- *Type:* <a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersMetricLevelList">ProcedureJavaParametersMetricLevelList</a>

---

##### `traceLevel`<sup>Required</sup> <a name="traceLevel" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersOutputReference.property.traceLevel"></a>

```java
public ProcedureJavaParametersTraceLevelList getTraceLevel();
```

- *Type:* <a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersTraceLevelList">ProcedureJavaParametersTraceLevelList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersOutputReference.property.internalValue"></a>

```java
public ProcedureJavaParameters getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParameters">ProcedureJavaParameters</a>

---


### ProcedureJavaParametersTraceLevelList <a name="ProcedureJavaParametersTraceLevelList" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersTraceLevelList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersTraceLevelList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.procedure_java.ProcedureJavaParametersTraceLevelList;

new ProcedureJavaParametersTraceLevelList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersTraceLevelList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersTraceLevelList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersTraceLevelList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersTraceLevelList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersTraceLevelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersTraceLevelList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersTraceLevelList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersTraceLevelList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersTraceLevelList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersTraceLevelList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersTraceLevelList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersTraceLevelList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersTraceLevelList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersTraceLevelList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersTraceLevelList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersTraceLevelList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersTraceLevelList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersTraceLevelList.get"></a>

```java
public ProcedureJavaParametersTraceLevelOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersTraceLevelList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersTraceLevelList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersTraceLevelList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersTraceLevelList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersTraceLevelList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ProcedureJavaParametersTraceLevelOutputReference <a name="ProcedureJavaParametersTraceLevelOutputReference" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersTraceLevelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersTraceLevelOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.procedure_java.ProcedureJavaParametersTraceLevelOutputReference;

new ProcedureJavaParametersTraceLevelOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersTraceLevelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersTraceLevelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersTraceLevelOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersTraceLevelOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersTraceLevelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersTraceLevelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersTraceLevelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersTraceLevelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersTraceLevelOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersTraceLevelOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersTraceLevelOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersTraceLevelOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersTraceLevelOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersTraceLevelOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersTraceLevelOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersTraceLevelOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersTraceLevelOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersTraceLevelOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersTraceLevelOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersTraceLevelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersTraceLevelOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersTraceLevelOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersTraceLevelOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersTraceLevelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersTraceLevelOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersTraceLevelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersTraceLevelOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersTraceLevelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersTraceLevelOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersTraceLevelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersTraceLevelOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersTraceLevelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersTraceLevelOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersTraceLevelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersTraceLevelOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersTraceLevelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersTraceLevelOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersTraceLevelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersTraceLevelOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersTraceLevelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersTraceLevelOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersTraceLevelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersTraceLevelOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersTraceLevelOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersTraceLevelOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersTraceLevelOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersTraceLevelOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersTraceLevelOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersTraceLevelOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersTraceLevelOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersTraceLevelOutputReference.property.level">level</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersTraceLevelOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersTraceLevelOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersTraceLevel">ProcedureJavaParametersTraceLevel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersTraceLevelOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersTraceLevelOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersTraceLevelOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersTraceLevelOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersTraceLevelOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersTraceLevelOutputReference.property.level"></a>

```java
public java.lang.String getLevel();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersTraceLevelOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersTraceLevelOutputReference.property.internalValue"></a>

```java
public ProcedureJavaParametersTraceLevel getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaParametersTraceLevel">ProcedureJavaParametersTraceLevel</a>

---


### ProcedureJavaSecretsList <a name="ProcedureJavaSecretsList" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecretsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecretsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.procedure_java.ProcedureJavaSecretsList;

new ProcedureJavaSecretsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecretsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecretsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecretsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecretsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecretsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecretsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecretsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecretsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecretsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecretsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecretsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecretsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecretsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecretsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecretsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecretsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecretsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecretsList.get"></a>

```java
public ProcedureJavaSecretsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecretsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecretsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecretsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecretsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecrets">ProcedureJavaSecrets</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecretsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecretsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecretsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ProcedureJavaSecrets> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecrets">ProcedureJavaSecrets</a>>

---


### ProcedureJavaSecretsOutputReference <a name="ProcedureJavaSecretsOutputReference" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecretsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecretsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.procedure_java.ProcedureJavaSecretsOutputReference;

new ProcedureJavaSecretsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecretsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecretsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecretsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecretsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecretsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecretsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecretsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecretsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecretsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecretsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecretsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecretsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecretsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecretsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecretsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecretsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecretsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecretsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecretsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecretsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecretsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecretsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecretsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecretsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecretsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecretsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecretsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecretsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecretsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecretsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecretsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecretsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecretsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecretsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecretsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecretsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecretsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecretsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecretsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecretsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecretsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecretsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecretsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecretsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecretsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecretsOutputReference.property.secretIdInput">secretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecretsOutputReference.property.secretVariableNameInput">secretVariableNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecretsOutputReference.property.secretId">secretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecretsOutputReference.property.secretVariableName">secretVariableName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecretsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecrets">ProcedureJavaSecrets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecretsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecretsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `secretIdInput`<sup>Optional</sup> <a name="secretIdInput" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecretsOutputReference.property.secretIdInput"></a>

```java
public java.lang.String getSecretIdInput();
```

- *Type:* java.lang.String

---

##### `secretVariableNameInput`<sup>Optional</sup> <a name="secretVariableNameInput" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecretsOutputReference.property.secretVariableNameInput"></a>

```java
public java.lang.String getSecretVariableNameInput();
```

- *Type:* java.lang.String

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecretsOutputReference.property.secretId"></a>

```java
public java.lang.String getSecretId();
```

- *Type:* java.lang.String

---

##### `secretVariableName`<sup>Required</sup> <a name="secretVariableName" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecretsOutputReference.property.secretVariableName"></a>

```java
public java.lang.String getSecretVariableName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecretsOutputReference.property.internalValue"></a>

```java
public IResolvable|ProcedureJavaSecrets getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaSecrets">ProcedureJavaSecrets</a>

---


### ProcedureJavaShowOutputList <a name="ProcedureJavaShowOutputList" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.procedure_java.ProcedureJavaShowOutputList;

new ProcedureJavaShowOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputList.get"></a>

```java
public ProcedureJavaShowOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ProcedureJavaShowOutputOutputReference <a name="ProcedureJavaShowOutputOutputReference" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.procedure_java.ProcedureJavaShowOutputOutputReference;

new ProcedureJavaShowOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputOutputReference.property.argumentsRaw">argumentsRaw</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputOutputReference.property.catalogName">catalogName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputOutputReference.property.externalAccessIntegrations">externalAccessIntegrations</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputOutputReference.property.isAggregate">isAggregate</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputOutputReference.property.isAnsi">isAnsi</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputOutputReference.property.isBuiltin">isBuiltin</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputOutputReference.property.isSecure">isSecure</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputOutputReference.property.isTableFunction">isTableFunction</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputOutputReference.property.maxNumArguments">maxNumArguments</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputOutputReference.property.minNumArguments">minNumArguments</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputOutputReference.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputOutputReference.property.secrets">secrets</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputOutputReference.property.validForClustering">validForClustering</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutput">ProcedureJavaShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `argumentsRaw`<sup>Required</sup> <a name="argumentsRaw" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputOutputReference.property.argumentsRaw"></a>

```java
public java.lang.String getArgumentsRaw();
```

- *Type:* java.lang.String

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputOutputReference.property.catalogName"></a>

```java
public java.lang.String getCatalogName();
```

- *Type:* java.lang.String

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputOutputReference.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `externalAccessIntegrations`<sup>Required</sup> <a name="externalAccessIntegrations" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputOutputReference.property.externalAccessIntegrations"></a>

```java
public java.lang.String getExternalAccessIntegrations();
```

- *Type:* java.lang.String

---

##### `isAggregate`<sup>Required</sup> <a name="isAggregate" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputOutputReference.property.isAggregate"></a>

```java
public IResolvable getIsAggregate();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isAnsi`<sup>Required</sup> <a name="isAnsi" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputOutputReference.property.isAnsi"></a>

```java
public IResolvable getIsAnsi();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isBuiltin`<sup>Required</sup> <a name="isBuiltin" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputOutputReference.property.isBuiltin"></a>

```java
public IResolvable getIsBuiltin();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isSecure`<sup>Required</sup> <a name="isSecure" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputOutputReference.property.isSecure"></a>

```java
public IResolvable getIsSecure();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isTableFunction`<sup>Required</sup> <a name="isTableFunction" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputOutputReference.property.isTableFunction"></a>

```java
public IResolvable getIsTableFunction();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `maxNumArguments`<sup>Required</sup> <a name="maxNumArguments" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputOutputReference.property.maxNumArguments"></a>

```java
public java.lang.Number getMaxNumArguments();
```

- *Type:* java.lang.Number

---

##### `minNumArguments`<sup>Required</sup> <a name="minNumArguments" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputOutputReference.property.minNumArguments"></a>

```java
public java.lang.Number getMinNumArguments();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputOutputReference.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

---

##### `secrets`<sup>Required</sup> <a name="secrets" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputOutputReference.property.secrets"></a>

```java
public java.lang.String getSecrets();
```

- *Type:* java.lang.String

---

##### `validForClustering`<sup>Required</sup> <a name="validForClustering" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputOutputReference.property.validForClustering"></a>

```java
public IResolvable getValidForClustering();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutputOutputReference.property.internalValue"></a>

```java
public ProcedureJavaShowOutput getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaShowOutput">ProcedureJavaShowOutput</a>

---


### ProcedureJavaTargetPathOutputReference <a name="ProcedureJavaTargetPathOutputReference" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaTargetPathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaTargetPathOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.procedure_java.ProcedureJavaTargetPathOutputReference;

new ProcedureJavaTargetPathOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaTargetPathOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaTargetPathOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaTargetPathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaTargetPathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaTargetPathOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaTargetPathOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaTargetPathOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaTargetPathOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaTargetPathOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaTargetPathOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaTargetPathOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaTargetPathOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaTargetPathOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaTargetPathOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaTargetPathOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaTargetPathOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaTargetPathOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaTargetPathOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaTargetPathOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaTargetPathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaTargetPathOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaTargetPathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaTargetPathOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaTargetPathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaTargetPathOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaTargetPathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaTargetPathOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaTargetPathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaTargetPathOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaTargetPathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaTargetPathOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaTargetPathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaTargetPathOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaTargetPathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaTargetPathOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaTargetPathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaTargetPathOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaTargetPathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaTargetPathOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaTargetPathOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaTargetPathOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaTargetPathOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaTargetPathOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaTargetPathOutputReference.property.pathOnStageInput">pathOnStageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaTargetPathOutputReference.property.stageLocationInput">stageLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaTargetPathOutputReference.property.pathOnStage">pathOnStage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaTargetPathOutputReference.property.stageLocation">stageLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaTargetPathOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaTargetPath">ProcedureJavaTargetPath</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaTargetPathOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaTargetPathOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pathOnStageInput`<sup>Optional</sup> <a name="pathOnStageInput" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaTargetPathOutputReference.property.pathOnStageInput"></a>

```java
public java.lang.String getPathOnStageInput();
```

- *Type:* java.lang.String

---

##### `stageLocationInput`<sup>Optional</sup> <a name="stageLocationInput" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaTargetPathOutputReference.property.stageLocationInput"></a>

```java
public java.lang.String getStageLocationInput();
```

- *Type:* java.lang.String

---

##### `pathOnStage`<sup>Required</sup> <a name="pathOnStage" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaTargetPathOutputReference.property.pathOnStage"></a>

```java
public java.lang.String getPathOnStage();
```

- *Type:* java.lang.String

---

##### `stageLocation`<sup>Required</sup> <a name="stageLocation" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaTargetPathOutputReference.property.stageLocation"></a>

```java
public java.lang.String getStageLocation();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaTargetPathOutputReference.property.internalValue"></a>

```java
public ProcedureJavaTargetPath getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaTargetPath">ProcedureJavaTargetPath</a>

---


### ProcedureJavaTimeoutsOutputReference <a name="ProcedureJavaTimeoutsOutputReference" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.procedure_java.ProcedureJavaTimeoutsOutputReference;

new ProcedureJavaTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaTimeouts">ProcedureJavaTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.procedureJava.ProcedureJavaTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|ProcedureJavaTimeouts getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-snowflake.procedureJava.ProcedureJavaTimeouts">ProcedureJavaTimeouts</a>

---



