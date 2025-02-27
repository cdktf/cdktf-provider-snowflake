// https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/function_java
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FunctionJavaConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies a comment for the function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/function_java#comment FunctionJava#comment}
  */
  readonly comment?: string;
  /**
  * The database in which to create the function. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/function_java#database FunctionJava#database}
  */
  readonly database: string;
  /**
  * Enable stdout/stderr fast path logging for anonyous stored procs. This is a public parameter (similar to LOG_LEVEL). For more information, check [ENABLE_CONSOLE_OUTPUT docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-console-output).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/function_java#enable_console_output FunctionJava#enable_console_output}
  */
  readonly enableConsoleOutput?: boolean | cdktf.IResolvable;
  /**
  * The names of [external access integrations](https://docs.snowflake.com/en/sql-reference/sql/create-external-access-integration) needed in order for this function’s handler code to access external networks. An external access integration specifies [network rules](https://docs.snowflake.com/en/sql-reference/sql/create-network-rule) and [secrets](https://docs.snowflake.com/en/sql-reference/sql/create-secret) that specify external locations and credentials (if any) allowed for use by handler code when making requests of an external network, such as an external REST API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/function_java#external_access_integrations FunctionJava#external_access_integrations}
  */
  readonly externalAccessIntegrations?: string[];
  /**
  * Defines the handler code executed when the UDF is called. Wrapping `$$` signs are added by the provider automatically; do not include them. The `function_definition` value must be Java source code. For more information, see [Introduction to Java UDFs](https://docs.snowflake.com/en/developer-guide/udf/java/udf-java-introduction). To mitigate permadiff on this field, the provider replaces blank characters with a space. This can lead to false positives in cases where a change in case or run of whitespace is semantically significant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/function_java#function_definition FunctionJava#function_definition}
  */
  readonly functionDefinition?: string;
  /**
  * The name of the handler method or class. If the handler is for a scalar UDF, returning a non-tabular value, the HANDLER value should be a method name, as in the following form: `MyClass.myMethod`. If the handler is for a tabular UDF, the HANDLER value should be the name of a handler class.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/function_java#handler FunctionJava#handler}
  */
  readonly handler: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/function_java#id FunctionJava#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies that the function is secure. By design, the Snowflake's `SHOW FUNCTIONS` command does not provide information about secure functions (consult [function docs](https://docs.snowflake.com/en/sql-reference/sql/create-function#id1) and [Protecting Sensitive Information with Secure UDFs and Stored Procedures](https://docs.snowflake.com/en/developer-guide/secure-udf-procedure)) which is essential to manage/import function with Terraform. Use the role owning the function while managing secure functions. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/function_java#is_secure FunctionJava#is_secure}
  */
  readonly isSecure?: string;
  /**
  * LOG_LEVEL to use when filtering events For more information, check [LOG_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#log-level).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/function_java#log_level FunctionJava#log_level}
  */
  readonly logLevel?: string;
  /**
  * METRIC_LEVEL value to control whether to emit metrics to Event Table For more information, check [METRIC_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#metric-level).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/function_java#metric_level FunctionJava#metric_level}
  */
  readonly metricLevel?: string;
  /**
  * The name of the function; the identifier does not need to be unique for the schema in which the function is created because UDFs are identified and resolved by the combination of the name and argument types. Check the [docs](https://docs.snowflake.com/en/sql-reference/sql/create-function#all-languages). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/function_java#name FunctionJava#name}
  */
  readonly name: string;
  /**
  * Specifies the behavior of the function when called with null inputs. Valid values are (case-insensitive): `CALLED ON NULL INPUT` | `RETURNS NULL ON NULL INPUT`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/function_java#null_input_behavior FunctionJava#null_input_behavior}
  */
  readonly nullInputBehavior?: string;
  /**
  * The name and version number of Snowflake system packages required as dependencies. The value should be of the form `package_name:version_number`, where `package_name` is `snowflake_domain:package`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/function_java#packages FunctionJava#packages}
  */
  readonly packages?: string[];
  /**
  * Specifies the behavior of the function when returning results. Valid values are (case-insensitive): `VOLATILE` | `IMMUTABLE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/function_java#return_results_behavior FunctionJava#return_results_behavior}
  */
  readonly returnResultsBehavior?: string;
  /**
  * Specifies the results returned by the UDF, which determines the UDF type. Use `<result_data_type>` to create a scalar UDF that returns a single value with the specified data type. Use `TABLE (col_name col_data_type, ...)` to creates a table UDF that returns tabular results with the specified table column(s) and column type(s). For the details, consult the [docs](https://docs.snowflake.com/en/sql-reference/sql/create-function#all-languages).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/function_java#return_type FunctionJava#return_type}
  */
  readonly returnType: string;
  /**
  * Specifies the Java JDK runtime version to use. The supported versions of Java are 11.x and 17.x. If RUNTIME_VERSION is not set, Java JDK 11 is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/function_java#runtime_version FunctionJava#runtime_version}
  */
  readonly runtimeVersion?: string;
  /**
  * The schema in which to create the function. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/function_java#schema FunctionJava#schema}
  */
  readonly schema: string;
  /**
  * Trace level value to use when generating/filtering trace events For more information, check [TRACE_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#trace-level).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/function_java#trace_level FunctionJava#trace_level}
  */
  readonly traceLevel?: string;
  /**
  * arguments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/function_java#arguments FunctionJava#arguments}
  */
  readonly arguments?: FunctionJavaArguments[] | cdktf.IResolvable;
  /**
  * imports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/function_java#imports FunctionJava#imports}
  */
  readonly imports?: FunctionJavaImports[] | cdktf.IResolvable;
  /**
  * secrets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/function_java#secrets FunctionJava#secrets}
  */
  readonly secrets?: FunctionJavaSecrets[] | cdktf.IResolvable;
  /**
  * target_path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/function_java#target_path FunctionJava#target_path}
  */
  readonly targetPath?: FunctionJavaTargetPath;
}
export interface FunctionJavaParametersEnableConsoleOutput {
}

export function functionJavaParametersEnableConsoleOutputToTerraform(struct?: FunctionJavaParametersEnableConsoleOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function functionJavaParametersEnableConsoleOutputToHclTerraform(struct?: FunctionJavaParametersEnableConsoleOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class FunctionJavaParametersEnableConsoleOutputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): FunctionJavaParametersEnableConsoleOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FunctionJavaParametersEnableConsoleOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class FunctionJavaParametersEnableConsoleOutputList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): FunctionJavaParametersEnableConsoleOutputOutputReference {
    return new FunctionJavaParametersEnableConsoleOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FunctionJavaParametersLogLevel {
}

export function functionJavaParametersLogLevelToTerraform(struct?: FunctionJavaParametersLogLevel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function functionJavaParametersLogLevelToHclTerraform(struct?: FunctionJavaParametersLogLevel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class FunctionJavaParametersLogLevelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): FunctionJavaParametersLogLevel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FunctionJavaParametersLogLevel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class FunctionJavaParametersLogLevelList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): FunctionJavaParametersLogLevelOutputReference {
    return new FunctionJavaParametersLogLevelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FunctionJavaParametersMetricLevel {
}

export function functionJavaParametersMetricLevelToTerraform(struct?: FunctionJavaParametersMetricLevel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function functionJavaParametersMetricLevelToHclTerraform(struct?: FunctionJavaParametersMetricLevel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class FunctionJavaParametersMetricLevelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): FunctionJavaParametersMetricLevel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FunctionJavaParametersMetricLevel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class FunctionJavaParametersMetricLevelList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): FunctionJavaParametersMetricLevelOutputReference {
    return new FunctionJavaParametersMetricLevelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FunctionJavaParametersTraceLevel {
}

export function functionJavaParametersTraceLevelToTerraform(struct?: FunctionJavaParametersTraceLevel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function functionJavaParametersTraceLevelToHclTerraform(struct?: FunctionJavaParametersTraceLevel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class FunctionJavaParametersTraceLevelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): FunctionJavaParametersTraceLevel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FunctionJavaParametersTraceLevel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class FunctionJavaParametersTraceLevelList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): FunctionJavaParametersTraceLevelOutputReference {
    return new FunctionJavaParametersTraceLevelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FunctionJavaParameters {
}

export function functionJavaParametersToTerraform(struct?: FunctionJavaParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function functionJavaParametersToHclTerraform(struct?: FunctionJavaParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class FunctionJavaParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): FunctionJavaParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FunctionJavaParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable_console_output - computed: true, optional: false, required: false
  private _enableConsoleOutput = new FunctionJavaParametersEnableConsoleOutputList(this, "enable_console_output", false);
  public get enableConsoleOutput() {
    return this._enableConsoleOutput;
  }

  // log_level - computed: true, optional: false, required: false
  private _logLevel = new FunctionJavaParametersLogLevelList(this, "log_level", false);
  public get logLevel() {
    return this._logLevel;
  }

  // metric_level - computed: true, optional: false, required: false
  private _metricLevel = new FunctionJavaParametersMetricLevelList(this, "metric_level", false);
  public get metricLevel() {
    return this._metricLevel;
  }

  // trace_level - computed: true, optional: false, required: false
  private _traceLevel = new FunctionJavaParametersTraceLevelList(this, "trace_level", false);
  public get traceLevel() {
    return this._traceLevel;
  }
}

export class FunctionJavaParametersList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): FunctionJavaParametersOutputReference {
    return new FunctionJavaParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FunctionJavaShowOutput {
}

export function functionJavaShowOutputToTerraform(struct?: FunctionJavaShowOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function functionJavaShowOutputToHclTerraform(struct?: FunctionJavaShowOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class FunctionJavaShowOutputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): FunctionJavaShowOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FunctionJavaShowOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // arguments_raw - computed: true, optional: false, required: false
  public get argumentsRaw() {
    return this.getStringAttribute('arguments_raw');
  }

  // catalog_name - computed: true, optional: false, required: false
  public get catalogName() {
    return this.getStringAttribute('catalog_name');
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // external_access_integrations - computed: true, optional: false, required: false
  public get externalAccessIntegrations() {
    return this.getStringAttribute('external_access_integrations');
  }

  // is_aggregate - computed: true, optional: false, required: false
  public get isAggregate() {
    return this.getBooleanAttribute('is_aggregate');
  }

  // is_ansi - computed: true, optional: false, required: false
  public get isAnsi() {
    return this.getBooleanAttribute('is_ansi');
  }

  // is_builtin - computed: true, optional: false, required: false
  public get isBuiltin() {
    return this.getBooleanAttribute('is_builtin');
  }

  // is_data_metric - computed: true, optional: false, required: false
  public get isDataMetric() {
    return this.getBooleanAttribute('is_data_metric');
  }

  // is_external_function - computed: true, optional: false, required: false
  public get isExternalFunction() {
    return this.getBooleanAttribute('is_external_function');
  }

  // is_memoizable - computed: true, optional: false, required: false
  public get isMemoizable() {
    return this.getBooleanAttribute('is_memoizable');
  }

  // is_secure - computed: true, optional: false, required: false
  public get isSecure() {
    return this.getBooleanAttribute('is_secure');
  }

  // is_table_function - computed: true, optional: false, required: false
  public get isTableFunction() {
    return this.getBooleanAttribute('is_table_function');
  }

  // language - computed: true, optional: false, required: false
  public get language() {
    return this.getStringAttribute('language');
  }

  // max_num_arguments - computed: true, optional: false, required: false
  public get maxNumArguments() {
    return this.getNumberAttribute('max_num_arguments');
  }

  // min_num_arguments - computed: true, optional: false, required: false
  public get minNumArguments() {
    return this.getNumberAttribute('min_num_arguments');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // schema_name - computed: true, optional: false, required: false
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }

  // secrets - computed: true, optional: false, required: false
  public get secrets() {
    return this.getStringAttribute('secrets');
  }

  // valid_for_clustering - computed: true, optional: false, required: false
  public get validForClustering() {
    return this.getBooleanAttribute('valid_for_clustering');
  }
}

export class FunctionJavaShowOutputList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): FunctionJavaShowOutputOutputReference {
    return new FunctionJavaShowOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FunctionJavaArguments {
  /**
  * The argument type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/function_java#arg_data_type FunctionJava#arg_data_type}
  */
  readonly argDataType: string;
  /**
  * Optional default value for the argument. For text values use single quotes. Numeric values can be unquoted. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/function_java#arg_default_value FunctionJava#arg_default_value}
  */
  readonly argDefaultValue?: string;
  /**
  * The argument name. The provider wraps it in double quotes by default, so be aware of that while referencing the argument in the function definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/function_java#arg_name FunctionJava#arg_name}
  */
  readonly argName: string;
}

export function functionJavaArgumentsToTerraform(struct?: FunctionJavaArguments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arg_data_type: cdktf.stringToTerraform(struct!.argDataType),
    arg_default_value: cdktf.stringToTerraform(struct!.argDefaultValue),
    arg_name: cdktf.stringToTerraform(struct!.argName),
  }
}


export function functionJavaArgumentsToHclTerraform(struct?: FunctionJavaArguments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arg_data_type: {
      value: cdktf.stringToHclTerraform(struct!.argDataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    arg_default_value: {
      value: cdktf.stringToHclTerraform(struct!.argDefaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    arg_name: {
      value: cdktf.stringToHclTerraform(struct!.argName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FunctionJavaArgumentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): FunctionJavaArguments | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._argDataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.argDataType = this._argDataType;
    }
    if (this._argDefaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.argDefaultValue = this._argDefaultValue;
    }
    if (this._argName !== undefined) {
      hasAnyValues = true;
      internalValueResult.argName = this._argName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FunctionJavaArguments | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._argDataType = undefined;
      this._argDefaultValue = undefined;
      this._argName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._argDataType = value.argDataType;
      this._argDefaultValue = value.argDefaultValue;
      this._argName = value.argName;
    }
  }

  // arg_data_type - computed: false, optional: false, required: true
  private _argDataType?: string; 
  public get argDataType() {
    return this.getStringAttribute('arg_data_type');
  }
  public set argDataType(value: string) {
    this._argDataType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get argDataTypeInput() {
    return this._argDataType;
  }

  // arg_default_value - computed: false, optional: true, required: false
  private _argDefaultValue?: string; 
  public get argDefaultValue() {
    return this.getStringAttribute('arg_default_value');
  }
  public set argDefaultValue(value: string) {
    this._argDefaultValue = value;
  }
  public resetArgDefaultValue() {
    this._argDefaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argDefaultValueInput() {
    return this._argDefaultValue;
  }

  // arg_name - computed: false, optional: false, required: true
  private _argName?: string; 
  public get argName() {
    return this.getStringAttribute('arg_name');
  }
  public set argName(value: string) {
    this._argName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get argNameInput() {
    return this._argName;
  }
}

export class FunctionJavaArgumentsList extends cdktf.ComplexList {
  public internalValue? : FunctionJavaArguments[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): FunctionJavaArgumentsOutputReference {
    return new FunctionJavaArgumentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FunctionJavaImports {
  /**
  * Path for import on stage, without the leading `/`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/function_java#path_on_stage FunctionJava#path_on_stage}
  */
  readonly pathOnStage: string;
  /**
  * Stage location without leading `@`. To use your user's stage set this to `~`, otherwise pass fully qualified name of the stage (with every part contained in double quotes or use `snowflake_stage.<your stage's resource name>.fully_qualified_name` if you manage this stage through terraform).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/function_java#stage_location FunctionJava#stage_location}
  */
  readonly stageLocation: string;
}

export function functionJavaImportsToTerraform(struct?: FunctionJavaImports | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path_on_stage: cdktf.stringToTerraform(struct!.pathOnStage),
    stage_location: cdktf.stringToTerraform(struct!.stageLocation),
  }
}


export function functionJavaImportsToHclTerraform(struct?: FunctionJavaImports | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path_on_stage: {
      value: cdktf.stringToHclTerraform(struct!.pathOnStage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stage_location: {
      value: cdktf.stringToHclTerraform(struct!.stageLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FunctionJavaImportsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): FunctionJavaImports | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pathOnStage !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathOnStage = this._pathOnStage;
    }
    if (this._stageLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.stageLocation = this._stageLocation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FunctionJavaImports | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pathOnStage = undefined;
      this._stageLocation = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pathOnStage = value.pathOnStage;
      this._stageLocation = value.stageLocation;
    }
  }

  // path_on_stage - computed: false, optional: false, required: true
  private _pathOnStage?: string; 
  public get pathOnStage() {
    return this.getStringAttribute('path_on_stage');
  }
  public set pathOnStage(value: string) {
    this._pathOnStage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathOnStageInput() {
    return this._pathOnStage;
  }

  // stage_location - computed: false, optional: false, required: true
  private _stageLocation?: string; 
  public get stageLocation() {
    return this.getStringAttribute('stage_location');
  }
  public set stageLocation(value: string) {
    this._stageLocation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stageLocationInput() {
    return this._stageLocation;
  }
}

export class FunctionJavaImportsList extends cdktf.ComplexList {
  public internalValue? : FunctionJavaImports[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): FunctionJavaImportsOutputReference {
    return new FunctionJavaImportsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FunctionJavaSecrets {
  /**
  * Fully qualified name of the allowed [secret](https://docs.snowflake.com/en/sql-reference/sql/create-secret). You will receive an error if you specify a SECRETS value whose secret isn’t also included in an integration specified by the EXTERNAL_ACCESS_INTEGRATIONS parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/function_java#secret_id FunctionJava#secret_id}
  */
  readonly secretId: string;
  /**
  * The variable that will be used in handler code when retrieving information from the secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/function_java#secret_variable_name FunctionJava#secret_variable_name}
  */
  readonly secretVariableName: string;
}

export function functionJavaSecretsToTerraform(struct?: FunctionJavaSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_id: cdktf.stringToTerraform(struct!.secretId),
    secret_variable_name: cdktf.stringToTerraform(struct!.secretVariableName),
  }
}


export function functionJavaSecretsToHclTerraform(struct?: FunctionJavaSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_id: {
      value: cdktf.stringToHclTerraform(struct!.secretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_variable_name: {
      value: cdktf.stringToHclTerraform(struct!.secretVariableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FunctionJavaSecretsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): FunctionJavaSecrets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretId = this._secretId;
    }
    if (this._secretVariableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretVariableName = this._secretVariableName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FunctionJavaSecrets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretId = undefined;
      this._secretVariableName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretId = value.secretId;
      this._secretVariableName = value.secretVariableName;
    }
  }

  // secret_id - computed: false, optional: false, required: true
  private _secretId?: string; 
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
  }

  // secret_variable_name - computed: false, optional: false, required: true
  private _secretVariableName?: string; 
  public get secretVariableName() {
    return this.getStringAttribute('secret_variable_name');
  }
  public set secretVariableName(value: string) {
    this._secretVariableName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretVariableNameInput() {
    return this._secretVariableName;
  }
}

export class FunctionJavaSecretsList extends cdktf.ComplexList {
  public internalValue? : FunctionJavaSecrets[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): FunctionJavaSecretsOutputReference {
    return new FunctionJavaSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FunctionJavaTargetPath {
  /**
  * Path for import on stage, without the leading `/`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/function_java#path_on_stage FunctionJava#path_on_stage}
  */
  readonly pathOnStage: string;
  /**
  * Stage location without leading `@`. To use your user's stage set this to `~`, otherwise pass fully qualified name of the stage (with every part contained in double quotes or use `snowflake_stage.<your stage's resource name>.fully_qualified_name` if you manage this stage through terraform).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/function_java#stage_location FunctionJava#stage_location}
  */
  readonly stageLocation: string;
}

export function functionJavaTargetPathToTerraform(struct?: FunctionJavaTargetPathOutputReference | FunctionJavaTargetPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path_on_stage: cdktf.stringToTerraform(struct!.pathOnStage),
    stage_location: cdktf.stringToTerraform(struct!.stageLocation),
  }
}


export function functionJavaTargetPathToHclTerraform(struct?: FunctionJavaTargetPathOutputReference | FunctionJavaTargetPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path_on_stage: {
      value: cdktf.stringToHclTerraform(struct!.pathOnStage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stage_location: {
      value: cdktf.stringToHclTerraform(struct!.stageLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FunctionJavaTargetPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FunctionJavaTargetPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pathOnStage !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathOnStage = this._pathOnStage;
    }
    if (this._stageLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.stageLocation = this._stageLocation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FunctionJavaTargetPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pathOnStage = undefined;
      this._stageLocation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pathOnStage = value.pathOnStage;
      this._stageLocation = value.stageLocation;
    }
  }

  // path_on_stage - computed: false, optional: false, required: true
  private _pathOnStage?: string; 
  public get pathOnStage() {
    return this.getStringAttribute('path_on_stage');
  }
  public set pathOnStage(value: string) {
    this._pathOnStage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathOnStageInput() {
    return this._pathOnStage;
  }

  // stage_location - computed: false, optional: false, required: true
  private _stageLocation?: string; 
  public get stageLocation() {
    return this.getStringAttribute('stage_location');
  }
  public set stageLocation(value: string) {
    this._stageLocation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stageLocationInput() {
    return this._stageLocation;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/function_java snowflake_function_java}
*/
export class FunctionJava extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_function_java";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FunctionJava resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FunctionJava to import
  * @param importFromId The id of the existing FunctionJava that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/function_java#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FunctionJava to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_function_java", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.4/docs/resources/function_java snowflake_function_java} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FunctionJavaConfig
  */
  public constructor(scope: Construct, id: string, config: FunctionJavaConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_function_java',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '1.0.4',
        providerVersionConstraint: ' ~> 1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._comment = config.comment;
    this._database = config.database;
    this._enableConsoleOutput = config.enableConsoleOutput;
    this._externalAccessIntegrations = config.externalAccessIntegrations;
    this._functionDefinition = config.functionDefinition;
    this._handler = config.handler;
    this._id = config.id;
    this._isSecure = config.isSecure;
    this._logLevel = config.logLevel;
    this._metricLevel = config.metricLevel;
    this._name = config.name;
    this._nullInputBehavior = config.nullInputBehavior;
    this._packages = config.packages;
    this._returnResultsBehavior = config.returnResultsBehavior;
    this._returnType = config.returnType;
    this._runtimeVersion = config.runtimeVersion;
    this._schema = config.schema;
    this._traceLevel = config.traceLevel;
    this._arguments.internalValue = config.arguments;
    this._imports.internalValue = config.imports;
    this._secrets.internalValue = config.secrets;
    this._targetPath.internalValue = config.targetPath;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // enable_console_output - computed: true, optional: true, required: false
  private _enableConsoleOutput?: boolean | cdktf.IResolvable; 
  public get enableConsoleOutput() {
    return this.getBooleanAttribute('enable_console_output');
  }
  public set enableConsoleOutput(value: boolean | cdktf.IResolvable) {
    this._enableConsoleOutput = value;
  }
  public resetEnableConsoleOutput() {
    this._enableConsoleOutput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableConsoleOutputInput() {
    return this._enableConsoleOutput;
  }

  // external_access_integrations - computed: false, optional: true, required: false
  private _externalAccessIntegrations?: string[]; 
  public get externalAccessIntegrations() {
    return cdktf.Fn.tolist(this.getListAttribute('external_access_integrations'));
  }
  public set externalAccessIntegrations(value: string[]) {
    this._externalAccessIntegrations = value;
  }
  public resetExternalAccessIntegrations() {
    this._externalAccessIntegrations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalAccessIntegrationsInput() {
    return this._externalAccessIntegrations;
  }

  // fully_qualified_name - computed: true, optional: false, required: false
  public get fullyQualifiedName() {
    return this.getStringAttribute('fully_qualified_name');
  }

  // function_definition - computed: false, optional: true, required: false
  private _functionDefinition?: string; 
  public get functionDefinition() {
    return this.getStringAttribute('function_definition');
  }
  public set functionDefinition(value: string) {
    this._functionDefinition = value;
  }
  public resetFunctionDefinition() {
    this._functionDefinition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionDefinitionInput() {
    return this._functionDefinition;
  }

  // function_language - computed: true, optional: false, required: false
  public get functionLanguage() {
    return this.getStringAttribute('function_language');
  }

  // handler - computed: false, optional: false, required: true
  private _handler?: string; 
  public get handler() {
    return this.getStringAttribute('handler');
  }
  public set handler(value: string) {
    this._handler = value;
  }
  // Temporarily expose input value. Use with caution.
  public get handlerInput() {
    return this._handler;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // is_secure - computed: false, optional: true, required: false
  private _isSecure?: string; 
  public get isSecure() {
    return this.getStringAttribute('is_secure');
  }
  public set isSecure(value: string) {
    this._isSecure = value;
  }
  public resetIsSecure() {
    this._isSecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSecureInput() {
    return this._isSecure;
  }

  // log_level - computed: true, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }

  // metric_level - computed: true, optional: true, required: false
  private _metricLevel?: string; 
  public get metricLevel() {
    return this.getStringAttribute('metric_level');
  }
  public set metricLevel(value: string) {
    this._metricLevel = value;
  }
  public resetMetricLevel() {
    this._metricLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricLevelInput() {
    return this._metricLevel;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // null_input_behavior - computed: false, optional: true, required: false
  private _nullInputBehavior?: string; 
  public get nullInputBehavior() {
    return this.getStringAttribute('null_input_behavior');
  }
  public set nullInputBehavior(value: string) {
    this._nullInputBehavior = value;
  }
  public resetNullInputBehavior() {
    this._nullInputBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullInputBehaviorInput() {
    return this._nullInputBehavior;
  }

  // packages - computed: false, optional: true, required: false
  private _packages?: string[]; 
  public get packages() {
    return cdktf.Fn.tolist(this.getListAttribute('packages'));
  }
  public set packages(value: string[]) {
    this._packages = value;
  }
  public resetPackages() {
    this._packages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packagesInput() {
    return this._packages;
  }

  // parameters - computed: true, optional: false, required: false
  private _parameters = new FunctionJavaParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }

  // return_results_behavior - computed: false, optional: true, required: false
  private _returnResultsBehavior?: string; 
  public get returnResultsBehavior() {
    return this.getStringAttribute('return_results_behavior');
  }
  public set returnResultsBehavior(value: string) {
    this._returnResultsBehavior = value;
  }
  public resetReturnResultsBehavior() {
    this._returnResultsBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnResultsBehaviorInput() {
    return this._returnResultsBehavior;
  }

  // return_type - computed: false, optional: false, required: true
  private _returnType?: string; 
  public get returnType() {
    return this.getStringAttribute('return_type');
  }
  public set returnType(value: string) {
    this._returnType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get returnTypeInput() {
    return this._returnType;
  }

  // runtime_version - computed: false, optional: true, required: false
  private _runtimeVersion?: string; 
  public get runtimeVersion() {
    return this.getStringAttribute('runtime_version');
  }
  public set runtimeVersion(value: string) {
    this._runtimeVersion = value;
  }
  public resetRuntimeVersion() {
    this._runtimeVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeVersionInput() {
    return this._runtimeVersion;
  }

  // schema - computed: false, optional: false, required: true
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }

  // show_output - computed: true, optional: false, required: false
  private _showOutput = new FunctionJavaShowOutputList(this, "show_output", false);
  public get showOutput() {
    return this._showOutput;
  }

  // trace_level - computed: true, optional: true, required: false
  private _traceLevel?: string; 
  public get traceLevel() {
    return this.getStringAttribute('trace_level');
  }
  public set traceLevel(value: string) {
    this._traceLevel = value;
  }
  public resetTraceLevel() {
    this._traceLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get traceLevelInput() {
    return this._traceLevel;
  }

  // arguments - computed: false, optional: true, required: false
  private _arguments = new FunctionJavaArgumentsList(this, "arguments", false);
  public get arguments() {
    return this._arguments;
  }
  public putArguments(value: FunctionJavaArguments[] | cdktf.IResolvable) {
    this._arguments.internalValue = value;
  }
  public resetArguments() {
    this._arguments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argumentsInput() {
    return this._arguments.internalValue;
  }

  // imports - computed: false, optional: true, required: false
  private _imports = new FunctionJavaImportsList(this, "imports", true);
  public get imports() {
    return this._imports;
  }
  public putImports(value: FunctionJavaImports[] | cdktf.IResolvable) {
    this._imports.internalValue = value;
  }
  public resetImports() {
    this._imports.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importsInput() {
    return this._imports.internalValue;
  }

  // secrets - computed: false, optional: true, required: false
  private _secrets = new FunctionJavaSecretsList(this, "secrets", true);
  public get secrets() {
    return this._secrets;
  }
  public putSecrets(value: FunctionJavaSecrets[] | cdktf.IResolvable) {
    this._secrets.internalValue = value;
  }
  public resetSecrets() {
    this._secrets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsInput() {
    return this._secrets.internalValue;
  }

  // target_path - computed: false, optional: true, required: false
  private _targetPath = new FunctionJavaTargetPathOutputReference(this, "target_path");
  public get targetPath() {
    return this._targetPath;
  }
  public putTargetPath(value: FunctionJavaTargetPath) {
    this._targetPath.internalValue = value;
  }
  public resetTargetPath() {
    this._targetPath.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPathInput() {
    return this._targetPath.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      database: cdktf.stringToTerraform(this._database),
      enable_console_output: cdktf.booleanToTerraform(this._enableConsoleOutput),
      external_access_integrations: cdktf.listMapper(cdktf.stringToTerraform, false)(this._externalAccessIntegrations),
      function_definition: cdktf.stringToTerraform(this._functionDefinition),
      handler: cdktf.stringToTerraform(this._handler),
      id: cdktf.stringToTerraform(this._id),
      is_secure: cdktf.stringToTerraform(this._isSecure),
      log_level: cdktf.stringToTerraform(this._logLevel),
      metric_level: cdktf.stringToTerraform(this._metricLevel),
      name: cdktf.stringToTerraform(this._name),
      null_input_behavior: cdktf.stringToTerraform(this._nullInputBehavior),
      packages: cdktf.listMapper(cdktf.stringToTerraform, false)(this._packages),
      return_results_behavior: cdktf.stringToTerraform(this._returnResultsBehavior),
      return_type: cdktf.stringToTerraform(this._returnType),
      runtime_version: cdktf.stringToTerraform(this._runtimeVersion),
      schema: cdktf.stringToTerraform(this._schema),
      trace_level: cdktf.stringToTerraform(this._traceLevel),
      arguments: cdktf.listMapper(functionJavaArgumentsToTerraform, true)(this._arguments.internalValue),
      imports: cdktf.listMapper(functionJavaImportsToTerraform, true)(this._imports.internalValue),
      secrets: cdktf.listMapper(functionJavaSecretsToTerraform, true)(this._secrets.internalValue),
      target_path: functionJavaTargetPathToTerraform(this._targetPath.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database: {
        value: cdktf.stringToHclTerraform(this._database),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_console_output: {
        value: cdktf.booleanToHclTerraform(this._enableConsoleOutput),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      external_access_integrations: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._externalAccessIntegrations),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      function_definition: {
        value: cdktf.stringToHclTerraform(this._functionDefinition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      handler: {
        value: cdktf.stringToHclTerraform(this._handler),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_secure: {
        value: cdktf.stringToHclTerraform(this._isSecure),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_level: {
        value: cdktf.stringToHclTerraform(this._logLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metric_level: {
        value: cdktf.stringToHclTerraform(this._metricLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      null_input_behavior: {
        value: cdktf.stringToHclTerraform(this._nullInputBehavior),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      packages: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._packages),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      return_results_behavior: {
        value: cdktf.stringToHclTerraform(this._returnResultsBehavior),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      return_type: {
        value: cdktf.stringToHclTerraform(this._returnType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      runtime_version: {
        value: cdktf.stringToHclTerraform(this._runtimeVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schema: {
        value: cdktf.stringToHclTerraform(this._schema),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trace_level: {
        value: cdktf.stringToHclTerraform(this._traceLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      arguments: {
        value: cdktf.listMapperHcl(functionJavaArgumentsToHclTerraform, true)(this._arguments.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FunctionJavaArgumentsList",
      },
      imports: {
        value: cdktf.listMapperHcl(functionJavaImportsToHclTerraform, true)(this._imports.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FunctionJavaImportsList",
      },
      secrets: {
        value: cdktf.listMapperHcl(functionJavaSecretsToHclTerraform, true)(this._secrets.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FunctionJavaSecretsList",
      },
      target_path: {
        value: functionJavaTargetPathToHclTerraform(this._targetPath.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FunctionJavaTargetPathList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
