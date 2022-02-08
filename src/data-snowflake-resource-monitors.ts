// https://www.terraform.io/docs/providers/snowflake/d/resource_monitors
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSnowflakeResourceMonitorsConfig extends cdktf.TerraformMetaArguments {
}
export class DataSnowflakeResourceMonitorsResourceMonitors extends cdktf.ComplexComputedList {

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // credit_quota - computed: true, optional: false, required: false
  public get creditQuota() {
    return this.getStringAttribute('credit_quota');
  }

  // frequency - computed: true, optional: false, required: false
  public get frequency() {
    return this.getStringAttribute('frequency');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/snowflake/d/resource_monitors snowflake_resource_monitors}
*/
export class DataSnowflakeResourceMonitors extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "snowflake_resource_monitors";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/snowflake/d/resource_monitors snowflake_resource_monitors} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSnowflakeResourceMonitorsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSnowflakeResourceMonitorsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'snowflake_resource_monitors',
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

  // resource_monitors - computed: true, optional: false, required: false
  public resourceMonitors(index: string) {
    return new DataSnowflakeResourceMonitorsResourceMonitors(this, 'resource_monitors', index, false);
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }
}
