/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/data-sources/system_get_snowflake_platform_info
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSnowflakeSystemGetSnowflakePlatformInfoConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/data-sources/system_get_snowflake_platform_info#id DataSnowflakeSystemGetSnowflakePlatformInfo#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/data-sources/system_get_snowflake_platform_info snowflake_system_get_snowflake_platform_info}
*/
export class DataSnowflakeSystemGetSnowflakePlatformInfo extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_system_get_snowflake_platform_info";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSnowflakeSystemGetSnowflakePlatformInfo resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSnowflakeSystemGetSnowflakePlatformInfo to import
  * @param importFromId The id of the existing DataSnowflakeSystemGetSnowflakePlatformInfo that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/data-sources/system_get_snowflake_platform_info#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSnowflakeSystemGetSnowflakePlatformInfo to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_system_get_snowflake_platform_info", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/data-sources/system_get_snowflake_platform_info snowflake_system_get_snowflake_platform_info} Data Source
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
        providerVersion: '0.87.2',
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

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
