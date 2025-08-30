/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/snowflakedb/snowflake/2.6.0/docs/data-sources/streams
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSnowflakeStreamsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.6.0/docs/data-sources/streams#id DataSnowflakeStreams#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.6.0/docs/data-sources/streams#like DataSnowflakeStreams#like}
  */
  readonly like?: string;
  /**
  * Filters the output with **case-sensitive** characters indicating the beginning of the object name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.6.0/docs/data-sources/streams#starts_with DataSnowflakeStreams#starts_with}
  */
  readonly startsWith?: string;
  /**
  * (Default: `true`) Runs DESC STREAM for each user returned by SHOW STREAMS. The output of describe is saved to the description field. By default this value is set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.6.0/docs/data-sources/streams#with_describe DataSnowflakeStreams#with_describe}
  */
  readonly withDescribe?: boolean | cdktf.IResolvable;
  /**
  * in block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.6.0/docs/data-sources/streams#in DataSnowflakeStreams#in}
  */
  readonly in?: DataSnowflakeStreamsIn;
  /**
  * limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.6.0/docs/data-sources/streams#limit DataSnowflakeStreams#limit}
  */
  readonly limit?: DataSnowflakeStreamsLimit;
}
export interface DataSnowflakeStreamsStreamsDescribeOutput {
}

export function dataSnowflakeStreamsStreamsDescribeOutputToTerraform(struct?: DataSnowflakeStreamsStreamsDescribeOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSnowflakeStreamsStreamsDescribeOutputToHclTerraform(struct?: DataSnowflakeStreamsStreamsDescribeOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeStreamsStreamsDescribeOutputOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSnowflakeStreamsStreamsDescribeOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeStreamsStreamsDescribeOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // base_tables - computed: true, optional: false, required: false
  public get baseTables() {
    return this.getListAttribute('base_tables');
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

  // invalid_reason - computed: true, optional: false, required: false
  public get invalidReason() {
    return this.getStringAttribute('invalid_reason');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
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

  // schema_name - computed: true, optional: false, required: false
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }

  // source_type - computed: true, optional: false, required: false
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }

  // stale - computed: true, optional: false, required: false
  public get stale() {
    return this.getBooleanAttribute('stale');
  }

  // stale_after - computed: true, optional: false, required: false
  public get staleAfter() {
    return this.getStringAttribute('stale_after');
  }

  // table_name - computed: true, optional: false, required: false
  public get tableName() {
    return this.getStringAttribute('table_name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataSnowflakeStreamsStreamsDescribeOutputList extends cdktf.ComplexList {

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
  public get(index: number): DataSnowflakeStreamsStreamsDescribeOutputOutputReference {
    return new DataSnowflakeStreamsStreamsDescribeOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeStreamsStreamsShowOutput {
}

export function dataSnowflakeStreamsStreamsShowOutputToTerraform(struct?: DataSnowflakeStreamsStreamsShowOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSnowflakeStreamsStreamsShowOutputToHclTerraform(struct?: DataSnowflakeStreamsStreamsShowOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeStreamsStreamsShowOutputOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSnowflakeStreamsStreamsShowOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeStreamsStreamsShowOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // base_tables - computed: true, optional: false, required: false
  public get baseTables() {
    return this.getListAttribute('base_tables');
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

  // invalid_reason - computed: true, optional: false, required: false
  public get invalidReason() {
    return this.getStringAttribute('invalid_reason');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
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

  // schema_name - computed: true, optional: false, required: false
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }

  // source_type - computed: true, optional: false, required: false
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }

  // stale - computed: true, optional: false, required: false
  public get stale() {
    return this.getBooleanAttribute('stale');
  }

  // stale_after - computed: true, optional: false, required: false
  public get staleAfter() {
    return this.getStringAttribute('stale_after');
  }

  // table_name - computed: true, optional: false, required: false
  public get tableName() {
    return this.getStringAttribute('table_name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataSnowflakeStreamsStreamsShowOutputList extends cdktf.ComplexList {

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
  public get(index: number): DataSnowflakeStreamsStreamsShowOutputOutputReference {
    return new DataSnowflakeStreamsStreamsShowOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeStreamsStreams {
}

export function dataSnowflakeStreamsStreamsToTerraform(struct?: DataSnowflakeStreamsStreams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSnowflakeStreamsStreamsToHclTerraform(struct?: DataSnowflakeStreamsStreams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeStreamsStreamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSnowflakeStreamsStreams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeStreamsStreams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // describe_output - computed: true, optional: false, required: false
  private _describeOutput = new DataSnowflakeStreamsStreamsDescribeOutputList(this, "describe_output", false);
  public get describeOutput() {
    return this._describeOutput;
  }

  // show_output - computed: true, optional: false, required: false
  private _showOutput = new DataSnowflakeStreamsStreamsShowOutputList(this, "show_output", false);
  public get showOutput() {
    return this._showOutput;
  }
}

export class DataSnowflakeStreamsStreamsList extends cdktf.ComplexList {

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
  public get(index: number): DataSnowflakeStreamsStreamsOutputReference {
    return new DataSnowflakeStreamsStreamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeStreamsIn {
  /**
  * Returns records for the entire account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.6.0/docs/data-sources/streams#account DataSnowflakeStreams#account}
  */
  readonly account?: boolean | cdktf.IResolvable;
  /**
  * Returns records for the specified application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.6.0/docs/data-sources/streams#application DataSnowflakeStreams#application}
  */
  readonly application?: string;
  /**
  * Returns records for the specified application package.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.6.0/docs/data-sources/streams#application_package DataSnowflakeStreams#application_package}
  */
  readonly applicationPackage?: string;
  /**
  * Returns records for the current database in use or for a specified database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.6.0/docs/data-sources/streams#database DataSnowflakeStreams#database}
  */
  readonly database?: string;
  /**
  * Returns records for the current schema in use or a specified schema. Use fully qualified name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.6.0/docs/data-sources/streams#schema DataSnowflakeStreams#schema}
  */
  readonly schema?: string;
}

export function dataSnowflakeStreamsInToTerraform(struct?: DataSnowflakeStreamsInOutputReference | DataSnowflakeStreamsIn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account: cdktf.booleanToTerraform(struct!.account),
    application: cdktf.stringToTerraform(struct!.application),
    application_package: cdktf.stringToTerraform(struct!.applicationPackage),
    database: cdktf.stringToTerraform(struct!.database),
    schema: cdktf.stringToTerraform(struct!.schema),
  }
}


export function dataSnowflakeStreamsInToHclTerraform(struct?: DataSnowflakeStreamsInOutputReference | DataSnowflakeStreamsIn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account: {
      value: cdktf.booleanToHclTerraform(struct!.account),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    application: {
      value: cdktf.stringToHclTerraform(struct!.application),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    application_package: {
      value: cdktf.stringToHclTerraform(struct!.applicationPackage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database: {
      value: cdktf.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema: {
      value: cdktf.stringToHclTerraform(struct!.schema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSnowflakeStreamsInOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataSnowflakeStreamsIn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._account !== undefined) {
      hasAnyValues = true;
      internalValueResult.account = this._account;
    }
    if (this._application !== undefined) {
      hasAnyValues = true;
      internalValueResult.application = this._application;
    }
    if (this._applicationPackage !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationPackage = this._applicationPackage;
    }
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeStreamsIn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._account = undefined;
      this._application = undefined;
      this._applicationPackage = undefined;
      this._database = undefined;
      this._schema = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._account = value.account;
      this._application = value.application;
      this._applicationPackage = value.applicationPackage;
      this._database = value.database;
      this._schema = value.schema;
    }
  }

  // account - computed: false, optional: true, required: false
  private _account?: boolean | cdktf.IResolvable; 
  public get account() {
    return this.getBooleanAttribute('account');
  }
  public set account(value: boolean | cdktf.IResolvable) {
    this._account = value;
  }
  public resetAccount() {
    this._account = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInput() {
    return this._account;
  }

  // application - computed: false, optional: true, required: false
  private _application?: string; 
  public get application() {
    return this.getStringAttribute('application');
  }
  public set application(value: string) {
    this._application = value;
  }
  public resetApplication() {
    this._application = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInput() {
    return this._application;
  }

  // application_package - computed: false, optional: true, required: false
  private _applicationPackage?: string; 
  public get applicationPackage() {
    return this.getStringAttribute('application_package');
  }
  public set applicationPackage(value: string) {
    this._applicationPackage = value;
  }
  public resetApplicationPackage() {
    this._applicationPackage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationPackageInput() {
    return this._applicationPackage;
  }

  // database - computed: false, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // schema - computed: false, optional: true, required: false
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  public resetSchema() {
    this._schema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }
}
export interface DataSnowflakeStreamsLimit {
  /**
  * Specifies a **case-sensitive** pattern that is used to match object name. After the first match, the limit on the number of rows will be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.6.0/docs/data-sources/streams#from DataSnowflakeStreams#from}
  */
  readonly from?: string;
  /**
  * The maximum number of rows to return.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.6.0/docs/data-sources/streams#rows DataSnowflakeStreams#rows}
  */
  readonly rows: number;
}

export function dataSnowflakeStreamsLimitToTerraform(struct?: DataSnowflakeStreamsLimitOutputReference | DataSnowflakeStreamsLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.stringToTerraform(struct!.from),
    rows: cdktf.numberToTerraform(struct!.rows),
  }
}


export function dataSnowflakeStreamsLimitToHclTerraform(struct?: DataSnowflakeStreamsLimitOutputReference | DataSnowflakeStreamsLimit): any {
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

export class DataSnowflakeStreamsLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataSnowflakeStreamsLimit | undefined {
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

  public set internalValue(value: DataSnowflakeStreamsLimit | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.6.0/docs/data-sources/streams snowflake_streams}
*/
export class DataSnowflakeStreams extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_streams";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSnowflakeStreams resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSnowflakeStreams to import
  * @param importFromId The id of the existing DataSnowflakeStreams that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.6.0/docs/data-sources/streams#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSnowflakeStreams to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_streams", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.6.0/docs/data-sources/streams snowflake_streams} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSnowflakeStreamsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSnowflakeStreamsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'snowflake_streams',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '2.6.0',
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
    this._in.internalValue = config.in;
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

  // streams - computed: true, optional: false, required: false
  private _streams = new DataSnowflakeStreamsStreamsList(this, "streams", false);
  public get streams() {
    return this._streams;
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

  // in - computed: false, optional: true, required: false
  private _in = new DataSnowflakeStreamsInOutputReference(this, "in");
  public get in() {
    return this._in;
  }
  public putIn(value: DataSnowflakeStreamsIn) {
    this._in.internalValue = value;
  }
  public resetIn() {
    this._in.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inInput() {
    return this._in.internalValue;
  }

  // limit - computed: false, optional: true, required: false
  private _limit = new DataSnowflakeStreamsLimitOutputReference(this, "limit");
  public get limit() {
    return this._limit;
  }
  public putLimit(value: DataSnowflakeStreamsLimit) {
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
      in: dataSnowflakeStreamsInToTerraform(this._in.internalValue),
      limit: dataSnowflakeStreamsLimitToTerraform(this._limit.internalValue),
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
      in: {
        value: dataSnowflakeStreamsInToHclTerraform(this._in.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSnowflakeStreamsInList",
      },
      limit: {
        value: dataSnowflakeStreamsLimitToHclTerraform(this._limit.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSnowflakeStreamsLimitList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
