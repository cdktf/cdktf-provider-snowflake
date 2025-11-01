/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/procedure_python
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProcedurePythonConfig extends cdktf.TerraformMetaArguments {
  /**
  * (Default: `user-defined procedure`) Specifies a comment for the procedure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/procedure_python#comment ProcedurePython#comment}
  */
  readonly comment?: string;
  /**
  * The database in which to create the procedure. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/procedure_python#database ProcedurePython#database}
  */
  readonly database: string;
  /**
  * Enable stdout/stderr fast path logging for anonyous stored procs. This is a public parameter (similar to LOG_LEVEL). For more information, check [ENABLE_CONSOLE_OUTPUT docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-console-output).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/procedure_python#enable_console_output ProcedurePython#enable_console_output}
  */
  readonly enableConsoleOutput?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether the stored procedure executes with the privileges of the owner (an “owner’s rights” stored procedure) or with the privileges of the caller (a “caller’s rights” stored procedure). If you execute the statement CREATE PROCEDURE … EXECUTE AS CALLER, then in the future the procedure will execute as a caller’s rights procedure. If you execute CREATE PROCEDURE … EXECUTE AS OWNER, then the procedure will execute as an owner’s rights procedure. For more information, see [Understanding caller’s rights and owner’s rights stored procedures](https://docs.snowflake.com/en/developer-guide/stored-procedure/stored-procedures-rights). Valid values are (case-insensitive): `CALLER` | `OWNER`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/procedure_python#execute_as ProcedurePython#execute_as}
  */
  readonly executeAs?: string;
  /**
  * The names of [external access integrations](https://docs.snowflake.com/en/sql-reference/sql/create-external-access-integration) needed in order for this procedure’s handler code to access external networks. An external access integration specifies [network rules](https://docs.snowflake.com/en/sql-reference/sql/create-network-rule) and [secrets](https://docs.snowflake.com/en/sql-reference/sql/create-secret) that specify external locations and credentials (if any) allowed for use by handler code when making requests of an external network, such as an external REST API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/procedure_python#external_access_integrations ProcedurePython#external_access_integrations}
  */
  readonly externalAccessIntegrations?: string[];
  /**
  * Use the name of the stored procedure’s function or method. This can differ depending on whether the code is in-line or referenced at a stage. When the code is in-line, you can specify just the function name. When the code is imported from a stage, specify the fully-qualified handler function name as `<module_name>.<function_name>`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/procedure_python#handler ProcedurePython#handler}
  */
  readonly handler: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/procedure_python#id ProcedurePython#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies that the procedure is secure. For more information about secure procedures, see [Protecting Sensitive Information with Secure UDFs and Stored Procedures](https://docs.snowflake.com/en/developer-guide/secure-udf-procedure). Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/procedure_python#is_secure ProcedurePython#is_secure}
  */
  readonly isSecure?: string;
  /**
  * LOG_LEVEL to use when filtering events For more information, check [LOG_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#log-level).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/procedure_python#log_level ProcedurePython#log_level}
  */
  readonly logLevel?: string;
  /**
  * METRIC_LEVEL value to control whether to emit metrics to Event Table For more information, check [METRIC_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#metric-level).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/procedure_python#metric_level ProcedurePython#metric_level}
  */
  readonly metricLevel?: string;
  /**
  * The name of the procedure; the identifier does not need to be unique for the schema in which the procedure is created because stored procedures are [identified and resolved by the combination of the name and argument types](https://docs.snowflake.com/en/developer-guide/udf-stored-procedure-naming-conventions.html#label-procedure-function-name-overloading). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/procedure_python#name ProcedurePython#name}
  */
  readonly name: string;
  /**
  * Specifies the behavior of the procedure when called with null inputs. Valid values are (case-insensitive): `CALLED ON NULL INPUT` | `RETURNS NULL ON NULL INPUT`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/procedure_python#null_input_behavior ProcedurePython#null_input_behavior}
  */
  readonly nullInputBehavior?: string;
  /**
  * List of the names of packages deployed in Snowflake that should be included in the handler code’s execution environment. The Snowpark package is required for stored procedures, but is specified in the `snowpark_package` attribute. For more information about Snowpark, see [Snowpark API](https://docs.snowflake.com/en/developer-guide/snowpark/index).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/procedure_python#packages ProcedurePython#packages}
  */
  readonly packages?: string[];
  /**
  * Defines the code executed by the stored procedure. The definition can consist of any valid code. Wrapping `$$` signs are added by the provider automatically; do not include them. The `procedure_definition` value must be Python source code. For more information, see [Python (using Snowpark)](https://docs.snowflake.com/en/developer-guide/stored-procedure/python/procedure-python-overview). To mitigate permadiff on this field, the provider replaces blank characters with a space. This can lead to false positives in cases where a change in case or run of whitespace is semantically significant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/procedure_python#procedure_definition ProcedurePython#procedure_definition}
  */
  readonly procedureDefinition?: string;
  /**
  * Specifies the type of the result returned by the stored procedure. For `<result_data_type>`, use the Snowflake data type that corresponds to the type of the language that you are using (see [SQL-Python Data Type Mappings](https://docs.snowflake.com/en/developer-guide/udf-stored-procedure-data-type-mapping.html#label-sql-python-data-type-mappings)). For `RETURNS TABLE ( [ col_name col_data_type [ , ... ] ] )`, if you know the Snowflake data types of the columns in the returned table, specify the column names and types. Otherwise (e.g. if you are determining the column types during run time), you can omit the column names and types (i.e. `TABLE ()`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/procedure_python#return_type ProcedurePython#return_type}
  */
  readonly returnType: string;
  /**
  * The language runtime version to use. Currently, the supported versions are: 3.9, 3.10, and 3.11.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/procedure_python#runtime_version ProcedurePython#runtime_version}
  */
  readonly runtimeVersion: string;
  /**
  * The schema in which to create the procedure. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/procedure_python#schema ProcedurePython#schema}
  */
  readonly schema: string;
  /**
  * The Snowpark package is required for stored procedures, so it must always be present. For more information about Snowpark, see [Snowpark API](https://docs.snowflake.com/en/developer-guide/snowpark/index).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/procedure_python#snowpark_package ProcedurePython#snowpark_package}
  */
  readonly snowparkPackage: string;
  /**
  * Trace level value to use when generating/filtering trace events For more information, check [TRACE_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#trace-level).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/procedure_python#trace_level ProcedurePython#trace_level}
  */
  readonly traceLevel?: string;
  /**
  * arguments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/procedure_python#arguments ProcedurePython#arguments}
  */
  readonly arguments?: ProcedurePythonArguments[] | cdktf.IResolvable;
  /**
  * imports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/procedure_python#imports ProcedurePython#imports}
  */
  readonly imports?: ProcedurePythonImports[] | cdktf.IResolvable;
  /**
  * secrets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/procedure_python#secrets ProcedurePython#secrets}
  */
  readonly secrets?: ProcedurePythonSecrets[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/procedure_python#timeouts ProcedurePython#timeouts}
  */
  readonly timeouts?: ProcedurePythonTimeouts;
}
export interface ProcedurePythonParametersEnableConsoleOutput {
}

export function procedurePythonParametersEnableConsoleOutputToTerraform(struct?: ProcedurePythonParametersEnableConsoleOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function procedurePythonParametersEnableConsoleOutputToHclTerraform(struct?: ProcedurePythonParametersEnableConsoleOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProcedurePythonParametersEnableConsoleOutputOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProcedurePythonParametersEnableConsoleOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcedurePythonParametersEnableConsoleOutput | undefined) {
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

export class ProcedurePythonParametersEnableConsoleOutputList extends cdktf.ComplexList {

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
  public get(index: number): ProcedurePythonParametersEnableConsoleOutputOutputReference {
    return new ProcedurePythonParametersEnableConsoleOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProcedurePythonParametersLogLevel {
}

export function procedurePythonParametersLogLevelToTerraform(struct?: ProcedurePythonParametersLogLevel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function procedurePythonParametersLogLevelToHclTerraform(struct?: ProcedurePythonParametersLogLevel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProcedurePythonParametersLogLevelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProcedurePythonParametersLogLevel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcedurePythonParametersLogLevel | undefined) {
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

export class ProcedurePythonParametersLogLevelList extends cdktf.ComplexList {

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
  public get(index: number): ProcedurePythonParametersLogLevelOutputReference {
    return new ProcedurePythonParametersLogLevelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProcedurePythonParametersMetricLevel {
}

export function procedurePythonParametersMetricLevelToTerraform(struct?: ProcedurePythonParametersMetricLevel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function procedurePythonParametersMetricLevelToHclTerraform(struct?: ProcedurePythonParametersMetricLevel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProcedurePythonParametersMetricLevelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProcedurePythonParametersMetricLevel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcedurePythonParametersMetricLevel | undefined) {
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

export class ProcedurePythonParametersMetricLevelList extends cdktf.ComplexList {

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
  public get(index: number): ProcedurePythonParametersMetricLevelOutputReference {
    return new ProcedurePythonParametersMetricLevelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProcedurePythonParametersTraceLevel {
}

export function procedurePythonParametersTraceLevelToTerraform(struct?: ProcedurePythonParametersTraceLevel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function procedurePythonParametersTraceLevelToHclTerraform(struct?: ProcedurePythonParametersTraceLevel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProcedurePythonParametersTraceLevelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProcedurePythonParametersTraceLevel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcedurePythonParametersTraceLevel | undefined) {
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

export class ProcedurePythonParametersTraceLevelList extends cdktf.ComplexList {

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
  public get(index: number): ProcedurePythonParametersTraceLevelOutputReference {
    return new ProcedurePythonParametersTraceLevelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProcedurePythonParameters {
}

export function procedurePythonParametersToTerraform(struct?: ProcedurePythonParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function procedurePythonParametersToHclTerraform(struct?: ProcedurePythonParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProcedurePythonParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProcedurePythonParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcedurePythonParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable_console_output - computed: true, optional: false, required: false
  private _enableConsoleOutput = new ProcedurePythonParametersEnableConsoleOutputList(this, "enable_console_output", false);
  public get enableConsoleOutput() {
    return this._enableConsoleOutput;
  }

  // log_level - computed: true, optional: false, required: false
  private _logLevel = new ProcedurePythonParametersLogLevelList(this, "log_level", false);
  public get logLevel() {
    return this._logLevel;
  }

  // metric_level - computed: true, optional: false, required: false
  private _metricLevel = new ProcedurePythonParametersMetricLevelList(this, "metric_level", false);
  public get metricLevel() {
    return this._metricLevel;
  }

  // trace_level - computed: true, optional: false, required: false
  private _traceLevel = new ProcedurePythonParametersTraceLevelList(this, "trace_level", false);
  public get traceLevel() {
    return this._traceLevel;
  }
}

export class ProcedurePythonParametersList extends cdktf.ComplexList {

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
  public get(index: number): ProcedurePythonParametersOutputReference {
    return new ProcedurePythonParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProcedurePythonShowOutput {
}

export function procedurePythonShowOutputToTerraform(struct?: ProcedurePythonShowOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function procedurePythonShowOutputToHclTerraform(struct?: ProcedurePythonShowOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProcedurePythonShowOutputOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProcedurePythonShowOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcedurePythonShowOutput | undefined) {
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

  // is_secure - computed: true, optional: false, required: false
  public get isSecure() {
    return this.getBooleanAttribute('is_secure');
  }

  // is_table_function - computed: true, optional: false, required: false
  public get isTableFunction() {
    return this.getBooleanAttribute('is_table_function');
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

export class ProcedurePythonShowOutputList extends cdktf.ComplexList {

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
  public get(index: number): ProcedurePythonShowOutputOutputReference {
    return new ProcedurePythonShowOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProcedurePythonArguments {
  /**
  * The argument type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/procedure_python#arg_data_type ProcedurePython#arg_data_type}
  */
  readonly argDataType: string;
  /**
  * Optional default value for the argument. For text values use single quotes. Numeric values can be unquoted. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/procedure_python#arg_default_value ProcedurePython#arg_default_value}
  */
  readonly argDefaultValue?: string;
  /**
  * The argument name. The provider wraps it in double quotes by default, so be aware of that while referencing the argument in the procedure definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/procedure_python#arg_name ProcedurePython#arg_name}
  */
  readonly argName: string;
}

export function procedurePythonArgumentsToTerraform(struct?: ProcedurePythonArguments | cdktf.IResolvable): any {
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


export function procedurePythonArgumentsToHclTerraform(struct?: ProcedurePythonArguments | cdktf.IResolvable): any {
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

export class ProcedurePythonArgumentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProcedurePythonArguments | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ProcedurePythonArguments | cdktf.IResolvable | undefined) {
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

export class ProcedurePythonArgumentsList extends cdktf.ComplexList {
  public internalValue? : ProcedurePythonArguments[] | cdktf.IResolvable

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
  public get(index: number): ProcedurePythonArgumentsOutputReference {
    return new ProcedurePythonArgumentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProcedurePythonImports {
  /**
  * Path for import on stage, without the leading `/`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/procedure_python#path_on_stage ProcedurePython#path_on_stage}
  */
  readonly pathOnStage: string;
  /**
  * Stage location without leading `@`. To use your user's stage set this to `~`, otherwise pass fully qualified name of the stage (with every part contained in double quotes or use `snowflake_stage.<your stage's resource name>.fully_qualified_name` if you manage this stage through terraform).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/procedure_python#stage_location ProcedurePython#stage_location}
  */
  readonly stageLocation: string;
}

export function procedurePythonImportsToTerraform(struct?: ProcedurePythonImports | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path_on_stage: cdktf.stringToTerraform(struct!.pathOnStage),
    stage_location: cdktf.stringToTerraform(struct!.stageLocation),
  }
}


export function procedurePythonImportsToHclTerraform(struct?: ProcedurePythonImports | cdktf.IResolvable): any {
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

export class ProcedurePythonImportsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProcedurePythonImports | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ProcedurePythonImports | cdktf.IResolvable | undefined) {
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

export class ProcedurePythonImportsList extends cdktf.ComplexList {
  public internalValue? : ProcedurePythonImports[] | cdktf.IResolvable

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
  public get(index: number): ProcedurePythonImportsOutputReference {
    return new ProcedurePythonImportsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProcedurePythonSecrets {
  /**
  * Fully qualified name of the allowed [secret](https://docs.snowflake.com/en/sql-reference/sql/create-secret). You will receive an error if you specify a SECRETS value whose secret isn’t also included in an integration specified by the EXTERNAL_ACCESS_INTEGRATIONS parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/procedure_python#secret_id ProcedurePython#secret_id}
  */
  readonly secretId: string;
  /**
  * The variable that will be used in handler code when retrieving information from the secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/procedure_python#secret_variable_name ProcedurePython#secret_variable_name}
  */
  readonly secretVariableName: string;
}

export function procedurePythonSecretsToTerraform(struct?: ProcedurePythonSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_id: cdktf.stringToTerraform(struct!.secretId),
    secret_variable_name: cdktf.stringToTerraform(struct!.secretVariableName),
  }
}


export function procedurePythonSecretsToHclTerraform(struct?: ProcedurePythonSecrets | cdktf.IResolvable): any {
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

export class ProcedurePythonSecretsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProcedurePythonSecrets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ProcedurePythonSecrets | cdktf.IResolvable | undefined) {
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

export class ProcedurePythonSecretsList extends cdktf.ComplexList {
  public internalValue? : ProcedurePythonSecrets[] | cdktf.IResolvable

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
  public get(index: number): ProcedurePythonSecretsOutputReference {
    return new ProcedurePythonSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProcedurePythonTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/procedure_python#create ProcedurePython#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/procedure_python#delete ProcedurePython#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/procedure_python#read ProcedurePython#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/procedure_python#update ProcedurePython#update}
  */
  readonly update?: string;
}

export function procedurePythonTimeoutsToTerraform(struct?: ProcedurePythonTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function procedurePythonTimeoutsToHclTerraform(struct?: ProcedurePythonTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProcedurePythonTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ProcedurePythonTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcedurePythonTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/procedure_python snowflake_procedure_python}
*/
export class ProcedurePython extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_procedure_python";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProcedurePython resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProcedurePython to import
  * @param importFromId The id of the existing ProcedurePython that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/procedure_python#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProcedurePython to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_procedure_python", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/procedure_python snowflake_procedure_python} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProcedurePythonConfig
  */
  public constructor(scope: Construct, id: string, config: ProcedurePythonConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_procedure_python',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '2.10.0',
        providerVersionConstraint: ' ~> 2.0'
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
    this._executeAs = config.executeAs;
    this._externalAccessIntegrations = config.externalAccessIntegrations;
    this._handler = config.handler;
    this._id = config.id;
    this._isSecure = config.isSecure;
    this._logLevel = config.logLevel;
    this._metricLevel = config.metricLevel;
    this._name = config.name;
    this._nullInputBehavior = config.nullInputBehavior;
    this._packages = config.packages;
    this._procedureDefinition = config.procedureDefinition;
    this._returnType = config.returnType;
    this._runtimeVersion = config.runtimeVersion;
    this._schema = config.schema;
    this._snowparkPackage = config.snowparkPackage;
    this._traceLevel = config.traceLevel;
    this._arguments.internalValue = config.arguments;
    this._imports.internalValue = config.imports;
    this._secrets.internalValue = config.secrets;
    this._timeouts.internalValue = config.timeouts;
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

  // execute_as - computed: false, optional: true, required: false
  private _executeAs?: string; 
  public get executeAs() {
    return this.getStringAttribute('execute_as');
  }
  public set executeAs(value: string) {
    this._executeAs = value;
  }
  public resetExecuteAs() {
    this._executeAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executeAsInput() {
    return this._executeAs;
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
  private _parameters = new ProcedurePythonParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }

  // procedure_definition - computed: false, optional: true, required: false
  private _procedureDefinition?: string; 
  public get procedureDefinition() {
    return this.getStringAttribute('procedure_definition');
  }
  public set procedureDefinition(value: string) {
    this._procedureDefinition = value;
  }
  public resetProcedureDefinition() {
    this._procedureDefinition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get procedureDefinitionInput() {
    return this._procedureDefinition;
  }

  // procedure_language - computed: true, optional: false, required: false
  public get procedureLanguage() {
    return this.getStringAttribute('procedure_language');
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

  // runtime_version - computed: false, optional: false, required: true
  private _runtimeVersion?: string; 
  public get runtimeVersion() {
    return this.getStringAttribute('runtime_version');
  }
  public set runtimeVersion(value: string) {
    this._runtimeVersion = value;
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
  private _showOutput = new ProcedurePythonShowOutputList(this, "show_output", false);
  public get showOutput() {
    return this._showOutput;
  }

  // snowpark_package - computed: false, optional: false, required: true
  private _snowparkPackage?: string; 
  public get snowparkPackage() {
    return this.getStringAttribute('snowpark_package');
  }
  public set snowparkPackage(value: string) {
    this._snowparkPackage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snowparkPackageInput() {
    return this._snowparkPackage;
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
  private _arguments = new ProcedurePythonArgumentsList(this, "arguments", false);
  public get arguments() {
    return this._arguments;
  }
  public putArguments(value: ProcedurePythonArguments[] | cdktf.IResolvable) {
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
  private _imports = new ProcedurePythonImportsList(this, "imports", true);
  public get imports() {
    return this._imports;
  }
  public putImports(value: ProcedurePythonImports[] | cdktf.IResolvable) {
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
  private _secrets = new ProcedurePythonSecretsList(this, "secrets", true);
  public get secrets() {
    return this._secrets;
  }
  public putSecrets(value: ProcedurePythonSecrets[] | cdktf.IResolvable) {
    this._secrets.internalValue = value;
  }
  public resetSecrets() {
    this._secrets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsInput() {
    return this._secrets.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ProcedurePythonTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ProcedurePythonTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      database: cdktf.stringToTerraform(this._database),
      enable_console_output: cdktf.booleanToTerraform(this._enableConsoleOutput),
      execute_as: cdktf.stringToTerraform(this._executeAs),
      external_access_integrations: cdktf.listMapper(cdktf.stringToTerraform, false)(this._externalAccessIntegrations),
      handler: cdktf.stringToTerraform(this._handler),
      id: cdktf.stringToTerraform(this._id),
      is_secure: cdktf.stringToTerraform(this._isSecure),
      log_level: cdktf.stringToTerraform(this._logLevel),
      metric_level: cdktf.stringToTerraform(this._metricLevel),
      name: cdktf.stringToTerraform(this._name),
      null_input_behavior: cdktf.stringToTerraform(this._nullInputBehavior),
      packages: cdktf.listMapper(cdktf.stringToTerraform, false)(this._packages),
      procedure_definition: cdktf.stringToTerraform(this._procedureDefinition),
      return_type: cdktf.stringToTerraform(this._returnType),
      runtime_version: cdktf.stringToTerraform(this._runtimeVersion),
      schema: cdktf.stringToTerraform(this._schema),
      snowpark_package: cdktf.stringToTerraform(this._snowparkPackage),
      trace_level: cdktf.stringToTerraform(this._traceLevel),
      arguments: cdktf.listMapper(procedurePythonArgumentsToTerraform, true)(this._arguments.internalValue),
      imports: cdktf.listMapper(procedurePythonImportsToTerraform, true)(this._imports.internalValue),
      secrets: cdktf.listMapper(procedurePythonSecretsToTerraform, true)(this._secrets.internalValue),
      timeouts: procedurePythonTimeoutsToTerraform(this._timeouts.internalValue),
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
      execute_as: {
        value: cdktf.stringToHclTerraform(this._executeAs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_access_integrations: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._externalAccessIntegrations),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      procedure_definition: {
        value: cdktf.stringToHclTerraform(this._procedureDefinition),
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
      snowpark_package: {
        value: cdktf.stringToHclTerraform(this._snowparkPackage),
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
        value: cdktf.listMapperHcl(procedurePythonArgumentsToHclTerraform, true)(this._arguments.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProcedurePythonArgumentsList",
      },
      imports: {
        value: cdktf.listMapperHcl(procedurePythonImportsToHclTerraform, true)(this._imports.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ProcedurePythonImportsList",
      },
      secrets: {
        value: cdktf.listMapperHcl(procedurePythonSecretsToHclTerraform, true)(this._secrets.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ProcedurePythonSecretsList",
      },
      timeouts: {
        value: procedurePythonTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ProcedurePythonTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
