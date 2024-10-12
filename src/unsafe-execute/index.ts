// https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/unsafe_execute
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UnsafeExecuteConfig extends cdktf.TerraformMetaArguments {
  /**
  * SQL statement to execute. Forces recreation of resource on change.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/unsafe_execute#execute UnsafeExecute#execute}
  */
  readonly execute: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/unsafe_execute#id UnsafeExecute#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Optional SQL statement to do a read. Invoked after creation and every time it is changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/unsafe_execute#query UnsafeExecute#query}
  */
  readonly query?: string;
  /**
  * SQL statement to revert the execute statement. Invoked when resource is being destroyed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/unsafe_execute#revert UnsafeExecute#revert}
  */
  readonly revert: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/unsafe_execute snowflake_unsafe_execute}
*/
export class UnsafeExecute extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_unsafe_execute";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UnsafeExecute resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UnsafeExecute to import
  * @param importFromId The id of the existing UnsafeExecute that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/unsafe_execute#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UnsafeExecute to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_unsafe_execute", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/resources/unsafe_execute snowflake_unsafe_execute} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UnsafeExecuteConfig
  */
  public constructor(scope: Construct, id: string, config: UnsafeExecuteConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_unsafe_execute',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '0.97.0',
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
    this._execute = config.execute;
    this._id = config.id;
    this._query = config.query;
    this._revert = config.revert;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // execute - computed: false, optional: false, required: true
  private _execute?: string; 
  public get execute() {
    return this.getStringAttribute('execute');
  }
  public set execute(value: string) {
    this._execute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executeInput() {
    return this._execute;
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

  // query - computed: false, optional: true, required: false
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  public resetQuery() {
    this._query = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // query_results - computed: true, optional: false, required: false
  private _queryResults = new cdktf.StringMapList(this, "query_results", false);
  public get queryResults() {
    return this._queryResults;
  }

  // revert - computed: false, optional: false, required: true
  private _revert?: string; 
  public get revert() {
    return this.getStringAttribute('revert');
  }
  public set revert(value: string) {
    this._revert = value;
  }
  // Temporarily expose input value. Use with caution.
  public get revertInput() {
    return this._revert;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      execute: cdktf.stringToTerraform(this._execute),
      id: cdktf.stringToTerraform(this._id),
      query: cdktf.stringToTerraform(this._query),
      revert: cdktf.stringToTerraform(this._revert),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      execute: {
        value: cdktf.stringToHclTerraform(this._execute),
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
      query: {
        value: cdktf.stringToHclTerraform(this._query),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      revert: {
        value: cdktf.stringToHclTerraform(this._revert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
