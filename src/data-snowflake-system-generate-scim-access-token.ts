// https://www.terraform.io/docs/providers/snowflake/d/system_generate_scim_access_token
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSnowflakeSystemGenerateScimAccessTokenConfig extends cdktf.TerraformMetaArguments {
  /**
  * SCIM Integration Name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/d/system_generate_scim_access_token#integration_name DataSnowflakeSystemGenerateScimAccessToken#integration_name}
  */
  readonly integrationName: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/snowflake/d/system_generate_scim_access_token snowflake_system_generate_scim_access_token}
*/
export class DataSnowflakeSystemGenerateScimAccessToken extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_system_generate_scim_access_token";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/snowflake/d/system_generate_scim_access_token snowflake_system_generate_scim_access_token} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSnowflakeSystemGenerateScimAccessTokenConfig
  */
  public constructor(scope: Construct, id: string, config: DataSnowflakeSystemGenerateScimAccessTokenConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_system_generate_scim_access_token',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '0.29.0',
        providerVersionConstraint: ' ~> 0.25'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._integrationName = config.integrationName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_token - computed: true, optional: false, required: false
  public get accessToken() {
    return this.getStringAttribute('access_token');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // integration_name - computed: false, optional: false, required: true
  private _integrationName?: string; 
  public get integrationName() {
    return this.getStringAttribute('integration_name');
  }
  public set integrationName(value: string) {
    this._integrationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationNameInput() {
    return this._integrationName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      integration_name: cdktf.stringToTerraform(this._integrationName),
    };
  }
}
