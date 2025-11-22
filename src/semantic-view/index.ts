/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SemanticViewConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies a comment for the semantic view.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#comment SemanticView#comment}
  */
  readonly comment?: string;
  /**
  * The database in which to create the semantic view. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#database SemanticView#database}
  */
  readonly database: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#id SemanticView#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the identifier for the semantic view; must be unique within the schema. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#name SemanticView#name}
  */
  readonly name: string;
  /**
  * The schema in which to create the semantic view. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#schema SemanticView#schema}
  */
  readonly schema: string;
  /**
  * dimensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#dimensions SemanticView#dimensions}
  */
  readonly dimensions?: SemanticViewDimensions[] | cdktf.IResolvable;
  /**
  * facts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#facts SemanticView#facts}
  */
  readonly facts?: SemanticViewFacts[] | cdktf.IResolvable;
  /**
  * metrics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#metrics SemanticView#metrics}
  */
  readonly metrics?: SemanticViewMetrics[] | cdktf.IResolvable;
  /**
  * relationships block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#relationships SemanticView#relationships}
  */
  readonly relationships?: SemanticViewRelationships[] | cdktf.IResolvable;
  /**
  * tables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#tables SemanticView#tables}
  */
  readonly tables: SemanticViewTables[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#timeouts SemanticView#timeouts}
  */
  readonly timeouts?: SemanticViewTimeouts;
}
export interface SemanticViewShowOutput {
}

export function semanticViewShowOutputToTerraform(struct?: SemanticViewShowOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function semanticViewShowOutputToHclTerraform(struct?: SemanticViewShowOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SemanticViewShowOutputOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SemanticViewShowOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SemanticViewShowOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
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

  // extension - computed: true, optional: false, required: false
  public get extension() {
    return this.getStringAttribute('extension');
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
}

export class SemanticViewShowOutputList extends cdktf.ComplexList {

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
  public get(index: number): SemanticViewShowOutputOutputReference {
    return new SemanticViewShowOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SemanticViewDimensions {
  /**
  * Specifies a comment for the dimension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#comment SemanticView#comment}
  */
  readonly comment?: string;
  /**
  * Specifies a qualified name for the dimension, including the table name and a unique identifier for the dimension: `<table_alias>.<semantic_expression_name>`. Remember to wrap each part in double quotes like `"\"<table_alias>\".\"<semantic_expression_name>\""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#qualified_expression_name SemanticView#qualified_expression_name}
  */
  readonly qualifiedExpressionName: string;
  /**
  * The SQL expression used to compute the dimension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#sql_expression SemanticView#sql_expression}
  */
  readonly sqlExpression: string;
  /**
  * List of synonyms for the dimension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#synonym SemanticView#synonym}
  */
  readonly synonym?: string[];
}

export function semanticViewDimensionsToTerraform(struct?: SemanticViewDimensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    qualified_expression_name: cdktf.stringToTerraform(struct!.qualifiedExpressionName),
    sql_expression: cdktf.stringToTerraform(struct!.sqlExpression),
    synonym: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.synonym),
  }
}


export function semanticViewDimensionsToHclTerraform(struct?: SemanticViewDimensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    qualified_expression_name: {
      value: cdktf.stringToHclTerraform(struct!.qualifiedExpressionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sql_expression: {
      value: cdktf.stringToHclTerraform(struct!.sqlExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    synonym: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.synonym),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SemanticViewDimensionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SemanticViewDimensions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._qualifiedExpressionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.qualifiedExpressionName = this._qualifiedExpressionName;
    }
    if (this._sqlExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlExpression = this._sqlExpression;
    }
    if (this._synonym !== undefined) {
      hasAnyValues = true;
      internalValueResult.synonym = this._synonym;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SemanticViewDimensions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comment = undefined;
      this._qualifiedExpressionName = undefined;
      this._sqlExpression = undefined;
      this._synonym = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comment = value.comment;
      this._qualifiedExpressionName = value.qualifiedExpressionName;
      this._sqlExpression = value.sqlExpression;
      this._synonym = value.synonym;
    }
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

  // qualified_expression_name - computed: false, optional: false, required: true
  private _qualifiedExpressionName?: string; 
  public get qualifiedExpressionName() {
    return this.getStringAttribute('qualified_expression_name');
  }
  public set qualifiedExpressionName(value: string) {
    this._qualifiedExpressionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get qualifiedExpressionNameInput() {
    return this._qualifiedExpressionName;
  }

  // sql_expression - computed: false, optional: false, required: true
  private _sqlExpression?: string; 
  public get sqlExpression() {
    return this.getStringAttribute('sql_expression');
  }
  public set sqlExpression(value: string) {
    this._sqlExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlExpressionInput() {
    return this._sqlExpression;
  }

  // synonym - computed: false, optional: true, required: false
  private _synonym?: string[]; 
  public get synonym() {
    return cdktf.Fn.tolist(this.getListAttribute('synonym'));
  }
  public set synonym(value: string[]) {
    this._synonym = value;
  }
  public resetSynonym() {
    this._synonym = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synonymInput() {
    return this._synonym;
  }
}

export class SemanticViewDimensionsList extends cdktf.ComplexList {
  public internalValue? : SemanticViewDimensions[] | cdktf.IResolvable

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
  public get(index: number): SemanticViewDimensionsOutputReference {
    return new SemanticViewDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SemanticViewFacts {
  /**
  * Specifies a comment for the fact.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#comment SemanticView#comment}
  */
  readonly comment?: string;
  /**
  * Specifies a qualified name for the fact, including the table name and a unique identifier for the fact: `<table_alias>.<semantic_expression_name>`. Remember to wrap each part in double quotes like `"\"<table_alias>\".\"<semantic_expression_name>\""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#qualified_expression_name SemanticView#qualified_expression_name}
  */
  readonly qualifiedExpressionName: string;
  /**
  * The SQL expression used to compute the fact.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#sql_expression SemanticView#sql_expression}
  */
  readonly sqlExpression: string;
  /**
  * List of synonyms for the fact.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#synonym SemanticView#synonym}
  */
  readonly synonym?: string[];
}

export function semanticViewFactsToTerraform(struct?: SemanticViewFacts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    qualified_expression_name: cdktf.stringToTerraform(struct!.qualifiedExpressionName),
    sql_expression: cdktf.stringToTerraform(struct!.sqlExpression),
    synonym: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.synonym),
  }
}


export function semanticViewFactsToHclTerraform(struct?: SemanticViewFacts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    qualified_expression_name: {
      value: cdktf.stringToHclTerraform(struct!.qualifiedExpressionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sql_expression: {
      value: cdktf.stringToHclTerraform(struct!.sqlExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    synonym: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.synonym),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SemanticViewFactsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SemanticViewFacts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._qualifiedExpressionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.qualifiedExpressionName = this._qualifiedExpressionName;
    }
    if (this._sqlExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlExpression = this._sqlExpression;
    }
    if (this._synonym !== undefined) {
      hasAnyValues = true;
      internalValueResult.synonym = this._synonym;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SemanticViewFacts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comment = undefined;
      this._qualifiedExpressionName = undefined;
      this._sqlExpression = undefined;
      this._synonym = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comment = value.comment;
      this._qualifiedExpressionName = value.qualifiedExpressionName;
      this._sqlExpression = value.sqlExpression;
      this._synonym = value.synonym;
    }
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

  // qualified_expression_name - computed: false, optional: false, required: true
  private _qualifiedExpressionName?: string; 
  public get qualifiedExpressionName() {
    return this.getStringAttribute('qualified_expression_name');
  }
  public set qualifiedExpressionName(value: string) {
    this._qualifiedExpressionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get qualifiedExpressionNameInput() {
    return this._qualifiedExpressionName;
  }

  // sql_expression - computed: false, optional: false, required: true
  private _sqlExpression?: string; 
  public get sqlExpression() {
    return this.getStringAttribute('sql_expression');
  }
  public set sqlExpression(value: string) {
    this._sqlExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlExpressionInput() {
    return this._sqlExpression;
  }

  // synonym - computed: false, optional: true, required: false
  private _synonym?: string[]; 
  public get synonym() {
    return cdktf.Fn.tolist(this.getListAttribute('synonym'));
  }
  public set synonym(value: string[]) {
    this._synonym = value;
  }
  public resetSynonym() {
    this._synonym = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synonymInput() {
    return this._synonym;
  }
}

export class SemanticViewFactsList extends cdktf.ComplexList {
  public internalValue? : SemanticViewFacts[] | cdktf.IResolvable

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
  public get(index: number): SemanticViewFactsOutputReference {
    return new SemanticViewFactsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SemanticViewMetricsSemanticExpression {
  /**
  * Specifies a comment for the semantic expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#comment SemanticView#comment}
  */
  readonly comment?: string;
  /**
  * Specifies a qualified name for the metric: `<table_alias>.<semantic_expression_name>`. Remember to wrap each part in double quotes like `"\"<table_alias>\".\"<semantic_expression_name>\""`. For the [derived metric](https://docs.snowflake.com/en/user-guide/views-semantic/sql#label-semantic-views-create-derived-metrics) omit the `<table_alias>.` part but still wrap in double quotes, e.g. `"\"<semantic_expression_name>\""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#qualified_expression_name SemanticView#qualified_expression_name}
  */
  readonly qualifiedExpressionName: string;
  /**
  * The SQL expression used to compute the metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#sql_expression SemanticView#sql_expression}
  */
  readonly sqlExpression: string;
  /**
  * List of synonyms for this semantic expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#synonym SemanticView#synonym}
  */
  readonly synonym?: string[];
}

export function semanticViewMetricsSemanticExpressionToTerraform(struct?: SemanticViewMetricsSemanticExpressionOutputReference | SemanticViewMetricsSemanticExpression): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    qualified_expression_name: cdktf.stringToTerraform(struct!.qualifiedExpressionName),
    sql_expression: cdktf.stringToTerraform(struct!.sqlExpression),
    synonym: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.synonym),
  }
}


export function semanticViewMetricsSemanticExpressionToHclTerraform(struct?: SemanticViewMetricsSemanticExpressionOutputReference | SemanticViewMetricsSemanticExpression): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    qualified_expression_name: {
      value: cdktf.stringToHclTerraform(struct!.qualifiedExpressionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sql_expression: {
      value: cdktf.stringToHclTerraform(struct!.sqlExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    synonym: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.synonym),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SemanticViewMetricsSemanticExpressionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SemanticViewMetricsSemanticExpression | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._qualifiedExpressionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.qualifiedExpressionName = this._qualifiedExpressionName;
    }
    if (this._sqlExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlExpression = this._sqlExpression;
    }
    if (this._synonym !== undefined) {
      hasAnyValues = true;
      internalValueResult.synonym = this._synonym;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SemanticViewMetricsSemanticExpression | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._comment = undefined;
      this._qualifiedExpressionName = undefined;
      this._sqlExpression = undefined;
      this._synonym = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._comment = value.comment;
      this._qualifiedExpressionName = value.qualifiedExpressionName;
      this._sqlExpression = value.sqlExpression;
      this._synonym = value.synonym;
    }
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

  // qualified_expression_name - computed: false, optional: false, required: true
  private _qualifiedExpressionName?: string; 
  public get qualifiedExpressionName() {
    return this.getStringAttribute('qualified_expression_name');
  }
  public set qualifiedExpressionName(value: string) {
    this._qualifiedExpressionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get qualifiedExpressionNameInput() {
    return this._qualifiedExpressionName;
  }

  // sql_expression - computed: false, optional: false, required: true
  private _sqlExpression?: string; 
  public get sqlExpression() {
    return this.getStringAttribute('sql_expression');
  }
  public set sqlExpression(value: string) {
    this._sqlExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlExpressionInput() {
    return this._sqlExpression;
  }

  // synonym - computed: false, optional: true, required: false
  private _synonym?: string[]; 
  public get synonym() {
    return cdktf.Fn.tolist(this.getListAttribute('synonym'));
  }
  public set synonym(value: string[]) {
    this._synonym = value;
  }
  public resetSynonym() {
    this._synonym = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synonymInput() {
    return this._synonym;
  }
}
export interface SemanticViewMetricsWindowFunctionOverClause {
  /**
  * Specifies an order by clause. It must be a complete SQL expression, including any `[ ASC | DESC ] [ NULLS { FIRST | LAST } ]` modifiers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#order_by SemanticView#order_by}
  */
  readonly orderBy?: string;
  /**
  * Specifies a partition by clause.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#partition_by SemanticView#partition_by}
  */
  readonly partitionBy?: string;
  /**
  * Specifies a window frame clause.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#window_frame_clause SemanticView#window_frame_clause}
  */
  readonly windowFrameClause?: string;
}

export function semanticViewMetricsWindowFunctionOverClauseToTerraform(struct?: SemanticViewMetricsWindowFunctionOverClauseOutputReference | SemanticViewMetricsWindowFunctionOverClause): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    order_by: cdktf.stringToTerraform(struct!.orderBy),
    partition_by: cdktf.stringToTerraform(struct!.partitionBy),
    window_frame_clause: cdktf.stringToTerraform(struct!.windowFrameClause),
  }
}


export function semanticViewMetricsWindowFunctionOverClauseToHclTerraform(struct?: SemanticViewMetricsWindowFunctionOverClauseOutputReference | SemanticViewMetricsWindowFunctionOverClause): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    order_by: {
      value: cdktf.stringToHclTerraform(struct!.orderBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partition_by: {
      value: cdktf.stringToHclTerraform(struct!.partitionBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    window_frame_clause: {
      value: cdktf.stringToHclTerraform(struct!.windowFrameClause),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SemanticViewMetricsWindowFunctionOverClauseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SemanticViewMetricsWindowFunctionOverClause | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._orderBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.orderBy = this._orderBy;
    }
    if (this._partitionBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitionBy = this._partitionBy;
    }
    if (this._windowFrameClause !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowFrameClause = this._windowFrameClause;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SemanticViewMetricsWindowFunctionOverClause | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._orderBy = undefined;
      this._partitionBy = undefined;
      this._windowFrameClause = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._orderBy = value.orderBy;
      this._partitionBy = value.partitionBy;
      this._windowFrameClause = value.windowFrameClause;
    }
  }

  // order_by - computed: false, optional: true, required: false
  private _orderBy?: string; 
  public get orderBy() {
    return this.getStringAttribute('order_by');
  }
  public set orderBy(value: string) {
    this._orderBy = value;
  }
  public resetOrderBy() {
    this._orderBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderByInput() {
    return this._orderBy;
  }

  // partition_by - computed: false, optional: true, required: false
  private _partitionBy?: string; 
  public get partitionBy() {
    return this.getStringAttribute('partition_by');
  }
  public set partitionBy(value: string) {
    this._partitionBy = value;
  }
  public resetPartitionBy() {
    this._partitionBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionByInput() {
    return this._partitionBy;
  }

  // window_frame_clause - computed: false, optional: true, required: false
  private _windowFrameClause?: string; 
  public get windowFrameClause() {
    return this.getStringAttribute('window_frame_clause');
  }
  public set windowFrameClause(value: string) {
    this._windowFrameClause = value;
  }
  public resetWindowFrameClause() {
    this._windowFrameClause = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowFrameClauseInput() {
    return this._windowFrameClause;
  }
}
export interface SemanticViewMetricsWindowFunction {
  /**
  * Specifies a qualified name for the metric: `<table_alias>.<semantic_expression_name>`. Remember to wrap each part in double quotes like `"\"<table_alias>\".\"<semantic_expression_name>\""`. For the [derived metric](https://docs.snowflake.com/en/user-guide/views-semantic/sql#label-semantic-views-create-derived-metrics) omit the `<table_alias>.` part but still wrap in double quotes, e.g. `"\"<semantic_expression_name>\""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#qualified_expression_name SemanticView#qualified_expression_name}
  */
  readonly qualifiedExpressionName: string;
  /**
  * The SQL expression used to compute the metric following the `<window_function>(<metric>)` format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#sql_expression SemanticView#sql_expression}
  */
  readonly sqlExpression: string;
  /**
  * over_clause block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#over_clause SemanticView#over_clause}
  */
  readonly overClause: SemanticViewMetricsWindowFunctionOverClause;
}

export function semanticViewMetricsWindowFunctionToTerraform(struct?: SemanticViewMetricsWindowFunctionOutputReference | SemanticViewMetricsWindowFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    qualified_expression_name: cdktf.stringToTerraform(struct!.qualifiedExpressionName),
    sql_expression: cdktf.stringToTerraform(struct!.sqlExpression),
    over_clause: semanticViewMetricsWindowFunctionOverClauseToTerraform(struct!.overClause),
  }
}


export function semanticViewMetricsWindowFunctionToHclTerraform(struct?: SemanticViewMetricsWindowFunctionOutputReference | SemanticViewMetricsWindowFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    qualified_expression_name: {
      value: cdktf.stringToHclTerraform(struct!.qualifiedExpressionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sql_expression: {
      value: cdktf.stringToHclTerraform(struct!.sqlExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    over_clause: {
      value: semanticViewMetricsWindowFunctionOverClauseToHclTerraform(struct!.overClause),
      isBlock: true,
      type: "list",
      storageClassType: "SemanticViewMetricsWindowFunctionOverClauseList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SemanticViewMetricsWindowFunctionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SemanticViewMetricsWindowFunction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._qualifiedExpressionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.qualifiedExpressionName = this._qualifiedExpressionName;
    }
    if (this._sqlExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlExpression = this._sqlExpression;
    }
    if (this._overClause?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.overClause = this._overClause?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SemanticViewMetricsWindowFunction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._qualifiedExpressionName = undefined;
      this._sqlExpression = undefined;
      this._overClause.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._qualifiedExpressionName = value.qualifiedExpressionName;
      this._sqlExpression = value.sqlExpression;
      this._overClause.internalValue = value.overClause;
    }
  }

  // qualified_expression_name - computed: false, optional: false, required: true
  private _qualifiedExpressionName?: string; 
  public get qualifiedExpressionName() {
    return this.getStringAttribute('qualified_expression_name');
  }
  public set qualifiedExpressionName(value: string) {
    this._qualifiedExpressionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get qualifiedExpressionNameInput() {
    return this._qualifiedExpressionName;
  }

  // sql_expression - computed: false, optional: false, required: true
  private _sqlExpression?: string; 
  public get sqlExpression() {
    return this.getStringAttribute('sql_expression');
  }
  public set sqlExpression(value: string) {
    this._sqlExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlExpressionInput() {
    return this._sqlExpression;
  }

  // over_clause - computed: false, optional: false, required: true
  private _overClause = new SemanticViewMetricsWindowFunctionOverClauseOutputReference(this, "over_clause");
  public get overClause() {
    return this._overClause;
  }
  public putOverClause(value: SemanticViewMetricsWindowFunctionOverClause) {
    this._overClause.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get overClauseInput() {
    return this._overClause.internalValue;
  }
}
export interface SemanticViewMetrics {
  /**
  * semantic_expression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#semantic_expression SemanticView#semantic_expression}
  */
  readonly semanticExpression?: SemanticViewMetricsSemanticExpression;
  /**
  * window_function block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#window_function SemanticView#window_function}
  */
  readonly windowFunction?: SemanticViewMetricsWindowFunction;
}

export function semanticViewMetricsToTerraform(struct?: SemanticViewMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    semantic_expression: semanticViewMetricsSemanticExpressionToTerraform(struct!.semanticExpression),
    window_function: semanticViewMetricsWindowFunctionToTerraform(struct!.windowFunction),
  }
}


export function semanticViewMetricsToHclTerraform(struct?: SemanticViewMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    semantic_expression: {
      value: semanticViewMetricsSemanticExpressionToHclTerraform(struct!.semanticExpression),
      isBlock: true,
      type: "list",
      storageClassType: "SemanticViewMetricsSemanticExpressionList",
    },
    window_function: {
      value: semanticViewMetricsWindowFunctionToHclTerraform(struct!.windowFunction),
      isBlock: true,
      type: "list",
      storageClassType: "SemanticViewMetricsWindowFunctionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SemanticViewMetricsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SemanticViewMetrics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._semanticExpression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.semanticExpression = this._semanticExpression?.internalValue;
    }
    if (this._windowFunction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowFunction = this._windowFunction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SemanticViewMetrics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._semanticExpression.internalValue = undefined;
      this._windowFunction.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._semanticExpression.internalValue = value.semanticExpression;
      this._windowFunction.internalValue = value.windowFunction;
    }
  }

  // semantic_expression - computed: false, optional: true, required: false
  private _semanticExpression = new SemanticViewMetricsSemanticExpressionOutputReference(this, "semantic_expression");
  public get semanticExpression() {
    return this._semanticExpression;
  }
  public putSemanticExpression(value: SemanticViewMetricsSemanticExpression) {
    this._semanticExpression.internalValue = value;
  }
  public resetSemanticExpression() {
    this._semanticExpression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get semanticExpressionInput() {
    return this._semanticExpression.internalValue;
  }

  // window_function - computed: false, optional: true, required: false
  private _windowFunction = new SemanticViewMetricsWindowFunctionOutputReference(this, "window_function");
  public get windowFunction() {
    return this._windowFunction;
  }
  public putWindowFunction(value: SemanticViewMetricsWindowFunction) {
    this._windowFunction.internalValue = value;
  }
  public resetWindowFunction() {
    this._windowFunction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowFunctionInput() {
    return this._windowFunction.internalValue;
  }
}

export class SemanticViewMetricsList extends cdktf.ComplexList {
  public internalValue? : SemanticViewMetrics[] | cdktf.IResolvable

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
  public get(index: number): SemanticViewMetricsOutputReference {
    return new SemanticViewMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SemanticViewRelationshipsReferencedTableNameOrAlias {
  /**
  * The alias used for the logical table, cannot be used in combination with the `table_name`. This field is case-sensitive - the provider uses double quotes to wrap it when sending the SQL to Snowflake.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#table_alias SemanticView#table_alias}
  */
  readonly tableAlias?: string;
  /**
  * The name of the logical table, cannot be used in combination with the `table_alias`. This field is case-sensitive - the provider uses double quotes to wrap it when sending the SQL to Snowflake.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#table_name SemanticView#table_name}
  */
  readonly tableName?: string;
}

export function semanticViewRelationshipsReferencedTableNameOrAliasToTerraform(struct?: SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference | SemanticViewRelationshipsReferencedTableNameOrAlias): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    table_alias: cdktf.stringToTerraform(struct!.tableAlias),
    table_name: cdktf.stringToTerraform(struct!.tableName),
  }
}


export function semanticViewRelationshipsReferencedTableNameOrAliasToHclTerraform(struct?: SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference | SemanticViewRelationshipsReferencedTableNameOrAlias): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    table_alias: {
      value: cdktf.stringToHclTerraform(struct!.tableAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_name: {
      value: cdktf.stringToHclTerraform(struct!.tableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SemanticViewRelationshipsReferencedTableNameOrAlias | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tableAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableAlias = this._tableAlias;
    }
    if (this._tableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableName = this._tableName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SemanticViewRelationshipsReferencedTableNameOrAlias | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tableAlias = undefined;
      this._tableName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tableAlias = value.tableAlias;
      this._tableName = value.tableName;
    }
  }

  // table_alias - computed: false, optional: true, required: false
  private _tableAlias?: string; 
  public get tableAlias() {
    return this.getStringAttribute('table_alias');
  }
  public set tableAlias(value: string) {
    this._tableAlias = value;
  }
  public resetTableAlias() {
    this._tableAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableAliasInput() {
    return this._tableAlias;
  }

  // table_name - computed: false, optional: true, required: false
  private _tableName?: string; 
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  public resetTableName() {
    this._tableName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName;
  }
}
export interface SemanticViewRelationshipsTableNameOrAlias {
  /**
  * The alias used for the logical table, cannot be used in combination with the `table_name`. This field is case-sensitive - the provider uses double quotes to wrap it when sending the SQL to Snowflake.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#table_alias SemanticView#table_alias}
  */
  readonly tableAlias?: string;
  /**
  * The name of the logical table, cannot be used in combination with the `table_alias`. This field is case-sensitive - the provider uses double quotes to wrap it when sending the SQL to Snowflake.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#table_name SemanticView#table_name}
  */
  readonly tableName?: string;
}

export function semanticViewRelationshipsTableNameOrAliasToTerraform(struct?: SemanticViewRelationshipsTableNameOrAliasOutputReference | SemanticViewRelationshipsTableNameOrAlias): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    table_alias: cdktf.stringToTerraform(struct!.tableAlias),
    table_name: cdktf.stringToTerraform(struct!.tableName),
  }
}


export function semanticViewRelationshipsTableNameOrAliasToHclTerraform(struct?: SemanticViewRelationshipsTableNameOrAliasOutputReference | SemanticViewRelationshipsTableNameOrAlias): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    table_alias: {
      value: cdktf.stringToHclTerraform(struct!.tableAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_name: {
      value: cdktf.stringToHclTerraform(struct!.tableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SemanticViewRelationshipsTableNameOrAliasOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SemanticViewRelationshipsTableNameOrAlias | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tableAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableAlias = this._tableAlias;
    }
    if (this._tableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableName = this._tableName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SemanticViewRelationshipsTableNameOrAlias | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tableAlias = undefined;
      this._tableName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tableAlias = value.tableAlias;
      this._tableName = value.tableName;
    }
  }

  // table_alias - computed: false, optional: true, required: false
  private _tableAlias?: string; 
  public get tableAlias() {
    return this.getStringAttribute('table_alias');
  }
  public set tableAlias(value: string) {
    this._tableAlias = value;
  }
  public resetTableAlias() {
    this._tableAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableAliasInput() {
    return this._tableAlias;
  }

  // table_name - computed: false, optional: true, required: false
  private _tableName?: string; 
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  public resetTableName() {
    this._tableName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName;
  }
}
export interface SemanticViewRelationships {
  /**
  * Specifies one or more columns in the second logical table that are referred to by the first logical table. Column names in this list are case-sensitive - the provider uses double quotes to wrap each of them when sending the SQL to Snowflake.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#referenced_relationship_columns SemanticView#referenced_relationship_columns}
  */
  readonly referencedRelationshipColumns?: string[];
  /**
  * Specifies one or more columns in the first logical table that refers to columns in another logical table. Column names in this list are case-sensitive - the provider uses double quotes to wrap each of them when sending the SQL to Snowflake.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#relationship_columns SemanticView#relationship_columns}
  */
  readonly relationshipColumns: string[];
  /**
  * Specifies an optional identifier for the relationship. This field is case-sensitive - the provider uses double quotes to wrap it when sending the SQL to Snowflake.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#relationship_identifier SemanticView#relationship_identifier}
  */
  readonly relationshipIdentifier?: string;
  /**
  * referenced_table_name_or_alias block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#referenced_table_name_or_alias SemanticView#referenced_table_name_or_alias}
  */
  readonly referencedTableNameOrAlias: SemanticViewRelationshipsReferencedTableNameOrAlias;
  /**
  * table_name_or_alias block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#table_name_or_alias SemanticView#table_name_or_alias}
  */
  readonly tableNameOrAlias: SemanticViewRelationshipsTableNameOrAlias;
}

export function semanticViewRelationshipsToTerraform(struct?: SemanticViewRelationships | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    referenced_relationship_columns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.referencedRelationshipColumns),
    relationship_columns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.relationshipColumns),
    relationship_identifier: cdktf.stringToTerraform(struct!.relationshipIdentifier),
    referenced_table_name_or_alias: semanticViewRelationshipsReferencedTableNameOrAliasToTerraform(struct!.referencedTableNameOrAlias),
    table_name_or_alias: semanticViewRelationshipsTableNameOrAliasToTerraform(struct!.tableNameOrAlias),
  }
}


export function semanticViewRelationshipsToHclTerraform(struct?: SemanticViewRelationships | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    referenced_relationship_columns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.referencedRelationshipColumns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    relationship_columns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.relationshipColumns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    relationship_identifier: {
      value: cdktf.stringToHclTerraform(struct!.relationshipIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    referenced_table_name_or_alias: {
      value: semanticViewRelationshipsReferencedTableNameOrAliasToHclTerraform(struct!.referencedTableNameOrAlias),
      isBlock: true,
      type: "list",
      storageClassType: "SemanticViewRelationshipsReferencedTableNameOrAliasList",
    },
    table_name_or_alias: {
      value: semanticViewRelationshipsTableNameOrAliasToHclTerraform(struct!.tableNameOrAlias),
      isBlock: true,
      type: "list",
      storageClassType: "SemanticViewRelationshipsTableNameOrAliasList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SemanticViewRelationshipsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SemanticViewRelationships | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._referencedRelationshipColumns !== undefined) {
      hasAnyValues = true;
      internalValueResult.referencedRelationshipColumns = this._referencedRelationshipColumns;
    }
    if (this._relationshipColumns !== undefined) {
      hasAnyValues = true;
      internalValueResult.relationshipColumns = this._relationshipColumns;
    }
    if (this._relationshipIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.relationshipIdentifier = this._relationshipIdentifier;
    }
    if (this._referencedTableNameOrAlias?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.referencedTableNameOrAlias = this._referencedTableNameOrAlias?.internalValue;
    }
    if (this._tableNameOrAlias?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableNameOrAlias = this._tableNameOrAlias?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SemanticViewRelationships | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._referencedRelationshipColumns = undefined;
      this._relationshipColumns = undefined;
      this._relationshipIdentifier = undefined;
      this._referencedTableNameOrAlias.internalValue = undefined;
      this._tableNameOrAlias.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._referencedRelationshipColumns = value.referencedRelationshipColumns;
      this._relationshipColumns = value.relationshipColumns;
      this._relationshipIdentifier = value.relationshipIdentifier;
      this._referencedTableNameOrAlias.internalValue = value.referencedTableNameOrAlias;
      this._tableNameOrAlias.internalValue = value.tableNameOrAlias;
    }
  }

  // referenced_relationship_columns - computed: false, optional: true, required: false
  private _referencedRelationshipColumns?: string[]; 
  public get referencedRelationshipColumns() {
    return this.getListAttribute('referenced_relationship_columns');
  }
  public set referencedRelationshipColumns(value: string[]) {
    this._referencedRelationshipColumns = value;
  }
  public resetReferencedRelationshipColumns() {
    this._referencedRelationshipColumns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referencedRelationshipColumnsInput() {
    return this._referencedRelationshipColumns;
  }

  // relationship_columns - computed: false, optional: false, required: true
  private _relationshipColumns?: string[]; 
  public get relationshipColumns() {
    return this.getListAttribute('relationship_columns');
  }
  public set relationshipColumns(value: string[]) {
    this._relationshipColumns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get relationshipColumnsInput() {
    return this._relationshipColumns;
  }

  // relationship_identifier - computed: false, optional: true, required: false
  private _relationshipIdentifier?: string; 
  public get relationshipIdentifier() {
    return this.getStringAttribute('relationship_identifier');
  }
  public set relationshipIdentifier(value: string) {
    this._relationshipIdentifier = value;
  }
  public resetRelationshipIdentifier() {
    this._relationshipIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationshipIdentifierInput() {
    return this._relationshipIdentifier;
  }

  // referenced_table_name_or_alias - computed: false, optional: false, required: true
  private _referencedTableNameOrAlias = new SemanticViewRelationshipsReferencedTableNameOrAliasOutputReference(this, "referenced_table_name_or_alias");
  public get referencedTableNameOrAlias() {
    return this._referencedTableNameOrAlias;
  }
  public putReferencedTableNameOrAlias(value: SemanticViewRelationshipsReferencedTableNameOrAlias) {
    this._referencedTableNameOrAlias.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get referencedTableNameOrAliasInput() {
    return this._referencedTableNameOrAlias.internalValue;
  }

  // table_name_or_alias - computed: false, optional: false, required: true
  private _tableNameOrAlias = new SemanticViewRelationshipsTableNameOrAliasOutputReference(this, "table_name_or_alias");
  public get tableNameOrAlias() {
    return this._tableNameOrAlias;
  }
  public putTableNameOrAlias(value: SemanticViewRelationshipsTableNameOrAlias) {
    this._tableNameOrAlias.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameOrAliasInput() {
    return this._tableNameOrAlias.internalValue;
  }
}

export class SemanticViewRelationshipsList extends cdktf.ComplexList {
  public internalValue? : SemanticViewRelationships[] | cdktf.IResolvable

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
  public get(index: number): SemanticViewRelationshipsOutputReference {
    return new SemanticViewRelationshipsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SemanticViewTablesUnique {
  /**
  * Unique key combinations in the logical table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#values SemanticView#values}
  */
  readonly values: string[];
}

export function semanticViewTablesUniqueToTerraform(struct?: SemanticViewTablesUnique | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function semanticViewTablesUniqueToHclTerraform(struct?: SemanticViewTablesUnique | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SemanticViewTablesUniqueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SemanticViewTablesUnique | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SemanticViewTablesUnique | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._values = value.values;
    }
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class SemanticViewTablesUniqueList extends cdktf.ComplexList {
  public internalValue? : SemanticViewTablesUnique[] | cdktf.IResolvable

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
  public get(index: number): SemanticViewTablesUniqueOutputReference {
    return new SemanticViewTablesUniqueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SemanticViewTables {
  /**
  * Specifies a comment for the logical table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#comment SemanticView#comment}
  */
  readonly comment?: string;
  /**
  * Definitions of primary keys in the logical table. This field is case-sensitive - the provider uses double quotes to wrap it when sending the SQL to Snowflake.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#primary_key SemanticView#primary_key}
  */
  readonly primaryKey?: string[];
  /**
  * List of synonyms for the logical table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#synonym SemanticView#synonym}
  */
  readonly synonym?: string[];
  /**
  * Specifies an alias for a logical table in the semantic view. This field is case-sensitive - the provider uses double quotes to wrap it when sending the SQL to Snowflake.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#table_alias SemanticView#table_alias}
  */
  readonly tableAlias: string;
  /**
  * Specifies an identifier for the logical table. Example: `"\"<db_name>\".\"<schema_name>\".\"<table_name>\""`. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#table_name SemanticView#table_name}
  */
  readonly tableName: string;
  /**
  * unique block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#unique SemanticView#unique}
  */
  readonly unique?: SemanticViewTablesUnique[] | cdktf.IResolvable;
}

export function semanticViewTablesToTerraform(struct?: SemanticViewTables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    primary_key: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.primaryKey),
    synonym: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.synonym),
    table_alias: cdktf.stringToTerraform(struct!.tableAlias),
    table_name: cdktf.stringToTerraform(struct!.tableName),
    unique: cdktf.listMapper(semanticViewTablesUniqueToTerraform, true)(struct!.unique),
  }
}


export function semanticViewTablesToHclTerraform(struct?: SemanticViewTables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_key: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.primaryKey),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    synonym: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.synonym),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    table_alias: {
      value: cdktf.stringToHclTerraform(struct!.tableAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_name: {
      value: cdktf.stringToHclTerraform(struct!.tableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unique: {
      value: cdktf.listMapperHcl(semanticViewTablesUniqueToHclTerraform, true)(struct!.unique),
      isBlock: true,
      type: "list",
      storageClassType: "SemanticViewTablesUniqueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SemanticViewTablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SemanticViewTables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._primaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKey = this._primaryKey;
    }
    if (this._synonym !== undefined) {
      hasAnyValues = true;
      internalValueResult.synonym = this._synonym;
    }
    if (this._tableAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableAlias = this._tableAlias;
    }
    if (this._tableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableName = this._tableName;
    }
    if (this._unique?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unique = this._unique?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SemanticViewTables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comment = undefined;
      this._primaryKey = undefined;
      this._synonym = undefined;
      this._tableAlias = undefined;
      this._tableName = undefined;
      this._unique.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comment = value.comment;
      this._primaryKey = value.primaryKey;
      this._synonym = value.synonym;
      this._tableAlias = value.tableAlias;
      this._tableName = value.tableName;
      this._unique.internalValue = value.unique;
    }
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

  // primary_key - computed: false, optional: true, required: false
  private _primaryKey?: string[]; 
  public get primaryKey() {
    return this.getListAttribute('primary_key');
  }
  public set primaryKey(value: string[]) {
    this._primaryKey = value;
  }
  public resetPrimaryKey() {
    this._primaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }

  // synonym - computed: false, optional: true, required: false
  private _synonym?: string[]; 
  public get synonym() {
    return cdktf.Fn.tolist(this.getListAttribute('synonym'));
  }
  public set synonym(value: string[]) {
    this._synonym = value;
  }
  public resetSynonym() {
    this._synonym = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synonymInput() {
    return this._synonym;
  }

  // table_alias - computed: false, optional: false, required: true
  private _tableAlias?: string; 
  public get tableAlias() {
    return this.getStringAttribute('table_alias');
  }
  public set tableAlias(value: string) {
    this._tableAlias = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableAliasInput() {
    return this._tableAlias;
  }

  // table_name - computed: false, optional: false, required: true
  private _tableName?: string; 
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName;
  }

  // unique - computed: false, optional: true, required: false
  private _unique = new SemanticViewTablesUniqueList(this, "unique", false);
  public get unique() {
    return this._unique;
  }
  public putUnique(value: SemanticViewTablesUnique[] | cdktf.IResolvable) {
    this._unique.internalValue = value;
  }
  public resetUnique() {
    this._unique.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueInput() {
    return this._unique.internalValue;
  }
}

export class SemanticViewTablesList extends cdktf.ComplexList {
  public internalValue? : SemanticViewTables[] | cdktf.IResolvable

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
  public get(index: number): SemanticViewTablesOutputReference {
    return new SemanticViewTablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SemanticViewTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#create SemanticView#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#delete SemanticView#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#read SemanticView#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#update SemanticView#update}
  */
  readonly update?: string;
}

export function semanticViewTimeoutsToTerraform(struct?: SemanticViewTimeouts | cdktf.IResolvable): any {
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


export function semanticViewTimeoutsToHclTerraform(struct?: SemanticViewTimeouts | cdktf.IResolvable): any {
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

export class SemanticViewTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SemanticViewTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SemanticViewTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view snowflake_semantic_view}
*/
export class SemanticView extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_semantic_view";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SemanticView resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SemanticView to import
  * @param importFromId The id of the existing SemanticView that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SemanticView to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_semantic_view", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/semantic_view snowflake_semantic_view} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SemanticViewConfig
  */
  public constructor(scope: Construct, id: string, config: SemanticViewConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_semantic_view',
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
    this._comment = config.comment;
    this._database = config.database;
    this._id = config.id;
    this._name = config.name;
    this._schema = config.schema;
    this._dimensions.internalValue = config.dimensions;
    this._facts.internalValue = config.facts;
    this._metrics.internalValue = config.metrics;
    this._relationships.internalValue = config.relationships;
    this._tables.internalValue = config.tables;
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

  // show_output - computed: true, optional: false, required: false
  private _showOutput = new SemanticViewShowOutputList(this, "show_output", false);
  public get showOutput() {
    return this._showOutput;
  }

  // dimensions - computed: false, optional: true, required: false
  private _dimensions = new SemanticViewDimensionsList(this, "dimensions", false);
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: SemanticViewDimensions[] | cdktf.IResolvable) {
    this._dimensions.internalValue = value;
  }
  public resetDimensions() {
    this._dimensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions.internalValue;
  }

  // facts - computed: false, optional: true, required: false
  private _facts = new SemanticViewFactsList(this, "facts", false);
  public get facts() {
    return this._facts;
  }
  public putFacts(value: SemanticViewFacts[] | cdktf.IResolvable) {
    this._facts.internalValue = value;
  }
  public resetFacts() {
    this._facts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get factsInput() {
    return this._facts.internalValue;
  }

  // metrics - computed: false, optional: true, required: false
  private _metrics = new SemanticViewMetricsList(this, "metrics", false);
  public get metrics() {
    return this._metrics;
  }
  public putMetrics(value: SemanticViewMetrics[] | cdktf.IResolvable) {
    this._metrics.internalValue = value;
  }
  public resetMetrics() {
    this._metrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsInput() {
    return this._metrics.internalValue;
  }

  // relationships - computed: false, optional: true, required: false
  private _relationships = new SemanticViewRelationshipsList(this, "relationships", false);
  public get relationships() {
    return this._relationships;
  }
  public putRelationships(value: SemanticViewRelationships[] | cdktf.IResolvable) {
    this._relationships.internalValue = value;
  }
  public resetRelationships() {
    this._relationships.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationshipsInput() {
    return this._relationships.internalValue;
  }

  // tables - computed: false, optional: false, required: true
  private _tables = new SemanticViewTablesList(this, "tables", false);
  public get tables() {
    return this._tables;
  }
  public putTables(value: SemanticViewTables[] | cdktf.IResolvable) {
    this._tables.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tablesInput() {
    return this._tables.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SemanticViewTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SemanticViewTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      schema: cdktf.stringToTerraform(this._schema),
      dimensions: cdktf.listMapper(semanticViewDimensionsToTerraform, true)(this._dimensions.internalValue),
      facts: cdktf.listMapper(semanticViewFactsToTerraform, true)(this._facts.internalValue),
      metrics: cdktf.listMapper(semanticViewMetricsToTerraform, true)(this._metrics.internalValue),
      relationships: cdktf.listMapper(semanticViewRelationshipsToTerraform, true)(this._relationships.internalValue),
      tables: cdktf.listMapper(semanticViewTablesToTerraform, true)(this._tables.internalValue),
      timeouts: semanticViewTimeoutsToTerraform(this._timeouts.internalValue),
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
      dimensions: {
        value: cdktf.listMapperHcl(semanticViewDimensionsToHclTerraform, true)(this._dimensions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SemanticViewDimensionsList",
      },
      facts: {
        value: cdktf.listMapperHcl(semanticViewFactsToHclTerraform, true)(this._facts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SemanticViewFactsList",
      },
      metrics: {
        value: cdktf.listMapperHcl(semanticViewMetricsToHclTerraform, true)(this._metrics.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SemanticViewMetricsList",
      },
      relationships: {
        value: cdktf.listMapperHcl(semanticViewRelationshipsToHclTerraform, true)(this._relationships.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SemanticViewRelationshipsList",
      },
      tables: {
        value: cdktf.listMapperHcl(semanticViewTablesToHclTerraform, true)(this._tables.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SemanticViewTablesList",
      },
      timeouts: {
        value: semanticViewTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SemanticViewTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
