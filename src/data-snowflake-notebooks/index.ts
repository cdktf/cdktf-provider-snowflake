/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/data-sources/notebooks
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSnowflakeNotebooksConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/data-sources/notebooks#id DataSnowflakeNotebooks#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/data-sources/notebooks#like DataSnowflakeNotebooks#like}
  */
  readonly like?: string;
  /**
  * Filters the output with **case-sensitive** characters indicating the beginning of the object name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/data-sources/notebooks#starts_with DataSnowflakeNotebooks#starts_with}
  */
  readonly startsWith?: string;
  /**
  * (Default: `true`) Runs DESC NOTEBOOK for each notebook returned by SHOW NOTEBOOKS. The output of describe is saved to the description field. By default this value is set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/data-sources/notebooks#with_describe DataSnowflakeNotebooks#with_describe}
  */
  readonly withDescribe?: boolean | cdktf.IResolvable;
  /**
  * limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/data-sources/notebooks#limit DataSnowflakeNotebooks#limit}
  */
  readonly limit?: DataSnowflakeNotebooksLimit;
}
export interface DataSnowflakeNotebooksNotebooksDescribeOutput {
}

export function dataSnowflakeNotebooksNotebooksDescribeOutputToTerraform(struct?: DataSnowflakeNotebooksNotebooksDescribeOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSnowflakeNotebooksNotebooksDescribeOutputToHclTerraform(struct?: DataSnowflakeNotebooksNotebooksDescribeOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeNotebooksNotebooksDescribeOutputOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSnowflakeNotebooksNotebooksDescribeOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeNotebooksNotebooksDescribeOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code_warehouse - computed: true, optional: false, required: false
  public get codeWarehouse() {
    return this.getStringAttribute('code_warehouse');
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // compute_pool - computed: true, optional: false, required: false
  public get computePool() {
    return this.getStringAttribute('compute_pool');
  }

  // default_packages - computed: true, optional: false, required: false
  public get defaultPackages() {
    return this.getStringAttribute('default_packages');
  }

  // default_version - computed: true, optional: false, required: false
  public get defaultVersion() {
    return this.getStringAttribute('default_version');
  }

  // default_version_alias - computed: true, optional: false, required: false
  public get defaultVersionAlias() {
    return this.getStringAttribute('default_version_alias');
  }

  // default_version_git_commit_hash - computed: true, optional: false, required: false
  public get defaultVersionGitCommitHash() {
    return this.getStringAttribute('default_version_git_commit_hash');
  }

  // default_version_location_uri - computed: true, optional: false, required: false
  public get defaultVersionLocationUri() {
    return this.getStringAttribute('default_version_location_uri');
  }

  // default_version_name - computed: true, optional: false, required: false
  public get defaultVersionName() {
    return this.getStringAttribute('default_version_name');
  }

  // default_version_source_location_uri - computed: true, optional: false, required: false
  public get defaultVersionSourceLocationUri() {
    return this.getStringAttribute('default_version_source_location_uri');
  }

  // external_access_integrations - computed: true, optional: false, required: false
  public get externalAccessIntegrations() {
    return this.getStringAttribute('external_access_integrations');
  }

  // external_access_secrets - computed: true, optional: false, required: false
  public get externalAccessSecrets() {
    return this.getStringAttribute('external_access_secrets');
  }

  // idle_auto_shutdown_time_seconds - computed: true, optional: false, required: false
  public get idleAutoShutdownTimeSeconds() {
    return this.getNumberAttribute('idle_auto_shutdown_time_seconds');
  }

  // import_urls - computed: true, optional: false, required: false
  public get importUrls() {
    return this.getStringAttribute('import_urls');
  }

  // last_version_alias - computed: true, optional: false, required: false
  public get lastVersionAlias() {
    return this.getStringAttribute('last_version_alias');
  }

  // last_version_git_commit_hash - computed: true, optional: false, required: false
  public get lastVersionGitCommitHash() {
    return this.getStringAttribute('last_version_git_commit_hash');
  }

  // last_version_location_uri - computed: true, optional: false, required: false
  public get lastVersionLocationUri() {
    return this.getStringAttribute('last_version_location_uri');
  }

  // last_version_name - computed: true, optional: false, required: false
  public get lastVersionName() {
    return this.getStringAttribute('last_version_name');
  }

  // last_version_source_location_uri - computed: true, optional: false, required: false
  public get lastVersionSourceLocationUri() {
    return this.getStringAttribute('last_version_source_location_uri');
  }

  // live_version_location_uri - computed: true, optional: false, required: false
  public get liveVersionLocationUri() {
    return this.getStringAttribute('live_version_location_uri');
  }

  // main_file - computed: true, optional: false, required: false
  public get mainFile() {
    return this.getStringAttribute('main_file');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // query_warehouse - computed: true, optional: false, required: false
  public get queryWarehouse() {
    return this.getStringAttribute('query_warehouse');
  }

  // runtime_environment_version - computed: true, optional: false, required: false
  public get runtimeEnvironmentVersion() {
    return this.getStringAttribute('runtime_environment_version');
  }

  // runtime_name - computed: true, optional: false, required: false
  public get runtimeName() {
    return this.getStringAttribute('runtime_name');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }

  // url_id - computed: true, optional: false, required: false
  public get urlId() {
    return this.getStringAttribute('url_id');
  }

  // user_packages - computed: true, optional: false, required: false
  public get userPackages() {
    return this.getStringAttribute('user_packages');
  }
}

export class DataSnowflakeNotebooksNotebooksDescribeOutputList extends cdktf.ComplexList {

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
  public get(index: number): DataSnowflakeNotebooksNotebooksDescribeOutputOutputReference {
    return new DataSnowflakeNotebooksNotebooksDescribeOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeNotebooksNotebooksShowOutput {
}

export function dataSnowflakeNotebooksNotebooksShowOutputToTerraform(struct?: DataSnowflakeNotebooksNotebooksShowOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSnowflakeNotebooksNotebooksShowOutputToHclTerraform(struct?: DataSnowflakeNotebooksNotebooksShowOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeNotebooksNotebooksShowOutputOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSnowflakeNotebooksNotebooksShowOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeNotebooksNotebooksShowOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code_warehouse - computed: true, optional: false, required: false
  public get codeWarehouse() {
    return this.getStringAttribute('code_warehouse');
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // database_name - computed: true, optional: false, required: false
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // owner_role_type - computed: true, optional: false, required: false
  public get ownerRoleType() {
    return this.getStringAttribute('owner_role_type');
  }

  // query_warehouse - computed: true, optional: false, required: false
  public get queryWarehouse() {
    return this.getStringAttribute('query_warehouse');
  }

  // schema_name - computed: true, optional: false, required: false
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }

  // url_id - computed: true, optional: false, required: false
  public get urlId() {
    return this.getStringAttribute('url_id');
  }
}

export class DataSnowflakeNotebooksNotebooksShowOutputList extends cdktf.ComplexList {

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
  public get(index: number): DataSnowflakeNotebooksNotebooksShowOutputOutputReference {
    return new DataSnowflakeNotebooksNotebooksShowOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeNotebooksNotebooks {
}

export function dataSnowflakeNotebooksNotebooksToTerraform(struct?: DataSnowflakeNotebooksNotebooks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSnowflakeNotebooksNotebooksToHclTerraform(struct?: DataSnowflakeNotebooksNotebooks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeNotebooksNotebooksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSnowflakeNotebooksNotebooks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeNotebooksNotebooks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // describe_output - computed: true, optional: false, required: false
  private _describeOutput = new DataSnowflakeNotebooksNotebooksDescribeOutputList(this, "describe_output", false);
  public get describeOutput() {
    return this._describeOutput;
  }

  // show_output - computed: true, optional: false, required: false
  private _showOutput = new DataSnowflakeNotebooksNotebooksShowOutputList(this, "show_output", false);
  public get showOutput() {
    return this._showOutput;
  }
}

export class DataSnowflakeNotebooksNotebooksList extends cdktf.ComplexList {

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
  public get(index: number): DataSnowflakeNotebooksNotebooksOutputReference {
    return new DataSnowflakeNotebooksNotebooksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeNotebooksLimit {
  /**
  * Specifies a **case-sensitive** pattern that is used to match object name. After the first match, the limit on the number of rows will be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/data-sources/notebooks#from DataSnowflakeNotebooks#from}
  */
  readonly from?: string;
  /**
  * The maximum number of rows to return.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/data-sources/notebooks#rows DataSnowflakeNotebooks#rows}
  */
  readonly rows: number;
}

export function dataSnowflakeNotebooksLimitToTerraform(struct?: DataSnowflakeNotebooksLimitOutputReference | DataSnowflakeNotebooksLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.stringToTerraform(struct!.from),
    rows: cdktf.numberToTerraform(struct!.rows),
  }
}


export function dataSnowflakeNotebooksLimitToHclTerraform(struct?: DataSnowflakeNotebooksLimitOutputReference | DataSnowflakeNotebooksLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: cdktf.stringToHclTerraform(struct!.from),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rows: {
      value: cdktf.numberToHclTerraform(struct!.rows),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSnowflakeNotebooksLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataSnowflakeNotebooksLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._rows !== undefined) {
      hasAnyValues = true;
      internalValueResult.rows = this._rows;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeNotebooksLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._from = undefined;
      this._rows = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._from = value.from;
      this._rows = value.rows;
    }
  }

  // from - computed: false, optional: true, required: false
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  public resetFrom() {
    this._from = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // rows - computed: false, optional: false, required: true
  private _rows?: number; 
  public get rows() {
    return this.getNumberAttribute('rows');
  }
  public set rows(value: number) {
    this._rows = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rowsInput() {
    return this._rows;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/data-sources/notebooks snowflake_notebooks}
*/
export class DataSnowflakeNotebooks extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_notebooks";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSnowflakeNotebooks resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSnowflakeNotebooks to import
  * @param importFromId The id of the existing DataSnowflakeNotebooks that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/data-sources/notebooks#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSnowflakeNotebooks to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_notebooks", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/data-sources/notebooks snowflake_notebooks} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSnowflakeNotebooksConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSnowflakeNotebooksConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'snowflake_notebooks',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '2.11.0',
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
    this._id = config.id;
    this._like = config.like;
    this._startsWith = config.startsWith;
    this._withDescribe = config.withDescribe;
    this._limit.internalValue = config.limit;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // like - computed: false, optional: true, required: false
  private _like?: string; 
  public get like() {
    return this.getStringAttribute('like');
  }
  public set like(value: string) {
    this._like = value;
  }
  public resetLike() {
    this._like = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get likeInput() {
    return this._like;
  }

  // notebooks - computed: true, optional: false, required: false
  private _notebooks = new DataSnowflakeNotebooksNotebooksList(this, "notebooks", false);
  public get notebooks() {
    return this._notebooks;
  }

  // starts_with - computed: false, optional: true, required: false
  private _startsWith?: string; 
  public get startsWith() {
    return this.getStringAttribute('starts_with');
  }
  public set startsWith(value: string) {
    this._startsWith = value;
  }
  public resetStartsWith() {
    this._startsWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startsWithInput() {
    return this._startsWith;
  }

  // with_describe - computed: false, optional: true, required: false
  private _withDescribe?: boolean | cdktf.IResolvable; 
  public get withDescribe() {
    return this.getBooleanAttribute('with_describe');
  }
  public set withDescribe(value: boolean | cdktf.IResolvable) {
    this._withDescribe = value;
  }
  public resetWithDescribe() {
    this._withDescribe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withDescribeInput() {
    return this._withDescribe;
  }

  // limit - computed: false, optional: true, required: false
  private _limit = new DataSnowflakeNotebooksLimitOutputReference(this, "limit");
  public get limit() {
    return this._limit;
  }
  public putLimit(value: DataSnowflakeNotebooksLimit) {
    this._limit.internalValue = value;
  }
  public resetLimit() {
    this._limit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      like: cdktf.stringToTerraform(this._like),
      starts_with: cdktf.stringToTerraform(this._startsWith),
      with_describe: cdktf.booleanToTerraform(this._withDescribe),
      limit: dataSnowflakeNotebooksLimitToTerraform(this._limit.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      like: {
        value: cdktf.stringToHclTerraform(this._like),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      starts_with: {
        value: cdktf.stringToHclTerraform(this._startsWith),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      with_describe: {
        value: cdktf.booleanToHclTerraform(this._withDescribe),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      limit: {
        value: dataSnowflakeNotebooksLimitToHclTerraform(this._limit.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSnowflakeNotebooksLimitList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
