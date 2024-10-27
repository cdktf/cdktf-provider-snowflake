/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/data-sources/grants
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSnowflakeGrantsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/data-sources/grants#id DataSnowflakeGrants#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * future_grants_in block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/data-sources/grants#future_grants_in DataSnowflakeGrants#future_grants_in}
  */
  readonly futureGrantsIn?: DataSnowflakeGrantsFutureGrantsIn;
  /**
  * future_grants_to block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/data-sources/grants#future_grants_to DataSnowflakeGrants#future_grants_to}
  */
  readonly futureGrantsTo?: DataSnowflakeGrantsFutureGrantsTo;
  /**
  * grants_of block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/data-sources/grants#grants_of DataSnowflakeGrants#grants_of}
  */
  readonly grantsOf?: DataSnowflakeGrantsGrantsOf;
  /**
  * grants_on block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/data-sources/grants#grants_on DataSnowflakeGrants#grants_on}
  */
  readonly grantsOn?: DataSnowflakeGrantsGrantsOn;
  /**
  * grants_to block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/data-sources/grants#grants_to DataSnowflakeGrants#grants_to}
  */
  readonly grantsTo?: DataSnowflakeGrantsGrantsTo;
}
export interface DataSnowflakeGrantsGrants {
}

export function dataSnowflakeGrantsGrantsToTerraform(struct?: DataSnowflakeGrantsGrants): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSnowflakeGrantsGrantsToHclTerraform(struct?: DataSnowflakeGrantsGrants): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeGrantsGrantsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataSnowflakeGrantsGrants | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeGrantsGrants | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // grant_option - computed: true, optional: false, required: false
  public get grantOption() {
    return this.getBooleanAttribute('grant_option');
  }

  // granted_by - computed: true, optional: false, required: false
  public get grantedBy() {
    return this.getStringAttribute('granted_by');
  }

  // granted_on - computed: true, optional: false, required: false
  public get grantedOn() {
    return this.getStringAttribute('granted_on');
  }

  // granted_to - computed: true, optional: false, required: false
  public get grantedTo() {
    return this.getStringAttribute('granted_to');
  }

  // grantee_name - computed: true, optional: false, required: false
  public get granteeName() {
    return this.getStringAttribute('grantee_name');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // privilege - computed: true, optional: false, required: false
  public get privilege() {
    return this.getStringAttribute('privilege');
  }
}

export class DataSnowflakeGrantsGrantsList extends cdktf.ComplexList {

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
  public get(index: number): DataSnowflakeGrantsGrantsOutputReference {
    return new DataSnowflakeGrantsGrantsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeGrantsFutureGrantsIn {
  /**
  * Lists all privileges on new (i.e. future) objects of a specified type in the database granted to a role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/data-sources/grants#database DataSnowflakeGrants#database}
  */
  readonly database?: string;
  /**
  * Lists all privileges on new (i.e. future) objects of a specified type in the schema granted to a role. Schema must be a fully qualified name ("&lt;db_name&gt;"."&lt;schema_name&gt;").
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/data-sources/grants#schema DataSnowflakeGrants#schema}
  */
  readonly schema?: string;
}

export function dataSnowflakeGrantsFutureGrantsInToTerraform(struct?: DataSnowflakeGrantsFutureGrantsInOutputReference | DataSnowflakeGrantsFutureGrantsIn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    schema: cdktf.stringToTerraform(struct!.schema),
  }
}


export function dataSnowflakeGrantsFutureGrantsInToHclTerraform(struct?: DataSnowflakeGrantsFutureGrantsInOutputReference | DataSnowflakeGrantsFutureGrantsIn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database: {
      value: cdktf.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema: {
      value: cdktf.stringToHclTerraform(struct!.schema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSnowflakeGrantsFutureGrantsInOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataSnowflakeGrantsFutureGrantsIn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeGrantsFutureGrantsIn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._database = undefined;
      this._schema = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._database = value.database;
      this._schema = value.schema;
    }
  }

  // database - computed: false, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // schema - computed: false, optional: true, required: false
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  public resetSchema() {
    this._schema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }
}
export interface DataSnowflakeGrantsFutureGrantsTo {
  /**
  * Lists all privileges on new (i.e. future) objects of a specified type in a database or schema granted to the account role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/data-sources/grants#account_role DataSnowflakeGrants#account_role}
  */
  readonly accountRole?: string;
  /**
  * Lists all privileges on new (i.e. future) objects granted to the database role. Must be a fully qualified name ("&lt;db_name&gt;"."&lt;database_role_name&gt;").
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/data-sources/grants#database_role DataSnowflakeGrants#database_role}
  */
  readonly databaseRole?: string;
}

export function dataSnowflakeGrantsFutureGrantsToToTerraform(struct?: DataSnowflakeGrantsFutureGrantsToOutputReference | DataSnowflakeGrantsFutureGrantsTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_role: cdktf.stringToTerraform(struct!.accountRole),
    database_role: cdktf.stringToTerraform(struct!.databaseRole),
  }
}


export function dataSnowflakeGrantsFutureGrantsToToHclTerraform(struct?: DataSnowflakeGrantsFutureGrantsToOutputReference | DataSnowflakeGrantsFutureGrantsTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_role: {
      value: cdktf.stringToHclTerraform(struct!.accountRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_role: {
      value: cdktf.stringToHclTerraform(struct!.databaseRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSnowflakeGrantsFutureGrantsToOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataSnowflakeGrantsFutureGrantsTo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountRole = this._accountRole;
    }
    if (this._databaseRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseRole = this._databaseRole;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeGrantsFutureGrantsTo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accountRole = undefined;
      this._databaseRole = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accountRole = value.accountRole;
      this._databaseRole = value.databaseRole;
    }
  }

  // account_role - computed: false, optional: true, required: false
  private _accountRole?: string; 
  public get accountRole() {
    return this.getStringAttribute('account_role');
  }
  public set accountRole(value: string) {
    this._accountRole = value;
  }
  public resetAccountRole() {
    this._accountRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountRoleInput() {
    return this._accountRole;
  }

  // database_role - computed: false, optional: true, required: false
  private _databaseRole?: string; 
  public get databaseRole() {
    return this.getStringAttribute('database_role');
  }
  public set databaseRole(value: string) {
    this._databaseRole = value;
  }
  public resetDatabaseRole() {
    this._databaseRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseRoleInput() {
    return this._databaseRole;
  }
}
export interface DataSnowflakeGrantsGrantsOf {
  /**
  * Lists all users and roles to which the account role has been granted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/data-sources/grants#account_role DataSnowflakeGrants#account_role}
  */
  readonly accountRole?: string;
  /**
  * Lists all the users and roles to which the application role has been granted. Must be a fully qualified name ("&lt;db_name&gt;"."&lt;database_role_name&gt;").
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/data-sources/grants#application_role DataSnowflakeGrants#application_role}
  */
  readonly applicationRole?: string;
  /**
  * Lists all users and roles to which the database role has been granted. Must be a fully qualified name ("&lt;db_name&gt;"."&lt;database_role_name&gt;").
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/data-sources/grants#database_role DataSnowflakeGrants#database_role}
  */
  readonly databaseRole?: string;
  /**
  * Lists all the accounts for the share and indicates the accounts that are using the share.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/data-sources/grants#share DataSnowflakeGrants#share}
  */
  readonly share?: string;
}

export function dataSnowflakeGrantsGrantsOfToTerraform(struct?: DataSnowflakeGrantsGrantsOfOutputReference | DataSnowflakeGrantsGrantsOf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_role: cdktf.stringToTerraform(struct!.accountRole),
    application_role: cdktf.stringToTerraform(struct!.applicationRole),
    database_role: cdktf.stringToTerraform(struct!.databaseRole),
    share: cdktf.stringToTerraform(struct!.share),
  }
}


export function dataSnowflakeGrantsGrantsOfToHclTerraform(struct?: DataSnowflakeGrantsGrantsOfOutputReference | DataSnowflakeGrantsGrantsOf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_role: {
      value: cdktf.stringToHclTerraform(struct!.accountRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    application_role: {
      value: cdktf.stringToHclTerraform(struct!.applicationRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_role: {
      value: cdktf.stringToHclTerraform(struct!.databaseRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    share: {
      value: cdktf.stringToHclTerraform(struct!.share),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSnowflakeGrantsGrantsOfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataSnowflakeGrantsGrantsOf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountRole = this._accountRole;
    }
    if (this._applicationRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationRole = this._applicationRole;
    }
    if (this._databaseRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseRole = this._databaseRole;
    }
    if (this._share !== undefined) {
      hasAnyValues = true;
      internalValueResult.share = this._share;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeGrantsGrantsOf | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accountRole = undefined;
      this._applicationRole = undefined;
      this._databaseRole = undefined;
      this._share = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accountRole = value.accountRole;
      this._applicationRole = value.applicationRole;
      this._databaseRole = value.databaseRole;
      this._share = value.share;
    }
  }

  // account_role - computed: false, optional: true, required: false
  private _accountRole?: string; 
  public get accountRole() {
    return this.getStringAttribute('account_role');
  }
  public set accountRole(value: string) {
    this._accountRole = value;
  }
  public resetAccountRole() {
    this._accountRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountRoleInput() {
    return this._accountRole;
  }

  // application_role - computed: false, optional: true, required: false
  private _applicationRole?: string; 
  public get applicationRole() {
    return this.getStringAttribute('application_role');
  }
  public set applicationRole(value: string) {
    this._applicationRole = value;
  }
  public resetApplicationRole() {
    this._applicationRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationRoleInput() {
    return this._applicationRole;
  }

  // database_role - computed: false, optional: true, required: false
  private _databaseRole?: string; 
  public get databaseRole() {
    return this.getStringAttribute('database_role');
  }
  public set databaseRole(value: string) {
    this._databaseRole = value;
  }
  public resetDatabaseRole() {
    this._databaseRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseRoleInput() {
    return this._databaseRole;
  }

  // share - computed: false, optional: true, required: false
  private _share?: string; 
  public get share() {
    return this.getStringAttribute('share');
  }
  public set share(value: string) {
    this._share = value;
  }
  public resetShare() {
    this._share = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shareInput() {
    return this._share;
  }
}
export interface DataSnowflakeGrantsGrantsOn {
  /**
  * Object hierarchy to list privileges on. The only valid value is: ACCOUNT. Setting this attribute lists all the account-level (i.e. global) privileges that have been granted to roles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/data-sources/grants#account DataSnowflakeGrants#account}
  */
  readonly account?: boolean | cdktf.IResolvable;
  /**
  * Name of object to list privileges on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/data-sources/grants#object_name DataSnowflakeGrants#object_name}
  */
  readonly objectName?: string;
  /**
  * Type of object to list privileges on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/data-sources/grants#object_type DataSnowflakeGrants#object_type}
  */
  readonly objectType?: string;
}

export function dataSnowflakeGrantsGrantsOnToTerraform(struct?: DataSnowflakeGrantsGrantsOnOutputReference | DataSnowflakeGrantsGrantsOn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account: cdktf.booleanToTerraform(struct!.account),
    object_name: cdktf.stringToTerraform(struct!.objectName),
    object_type: cdktf.stringToTerraform(struct!.objectType),
  }
}


export function dataSnowflakeGrantsGrantsOnToHclTerraform(struct?: DataSnowflakeGrantsGrantsOnOutputReference | DataSnowflakeGrantsGrantsOn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account: {
      value: cdktf.booleanToHclTerraform(struct!.account),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    object_name: {
      value: cdktf.stringToHclTerraform(struct!.objectName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSnowflakeGrantsGrantsOnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataSnowflakeGrantsGrantsOn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._account !== undefined) {
      hasAnyValues = true;
      internalValueResult.account = this._account;
    }
    if (this._objectName !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectName = this._objectName;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeGrantsGrantsOn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._account = undefined;
      this._objectName = undefined;
      this._objectType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._account = value.account;
      this._objectName = value.objectName;
      this._objectType = value.objectType;
    }
  }

  // account - computed: false, optional: true, required: false
  private _account?: boolean | cdktf.IResolvable; 
  public get account() {
    return this.getBooleanAttribute('account');
  }
  public set account(value: boolean | cdktf.IResolvable) {
    this._account = value;
  }
  public resetAccount() {
    this._account = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInput() {
    return this._account;
  }

  // object_name - computed: false, optional: true, required: false
  private _objectName?: string; 
  public get objectName() {
    return this.getStringAttribute('object_name');
  }
  public set objectName(value: string) {
    this._objectName = value;
  }
  public resetObjectName() {
    this._objectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectNameInput() {
    return this._objectName;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }
}
export interface DataSnowflakeGrantsGrantsToShare {
  /**
  * Lists all of the privileges and roles granted to the specified share.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/data-sources/grants#share_name DataSnowflakeGrants#share_name}
  */
  readonly shareName: string;
}

export function dataSnowflakeGrantsGrantsToShareToTerraform(struct?: DataSnowflakeGrantsGrantsToShareOutputReference | DataSnowflakeGrantsGrantsToShare): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    share_name: cdktf.stringToTerraform(struct!.shareName),
  }
}


export function dataSnowflakeGrantsGrantsToShareToHclTerraform(struct?: DataSnowflakeGrantsGrantsToShareOutputReference | DataSnowflakeGrantsGrantsToShare): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    share_name: {
      value: cdktf.stringToHclTerraform(struct!.shareName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSnowflakeGrantsGrantsToShareOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataSnowflakeGrantsGrantsToShare | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._shareName !== undefined) {
      hasAnyValues = true;
      internalValueResult.shareName = this._shareName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeGrantsGrantsToShare | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._shareName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._shareName = value.shareName;
    }
  }

  // share_name - computed: false, optional: false, required: true
  private _shareName?: string; 
  public get shareName() {
    return this.getStringAttribute('share_name');
  }
  public set shareName(value: string) {
    this._shareName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shareNameInput() {
    return this._shareName;
  }
}
export interface DataSnowflakeGrantsGrantsTo {
  /**
  * Lists all privileges and roles granted to the role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/data-sources/grants#account_role DataSnowflakeGrants#account_role}
  */
  readonly accountRole?: string;
  /**
  * Lists all the privileges and roles granted to the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/data-sources/grants#application DataSnowflakeGrants#application}
  */
  readonly application?: string;
  /**
  * Lists all the privileges and roles granted to the application role. Must be a fully qualified name ("&lt;app_name&gt;"."&lt;app_role_name&gt;").
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/data-sources/grants#application_role DataSnowflakeGrants#application_role}
  */
  readonly applicationRole?: string;
  /**
  * Lists all privileges and roles granted to the database role. Must be a fully qualified name ("&lt;db_name&gt;"."&lt;database_role_name&gt;").
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/data-sources/grants#database_role DataSnowflakeGrants#database_role}
  */
  readonly databaseRole?: string;
  /**
  * Lists all the roles granted to the user. Note that the PUBLIC role, which is automatically available to every user, is not listed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/data-sources/grants#user DataSnowflakeGrants#user}
  */
  readonly user?: string;
  /**
  * share block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/data-sources/grants#share DataSnowflakeGrants#share}
  */
  readonly share?: DataSnowflakeGrantsGrantsToShare;
}

export function dataSnowflakeGrantsGrantsToToTerraform(struct?: DataSnowflakeGrantsGrantsToOutputReference | DataSnowflakeGrantsGrantsTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_role: cdktf.stringToTerraform(struct!.accountRole),
    application: cdktf.stringToTerraform(struct!.application),
    application_role: cdktf.stringToTerraform(struct!.applicationRole),
    database_role: cdktf.stringToTerraform(struct!.databaseRole),
    user: cdktf.stringToTerraform(struct!.user),
    share: dataSnowflakeGrantsGrantsToShareToTerraform(struct!.share),
  }
}


export function dataSnowflakeGrantsGrantsToToHclTerraform(struct?: DataSnowflakeGrantsGrantsToOutputReference | DataSnowflakeGrantsGrantsTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_role: {
      value: cdktf.stringToHclTerraform(struct!.accountRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    application: {
      value: cdktf.stringToHclTerraform(struct!.application),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    application_role: {
      value: cdktf.stringToHclTerraform(struct!.applicationRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_role: {
      value: cdktf.stringToHclTerraform(struct!.databaseRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    share: {
      value: dataSnowflakeGrantsGrantsToShareToHclTerraform(struct!.share),
      isBlock: true,
      type: "list",
      storageClassType: "DataSnowflakeGrantsGrantsToShareList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSnowflakeGrantsGrantsToOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataSnowflakeGrantsGrantsTo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountRole = this._accountRole;
    }
    if (this._application !== undefined) {
      hasAnyValues = true;
      internalValueResult.application = this._application;
    }
    if (this._applicationRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationRole = this._applicationRole;
    }
    if (this._databaseRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseRole = this._databaseRole;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    if (this._share?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.share = this._share?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeGrantsGrantsTo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accountRole = undefined;
      this._application = undefined;
      this._applicationRole = undefined;
      this._databaseRole = undefined;
      this._user = undefined;
      this._share.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accountRole = value.accountRole;
      this._application = value.application;
      this._applicationRole = value.applicationRole;
      this._databaseRole = value.databaseRole;
      this._user = value.user;
      this._share.internalValue = value.share;
    }
  }

  // account_role - computed: false, optional: true, required: false
  private _accountRole?: string; 
  public get accountRole() {
    return this.getStringAttribute('account_role');
  }
  public set accountRole(value: string) {
    this._accountRole = value;
  }
  public resetAccountRole() {
    this._accountRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountRoleInput() {
    return this._accountRole;
  }

  // application - computed: false, optional: true, required: false
  private _application?: string; 
  public get application() {
    return this.getStringAttribute('application');
  }
  public set application(value: string) {
    this._application = value;
  }
  public resetApplication() {
    this._application = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInput() {
    return this._application;
  }

  // application_role - computed: false, optional: true, required: false
  private _applicationRole?: string; 
  public get applicationRole() {
    return this.getStringAttribute('application_role');
  }
  public set applicationRole(value: string) {
    this._applicationRole = value;
  }
  public resetApplicationRole() {
    this._applicationRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationRoleInput() {
    return this._applicationRole;
  }

  // database_role - computed: false, optional: true, required: false
  private _databaseRole?: string; 
  public get databaseRole() {
    return this.getStringAttribute('database_role');
  }
  public set databaseRole(value: string) {
    this._databaseRole = value;
  }
  public resetDatabaseRole() {
    this._databaseRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseRoleInput() {
    return this._databaseRole;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // share - computed: false, optional: true, required: false
  private _share = new DataSnowflakeGrantsGrantsToShareOutputReference(this, "share");
  public get share() {
    return this._share;
  }
  public putShare(value: DataSnowflakeGrantsGrantsToShare) {
    this._share.internalValue = value;
  }
  public resetShare() {
    this._share.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shareInput() {
    return this._share.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/data-sources/grants snowflake_grants}
*/
export class DataSnowflakeGrants extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_grants";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSnowflakeGrants resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSnowflakeGrants to import
  * @param importFromId The id of the existing DataSnowflakeGrants that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/data-sources/grants#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSnowflakeGrants to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_grants", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.97.0/docs/data-sources/grants snowflake_grants} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSnowflakeGrantsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSnowflakeGrantsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'snowflake_grants',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '0.97.0',
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
    this._futureGrantsIn.internalValue = config.futureGrantsIn;
    this._futureGrantsTo.internalValue = config.futureGrantsTo;
    this._grantsOf.internalValue = config.grantsOf;
    this._grantsOn.internalValue = config.grantsOn;
    this._grantsTo.internalValue = config.grantsTo;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // grants - computed: true, optional: false, required: false
  private _grants = new DataSnowflakeGrantsGrantsList(this, "grants", false);
  public get grants() {
    return this._grants;
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

  // future_grants_in - computed: false, optional: true, required: false
  private _futureGrantsIn = new DataSnowflakeGrantsFutureGrantsInOutputReference(this, "future_grants_in");
  public get futureGrantsIn() {
    return this._futureGrantsIn;
  }
  public putFutureGrantsIn(value: DataSnowflakeGrantsFutureGrantsIn) {
    this._futureGrantsIn.internalValue = value;
  }
  public resetFutureGrantsIn() {
    this._futureGrantsIn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get futureGrantsInInput() {
    return this._futureGrantsIn.internalValue;
  }

  // future_grants_to - computed: false, optional: true, required: false
  private _futureGrantsTo = new DataSnowflakeGrantsFutureGrantsToOutputReference(this, "future_grants_to");
  public get futureGrantsTo() {
    return this._futureGrantsTo;
  }
  public putFutureGrantsTo(value: DataSnowflakeGrantsFutureGrantsTo) {
    this._futureGrantsTo.internalValue = value;
  }
  public resetFutureGrantsTo() {
    this._futureGrantsTo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get futureGrantsToInput() {
    return this._futureGrantsTo.internalValue;
  }

  // grants_of - computed: false, optional: true, required: false
  private _grantsOf = new DataSnowflakeGrantsGrantsOfOutputReference(this, "grants_of");
  public get grantsOf() {
    return this._grantsOf;
  }
  public putGrantsOf(value: DataSnowflakeGrantsGrantsOf) {
    this._grantsOf.internalValue = value;
  }
  public resetGrantsOf() {
    this._grantsOf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grantsOfInput() {
    return this._grantsOf.internalValue;
  }

  // grants_on - computed: false, optional: true, required: false
  private _grantsOn = new DataSnowflakeGrantsGrantsOnOutputReference(this, "grants_on");
  public get grantsOn() {
    return this._grantsOn;
  }
  public putGrantsOn(value: DataSnowflakeGrantsGrantsOn) {
    this._grantsOn.internalValue = value;
  }
  public resetGrantsOn() {
    this._grantsOn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grantsOnInput() {
    return this._grantsOn.internalValue;
  }

  // grants_to - computed: false, optional: true, required: false
  private _grantsTo = new DataSnowflakeGrantsGrantsToOutputReference(this, "grants_to");
  public get grantsTo() {
    return this._grantsTo;
  }
  public putGrantsTo(value: DataSnowflakeGrantsGrantsTo) {
    this._grantsTo.internalValue = value;
  }
  public resetGrantsTo() {
    this._grantsTo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grantsToInput() {
    return this._grantsTo.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      future_grants_in: dataSnowflakeGrantsFutureGrantsInToTerraform(this._futureGrantsIn.internalValue),
      future_grants_to: dataSnowflakeGrantsFutureGrantsToToTerraform(this._futureGrantsTo.internalValue),
      grants_of: dataSnowflakeGrantsGrantsOfToTerraform(this._grantsOf.internalValue),
      grants_on: dataSnowflakeGrantsGrantsOnToTerraform(this._grantsOn.internalValue),
      grants_to: dataSnowflakeGrantsGrantsToToTerraform(this._grantsTo.internalValue),
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
      future_grants_in: {
        value: dataSnowflakeGrantsFutureGrantsInToHclTerraform(this._futureGrantsIn.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSnowflakeGrantsFutureGrantsInList",
      },
      future_grants_to: {
        value: dataSnowflakeGrantsFutureGrantsToToHclTerraform(this._futureGrantsTo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSnowflakeGrantsFutureGrantsToList",
      },
      grants_of: {
        value: dataSnowflakeGrantsGrantsOfToHclTerraform(this._grantsOf.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSnowflakeGrantsGrantsOfList",
      },
      grants_on: {
        value: dataSnowflakeGrantsGrantsOnToHclTerraform(this._grantsOn.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSnowflakeGrantsGrantsOnList",
      },
      grants_to: {
        value: dataSnowflakeGrantsGrantsToToHclTerraform(this._grantsTo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSnowflakeGrantsGrantsToList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
