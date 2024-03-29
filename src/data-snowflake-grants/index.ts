/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/data-sources/grants
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSnowflakeGrantsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/data-sources/grants#id DataSnowflakeGrants#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * future_grants_in block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/data-sources/grants#future_grants_in DataSnowflakeGrants#future_grants_in}
  */
  readonly futureGrantsIn?: DataSnowflakeGrantsFutureGrantsIn;
  /**
  * future_grants_to block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/data-sources/grants#future_grants_to DataSnowflakeGrants#future_grants_to}
  */
  readonly futureGrantsTo?: DataSnowflakeGrantsFutureGrantsTo;
  /**
  * grants_of block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/data-sources/grants#grants_of DataSnowflakeGrants#grants_of}
  */
  readonly grantsOf?: DataSnowflakeGrantsGrantsOf;
  /**
  * grants_on block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/data-sources/grants#grants_on DataSnowflakeGrants#grants_on}
  */
  readonly grantsOn?: DataSnowflakeGrantsGrantsOn;
  /**
  * grants_to block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/data-sources/grants#grants_to DataSnowflakeGrants#grants_to}
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
export interface DataSnowflakeGrantsFutureGrantsInSchema {
  /**
  * The database in which the scehma resides. Optional when querying a schema in the current database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/data-sources/grants#database_name DataSnowflakeGrants#database_name}
  */
  readonly databaseName?: string;
  /**
  * The name of the schema to list all privileges of new (ie. future) objects granted to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/data-sources/grants#schema_name DataSnowflakeGrants#schema_name}
  */
  readonly schemaName: string;
}

export function dataSnowflakeGrantsFutureGrantsInSchemaToTerraform(struct?: DataSnowflakeGrantsFutureGrantsInSchemaOutputReference | DataSnowflakeGrantsFutureGrantsInSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    schema_name: cdktf.stringToTerraform(struct!.schemaName),
  }
}


export function dataSnowflakeGrantsFutureGrantsInSchemaToHclTerraform(struct?: DataSnowflakeGrantsFutureGrantsInSchemaOutputReference | DataSnowflakeGrantsFutureGrantsInSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database_name: {
      value: cdktf.stringToHclTerraform(struct!.databaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema_name: {
      value: cdktf.stringToHclTerraform(struct!.schemaName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSnowflakeGrantsFutureGrantsInSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataSnowflakeGrantsFutureGrantsInSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._schemaName !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaName = this._schemaName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeGrantsFutureGrantsInSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._databaseName = undefined;
      this._schemaName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._databaseName = value.databaseName;
      this._schemaName = value.schemaName;
    }
  }

  // database_name - computed: false, optional: true, required: false
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  public resetDatabaseName() {
    this._databaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }

  // schema_name - computed: false, optional: false, required: true
  private _schemaName?: string; 
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }
  public set schemaName(value: string) {
    this._schemaName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaNameInput() {
    return this._schemaName;
  }
}
export interface DataSnowflakeGrantsFutureGrantsIn {
  /**
  * Lists all privileges on new (i.e. future) objects of a specified type in the database granted to a role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/data-sources/grants#database DataSnowflakeGrants#database}
  */
  readonly database?: string;
  /**
  * schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/data-sources/grants#schema DataSnowflakeGrants#schema}
  */
  readonly schema?: DataSnowflakeGrantsFutureGrantsInSchema;
}

export function dataSnowflakeGrantsFutureGrantsInToTerraform(struct?: DataSnowflakeGrantsFutureGrantsInOutputReference | DataSnowflakeGrantsFutureGrantsIn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    schema: dataSnowflakeGrantsFutureGrantsInSchemaToTerraform(struct!.schema),
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
      value: dataSnowflakeGrantsFutureGrantsInSchemaToHclTerraform(struct!.schema),
      isBlock: true,
      type: "list",
      storageClassType: "DataSnowflakeGrantsFutureGrantsInSchemaList",
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
    if (this._schema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeGrantsFutureGrantsIn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._database = undefined;
      this._schema.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._database = value.database;
      this._schema.internalValue = value.schema;
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
  private _schema = new DataSnowflakeGrantsFutureGrantsInSchemaOutputReference(this, "schema");
  public get schema() {
    return this._schema;
  }
  public putSchema(value: DataSnowflakeGrantsFutureGrantsInSchema) {
    this._schema.internalValue = value;
  }
  public resetSchema() {
    this._schema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema.internalValue;
  }
}
export interface DataSnowflakeGrantsFutureGrantsTo {
  /**
  * Lists all privileges on new (i.e. future) objects of a specified type in a database or schema granted to the role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/data-sources/grants#role DataSnowflakeGrants#role}
  */
  readonly role: string;
}

export function dataSnowflakeGrantsFutureGrantsToToTerraform(struct?: DataSnowflakeGrantsFutureGrantsToOutputReference | DataSnowflakeGrantsFutureGrantsTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    role: cdktf.stringToTerraform(struct!.role),
  }
}


export function dataSnowflakeGrantsFutureGrantsToToHclTerraform(struct?: DataSnowflakeGrantsFutureGrantsToOutputReference | DataSnowflakeGrantsFutureGrantsTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
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
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeGrantsFutureGrantsTo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._role = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._role = value.role;
    }
  }

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }
}
export interface DataSnowflakeGrantsGrantsOf {
  /**
  * Lists all users and roles to which the role has been granted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/data-sources/grants#role DataSnowflakeGrants#role}
  */
  readonly role?: string;
  /**
  * Lists all the accounts for the share and indicates the accounts that are using the share.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/data-sources/grants#share DataSnowflakeGrants#share}
  */
  readonly share?: string;
}

export function dataSnowflakeGrantsGrantsOfToTerraform(struct?: DataSnowflakeGrantsGrantsOfOutputReference | DataSnowflakeGrantsGrantsOf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    role: cdktf.stringToTerraform(struct!.role),
    share: cdktf.stringToTerraform(struct!.share),
  }
}


export function dataSnowflakeGrantsGrantsOfToHclTerraform(struct?: DataSnowflakeGrantsGrantsOfOutputReference | DataSnowflakeGrantsGrantsOf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
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
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
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
      this._role = undefined;
      this._share = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._role = value.role;
      this._share = value.share;
    }
  }

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/data-sources/grants#account DataSnowflakeGrants#account}
  */
  readonly account?: boolean | cdktf.IResolvable;
  /**
  * Name of object to list privileges on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/data-sources/grants#object_name DataSnowflakeGrants#object_name}
  */
  readonly objectName?: string;
  /**
  * Type of object to list privileges on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/data-sources/grants#object_type DataSnowflakeGrants#object_type}
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
export interface DataSnowflakeGrantsGrantsTo {
  /**
  * Lists all privileges and roles granted to the role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/data-sources/grants#role DataSnowflakeGrants#role}
  */
  readonly role?: string;
  /**
  * Lists all the privileges granted to the share
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/data-sources/grants#share DataSnowflakeGrants#share}
  */
  readonly share?: string;
  /**
  * Lists all the roles granted to the user. Note that the PUBLIC role, which is automatically available to every user, is not listed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/data-sources/grants#user DataSnowflakeGrants#user}
  */
  readonly user?: string;
}

export function dataSnowflakeGrantsGrantsToToTerraform(struct?: DataSnowflakeGrantsGrantsToOutputReference | DataSnowflakeGrantsGrantsTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    role: cdktf.stringToTerraform(struct!.role),
    share: cdktf.stringToTerraform(struct!.share),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function dataSnowflakeGrantsGrantsToToHclTerraform(struct?: DataSnowflakeGrantsGrantsToOutputReference | DataSnowflakeGrantsGrantsTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
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
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._share !== undefined) {
      hasAnyValues = true;
      internalValueResult.share = this._share;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeGrantsGrantsTo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._role = undefined;
      this._share = undefined;
      this._user = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._role = value.role;
      this._share = value.share;
      this._user = value.user;
    }
  }

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/data-sources/grants snowflake_grants}
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
  * @param importFromId The id of the existing DataSnowflakeGrants that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/data-sources/grants#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSnowflakeGrants to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_grants", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/data-sources/grants snowflake_grants} Data Source
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
        providerVersion: '0.87.2',
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
