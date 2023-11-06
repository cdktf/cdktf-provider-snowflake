/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/snowflake-labs/snowflake/0.75.0/docs/resources/table_column_masking_policy_application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TableColumnMaskingPolicyApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The column to apply the masking policy to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.75.0/docs/resources/table_column_masking_policy_application#column TableColumnMaskingPolicyApplication#column}
  */
  readonly column: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.75.0/docs/resources/table_column_masking_policy_application#id TableColumnMaskingPolicyApplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Fully qualified name (`database.schema.policyname`) of the policy to apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.75.0/docs/resources/table_column_masking_policy_application#masking_policy TableColumnMaskingPolicyApplication#masking_policy}
  */
  readonly maskingPolicy: string;
  /**
  * The fully qualified name (`database.schema.table`) of the table to apply the masking policy to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.75.0/docs/resources/table_column_masking_policy_application#table TableColumnMaskingPolicyApplication#table}
  */
  readonly table: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.75.0/docs/resources/table_column_masking_policy_application snowflake_table_column_masking_policy_application}
*/
export class TableColumnMaskingPolicyApplication extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_table_column_masking_policy_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TableColumnMaskingPolicyApplication resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TableColumnMaskingPolicyApplication to import
  * @param importFromId The id of the existing TableColumnMaskingPolicyApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.75.0/docs/resources/table_column_masking_policy_application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TableColumnMaskingPolicyApplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_table_column_masking_policy_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.75.0/docs/resources/table_column_masking_policy_application snowflake_table_column_masking_policy_application} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TableColumnMaskingPolicyApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: TableColumnMaskingPolicyApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_table_column_masking_policy_application',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '0.75.0',
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
    this._column = config.column;
    this._id = config.id;
    this._maskingPolicy = config.maskingPolicy;
    this._table = config.table;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // column - computed: false, optional: false, required: true
  private _column?: string; 
  public get column() {
    return this.getStringAttribute('column');
  }
  public set column(value: string) {
    this._column = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column;
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

  // masking_policy - computed: false, optional: false, required: true
  private _maskingPolicy?: string; 
  public get maskingPolicy() {
    return this.getStringAttribute('masking_policy');
  }
  public set maskingPolicy(value: string) {
    this._maskingPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maskingPolicyInput() {
    return this._maskingPolicy;
  }

  // table - computed: false, optional: false, required: true
  private _table?: string; 
  public get table() {
    return this.getStringAttribute('table');
  }
  public set table(value: string) {
    this._table = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      column: cdktf.stringToTerraform(this._column),
      id: cdktf.stringToTerraform(this._id),
      masking_policy: cdktf.stringToTerraform(this._maskingPolicy),
      table: cdktf.stringToTerraform(this._table),
    };
  }
}
