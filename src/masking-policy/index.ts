// https://registry.terraform.io/providers/snowflake-labs/snowflake/0.62.0/docs/resources/masking_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MaskingPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies a comment for the masking policy.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.62.0/docs/resources/masking_policy#comment MaskingPolicy#comment}
  */
  readonly comment?: string;
  /**
  * The database in which to create the masking policy.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.62.0/docs/resources/masking_policy#database MaskingPolicy#database}
  */
  readonly database: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.62.0/docs/resources/masking_policy#id MaskingPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the SQL expression that transforms the data.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.62.0/docs/resources/masking_policy#masking_expression MaskingPolicy#masking_expression}
  */
  readonly maskingExpression: string;
  /**
  * Specifies the identifier for the masking policy; must be unique for the database and schema in which the masking policy is created.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.62.0/docs/resources/masking_policy#name MaskingPolicy#name}
  */
  readonly name: string;
  /**
  * Specifies the data type to return.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.62.0/docs/resources/masking_policy#return_data_type MaskingPolicy#return_data_type}
  */
  readonly returnDataType: string;
  /**
  * The schema in which to create the masking policy.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.62.0/docs/resources/masking_policy#schema MaskingPolicy#schema}
  */
  readonly schema: string;
  /**
  * Specifies the data type to mask.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.62.0/docs/resources/masking_policy#value_data_type MaskingPolicy#value_data_type}
  */
  readonly valueDataType: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.62.0/docs/resources/masking_policy snowflake_masking_policy}
*/
export class MaskingPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_masking_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.62.0/docs/resources/masking_policy snowflake_masking_policy} Resource
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
        providerVersion: '0.62.0',
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
    this._id = config.id;
    this._maskingExpression = config.maskingExpression;
    this._name = config.name;
    this._returnDataType = config.returnDataType;
    this._schema = config.schema;
    this._valueDataType = config.valueDataType;
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

  // value_data_type - computed: false, optional: false, required: true
  private _valueDataType?: string; 
  public get valueDataType() {
    return this.getStringAttribute('value_data_type');
  }
  public set valueDataType(value: string) {
    this._valueDataType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueDataTypeInput() {
    return this._valueDataType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      database: cdktf.stringToTerraform(this._database),
      id: cdktf.stringToTerraform(this._id),
      masking_expression: cdktf.stringToTerraform(this._maskingExpression),
      name: cdktf.stringToTerraform(this._name),
      return_data_type: cdktf.stringToTerraform(this._returnDataType),
      schema: cdktf.stringToTerraform(this._schema),
      value_data_type: cdktf.stringToTerraform(this._valueDataType),
    };
  }
}
