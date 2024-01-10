/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/procedure_grant
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProcedureGrantConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of the argument data types for the procedure (must be present if procedure has arguments and procedure_name is present)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/procedure_grant#argument_data_types ProcedureGrant#argument_data_types}
  */
  readonly argumentDataTypes?: string[];
  /**
  * The name of the database containing the current or future procedures on which to grant privileges.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/procedure_grant#database_name ProcedureGrant#database_name}
  */
  readonly databaseName: string;
  /**
  * When this is set to true, multiple grants of the same type can be created. This will cause Terraform to not revoke grants applied to roles and objects outside Terraform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/procedure_grant#enable_multiple_grants ProcedureGrant#enable_multiple_grants}
  */
  readonly enableMultipleGrants?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/procedure_grant#id ProcedureGrant#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * When this is set to true and a schema_name is provided, apply this grant on all procedures in the given schema. When this is true and no schema_name is provided apply this grant on all procedures in the given database. The procedure_name and shares fields must be unset in order to use on_all. Cannot be used together with on_future.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/procedure_grant#on_all ProcedureGrant#on_all}
  */
  readonly onAll?: boolean | cdktf.IResolvable;
  /**
  * When this is set to true and a schema_name is provided, apply this grant on all future procedures in the given schema. When this is true and no schema_name is provided apply this grant on all future procedures in the given database. The procedure_name and shares fields must be unset in order to use on_future. Cannot be used together with on_all.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/procedure_grant#on_future ProcedureGrant#on_future}
  */
  readonly onFuture?: boolean | cdktf.IResolvable;
  /**
  * The privilege to grant on the current or future procedure. To grant all privileges, use the value `ALL PRIVILEGES`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/procedure_grant#privilege ProcedureGrant#privilege}
  */
  readonly privilege?: string;
  /**
  * The name of the procedure on which to grant privileges immediately (only valid if on_future is false).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/procedure_grant#procedure_name ProcedureGrant#procedure_name}
  */
  readonly procedureName?: string;
  /**
  * The name of the role to revert ownership to on destroy. Has no effect unless `privilege` is set to `OWNERSHIP`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/procedure_grant#revert_ownership_to_role_name ProcedureGrant#revert_ownership_to_role_name}
  */
  readonly revertOwnershipToRoleName?: string;
  /**
  * Grants privilege to these roles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/procedure_grant#roles ProcedureGrant#roles}
  */
  readonly roles: string[];
  /**
  * The name of the schema containing the current or future procedures on which to grant privileges.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/procedure_grant#schema_name ProcedureGrant#schema_name}
  */
  readonly schemaName?: string;
  /**
  * Grants privilege to these shares (only valid if on_future is false).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/procedure_grant#shares ProcedureGrant#shares}
  */
  readonly shares?: string[];
  /**
  * When this is set to true, allows the recipient role to grant the privileges to other roles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/procedure_grant#with_grant_option ProcedureGrant#with_grant_option}
  */
  readonly withGrantOption?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/procedure_grant snowflake_procedure_grant}
*/
export class ProcedureGrant extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_procedure_grant";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProcedureGrant resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProcedureGrant to import
  * @param importFromId The id of the existing ProcedureGrant that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/procedure_grant#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProcedureGrant to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_procedure_grant", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/procedure_grant snowflake_procedure_grant} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProcedureGrantConfig
  */
  public constructor(scope: Construct, id: string, config: ProcedureGrantConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_procedure_grant',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '0.82.0',
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
    this._argumentDataTypes = config.argumentDataTypes;
    this._databaseName = config.databaseName;
    this._enableMultipleGrants = config.enableMultipleGrants;
    this._id = config.id;
    this._onAll = config.onAll;
    this._onFuture = config.onFuture;
    this._privilege = config.privilege;
    this._procedureName = config.procedureName;
    this._revertOwnershipToRoleName = config.revertOwnershipToRoleName;
    this._roles = config.roles;
    this._schemaName = config.schemaName;
    this._shares = config.shares;
    this._withGrantOption = config.withGrantOption;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // argument_data_types - computed: false, optional: true, required: false
  private _argumentDataTypes?: string[]; 
  public get argumentDataTypes() {
    return this.getListAttribute('argument_data_types');
  }
  public set argumentDataTypes(value: string[]) {
    this._argumentDataTypes = value;
  }
  public resetArgumentDataTypes() {
    this._argumentDataTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argumentDataTypesInput() {
    return this._argumentDataTypes;
  }

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

  // on_all - computed: false, optional: true, required: false
  private _onAll?: boolean | cdktf.IResolvable; 
  public get onAll() {
    return this.getBooleanAttribute('on_all');
  }
  public set onAll(value: boolean | cdktf.IResolvable) {
    this._onAll = value;
  }
  public resetOnAll() {
    this._onAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onAllInput() {
    return this._onAll;
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

  // procedure_name - computed: false, optional: true, required: false
  private _procedureName?: string; 
  public get procedureName() {
    return this.getStringAttribute('procedure_name');
  }
  public set procedureName(value: string) {
    this._procedureName = value;
  }
  public resetProcedureName() {
    this._procedureName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get procedureNameInput() {
    return this._procedureName;
  }

  // revert_ownership_to_role_name - computed: false, optional: true, required: false
  private _revertOwnershipToRoleName?: string; 
  public get revertOwnershipToRoleName() {
    return this.getStringAttribute('revert_ownership_to_role_name');
  }
  public set revertOwnershipToRoleName(value: string) {
    this._revertOwnershipToRoleName = value;
  }
  public resetRevertOwnershipToRoleName() {
    this._revertOwnershipToRoleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revertOwnershipToRoleNameInput() {
    return this._revertOwnershipToRoleName;
  }

  // roles - computed: false, optional: false, required: true
  private _roles?: string[]; 
  public get roles() {
    return cdktf.Fn.tolist(this.getListAttribute('roles'));
  }
  public set roles(value: string[]) {
    this._roles = value;
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
      argument_data_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._argumentDataTypes),
      database_name: cdktf.stringToTerraform(this._databaseName),
      enable_multiple_grants: cdktf.booleanToTerraform(this._enableMultipleGrants),
      id: cdktf.stringToTerraform(this._id),
      on_all: cdktf.booleanToTerraform(this._onAll),
      on_future: cdktf.booleanToTerraform(this._onFuture),
      privilege: cdktf.stringToTerraform(this._privilege),
      procedure_name: cdktf.stringToTerraform(this._procedureName),
      revert_ownership_to_role_name: cdktf.stringToTerraform(this._revertOwnershipToRoleName),
      roles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._roles),
      schema_name: cdktf.stringToTerraform(this._schemaName),
      shares: cdktf.listMapper(cdktf.stringToTerraform, false)(this._shares),
      with_grant_option: cdktf.booleanToTerraform(this._withGrantOption),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      argument_data_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._argumentDataTypes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      database_name: {
        value: cdktf.stringToHclTerraform(this._databaseName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_multiple_grants: {
        value: cdktf.booleanToHclTerraform(this._enableMultipleGrants),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      on_all: {
        value: cdktf.booleanToHclTerraform(this._onAll),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      on_future: {
        value: cdktf.booleanToHclTerraform(this._onFuture),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      privilege: {
        value: cdktf.stringToHclTerraform(this._privilege),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      procedure_name: {
        value: cdktf.stringToHclTerraform(this._procedureName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      revert_ownership_to_role_name: {
        value: cdktf.stringToHclTerraform(this._revertOwnershipToRoleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      roles: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._roles),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      schema_name: {
        value: cdktf.stringToHclTerraform(this._schemaName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shares: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._shares),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      with_grant_option: {
        value: cdktf.booleanToHclTerraform(this._withGrantOption),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
