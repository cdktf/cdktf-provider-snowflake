// https://www.terraform.io/docs/providers/snowflake/d/system_get_snowflake_platform_info
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSnowflakeSystemGetSnowflakePlatformInfoConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/d/system_get_snowflake_platform_info#id DataSnowflakeSystemGetSnowflakePlatformInfo#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/snowflake/d/system_get_snowflake_platform_info snowflake_system_get_snowflake_platform_info}
*/
export class DataSnowflakeSystemGetSnowflakePlatformInfo extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_system_get_snowflake_platform_info";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/snowflake/d/system_get_snowflake_platform_info snowflake_system_get_snowflake_platform_info} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSnowflakeSystemGetSnowflakePlatformInfoConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSnowflakeSystemGetSnowflakePlatformInfoConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'snowflake_system_get_snowflake_platform_info',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '0.33.1',
        providerVersionConstraint: ' ~> 0.25'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_vpc_ids - computed: true, optional: false, required: false
  public get awsVpcIds() {
    return this.getListAttribute('aws_vpc_ids');
  }

  // azure_vnet_subnet_ids - computed: true, optional: false, required: false
  public get azureVnetSubnetIds() {
    return this.getListAttribute('azure_vnet_subnet_ids');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
