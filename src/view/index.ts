/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/view
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ViewConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies to enable or disable change tracking on the table. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/view#change_tracking View#change_tracking}
  */
  readonly changeTracking?: string;
  /**
  * Specifies a comment for the view.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/view#comment View#comment}
  */
  readonly comment?: string;
  /**
  * Retains the access permissions from the original view when a view is recreated using the OR REPLACE clause. This is used when the provider detects changes for fields that can not be changed by ALTER. This value will not have any effect during creating a new object with Terraform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/view#copy_grants View#copy_grants}
  */
  readonly copyGrants?: boolean | cdktf.IResolvable;
  /**
  * The database in which to create the view. Due to technical limitations (read more [here](https://github.com/Snowflake-Labs/terraform-provider-snowflake/blob/main/docs/technical-documentation/identifiers_rework_design_decisions.md#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/view#database View#database}
  */
  readonly database: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/view#id View#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies that the view can refer to itself using recursive syntax without necessarily using a CTE (common table expression). Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/view#is_recursive View#is_recursive}
  */
  readonly isRecursive?: string;
  /**
  * Specifies that the view is secure. By design, the Snowflake's `SHOW VIEWS` command does not provide information about secure views (consult [view usage notes](https://docs.snowflake.com/en/sql-reference/sql/create-view#usage-notes)) which is essential to manage/import view with Terraform. Use the role owning the view while managing secure views. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/view#is_secure View#is_secure}
  */
  readonly isSecure?: string;
  /**
  * Specifies that the view persists only for the duration of the session that you created it in. A temporary view and all its contents are dropped at the end of the session. In context of this provider, it means that it's dropped after a Terraform operation. This results in a permanent plan with object creation. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/view#is_temporary View#is_temporary}
  */
  readonly isTemporary?: string;
  /**
  * Specifies the identifier for the view; must be unique for the schema in which the view is created. Due to technical limitations (read more [here](https://github.com/Snowflake-Labs/terraform-provider-snowflake/blob/main/docs/technical-documentation/identifiers_rework_design_decisions.md#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/view#name View#name}
  */
  readonly name: string;
  /**
  * The schema in which to create the view. Due to technical limitations (read more [here](https://github.com/Snowflake-Labs/terraform-provider-snowflake/blob/main/docs/technical-documentation/identifiers_rework_design_decisions.md#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/view#schema View#schema}
  */
  readonly schema: string;
  /**
  * Specifies the query used to create the view. To mitigate permadiff on this field, the provider replaces blank characters with a space. This can lead to false positives in cases where a change in case or run of whitespace is semantically significant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/view#statement View#statement}
  */
  readonly statement: string;
  /**
  * aggregation_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/view#aggregation_policy View#aggregation_policy}
  */
  readonly aggregationPolicy?: ViewAggregationPolicy;
  /**
  * column block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/view#column View#column}
  */
  readonly column?: ViewColumn[] | cdktf.IResolvable;
  /**
  * data_metric_function block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/view#data_metric_function View#data_metric_function}
  */
  readonly dataMetricFunction?: ViewDataMetricFunction[] | cdktf.IResolvable;
  /**
  * data_metric_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/view#data_metric_schedule View#data_metric_schedule}
  */
  readonly dataMetricSchedule?: ViewDataMetricSchedule;
  /**
  * row_access_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/view#row_access_policy View#row_access_policy}
  */
  readonly rowAccessPolicy?: ViewRowAccessPolicy;
}
export interface ViewDescribeOutput {
}

export function viewDescribeOutputToTerraform(struct?: ViewDescribeOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function viewDescribeOutputToHclTerraform(struct?: ViewDescribeOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ViewDescribeOutputOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ViewDescribeOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ViewDescribeOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // check - computed: true, optional: false, required: false
  public get check() {
    return this.getStringAttribute('check');
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // expression - computed: true, optional: false, required: false
  public get expression() {
    return this.getStringAttribute('expression');
  }

  // is_nullable - computed: true, optional: false, required: false
  public get isNullable() {
    return this.getBooleanAttribute('is_nullable');
  }

  // is_primary - computed: true, optional: false, required: false
  public get isPrimary() {
    return this.getBooleanAttribute('is_primary');
  }

  // is_unique - computed: true, optional: false, required: false
  public get isUnique() {
    return this.getBooleanAttribute('is_unique');
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // policy_name - computed: true, optional: false, required: false
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }

  // privacy_domain - computed: true, optional: false, required: false
  public get privacyDomain() {
    return this.getStringAttribute('privacy_domain');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class ViewDescribeOutputList extends cdktf.ComplexList {

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
  public get(index: number): ViewDescribeOutputOutputReference {
    return new ViewDescribeOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ViewShowOutput {
}

export function viewShowOutputToTerraform(struct?: ViewShowOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function viewShowOutputToHclTerraform(struct?: ViewShowOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ViewShowOutputOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ViewShowOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ViewShowOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // change_tracking - computed: true, optional: false, required: false
  public get changeTracking() {
    return this.getStringAttribute('change_tracking');
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

  // is_materialized - computed: true, optional: false, required: false
  public get isMaterialized() {
    return this.getBooleanAttribute('is_materialized');
  }

  // is_secure - computed: true, optional: false, required: false
  public get isSecure() {
    return this.getBooleanAttribute('is_secure');
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // reserved - computed: true, optional: false, required: false
  public get reserved() {
    return this.getStringAttribute('reserved');
  }

  // schema_name - computed: true, optional: false, required: false
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }

  // text - computed: true, optional: false, required: false
  public get text() {
    return this.getStringAttribute('text');
  }
}

export class ViewShowOutputList extends cdktf.ComplexList {

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
  public get(index: number): ViewShowOutputOutputReference {
    return new ViewShowOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ViewAggregationPolicy {
  /**
  * Defines which columns uniquely identify an entity within the view.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/view#entity_key View#entity_key}
  */
  readonly entityKey?: string[];
  /**
  * Aggregation policy name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/view#policy_name View#policy_name}
  */
  readonly policyName: string;
}

export function viewAggregationPolicyToTerraform(struct?: ViewAggregationPolicyOutputReference | ViewAggregationPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entity_key: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.entityKey),
    policy_name: cdktf.stringToTerraform(struct!.policyName),
  }
}


export function viewAggregationPolicyToHclTerraform(struct?: ViewAggregationPolicyOutputReference | ViewAggregationPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entity_key: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.entityKey),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    policy_name: {
      value: cdktf.stringToHclTerraform(struct!.policyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ViewAggregationPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ViewAggregationPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entityKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityKey = this._entityKey;
    }
    if (this._policyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyName = this._policyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ViewAggregationPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._entityKey = undefined;
      this._policyName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._entityKey = value.entityKey;
      this._policyName = value.policyName;
    }
  }

  // entity_key - computed: false, optional: true, required: false
  private _entityKey?: string[]; 
  public get entityKey() {
    return cdktf.Fn.tolist(this.getListAttribute('entity_key'));
  }
  public set entityKey(value: string[]) {
    this._entityKey = value;
  }
  public resetEntityKey() {
    this._entityKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityKeyInput() {
    return this._entityKey;
  }

  // policy_name - computed: false, optional: false, required: true
  private _policyName?: string; 
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }
  public set policyName(value: string) {
    this._policyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNameInput() {
    return this._policyName;
  }
}
export interface ViewColumnMaskingPolicy {
  /**
  * Specifies the masking policy to set on a column. For more information about this resource, see [docs](./masking_policy).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/view#policy_name View#policy_name}
  */
  readonly policyName: string;
  /**
  * Specifies the arguments to pass into the conditional masking policy SQL expression. The first column in the list specifies the column for the policy conditions to mask or tokenize the data and must match the column to which the masking policy is set. The additional columns specify the columns to evaluate to determine whether to mask or tokenize the data in each row of the query result when a query is made on the first column. If the USING clause is omitted, Snowflake treats the conditional masking policy as a normal masking policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/view#using View#using}
  */
  readonly using?: string[];
}

export function viewColumnMaskingPolicyToTerraform(struct?: ViewColumnMaskingPolicyOutputReference | ViewColumnMaskingPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policy_name: cdktf.stringToTerraform(struct!.policyName),
    using: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.using),
  }
}


export function viewColumnMaskingPolicyToHclTerraform(struct?: ViewColumnMaskingPolicyOutputReference | ViewColumnMaskingPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    policy_name: {
      value: cdktf.stringToHclTerraform(struct!.policyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    using: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.using),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ViewColumnMaskingPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ViewColumnMaskingPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyName = this._policyName;
    }
    if (this._using !== undefined) {
      hasAnyValues = true;
      internalValueResult.using = this._using;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ViewColumnMaskingPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._policyName = undefined;
      this._using = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._policyName = value.policyName;
      this._using = value.using;
    }
  }

  // policy_name - computed: false, optional: false, required: true
  private _policyName?: string; 
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }
  public set policyName(value: string) {
    this._policyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNameInput() {
    return this._policyName;
  }

  // using - computed: false, optional: true, required: false
  private _using?: string[]; 
  public get using() {
    return this.getListAttribute('using');
  }
  public set using(value: string[]) {
    this._using = value;
  }
  public resetUsing() {
    this._using = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usingInput() {
    return this._using;
  }
}
export interface ViewColumnProjectionPolicy {
  /**
  * Specifies the projection policy to set on a column.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/view#policy_name View#policy_name}
  */
  readonly policyName: string;
}

export function viewColumnProjectionPolicyToTerraform(struct?: ViewColumnProjectionPolicyOutputReference | ViewColumnProjectionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policy_name: cdktf.stringToTerraform(struct!.policyName),
  }
}


export function viewColumnProjectionPolicyToHclTerraform(struct?: ViewColumnProjectionPolicyOutputReference | ViewColumnProjectionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    policy_name: {
      value: cdktf.stringToHclTerraform(struct!.policyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ViewColumnProjectionPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ViewColumnProjectionPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyName = this._policyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ViewColumnProjectionPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._policyName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._policyName = value.policyName;
    }
  }

  // policy_name - computed: false, optional: false, required: true
  private _policyName?: string; 
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }
  public set policyName(value: string) {
    this._policyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNameInput() {
    return this._policyName;
  }
}
export interface ViewColumn {
  /**
  * Specifies affected column name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/view#column_name View#column_name}
  */
  readonly columnName: string;
  /**
  * Specifies a comment for the column.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/view#comment View#comment}
  */
  readonly comment?: string;
  /**
  * masking_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/view#masking_policy View#masking_policy}
  */
  readonly maskingPolicy?: ViewColumnMaskingPolicy;
  /**
  * projection_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/view#projection_policy View#projection_policy}
  */
  readonly projectionPolicy?: ViewColumnProjectionPolicy;
}

export function viewColumnToTerraform(struct?: ViewColumn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    comment: cdktf.stringToTerraform(struct!.comment),
    masking_policy: viewColumnMaskingPolicyToTerraform(struct!.maskingPolicy),
    projection_policy: viewColumnProjectionPolicyToTerraform(struct!.projectionPolicy),
  }
}


export function viewColumnToHclTerraform(struct?: ViewColumn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    column_name: {
      value: cdktf.stringToHclTerraform(struct!.columnName),
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
      value: viewColumnMaskingPolicyToHclTerraform(struct!.maskingPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "ViewColumnMaskingPolicyList",
    },
    projection_policy: {
      value: viewColumnProjectionPolicyToHclTerraform(struct!.projectionPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "ViewColumnProjectionPolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ViewColumnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ViewColumn | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnName = this._columnName;
    }
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._maskingPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maskingPolicy = this._maskingPolicy?.internalValue;
    }
    if (this._projectionPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectionPolicy = this._projectionPolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ViewColumn | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columnName = undefined;
      this._comment = undefined;
      this._maskingPolicy.internalValue = undefined;
      this._projectionPolicy.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columnName = value.columnName;
      this._comment = value.comment;
      this._maskingPolicy.internalValue = value.maskingPolicy;
      this._projectionPolicy.internalValue = value.projectionPolicy;
    }
  }

  // column_name - computed: false, optional: false, required: true
  private _columnName?: string; 
  public get columnName() {
    return this.getStringAttribute('column_name');
  }
  public set columnName(value: string) {
    this._columnName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnNameInput() {
    return this._columnName;
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
  private _maskingPolicy = new ViewColumnMaskingPolicyOutputReference(this, "masking_policy");
  public get maskingPolicy() {
    return this._maskingPolicy;
  }
  public putMaskingPolicy(value: ViewColumnMaskingPolicy) {
    this._maskingPolicy.internalValue = value;
  }
  public resetMaskingPolicy() {
    this._maskingPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskingPolicyInput() {
    return this._maskingPolicy.internalValue;
  }

  // projection_policy - computed: false, optional: true, required: false
  private _projectionPolicy = new ViewColumnProjectionPolicyOutputReference(this, "projection_policy");
  public get projectionPolicy() {
    return this._projectionPolicy;
  }
  public putProjectionPolicy(value: ViewColumnProjectionPolicy) {
    this._projectionPolicy.internalValue = value;
  }
  public resetProjectionPolicy() {
    this._projectionPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectionPolicyInput() {
    return this._projectionPolicy.internalValue;
  }
}

export class ViewColumnList extends cdktf.ComplexList {
  public internalValue? : ViewColumn[] | cdktf.IResolvable

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
  public get(index: number): ViewColumnOutputReference {
    return new ViewColumnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ViewDataMetricFunction {
  /**
  * Identifier of the data metric function to add to the table or view or drop from the table or view. This function identifier must be provided without arguments in parenthesis.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/view#function_name View#function_name}
  */
  readonly functionName: string;
  /**
  * The table or view columns on which to associate the data metric function. The data types of the columns must match the data types of the columns specified in the data metric function definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/view#on View#on}
  */
  readonly on: string[];
  /**
  * The status of the metrics association. Valid values are: `STARTED` | `SUSPENDED`. When status of a data metric function is changed, it is being reassigned with `DROP DATA METRIC FUNCTION` and `ADD DATA METRIC FUNCTION`, and then its status is changed by `MODIFY DATA METRIC FUNCTION` 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/view#schedule_status View#schedule_status}
  */
  readonly scheduleStatus: string;
}

export function viewDataMetricFunctionToTerraform(struct?: ViewDataMetricFunction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    function_name: cdktf.stringToTerraform(struct!.functionName),
    on: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.on),
    schedule_status: cdktf.stringToTerraform(struct!.scheduleStatus),
  }
}


export function viewDataMetricFunctionToHclTerraform(struct?: ViewDataMetricFunction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    function_name: {
      value: cdktf.stringToHclTerraform(struct!.functionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    on: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.on),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    schedule_status: {
      value: cdktf.stringToHclTerraform(struct!.scheduleStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ViewDataMetricFunctionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ViewDataMetricFunction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._functionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionName = this._functionName;
    }
    if (this._on !== undefined) {
      hasAnyValues = true;
      internalValueResult.on = this._on;
    }
    if (this._scheduleStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduleStatus = this._scheduleStatus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ViewDataMetricFunction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._functionName = undefined;
      this._on = undefined;
      this._scheduleStatus = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._functionName = value.functionName;
      this._on = value.on;
      this._scheduleStatus = value.scheduleStatus;
    }
  }

  // function_name - computed: false, optional: false, required: true
  private _functionName?: string; 
  public get functionName() {
    return this.getStringAttribute('function_name');
  }
  public set functionName(value: string) {
    this._functionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionNameInput() {
    return this._functionName;
  }

  // on - computed: false, optional: false, required: true
  private _on?: string[]; 
  public get on() {
    return cdktf.Fn.tolist(this.getListAttribute('on'));
  }
  public set on(value: string[]) {
    this._on = value;
  }
  // Temporarily expose input value. Use with caution.
  public get onInput() {
    return this._on;
  }

  // schedule_status - computed: false, optional: false, required: true
  private _scheduleStatus?: string; 
  public get scheduleStatus() {
    return this.getStringAttribute('schedule_status');
  }
  public set scheduleStatus(value: string) {
    this._scheduleStatus = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleStatusInput() {
    return this._scheduleStatus;
  }
}

export class ViewDataMetricFunctionList extends cdktf.ComplexList {
  public internalValue? : ViewDataMetricFunction[] | cdktf.IResolvable

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
  public get(index: number): ViewDataMetricFunctionOutputReference {
    return new ViewDataMetricFunctionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ViewDataMetricSchedule {
  /**
  * Specifies an interval (in minutes) of wait time inserted between runs of the data metric function. Conflicts with `using_cron`. Valid values are: `5` | `15` | `30` | `60` | `720` | `1440`. Due to Snowflake limitations, changes in this field are not managed by the provider. Please consider using [taint](https://developer.hashicorp.com/terraform/cli/commands/taint) command, `using_cron` field, or [replace_triggered_by](https://developer.hashicorp.com/terraform/language/meta-arguments/lifecycle#replace_triggered_by) metadata argument.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/view#minutes View#minutes}
  */
  readonly minutes?: number;
  /**
  * Specifies a cron expression and time zone for periodically running the data metric function. Supports a subset of standard cron utility syntax. Conflicts with `minutes`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/view#using_cron View#using_cron}
  */
  readonly usingCron?: string;
}

export function viewDataMetricScheduleToTerraform(struct?: ViewDataMetricScheduleOutputReference | ViewDataMetricSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    minutes: cdktf.numberToTerraform(struct!.minutes),
    using_cron: cdktf.stringToTerraform(struct!.usingCron),
  }
}


export function viewDataMetricScheduleToHclTerraform(struct?: ViewDataMetricScheduleOutputReference | ViewDataMetricSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    minutes: {
      value: cdktf.numberToHclTerraform(struct!.minutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    using_cron: {
      value: cdktf.stringToHclTerraform(struct!.usingCron),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ViewDataMetricScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ViewDataMetricSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutes = this._minutes;
    }
    if (this._usingCron !== undefined) {
      hasAnyValues = true;
      internalValueResult.usingCron = this._usingCron;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ViewDataMetricSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._minutes = undefined;
      this._usingCron = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._minutes = value.minutes;
      this._usingCron = value.usingCron;
    }
  }

  // minutes - computed: false, optional: true, required: false
  private _minutes?: number; 
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
  public set minutes(value: number) {
    this._minutes = value;
  }
  public resetMinutes() {
    this._minutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesInput() {
    return this._minutes;
  }

  // using_cron - computed: false, optional: true, required: false
  private _usingCron?: string; 
  public get usingCron() {
    return this.getStringAttribute('using_cron');
  }
  public set usingCron(value: string) {
    this._usingCron = value;
  }
  public resetUsingCron() {
    this._usingCron = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usingCronInput() {
    return this._usingCron;
  }
}
export interface ViewRowAccessPolicy {
  /**
  * Defines which columns are affected by the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/view#on View#on}
  */
  readonly on: string[];
  /**
  * Row access policy name. For more information about this resource, see [docs](./row_access_policy).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/view#policy_name View#policy_name}
  */
  readonly policyName: string;
}

export function viewRowAccessPolicyToTerraform(struct?: ViewRowAccessPolicyOutputReference | ViewRowAccessPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    on: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.on),
    policy_name: cdktf.stringToTerraform(struct!.policyName),
  }
}


export function viewRowAccessPolicyToHclTerraform(struct?: ViewRowAccessPolicyOutputReference | ViewRowAccessPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    on: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.on),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    policy_name: {
      value: cdktf.stringToHclTerraform(struct!.policyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ViewRowAccessPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ViewRowAccessPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._on !== undefined) {
      hasAnyValues = true;
      internalValueResult.on = this._on;
    }
    if (this._policyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyName = this._policyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ViewRowAccessPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._on = undefined;
      this._policyName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._on = value.on;
      this._policyName = value.policyName;
    }
  }

  // on - computed: false, optional: false, required: true
  private _on?: string[]; 
  public get on() {
    return cdktf.Fn.tolist(this.getListAttribute('on'));
  }
  public set on(value: string[]) {
    this._on = value;
  }
  // Temporarily expose input value. Use with caution.
  public get onInput() {
    return this._on;
  }

  // policy_name - computed: false, optional: false, required: true
  private _policyName?: string; 
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }
  public set policyName(value: string) {
    this._policyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNameInput() {
    return this._policyName;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/view snowflake_view}
*/
export class View extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_view";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a View resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the View to import
  * @param importFromId The id of the existing View that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/view#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the View to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_view", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/view snowflake_view} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ViewConfig
  */
  public constructor(scope: Construct, id: string, config: ViewConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_view',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '0.100.0',
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
    this._changeTracking = config.changeTracking;
    this._comment = config.comment;
    this._copyGrants = config.copyGrants;
    this._database = config.database;
    this._id = config.id;
    this._isRecursive = config.isRecursive;
    this._isSecure = config.isSecure;
    this._isTemporary = config.isTemporary;
    this._name = config.name;
    this._schema = config.schema;
    this._statement = config.statement;
    this._aggregationPolicy.internalValue = config.aggregationPolicy;
    this._column.internalValue = config.column;
    this._dataMetricFunction.internalValue = config.dataMetricFunction;
    this._dataMetricSchedule.internalValue = config.dataMetricSchedule;
    this._rowAccessPolicy.internalValue = config.rowAccessPolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // change_tracking - computed: false, optional: true, required: false
  private _changeTracking?: string; 
  public get changeTracking() {
    return this.getStringAttribute('change_tracking');
  }
  public set changeTracking(value: string) {
    this._changeTracking = value;
  }
  public resetChangeTracking() {
    this._changeTracking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changeTrackingInput() {
    return this._changeTracking;
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
  private _describeOutput = new ViewDescribeOutputList(this, "describe_output", false);
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

  // is_recursive - computed: false, optional: true, required: false
  private _isRecursive?: string; 
  public get isRecursive() {
    return this.getStringAttribute('is_recursive');
  }
  public set isRecursive(value: string) {
    this._isRecursive = value;
  }
  public resetIsRecursive() {
    this._isRecursive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRecursiveInput() {
    return this._isRecursive;
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

  // is_temporary - computed: false, optional: true, required: false
  private _isTemporary?: string; 
  public get isTemporary() {
    return this.getStringAttribute('is_temporary');
  }
  public set isTemporary(value: string) {
    this._isTemporary = value;
  }
  public resetIsTemporary() {
    this._isTemporary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isTemporaryInput() {
    return this._isTemporary;
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
  private _showOutput = new ViewShowOutputList(this, "show_output", false);
  public get showOutput() {
    return this._showOutput;
  }

  // statement - computed: false, optional: false, required: true
  private _statement?: string; 
  public get statement() {
    return this.getStringAttribute('statement');
  }
  public set statement(value: string) {
    this._statement = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statementInput() {
    return this._statement;
  }

  // aggregation_policy - computed: false, optional: true, required: false
  private _aggregationPolicy = new ViewAggregationPolicyOutputReference(this, "aggregation_policy");
  public get aggregationPolicy() {
    return this._aggregationPolicy;
  }
  public putAggregationPolicy(value: ViewAggregationPolicy) {
    this._aggregationPolicy.internalValue = value;
  }
  public resetAggregationPolicy() {
    this._aggregationPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationPolicyInput() {
    return this._aggregationPolicy.internalValue;
  }

  // column - computed: false, optional: true, required: false
  private _column = new ViewColumnList(this, "column", false);
  public get column() {
    return this._column;
  }
  public putColumn(value: ViewColumn[] | cdktf.IResolvable) {
    this._column.internalValue = value;
  }
  public resetColumn() {
    this._column.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column.internalValue;
  }

  // data_metric_function - computed: false, optional: true, required: false
  private _dataMetricFunction = new ViewDataMetricFunctionList(this, "data_metric_function", true);
  public get dataMetricFunction() {
    return this._dataMetricFunction;
  }
  public putDataMetricFunction(value: ViewDataMetricFunction[] | cdktf.IResolvable) {
    this._dataMetricFunction.internalValue = value;
  }
  public resetDataMetricFunction() {
    this._dataMetricFunction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataMetricFunctionInput() {
    return this._dataMetricFunction.internalValue;
  }

  // data_metric_schedule - computed: false, optional: true, required: false
  private _dataMetricSchedule = new ViewDataMetricScheduleOutputReference(this, "data_metric_schedule");
  public get dataMetricSchedule() {
    return this._dataMetricSchedule;
  }
  public putDataMetricSchedule(value: ViewDataMetricSchedule) {
    this._dataMetricSchedule.internalValue = value;
  }
  public resetDataMetricSchedule() {
    this._dataMetricSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataMetricScheduleInput() {
    return this._dataMetricSchedule.internalValue;
  }

  // row_access_policy - computed: false, optional: true, required: false
  private _rowAccessPolicy = new ViewRowAccessPolicyOutputReference(this, "row_access_policy");
  public get rowAccessPolicy() {
    return this._rowAccessPolicy;
  }
  public putRowAccessPolicy(value: ViewRowAccessPolicy) {
    this._rowAccessPolicy.internalValue = value;
  }
  public resetRowAccessPolicy() {
    this._rowAccessPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rowAccessPolicyInput() {
    return this._rowAccessPolicy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      change_tracking: cdktf.stringToTerraform(this._changeTracking),
      comment: cdktf.stringToTerraform(this._comment),
      copy_grants: cdktf.booleanToTerraform(this._copyGrants),
      database: cdktf.stringToTerraform(this._database),
      id: cdktf.stringToTerraform(this._id),
      is_recursive: cdktf.stringToTerraform(this._isRecursive),
      is_secure: cdktf.stringToTerraform(this._isSecure),
      is_temporary: cdktf.stringToTerraform(this._isTemporary),
      name: cdktf.stringToTerraform(this._name),
      schema: cdktf.stringToTerraform(this._schema),
      statement: cdktf.stringToTerraform(this._statement),
      aggregation_policy: viewAggregationPolicyToTerraform(this._aggregationPolicy.internalValue),
      column: cdktf.listMapper(viewColumnToTerraform, true)(this._column.internalValue),
      data_metric_function: cdktf.listMapper(viewDataMetricFunctionToTerraform, true)(this._dataMetricFunction.internalValue),
      data_metric_schedule: viewDataMetricScheduleToTerraform(this._dataMetricSchedule.internalValue),
      row_access_policy: viewRowAccessPolicyToTerraform(this._rowAccessPolicy.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      change_tracking: {
        value: cdktf.stringToHclTerraform(this._changeTracking),
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
      is_recursive: {
        value: cdktf.stringToHclTerraform(this._isRecursive),
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
      is_temporary: {
        value: cdktf.stringToHclTerraform(this._isTemporary),
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
      statement: {
        value: cdktf.stringToHclTerraform(this._statement),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aggregation_policy: {
        value: viewAggregationPolicyToHclTerraform(this._aggregationPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ViewAggregationPolicyList",
      },
      column: {
        value: cdktf.listMapperHcl(viewColumnToHclTerraform, true)(this._column.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ViewColumnList",
      },
      data_metric_function: {
        value: cdktf.listMapperHcl(viewDataMetricFunctionToHclTerraform, true)(this._dataMetricFunction.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ViewDataMetricFunctionList",
      },
      data_metric_schedule: {
        value: viewDataMetricScheduleToHclTerraform(this._dataMetricSchedule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ViewDataMetricScheduleList",
      },
      row_access_policy: {
        value: viewRowAccessPolicyToHclTerraform(this._rowAccessPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ViewRowAccessPolicyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
