// https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/masking_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MaskingPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies a comment for the masking policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/masking_policy#comment MaskingPolicy#comment}
  */
  readonly comment?: string;
  /**
  * The database in which to create the masking policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/masking_policy#database MaskingPolicy#database}
  */
  readonly database: string;
  /**
  * Specifies whether the row access policy or conditional masking policy can reference a column that is already protected by a masking policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/masking_policy#exempt_other_policies MaskingPolicy#exempt_other_policies}
  */
  readonly exemptOtherPolicies?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/masking_policy#id MaskingPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Prevent overwriting a previous masking policy with the same name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/masking_policy#if_not_exists MaskingPolicy#if_not_exists}
  */
  readonly ifNotExists?: boolean | cdktf.IResolvable;
  /**
  * Specifies the SQL expression that transforms the data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/masking_policy#masking_expression MaskingPolicy#masking_expression}
  */
  readonly maskingExpression: string;
  /**
  * Specifies the identifier for the masking policy; must be unique for the database and schema in which the masking policy is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/masking_policy#name MaskingPolicy#name}
  */
  readonly name: string;
  /**
  * Whether to override a previous masking policy with the same name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/masking_policy#or_replace MaskingPolicy#or_replace}
  */
  readonly orReplace?: boolean | cdktf.IResolvable;
  /**
  * Specifies the data type to return.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/masking_policy#return_data_type MaskingPolicy#return_data_type}
  */
  readonly returnDataType: string;
  /**
  * The schema in which to create the masking policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/masking_policy#schema MaskingPolicy#schema}
  */
  readonly schema: string;
  /**
  * signature block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/masking_policy#signature MaskingPolicy#signature}
  */
  readonly signature: MaskingPolicySignature;
}
export interface MaskingPolicySignatureColumn {
  /**
  * Specifies the column name to mask.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/masking_policy#name MaskingPolicy#name}
  */
  readonly name: string;
  /**
  * Specifies the column type to mask.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/masking_policy#type MaskingPolicy#type}
  */
  readonly type: string;
}

export function maskingPolicySignatureColumnToTerraform(struct?: MaskingPolicySignatureColumn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function maskingPolicySignatureColumnToHclTerraform(struct?: MaskingPolicySignatureColumn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MaskingPolicySignatureColumnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MaskingPolicySignatureColumn | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MaskingPolicySignatureColumn | cdktf.IResolvable | undefined) {
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

export class MaskingPolicySignatureColumnList extends cdktf.ComplexList {
  public internalValue? : MaskingPolicySignatureColumn[] | cdktf.IResolvable

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
  public get(index: number): MaskingPolicySignatureColumnOutputReference {
    return new MaskingPolicySignatureColumnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MaskingPolicySignature {
  /**
  * column block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/masking_policy#column MaskingPolicy#column}
  */
  readonly column: MaskingPolicySignatureColumn[] | cdktf.IResolvable;
}

export function maskingPolicySignatureToTerraform(struct?: MaskingPolicySignatureOutputReference | MaskingPolicySignature): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column: cdktf.listMapper(maskingPolicySignatureColumnToTerraform, true)(struct!.column),
  }
}


export function maskingPolicySignatureToHclTerraform(struct?: MaskingPolicySignatureOutputReference | MaskingPolicySignature): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    column: {
      value: cdktf.listMapperHcl(maskingPolicySignatureColumnToHclTerraform, true)(struct!.column),
      isBlock: true,
      type: "list",
      storageClassType: "MaskingPolicySignatureColumnList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MaskingPolicySignatureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MaskingPolicySignature | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._column?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MaskingPolicySignature | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._column.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._column.internalValue = value.column;
    }
  }

  // column - computed: false, optional: false, required: true
  private _column = new MaskingPolicySignatureColumnList(this, "column", false);
  public get column() {
    return this._column;
  }
  public putColumn(value: MaskingPolicySignatureColumn[] | cdktf.IResolvable) {
    this._column.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/masking_policy snowflake_masking_policy}
*/
export class MaskingPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_masking_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MaskingPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MaskingPolicy to import
  * @param importFromId The id of the existing MaskingPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/masking_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MaskingPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_masking_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.84.0/docs/resources/masking_policy snowflake_masking_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MaskingPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: MaskingPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_masking_policy',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '0.84.0',
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
    this._comment = config.comment;
    this._database = config.database;
    this._exemptOtherPolicies = config.exemptOtherPolicies;
    this._id = config.id;
    this._ifNotExists = config.ifNotExists;
    this._maskingExpression = config.maskingExpression;
    this._name = config.name;
    this._orReplace = config.orReplace;
    this._returnDataType = config.returnDataType;
    this._schema = config.schema;
    this._signature.internalValue = config.signature;
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

  // exempt_other_policies - computed: false, optional: true, required: false
  private _exemptOtherPolicies?: boolean | cdktf.IResolvable; 
  public get exemptOtherPolicies() {
    return this.getBooleanAttribute('exempt_other_policies');
  }
  public set exemptOtherPolicies(value: boolean | cdktf.IResolvable) {
    this._exemptOtherPolicies = value;
  }
  public resetExemptOtherPolicies() {
    this._exemptOtherPolicies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exemptOtherPoliciesInput() {
    return this._exemptOtherPolicies;
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

  // if_not_exists - computed: false, optional: true, required: false
  private _ifNotExists?: boolean | cdktf.IResolvable; 
  public get ifNotExists() {
    return this.getBooleanAttribute('if_not_exists');
  }
  public set ifNotExists(value: boolean | cdktf.IResolvable) {
    this._ifNotExists = value;
  }
  public resetIfNotExists() {
    this._ifNotExists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifNotExistsInput() {
    return this._ifNotExists;
  }

  // masking_expression - computed: false, optional: false, required: true
  private _maskingExpression?: string; 
  public get maskingExpression() {
    return this.getStringAttribute('masking_expression');
  }
  public set maskingExpression(value: string) {
    this._maskingExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maskingExpressionInput() {
    return this._maskingExpression;
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

  // or_replace - computed: false, optional: true, required: false
  private _orReplace?: boolean | cdktf.IResolvable; 
  public get orReplace() {
    return this.getBooleanAttribute('or_replace');
  }
  public set orReplace(value: boolean | cdktf.IResolvable) {
    this._orReplace = value;
  }
  public resetOrReplace() {
    this._orReplace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orReplaceInput() {
    return this._orReplace;
  }

  // qualified_name - computed: true, optional: false, required: false
  public get qualifiedName() {
    return this.getStringAttribute('qualified_name');
  }

  // return_data_type - computed: false, optional: false, required: true
  private _returnDataType?: string; 
  public get returnDataType() {
    return this.getStringAttribute('return_data_type');
  }
  public set returnDataType(value: string) {
    this._returnDataType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get returnDataTypeInput() {
    return this._returnDataType;
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

  // signature - computed: false, optional: false, required: true
  private _signature = new MaskingPolicySignatureOutputReference(this, "signature");
  public get signature() {
    return this._signature;
  }
  public putSignature(value: MaskingPolicySignature) {
    this._signature.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureInput() {
    return this._signature.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      database: cdktf.stringToTerraform(this._database),
      exempt_other_policies: cdktf.booleanToTerraform(this._exemptOtherPolicies),
      id: cdktf.stringToTerraform(this._id),
      if_not_exists: cdktf.booleanToTerraform(this._ifNotExists),
      masking_expression: cdktf.stringToTerraform(this._maskingExpression),
      name: cdktf.stringToTerraform(this._name),
      or_replace: cdktf.booleanToTerraform(this._orReplace),
      return_data_type: cdktf.stringToTerraform(this._returnDataType),
      schema: cdktf.stringToTerraform(this._schema),
      signature: maskingPolicySignatureToTerraform(this._signature.internalValue),
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
      exempt_other_policies: {
        value: cdktf.booleanToHclTerraform(this._exemptOtherPolicies),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      if_not_exists: {
        value: cdktf.booleanToHclTerraform(this._ifNotExists),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      masking_expression: {
        value: cdktf.stringToHclTerraform(this._maskingExpression),
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
      or_replace: {
        value: cdktf.booleanToHclTerraform(this._orReplace),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      return_data_type: {
        value: cdktf.stringToHclTerraform(this._returnDataType),
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
      signature: {
        value: maskingPolicySignatureToHclTerraform(this._signature.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MaskingPolicySignatureList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
