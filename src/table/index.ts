/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TableConfig extends cdktf.TerraformMetaArguments {
  /**
  * (Default: `false`) Specifies whether to enable change tracking on the table. Default false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table#change_tracking Table#change_tracking}
  */
  readonly changeTracking?: boolean | cdktf.IResolvable;
  /**
  * A list of one or more table columns/expressions to be used as clustering key(s) for the table
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table#cluster_by Table#cluster_by}
  */
  readonly clusterBy?: string[];
  /**
  * Specifies a comment for the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table#comment Table#comment}
  */
  readonly comment?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the retention period for the table so that Time Travel actions (SELECT, CLONE, UNDROP) can be performed on historical data in the table. If you wish to inherit the parent schema setting then pass in the schema attribute to this argument or do not fill this parameter at all; the default value for this field is -1, which is a fallback to use Snowflake default - in this case the schema value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table#data_retention_time_in_days Table#data_retention_time_in_days}
  */
  readonly dataRetentionTimeInDays?: number;
  /**
  * The database in which to create the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table#database Table#database}
  */
  readonly database: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table#id Table#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the identifier for the table; must be unique for the database and schema in which the table is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table#name Table#name}
  */
  readonly name: string;
  /**
  * The schema in which to create the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table#schema Table#schema}
  */
  readonly schema: string;
  /**
  * column block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table#column Table#column}
  */
  readonly column: TableColumn[] | cdktf.IResolvable;
  /**
  * primary_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table#primary_key Table#primary_key}
  */
  readonly primaryKey?: TablePrimaryKey;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table#tag Table#tag}
  */
  readonly tag?: TableTag[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table#timeouts Table#timeouts}
  */
  readonly timeouts?: TableTimeouts;
}
export interface TableColumnDefault {
  /**
  * The default constant value for the column
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table#constant Table#constant}
  */
  readonly constant?: string;
  /**
  * The default expression value for the column
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table#expression Table#expression}
  */
  readonly expression?: string;
  /**
  * The default sequence to use for the column
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table#sequence Table#sequence}
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


export function tableColumnDefaultToHclTerraform(struct?: TableColumnDefaultOutputReference | TableColumnDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    constant: {
      value: cdktf.stringToHclTerraform(struct!.constant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sequence: {
      value: cdktf.stringToHclTerraform(struct!.sequence),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TableColumnDefaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
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
  * (Default: `1`) The number to start incrementing at.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table#start_num Table#start_num}
  */
  readonly startNum?: number;
  /**
  * (Default: `1`) Step size to increment by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table#step_num Table#step_num}
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


export function tableColumnIdentityToHclTerraform(struct?: TableColumnIdentityOutputReference | TableColumnIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    start_num: {
      value: cdktf.numberToHclTerraform(struct!.startNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    step_num: {
      value: cdktf.numberToHclTerraform(struct!.stepNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TableColumnIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
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
  * (Default: ``) Column collation, e.g. utf8
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table#collate Table#collate}
  */
  readonly collate?: string;
  /**
  * (Default: ``) Column comment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table#comment Table#comment}
  */
  readonly comment?: string;
  /**
  * (Default: ``) Masking policy to apply on column. It has to be a fully qualified name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table#masking_policy Table#masking_policy}
  */
  readonly maskingPolicy?: string;
  /**
  * Column name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table#name Table#name}
  */
  readonly name: string;
  /**
  * (Default: `true`) Whether this column can contain null values. **Note**: Depending on your Snowflake version, the default value will not suffice if this column is used in a primary key constraint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table#nullable Table#nullable}
  */
  readonly nullable?: boolean | cdktf.IResolvable;
  /**
  * Column type, e.g. VARIANT. For a full list of column types, see [Summary of Data Types](https://docs.snowflake.com/en/sql-reference/intro-summary-data-types).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table#type Table#type}
  */
  readonly type: string;
  /**
  * default block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table#default Table#default}
  */
  readonly default?: TableColumnDefault;
  /**
  * identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table#identity Table#identity}
  */
  readonly identity?: TableColumnIdentity;
}

export function tableColumnToTerraform(struct?: TableColumn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collate: cdktf.stringToTerraform(struct!.collate),
    comment: cdktf.stringToTerraform(struct!.comment),
    masking_policy: cdktf.stringToTerraform(struct!.maskingPolicy),
    name: cdktf.stringToTerraform(struct!.name),
    nullable: cdktf.booleanToTerraform(struct!.nullable),
    type: cdktf.stringToTerraform(struct!.type),
    default: tableColumnDefaultToTerraform(struct!.default),
    identity: tableColumnIdentityToTerraform(struct!.identity),
  }
}


export function tableColumnToHclTerraform(struct?: TableColumn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    collate: {
      value: cdktf.stringToHclTerraform(struct!.collate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    masking_policy: {
      value: cdktf.stringToHclTerraform(struct!.maskingPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nullable: {
      value: cdktf.booleanToHclTerraform(struct!.nullable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default: {
      value: tableColumnDefaultToHclTerraform(struct!.default),
      isBlock: true,
      type: "list",
      storageClassType: "TableColumnDefaultList",
    },
    identity: {
      value: tableColumnIdentityToHclTerraform(struct!.identity),
      isBlock: true,
      type: "list",
      storageClassType: "TableColumnIdentityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TableColumnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TableColumn | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collate !== undefined) {
      hasAnyValues = true;
      internalValueResult.collate = this._collate;
    }
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._maskingPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.maskingPolicy = this._maskingPolicy;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nullable !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullable = this._nullable;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._default?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default?.internalValue;
    }
    if (this._identity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.identity = this._identity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TableColumn | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._collate = undefined;
      this._comment = undefined;
      this._maskingPolicy = undefined;
      this._name = undefined;
      this._nullable = undefined;
      this._type = undefined;
      this._default.internalValue = undefined;
      this._identity.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._collate = value.collate;
      this._comment = value.comment;
      this._maskingPolicy = value.maskingPolicy;
      this._name = value.name;
      this._nullable = value.nullable;
      this._type = value.type;
      this._default.internalValue = value.default;
      this._identity.internalValue = value.identity;
    }
  }

  // collate - computed: false, optional: true, required: false
  private _collate?: string; 
  public get collate() {
    return this.getStringAttribute('collate');
  }
  public set collate(value: string) {
    this._collate = value;
  }
  public resetCollate() {
    this._collate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collateInput() {
    return this._collate;
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

  // masking_policy - computed: false, optional: true, required: false
  private _maskingPolicy?: string; 
  public get maskingPolicy() {
    return this.getStringAttribute('masking_policy');
  }
  public set maskingPolicy(value: string) {
    this._maskingPolicy = value;
  }
  public resetMaskingPolicy() {
    this._maskingPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskingPolicyInput() {
    return this._maskingPolicy;
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

  // nullable - computed: false, optional: true, required: false
  private _nullable?: boolean | cdktf.IResolvable; 
  public get nullable() {
    return this.getBooleanAttribute('nullable');
  }
  public set nullable(value: boolean | cdktf.IResolvable) {
    this._nullable = value;
  }
  public resetNullable() {
    this._nullable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullableInput() {
    return this._nullable;
  }

  // schema_evolution_record - computed: true, optional: false, required: false
  public get schemaEvolutionRecord() {
    return this.getStringAttribute('schema_evolution_record');
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

  // default - computed: false, optional: true, required: false
  private _default = new TableColumnDefaultOutputReference(this, "default");
  public get default() {
    return this._default;
  }
  public putDefault(value: TableColumnDefault) {
    this._default.internalValue = value;
  }
  public resetDefault() {
    this._default.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default.internalValue;
  }

  // identity - computed: false, optional: true, required: false
  private _identity = new TableColumnIdentityOutputReference(this, "identity");
  public get identity() {
    return this._identity;
  }
  public putIdentity(value: TableColumnIdentity) {
    this._identity.internalValue = value;
  }
  public resetIdentity() {
    this._identity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity.internalValue;
  }
}

export class TableColumnList extends cdktf.ComplexList {
  public internalValue? : TableColumn[] | cdktf.IResolvable

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
  public get(index: number): TableColumnOutputReference {
    return new TableColumnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TablePrimaryKey {
  /**
  * Columns to use in primary key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table#keys Table#keys}
  */
  readonly keys: string[];
  /**
  * Name of constraint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table#name Table#name}
  */
  readonly name?: string;
}

export function tablePrimaryKeyToTerraform(struct?: TablePrimaryKeyOutputReference | TablePrimaryKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keys),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function tablePrimaryKeyToHclTerraform(struct?: TablePrimaryKeyOutputReference | TablePrimaryKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.keys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TablePrimaryKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table#database Table#database}
  */
  readonly database?: string;
  /**
  * Tag name, e.g. department.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table#name Table#name}
  */
  readonly name: string;
  /**
  * Name of the schema that the tag was created in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table#schema Table#schema}
  */
  readonly schema?: string;
  /**
  * Tag value, e.g. marketing_info.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table#value Table#value}
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


export function tableTagToHclTerraform(struct?: TableTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database: {
      value: cdktf.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TableTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TableTag | cdktf.IResolvable | undefined {
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

  public set internalValue(value: TableTag | cdktf.IResolvable | undefined) {
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

export class TableTagList extends cdktf.ComplexList {
  public internalValue? : TableTag[] | cdktf.IResolvable

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
  public get(index: number): TableTagOutputReference {
    return new TableTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TableTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table#create Table#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table#delete Table#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table#read Table#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table#update Table#update}
  */
  readonly update?: string;
}

export function tableTimeoutsToTerraform(struct?: TableTimeouts | cdktf.IResolvable): any {
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


export function tableTimeoutsToHclTerraform(struct?: TableTimeouts | cdktf.IResolvable): any {
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

export class TableTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TableTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: TableTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table snowflake_table}
*/
export class Table extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_table";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Table resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Table to import
  * @param importFromId The id of the existing Table that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Table to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_table", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table snowflake_table} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TableConfig
  */
  public constructor(scope: Construct, id: string, config: TableConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_table',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '2.4.0',
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
    this._changeTracking = config.changeTracking;
    this._clusterBy = config.clusterBy;
    this._comment = config.comment;
    this._dataRetentionTimeInDays = config.dataRetentionTimeInDays;
    this._database = config.database;
    this._id = config.id;
    this._name = config.name;
    this._schema = config.schema;
    this._column.internalValue = config.column;
    this._primaryKey.internalValue = config.primaryKey;
    this._tag.internalValue = config.tag;
    this._timeouts.internalValue = config.timeouts;
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

  // data_retention_time_in_days - computed: false, optional: true, required: false
  private _dataRetentionTimeInDays?: number; 
  public get dataRetentionTimeInDays() {
    return this.getNumberAttribute('data_retention_time_in_days');
  }
  public set dataRetentionTimeInDays(value: number) {
    this._dataRetentionTimeInDays = value;
  }
  public resetDataRetentionTimeInDays() {
    this._dataRetentionTimeInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataRetentionTimeInDaysInput() {
    return this._dataRetentionTimeInDays;
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
  private _column = new TableColumnList(this, "column", false);
  public get column() {
    return this._column;
  }
  public putColumn(value: TableColumn[] | cdktf.IResolvable) {
    this._column.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column.internalValue;
  }

  // primary_key - computed: false, optional: true, required: false
  private _primaryKey = new TablePrimaryKeyOutputReference(this, "primary_key");
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
  private _tag = new TableTagList(this, "tag", false);
  public get tag() {
    return this._tag;
  }
  public putTag(value: TableTag[] | cdktf.IResolvable) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new TableTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: TableTimeouts) {
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
      change_tracking: cdktf.booleanToTerraform(this._changeTracking),
      cluster_by: cdktf.listMapper(cdktf.stringToTerraform, false)(this._clusterBy),
      comment: cdktf.stringToTerraform(this._comment),
      data_retention_time_in_days: cdktf.numberToTerraform(this._dataRetentionTimeInDays),
      database: cdktf.stringToTerraform(this._database),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      schema: cdktf.stringToTerraform(this._schema),
      column: cdktf.listMapper(tableColumnToTerraform, true)(this._column.internalValue),
      primary_key: tablePrimaryKeyToTerraform(this._primaryKey.internalValue),
      tag: cdktf.listMapper(tableTagToTerraform, true)(this._tag.internalValue),
      timeouts: tableTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      change_tracking: {
        value: cdktf.booleanToHclTerraform(this._changeTracking),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cluster_by: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._clusterBy),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_retention_time_in_days: {
        value: cdktf.numberToHclTerraform(this._dataRetentionTimeInDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      column: {
        value: cdktf.listMapperHcl(tableColumnToHclTerraform, true)(this._column.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TableColumnList",
      },
      primary_key: {
        value: tablePrimaryKeyToHclTerraform(this._primaryKey.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TablePrimaryKeyList",
      },
      tag: {
        value: cdktf.listMapperHcl(tableTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TableTagList",
      },
      timeouts: {
        value: tableTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TableTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
