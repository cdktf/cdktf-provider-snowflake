// https://www.terraform.io/docs/providers/snowflake/d/procedures
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSnowflakeProceduresConfig extends cdktf.TerraformMetaArguments {
  /**
  * The database from which to return the schemas from.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/d/procedures#database DataSnowflakeProcedures#database}
  */
  readonly database: string;
  /**
  * The schema from which to return the procedures from.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/d/procedures#schema DataSnowflakeProcedures#schema}
  */
  readonly schema: string;
}
export interface DataSnowflakeProceduresProcedures {
}

export function dataSnowflakeProceduresProceduresToTerraform(struct?: DataSnowflakeProceduresProcedures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataSnowflakeProceduresProceduresOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSnowflakeProceduresProcedures | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeProceduresProcedures | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // argument_types - computed: true, optional: false, required: false
  public get argumentTypes() {
    return this.getListAttribute('argument_types');
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // return_type - computed: true, optional: false, required: false
  public get returnType() {
    return this.getStringAttribute('return_type');
  }

  // schema - computed: true, optional: false, required: false
  public get schema() {
    return this.getStringAttribute('schema');
  }
}

export class DataSnowflakeProceduresProceduresList extends cdktf.ComplexList {

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
  public get(index: number): DataSnowflakeProceduresProceduresOutputReference {
    return new DataSnowflakeProceduresProceduresOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/snowflake/d/procedures snowflake_procedures}
*/
export class DataSnowflakeProcedures extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_procedures";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/snowflake/d/procedures snowflake_procedures} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSnowflakeProceduresConfig
  */
  public constructor(scope: Construct, id: string, config: DataSnowflakeProceduresConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_procedures',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '0.30.0',
        providerVersionConstraint: ' ~> 0.25'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._database = config.database;
    this._schema = config.schema;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // procedures - computed: true, optional: false, required: false
  private _procedures = new DataSnowflakeProceduresProceduresList(this, "procedures", false);
  public get procedures() {
    return this._procedures;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      database: cdktf.stringToTerraform(this._database),
      schema: cdktf.stringToTerraform(this._schema),
    };
  }
}
