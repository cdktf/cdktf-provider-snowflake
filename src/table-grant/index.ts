// https://www.terraform.io/docs/providers/snowflake/r/table_grant
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TableGrantConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the database containing the current or future tables on which to grant privileges.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/table_grant#database_name TableGrant#database_name}
  */
  readonly databaseName: string;
  /**
  * When this is set to true, multiple grants of the same type can be created. This will cause Terraform to not revoke grants applied to roles and objects outside Terraform.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/table_grant#enable_multiple_grants TableGrant#enable_multiple_grants}
  */
  readonly enableMultipleGrants?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/table_grant#id TableGrant#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * When this is set to true and a schema_name is provided, apply this grant on all future tables in the given schema. When this is true and no schema_name is provided apply this grant on all future tables in the given database. The table_name and shares fields must be unset in order to use on_future.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/table_grant#on_future TableGrant#on_future}
  */
  readonly onFuture?: boolean | cdktf.IResolvable;
  /**
  * The privilege to grant on the current or future table.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/table_grant#privilege TableGrant#privilege}
  */
  readonly privilege?: string;
  /**
  * Grants privilege to these roles.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/table_grant#roles TableGrant#roles}
  */
  readonly roles?: string[];
  /**
  * The name of the schema containing the current or future tables on which to grant privileges.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/table_grant#schema_name TableGrant#schema_name}
  */
  readonly schemaName?: string;
  /**
  * Grants privilege to these shares (only valid if on_future is unset).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/table_grant#shares TableGrant#shares}
  */
  readonly shares?: string[];
  /**
  * The name of the table on which to grant privileges immediately (only valid if on_future is unset).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/table_grant#table_name TableGrant#table_name}
  */
  readonly tableName?: string;
  /**
  * When this is set to true, allows the recipient role to grant the privileges to other roles.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/table_grant#with_grant_option TableGrant#with_grant_option}
  */
  readonly withGrantOption?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/table_grant snowflake_table_grant}
*/
export class TableGrant extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_table_grant";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/snowflake/r/table_grant snowflake_table_grant} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TableGrantConfig
  */
  public constructor(scope: Construct, id: string, config: TableGrantConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_table_grant',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '0.46.0',
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
    this._databaseName = config.databaseName;
    this._enableMultipleGrants = config.enableMultipleGrants;
    this._id = config.id;
    this._onFuture = config.onFuture;
    this._privilege = config.privilege;
    this._roles = config.roles;
    this._schemaName = config.schemaName;
    this._shares = config.shares;
    this._tableName = config.tableName;
    this._withGrantOption = config.withGrantOption;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // database_name - computed: false, optional: false, required: true
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }

  // enable_multiple_grants - computed: false, optional: true, required: false
  private _enableMultipleGrants?: boolean | cdktf.IResolvable; 
  public get enableMultipleGrants() {
    return this.getBooleanAttribute('enable_multiple_grants');
  }
  public set enableMultipleGrants(value: boolean | cdktf.IResolvable) {
    this._enableMultipleGrants = value;
  }
  public resetEnableMultipleGrants() {
    this._enableMultipleGrants = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMultipleGrantsInput() {
    return this._enableMultipleGrants;
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

  // on_future - computed: false, optional: true, required: false
  private _onFuture?: boolean | cdktf.IResolvable; 
  public get onFuture() {
    return this.getBooleanAttribute('on_future');
  }
  public set onFuture(value: boolean | cdktf.IResolvable) {
    this._onFuture = value;
  }
  public resetOnFuture() {
    this._onFuture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onFutureInput() {
    return this._onFuture;
  }

  // privilege - computed: false, optional: true, required: false
  private _privilege?: string; 
  public get privilege() {
    return this.getStringAttribute('privilege');
  }
  public set privilege(value: string) {
    this._privilege = value;
  }
  public resetPrivilege() {
    this._privilege = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegeInput() {
    return this._privilege;
  }

  // roles - computed: false, optional: true, required: false
  private _roles?: string[]; 
  public get roles() {
    return cdktf.Fn.tolist(this.getListAttribute('roles'));
  }
  public set roles(value: string[]) {
    this._roles = value;
  }
  public resetRoles() {
    this._roles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles;
  }

  // schema_name - computed: false, optional: true, required: false
  private _schemaName?: string; 
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }
  public set schemaName(value: string) {
    this._schemaName = value;
  }
  public resetSchemaName() {
    this._schemaName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaNameInput() {
    return this._schemaName;
  }

  // shares - computed: false, optional: true, required: false
  private _shares?: string[]; 
  public get shares() {
    return cdktf.Fn.tolist(this.getListAttribute('shares'));
  }
  public set shares(value: string[]) {
    this._shares = value;
  }
  public resetShares() {
    this._shares = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharesInput() {
    return this._shares;
  }

  // table_name - computed: false, optional: true, required: false
  private _tableName?: string; 
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  public resetTableName() {
    this._tableName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName;
  }

  // with_grant_option - computed: false, optional: true, required: false
  private _withGrantOption?: boolean | cdktf.IResolvable; 
  public get withGrantOption() {
    return this.getBooleanAttribute('with_grant_option');
  }
  public set withGrantOption(value: boolean | cdktf.IResolvable) {
    this._withGrantOption = value;
  }
  public resetWithGrantOption() {
    this._withGrantOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withGrantOptionInput() {
    return this._withGrantOption;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      database_name: cdktf.stringToTerraform(this._databaseName),
      enable_multiple_grants: cdktf.booleanToTerraform(this._enableMultipleGrants),
      id: cdktf.stringToTerraform(this._id),
      on_future: cdktf.booleanToTerraform(this._onFuture),
      privilege: cdktf.stringToTerraform(this._privilege),
      roles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._roles),
      schema_name: cdktf.stringToTerraform(this._schemaName),
      shares: cdktf.listMapper(cdktf.stringToTerraform, false)(this._shares),
      table_name: cdktf.stringToTerraform(this._tableName),
      with_grant_option: cdktf.booleanToTerraform(this._withGrantOption),
    };
  }
}