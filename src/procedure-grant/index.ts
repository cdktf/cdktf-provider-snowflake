// https://www.terraform.io/docs/providers/snowflake/r/procedure_grant
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProcedureGrantConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of the argument data types for the procedure (must be present if procedure has arguments and procedure_name is present)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure_grant#argument_data_types ProcedureGrant#argument_data_types}
  */
  readonly argumentDataTypes?: string[];
  /**
  * The name of the database containing the current or future procedures on which to grant privileges.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure_grant#database_name ProcedureGrant#database_name}
  */
  readonly databaseName: string;
  /**
  * When this is set to true, multiple grants of the same type can be created. This will cause Terraform to not revoke grants applied to roles and objects outside Terraform.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure_grant#enable_multiple_grants ProcedureGrant#enable_multiple_grants}
  */
  readonly enableMultipleGrants?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure_grant#id ProcedureGrant#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * When this is set to true and a schema_name is provided, apply this grant on all future procedures in the given schema. When this is true and no schema_name is provided apply this grant on all future procedures in the given database. The procedure_name and shares fields must be unset in order to use on_future.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure_grant#on_future ProcedureGrant#on_future}
  */
  readonly onFuture?: boolean | cdktf.IResolvable;
  /**
  * The privilege to grant on the current or future procedure.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure_grant#privilege ProcedureGrant#privilege}
  */
  readonly privilege?: string;
  /**
  * The name of the procedure on which to grant privileges immediately (only valid if on_future is false).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure_grant#procedure_name ProcedureGrant#procedure_name}
  */
  readonly procedureName?: string;
  /**
  * The return type of the procedure (must be present if procedure_name is present)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure_grant#return_type ProcedureGrant#return_type}
  */
  readonly returnType?: string;
  /**
  * Grants privilege to these roles.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure_grant#roles ProcedureGrant#roles}
  */
  readonly roles: string[];
  /**
  * The name of the schema containing the current or future procedures on which to grant privileges.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure_grant#schema_name ProcedureGrant#schema_name}
  */
  readonly schemaName?: string;
  /**
  * Grants privilege to these shares (only valid if on_future is false).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure_grant#shares ProcedureGrant#shares}
  */
  readonly shares?: string[];
  /**
  * When this is set to true, allows the recipient role to grant the privileges to other roles.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure_grant#with_grant_option ProcedureGrant#with_grant_option}
  */
  readonly withGrantOption?: boolean | cdktf.IResolvable;
  /**
  * arguments block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure_grant#arguments ProcedureGrant#arguments}
  */
  readonly arguments?: ProcedureGrantArguments[] | cdktf.IResolvable;
}
export interface ProcedureGrantArguments {
  /**
  * The argument name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure_grant#name ProcedureGrant#name}
  */
  readonly name: string;
  /**
  * The argument type
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/procedure_grant#type ProcedureGrant#type}
  */
  readonly type: string;
}

export function procedureGrantArgumentsToTerraform(struct?: ProcedureGrantArguments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class ProcedureGrantArgumentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProcedureGrantArguments | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcedureGrantArguments | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class ProcedureGrantArgumentsList extends cdktf.ComplexList {
  public internalValue? : ProcedureGrantArguments[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProcedureGrantArgumentsOutputReference {
    return new ProcedureGrantArgumentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/procedure_grant snowflake_procedure_grant}
*/
export class ProcedureGrant extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_procedure_grant";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/snowflake/r/procedure_grant snowflake_procedure_grant} Resource
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
        providerVersion: '0.56.3',
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
    this._onFuture = config.onFuture;
    this._privilege = config.privilege;
    this._procedureName = config.procedureName;
    this._returnType = config.returnType;
    this._roles = config.roles;
    this._schemaName = config.schemaName;
    this._shares = config.shares;
    this._withGrantOption = config.withGrantOption;
    this._arguments.internalValue = config.arguments;
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

  // return_type - computed: false, optional: true, required: false
  private _returnType?: string; 
  public get returnType() {
    return this.getStringAttribute('return_type');
  }
  public set returnType(value: string) {
    this._returnType = value;
  }
  public resetReturnType() {
    this._returnType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnTypeInput() {
    return this._returnType;
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

  // arguments - computed: false, optional: true, required: false
  private _arguments = new ProcedureGrantArgumentsList(this, "arguments", false);
  public get arguments() {
    return this._arguments;
  }
  public putArguments(value: ProcedureGrantArguments[] | cdktf.IResolvable) {
    this._arguments.internalValue = value;
  }
  public resetArguments() {
    this._arguments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argumentsInput() {
    return this._arguments.internalValue;
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
      on_future: cdktf.booleanToTerraform(this._onFuture),
      privilege: cdktf.stringToTerraform(this._privilege),
      procedure_name: cdktf.stringToTerraform(this._procedureName),
      return_type: cdktf.stringToTerraform(this._returnType),
      roles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._roles),
      schema_name: cdktf.stringToTerraform(this._schemaName),
      shares: cdktf.listMapper(cdktf.stringToTerraform, false)(this._shares),
      with_grant_option: cdktf.booleanToTerraform(this._withGrantOption),
      arguments: cdktf.listMapper(procedureGrantArgumentsToTerraform, true)(this._arguments.internalValue),
    };
  }
}
