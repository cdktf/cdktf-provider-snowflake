// https://www.terraform.io/docs/providers/snowflake/d/storage_integrations
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSnowflakeStorageIntegrationsConfig extends cdktf.TerraformMetaArguments {
}
export class DataSnowflakeStorageIntegrationsStorageIntegrations extends cdktf.ComplexComputedList {

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/snowflake/d/storage_integrations snowflake_storage_integrations}
*/
export class DataSnowflakeStorageIntegrations extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "snowflake_storage_integrations";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/snowflake/d/storage_integrations snowflake_storage_integrations} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSnowflakeStorageIntegrationsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSnowflakeStorageIntegrationsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'snowflake_storage_integrations',
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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // storage_integrations - computed: true, optional: false, required: false
  public storageIntegrations(index: string) {
    return new DataSnowflakeStorageIntegrationsStorageIntegrations(this, 'storage_integrations', index, false);
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }
}
