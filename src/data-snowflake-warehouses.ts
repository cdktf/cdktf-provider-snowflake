// https://www.terraform.io/docs/providers/snowflake/d/warehouses
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSnowflakeWarehousesConfig extends cdktf.TerraformMetaArguments {
}
export class DataSnowflakeWarehousesWarehouses extends cdktf.ComplexComputedList {

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // scaling_policy - computed: true, optional: false, required: false
  public get scalingPolicy() {
    return this.getStringAttribute('scaling_policy');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getStringAttribute('size');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/snowflake/d/warehouses snowflake_warehouses}
*/
export class DataSnowflakeWarehouses extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "snowflake_warehouses";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/snowflake/d/warehouses snowflake_warehouses} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSnowflakeWarehousesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSnowflakeWarehousesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'snowflake_warehouses',
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

  // warehouses - computed: true, optional: false, required: false
  public warehouses(index: string) {
    return new DataSnowflakeWarehousesWarehouses(this, 'warehouses', index, false);
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }
}
