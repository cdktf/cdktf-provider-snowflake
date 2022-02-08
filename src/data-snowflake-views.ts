// https://www.terraform.io/docs/providers/snowflake/d/views
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSnowflakeViewsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The database from which to return the schemas from.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/d/views#database DataSnowflakeViews#database}
  */
  readonly database: string;
  /**
  * The schema from which to return the views from.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/d/views#schema DataSnowflakeViews#schema}
  */
  readonly schema: string;
}
export class DataSnowflakeViewsViews extends cdktf.ComplexComputedList {

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

  // schema - computed: true, optional: false, required: false
  public get schema() {
    return this.getStringAttribute('schema');
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/snowflake/d/views snowflake_views}
*/
export class DataSnowflakeViews extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "snowflake_views";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/snowflake/d/views snowflake_views} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSnowflakeViewsConfig
  */
  public constructor(scope: Construct, id: string, config: DataSnowflakeViewsConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_views',
      terraformGeneratorMetadata: {
        providerName: 'snowflake'
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

  // views - computed: true, optional: false, required: false
  public views(index: string) {
    return new DataSnowflakeViewsViews(this, 'views', index, false);
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
