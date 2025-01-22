# `functionJava` Submodule <a name="`functionJava` Submodule" id="@cdktf/provider-snowflake.functionJava"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FunctionJava <a name="FunctionJava" id="@cdktf/provider-snowflake.functionJava.FunctionJava"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/function_java snowflake_function_java}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.functionJava.FunctionJava.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.function_java.FunctionJava;

FunctionJava.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .database(java.lang.String)
    .handler(java.lang.String)
    .name(java.lang.String)
    .returnType(java.lang.String)
    .schema(java.lang.String)
//  .arguments(IResolvable)
//  .arguments(java.util.List<FunctionJavaArguments>)
//  .comment(java.lang.String)
//  .enableConsoleOutput(java.lang.Boolean)
//  .enableConsoleOutput(IResolvable)
//  .externalAccessIntegrations(java.util.List<java.lang.String>)
//  .functionDefinition(java.lang.String)
//  .id(java.lang.String)
//  .imports(IResolvable)
//  .imports(java.util.List<FunctionJavaImports>)
//  .isSecure(java.lang.String)
//  .logLevel(java.lang.String)
//  .metricLevel(java.lang.String)
//  .nullInputBehavior(java.lang.String)
//  .packages(java.util.List<java.lang.String>)
//  .returnResultsBehavior(java.lang.String)
//  .runtimeVersion(java.lang.String)
//  .secrets(IResolvable)
//  .secrets(java.util.List<FunctionJavaSecrets>)
//  .targetPath(FunctionJavaTargetPath)
//  .traceLevel(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.Initializer.parameter.database">database</a></code> | <code>java.lang.String</code> | The database in which to create the function. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.Initializer.parameter.handler">handler</a></code> | <code>java.lang.String</code> | The name of the handler method or class. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the function; |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.Initializer.parameter.returnType">returnType</a></code> | <code>java.lang.String</code> | Specifies the results returned by the UDF, which determines the UDF type. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.Initializer.parameter.schema">schema</a></code> | <code>java.lang.String</code> | The schema in which to create the function. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.Initializer.parameter.arguments">arguments</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaArguments">FunctionJavaArguments</a>></code> | arguments block. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.Initializer.parameter.comment">comment</a></code> | <code>java.lang.String</code> | Specifies a comment for the function. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.Initializer.parameter.enableConsoleOutput">enableConsoleOutput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable stdout/stderr fast path logging for anonyous stored procs. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.Initializer.parameter.externalAccessIntegrations">externalAccessIntegrations</a></code> | <code>java.util.List<java.lang.String></code> | The names of [external access integrations](https://docs.snowflake.com/en/sql-reference/sql/create-external-access-integration) needed in order for this function’s handler code to access external networks. An external access integration specifies [network rules](https://docs.snowflake.com/en/sql-reference/sql/create-network-rule) and [secrets](https://docs.snowflake.com/en/sql-reference/sql/create-secret) that specify external locations and credentials (if any) allowed for use by handler code when making requests of an external network, such as an external REST API. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.Initializer.parameter.functionDefinition">functionDefinition</a></code> | <code>java.lang.String</code> | Defines the handler code executed when the UDF is called. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/function_java#id FunctionJava#id}. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.Initializer.parameter.imports">imports</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaImports">FunctionJavaImports</a>></code> | imports block. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.Initializer.parameter.isSecure">isSecure</a></code> | <code>java.lang.String</code> | Specifies that the function is secure. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.Initializer.parameter.logLevel">logLevel</a></code> | <code>java.lang.String</code> | LOG_LEVEL to use when filtering events For more information, check [LOG_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#log-level). |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.Initializer.parameter.metricLevel">metricLevel</a></code> | <code>java.lang.String</code> | METRIC_LEVEL value to control whether to emit metrics to Event Table For more information, check [METRIC_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#metric-level). |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.Initializer.parameter.nullInputBehavior">nullInputBehavior</a></code> | <code>java.lang.String</code> | Specifies the behavior of the function when called with null inputs. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.Initializer.parameter.packages">packages</a></code> | <code>java.util.List<java.lang.String></code> | The name and version number of Snowflake system packages required as dependencies. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.Initializer.parameter.returnResultsBehavior">returnResultsBehavior</a></code> | <code>java.lang.String</code> | Specifies the behavior of the function when returning results. Valid values are (case-insensitive): `VOLATILE` \| `IMMUTABLE`. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.Initializer.parameter.runtimeVersion">runtimeVersion</a></code> | <code>java.lang.String</code> | Specifies the Java JDK runtime version to use. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.Initializer.parameter.secrets">secrets</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaSecrets">FunctionJavaSecrets</a>></code> | secrets block. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.Initializer.parameter.targetPath">targetPath</a></code> | <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaTargetPath">FunctionJavaTargetPath</a></code> | target_path block. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.Initializer.parameter.traceLevel">traceLevel</a></code> | <code>java.lang.String</code> | Trace level value to use when generating/filtering trace events For more information, check [TRACE_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#trace-level). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.functionJava.FunctionJava.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.functionJava.FunctionJava.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.functionJava.FunctionJava.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.functionJava.FunctionJava.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.functionJava.FunctionJava.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.functionJava.FunctionJava.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.functionJava.FunctionJava.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.functionJava.FunctionJava.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.functionJava.FunctionJava.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.functionJava.FunctionJava.Initializer.parameter.database"></a>

- *Type:* java.lang.String

The database in which to create the function.

Due to technical limitations (read more [here](https://github.com/Snowflake-Labs/terraform-provider-snowflake/blob/main/docs/technical-documentation/identifiers_rework_design_decisions.md#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/function_java#database FunctionJava#database}

---

##### `handler`<sup>Required</sup> <a name="handler" id="@cdktf/provider-snowflake.functionJava.FunctionJava.Initializer.parameter.handler"></a>

- *Type:* java.lang.String

The name of the handler method or class.

If the handler is for a scalar UDF, returning a non-tabular value, the HANDLER value should be a method name, as in the following form: `MyClass.myMethod`. If the handler is for a tabular UDF, the HANDLER value should be the name of a handler class.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/function_java#handler FunctionJava#handler}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.functionJava.FunctionJava.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the function;

the identifier does not need to be unique for the schema in which the function is created because UDFs are identified and resolved by the combination of the name and argument types. Check the [docs](https://docs.snowflake.com/en/sql-reference/sql/create-function#all-languages). Due to technical limitations (read more [here](https://github.com/Snowflake-Labs/terraform-provider-snowflake/blob/main/docs/technical-documentation/identifiers_rework_design_decisions.md#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/function_java#name FunctionJava#name}

---

##### `returnType`<sup>Required</sup> <a name="returnType" id="@cdktf/provider-snowflake.functionJava.FunctionJava.Initializer.parameter.returnType"></a>

- *Type:* java.lang.String

Specifies the results returned by the UDF, which determines the UDF type.

Use `<result_data_type>` to create a scalar UDF that returns a single value with the specified data type. Use `TABLE (col_name col_data_type, ...)` to creates a table UDF that returns tabular results with the specified table column(s) and column type(s). For the details, consult the [docs](https://docs.snowflake.com/en/sql-reference/sql/create-function#all-languages).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/function_java#return_type FunctionJava#return_type}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.functionJava.FunctionJava.Initializer.parameter.schema"></a>

- *Type:* java.lang.String

The schema in which to create the function.

Due to technical limitations (read more [here](https://github.com/Snowflake-Labs/terraform-provider-snowflake/blob/main/docs/technical-documentation/identifiers_rework_design_decisions.md#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/function_java#schema FunctionJava#schema}

---

##### `arguments`<sup>Optional</sup> <a name="arguments" id="@cdktf/provider-snowflake.functionJava.FunctionJava.Initializer.parameter.arguments"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaArguments">FunctionJavaArguments</a>>

arguments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/function_java#arguments FunctionJava#arguments}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.functionJava.FunctionJava.Initializer.parameter.comment"></a>

- *Type:* java.lang.String

Specifies a comment for the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/function_java#comment FunctionJava#comment}

---

##### `enableConsoleOutput`<sup>Optional</sup> <a name="enableConsoleOutput" id="@cdktf/provider-snowflake.functionJava.FunctionJava.Initializer.parameter.enableConsoleOutput"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable stdout/stderr fast path logging for anonyous stored procs.

This is a public parameter (similar to LOG_LEVEL). For more information, check [ENABLE_CONSOLE_OUTPUT docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-console-output).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/function_java#enable_console_output FunctionJava#enable_console_output}

---

##### `externalAccessIntegrations`<sup>Optional</sup> <a name="externalAccessIntegrations" id="@cdktf/provider-snowflake.functionJava.FunctionJava.Initializer.parameter.externalAccessIntegrations"></a>

- *Type:* java.util.List<java.lang.String>

The names of [external access integrations](https://docs.snowflake.com/en/sql-reference/sql/create-external-access-integration) needed in order for this function’s handler code to access external networks. An external access integration specifies [network rules](https://docs.snowflake.com/en/sql-reference/sql/create-network-rule) and [secrets](https://docs.snowflake.com/en/sql-reference/sql/create-secret) that specify external locations and credentials (if any) allowed for use by handler code when making requests of an external network, such as an external REST API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/function_java#external_access_integrations FunctionJava#external_access_integrations}

---

##### `functionDefinition`<sup>Optional</sup> <a name="functionDefinition" id="@cdktf/provider-snowflake.functionJava.FunctionJava.Initializer.parameter.functionDefinition"></a>

- *Type:* java.lang.String

Defines the handler code executed when the UDF is called.

Wrapping `$$` signs are added by the provider automatically; do not include them. The `function_definition` value must be Java source code. For more information, see [Introduction to Java UDFs](https://docs.snowflake.com/en/developer-guide/udf/java/udf-java-introduction). To mitigate permadiff on this field, the provider replaces blank characters with a space. This can lead to false positives in cases where a change in case or run of whitespace is semantically significant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/function_java#function_definition FunctionJava#function_definition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.functionJava.FunctionJava.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/function_java#id FunctionJava#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imports`<sup>Optional</sup> <a name="imports" id="@cdktf/provider-snowflake.functionJava.FunctionJava.Initializer.parameter.imports"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaImports">FunctionJavaImports</a>>

imports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/function_java#imports FunctionJava#imports}

---

##### `isSecure`<sup>Optional</sup> <a name="isSecure" id="@cdktf/provider-snowflake.functionJava.FunctionJava.Initializer.parameter.isSecure"></a>

- *Type:* java.lang.String

Specifies that the function is secure.

By design, the Snowflake's `SHOW FUNCTIONS` command does not provide information about secure functions (consult [function docs](https://docs.snowflake.com/en/sql-reference/sql/create-function#id1) and [Protecting Sensitive Information with Secure UDFs and Stored Procedures](https://docs.snowflake.com/en/developer-guide/secure-udf-procedure)) which is essential to manage/import function with Terraform. Use the role owning the function while managing secure functions. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/function_java#is_secure FunctionJava#is_secure}

---

##### `logLevel`<sup>Optional</sup> <a name="logLevel" id="@cdktf/provider-snowflake.functionJava.FunctionJava.Initializer.parameter.logLevel"></a>

- *Type:* java.lang.String

LOG_LEVEL to use when filtering events For more information, check [LOG_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#log-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/function_java#log_level FunctionJava#log_level}

---

##### `metricLevel`<sup>Optional</sup> <a name="metricLevel" id="@cdktf/provider-snowflake.functionJava.FunctionJava.Initializer.parameter.metricLevel"></a>

- *Type:* java.lang.String

METRIC_LEVEL value to control whether to emit metrics to Event Table For more information, check [METRIC_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#metric-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/function_java#metric_level FunctionJava#metric_level}

---

##### `nullInputBehavior`<sup>Optional</sup> <a name="nullInputBehavior" id="@cdktf/provider-snowflake.functionJava.FunctionJava.Initializer.parameter.nullInputBehavior"></a>

- *Type:* java.lang.String

Specifies the behavior of the function when called with null inputs.

Valid values are (case-insensitive): `CALLED ON NULL INPUT` | `RETURNS NULL ON NULL INPUT`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/function_java#null_input_behavior FunctionJava#null_input_behavior}

---

##### `packages`<sup>Optional</sup> <a name="packages" id="@cdktf/provider-snowflake.functionJava.FunctionJava.Initializer.parameter.packages"></a>

- *Type:* java.util.List<java.lang.String>

The name and version number of Snowflake system packages required as dependencies.

The value should be of the form `package_name:version_number`, where `package_name` is `snowflake_domain:package`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/function_java#packages FunctionJava#packages}

---

##### `returnResultsBehavior`<sup>Optional</sup> <a name="returnResultsBehavior" id="@cdktf/provider-snowflake.functionJava.FunctionJava.Initializer.parameter.returnResultsBehavior"></a>

- *Type:* java.lang.String

Specifies the behavior of the function when returning results. Valid values are (case-insensitive): `VOLATILE` | `IMMUTABLE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/function_java#return_results_behavior FunctionJava#return_results_behavior}

---

##### `runtimeVersion`<sup>Optional</sup> <a name="runtimeVersion" id="@cdktf/provider-snowflake.functionJava.FunctionJava.Initializer.parameter.runtimeVersion"></a>

- *Type:* java.lang.String

Specifies the Java JDK runtime version to use.

The supported versions of Java are 11.x and 17.x. If RUNTIME_VERSION is not set, Java JDK 11 is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/function_java#runtime_version FunctionJava#runtime_version}

---

##### `secrets`<sup>Optional</sup> <a name="secrets" id="@cdktf/provider-snowflake.functionJava.FunctionJava.Initializer.parameter.secrets"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaSecrets">FunctionJavaSecrets</a>>

secrets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/function_java#secrets FunctionJava#secrets}

---

##### `targetPath`<sup>Optional</sup> <a name="targetPath" id="@cdktf/provider-snowflake.functionJava.FunctionJava.Initializer.parameter.targetPath"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaTargetPath">FunctionJavaTargetPath</a>

target_path block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/function_java#target_path FunctionJava#target_path}

---

##### `traceLevel`<sup>Optional</sup> <a name="traceLevel" id="@cdktf/provider-snowflake.functionJava.FunctionJava.Initializer.parameter.traceLevel"></a>

- *Type:* java.lang.String

Trace level value to use when generating/filtering trace events For more information, check [TRACE_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#trace-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/function_java#trace_level FunctionJava#trace_level}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.putArguments">putArguments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.putImports">putImports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.putSecrets">putSecrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.putTargetPath">putTargetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.resetArguments">resetArguments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.resetEnableConsoleOutput">resetEnableConsoleOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.resetExternalAccessIntegrations">resetExternalAccessIntegrations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.resetFunctionDefinition">resetFunctionDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.resetImports">resetImports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.resetIsSecure">resetIsSecure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.resetLogLevel">resetLogLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.resetMetricLevel">resetMetricLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.resetNullInputBehavior">resetNullInputBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.resetPackages">resetPackages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.resetReturnResultsBehavior">resetReturnResultsBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.resetRuntimeVersion">resetRuntimeVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.resetSecrets">resetSecrets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.resetTargetPath">resetTargetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.resetTraceLevel">resetTraceLevel</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.functionJava.FunctionJava.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.functionJava.FunctionJava.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.functionJava.FunctionJava.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.functionJava.FunctionJava.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.functionJava.FunctionJava.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.functionJava.FunctionJava.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.functionJava.FunctionJava.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-snowflake.functionJava.FunctionJava.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.functionJava.FunctionJava.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.functionJava.FunctionJava.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-snowflake.functionJava.FunctionJava.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.functionJava.FunctionJava.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJava.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJava.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJava.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJava.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJava.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJava.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJava.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJava.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJava.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJava.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJava.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJava.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJava.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJava.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJava.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJava.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJava.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJava.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-snowflake.functionJava.FunctionJava.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-snowflake.functionJava.FunctionJava.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.functionJava.FunctionJava.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.functionJava.FunctionJava.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJava.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJava.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-snowflake.functionJava.FunctionJava.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.functionJava.FunctionJava.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-snowflake.functionJava.FunctionJava.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.functionJava.FunctionJava.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.functionJava.FunctionJava.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-snowflake.functionJava.FunctionJava.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.functionJava.FunctionJava.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putArguments` <a name="putArguments" id="@cdktf/provider-snowflake.functionJava.FunctionJava.putArguments"></a>

```java
public void putArguments(IResolvable OR java.util.List<FunctionJavaArguments> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.functionJava.FunctionJava.putArguments.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaArguments">FunctionJavaArguments</a>>

---

##### `putImports` <a name="putImports" id="@cdktf/provider-snowflake.functionJava.FunctionJava.putImports"></a>

```java
public void putImports(IResolvable OR java.util.List<FunctionJavaImports> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.functionJava.FunctionJava.putImports.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaImports">FunctionJavaImports</a>>

---

##### `putSecrets` <a name="putSecrets" id="@cdktf/provider-snowflake.functionJava.FunctionJava.putSecrets"></a>

```java
public void putSecrets(IResolvable OR java.util.List<FunctionJavaSecrets> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.functionJava.FunctionJava.putSecrets.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaSecrets">FunctionJavaSecrets</a>>

---

##### `putTargetPath` <a name="putTargetPath" id="@cdktf/provider-snowflake.functionJava.FunctionJava.putTargetPath"></a>

```java
public void putTargetPath(FunctionJavaTargetPath value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.functionJava.FunctionJava.putTargetPath.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaTargetPath">FunctionJavaTargetPath</a>

---

##### `resetArguments` <a name="resetArguments" id="@cdktf/provider-snowflake.functionJava.FunctionJava.resetArguments"></a>

```java
public void resetArguments()
```

##### `resetComment` <a name="resetComment" id="@cdktf/provider-snowflake.functionJava.FunctionJava.resetComment"></a>

```java
public void resetComment()
```

##### `resetEnableConsoleOutput` <a name="resetEnableConsoleOutput" id="@cdktf/provider-snowflake.functionJava.FunctionJava.resetEnableConsoleOutput"></a>

```java
public void resetEnableConsoleOutput()
```

##### `resetExternalAccessIntegrations` <a name="resetExternalAccessIntegrations" id="@cdktf/provider-snowflake.functionJava.FunctionJava.resetExternalAccessIntegrations"></a>

```java
public void resetExternalAccessIntegrations()
```

##### `resetFunctionDefinition` <a name="resetFunctionDefinition" id="@cdktf/provider-snowflake.functionJava.FunctionJava.resetFunctionDefinition"></a>

```java
public void resetFunctionDefinition()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.functionJava.FunctionJava.resetId"></a>

```java
public void resetId()
```

##### `resetImports` <a name="resetImports" id="@cdktf/provider-snowflake.functionJava.FunctionJava.resetImports"></a>

```java
public void resetImports()
```

##### `resetIsSecure` <a name="resetIsSecure" id="@cdktf/provider-snowflake.functionJava.FunctionJava.resetIsSecure"></a>

```java
public void resetIsSecure()
```

##### `resetLogLevel` <a name="resetLogLevel" id="@cdktf/provider-snowflake.functionJava.FunctionJava.resetLogLevel"></a>

```java
public void resetLogLevel()
```

##### `resetMetricLevel` <a name="resetMetricLevel" id="@cdktf/provider-snowflake.functionJava.FunctionJava.resetMetricLevel"></a>

```java
public void resetMetricLevel()
```

##### `resetNullInputBehavior` <a name="resetNullInputBehavior" id="@cdktf/provider-snowflake.functionJava.FunctionJava.resetNullInputBehavior"></a>

```java
public void resetNullInputBehavior()
```

##### `resetPackages` <a name="resetPackages" id="@cdktf/provider-snowflake.functionJava.FunctionJava.resetPackages"></a>

```java
public void resetPackages()
```

##### `resetReturnResultsBehavior` <a name="resetReturnResultsBehavior" id="@cdktf/provider-snowflake.functionJava.FunctionJava.resetReturnResultsBehavior"></a>

```java
public void resetReturnResultsBehavior()
```

##### `resetRuntimeVersion` <a name="resetRuntimeVersion" id="@cdktf/provider-snowflake.functionJava.FunctionJava.resetRuntimeVersion"></a>

```java
public void resetRuntimeVersion()
```

##### `resetSecrets` <a name="resetSecrets" id="@cdktf/provider-snowflake.functionJava.FunctionJava.resetSecrets"></a>

```java
public void resetSecrets()
```

##### `resetTargetPath` <a name="resetTargetPath" id="@cdktf/provider-snowflake.functionJava.FunctionJava.resetTargetPath"></a>

```java
public void resetTargetPath()
```

##### `resetTraceLevel` <a name="resetTraceLevel" id="@cdktf/provider-snowflake.functionJava.FunctionJava.resetTraceLevel"></a>

```java
public void resetTraceLevel()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a FunctionJava resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.functionJava.FunctionJava.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.function_java.FunctionJava;

FunctionJava.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.functionJava.FunctionJava.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.functionJava.FunctionJava.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.function_java.FunctionJava;

FunctionJava.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.functionJava.FunctionJava.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-snowflake.functionJava.FunctionJava.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.function_java.FunctionJava;

FunctionJava.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.functionJava.FunctionJava.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-snowflake.functionJava.FunctionJava.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.function_java.FunctionJava;

FunctionJava.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),FunctionJava.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a FunctionJava resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.functionJava.FunctionJava.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.functionJava.FunctionJava.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the FunctionJava to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.functionJava.FunctionJava.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing FunctionJava that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/function_java#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.functionJava.FunctionJava.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the FunctionJava to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.property.arguments">arguments</a></code> | <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsList">FunctionJavaArgumentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.property.functionLanguage">functionLanguage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.property.imports">imports</a></code> | <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaImportsList">FunctionJavaImportsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.property.parameters">parameters</a></code> | <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersList">FunctionJavaParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.property.secrets">secrets</a></code> | <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaSecretsList">FunctionJavaSecretsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.property.showOutput">showOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputList">FunctionJavaShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.property.targetPath">targetPath</a></code> | <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaTargetPathOutputReference">FunctionJavaTargetPathOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.property.argumentsInput">argumentsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaArguments">FunctionJavaArguments</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.property.databaseInput">databaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.property.enableConsoleOutputInput">enableConsoleOutputInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.property.externalAccessIntegrationsInput">externalAccessIntegrationsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.property.functionDefinitionInput">functionDefinitionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.property.handlerInput">handlerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.property.importsInput">importsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaImports">FunctionJavaImports</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.property.isSecureInput">isSecureInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.property.logLevelInput">logLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.property.metricLevelInput">metricLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.property.nullInputBehaviorInput">nullInputBehaviorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.property.packagesInput">packagesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.property.returnResultsBehaviorInput">returnResultsBehaviorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.property.returnTypeInput">returnTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.property.runtimeVersionInput">runtimeVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.property.schemaInput">schemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.property.secretsInput">secretsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaSecrets">FunctionJavaSecrets</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.property.targetPathInput">targetPathInput</a></code> | <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaTargetPath">FunctionJavaTargetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.property.traceLevelInput">traceLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.property.database">database</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.property.enableConsoleOutput">enableConsoleOutput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.property.externalAccessIntegrations">externalAccessIntegrations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.property.functionDefinition">functionDefinition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.property.handler">handler</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.property.isSecure">isSecure</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.property.logLevel">logLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.property.metricLevel">metricLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.property.nullInputBehavior">nullInputBehavior</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.property.packages">packages</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.property.returnResultsBehavior">returnResultsBehavior</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.property.returnType">returnType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.property.runtimeVersion">runtimeVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.property.schema">schema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.property.traceLevel">traceLevel</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.functionJava.FunctionJava.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.functionJava.FunctionJava.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.functionJava.FunctionJava.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.functionJava.FunctionJava.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.functionJava.FunctionJava.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.functionJava.FunctionJava.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.functionJava.FunctionJava.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.functionJava.FunctionJava.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.functionJava.FunctionJava.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.functionJava.FunctionJava.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.functionJava.FunctionJava.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.functionJava.FunctionJava.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.functionJava.FunctionJava.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.functionJava.FunctionJava.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arguments`<sup>Required</sup> <a name="arguments" id="@cdktf/provider-snowflake.functionJava.FunctionJava.property.arguments"></a>

```java
public FunctionJavaArgumentsList getArguments();
```

- *Type:* <a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsList">FunctionJavaArgumentsList</a>

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktf/provider-snowflake.functionJava.FunctionJava.property.fullyQualifiedName"></a>

```java
public java.lang.String getFullyQualifiedName();
```

- *Type:* java.lang.String

---

##### `functionLanguage`<sup>Required</sup> <a name="functionLanguage" id="@cdktf/provider-snowflake.functionJava.FunctionJava.property.functionLanguage"></a>

```java
public java.lang.String getFunctionLanguage();
```

- *Type:* java.lang.String

---

##### `imports`<sup>Required</sup> <a name="imports" id="@cdktf/provider-snowflake.functionJava.FunctionJava.property.imports"></a>

```java
public FunctionJavaImportsList getImports();
```

- *Type:* <a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaImportsList">FunctionJavaImportsList</a>

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-snowflake.functionJava.FunctionJava.property.parameters"></a>

```java
public FunctionJavaParametersList getParameters();
```

- *Type:* <a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersList">FunctionJavaParametersList</a>

---

##### `secrets`<sup>Required</sup> <a name="secrets" id="@cdktf/provider-snowflake.functionJava.FunctionJava.property.secrets"></a>

```java
public FunctionJavaSecretsList getSecrets();
```

- *Type:* <a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaSecretsList">FunctionJavaSecretsList</a>

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktf/provider-snowflake.functionJava.FunctionJava.property.showOutput"></a>

```java
public FunctionJavaShowOutputList getShowOutput();
```

- *Type:* <a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputList">FunctionJavaShowOutputList</a>

---

##### `targetPath`<sup>Required</sup> <a name="targetPath" id="@cdktf/provider-snowflake.functionJava.FunctionJava.property.targetPath"></a>

```java
public FunctionJavaTargetPathOutputReference getTargetPath();
```

- *Type:* <a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaTargetPathOutputReference">FunctionJavaTargetPathOutputReference</a>

---

##### `argumentsInput`<sup>Optional</sup> <a name="argumentsInput" id="@cdktf/provider-snowflake.functionJava.FunctionJava.property.argumentsInput"></a>

```java
public java.lang.Object getArgumentsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaArguments">FunctionJavaArguments</a>>

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-snowflake.functionJava.FunctionJava.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-snowflake.functionJava.FunctionJava.property.databaseInput"></a>

```java
public java.lang.String getDatabaseInput();
```

- *Type:* java.lang.String

---

##### `enableConsoleOutputInput`<sup>Optional</sup> <a name="enableConsoleOutputInput" id="@cdktf/provider-snowflake.functionJava.FunctionJava.property.enableConsoleOutputInput"></a>

```java
public java.lang.Object getEnableConsoleOutputInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `externalAccessIntegrationsInput`<sup>Optional</sup> <a name="externalAccessIntegrationsInput" id="@cdktf/provider-snowflake.functionJava.FunctionJava.property.externalAccessIntegrationsInput"></a>

```java
public java.util.List<java.lang.String> getExternalAccessIntegrationsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `functionDefinitionInput`<sup>Optional</sup> <a name="functionDefinitionInput" id="@cdktf/provider-snowflake.functionJava.FunctionJava.property.functionDefinitionInput"></a>

```java
public java.lang.String getFunctionDefinitionInput();
```

- *Type:* java.lang.String

---

##### `handlerInput`<sup>Optional</sup> <a name="handlerInput" id="@cdktf/provider-snowflake.functionJava.FunctionJava.property.handlerInput"></a>

```java
public java.lang.String getHandlerInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.functionJava.FunctionJava.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `importsInput`<sup>Optional</sup> <a name="importsInput" id="@cdktf/provider-snowflake.functionJava.FunctionJava.property.importsInput"></a>

```java
public java.lang.Object getImportsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaImports">FunctionJavaImports</a>>

---

##### `isSecureInput`<sup>Optional</sup> <a name="isSecureInput" id="@cdktf/provider-snowflake.functionJava.FunctionJava.property.isSecureInput"></a>

```java
public java.lang.String getIsSecureInput();
```

- *Type:* java.lang.String

---

##### `logLevelInput`<sup>Optional</sup> <a name="logLevelInput" id="@cdktf/provider-snowflake.functionJava.FunctionJava.property.logLevelInput"></a>

```java
public java.lang.String getLogLevelInput();
```

- *Type:* java.lang.String

---

##### `metricLevelInput`<sup>Optional</sup> <a name="metricLevelInput" id="@cdktf/provider-snowflake.functionJava.FunctionJava.property.metricLevelInput"></a>

```java
public java.lang.String getMetricLevelInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-snowflake.functionJava.FunctionJava.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `nullInputBehaviorInput`<sup>Optional</sup> <a name="nullInputBehaviorInput" id="@cdktf/provider-snowflake.functionJava.FunctionJava.property.nullInputBehaviorInput"></a>

```java
public java.lang.String getNullInputBehaviorInput();
```

- *Type:* java.lang.String

---

##### `packagesInput`<sup>Optional</sup> <a name="packagesInput" id="@cdktf/provider-snowflake.functionJava.FunctionJava.property.packagesInput"></a>

```java
public java.util.List<java.lang.String> getPackagesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `returnResultsBehaviorInput`<sup>Optional</sup> <a name="returnResultsBehaviorInput" id="@cdktf/provider-snowflake.functionJava.FunctionJava.property.returnResultsBehaviorInput"></a>

```java
public java.lang.String getReturnResultsBehaviorInput();
```

- *Type:* java.lang.String

---

##### `returnTypeInput`<sup>Optional</sup> <a name="returnTypeInput" id="@cdktf/provider-snowflake.functionJava.FunctionJava.property.returnTypeInput"></a>

```java
public java.lang.String getReturnTypeInput();
```

- *Type:* java.lang.String

---

##### `runtimeVersionInput`<sup>Optional</sup> <a name="runtimeVersionInput" id="@cdktf/provider-snowflake.functionJava.FunctionJava.property.runtimeVersionInput"></a>

```java
public java.lang.String getRuntimeVersionInput();
```

- *Type:* java.lang.String

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktf/provider-snowflake.functionJava.FunctionJava.property.schemaInput"></a>

```java
public java.lang.String getSchemaInput();
```

- *Type:* java.lang.String

---

##### `secretsInput`<sup>Optional</sup> <a name="secretsInput" id="@cdktf/provider-snowflake.functionJava.FunctionJava.property.secretsInput"></a>

```java
public java.lang.Object getSecretsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaSecrets">FunctionJavaSecrets</a>>

---

##### `targetPathInput`<sup>Optional</sup> <a name="targetPathInput" id="@cdktf/provider-snowflake.functionJava.FunctionJava.property.targetPathInput"></a>

```java
public FunctionJavaTargetPath getTargetPathInput();
```

- *Type:* <a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaTargetPath">FunctionJavaTargetPath</a>

---

##### `traceLevelInput`<sup>Optional</sup> <a name="traceLevelInput" id="@cdktf/provider-snowflake.functionJava.FunctionJava.property.traceLevelInput"></a>

```java
public java.lang.String getTraceLevelInput();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.functionJava.FunctionJava.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.functionJava.FunctionJava.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

---

##### `enableConsoleOutput`<sup>Required</sup> <a name="enableConsoleOutput" id="@cdktf/provider-snowflake.functionJava.FunctionJava.property.enableConsoleOutput"></a>

```java
public java.lang.Object getEnableConsoleOutput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `externalAccessIntegrations`<sup>Required</sup> <a name="externalAccessIntegrations" id="@cdktf/provider-snowflake.functionJava.FunctionJava.property.externalAccessIntegrations"></a>

```java
public java.util.List<java.lang.String> getExternalAccessIntegrations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `functionDefinition`<sup>Required</sup> <a name="functionDefinition" id="@cdktf/provider-snowflake.functionJava.FunctionJava.property.functionDefinition"></a>

```java
public java.lang.String getFunctionDefinition();
```

- *Type:* java.lang.String

---

##### `handler`<sup>Required</sup> <a name="handler" id="@cdktf/provider-snowflake.functionJava.FunctionJava.property.handler"></a>

```java
public java.lang.String getHandler();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.functionJava.FunctionJava.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isSecure`<sup>Required</sup> <a name="isSecure" id="@cdktf/provider-snowflake.functionJava.FunctionJava.property.isSecure"></a>

```java
public java.lang.String getIsSecure();
```

- *Type:* java.lang.String

---

##### `logLevel`<sup>Required</sup> <a name="logLevel" id="@cdktf/provider-snowflake.functionJava.FunctionJava.property.logLevel"></a>

```java
public java.lang.String getLogLevel();
```

- *Type:* java.lang.String

---

##### `metricLevel`<sup>Required</sup> <a name="metricLevel" id="@cdktf/provider-snowflake.functionJava.FunctionJava.property.metricLevel"></a>

```java
public java.lang.String getMetricLevel();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.functionJava.FunctionJava.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nullInputBehavior`<sup>Required</sup> <a name="nullInputBehavior" id="@cdktf/provider-snowflake.functionJava.FunctionJava.property.nullInputBehavior"></a>

```java
public java.lang.String getNullInputBehavior();
```

- *Type:* java.lang.String

---

##### `packages`<sup>Required</sup> <a name="packages" id="@cdktf/provider-snowflake.functionJava.FunctionJava.property.packages"></a>

```java
public java.util.List<java.lang.String> getPackages();
```

- *Type:* java.util.List<java.lang.String>

---

##### `returnResultsBehavior`<sup>Required</sup> <a name="returnResultsBehavior" id="@cdktf/provider-snowflake.functionJava.FunctionJava.property.returnResultsBehavior"></a>

```java
public java.lang.String getReturnResultsBehavior();
```

- *Type:* java.lang.String

---

##### `returnType`<sup>Required</sup> <a name="returnType" id="@cdktf/provider-snowflake.functionJava.FunctionJava.property.returnType"></a>

```java
public java.lang.String getReturnType();
```

- *Type:* java.lang.String

---

##### `runtimeVersion`<sup>Required</sup> <a name="runtimeVersion" id="@cdktf/provider-snowflake.functionJava.FunctionJava.property.runtimeVersion"></a>

```java
public java.lang.String getRuntimeVersion();
```

- *Type:* java.lang.String

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.functionJava.FunctionJava.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

---

##### `traceLevel`<sup>Required</sup> <a name="traceLevel" id="@cdktf/provider-snowflake.functionJava.FunctionJava.property.traceLevel"></a>

```java
public java.lang.String getTraceLevel();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJava.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.functionJava.FunctionJava.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### FunctionJavaArguments <a name="FunctionJavaArguments" id="@cdktf/provider-snowflake.functionJava.FunctionJavaArguments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.functionJava.FunctionJavaArguments.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.function_java.FunctionJavaArguments;

FunctionJavaArguments.builder()
    .argDataType(java.lang.String)
    .argName(java.lang.String)
//  .argDefaultValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaArguments.property.argDataType">argDataType</a></code> | <code>java.lang.String</code> | The argument type. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaArguments.property.argName">argName</a></code> | <code>java.lang.String</code> | The argument name. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaArguments.property.argDefaultValue">argDefaultValue</a></code> | <code>java.lang.String</code> | Optional default value for the argument. |

---

##### `argDataType`<sup>Required</sup> <a name="argDataType" id="@cdktf/provider-snowflake.functionJava.FunctionJavaArguments.property.argDataType"></a>

```java
public java.lang.String getArgDataType();
```

- *Type:* java.lang.String

The argument type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/function_java#arg_data_type FunctionJava#arg_data_type}

---

##### `argName`<sup>Required</sup> <a name="argName" id="@cdktf/provider-snowflake.functionJava.FunctionJavaArguments.property.argName"></a>

```java
public java.lang.String getArgName();
```

- *Type:* java.lang.String

The argument name.

The provider wraps it in double quotes by default, so be aware of that while referencing the argument in the function definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/function_java#arg_name FunctionJava#arg_name}

---

##### `argDefaultValue`<sup>Optional</sup> <a name="argDefaultValue" id="@cdktf/provider-snowflake.functionJava.FunctionJavaArguments.property.argDefaultValue"></a>

```java
public java.lang.String getArgDefaultValue();
```

- *Type:* java.lang.String

Optional default value for the argument.

For text values use single quotes. Numeric values can be unquoted. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/function_java#arg_default_value FunctionJava#arg_default_value}

---

### FunctionJavaConfig <a name="FunctionJavaConfig" id="@cdktf/provider-snowflake.functionJava.FunctionJavaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.functionJava.FunctionJavaConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.function_java.FunctionJavaConfig;

FunctionJavaConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .database(java.lang.String)
    .handler(java.lang.String)
    .name(java.lang.String)
    .returnType(java.lang.String)
    .schema(java.lang.String)
//  .arguments(IResolvable)
//  .arguments(java.util.List<FunctionJavaArguments>)
//  .comment(java.lang.String)
//  .enableConsoleOutput(java.lang.Boolean)
//  .enableConsoleOutput(IResolvable)
//  .externalAccessIntegrations(java.util.List<java.lang.String>)
//  .functionDefinition(java.lang.String)
//  .id(java.lang.String)
//  .imports(IResolvable)
//  .imports(java.util.List<FunctionJavaImports>)
//  .isSecure(java.lang.String)
//  .logLevel(java.lang.String)
//  .metricLevel(java.lang.String)
//  .nullInputBehavior(java.lang.String)
//  .packages(java.util.List<java.lang.String>)
//  .returnResultsBehavior(java.lang.String)
//  .runtimeVersion(java.lang.String)
//  .secrets(IResolvable)
//  .secrets(java.util.List<FunctionJavaSecrets>)
//  .targetPath(FunctionJavaTargetPath)
//  .traceLevel(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaConfig.property.database">database</a></code> | <code>java.lang.String</code> | The database in which to create the function. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaConfig.property.handler">handler</a></code> | <code>java.lang.String</code> | The name of the handler method or class. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the function; |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaConfig.property.returnType">returnType</a></code> | <code>java.lang.String</code> | Specifies the results returned by the UDF, which determines the UDF type. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaConfig.property.schema">schema</a></code> | <code>java.lang.String</code> | The schema in which to create the function. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaConfig.property.arguments">arguments</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaArguments">FunctionJavaArguments</a>></code> | arguments block. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaConfig.property.comment">comment</a></code> | <code>java.lang.String</code> | Specifies a comment for the function. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaConfig.property.enableConsoleOutput">enableConsoleOutput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable stdout/stderr fast path logging for anonyous stored procs. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaConfig.property.externalAccessIntegrations">externalAccessIntegrations</a></code> | <code>java.util.List<java.lang.String></code> | The names of [external access integrations](https://docs.snowflake.com/en/sql-reference/sql/create-external-access-integration) needed in order for this function’s handler code to access external networks. An external access integration specifies [network rules](https://docs.snowflake.com/en/sql-reference/sql/create-network-rule) and [secrets](https://docs.snowflake.com/en/sql-reference/sql/create-secret) that specify external locations and credentials (if any) allowed for use by handler code when making requests of an external network, such as an external REST API. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaConfig.property.functionDefinition">functionDefinition</a></code> | <code>java.lang.String</code> | Defines the handler code executed when the UDF is called. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/function_java#id FunctionJava#id}. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaConfig.property.imports">imports</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaImports">FunctionJavaImports</a>></code> | imports block. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaConfig.property.isSecure">isSecure</a></code> | <code>java.lang.String</code> | Specifies that the function is secure. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaConfig.property.logLevel">logLevel</a></code> | <code>java.lang.String</code> | LOG_LEVEL to use when filtering events For more information, check [LOG_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#log-level). |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaConfig.property.metricLevel">metricLevel</a></code> | <code>java.lang.String</code> | METRIC_LEVEL value to control whether to emit metrics to Event Table For more information, check [METRIC_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#metric-level). |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaConfig.property.nullInputBehavior">nullInputBehavior</a></code> | <code>java.lang.String</code> | Specifies the behavior of the function when called with null inputs. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaConfig.property.packages">packages</a></code> | <code>java.util.List<java.lang.String></code> | The name and version number of Snowflake system packages required as dependencies. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaConfig.property.returnResultsBehavior">returnResultsBehavior</a></code> | <code>java.lang.String</code> | Specifies the behavior of the function when returning results. Valid values are (case-insensitive): `VOLATILE` \| `IMMUTABLE`. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaConfig.property.runtimeVersion">runtimeVersion</a></code> | <code>java.lang.String</code> | Specifies the Java JDK runtime version to use. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaConfig.property.secrets">secrets</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaSecrets">FunctionJavaSecrets</a>></code> | secrets block. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaConfig.property.targetPath">targetPath</a></code> | <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaTargetPath">FunctionJavaTargetPath</a></code> | target_path block. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaConfig.property.traceLevel">traceLevel</a></code> | <code>java.lang.String</code> | Trace level value to use when generating/filtering trace events For more information, check [TRACE_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#trace-level). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.functionJava.FunctionJavaConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.functionJava.FunctionJavaConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.functionJava.FunctionJavaConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.functionJava.FunctionJavaConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.functionJava.FunctionJavaConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.functionJava.FunctionJavaConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.functionJava.FunctionJavaConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.functionJava.FunctionJavaConfig.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

The database in which to create the function.

Due to technical limitations (read more [here](https://github.com/Snowflake-Labs/terraform-provider-snowflake/blob/main/docs/technical-documentation/identifiers_rework_design_decisions.md#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/function_java#database FunctionJava#database}

---

##### `handler`<sup>Required</sup> <a name="handler" id="@cdktf/provider-snowflake.functionJava.FunctionJavaConfig.property.handler"></a>

```java
public java.lang.String getHandler();
```

- *Type:* java.lang.String

The name of the handler method or class.

If the handler is for a scalar UDF, returning a non-tabular value, the HANDLER value should be a method name, as in the following form: `MyClass.myMethod`. If the handler is for a tabular UDF, the HANDLER value should be the name of a handler class.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/function_java#handler FunctionJava#handler}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.functionJava.FunctionJavaConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the function;

the identifier does not need to be unique for the schema in which the function is created because UDFs are identified and resolved by the combination of the name and argument types. Check the [docs](https://docs.snowflake.com/en/sql-reference/sql/create-function#all-languages). Due to technical limitations (read more [here](https://github.com/Snowflake-Labs/terraform-provider-snowflake/blob/main/docs/technical-documentation/identifiers_rework_design_decisions.md#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/function_java#name FunctionJava#name}

---

##### `returnType`<sup>Required</sup> <a name="returnType" id="@cdktf/provider-snowflake.functionJava.FunctionJavaConfig.property.returnType"></a>

```java
public java.lang.String getReturnType();
```

- *Type:* java.lang.String

Specifies the results returned by the UDF, which determines the UDF type.

Use `<result_data_type>` to create a scalar UDF that returns a single value with the specified data type. Use `TABLE (col_name col_data_type, ...)` to creates a table UDF that returns tabular results with the specified table column(s) and column type(s). For the details, consult the [docs](https://docs.snowflake.com/en/sql-reference/sql/create-function#all-languages).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/function_java#return_type FunctionJava#return_type}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.functionJava.FunctionJavaConfig.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

The schema in which to create the function.

Due to technical limitations (read more [here](https://github.com/Snowflake-Labs/terraform-provider-snowflake/blob/main/docs/technical-documentation/identifiers_rework_design_decisions.md#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/function_java#schema FunctionJava#schema}

---

##### `arguments`<sup>Optional</sup> <a name="arguments" id="@cdktf/provider-snowflake.functionJava.FunctionJavaConfig.property.arguments"></a>

```java
public java.lang.Object getArguments();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaArguments">FunctionJavaArguments</a>>

arguments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/function_java#arguments FunctionJava#arguments}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.functionJava.FunctionJavaConfig.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

Specifies a comment for the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/function_java#comment FunctionJava#comment}

---

##### `enableConsoleOutput`<sup>Optional</sup> <a name="enableConsoleOutput" id="@cdktf/provider-snowflake.functionJava.FunctionJavaConfig.property.enableConsoleOutput"></a>

```java
public java.lang.Object getEnableConsoleOutput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable stdout/stderr fast path logging for anonyous stored procs.

This is a public parameter (similar to LOG_LEVEL). For more information, check [ENABLE_CONSOLE_OUTPUT docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-console-output).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/function_java#enable_console_output FunctionJava#enable_console_output}

---

##### `externalAccessIntegrations`<sup>Optional</sup> <a name="externalAccessIntegrations" id="@cdktf/provider-snowflake.functionJava.FunctionJavaConfig.property.externalAccessIntegrations"></a>

```java
public java.util.List<java.lang.String> getExternalAccessIntegrations();
```

- *Type:* java.util.List<java.lang.String>

The names of [external access integrations](https://docs.snowflake.com/en/sql-reference/sql/create-external-access-integration) needed in order for this function’s handler code to access external networks. An external access integration specifies [network rules](https://docs.snowflake.com/en/sql-reference/sql/create-network-rule) and [secrets](https://docs.snowflake.com/en/sql-reference/sql/create-secret) that specify external locations and credentials (if any) allowed for use by handler code when making requests of an external network, such as an external REST API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/function_java#external_access_integrations FunctionJava#external_access_integrations}

---

##### `functionDefinition`<sup>Optional</sup> <a name="functionDefinition" id="@cdktf/provider-snowflake.functionJava.FunctionJavaConfig.property.functionDefinition"></a>

```java
public java.lang.String getFunctionDefinition();
```

- *Type:* java.lang.String

Defines the handler code executed when the UDF is called.

Wrapping `$$` signs are added by the provider automatically; do not include them. The `function_definition` value must be Java source code. For more information, see [Introduction to Java UDFs](https://docs.snowflake.com/en/developer-guide/udf/java/udf-java-introduction). To mitigate permadiff on this field, the provider replaces blank characters with a space. This can lead to false positives in cases where a change in case or run of whitespace is semantically significant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/function_java#function_definition FunctionJava#function_definition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.functionJava.FunctionJavaConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/function_java#id FunctionJava#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imports`<sup>Optional</sup> <a name="imports" id="@cdktf/provider-snowflake.functionJava.FunctionJavaConfig.property.imports"></a>

```java
public java.lang.Object getImports();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaImports">FunctionJavaImports</a>>

imports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/function_java#imports FunctionJava#imports}

---

##### `isSecure`<sup>Optional</sup> <a name="isSecure" id="@cdktf/provider-snowflake.functionJava.FunctionJavaConfig.property.isSecure"></a>

```java
public java.lang.String getIsSecure();
```

- *Type:* java.lang.String

Specifies that the function is secure.

By design, the Snowflake's `SHOW FUNCTIONS` command does not provide information about secure functions (consult [function docs](https://docs.snowflake.com/en/sql-reference/sql/create-function#id1) and [Protecting Sensitive Information with Secure UDFs and Stored Procedures](https://docs.snowflake.com/en/developer-guide/secure-udf-procedure)) which is essential to manage/import function with Terraform. Use the role owning the function while managing secure functions. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/function_java#is_secure FunctionJava#is_secure}

---

##### `logLevel`<sup>Optional</sup> <a name="logLevel" id="@cdktf/provider-snowflake.functionJava.FunctionJavaConfig.property.logLevel"></a>

```java
public java.lang.String getLogLevel();
```

- *Type:* java.lang.String

LOG_LEVEL to use when filtering events For more information, check [LOG_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#log-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/function_java#log_level FunctionJava#log_level}

---

##### `metricLevel`<sup>Optional</sup> <a name="metricLevel" id="@cdktf/provider-snowflake.functionJava.FunctionJavaConfig.property.metricLevel"></a>

```java
public java.lang.String getMetricLevel();
```

- *Type:* java.lang.String

METRIC_LEVEL value to control whether to emit metrics to Event Table For more information, check [METRIC_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#metric-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/function_java#metric_level FunctionJava#metric_level}

---

##### `nullInputBehavior`<sup>Optional</sup> <a name="nullInputBehavior" id="@cdktf/provider-snowflake.functionJava.FunctionJavaConfig.property.nullInputBehavior"></a>

```java
public java.lang.String getNullInputBehavior();
```

- *Type:* java.lang.String

Specifies the behavior of the function when called with null inputs.

Valid values are (case-insensitive): `CALLED ON NULL INPUT` | `RETURNS NULL ON NULL INPUT`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/function_java#null_input_behavior FunctionJava#null_input_behavior}

---

##### `packages`<sup>Optional</sup> <a name="packages" id="@cdktf/provider-snowflake.functionJava.FunctionJavaConfig.property.packages"></a>

```java
public java.util.List<java.lang.String> getPackages();
```

- *Type:* java.util.List<java.lang.String>

The name and version number of Snowflake system packages required as dependencies.

The value should be of the form `package_name:version_number`, where `package_name` is `snowflake_domain:package`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/function_java#packages FunctionJava#packages}

---

##### `returnResultsBehavior`<sup>Optional</sup> <a name="returnResultsBehavior" id="@cdktf/provider-snowflake.functionJava.FunctionJavaConfig.property.returnResultsBehavior"></a>

```java
public java.lang.String getReturnResultsBehavior();
```

- *Type:* java.lang.String

Specifies the behavior of the function when returning results. Valid values are (case-insensitive): `VOLATILE` | `IMMUTABLE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/function_java#return_results_behavior FunctionJava#return_results_behavior}

---

##### `runtimeVersion`<sup>Optional</sup> <a name="runtimeVersion" id="@cdktf/provider-snowflake.functionJava.FunctionJavaConfig.property.runtimeVersion"></a>

```java
public java.lang.String getRuntimeVersion();
```

- *Type:* java.lang.String

Specifies the Java JDK runtime version to use.

The supported versions of Java are 11.x and 17.x. If RUNTIME_VERSION is not set, Java JDK 11 is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/function_java#runtime_version FunctionJava#runtime_version}

---

##### `secrets`<sup>Optional</sup> <a name="secrets" id="@cdktf/provider-snowflake.functionJava.FunctionJavaConfig.property.secrets"></a>

```java
public java.lang.Object getSecrets();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaSecrets">FunctionJavaSecrets</a>>

secrets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/function_java#secrets FunctionJava#secrets}

---

##### `targetPath`<sup>Optional</sup> <a name="targetPath" id="@cdktf/provider-snowflake.functionJava.FunctionJavaConfig.property.targetPath"></a>

```java
public FunctionJavaTargetPath getTargetPath();
```

- *Type:* <a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaTargetPath">FunctionJavaTargetPath</a>

target_path block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/function_java#target_path FunctionJava#target_path}

---

##### `traceLevel`<sup>Optional</sup> <a name="traceLevel" id="@cdktf/provider-snowflake.functionJava.FunctionJavaConfig.property.traceLevel"></a>

```java
public java.lang.String getTraceLevel();
```

- *Type:* java.lang.String

Trace level value to use when generating/filtering trace events For more information, check [TRACE_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#trace-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/function_java#trace_level FunctionJava#trace_level}

---

### FunctionJavaImports <a name="FunctionJavaImports" id="@cdktf/provider-snowflake.functionJava.FunctionJavaImports"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.functionJava.FunctionJavaImports.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.function_java.FunctionJavaImports;

FunctionJavaImports.builder()
    .pathOnStage(java.lang.String)
    .stageLocation(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaImports.property.pathOnStage">pathOnStage</a></code> | <code>java.lang.String</code> | Path for import on stage, without the leading `/`. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaImports.property.stageLocation">stageLocation</a></code> | <code>java.lang.String</code> | Stage location without leading `@`. |

---

##### `pathOnStage`<sup>Required</sup> <a name="pathOnStage" id="@cdktf/provider-snowflake.functionJava.FunctionJavaImports.property.pathOnStage"></a>

```java
public java.lang.String getPathOnStage();
```

- *Type:* java.lang.String

Path for import on stage, without the leading `/`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/function_java#path_on_stage FunctionJava#path_on_stage}

---

##### `stageLocation`<sup>Required</sup> <a name="stageLocation" id="@cdktf/provider-snowflake.functionJava.FunctionJavaImports.property.stageLocation"></a>

```java
public java.lang.String getStageLocation();
```

- *Type:* java.lang.String

Stage location without leading `@`.

To use your user's stage set this to `~`, otherwise pass fully qualified name of the stage (with every part contained in double quotes or use `snowflake_stage.<your stage's resource name>.fully_qualified_name` if you manage this stage through terraform).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/function_java#stage_location FunctionJava#stage_location}

---

### FunctionJavaParameters <a name="FunctionJavaParameters" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParameters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.function_java.FunctionJavaParameters;

FunctionJavaParameters.builder()
    .build();
```


### FunctionJavaParametersEnableConsoleOutput <a name="FunctionJavaParametersEnableConsoleOutput" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersEnableConsoleOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersEnableConsoleOutput.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.function_java.FunctionJavaParametersEnableConsoleOutput;

FunctionJavaParametersEnableConsoleOutput.builder()
    .build();
```


### FunctionJavaParametersLogLevel <a name="FunctionJavaParametersLogLevel" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersLogLevel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersLogLevel.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.function_java.FunctionJavaParametersLogLevel;

FunctionJavaParametersLogLevel.builder()
    .build();
```


### FunctionJavaParametersMetricLevel <a name="FunctionJavaParametersMetricLevel" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersMetricLevel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersMetricLevel.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.function_java.FunctionJavaParametersMetricLevel;

FunctionJavaParametersMetricLevel.builder()
    .build();
```


### FunctionJavaParametersTraceLevel <a name="FunctionJavaParametersTraceLevel" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersTraceLevel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersTraceLevel.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.function_java.FunctionJavaParametersTraceLevel;

FunctionJavaParametersTraceLevel.builder()
    .build();
```


### FunctionJavaSecrets <a name="FunctionJavaSecrets" id="@cdktf/provider-snowflake.functionJava.FunctionJavaSecrets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.functionJava.FunctionJavaSecrets.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.function_java.FunctionJavaSecrets;

FunctionJavaSecrets.builder()
    .secretId(java.lang.String)
    .secretVariableName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaSecrets.property.secretId">secretId</a></code> | <code>java.lang.String</code> | Fully qualified name of the allowed [secret](https://docs.snowflake.com/en/sql-reference/sql/create-secret). You will receive an error if you specify a SECRETS value whose secret isn’t also included in an integration specified by the EXTERNAL_ACCESS_INTEGRATIONS parameter. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaSecrets.property.secretVariableName">secretVariableName</a></code> | <code>java.lang.String</code> | The variable that will be used in handler code when retrieving information from the secret. |

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktf/provider-snowflake.functionJava.FunctionJavaSecrets.property.secretId"></a>

```java
public java.lang.String getSecretId();
```

- *Type:* java.lang.String

Fully qualified name of the allowed [secret](https://docs.snowflake.com/en/sql-reference/sql/create-secret). You will receive an error if you specify a SECRETS value whose secret isn’t also included in an integration specified by the EXTERNAL_ACCESS_INTEGRATIONS parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/function_java#secret_id FunctionJava#secret_id}

---

##### `secretVariableName`<sup>Required</sup> <a name="secretVariableName" id="@cdktf/provider-snowflake.functionJava.FunctionJavaSecrets.property.secretVariableName"></a>

```java
public java.lang.String getSecretVariableName();
```

- *Type:* java.lang.String

The variable that will be used in handler code when retrieving information from the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/function_java#secret_variable_name FunctionJava#secret_variable_name}

---

### FunctionJavaShowOutput <a name="FunctionJavaShowOutput" id="@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutput.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.function_java.FunctionJavaShowOutput;

FunctionJavaShowOutput.builder()
    .build();
```


### FunctionJavaTargetPath <a name="FunctionJavaTargetPath" id="@cdktf/provider-snowflake.functionJava.FunctionJavaTargetPath"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.functionJava.FunctionJavaTargetPath.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.function_java.FunctionJavaTargetPath;

FunctionJavaTargetPath.builder()
    .pathOnStage(java.lang.String)
    .stageLocation(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaTargetPath.property.pathOnStage">pathOnStage</a></code> | <code>java.lang.String</code> | Path for import on stage, without the leading `/`. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaTargetPath.property.stageLocation">stageLocation</a></code> | <code>java.lang.String</code> | Stage location without leading `@`. |

---

##### `pathOnStage`<sup>Required</sup> <a name="pathOnStage" id="@cdktf/provider-snowflake.functionJava.FunctionJavaTargetPath.property.pathOnStage"></a>

```java
public java.lang.String getPathOnStage();
```

- *Type:* java.lang.String

Path for import on stage, without the leading `/`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/function_java#path_on_stage FunctionJava#path_on_stage}

---

##### `stageLocation`<sup>Required</sup> <a name="stageLocation" id="@cdktf/provider-snowflake.functionJava.FunctionJavaTargetPath.property.stageLocation"></a>

```java
public java.lang.String getStageLocation();
```

- *Type:* java.lang.String

Stage location without leading `@`.

To use your user's stage set this to `~`, otherwise pass fully qualified name of the stage (with every part contained in double quotes or use `snowflake_stage.<your stage's resource name>.fully_qualified_name` if you manage this stage through terraform).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs/resources/function_java#stage_location FunctionJava#stage_location}

---

## Classes <a name="Classes" id="Classes"></a>

### FunctionJavaArgumentsList <a name="FunctionJavaArgumentsList" id="@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.function_java.FunctionJavaArgumentsList;

new FunctionJavaArgumentsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsList.get"></a>

```java
public FunctionJavaArgumentsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaArguments">FunctionJavaArguments</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaArguments">FunctionJavaArguments</a>>

---


### FunctionJavaArgumentsOutputReference <a name="FunctionJavaArgumentsOutputReference" id="@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.function_java.FunctionJavaArgumentsOutputReference;

new FunctionJavaArgumentsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsOutputReference.resetArgDefaultValue">resetArgDefaultValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArgDefaultValue` <a name="resetArgDefaultValue" id="@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsOutputReference.resetArgDefaultValue"></a>

```java
public void resetArgDefaultValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsOutputReference.property.argDataTypeInput">argDataTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsOutputReference.property.argDefaultValueInput">argDefaultValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsOutputReference.property.argNameInput">argNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsOutputReference.property.argDataType">argDataType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsOutputReference.property.argDefaultValue">argDefaultValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsOutputReference.property.argName">argName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaArguments">FunctionJavaArguments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `argDataTypeInput`<sup>Optional</sup> <a name="argDataTypeInput" id="@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsOutputReference.property.argDataTypeInput"></a>

```java
public java.lang.String getArgDataTypeInput();
```

- *Type:* java.lang.String

---

##### `argDefaultValueInput`<sup>Optional</sup> <a name="argDefaultValueInput" id="@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsOutputReference.property.argDefaultValueInput"></a>

```java
public java.lang.String getArgDefaultValueInput();
```

- *Type:* java.lang.String

---

##### `argNameInput`<sup>Optional</sup> <a name="argNameInput" id="@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsOutputReference.property.argNameInput"></a>

```java
public java.lang.String getArgNameInput();
```

- *Type:* java.lang.String

---

##### `argDataType`<sup>Required</sup> <a name="argDataType" id="@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsOutputReference.property.argDataType"></a>

```java
public java.lang.String getArgDataType();
```

- *Type:* java.lang.String

---

##### `argDefaultValue`<sup>Required</sup> <a name="argDefaultValue" id="@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsOutputReference.property.argDefaultValue"></a>

```java
public java.lang.String getArgDefaultValue();
```

- *Type:* java.lang.String

---

##### `argName`<sup>Required</sup> <a name="argName" id="@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsOutputReference.property.argName"></a>

```java
public java.lang.String getArgName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.functionJava.FunctionJavaArgumentsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaArguments">FunctionJavaArguments</a>

---


### FunctionJavaImportsList <a name="FunctionJavaImportsList" id="@cdktf/provider-snowflake.functionJava.FunctionJavaImportsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.functionJava.FunctionJavaImportsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.function_java.FunctionJavaImportsList;

new FunctionJavaImportsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaImportsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaImportsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaImportsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.functionJava.FunctionJavaImportsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaImportsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.functionJava.FunctionJavaImportsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaImportsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaImportsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaImportsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaImportsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaImportsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.functionJava.FunctionJavaImportsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.functionJava.FunctionJavaImportsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.functionJava.FunctionJavaImportsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.functionJava.FunctionJavaImportsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.functionJava.FunctionJavaImportsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.functionJava.FunctionJavaImportsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.functionJava.FunctionJavaImportsList.get"></a>

```java
public FunctionJavaImportsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.functionJava.FunctionJavaImportsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaImportsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaImportsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaImportsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaImports">FunctionJavaImports</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.functionJava.FunctionJavaImportsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.functionJava.FunctionJavaImportsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.functionJava.FunctionJavaImportsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaImports">FunctionJavaImports</a>>

---


### FunctionJavaImportsOutputReference <a name="FunctionJavaImportsOutputReference" id="@cdktf/provider-snowflake.functionJava.FunctionJavaImportsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.functionJava.FunctionJavaImportsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.function_java.FunctionJavaImportsOutputReference;

new FunctionJavaImportsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaImportsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaImportsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaImportsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaImportsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.functionJava.FunctionJavaImportsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaImportsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.functionJava.FunctionJavaImportsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.functionJava.FunctionJavaImportsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaImportsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaImportsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaImportsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaImportsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaImportsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaImportsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaImportsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaImportsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaImportsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaImportsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaImportsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaImportsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaImportsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.functionJava.FunctionJavaImportsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaImportsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaImportsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaImportsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaImportsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaImportsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaImportsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaImportsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaImportsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaImportsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaImportsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaImportsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaImportsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaImportsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaImportsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaImportsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaImportsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaImportsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaImportsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaImportsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.functionJava.FunctionJavaImportsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.functionJava.FunctionJavaImportsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.functionJava.FunctionJavaImportsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.functionJava.FunctionJavaImportsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaImportsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaImportsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaImportsOutputReference.property.pathOnStageInput">pathOnStageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaImportsOutputReference.property.stageLocationInput">stageLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaImportsOutputReference.property.pathOnStage">pathOnStage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaImportsOutputReference.property.stageLocation">stageLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaImportsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaImports">FunctionJavaImports</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.functionJava.FunctionJavaImportsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.functionJava.FunctionJavaImportsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pathOnStageInput`<sup>Optional</sup> <a name="pathOnStageInput" id="@cdktf/provider-snowflake.functionJava.FunctionJavaImportsOutputReference.property.pathOnStageInput"></a>

```java
public java.lang.String getPathOnStageInput();
```

- *Type:* java.lang.String

---

##### `stageLocationInput`<sup>Optional</sup> <a name="stageLocationInput" id="@cdktf/provider-snowflake.functionJava.FunctionJavaImportsOutputReference.property.stageLocationInput"></a>

```java
public java.lang.String getStageLocationInput();
```

- *Type:* java.lang.String

---

##### `pathOnStage`<sup>Required</sup> <a name="pathOnStage" id="@cdktf/provider-snowflake.functionJava.FunctionJavaImportsOutputReference.property.pathOnStage"></a>

```java
public java.lang.String getPathOnStage();
```

- *Type:* java.lang.String

---

##### `stageLocation`<sup>Required</sup> <a name="stageLocation" id="@cdktf/provider-snowflake.functionJava.FunctionJavaImportsOutputReference.property.stageLocation"></a>

```java
public java.lang.String getStageLocation();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.functionJava.FunctionJavaImportsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaImports">FunctionJavaImports</a>

---


### FunctionJavaParametersEnableConsoleOutputList <a name="FunctionJavaParametersEnableConsoleOutputList" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersEnableConsoleOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersEnableConsoleOutputList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.function_java.FunctionJavaParametersEnableConsoleOutputList;

new FunctionJavaParametersEnableConsoleOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersEnableConsoleOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersEnableConsoleOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersEnableConsoleOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersEnableConsoleOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersEnableConsoleOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersEnableConsoleOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersEnableConsoleOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersEnableConsoleOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersEnableConsoleOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersEnableConsoleOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersEnableConsoleOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersEnableConsoleOutputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersEnableConsoleOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersEnableConsoleOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersEnableConsoleOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersEnableConsoleOutputList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersEnableConsoleOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersEnableConsoleOutputList.get"></a>

```java
public FunctionJavaParametersEnableConsoleOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersEnableConsoleOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersEnableConsoleOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersEnableConsoleOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersEnableConsoleOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersEnableConsoleOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### FunctionJavaParametersEnableConsoleOutputOutputReference <a name="FunctionJavaParametersEnableConsoleOutputOutputReference" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersEnableConsoleOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersEnableConsoleOutputOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.function_java.FunctionJavaParametersEnableConsoleOutputOutputReference;

new FunctionJavaParametersEnableConsoleOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersEnableConsoleOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersEnableConsoleOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersEnableConsoleOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersEnableConsoleOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersEnableConsoleOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersEnableConsoleOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersEnableConsoleOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersEnableConsoleOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersEnableConsoleOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersEnableConsoleOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersEnableConsoleOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersEnableConsoleOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersEnableConsoleOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersEnableConsoleOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersEnableConsoleOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersEnableConsoleOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersEnableConsoleOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersEnableConsoleOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersEnableConsoleOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersEnableConsoleOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersEnableConsoleOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersEnableConsoleOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersEnableConsoleOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersEnableConsoleOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersEnableConsoleOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersEnableConsoleOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersEnableConsoleOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersEnableConsoleOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersEnableConsoleOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersEnableConsoleOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersEnableConsoleOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersEnableConsoleOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersEnableConsoleOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersEnableConsoleOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersEnableConsoleOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersEnableConsoleOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersEnableConsoleOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersEnableConsoleOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersEnableConsoleOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersEnableConsoleOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersEnableConsoleOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersEnableConsoleOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersEnableConsoleOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersEnableConsoleOutputOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersEnableConsoleOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersEnableConsoleOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersEnableConsoleOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersEnableConsoleOutputOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersEnableConsoleOutputOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersEnableConsoleOutputOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersEnableConsoleOutputOutputReference.property.level">level</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersEnableConsoleOutputOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersEnableConsoleOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersEnableConsoleOutput">FunctionJavaParametersEnableConsoleOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersEnableConsoleOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersEnableConsoleOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersEnableConsoleOutputOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersEnableConsoleOutputOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersEnableConsoleOutputOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersEnableConsoleOutputOutputReference.property.level"></a>

```java
public java.lang.String getLevel();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersEnableConsoleOutputOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersEnableConsoleOutputOutputReference.property.internalValue"></a>

```java
public FunctionJavaParametersEnableConsoleOutput getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersEnableConsoleOutput">FunctionJavaParametersEnableConsoleOutput</a>

---


### FunctionJavaParametersList <a name="FunctionJavaParametersList" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.function_java.FunctionJavaParametersList;

new FunctionJavaParametersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersList.get"></a>

```java
public FunctionJavaParametersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### FunctionJavaParametersLogLevelList <a name="FunctionJavaParametersLogLevelList" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersLogLevelList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersLogLevelList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.function_java.FunctionJavaParametersLogLevelList;

new FunctionJavaParametersLogLevelList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersLogLevelList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersLogLevelList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersLogLevelList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersLogLevelList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersLogLevelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersLogLevelList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersLogLevelList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersLogLevelList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersLogLevelList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersLogLevelList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersLogLevelList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersLogLevelList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersLogLevelList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersLogLevelList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersLogLevelList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersLogLevelList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersLogLevelList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersLogLevelList.get"></a>

```java
public FunctionJavaParametersLogLevelOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersLogLevelList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersLogLevelList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersLogLevelList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersLogLevelList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersLogLevelList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### FunctionJavaParametersLogLevelOutputReference <a name="FunctionJavaParametersLogLevelOutputReference" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersLogLevelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersLogLevelOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.function_java.FunctionJavaParametersLogLevelOutputReference;

new FunctionJavaParametersLogLevelOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersLogLevelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersLogLevelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersLogLevelOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersLogLevelOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersLogLevelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersLogLevelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersLogLevelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersLogLevelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersLogLevelOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersLogLevelOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersLogLevelOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersLogLevelOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersLogLevelOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersLogLevelOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersLogLevelOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersLogLevelOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersLogLevelOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersLogLevelOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersLogLevelOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersLogLevelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersLogLevelOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersLogLevelOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersLogLevelOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersLogLevelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersLogLevelOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersLogLevelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersLogLevelOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersLogLevelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersLogLevelOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersLogLevelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersLogLevelOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersLogLevelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersLogLevelOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersLogLevelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersLogLevelOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersLogLevelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersLogLevelOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersLogLevelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersLogLevelOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersLogLevelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersLogLevelOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersLogLevelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersLogLevelOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersLogLevelOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersLogLevelOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersLogLevelOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersLogLevelOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersLogLevelOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersLogLevelOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersLogLevelOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersLogLevelOutputReference.property.level">level</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersLogLevelOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersLogLevelOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersLogLevel">FunctionJavaParametersLogLevel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersLogLevelOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersLogLevelOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersLogLevelOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersLogLevelOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersLogLevelOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersLogLevelOutputReference.property.level"></a>

```java
public java.lang.String getLevel();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersLogLevelOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersLogLevelOutputReference.property.internalValue"></a>

```java
public FunctionJavaParametersLogLevel getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersLogLevel">FunctionJavaParametersLogLevel</a>

---


### FunctionJavaParametersMetricLevelList <a name="FunctionJavaParametersMetricLevelList" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersMetricLevelList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersMetricLevelList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.function_java.FunctionJavaParametersMetricLevelList;

new FunctionJavaParametersMetricLevelList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersMetricLevelList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersMetricLevelList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersMetricLevelList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersMetricLevelList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersMetricLevelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersMetricLevelList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersMetricLevelList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersMetricLevelList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersMetricLevelList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersMetricLevelList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersMetricLevelList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersMetricLevelList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersMetricLevelList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersMetricLevelList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersMetricLevelList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersMetricLevelList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersMetricLevelList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersMetricLevelList.get"></a>

```java
public FunctionJavaParametersMetricLevelOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersMetricLevelList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersMetricLevelList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersMetricLevelList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersMetricLevelList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersMetricLevelList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### FunctionJavaParametersMetricLevelOutputReference <a name="FunctionJavaParametersMetricLevelOutputReference" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersMetricLevelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersMetricLevelOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.function_java.FunctionJavaParametersMetricLevelOutputReference;

new FunctionJavaParametersMetricLevelOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersMetricLevelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersMetricLevelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersMetricLevelOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersMetricLevelOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersMetricLevelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersMetricLevelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersMetricLevelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersMetricLevelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersMetricLevelOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersMetricLevelOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersMetricLevelOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersMetricLevelOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersMetricLevelOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersMetricLevelOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersMetricLevelOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersMetricLevelOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersMetricLevelOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersMetricLevelOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersMetricLevelOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersMetricLevelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersMetricLevelOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersMetricLevelOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersMetricLevelOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersMetricLevelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersMetricLevelOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersMetricLevelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersMetricLevelOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersMetricLevelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersMetricLevelOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersMetricLevelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersMetricLevelOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersMetricLevelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersMetricLevelOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersMetricLevelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersMetricLevelOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersMetricLevelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersMetricLevelOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersMetricLevelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersMetricLevelOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersMetricLevelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersMetricLevelOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersMetricLevelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersMetricLevelOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersMetricLevelOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersMetricLevelOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersMetricLevelOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersMetricLevelOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersMetricLevelOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersMetricLevelOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersMetricLevelOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersMetricLevelOutputReference.property.level">level</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersMetricLevelOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersMetricLevelOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersMetricLevel">FunctionJavaParametersMetricLevel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersMetricLevelOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersMetricLevelOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersMetricLevelOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersMetricLevelOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersMetricLevelOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersMetricLevelOutputReference.property.level"></a>

```java
public java.lang.String getLevel();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersMetricLevelOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersMetricLevelOutputReference.property.internalValue"></a>

```java
public FunctionJavaParametersMetricLevel getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersMetricLevel">FunctionJavaParametersMetricLevel</a>

---


### FunctionJavaParametersOutputReference <a name="FunctionJavaParametersOutputReference" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.function_java.FunctionJavaParametersOutputReference;

new FunctionJavaParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersOutputReference.property.enableConsoleOutput">enableConsoleOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersEnableConsoleOutputList">FunctionJavaParametersEnableConsoleOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersOutputReference.property.logLevel">logLevel</a></code> | <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersLogLevelList">FunctionJavaParametersLogLevelList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersOutputReference.property.metricLevel">metricLevel</a></code> | <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersMetricLevelList">FunctionJavaParametersMetricLevelList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersOutputReference.property.traceLevel">traceLevel</a></code> | <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersTraceLevelList">FunctionJavaParametersTraceLevelList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParameters">FunctionJavaParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableConsoleOutput`<sup>Required</sup> <a name="enableConsoleOutput" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersOutputReference.property.enableConsoleOutput"></a>

```java
public FunctionJavaParametersEnableConsoleOutputList getEnableConsoleOutput();
```

- *Type:* <a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersEnableConsoleOutputList">FunctionJavaParametersEnableConsoleOutputList</a>

---

##### `logLevel`<sup>Required</sup> <a name="logLevel" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersOutputReference.property.logLevel"></a>

```java
public FunctionJavaParametersLogLevelList getLogLevel();
```

- *Type:* <a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersLogLevelList">FunctionJavaParametersLogLevelList</a>

---

##### `metricLevel`<sup>Required</sup> <a name="metricLevel" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersOutputReference.property.metricLevel"></a>

```java
public FunctionJavaParametersMetricLevelList getMetricLevel();
```

- *Type:* <a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersMetricLevelList">FunctionJavaParametersMetricLevelList</a>

---

##### `traceLevel`<sup>Required</sup> <a name="traceLevel" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersOutputReference.property.traceLevel"></a>

```java
public FunctionJavaParametersTraceLevelList getTraceLevel();
```

- *Type:* <a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersTraceLevelList">FunctionJavaParametersTraceLevelList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersOutputReference.property.internalValue"></a>

```java
public FunctionJavaParameters getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParameters">FunctionJavaParameters</a>

---


### FunctionJavaParametersTraceLevelList <a name="FunctionJavaParametersTraceLevelList" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersTraceLevelList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersTraceLevelList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.function_java.FunctionJavaParametersTraceLevelList;

new FunctionJavaParametersTraceLevelList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersTraceLevelList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersTraceLevelList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersTraceLevelList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersTraceLevelList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersTraceLevelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersTraceLevelList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersTraceLevelList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersTraceLevelList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersTraceLevelList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersTraceLevelList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersTraceLevelList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersTraceLevelList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersTraceLevelList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersTraceLevelList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersTraceLevelList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersTraceLevelList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersTraceLevelList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersTraceLevelList.get"></a>

```java
public FunctionJavaParametersTraceLevelOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersTraceLevelList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersTraceLevelList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersTraceLevelList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersTraceLevelList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersTraceLevelList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### FunctionJavaParametersTraceLevelOutputReference <a name="FunctionJavaParametersTraceLevelOutputReference" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersTraceLevelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersTraceLevelOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.function_java.FunctionJavaParametersTraceLevelOutputReference;

new FunctionJavaParametersTraceLevelOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersTraceLevelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersTraceLevelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersTraceLevelOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersTraceLevelOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersTraceLevelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersTraceLevelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersTraceLevelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersTraceLevelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersTraceLevelOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersTraceLevelOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersTraceLevelOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersTraceLevelOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersTraceLevelOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersTraceLevelOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersTraceLevelOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersTraceLevelOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersTraceLevelOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersTraceLevelOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersTraceLevelOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersTraceLevelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersTraceLevelOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersTraceLevelOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersTraceLevelOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersTraceLevelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersTraceLevelOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersTraceLevelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersTraceLevelOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersTraceLevelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersTraceLevelOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersTraceLevelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersTraceLevelOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersTraceLevelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersTraceLevelOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersTraceLevelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersTraceLevelOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersTraceLevelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersTraceLevelOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersTraceLevelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersTraceLevelOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersTraceLevelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersTraceLevelOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersTraceLevelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersTraceLevelOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersTraceLevelOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersTraceLevelOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersTraceLevelOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersTraceLevelOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersTraceLevelOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersTraceLevelOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersTraceLevelOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersTraceLevelOutputReference.property.level">level</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersTraceLevelOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersTraceLevelOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersTraceLevel">FunctionJavaParametersTraceLevel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersTraceLevelOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersTraceLevelOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersTraceLevelOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersTraceLevelOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersTraceLevelOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersTraceLevelOutputReference.property.level"></a>

```java
public java.lang.String getLevel();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersTraceLevelOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.functionJava.FunctionJavaParametersTraceLevelOutputReference.property.internalValue"></a>

```java
public FunctionJavaParametersTraceLevel getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaParametersTraceLevel">FunctionJavaParametersTraceLevel</a>

---


### FunctionJavaSecretsList <a name="FunctionJavaSecretsList" id="@cdktf/provider-snowflake.functionJava.FunctionJavaSecretsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.functionJava.FunctionJavaSecretsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.function_java.FunctionJavaSecretsList;

new FunctionJavaSecretsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaSecretsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaSecretsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaSecretsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.functionJava.FunctionJavaSecretsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaSecretsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.functionJava.FunctionJavaSecretsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaSecretsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaSecretsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaSecretsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaSecretsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaSecretsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.functionJava.FunctionJavaSecretsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.functionJava.FunctionJavaSecretsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.functionJava.FunctionJavaSecretsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.functionJava.FunctionJavaSecretsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.functionJava.FunctionJavaSecretsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.functionJava.FunctionJavaSecretsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.functionJava.FunctionJavaSecretsList.get"></a>

```java
public FunctionJavaSecretsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.functionJava.FunctionJavaSecretsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaSecretsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaSecretsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaSecretsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaSecrets">FunctionJavaSecrets</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.functionJava.FunctionJavaSecretsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.functionJava.FunctionJavaSecretsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.functionJava.FunctionJavaSecretsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaSecrets">FunctionJavaSecrets</a>>

---


### FunctionJavaSecretsOutputReference <a name="FunctionJavaSecretsOutputReference" id="@cdktf/provider-snowflake.functionJava.FunctionJavaSecretsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.functionJava.FunctionJavaSecretsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.function_java.FunctionJavaSecretsOutputReference;

new FunctionJavaSecretsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaSecretsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaSecretsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaSecretsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.functionJava.FunctionJavaSecretsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaSecretsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.functionJava.FunctionJavaSecretsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.functionJava.FunctionJavaSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaSecretsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaSecretsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaSecretsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaSecretsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaSecretsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaSecretsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaSecretsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaSecretsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaSecretsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaSecretsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaSecretsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaSecretsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaSecretsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.functionJava.FunctionJavaSecretsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaSecretsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaSecretsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaSecretsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaSecretsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaSecretsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaSecretsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaSecretsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaSecretsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaSecretsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaSecretsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaSecretsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaSecretsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaSecretsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaSecretsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaSecretsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaSecretsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaSecretsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaSecretsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaSecretsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.functionJava.FunctionJavaSecretsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.functionJava.FunctionJavaSecretsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.functionJava.FunctionJavaSecretsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.functionJava.FunctionJavaSecretsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaSecretsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaSecretsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaSecretsOutputReference.property.secretIdInput">secretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaSecretsOutputReference.property.secretVariableNameInput">secretVariableNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaSecretsOutputReference.property.secretId">secretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaSecretsOutputReference.property.secretVariableName">secretVariableName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaSecretsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaSecrets">FunctionJavaSecrets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.functionJava.FunctionJavaSecretsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.functionJava.FunctionJavaSecretsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `secretIdInput`<sup>Optional</sup> <a name="secretIdInput" id="@cdktf/provider-snowflake.functionJava.FunctionJavaSecretsOutputReference.property.secretIdInput"></a>

```java
public java.lang.String getSecretIdInput();
```

- *Type:* java.lang.String

---

##### `secretVariableNameInput`<sup>Optional</sup> <a name="secretVariableNameInput" id="@cdktf/provider-snowflake.functionJava.FunctionJavaSecretsOutputReference.property.secretVariableNameInput"></a>

```java
public java.lang.String getSecretVariableNameInput();
```

- *Type:* java.lang.String

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktf/provider-snowflake.functionJava.FunctionJavaSecretsOutputReference.property.secretId"></a>

```java
public java.lang.String getSecretId();
```

- *Type:* java.lang.String

---

##### `secretVariableName`<sup>Required</sup> <a name="secretVariableName" id="@cdktf/provider-snowflake.functionJava.FunctionJavaSecretsOutputReference.property.secretVariableName"></a>

```java
public java.lang.String getSecretVariableName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.functionJava.FunctionJavaSecretsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaSecrets">FunctionJavaSecrets</a>

---


### FunctionJavaShowOutputList <a name="FunctionJavaShowOutputList" id="@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.function_java.FunctionJavaShowOutputList;

new FunctionJavaShowOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputList.get"></a>

```java
public FunctionJavaShowOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### FunctionJavaShowOutputOutputReference <a name="FunctionJavaShowOutputOutputReference" id="@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.function_java.FunctionJavaShowOutputOutputReference;

new FunctionJavaShowOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputOutputReference.property.argumentsRaw">argumentsRaw</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputOutputReference.property.catalogName">catalogName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputOutputReference.property.externalAccessIntegrations">externalAccessIntegrations</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputOutputReference.property.isAggregate">isAggregate</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputOutputReference.property.isAnsi">isAnsi</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputOutputReference.property.isBuiltin">isBuiltin</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputOutputReference.property.isDataMetric">isDataMetric</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputOutputReference.property.isExternalFunction">isExternalFunction</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputOutputReference.property.isMemoizable">isMemoizable</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputOutputReference.property.isSecure">isSecure</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputOutputReference.property.isTableFunction">isTableFunction</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputOutputReference.property.language">language</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputOutputReference.property.maxNumArguments">maxNumArguments</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputOutputReference.property.minNumArguments">minNumArguments</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputOutputReference.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputOutputReference.property.secrets">secrets</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputOutputReference.property.validForClustering">validForClustering</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutput">FunctionJavaShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `argumentsRaw`<sup>Required</sup> <a name="argumentsRaw" id="@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputOutputReference.property.argumentsRaw"></a>

```java
public java.lang.String getArgumentsRaw();
```

- *Type:* java.lang.String

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputOutputReference.property.catalogName"></a>

```java
public java.lang.String getCatalogName();
```

- *Type:* java.lang.String

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputOutputReference.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `externalAccessIntegrations`<sup>Required</sup> <a name="externalAccessIntegrations" id="@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputOutputReference.property.externalAccessIntegrations"></a>

```java
public java.lang.String getExternalAccessIntegrations();
```

- *Type:* java.lang.String

---

##### `isAggregate`<sup>Required</sup> <a name="isAggregate" id="@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputOutputReference.property.isAggregate"></a>

```java
public IResolvable getIsAggregate();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isAnsi`<sup>Required</sup> <a name="isAnsi" id="@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputOutputReference.property.isAnsi"></a>

```java
public IResolvable getIsAnsi();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isBuiltin`<sup>Required</sup> <a name="isBuiltin" id="@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputOutputReference.property.isBuiltin"></a>

```java
public IResolvable getIsBuiltin();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isDataMetric`<sup>Required</sup> <a name="isDataMetric" id="@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputOutputReference.property.isDataMetric"></a>

```java
public IResolvable getIsDataMetric();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isExternalFunction`<sup>Required</sup> <a name="isExternalFunction" id="@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputOutputReference.property.isExternalFunction"></a>

```java
public IResolvable getIsExternalFunction();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isMemoizable`<sup>Required</sup> <a name="isMemoizable" id="@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputOutputReference.property.isMemoizable"></a>

```java
public IResolvable getIsMemoizable();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isSecure`<sup>Required</sup> <a name="isSecure" id="@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputOutputReference.property.isSecure"></a>

```java
public IResolvable getIsSecure();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isTableFunction`<sup>Required</sup> <a name="isTableFunction" id="@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputOutputReference.property.isTableFunction"></a>

```java
public IResolvable getIsTableFunction();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `language`<sup>Required</sup> <a name="language" id="@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputOutputReference.property.language"></a>

```java
public java.lang.String getLanguage();
```

- *Type:* java.lang.String

---

##### `maxNumArguments`<sup>Required</sup> <a name="maxNumArguments" id="@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputOutputReference.property.maxNumArguments"></a>

```java
public java.lang.Number getMaxNumArguments();
```

- *Type:* java.lang.Number

---

##### `minNumArguments`<sup>Required</sup> <a name="minNumArguments" id="@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputOutputReference.property.minNumArguments"></a>

```java
public java.lang.Number getMinNumArguments();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputOutputReference.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

---

##### `secrets`<sup>Required</sup> <a name="secrets" id="@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputOutputReference.property.secrets"></a>

```java
public java.lang.String getSecrets();
```

- *Type:* java.lang.String

---

##### `validForClustering`<sup>Required</sup> <a name="validForClustering" id="@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputOutputReference.property.validForClustering"></a>

```java
public IResolvable getValidForClustering();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutputOutputReference.property.internalValue"></a>

```java
public FunctionJavaShowOutput getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaShowOutput">FunctionJavaShowOutput</a>

---


### FunctionJavaTargetPathOutputReference <a name="FunctionJavaTargetPathOutputReference" id="@cdktf/provider-snowflake.functionJava.FunctionJavaTargetPathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.functionJava.FunctionJavaTargetPathOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.function_java.FunctionJavaTargetPathOutputReference;

new FunctionJavaTargetPathOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaTargetPathOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaTargetPathOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.functionJava.FunctionJavaTargetPathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaTargetPathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaTargetPathOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaTargetPathOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaTargetPathOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaTargetPathOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaTargetPathOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaTargetPathOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaTargetPathOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaTargetPathOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaTargetPathOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaTargetPathOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaTargetPathOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaTargetPathOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaTargetPathOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.functionJava.FunctionJavaTargetPathOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaTargetPathOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaTargetPathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaTargetPathOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaTargetPathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaTargetPathOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaTargetPathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaTargetPathOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaTargetPathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaTargetPathOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaTargetPathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaTargetPathOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaTargetPathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaTargetPathOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaTargetPathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaTargetPathOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaTargetPathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaTargetPathOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaTargetPathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.functionJava.FunctionJavaTargetPathOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.functionJava.FunctionJavaTargetPathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.functionJava.FunctionJavaTargetPathOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.functionJava.FunctionJavaTargetPathOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.functionJava.FunctionJavaTargetPathOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaTargetPathOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaTargetPathOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaTargetPathOutputReference.property.pathOnStageInput">pathOnStageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaTargetPathOutputReference.property.stageLocationInput">stageLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaTargetPathOutputReference.property.pathOnStage">pathOnStage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaTargetPathOutputReference.property.stageLocation">stageLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaTargetPathOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaTargetPath">FunctionJavaTargetPath</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.functionJava.FunctionJavaTargetPathOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.functionJava.FunctionJavaTargetPathOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pathOnStageInput`<sup>Optional</sup> <a name="pathOnStageInput" id="@cdktf/provider-snowflake.functionJava.FunctionJavaTargetPathOutputReference.property.pathOnStageInput"></a>

```java
public java.lang.String getPathOnStageInput();
```

- *Type:* java.lang.String

---

##### `stageLocationInput`<sup>Optional</sup> <a name="stageLocationInput" id="@cdktf/provider-snowflake.functionJava.FunctionJavaTargetPathOutputReference.property.stageLocationInput"></a>

```java
public java.lang.String getStageLocationInput();
```

- *Type:* java.lang.String

---

##### `pathOnStage`<sup>Required</sup> <a name="pathOnStage" id="@cdktf/provider-snowflake.functionJava.FunctionJavaTargetPathOutputReference.property.pathOnStage"></a>

```java
public java.lang.String getPathOnStage();
```

- *Type:* java.lang.String

---

##### `stageLocation`<sup>Required</sup> <a name="stageLocation" id="@cdktf/provider-snowflake.functionJava.FunctionJavaTargetPathOutputReference.property.stageLocation"></a>

```java
public java.lang.String getStageLocation();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.functionJava.FunctionJavaTargetPathOutputReference.property.internalValue"></a>

```java
public FunctionJavaTargetPath getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.functionJava.FunctionJavaTargetPath">FunctionJavaTargetPath</a>

---



