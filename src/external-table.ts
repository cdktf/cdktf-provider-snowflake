// https://www.terraform.io/docs/providers/snowflake/r/external_table
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ExternalTableConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies whether to automatically refresh the external table metadata once, immediately after the external table is created.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_table#auto_refresh ExternalTable#auto_refresh}
  */
  readonly autoRefresh?: boolean | cdktf.IResolvable;
  /**
  * Specifies the aws sns topic for the external table.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_table#aws_sns_topic ExternalTable#aws_sns_topic}
  */
  readonly awsSnsTopic?: string;
  /**
  * Specifies a comment for the external table.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_table#comment ExternalTable#comment}
  */
  readonly comment?: string;
  /**
  * Specifies to retain the access permissions from the original table when an external table is recreated using the CREATE OR REPLACE TABLE variant
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_table#copy_grants ExternalTable#copy_grants}
  */
  readonly copyGrants?: boolean | cdktf.IResolvable;
  /**
  * The database in which to create the external table.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_table#database ExternalTable#database}
  */
  readonly database: string;
  /**
  * Specifies the file format for the external table.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_table#file_format ExternalTable#file_format}
  */
  readonly fileFormat: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_table#id ExternalTable#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies a location for the external table.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_table#location ExternalTable#location}
  */
  readonly location: string;
  /**
  * Specifies the identifier for the external table; must be unique for the database and schema in which the externalTable is created.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_table#name ExternalTable#name}
  */
  readonly name: string;
  /**
  * Specifies any partition columns to evaluate for the external table.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_table#partition_by ExternalTable#partition_by}
  */
  readonly partitionBy?: string[];
  /**
  * Specifies the file names and/or paths on the external stage to match.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_table#pattern ExternalTable#pattern}
  */
  readonly pattern?: string;
  /**
  * Specifies weather to refresh when an external table is created.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_table#refresh_on_create ExternalTable#refresh_on_create}
  */
  readonly refreshOnCreate?: boolean | cdktf.IResolvable;
  /**
  * The schema in which to create the external table.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_table#schema ExternalTable#schema}
  */
  readonly schema: string;
  /**
  * column block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_table#column ExternalTable#column}
  */
  readonly column: ExternalTableColumn[] | cdktf.IResolvable;
  /**
  * tag block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_table#tag ExternalTable#tag}
  */
  readonly tag?: ExternalTableTag[] | cdktf.IResolvable;
}
export interface ExternalTableColumn {
  /**
  * String that specifies the expression for the column. When queried, the column returns results derived from this expression.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_table#as ExternalTable#as}
  */
  readonly as: string;
  /**
  * Column name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_table#name ExternalTable#name}
  */
  readonly name: string;
  /**
  * Column type, e.g. VARIANT
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_table#type ExternalTable#type}
  */
  readonly type: string;
}

export function externalTableColumnToTerraform(struct?: ExternalTableColumn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as: cdktf.stringToTerraform(struct!.as),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class ExternalTableColumnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ExternalTableColumn | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._as !== undefined) {
      hasAnyValues = true;
      internalValueResult.as = this._as;
    }
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

  public set internalValue(value: ExternalTableColumn | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._as = undefined;
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
      this._as = value.as;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // as - computed: false, optional: false, required: true
  private _as?: string; 
  public get as() {
    return this.getStringAttribute('as');
  }
  public set as(value: string) {
    this._as = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asInput() {
    return this._as;
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

export class ExternalTableColumnList extends cdktf.ComplexList {
  public internalValue? : ExternalTableColumn[] | cdktf.IResolvable

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
  public get(index: number): ExternalTableColumnOutputReference {
    return new ExternalTableColumnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ExternalTableTag {
  /**
  * Name of the database that the tag was created in.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_table#database ExternalTable#database}
  */
  readonly database?: string;
  /**
  * Tag name, e.g. department.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_table#name ExternalTable#name}
  */
  readonly name: string;
  /**
  * Name of the schema that the tag was created in.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_table#schema ExternalTable#schema}
  */
  readonly schema?: string;
  /**
  * Tag value, e.g. marketing_info.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/external_table#value ExternalTable#value}
  */
  readonly value: string;
}

export function externalTableTagToTerraform(struct?: ExternalTableTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    name: cdktf.stringToTerraform(struct!.name),
    schema: cdktf.stringToTerraform(struct!.schema),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class ExternalTableTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ExternalTableTag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalTableTag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._database = undefined;
      this._name = undefined;
      this._schema = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._database = value.database;
      this._name = value.name;
      this._schema = value.schema;
      this._value = value.value;
    }
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

export class ExternalTableTagList extends cdktf.ComplexList {
  public internalValue? : ExternalTableTag[] | cdktf.IResolvable

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
  public get(index: number): ExternalTableTagOutputReference {
    return new ExternalTableTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/external_table snowflake_external_table}
*/
export class ExternalTable extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_external_table";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/snowflake/r/external_table snowflake_external_table} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ExternalTableConfig
  */
  public constructor(scope: Construct, id: string, config: ExternalTableConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_external_table',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '0.33.1',
        providerVersionConstraint: ' ~> 0.25'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._autoRefresh = config.autoRefresh;
    this._awsSnsTopic = config.awsSnsTopic;
    this._comment = config.comment;
    this._copyGrants = config.copyGrants;
    this._database = config.database;
    this._fileFormat = config.fileFormat;
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._partitionBy = config.partitionBy;
    this._pattern = config.pattern;
    this._refreshOnCreate = config.refreshOnCreate;
    this._schema = config.schema;
    this._column.internalValue = config.column;
    this._tag.internalValue = config.tag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_refresh - computed: false, optional: true, required: false
  private _autoRefresh?: boolean | cdktf.IResolvable; 
  public get autoRefresh() {
    return this.getBooleanAttribute('auto_refresh');
  }
  public set autoRefresh(value: boolean | cdktf.IResolvable) {
    this._autoRefresh = value;
  }
  public resetAutoRefresh() {
    this._autoRefresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRefreshInput() {
    return this._autoRefresh;
  }

  // aws_sns_topic - computed: false, optional: true, required: false
  private _awsSnsTopic?: string; 
  public get awsSnsTopic() {
    return this.getStringAttribute('aws_sns_topic');
  }
  public set awsSnsTopic(value: string) {
    this._awsSnsTopic = value;
  }
  public resetAwsSnsTopic() {
    this._awsSnsTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSnsTopicInput() {
    return this._awsSnsTopic;
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

  // file_format - computed: false, optional: false, required: true
  private _fileFormat?: string; 
  public get fileFormat() {
    return this.getStringAttribute('file_format');
  }
  public set fileFormat(value: string) {
    this._fileFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileFormatInput() {
    return this._fileFormat;
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

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
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

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // partition_by - computed: false, optional: true, required: false
  private _partitionBy?: string[]; 
  public get partitionBy() {
    return this.getListAttribute('partition_by');
  }
  public set partitionBy(value: string[]) {
    this._partitionBy = value;
  }
  public resetPartitionBy() {
    this._partitionBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionByInput() {
    return this._partitionBy;
  }

  // pattern - computed: false, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }

  // refresh_on_create - computed: false, optional: true, required: false
  private _refreshOnCreate?: boolean | cdktf.IResolvable; 
  public get refreshOnCreate() {
    return this.getBooleanAttribute('refresh_on_create');
  }
  public set refreshOnCreate(value: boolean | cdktf.IResolvable) {
    this._refreshOnCreate = value;
  }
  public resetRefreshOnCreate() {
    this._refreshOnCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshOnCreateInput() {
    return this._refreshOnCreate;
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

  // column - computed: false, optional: false, required: true
  private _column = new ExternalTableColumnList(this, "column", false);
  public get column() {
    return this._column;
  }
  public putColumn(value: ExternalTableColumn[] | cdktf.IResolvable) {
    this._column.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new ExternalTableTagList(this, "tag", false);
  public get tag() {
    return this._tag;
  }
  public putTag(value: ExternalTableTag[] | cdktf.IResolvable) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_refresh: cdktf.booleanToTerraform(this._autoRefresh),
      aws_sns_topic: cdktf.stringToTerraform(this._awsSnsTopic),
      comment: cdktf.stringToTerraform(this._comment),
      copy_grants: cdktf.booleanToTerraform(this._copyGrants),
      database: cdktf.stringToTerraform(this._database),
      file_format: cdktf.stringToTerraform(this._fileFormat),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      partition_by: cdktf.listMapper(cdktf.stringToTerraform)(this._partitionBy),
      pattern: cdktf.stringToTerraform(this._pattern),
      refresh_on_create: cdktf.booleanToTerraform(this._refreshOnCreate),
      schema: cdktf.stringToTerraform(this._schema),
      column: cdktf.listMapper(externalTableColumnToTerraform)(this._column.internalValue),
      tag: cdktf.listMapper(externalTableTagToTerraform)(this._tag.internalValue),
    };
  }
}
