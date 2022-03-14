// https://www.terraform.io/docs/providers/snowflake/d/databases
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSnowflakeDatabasesConfig extends cdktf.TerraformMetaArguments {
}
export class DataSnowflakeDatabasesDatabases extends cdktf.ComplexComputedList {

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // is_current - computed: true, optional: false, required: false
  public get isCurrent() {
    return this.getBooleanAttribute('is_current');
  }

  // is_default - computed: true, optional: false, required: false
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // options - computed: true, optional: false, required: false
  public get options() {
    return this.getStringAttribute('options');
  }

  // origin - computed: true, optional: false, required: false
  public get origin() {
    return this.getStringAttribute('origin');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // retention_time - computed: true, optional: false, required: false
  public get retentionTime() {
    return this.getNumberAttribute('retention_time');
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/snowflake/d/databases snowflake_databases}
*/
export class DataSnowflakeDatabases extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "snowflake_databases";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/snowflake/d/databases snowflake_databases} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSnowflakeDatabasesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSnowflakeDatabasesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'snowflake_databases',
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

  // databases - computed: true, optional: false, required: false
  public databases(index: string) {
    return new DataSnowflakeDatabasesDatabases(this, 'databases', index, false);
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
