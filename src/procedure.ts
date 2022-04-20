// https://www.terraform.io/docs/providers/snowflake/r/procedure
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProcedureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies a comment for the procedure.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure#comment Procedure#comment}
  */
  readonly comment?: string;
  /**
  * The database in which to create the procedure. Don't use the | character.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure#database Procedure#database}
  */
  readonly database: string;
  /**
  * Sets execute context - see caller's rights and owner's rights
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure#execute_as Procedure#execute_as}
  */
  readonly executeAs?: string;
  /**
  * Specifies the identifier for the procedure; does not have to be unique for the schema in which the procedure is created. Don't use the | character.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure#name Procedure#name}
  */
  readonly name: string;
  /**
  * Specifies the behavior of the procedure when called with null inputs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure#null_input_behavior Procedure#null_input_behavior}
  */
  readonly nullInputBehavior?: string;
  /**
  * Specifies the behavior of the function when returning results
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure#return_behavior Procedure#return_behavior}
  */
  readonly returnBehavior?: string;
  /**
  * The return type of the procedure
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure#return_type Procedure#return_type}
  */
  readonly returnType: string;
  /**
  * The schema in which to create the procedure. Don't use the | character.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure#schema Procedure#schema}
  */
  readonly schema: string;
  /**
  * Specifies the javascript code used to create the procedure.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure#statement Procedure#statement}
  */
  readonly statement: string;
  /**
  * arguments block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure#arguments Procedure#arguments}
  */
  readonly arguments?: ProcedureArguments[] | cdktf.IResolvable;
}
export interface ProcedureArguments {
  /**
  * The argument name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure#name Procedure#name}
  */
  readonly name: string;
  /**
  * The argument type
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure#type Procedure#type}
  */
  readonly type: string;
}

export function procedureArgumentsToTerraform(struct?: ProcedureArguments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/procedure snowflake_procedure}
*/
export class Procedure extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_procedure";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/snowflake/r/procedure snowflake_procedure} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProcedureConfig
  */
  public constructor(scope: Construct, id: string, config: ProcedureConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_procedure',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '0.32.0',
        providerVersionConstraint: ' ~> 0.25'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._comment = config.comment;
    this._database = config.database;
    this._executeAs = config.executeAs;
    this._name = config.name;
    this._nullInputBehavior = config.nullInputBehavior;
    this._returnBehavior = config.returnBehavior;
    this._returnType = config.returnType;
    this._schema = config.schema;
    this._statement = config.statement;
    this._arguments = config.arguments;
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

  // execute_as - computed: false, optional: true, required: false
  private _executeAs?: string; 
  public get executeAs() {
    return this.getStringAttribute('execute_as');
  }
  public set executeAs(value: string) {
    this._executeAs = value;
  }
  public resetExecuteAs() {
    this._executeAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executeAsInput() {
    return this._executeAs;
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

  // return_behavior - computed: false, optional: true, required: false
  private _returnBehavior?: string; 
  public get returnBehavior() {
    return this.getStringAttribute('return_behavior');
  }
  public set returnBehavior(value: string) {
    this._returnBehavior = value;
  }
  public resetReturnBehavior() {
    this._returnBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnBehaviorInput() {
    return this._returnBehavior;
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

  // arguments - computed: false, optional: true, required: false
  private _arguments?: ProcedureArguments[] | cdktf.IResolvable; 
  public get arguments() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('arguments');
  }
  public set arguments(value: ProcedureArguments[] | cdktf.IResolvable) {
    this._arguments = value;
  }
  public resetArguments() {
    this._arguments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argumentsInput() {
    return this._arguments;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      database: cdktf.stringToTerraform(this._database),
      execute_as: cdktf.stringToTerraform(this._executeAs),
      name: cdktf.stringToTerraform(this._name),
      null_input_behavior: cdktf.stringToTerraform(this._nullInputBehavior),
      return_behavior: cdktf.stringToTerraform(this._returnBehavior),
      return_type: cdktf.stringToTerraform(this._returnType),
      schema: cdktf.stringToTerraform(this._schema),
      statement: cdktf.stringToTerraform(this._statement),
      arguments: cdktf.listMapper(procedureArgumentsToTerraform)(this._arguments),
    };
  }
}
