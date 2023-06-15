// https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/data-sources/current_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSnowflakeCurrentRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/data-sources/current_role#id DataSnowflakeCurrentRole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/data-sources/current_role snowflake_current_role}
*/
export class DataSnowflakeCurrentRole extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_current_role";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.66.2/docs/data-sources/current_role snowflake_current_role} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSnowflakeCurrentRoleConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSnowflakeCurrentRoleConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'snowflake_current_role',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '0.66.2',
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
