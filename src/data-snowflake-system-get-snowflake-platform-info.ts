// https://www.terraform.io/docs/providers/snowflake/d/system_get_snowflake_platform_info
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSnowflakeSystemGetSnowflakePlatformInfoConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/snowflake/d/system_get_snowflake_platform_info snowflake_system_get_snowflake_platform_info}
*/
export class DataSnowflakeSystemGetSnowflakePlatformInfo extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "snowflake_system_get_snowflake_platform_info";

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
        providerName: 'snowflake'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
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
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }
}
