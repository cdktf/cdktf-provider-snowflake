/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/snowflake-labs/snowflake/0.91.0/docs/resources/stream
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StreamConfig extends cdktf.TerraformMetaArguments {
  /**
  * Type of the stream that will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.91.0/docs/resources/stream#append_only Stream#append_only}
  */
  readonly appendOnly?: boolean | cdktf.IResolvable;
  /**
  * Specifies a comment for the stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.91.0/docs/resources/stream#comment Stream#comment}
  */
  readonly comment?: string;
  /**
  * The database in which to create the stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.91.0/docs/resources/stream#database Stream#database}
  */
  readonly database: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.91.0/docs/resources/stream#id Stream#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Create an insert only stream type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.91.0/docs/resources/stream#insert_only Stream#insert_only}
  */
  readonly insertOnly?: boolean | cdktf.IResolvable;
  /**
  * Specifies the identifier for the stream; must be unique for the database and schema in which the stream is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.91.0/docs/resources/stream#name Stream#name}
  */
  readonly name: string;
  /**
  * Specifies an identifier for the stage the stream will monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.91.0/docs/resources/stream#on_stage Stream#on_stage}
  */
  readonly onStage?: string;
  /**
  * Specifies an identifier for the table the stream will monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.91.0/docs/resources/stream#on_table Stream#on_table}
  */
  readonly onTable?: string;
  /**
  * Specifies an identifier for the view the stream will monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.91.0/docs/resources/stream#on_view Stream#on_view}
  */
  readonly onView?: string;
  /**
  * The schema in which to create the stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.91.0/docs/resources/stream#schema Stream#schema}
  */
  readonly schema: string;
  /**
  * Specifies whether to return all existing rows in the source table as row inserts the first time the stream is consumed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.91.0/docs/resources/stream#show_initial_rows Stream#show_initial_rows}
  */
  readonly showInitialRows?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.91.0/docs/resources/stream snowflake_stream}
*/
export class Stream extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_stream";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Stream resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Stream to import
  * @param importFromId The id of the existing Stream that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.91.0/docs/resources/stream#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Stream to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_stream", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.91.0/docs/resources/stream snowflake_stream} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StreamConfig
  */
  public constructor(scope: Construct, id: string, config: StreamConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_stream',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '0.91.0',
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
    this._appendOnly = config.appendOnly;
    this._comment = config.comment;
    this._database = config.database;
    this._id = config.id;
    this._insertOnly = config.insertOnly;
    this._name = config.name;
    this._onStage = config.onStage;
    this._onTable = config.onTable;
    this._onView = config.onView;
    this._schema = config.schema;
    this._showInitialRows = config.showInitialRows;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // append_only - computed: false, optional: true, required: false
  private _appendOnly?: boolean | cdktf.IResolvable; 
  public get appendOnly() {
    return this.getBooleanAttribute('append_only');
  }
  public set appendOnly(value: boolean | cdktf.IResolvable) {
    this._appendOnly = value;
  }
  public resetAppendOnly() {
    this._appendOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appendOnlyInput() {
    return this._appendOnly;
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

  // insert_only - computed: false, optional: true, required: false
  private _insertOnly?: boolean | cdktf.IResolvable; 
  public get insertOnly() {
    return this.getBooleanAttribute('insert_only');
  }
  public set insertOnly(value: boolean | cdktf.IResolvable) {
    this._insertOnly = value;
  }
  public resetInsertOnly() {
    this._insertOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertOnlyInput() {
    return this._insertOnly;
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

  // on_stage - computed: false, optional: true, required: false
  private _onStage?: string; 
  public get onStage() {
    return this.getStringAttribute('on_stage');
  }
  public set onStage(value: string) {
    this._onStage = value;
  }
  public resetOnStage() {
    this._onStage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onStageInput() {
    return this._onStage;
  }

  // on_table - computed: false, optional: true, required: false
  private _onTable?: string; 
  public get onTable() {
    return this.getStringAttribute('on_table');
  }
  public set onTable(value: string) {
    this._onTable = value;
  }
  public resetOnTable() {
    this._onTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onTableInput() {
    return this._onTable;
  }

  // on_view - computed: false, optional: true, required: false
  private _onView?: string; 
  public get onView() {
    return this.getStringAttribute('on_view');
  }
  public set onView(value: string) {
    this._onView = value;
  }
  public resetOnView() {
    this._onView = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onViewInput() {
    return this._onView;
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

  // show_initial_rows - computed: false, optional: true, required: false
  private _showInitialRows?: boolean | cdktf.IResolvable; 
  public get showInitialRows() {
    return this.getBooleanAttribute('show_initial_rows');
  }
  public set showInitialRows(value: boolean | cdktf.IResolvable) {
    this._showInitialRows = value;
  }
  public resetShowInitialRows() {
    this._showInitialRows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showInitialRowsInput() {
    return this._showInitialRows;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      append_only: cdktf.booleanToTerraform(this._appendOnly),
      comment: cdktf.stringToTerraform(this._comment),
      database: cdktf.stringToTerraform(this._database),
      id: cdktf.stringToTerraform(this._id),
      insert_only: cdktf.booleanToTerraform(this._insertOnly),
      name: cdktf.stringToTerraform(this._name),
      on_stage: cdktf.stringToTerraform(this._onStage),
      on_table: cdktf.stringToTerraform(this._onTable),
      on_view: cdktf.stringToTerraform(this._onView),
      schema: cdktf.stringToTerraform(this._schema),
      show_initial_rows: cdktf.booleanToTerraform(this._showInitialRows),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      append_only: {
        value: cdktf.booleanToHclTerraform(this._appendOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
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
      insert_only: {
        value: cdktf.booleanToHclTerraform(this._insertOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      on_stage: {
        value: cdktf.stringToHclTerraform(this._onStage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      on_table: {
        value: cdktf.stringToHclTerraform(this._onTable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      on_view: {
        value: cdktf.stringToHclTerraform(this._onView),
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
      show_initial_rows: {
        value: cdktf.booleanToHclTerraform(this._showInitialRows),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
