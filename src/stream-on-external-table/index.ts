/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/snowflakedb/snowflake/2.6.0/docs/resources/stream_on_external_table
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StreamOnExternalTableConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies a comment for the stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.6.0/docs/resources/stream_on_external_table#comment StreamOnExternalTable#comment}
  */
  readonly comment?: string;
  /**
  * (Default: `false`) Retains the access permissions from the original stream when a stream is recreated using the OR REPLACE clause. This is used when the provider detects changes for fields that can not be changed by ALTER. This value will not have any effect during creating a new object with Terraform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.6.0/docs/resources/stream_on_external_table#copy_grants StreamOnExternalTable#copy_grants}
  */
  readonly copyGrants?: boolean | cdktf.IResolvable;
  /**
  * The database in which to create the stream. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.6.0/docs/resources/stream_on_external_table#database StreamOnExternalTable#database}
  */
  readonly database: string;
  /**
  * Specifies an identifier for the external table the stream will monitor. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`. For more information about this resource, see [docs](./external_table).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.6.0/docs/resources/stream_on_external_table#external_table StreamOnExternalTable#external_table}
  */
  readonly externalTable: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.6.0/docs/resources/stream_on_external_table#id StreamOnExternalTable#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether this is an insert-only stream. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.6.0/docs/resources/stream_on_external_table#insert_only StreamOnExternalTable#insert_only}
  */
  readonly insertOnly?: string;
  /**
  * Specifies the identifier for the stream; must be unique for the database and schema in which the stream is created. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.6.0/docs/resources/stream_on_external_table#name StreamOnExternalTable#name}
  */
  readonly name: string;
  /**
  * The schema in which to create the stream. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.6.0/docs/resources/stream_on_external_table#schema StreamOnExternalTable#schema}
  */
  readonly schema: string;
  /**
  * at block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.6.0/docs/resources/stream_on_external_table#at StreamOnExternalTable#at}
  */
  readonly at?: StreamOnExternalTableAt;
  /**
  * before block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.6.0/docs/resources/stream_on_external_table#before StreamOnExternalTable#before}
  */
  readonly before?: StreamOnExternalTableBefore;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.6.0/docs/resources/stream_on_external_table#timeouts StreamOnExternalTable#timeouts}
  */
  readonly timeouts?: StreamOnExternalTableTimeouts;
}
export interface StreamOnExternalTableDescribeOutput {
}

export function streamOnExternalTableDescribeOutputToTerraform(struct?: StreamOnExternalTableDescribeOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function streamOnExternalTableDescribeOutputToHclTerraform(struct?: StreamOnExternalTableDescribeOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class StreamOnExternalTableDescribeOutputOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StreamOnExternalTableDescribeOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StreamOnExternalTableDescribeOutput | undefined) {
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

export class StreamOnExternalTableDescribeOutputList extends cdktf.ComplexList {

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
  public get(index: number): StreamOnExternalTableDescribeOutputOutputReference {
    return new StreamOnExternalTableDescribeOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StreamOnExternalTableShowOutput {
}

export function streamOnExternalTableShowOutputToTerraform(struct?: StreamOnExternalTableShowOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function streamOnExternalTableShowOutputToHclTerraform(struct?: StreamOnExternalTableShowOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class StreamOnExternalTableShowOutputOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StreamOnExternalTableShowOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StreamOnExternalTableShowOutput | undefined) {
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

export class StreamOnExternalTableShowOutputList extends cdktf.ComplexList {

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
  public get(index: number): StreamOnExternalTableShowOutputOutputReference {
    return new StreamOnExternalTableShowOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StreamOnExternalTableAt {
  /**
  * Specifies the difference in seconds from the current time to use for Time Travel, in the form -N where N can be an integer or arithmetic expression (e.g. -120 is 120 seconds, -30*60 is 1800 seconds or 30 minutes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.6.0/docs/resources/stream_on_external_table#offset StreamOnExternalTable#offset}
  */
  readonly offset?: string;
  /**
  * Specifies the query ID of a statement to use as the reference point for Time Travel. This parameter supports any statement of one of the following types: DML (e.g. INSERT, UPDATE, DELETE), TCL (BEGIN, COMMIT transaction), SELECT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.6.0/docs/resources/stream_on_external_table#statement StreamOnExternalTable#statement}
  */
  readonly statement?: string;
  /**
  * Specifies the identifier (i.e. name) for an existing stream on the queried table or view. The current offset in the stream is used as the AT point in time for returning change data for the source object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.6.0/docs/resources/stream_on_external_table#stream StreamOnExternalTable#stream}
  */
  readonly stream?: string;
  /**
  * Specifies an exact date and time to use for Time Travel. The value must be explicitly cast to a TIMESTAMP, TIMESTAMP_LTZ, TIMESTAMP_NTZ, or TIMESTAMP_TZ data type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.6.0/docs/resources/stream_on_external_table#timestamp StreamOnExternalTable#timestamp}
  */
  readonly timestamp?: string;
}

export function streamOnExternalTableAtToTerraform(struct?: StreamOnExternalTableAtOutputReference | StreamOnExternalTableAt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    offset: cdktf.stringToTerraform(struct!.offset),
    statement: cdktf.stringToTerraform(struct!.statement),
    stream: cdktf.stringToTerraform(struct!.stream),
    timestamp: cdktf.stringToTerraform(struct!.timestamp),
  }
}


export function streamOnExternalTableAtToHclTerraform(struct?: StreamOnExternalTableAtOutputReference | StreamOnExternalTableAt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    offset: {
      value: cdktf.stringToHclTerraform(struct!.offset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    statement: {
      value: cdktf.stringToHclTerraform(struct!.statement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stream: {
      value: cdktf.stringToHclTerraform(struct!.stream),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timestamp: {
      value: cdktf.stringToHclTerraform(struct!.timestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StreamOnExternalTableAtOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StreamOnExternalTableAt | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._offset !== undefined) {
      hasAnyValues = true;
      internalValueResult.offset = this._offset;
    }
    if (this._statement !== undefined) {
      hasAnyValues = true;
      internalValueResult.statement = this._statement;
    }
    if (this._stream !== undefined) {
      hasAnyValues = true;
      internalValueResult.stream = this._stream;
    }
    if (this._timestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestamp = this._timestamp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StreamOnExternalTableAt | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._offset = undefined;
      this._statement = undefined;
      this._stream = undefined;
      this._timestamp = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._offset = value.offset;
      this._statement = value.statement;
      this._stream = value.stream;
      this._timestamp = value.timestamp;
    }
  }

  // offset - computed: false, optional: true, required: false
  private _offset?: string; 
  public get offset() {
    return this.getStringAttribute('offset');
  }
  public set offset(value: string) {
    this._offset = value;
  }
  public resetOffset() {
    this._offset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
  }

  // statement - computed: false, optional: true, required: false
  private _statement?: string; 
  public get statement() {
    return this.getStringAttribute('statement');
  }
  public set statement(value: string) {
    this._statement = value;
  }
  public resetStatement() {
    this._statement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statementInput() {
    return this._statement;
  }

  // stream - computed: false, optional: true, required: false
  private _stream?: string; 
  public get stream() {
    return this.getStringAttribute('stream');
  }
  public set stream(value: string) {
    this._stream = value;
  }
  public resetStream() {
    this._stream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamInput() {
    return this._stream;
  }

  // timestamp - computed: false, optional: true, required: false
  private _timestamp?: string; 
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }
  public set timestamp(value: string) {
    this._timestamp = value;
  }
  public resetTimestamp() {
    this._timestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampInput() {
    return this._timestamp;
  }
}
export interface StreamOnExternalTableBefore {
  /**
  * Specifies the difference in seconds from the current time to use for Time Travel, in the form -N where N can be an integer or arithmetic expression (e.g. -120 is 120 seconds, -30*60 is 1800 seconds or 30 minutes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.6.0/docs/resources/stream_on_external_table#offset StreamOnExternalTable#offset}
  */
  readonly offset?: string;
  /**
  * Specifies the query ID of a statement to use as the reference point for Time Travel. This parameter supports any statement of one of the following types: DML (e.g. INSERT, UPDATE, DELETE), TCL (BEGIN, COMMIT transaction), SELECT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.6.0/docs/resources/stream_on_external_table#statement StreamOnExternalTable#statement}
  */
  readonly statement?: string;
  /**
  * Specifies the identifier (i.e. name) for an existing stream on the queried table or view. The current offset in the stream is used as the AT point in time for returning change data for the source object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.6.0/docs/resources/stream_on_external_table#stream StreamOnExternalTable#stream}
  */
  readonly stream?: string;
  /**
  * Specifies an exact date and time to use for Time Travel. The value must be explicitly cast to a TIMESTAMP, TIMESTAMP_LTZ, TIMESTAMP_NTZ, or TIMESTAMP_TZ data type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.6.0/docs/resources/stream_on_external_table#timestamp StreamOnExternalTable#timestamp}
  */
  readonly timestamp?: string;
}

export function streamOnExternalTableBeforeToTerraform(struct?: StreamOnExternalTableBeforeOutputReference | StreamOnExternalTableBefore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    offset: cdktf.stringToTerraform(struct!.offset),
    statement: cdktf.stringToTerraform(struct!.statement),
    stream: cdktf.stringToTerraform(struct!.stream),
    timestamp: cdktf.stringToTerraform(struct!.timestamp),
  }
}


export function streamOnExternalTableBeforeToHclTerraform(struct?: StreamOnExternalTableBeforeOutputReference | StreamOnExternalTableBefore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    offset: {
      value: cdktf.stringToHclTerraform(struct!.offset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    statement: {
      value: cdktf.stringToHclTerraform(struct!.statement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stream: {
      value: cdktf.stringToHclTerraform(struct!.stream),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timestamp: {
      value: cdktf.stringToHclTerraform(struct!.timestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StreamOnExternalTableBeforeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StreamOnExternalTableBefore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._offset !== undefined) {
      hasAnyValues = true;
      internalValueResult.offset = this._offset;
    }
    if (this._statement !== undefined) {
      hasAnyValues = true;
      internalValueResult.statement = this._statement;
    }
    if (this._stream !== undefined) {
      hasAnyValues = true;
      internalValueResult.stream = this._stream;
    }
    if (this._timestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestamp = this._timestamp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StreamOnExternalTableBefore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._offset = undefined;
      this._statement = undefined;
      this._stream = undefined;
      this._timestamp = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._offset = value.offset;
      this._statement = value.statement;
      this._stream = value.stream;
      this._timestamp = value.timestamp;
    }
  }

  // offset - computed: false, optional: true, required: false
  private _offset?: string; 
  public get offset() {
    return this.getStringAttribute('offset');
  }
  public set offset(value: string) {
    this._offset = value;
  }
  public resetOffset() {
    this._offset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
  }

  // statement - computed: false, optional: true, required: false
  private _statement?: string; 
  public get statement() {
    return this.getStringAttribute('statement');
  }
  public set statement(value: string) {
    this._statement = value;
  }
  public resetStatement() {
    this._statement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statementInput() {
    return this._statement;
  }

  // stream - computed: false, optional: true, required: false
  private _stream?: string; 
  public get stream() {
    return this.getStringAttribute('stream');
  }
  public set stream(value: string) {
    this._stream = value;
  }
  public resetStream() {
    this._stream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamInput() {
    return this._stream;
  }

  // timestamp - computed: false, optional: true, required: false
  private _timestamp?: string; 
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }
  public set timestamp(value: string) {
    this._timestamp = value;
  }
  public resetTimestamp() {
    this._timestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampInput() {
    return this._timestamp;
  }
}
export interface StreamOnExternalTableTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.6.0/docs/resources/stream_on_external_table#create StreamOnExternalTable#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.6.0/docs/resources/stream_on_external_table#delete StreamOnExternalTable#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.6.0/docs/resources/stream_on_external_table#read StreamOnExternalTable#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.6.0/docs/resources/stream_on_external_table#update StreamOnExternalTable#update}
  */
  readonly update?: string;
}

export function streamOnExternalTableTimeoutsToTerraform(struct?: StreamOnExternalTableTimeouts | cdktf.IResolvable): any {
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


export function streamOnExternalTableTimeoutsToHclTerraform(struct?: StreamOnExternalTableTimeouts | cdktf.IResolvable): any {
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

export class StreamOnExternalTableTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StreamOnExternalTableTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: StreamOnExternalTableTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.6.0/docs/resources/stream_on_external_table snowflake_stream_on_external_table}
*/
export class StreamOnExternalTable extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_stream_on_external_table";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StreamOnExternalTable resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StreamOnExternalTable to import
  * @param importFromId The id of the existing StreamOnExternalTable that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.6.0/docs/resources/stream_on_external_table#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StreamOnExternalTable to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_stream_on_external_table", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.6.0/docs/resources/stream_on_external_table snowflake_stream_on_external_table} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StreamOnExternalTableConfig
  */
  public constructor(scope: Construct, id: string, config: StreamOnExternalTableConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_stream_on_external_table',
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
    this._comment = config.comment;
    this._copyGrants = config.copyGrants;
    this._database = config.database;
    this._externalTable = config.externalTable;
    this._id = config.id;
    this._insertOnly = config.insertOnly;
    this._name = config.name;
    this._schema = config.schema;
    this._at.internalValue = config.at;
    this._before.internalValue = config.before;
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

  // copy_grants - computed: false, optional: true, required: false
  private _copyGrants?: boolean | cdktf.IResolvable; 
  public get copyGrants() {
    return this.getBooleanAttribute('copy_grants');
  }
  public set copyGrants(value: boolean | cdktf.IResolvable) {
    this._copyGrants = value;
  }
  public resetCopyGrants() {
    this._copyGrants = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyGrantsInput() {
    return this._copyGrants;
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

  // describe_output - computed: true, optional: false, required: false
  private _describeOutput = new StreamOnExternalTableDescribeOutputList(this, "describe_output", false);
  public get describeOutput() {
    return this._describeOutput;
  }

  // external_table - computed: false, optional: false, required: true
  private _externalTable?: string; 
  public get externalTable() {
    return this.getStringAttribute('external_table');
  }
  public set externalTable(value: string) {
    this._externalTable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalTableInput() {
    return this._externalTable;
  }

  // fully_qualified_name - computed: true, optional: false, required: false
  public get fullyQualifiedName() {
    return this.getStringAttribute('fully_qualified_name');
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

  // insert_only - computed: false, optional: true, required: false
  private _insertOnly?: string; 
  public get insertOnly() {
    return this.getStringAttribute('insert_only');
  }
  public set insertOnly(value: string) {
    this._insertOnly = value;
  }
  public resetInsertOnly() {
    this._insertOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertOnlyInput() {
    return this._insertOnly;
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
  private _showOutput = new StreamOnExternalTableShowOutputList(this, "show_output", false);
  public get showOutput() {
    return this._showOutput;
  }

  // stale - computed: true, optional: false, required: false
  public get stale() {
    return this.getBooleanAttribute('stale');
  }

  // stream_type - computed: true, optional: false, required: false
  public get streamType() {
    return this.getStringAttribute('stream_type');
  }

  // at - computed: false, optional: true, required: false
  private _at = new StreamOnExternalTableAtOutputReference(this, "at");
  public get at() {
    return this._at;
  }
  public putAt(value: StreamOnExternalTableAt) {
    this._at.internalValue = value;
  }
  public resetAt() {
    this._at.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atInput() {
    return this._at.internalValue;
  }

  // before - computed: false, optional: true, required: false
  private _before = new StreamOnExternalTableBeforeOutputReference(this, "before");
  public get before() {
    return this._before;
  }
  public putBefore(value: StreamOnExternalTableBefore) {
    this._before.internalValue = value;
  }
  public resetBefore() {
    this._before.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beforeInput() {
    return this._before.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new StreamOnExternalTableTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: StreamOnExternalTableTimeouts) {
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
      copy_grants: cdktf.booleanToTerraform(this._copyGrants),
      database: cdktf.stringToTerraform(this._database),
      external_table: cdktf.stringToTerraform(this._externalTable),
      id: cdktf.stringToTerraform(this._id),
      insert_only: cdktf.stringToTerraform(this._insertOnly),
      name: cdktf.stringToTerraform(this._name),
      schema: cdktf.stringToTerraform(this._schema),
      at: streamOnExternalTableAtToTerraform(this._at.internalValue),
      before: streamOnExternalTableBeforeToTerraform(this._before.internalValue),
      timeouts: streamOnExternalTableTimeoutsToTerraform(this._timeouts.internalValue),
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
      copy_grants: {
        value: cdktf.booleanToHclTerraform(this._copyGrants),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      database: {
        value: cdktf.stringToHclTerraform(this._database),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_table: {
        value: cdktf.stringToHclTerraform(this._externalTable),
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
      insert_only: {
        value: cdktf.stringToHclTerraform(this._insertOnly),
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
      schema: {
        value: cdktf.stringToHclTerraform(this._schema),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      at: {
        value: streamOnExternalTableAtToHclTerraform(this._at.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StreamOnExternalTableAtList",
      },
      before: {
        value: streamOnExternalTableBeforeToHclTerraform(this._before.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StreamOnExternalTableBeforeList",
      },
      timeouts: {
        value: streamOnExternalTableTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "StreamOnExternalTableTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
