// https://www.terraform.io/docs/providers/snowflake/r/table
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TableConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies whether to enable change tracking on the table. Default false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/table#change_tracking Table#change_tracking}
  */
  readonly changeTracking?: boolean | cdktf.IResolvable;
  /**
  * A list of one or more table columns/expressions to be used as clustering key(s) for the table
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/table#cluster_by Table#cluster_by}
  */
  readonly clusterBy?: string[];
  /**
  * Specifies a comment for the table.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/table#comment Table#comment}
  */
  readonly comment?: string;
  /**
  * Specifies the retention period for the table so that Time Travel actions (SELECT, CLONE, UNDROP) can be performed on historical data in the table. Default value is 1, if you wish to inherit the parent schema setting then pass in the schema attribute to this argument.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/table#data_retention_days Table#data_retention_days}
  */
  readonly dataRetentionDays?: number;
  /**
  * The database in which to create the table.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/table#database Table#database}
  */
  readonly database: string;
  /**
  * Specifies the identifier for the table; must be unique for the database and schema in which the table is created.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/table#name Table#name}
  */
  readonly name: string;
  /**
  * The schema in which to create the table.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/table#schema Table#schema}
  */
  readonly schema: string;
  /**
  * column block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/table#column Table#column}
  */
  readonly column: TableColumn[] | cdktf.IResolvable;
  /**
  * primary_key block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/table#primary_key Table#primary_key}
  */
  readonly primaryKey?: TablePrimaryKey;
  /**
  * tag block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/table#tag Table#tag}
  */
  readonly tag?: TableTag[] | cdktf.IResolvable;
}
export interface TableColumnDefault {
  /**
  * The default constant value for the column
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/table#constant Table#constant}
  */
  readonly constant?: string;
  /**
  * The default expression value for the column
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/table#expression Table#expression}
  */
  readonly expression?: string;
  /**
  * The default sequence to use for the column
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/table#sequence Table#sequence}
  */
  readonly sequence?: string;
}

export function tableColumnDefaultToTerraform(struct?: TableColumnDefaultOutputReference | TableColumnDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    constant: cdktf.stringToTerraform(struct!.constant),
    expression: cdktf.stringToTerraform(struct!.expression),
    sequence: cdktf.stringToTerraform(struct!.sequence),
  }
}

export class TableColumnDefaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): TableColumnDefault | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._constant !== undefined) {
      hasAnyValues = true;
      internalValueResult.constant = this._constant;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._sequence !== undefined) {
      hasAnyValues = true;
      internalValueResult.sequence = this._sequence;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TableColumnDefault | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._constant = undefined;
      this._expression = undefined;
      this._sequence = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._constant = value.constant;
      this._expression = value.expression;
      this._sequence = value.sequence;
    }
  }

  // constant - computed: false, optional: true, required: false
  private _constant?: string; 
  public get constant() {
    return this.getStringAttribute('constant');
  }
  public set constant(value: string) {
    this._constant = value;
  }
  public resetConstant() {
    this._constant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constantInput() {
    return this._constant;
  }

  // expression - computed: false, optional: true, required: false
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  public resetExpression() {
    this._expression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // sequence - computed: false, optional: true, required: false
  private _sequence?: string; 
  public get sequence() {
    return this.getStringAttribute('sequence');
  }
  public set sequence(value: string) {
    this._sequence = value;
  }
  public resetSequence() {
    this._sequence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sequenceInput() {
    return this._sequence;
  }
}
export interface TableColumnIdentity {
  /**
  * The number to start incrementing at.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/table#start_num Table#start_num}
  */
  readonly startNum?: number;
  /**
  * Step size to increment by.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/table#step_num Table#step_num}
  */
  readonly stepNum?: number;
}

export function tableColumnIdentityToTerraform(struct?: TableColumnIdentityOutputReference | TableColumnIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    start_num: cdktf.numberToTerraform(struct!.startNum),
    step_num: cdktf.numberToTerraform(struct!.stepNum),
  }
}

export class TableColumnIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): TableColumnIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._startNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.startNum = this._startNum;
    }
    if (this._stepNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.stepNum = this._stepNum;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TableColumnIdentity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._startNum = undefined;
      this._stepNum = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._startNum = value.startNum;
      this._stepNum = value.stepNum;
    }
  }

  // start_num - computed: false, optional: true, required: false
  private _startNum?: number; 
  public get startNum() {
    return this.getNumberAttribute('start_num');
  }
  public set startNum(value: number) {
    this._startNum = value;
  }
  public resetStartNum() {
    this._startNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startNumInput() {
    return this._startNum;
  }

  // step_num - computed: false, optional: true, required: false
  private _stepNum?: number; 
  public get stepNum() {
    return this.getNumberAttribute('step_num');
  }
  public set stepNum(value: number) {
    this._stepNum = value;
  }
  public resetStepNum() {
    this._stepNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepNumInput() {
    return this._stepNum;
  }
}
export interface TableColumn {
  /**
  * Column comment
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/table#comment Table#comment}
  */
  readonly comment?: string;
  /**
  * Column name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/table#name Table#name}
  */
  readonly name: string;
  /**
  * Whether this column can contain null values. **Note**: Depending on your Snowflake version, the default value will not suffice if this column is used in a primary key constraint.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/table#nullable Table#nullable}
  */
  readonly nullable?: boolean | cdktf.IResolvable;
  /**
  * Column type, e.g. VARIANT
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/table#type Table#type}
  */
  readonly type: string;
  /**
  * default block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/table#default Table#default}
  */
  readonly default?: TableColumnDefault;
  /**
  * identity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/table#identity Table#identity}
  */
  readonly identity?: TableColumnIdentity;
}

export function tableColumnToTerraform(struct?: TableColumn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    name: cdktf.stringToTerraform(struct!.name),
    nullable: cdktf.booleanToTerraform(struct!.nullable),
    type: cdktf.stringToTerraform(struct!.type),
    default: tableColumnDefaultToTerraform(struct!.default),
    identity: tableColumnIdentityToTerraform(struct!.identity),
  }
}

export interface TablePrimaryKey {
  /**
  * Columns to use in primary key
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/table#keys Table#keys}
  */
  readonly keys: string[];
  /**
  * Name of constraint
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/table#name Table#name}
  */
  readonly name?: string;
}

export function tablePrimaryKeyToTerraform(struct?: TablePrimaryKeyOutputReference | TablePrimaryKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keys: cdktf.listMapper(cdktf.stringToTerraform)(struct!.keys),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class TablePrimaryKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): TablePrimaryKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keys !== undefined) {
      hasAnyValues = true;
      internalValueResult.keys = this._keys;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TablePrimaryKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keys = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keys = value.keys;
      this._name = value.name;
    }
  }

  // keys - computed: false, optional: false, required: true
  private _keys?: string[]; 
  public get keys() {
    return this.getListAttribute('keys');
  }
  public set keys(value: string[]) {
    this._keys = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keysInput() {
    return this._keys;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface TableTag {
  /**
  * Name of the database that the tag was created in.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/table#database Table#database}
  */
  readonly database?: string;
  /**
  * Tag name, e.g. department.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/table#name Table#name}
  */
  readonly name: string;
  /**
  * Name of the schema that the tag was created in.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/table#schema Table#schema}
  */
  readonly schema?: string;
  /**
  * Tag value, e.g. marketing_info.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/table#value Table#value}
  */
  readonly value: string;
}

export function tableTagToTerraform(struct?: TableTag | cdktf.IResolvable): any {
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


/**
* Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/table snowflake_table}
*/
export class Table extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "snowflake_table";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/snowflake/r/table snowflake_table} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TableConfig
  */
  public constructor(scope: Construct, id: string, config: TableConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_table',
      terraformGeneratorMetadata: {
        providerName: 'snowflake'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._changeTracking = config.changeTracking;
    this._clusterBy = config.clusterBy;
    this._comment = config.comment;
    this._dataRetentionDays = config.dataRetentionDays;
    this._database = config.database;
    this._name = config.name;
    this._schema = config.schema;
    this._column = config.column;
    this._primaryKey.internalValue = config.primaryKey;
    this._tag = config.tag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // change_tracking - computed: false, optional: true, required: false
  private _changeTracking?: boolean | cdktf.IResolvable; 
  public get changeTracking() {
    return this.getBooleanAttribute('change_tracking');
  }
  public set changeTracking(value: boolean | cdktf.IResolvable) {
    this._changeTracking = value;
  }
  public resetChangeTracking() {
    this._changeTracking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changeTrackingInput() {
    return this._changeTracking;
  }

  // cluster_by - computed: false, optional: true, required: false
  private _clusterBy?: string[]; 
  public get clusterBy() {
    return this.getListAttribute('cluster_by');
  }
  public set clusterBy(value: string[]) {
    this._clusterBy = value;
  }
  public resetClusterBy() {
    this._clusterBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterByInput() {
    return this._clusterBy;
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

  // data_retention_days - computed: false, optional: true, required: false
  private _dataRetentionDays?: number; 
  public get dataRetentionDays() {
    return this.getNumberAttribute('data_retention_days');
  }
  public set dataRetentionDays(value: number) {
    this._dataRetentionDays = value;
  }
  public resetDataRetentionDays() {
    this._dataRetentionDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataRetentionDaysInput() {
    return this._dataRetentionDays;
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
  public get id() {
    return this.getStringAttribute('id');
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
  private _column?: TableColumn[] | cdktf.IResolvable; 
  public get column() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('column');
  }
  public set column(value: TableColumn[] | cdktf.IResolvable) {
    this._column = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column;
  }

  // primary_key - computed: false, optional: true, required: false
  private _primaryKey = new TablePrimaryKeyOutputReference(this, "primary_key", true);
  public get primaryKey() {
    return this._primaryKey;
  }
  public putPrimaryKey(value: TablePrimaryKey) {
    this._primaryKey.internalValue = value;
  }
  public resetPrimaryKey() {
    this._primaryKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: TableTag[] | cdktf.IResolvable; 
  public get tag() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tag');
  }
  public set tag(value: TableTag[] | cdktf.IResolvable) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      change_tracking: cdktf.booleanToTerraform(this._changeTracking),
      cluster_by: cdktf.listMapper(cdktf.stringToTerraform)(this._clusterBy),
      comment: cdktf.stringToTerraform(this._comment),
      data_retention_days: cdktf.numberToTerraform(this._dataRetentionDays),
      database: cdktf.stringToTerraform(this._database),
      name: cdktf.stringToTerraform(this._name),
      schema: cdktf.stringToTerraform(this._schema),
      column: cdktf.listMapper(tableColumnToTerraform)(this._column),
      primary_key: tablePrimaryKeyToTerraform(this._primaryKey.internalValue),
      tag: cdktf.listMapper(tableTagToTerraform)(this._tag),
    };
  }
}
