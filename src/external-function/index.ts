// https://www.terraform.io/docs/providers/snowflake/r/external_function
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ExternalFunctionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the API integration object that should be used to authenticate the call to the proxy service.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_function#api_integration ExternalFunction#api_integration}
  */
  readonly apiIntegration: string;
  /**
  * A description of the external function.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_function#comment ExternalFunction#comment}
  */
  readonly comment?: string;
  /**
  * If specified, the JSON payload is compressed when sent from Snowflake to the proxy service, and when sent back from the proxy service to Snowflake.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_function#compression ExternalFunction#compression}
  */
  readonly compression?: string;
  /**
  * Binds Snowflake context function results to HTTP headers.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_function#context_headers ExternalFunction#context_headers}
  */
  readonly contextHeaders?: string[];
  /**
  * The database in which to create the external function.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_function#database ExternalFunction#database}
  */
  readonly database: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_function#id ExternalFunction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * This specifies the maximum number of rows in each batch sent to the proxy service.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_function#max_batch_rows ExternalFunction#max_batch_rows}
  */
  readonly maxBatchRows?: number;
  /**
  * Specifies the identifier for the external function. The identifier can contain the schema name and database name, as well as the function name. The function's signature (name and argument data types) must be unique within the schema.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_function#name ExternalFunction#name}
  */
  readonly name: string;
  /**
  * Specifies the behavior of the external function when called with null inputs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_function#null_input_behavior ExternalFunction#null_input_behavior}
  */
  readonly nullInputBehavior?: string;
  /**
  * Specifies the behavior of the function when returning results
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_function#return_behavior ExternalFunction#return_behavior}
  */
  readonly returnBehavior: string;
  /**
  * Indicates whether the function can return NULL values or must return only NON-NULL values.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_function#return_null_allowed ExternalFunction#return_null_allowed}
  */
  readonly returnNullAllowed?: boolean | cdktf.IResolvable;
  /**
  * Specifies the data type returned by the external function.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_function#return_type ExternalFunction#return_type}
  */
  readonly returnType: string;
  /**
  * The schema in which to create the external function.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_function#schema ExternalFunction#schema}
  */
  readonly schema: string;
  /**
  * This is the invocation URL of the proxy service and resource through which Snowflake calls the remote service.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_function#url_of_proxy_and_resource ExternalFunction#url_of_proxy_and_resource}
  */
  readonly urlOfProxyAndResource: string;
  /**
  * arg block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_function#arg ExternalFunction#arg}
  */
  readonly arg?: ExternalFunctionArg[] | cdktf.IResolvable;
  /**
  * header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_function#header ExternalFunction#header}
  */
  readonly header?: ExternalFunctionHeader[] | cdktf.IResolvable;
}
export interface ExternalFunctionArg {
  /**
  * Argument name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_function#name ExternalFunction#name}
  */
  readonly name: string;
  /**
  * Argument type, e.g. VARCHAR
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_function#type ExternalFunction#type}
  */
  readonly type: string;
}

export function externalFunctionArgToTerraform(struct?: ExternalFunctionArg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class ExternalFunctionArgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ExternalFunctionArg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalFunctionArg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type = value.type;
    }
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class ExternalFunctionArgList extends cdktf.ComplexList {
  public internalValue? : ExternalFunctionArg[] | cdktf.IResolvable

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
  public get(index: number): ExternalFunctionArgOutputReference {
    return new ExternalFunctionArgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ExternalFunctionHeader {
  /**
  * Header name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_function#name ExternalFunction#name}
  */
  readonly name: string;
  /**
  * Header value
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_function#value ExternalFunction#value}
  */
  readonly value: string;
}

export function externalFunctionHeaderToTerraform(struct?: ExternalFunctionHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class ExternalFunctionHeaderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ExternalFunctionHeader | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalFunctionHeader | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ExternalFunctionHeaderList extends cdktf.ComplexList {
  public internalValue? : ExternalFunctionHeader[] | cdktf.IResolvable

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
  public get(index: number): ExternalFunctionHeaderOutputReference {
    return new ExternalFunctionHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/external_function snowflake_external_function}
*/
export class ExternalFunction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_external_function";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/snowflake/r/external_function snowflake_external_function} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ExternalFunctionConfig
  */
  public constructor(scope: Construct, id: string, config: ExternalFunctionConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_external_function',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '0.55.0',
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
    this._apiIntegration = config.apiIntegration;
    this._comment = config.comment;
    this._compression = config.compression;
    this._contextHeaders = config.contextHeaders;
    this._database = config.database;
    this._id = config.id;
    this._maxBatchRows = config.maxBatchRows;
    this._name = config.name;
    this._nullInputBehavior = config.nullInputBehavior;
    this._returnBehavior = config.returnBehavior;
    this._returnNullAllowed = config.returnNullAllowed;
    this._returnType = config.returnType;
    this._schema = config.schema;
    this._urlOfProxyAndResource = config.urlOfProxyAndResource;
    this._arg.internalValue = config.arg;
    this._header.internalValue = config.header;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_integration - computed: false, optional: false, required: true
  private _apiIntegration?: string; 
  public get apiIntegration() {
    return this.getStringAttribute('api_integration');
  }
  public set apiIntegration(value: string) {
    this._apiIntegration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiIntegrationInput() {
    return this._apiIntegration;
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

  // compression - computed: false, optional: true, required: false
  private _compression?: string; 
  public get compression() {
    return this.getStringAttribute('compression');
  }
  public set compression(value: string) {
    this._compression = value;
  }
  public resetCompression() {
    this._compression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionInput() {
    return this._compression;
  }

  // context_headers - computed: false, optional: true, required: false
  private _contextHeaders?: string[]; 
  public get contextHeaders() {
    return this.getListAttribute('context_headers');
  }
  public set contextHeaders(value: string[]) {
    this._contextHeaders = value;
  }
  public resetContextHeaders() {
    this._contextHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextHeadersInput() {
    return this._contextHeaders;
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
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

  // max_batch_rows - computed: false, optional: true, required: false
  private _maxBatchRows?: number; 
  public get maxBatchRows() {
    return this.getNumberAttribute('max_batch_rows');
  }
  public set maxBatchRows(value: number) {
    this._maxBatchRows = value;
  }
  public resetMaxBatchRows() {
    this._maxBatchRows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBatchRowsInput() {
    return this._maxBatchRows;
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

  // return_behavior - computed: false, optional: false, required: true
  private _returnBehavior?: string; 
  public get returnBehavior() {
    return this.getStringAttribute('return_behavior');
  }
  public set returnBehavior(value: string) {
    this._returnBehavior = value;
  }
  // Temporarily expose input value. Use with caution.
  public get returnBehaviorInput() {
    return this._returnBehavior;
  }

  // return_null_allowed - computed: false, optional: true, required: false
  private _returnNullAllowed?: boolean | cdktf.IResolvable; 
  public get returnNullAllowed() {
    return this.getBooleanAttribute('return_null_allowed');
  }
  public set returnNullAllowed(value: boolean | cdktf.IResolvable) {
    this._returnNullAllowed = value;
  }
  public resetReturnNullAllowed() {
    this._returnNullAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnNullAllowedInput() {
    return this._returnNullAllowed;
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

  // url_of_proxy_and_resource - computed: false, optional: false, required: true
  private _urlOfProxyAndResource?: string; 
  public get urlOfProxyAndResource() {
    return this.getStringAttribute('url_of_proxy_and_resource');
  }
  public set urlOfProxyAndResource(value: string) {
    this._urlOfProxyAndResource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlOfProxyAndResourceInput() {
    return this._urlOfProxyAndResource;
  }

  // arg - computed: false, optional: true, required: false
  private _arg = new ExternalFunctionArgList(this, "arg", false);
  public get arg() {
    return this._arg;
  }
  public putArg(value: ExternalFunctionArg[] | cdktf.IResolvable) {
    this._arg.internalValue = value;
  }
  public resetArg() {
    this._arg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argInput() {
    return this._arg.internalValue;
  }

  // header - computed: false, optional: true, required: false
  private _header = new ExternalFunctionHeaderList(this, "header", true);
  public get header() {
    return this._header;
  }
  public putHeader(value: ExternalFunctionHeader[] | cdktf.IResolvable) {
    this._header.internalValue = value;
  }
  public resetHeader() {
    this._header.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_integration: cdktf.stringToTerraform(this._apiIntegration),
      comment: cdktf.stringToTerraform(this._comment),
      compression: cdktf.stringToTerraform(this._compression),
      context_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._contextHeaders),
      database: cdktf.stringToTerraform(this._database),
      id: cdktf.stringToTerraform(this._id),
      max_batch_rows: cdktf.numberToTerraform(this._maxBatchRows),
      name: cdktf.stringToTerraform(this._name),
      null_input_behavior: cdktf.stringToTerraform(this._nullInputBehavior),
      return_behavior: cdktf.stringToTerraform(this._returnBehavior),
      return_null_allowed: cdktf.booleanToTerraform(this._returnNullAllowed),
      return_type: cdktf.stringToTerraform(this._returnType),
      schema: cdktf.stringToTerraform(this._schema),
      url_of_proxy_and_resource: cdktf.stringToTerraform(this._urlOfProxyAndResource),
      arg: cdktf.listMapper(externalFunctionArgToTerraform, true)(this._arg.internalValue),
      header: cdktf.listMapper(externalFunctionHeaderToTerraform, true)(this._header.internalValue),
    };
  }
}
