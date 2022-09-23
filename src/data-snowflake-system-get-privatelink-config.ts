// https://www.terraform.io/docs/providers/snowflake/d/system_get_privatelink_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSnowflakeSystemGetPrivatelinkConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/d/system_get_privatelink_config#id DataSnowflakeSystemGetPrivatelinkConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/snowflake/d/system_get_privatelink_config snowflake_system_get_privatelink_config}
*/
export class DataSnowflakeSystemGetPrivatelinkConfig extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_system_get_privatelink_config";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/snowflake/d/system_get_privatelink_config snowflake_system_get_privatelink_config} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSnowflakeSystemGetPrivatelinkConfigConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSnowflakeSystemGetPrivatelinkConfigConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'snowflake_system_get_privatelink_config',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '0.45.0',
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

  // account_name - computed: true, optional: false, required: false
  public get accountName() {
    return this.getStringAttribute('account_name');
  }

  // account_url - computed: true, optional: false, required: false
  public get accountUrl() {
    return this.getStringAttribute('account_url');
  }

  // aws_vpce_id - computed: true, optional: false, required: false
  public get awsVpceId() {
    return this.getStringAttribute('aws_vpce_id');
  }

  // azure_pls_id - computed: true, optional: false, required: false
  public get azurePlsId() {
    return this.getStringAttribute('azure_pls_id');
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

  // ocsp_url - computed: true, optional: false, required: false
  public get ocspUrl() {
    return this.getStringAttribute('ocsp_url');
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
