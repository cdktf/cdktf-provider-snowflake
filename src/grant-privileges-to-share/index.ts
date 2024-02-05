/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/snowflake-labs/snowflake/0.85.0/docs/resources/grant_privileges_to_share
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GrantPrivilegesToShareConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.85.0/docs/resources/grant_privileges_to_share#id GrantPrivilegesToShare#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The fully qualified identifier for the schema for which the specified privilege will be granted for all tables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.85.0/docs/resources/grant_privileges_to_share#on_all_tables_in_schema GrantPrivilegesToShare#on_all_tables_in_schema}
  */
  readonly onAllTablesInSchema?: string;
  /**
  * The fully qualified name of the database on which privileges will be granted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.85.0/docs/resources/grant_privileges_to_share#on_database GrantPrivilegesToShare#on_database}
  */
  readonly onDatabase?: string;
  /**
  * The fully qualified name of the schema on which privileges will be granted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.85.0/docs/resources/grant_privileges_to_share#on_schema GrantPrivilegesToShare#on_schema}
  */
  readonly onSchema?: string;
  /**
  * The fully qualified name of the table on which privileges will be granted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.85.0/docs/resources/grant_privileges_to_share#on_table GrantPrivilegesToShare#on_table}
  */
  readonly onTable?: string;
  /**
  * The fully qualified name of the tag on which privileges will be granted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.85.0/docs/resources/grant_privileges_to_share#on_tag GrantPrivilegesToShare#on_tag}
  */
  readonly onTag?: string;
  /**
  * The fully qualified name of the view on which privileges will be granted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.85.0/docs/resources/grant_privileges_to_share#on_view GrantPrivilegesToShare#on_view}
  */
  readonly onView?: string;
  /**
  * The privileges to grant on the share. See available list of privileges: https://docs.snowflake.com/en/sql-reference/sql/grant-privilege-share#syntax
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.85.0/docs/resources/grant_privileges_to_share#privileges GrantPrivilegesToShare#privileges}
  */
  readonly privileges: string[];
  /**
  * The fully qualified name of the share on which privileges will be granted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.85.0/docs/resources/grant_privileges_to_share#to_share GrantPrivilegesToShare#to_share}
  */
  readonly toShare: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.85.0/docs/resources/grant_privileges_to_share snowflake_grant_privileges_to_share}
*/
export class GrantPrivilegesToShare extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_grant_privileges_to_share";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GrantPrivilegesToShare resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GrantPrivilegesToShare to import
  * @param importFromId The id of the existing GrantPrivilegesToShare that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.85.0/docs/resources/grant_privileges_to_share#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GrantPrivilegesToShare to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_grant_privileges_to_share", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.85.0/docs/resources/grant_privileges_to_share snowflake_grant_privileges_to_share} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GrantPrivilegesToShareConfig
  */
  public constructor(scope: Construct, id: string, config: GrantPrivilegesToShareConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_grant_privileges_to_share',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '0.85.0',
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
    this._onAllTablesInSchema = config.onAllTablesInSchema;
    this._onDatabase = config.onDatabase;
    this._onSchema = config.onSchema;
    this._onTable = config.onTable;
    this._onTag = config.onTag;
    this._onView = config.onView;
    this._privileges = config.privileges;
    this._toShare = config.toShare;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // on_all_tables_in_schema - computed: false, optional: true, required: false
  private _onAllTablesInSchema?: string; 
  public get onAllTablesInSchema() {
    return this.getStringAttribute('on_all_tables_in_schema');
  }
  public set onAllTablesInSchema(value: string) {
    this._onAllTablesInSchema = value;
  }
  public resetOnAllTablesInSchema() {
    this._onAllTablesInSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onAllTablesInSchemaInput() {
    return this._onAllTablesInSchema;
  }

  // on_database - computed: false, optional: true, required: false
  private _onDatabase?: string; 
  public get onDatabase() {
    return this.getStringAttribute('on_database');
  }
  public set onDatabase(value: string) {
    this._onDatabase = value;
  }
  public resetOnDatabase() {
    this._onDatabase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDatabaseInput() {
    return this._onDatabase;
  }

  // on_schema - computed: false, optional: true, required: false
  private _onSchema?: string; 
  public get onSchema() {
    return this.getStringAttribute('on_schema');
  }
  public set onSchema(value: string) {
    this._onSchema = value;
  }
  public resetOnSchema() {
    this._onSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onSchemaInput() {
    return this._onSchema;
  }

  // on_table - computed: false, optional: true, required: false
  private _onTable?: string; 
  public get onTable() {
    return this.getStringAttribute('on_table');
  }
  public set onTable(value: string) {
    this._onTable = value;
  }
  public resetOnTable() {
    this._onTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onTableInput() {
    return this._onTable;
  }

  // on_tag - computed: false, optional: true, required: false
  private _onTag?: string; 
  public get onTag() {
    return this.getStringAttribute('on_tag');
  }
  public set onTag(value: string) {
    this._onTag = value;
  }
  public resetOnTag() {
    this._onTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onTagInput() {
    return this._onTag;
  }

  // on_view - computed: false, optional: true, required: false
  private _onView?: string; 
  public get onView() {
    return this.getStringAttribute('on_view');
  }
  public set onView(value: string) {
    this._onView = value;
  }
  public resetOnView() {
    this._onView = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onViewInput() {
    return this._onView;
  }

  // privileges - computed: false, optional: false, required: true
  private _privileges?: string[]; 
  public get privileges() {
    return cdktf.Fn.tolist(this.getListAttribute('privileges'));
  }
  public set privileges(value: string[]) {
    this._privileges = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegesInput() {
    return this._privileges;
  }

  // to_share - computed: false, optional: false, required: true
  private _toShare?: string; 
  public get toShare() {
    return this.getStringAttribute('to_share');
  }
  public set toShare(value: string) {
    this._toShare = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toShareInput() {
    return this._toShare;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      on_all_tables_in_schema: cdktf.stringToTerraform(this._onAllTablesInSchema),
      on_database: cdktf.stringToTerraform(this._onDatabase),
      on_schema: cdktf.stringToTerraform(this._onSchema),
      on_table: cdktf.stringToTerraform(this._onTable),
      on_tag: cdktf.stringToTerraform(this._onTag),
      on_view: cdktf.stringToTerraform(this._onView),
      privileges: cdktf.listMapper(cdktf.stringToTerraform, false)(this._privileges),
      to_share: cdktf.stringToTerraform(this._toShare),
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
      on_all_tables_in_schema: {
        value: cdktf.stringToHclTerraform(this._onAllTablesInSchema),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      on_database: {
        value: cdktf.stringToHclTerraform(this._onDatabase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      on_schema: {
        value: cdktf.stringToHclTerraform(this._onSchema),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      on_table: {
        value: cdktf.stringToHclTerraform(this._onTable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      on_tag: {
        value: cdktf.stringToHclTerraform(this._onTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      on_view: {
        value: cdktf.stringToHclTerraform(this._onView),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      privileges: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._privileges),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      to_share: {
        value: cdktf.stringToHclTerraform(this._toShare),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
