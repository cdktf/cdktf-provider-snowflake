// https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.1/docs/resources/row_access_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RowAccessPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies a comment for the row access policy.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.1/docs/resources/row_access_policy#comment RowAccessPolicy#comment}
  */
  readonly comment?: string;
  /**
  * The database in which to create the row access policy.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.1/docs/resources/row_access_policy#database RowAccessPolicy#database}
  */
  readonly database: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.1/docs/resources/row_access_policy#id RowAccessPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the identifier for the row access policy; must be unique for the database and schema in which the row access policy is created.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.1/docs/resources/row_access_policy#name RowAccessPolicy#name}
  */
  readonly name: string;
  /**
  * Specifies the SQL expression. The expression can be any boolean-valued SQL expression.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.1/docs/resources/row_access_policy#row_access_expression RowAccessPolicy#row_access_expression}
  */
  readonly rowAccessExpression: string;
  /**
  * The schema in which to create the row access policy.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.1/docs/resources/row_access_policy#schema RowAccessPolicy#schema}
  */
  readonly schema: string;
  /**
  * Specifies signature (arguments) for the row access policy (uppercase and sorted to avoid recreation of resource). A signature specifies a set of attributes that must be considered to determine whether the row is accessible. The attribute values come from the database object (e.g. table or view) to be protected by the row access policy.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.1/docs/resources/row_access_policy#signature RowAccessPolicy#signature}
  */
  readonly signature: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.1/docs/resources/row_access_policy snowflake_row_access_policy}
*/
export class RowAccessPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_row_access_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.68.1/docs/resources/row_access_policy snowflake_row_access_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RowAccessPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: RowAccessPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_row_access_policy',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '0.68.1',
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
    this._name = config.name;
    this._rowAccessExpression = config.rowAccessExpression;
    this._schema = config.schema;
    this._signature = config.signature;
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

  // row_access_expression - computed: false, optional: false, required: true
  private _rowAccessExpression?: string; 
  public get rowAccessExpression() {
    return this.getStringAttribute('row_access_expression');
  }
  public set rowAccessExpression(value: string) {
    this._rowAccessExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rowAccessExpressionInput() {
    return this._rowAccessExpression;
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
  private _signature?: { [key: string]: string }; 
  public get signature() {
    return this.getStringMapAttribute('signature');
  }
  public set signature(value: { [key: string]: string }) {
    this._signature = value;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureInput() {
    return this._signature;
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
      row_access_expression: cdktf.stringToTerraform(this._rowAccessExpression),
      schema: cdktf.stringToTerraform(this._schema),
      signature: cdktf.hashMapper(cdktf.stringToTerraform)(this._signature),
    };
  }
}
