// https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/stream_on_table
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StreamOnTableConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies whether this is an append-only stream. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/stream_on_table#append_only StreamOnTable#append_only}
  */
  readonly appendOnly?: string;
  /**
  * Specifies a comment for the stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/stream_on_table#comment StreamOnTable#comment}
  */
  readonly comment?: string;
  /**
  * Retains the access permissions from the original stream when a stream is recreated using the OR REPLACE clause. That is sometimes used when the provider detects changes for fields that can not be changed by ALTER. This value will not have any effect when creating a new stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/stream_on_table#copy_grants StreamOnTable#copy_grants}
  */
  readonly copyGrants?: boolean | cdktf.IResolvable;
  /**
  * The database in which to create the stream. Due to technical limitations (read more [here](https://github.com/Snowflake-Labs/terraform-provider-snowflake/blob/main/docs/technical-documentation/identifiers_rework_design_decisions.md#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `(`, `)`, `"`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/stream_on_table#database StreamOnTable#database}
  */
  readonly database: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/stream_on_table#id StreamOnTable#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the identifier for the stream; must be unique for the database and schema in which the stream is created. Due to technical limitations (read more [here](https://github.com/Snowflake-Labs/terraform-provider-snowflake/blob/main/docs/technical-documentation/identifiers_rework_design_decisions.md#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `(`, `)`, `"`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/stream_on_table#name StreamOnTable#name}
  */
  readonly name: string;
  /**
  * The schema in which to create the stream. Due to technical limitations (read more [here](https://github.com/Snowflake-Labs/terraform-provider-snowflake/blob/main/docs/technical-documentation/identifiers_rework_design_decisions.md#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `(`, `)`, `"`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/stream_on_table#schema StreamOnTable#schema}
  */
  readonly schema: string;
  /**
  * Specifies whether to return all existing rows in the source table as row inserts the first time the stream is consumed. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/stream_on_table#show_initial_rows StreamOnTable#show_initial_rows}
  */
  readonly showInitialRows?: string;
  /**
  * Specifies an identifier for the table the stream will monitor. Due to technical limitations (read more [here](https://github.com/Snowflake-Labs/terraform-provider-snowflake/blob/main/docs/technical-documentation/identifiers_rework_design_decisions.md#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `(`, `)`, `"`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/stream_on_table#table StreamOnTable#table}
  */
  readonly table: string;
  /**
  * at block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/stream_on_table#at StreamOnTable#at}
  */
  readonly at?: StreamOnTableAt;
  /**
  * before block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/stream_on_table#before StreamOnTable#before}
  */
  readonly before?: StreamOnTableBefore;
}
export interface StreamOnTableDescribeOutput {
}

export function streamOnTableDescribeOutputToTerraform(struct?: StreamOnTableDescribeOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function streamOnTableDescribeOutputToHclTerraform(struct?: StreamOnTableDescribeOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class StreamOnTableDescribeOutputOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StreamOnTableDescribeOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StreamOnTableDescribeOutput | undefined) {
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
    return this.getStringAttribute('stale');
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

export class StreamOnTableDescribeOutputList extends cdktf.ComplexList {

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
  public get(index: number): StreamOnTableDescribeOutputOutputReference {
    return new StreamOnTableDescribeOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StreamOnTableShowOutput {
}

export function streamOnTableShowOutputToTerraform(struct?: StreamOnTableShowOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function streamOnTableShowOutputToHclTerraform(struct?: StreamOnTableShowOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class StreamOnTableShowOutputOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StreamOnTableShowOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StreamOnTableShowOutput | undefined) {
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
    return this.getStringAttribute('stale');
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

export class StreamOnTableShowOutputList extends cdktf.ComplexList {

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
  public get(index: number): StreamOnTableShowOutputOutputReference {
    return new StreamOnTableShowOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StreamOnTableAt {
  /**
  * Specifies the difference in seconds from the current time to use for Time Travel, in the form -N where N can be an integer or arithmetic expression (e.g. -120 is 120 seconds, -30*60 is 1800 seconds or 30 minutes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/stream_on_table#offset StreamOnTable#offset}
  */
  readonly offset?: string;
  /**
  * Specifies the query ID of a statement to use as the reference point for Time Travel. This parameter supports any statement of one of the following types: DML (e.g. INSERT, UPDATE, DELETE), TCL (BEGIN, COMMIT transaction), SELECT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/stream_on_table#statement StreamOnTable#statement}
  */
  readonly statement?: string;
  /**
  * Specifies the identifier (i.e. name) for an existing stream on the queried table or view. The current offset in the stream is used as the AT point in time for returning change data for the source object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/stream_on_table#stream StreamOnTable#stream}
  */
  readonly stream?: string;
  /**
  * Specifies an exact date and time to use for Time Travel. The value must be explicitly cast to a TIMESTAMP, TIMESTAMP_LTZ, TIMESTAMP_NTZ, or TIMESTAMP_TZ data type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/stream_on_table#timestamp StreamOnTable#timestamp}
  */
  readonly timestamp?: string;
}

export function streamOnTableAtToTerraform(struct?: StreamOnTableAtOutputReference | StreamOnTableAt): any {
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


export function streamOnTableAtToHclTerraform(struct?: StreamOnTableAtOutputReference | StreamOnTableAt): any {
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

export class StreamOnTableAtOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StreamOnTableAt | undefined {
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

  public set internalValue(value: StreamOnTableAt | undefined) {
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
export interface StreamOnTableBefore {
  /**
  * Specifies the difference in seconds from the current time to use for Time Travel, in the form -N where N can be an integer or arithmetic expression (e.g. -120 is 120 seconds, -30*60 is 1800 seconds or 30 minutes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/stream_on_table#offset StreamOnTable#offset}
  */
  readonly offset?: string;
  /**
  * Specifies the query ID of a statement to use as the reference point for Time Travel. This parameter supports any statement of one of the following types: DML (e.g. INSERT, UPDATE, DELETE), TCL (BEGIN, COMMIT transaction), SELECT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/stream_on_table#statement StreamOnTable#statement}
  */
  readonly statement?: string;
  /**
  * Specifies the identifier (i.e. name) for an existing stream on the queried table or view. The current offset in the stream is used as the AT point in time for returning change data for the source object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/stream_on_table#stream StreamOnTable#stream}
  */
  readonly stream?: string;
  /**
  * Specifies an exact date and time to use for Time Travel. The value must be explicitly cast to a TIMESTAMP, TIMESTAMP_LTZ, TIMESTAMP_NTZ, or TIMESTAMP_TZ data type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/stream_on_table#timestamp StreamOnTable#timestamp}
  */
  readonly timestamp?: string;
}

export function streamOnTableBeforeToTerraform(struct?: StreamOnTableBeforeOutputReference | StreamOnTableBefore): any {
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


export function streamOnTableBeforeToHclTerraform(struct?: StreamOnTableBeforeOutputReference | StreamOnTableBefore): any {
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

export class StreamOnTableBeforeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StreamOnTableBefore | undefined {
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

  public set internalValue(value: StreamOnTableBefore | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/stream_on_table snowflake_stream_on_table}
*/
export class StreamOnTable extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_stream_on_table";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StreamOnTable resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StreamOnTable to import
  * @param importFromId The id of the existing StreamOnTable that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/stream_on_table#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StreamOnTable to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_stream_on_table", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/stream_on_table snowflake_stream_on_table} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StreamOnTableConfig
  */
  public constructor(scope: Construct, id: string, config: StreamOnTableConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_stream_on_table',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '0.97.0',
        providerVersionConstraint: ' ~> 0.40'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appendOnly = config.appendOnly;
    this._comment = config.comment;
    this._copyGrants = config.copyGrants;
    this._database = config.database;
    this._id = config.id;
    this._name = config.name;
    this._schema = config.schema;
    this._showInitialRows = config.showInitialRows;
    this._table = config.table;
    this._at.internalValue = config.at;
    this._before.internalValue = config.before;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // append_only - computed: false, optional: true, required: false
  private _appendOnly?: string; 
  public get appendOnly() {
    return this.getStringAttribute('append_only');
  }
  public set appendOnly(value: string) {
    this._appendOnly = value;
  }
  public resetAppendOnly() {
    this._appendOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appendOnlyInput() {
    return this._appendOnly;
  }

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
  private _describeOutput = new StreamOnTableDescribeOutputList(this, "describe_output", false);
  public get describeOutput() {
    return this._describeOutput;
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

  // show_initial_rows - computed: false, optional: true, required: false
  private _showInitialRows?: string; 
  public get showInitialRows() {
    return this.getStringAttribute('show_initial_rows');
  }
  public set showInitialRows(value: string) {
    this._showInitialRows = value;
  }
  public resetShowInitialRows() {
    this._showInitialRows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showInitialRowsInput() {
    return this._showInitialRows;
  }

  // show_output - computed: true, optional: false, required: false
  private _showOutput = new StreamOnTableShowOutputList(this, "show_output", false);
  public get showOutput() {
    return this._showOutput;
  }

  // table - computed: false, optional: false, required: true
  private _table?: string; 
  public get table() {
    return this.getStringAttribute('table');
  }
  public set table(value: string) {
    this._table = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table;
  }

  // at - computed: false, optional: true, required: false
  private _at = new StreamOnTableAtOutputReference(this, "at");
  public get at() {
    return this._at;
  }
  public putAt(value: StreamOnTableAt) {
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
  private _before = new StreamOnTableBeforeOutputReference(this, "before");
  public get before() {
    return this._before;
  }
  public putBefore(value: StreamOnTableBefore) {
    this._before.internalValue = value;
  }
  public resetBefore() {
    this._before.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beforeInput() {
    return this._before.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      append_only: cdktf.stringToTerraform(this._appendOnly),
      comment: cdktf.stringToTerraform(this._comment),
      copy_grants: cdktf.booleanToTerraform(this._copyGrants),
      database: cdktf.stringToTerraform(this._database),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      schema: cdktf.stringToTerraform(this._schema),
      show_initial_rows: cdktf.stringToTerraform(this._showInitialRows),
      table: cdktf.stringToTerraform(this._table),
      at: streamOnTableAtToTerraform(this._at.internalValue),
      before: streamOnTableBeforeToTerraform(this._before.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      append_only: {
        value: cdktf.stringToHclTerraform(this._appendOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      show_initial_rows: {
        value: cdktf.stringToHclTerraform(this._showInitialRows),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      table: {
        value: cdktf.stringToHclTerraform(this._table),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      at: {
        value: streamOnTableAtToHclTerraform(this._at.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StreamOnTableAtList",
      },
      before: {
        value: streamOnTableBeforeToHclTerraform(this._before.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StreamOnTableBeforeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
