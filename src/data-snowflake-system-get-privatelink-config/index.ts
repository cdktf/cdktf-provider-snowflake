/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.3/docs/data-sources/system_get_privatelink_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSnowflakeSystemGetPrivatelinkConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.3/docs/data-sources/system_get_privatelink_config#id DataSnowflakeSystemGetPrivatelinkConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.3/docs/data-sources/system_get_privatelink_config snowflake_system_get_privatelink_config}
*/
export class DataSnowflakeSystemGetPrivatelinkConfig extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_system_get_privatelink_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSnowflakeSystemGetPrivatelinkConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSnowflakeSystemGetPrivatelinkConfig to import
  * @param importFromId The id of the existing DataSnowflakeSystemGetPrivatelinkConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.3/docs/data-sources/system_get_privatelink_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSnowflakeSystemGetPrivatelinkConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_system_get_privatelink_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.3/docs/data-sources/system_get_privatelink_config snowflake_system_get_privatelink_config} Data Source
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
        providerVersion: '1.0.3',
        providerVersionConstraint: ' ~> 1.0'
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

  // internal_stage - computed: true, optional: false, required: false
  public get internalStage() {
    return this.getStringAttribute('internal_stage');
  }

  // ocsp_url - computed: true, optional: false, required: false
  public get ocspUrl() {
    return this.getStringAttribute('ocsp_url');
  }

  // regionless_account_url - computed: true, optional: false, required: false
  public get regionlessAccountUrl() {
    return this.getStringAttribute('regionless_account_url');
  }

  // regionless_snowsight_url - computed: true, optional: false, required: false
  public get regionlessSnowsightUrl() {
    return this.getStringAttribute('regionless_snowsight_url');
  }

  // snowsight_url - computed: true, optional: false, required: false
  public get snowsightUrl() {
    return this.getStringAttribute('snowsight_url');
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
