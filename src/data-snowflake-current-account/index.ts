// https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/data-sources/current_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSnowflakeCurrentAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/data-sources/current_account#id DataSnowflakeCurrentAccount#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/data-sources/current_account snowflake_current_account}
*/
export class DataSnowflakeCurrentAccount extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_current_account";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.0/docs/data-sources/current_account snowflake_current_account} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSnowflakeCurrentAccountConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSnowflakeCurrentAccountConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'snowflake_current_account',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '0.70.0',
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

  // account - computed: true, optional: false, required: false
  public get account() {
    return this.getStringAttribute('account');
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

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
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
