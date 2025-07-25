/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/grant_ownership
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GrantOwnershipConfig extends cdktf.TerraformMetaArguments {
  /**
  * The fully qualified name of the account role to which privileges will be granted. For more information about this resource, see [docs](./account_role).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/grant_ownership#account_role_name GrantOwnership#account_role_name}
  */
  readonly accountRoleName?: string;
  /**
  * The fully qualified name of the database role to which privileges will be granted. For more information about this resource, see [docs](./database_role).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/grant_ownership#database_role_name GrantOwnership#database_role_name}
  */
  readonly databaseRoleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/grant_ownership#id GrantOwnership#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies whether to remove or transfer all existing outbound privileges on the object when ownership is transferred to a new role. Available options are: REVOKE for removing existing privileges and COPY to transfer them with ownership. For more information head over to [Snowflake documentation](https://docs.snowflake.com/en/sql-reference/sql/grant-ownership#optional-parameters).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/grant_ownership#outbound_privileges GrantOwnership#outbound_privileges}
  */
  readonly outboundPrivileges?: string;
  /**
  * on block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/grant_ownership#on GrantOwnership#on}
  */
  readonly on: GrantOwnershipOn;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/grant_ownership#timeouts GrantOwnership#timeouts}
  */
  readonly timeouts?: GrantOwnershipTimeouts;
}
export interface GrantOwnershipOnAll {
  /**
  * The fully qualified name of the database. For more information about this resource, see [docs](./database).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/grant_ownership#in_database GrantOwnership#in_database}
  */
  readonly inDatabase?: string;
  /**
  * The fully qualified name of the schema. For more information about this resource, see [docs](./schema).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/grant_ownership#in_schema GrantOwnership#in_schema}
  */
  readonly inSchema?: string;
  /**
  * Specifies the type of object in plural form on which you are transferring ownership. Available values are: AGGREGATION POLICIES | ALERTS | AUTHENTICATION POLICIES | COMPUTE POOLS | DATA METRIC FUNCTIONS | DATABASES | DATABASE ROLES | DYNAMIC TABLES | EVENT TABLES | EXTERNAL TABLES | EXTERNAL VOLUMES | FAILOVER GROUPS | FILE FORMATS | FUNCTIONS | GIT REPOSITORIES | HYBRID TABLES | ICEBERG TABLES | IMAGE REPOSITORIES | INTEGRATIONS | MATERIALIZED VIEWS | NETWORK POLICIES | NETWORK RULES | PACKAGES POLICIES | PIPES | PROCEDURES | MASKING POLICIES | PASSWORD POLICIES | PROJECTION POLICIES | REPLICATION GROUPS | RESOURCE MONITORS | ROLES | ROW ACCESS POLICIES | SCHEMAS | SESSION POLICIES | SECRETS | SEQUENCES | STAGES | STREAMS | TABLES | TAGS | TASKS | USERS | VIEWS | WAREHOUSES. For more information head over to [Snowflake documentation](https://docs.snowflake.com/en/sql-reference/sql/grant-ownership#required-parameters).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/grant_ownership#object_type_plural GrantOwnership#object_type_plural}
  */
  readonly objectTypePlural: string;
}

export function grantOwnershipOnAllToTerraform(struct?: GrantOwnershipOnAllOutputReference | GrantOwnershipOnAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    in_database: cdktf.stringToTerraform(struct!.inDatabase),
    in_schema: cdktf.stringToTerraform(struct!.inSchema),
    object_type_plural: cdktf.stringToTerraform(struct!.objectTypePlural),
  }
}


export function grantOwnershipOnAllToHclTerraform(struct?: GrantOwnershipOnAllOutputReference | GrantOwnershipOnAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    in_database: {
      value: cdktf.stringToHclTerraform(struct!.inDatabase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    in_schema: {
      value: cdktf.stringToHclTerraform(struct!.inSchema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type_plural: {
      value: cdktf.stringToHclTerraform(struct!.objectTypePlural),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GrantOwnershipOnAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GrantOwnershipOnAll | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inDatabase !== undefined) {
      hasAnyValues = true;
      internalValueResult.inDatabase = this._inDatabase;
    }
    if (this._inSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.inSchema = this._inSchema;
    }
    if (this._objectTypePlural !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectTypePlural = this._objectTypePlural;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GrantOwnershipOnAll | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inDatabase = undefined;
      this._inSchema = undefined;
      this._objectTypePlural = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inDatabase = value.inDatabase;
      this._inSchema = value.inSchema;
      this._objectTypePlural = value.objectTypePlural;
    }
  }

  // in_database - computed: false, optional: true, required: false
  private _inDatabase?: string; 
  public get inDatabase() {
    return this.getStringAttribute('in_database');
  }
  public set inDatabase(value: string) {
    this._inDatabase = value;
  }
  public resetInDatabase() {
    this._inDatabase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inDatabaseInput() {
    return this._inDatabase;
  }

  // in_schema - computed: false, optional: true, required: false
  private _inSchema?: string; 
  public get inSchema() {
    return this.getStringAttribute('in_schema');
  }
  public set inSchema(value: string) {
    this._inSchema = value;
  }
  public resetInSchema() {
    this._inSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inSchemaInput() {
    return this._inSchema;
  }

  // object_type_plural - computed: false, optional: false, required: true
  private _objectTypePlural?: string; 
  public get objectTypePlural() {
    return this.getStringAttribute('object_type_plural');
  }
  public set objectTypePlural(value: string) {
    this._objectTypePlural = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypePluralInput() {
    return this._objectTypePlural;
  }
}
export interface GrantOwnershipOnFuture {
  /**
  * The fully qualified name of the database. For more information about this resource, see [docs](./database).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/grant_ownership#in_database GrantOwnership#in_database}
  */
  readonly inDatabase?: string;
  /**
  * The fully qualified name of the schema. For more information about this resource, see [docs](./schema).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/grant_ownership#in_schema GrantOwnership#in_schema}
  */
  readonly inSchema?: string;
  /**
  * Specifies the type of object in plural form on which you are transferring ownership. Available values are: AGGREGATION POLICIES | ALERTS | AUTHENTICATION POLICIES | COMPUTE POOLS | DATA METRIC FUNCTIONS | DATABASES | DATABASE ROLES | DYNAMIC TABLES | EVENT TABLES | EXTERNAL TABLES | EXTERNAL VOLUMES | FAILOVER GROUPS | FILE FORMATS | FUNCTIONS | GIT REPOSITORIES | HYBRID TABLES | ICEBERG TABLES | IMAGE REPOSITORIES | INTEGRATIONS | MATERIALIZED VIEWS | NETWORK POLICIES | NETWORK RULES | PACKAGES POLICIES | PIPES | PROCEDURES | MASKING POLICIES | PASSWORD POLICIES | PROJECTION POLICIES | REPLICATION GROUPS | RESOURCE MONITORS | ROLES | ROW ACCESS POLICIES | SCHEMAS | SESSION POLICIES | SECRETS | SEQUENCES | STAGES | STREAMS | TABLES | TAGS | TASKS | USERS | VIEWS | WAREHOUSES. For more information head over to [Snowflake documentation](https://docs.snowflake.com/en/sql-reference/sql/grant-ownership#required-parameters).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/grant_ownership#object_type_plural GrantOwnership#object_type_plural}
  */
  readonly objectTypePlural: string;
}

export function grantOwnershipOnFutureToTerraform(struct?: GrantOwnershipOnFutureOutputReference | GrantOwnershipOnFuture): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    in_database: cdktf.stringToTerraform(struct!.inDatabase),
    in_schema: cdktf.stringToTerraform(struct!.inSchema),
    object_type_plural: cdktf.stringToTerraform(struct!.objectTypePlural),
  }
}


export function grantOwnershipOnFutureToHclTerraform(struct?: GrantOwnershipOnFutureOutputReference | GrantOwnershipOnFuture): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    in_database: {
      value: cdktf.stringToHclTerraform(struct!.inDatabase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    in_schema: {
      value: cdktf.stringToHclTerraform(struct!.inSchema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type_plural: {
      value: cdktf.stringToHclTerraform(struct!.objectTypePlural),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GrantOwnershipOnFutureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GrantOwnershipOnFuture | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inDatabase !== undefined) {
      hasAnyValues = true;
      internalValueResult.inDatabase = this._inDatabase;
    }
    if (this._inSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.inSchema = this._inSchema;
    }
    if (this._objectTypePlural !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectTypePlural = this._objectTypePlural;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GrantOwnershipOnFuture | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inDatabase = undefined;
      this._inSchema = undefined;
      this._objectTypePlural = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inDatabase = value.inDatabase;
      this._inSchema = value.inSchema;
      this._objectTypePlural = value.objectTypePlural;
    }
  }

  // in_database - computed: false, optional: true, required: false
  private _inDatabase?: string; 
  public get inDatabase() {
    return this.getStringAttribute('in_database');
  }
  public set inDatabase(value: string) {
    this._inDatabase = value;
  }
  public resetInDatabase() {
    this._inDatabase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inDatabaseInput() {
    return this._inDatabase;
  }

  // in_schema - computed: false, optional: true, required: false
  private _inSchema?: string; 
  public get inSchema() {
    return this.getStringAttribute('in_schema');
  }
  public set inSchema(value: string) {
    this._inSchema = value;
  }
  public resetInSchema() {
    this._inSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inSchemaInput() {
    return this._inSchema;
  }

  // object_type_plural - computed: false, optional: false, required: true
  private _objectTypePlural?: string; 
  public get objectTypePlural() {
    return this.getStringAttribute('object_type_plural');
  }
  public set objectTypePlural(value: string) {
    this._objectTypePlural = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypePluralInput() {
    return this._objectTypePlural;
  }
}
export interface GrantOwnershipOn {
  /**
  * Specifies the identifier for the object on which you are transferring ownership.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/grant_ownership#object_name GrantOwnership#object_name}
  */
  readonly objectName?: string;
  /**
  * Specifies the type of object on which you are transferring ownership. Available values are: AGGREGATION POLICY | ALERT | AUTHENTICATION POLICY | COMPUTE POOL | DATA METRIC FUNCTION | DATABASE | DATABASE ROLE | DYNAMIC TABLE | EVENT TABLE | EXTERNAL TABLE | EXTERNAL VOLUME | FAILOVER GROUP | FILE FORMAT | FUNCTION | GIT REPOSITORY | HYBRID TABLE | ICEBERG TABLE | IMAGE REPOSITORY | INTEGRATION | MATERIALIZED VIEW | NETWORK POLICY | NETWORK RULE | PACKAGES POLICY | PIPE | PROCEDURE | MASKING POLICY | PASSWORD POLICY | PROJECTION POLICY | REPLICATION GROUP | RESOURCE MONITOR | ROLE | ROW ACCESS POLICY | SCHEMA | SESSION POLICY | SECRET | SEQUENCE | STAGE | STREAM | TABLE | TAG | TASK | USER | VIEW | WAREHOUSE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/grant_ownership#object_type GrantOwnership#object_type}
  */
  readonly objectType?: string;
  /**
  * all block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/grant_ownership#all GrantOwnership#all}
  */
  readonly all?: GrantOwnershipOnAll;
  /**
  * future block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/grant_ownership#future GrantOwnership#future}
  */
  readonly future?: GrantOwnershipOnFuture;
}

export function grantOwnershipOnToTerraform(struct?: GrantOwnershipOnOutputReference | GrantOwnershipOn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object_name: cdktf.stringToTerraform(struct!.objectName),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    all: grantOwnershipOnAllToTerraform(struct!.all),
    future: grantOwnershipOnFutureToTerraform(struct!.future),
  }
}


export function grantOwnershipOnToHclTerraform(struct?: GrantOwnershipOnOutputReference | GrantOwnershipOn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    all: {
      value: grantOwnershipOnAllToHclTerraform(struct!.all),
      isBlock: true,
      type: "list",
      storageClassType: "GrantOwnershipOnAllList",
    },
    future: {
      value: grantOwnershipOnFutureToHclTerraform(struct!.future),
      isBlock: true,
      type: "list",
      storageClassType: "GrantOwnershipOnFutureList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GrantOwnershipOnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GrantOwnershipOn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objectName !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectName = this._objectName;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._all?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.all = this._all?.internalValue;
    }
    if (this._future?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.future = this._future?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GrantOwnershipOn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._objectName = undefined;
      this._objectType = undefined;
      this._all.internalValue = undefined;
      this._future.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._objectName = value.objectName;
      this._objectType = value.objectType;
      this._all.internalValue = value.all;
      this._future.internalValue = value.future;
    }
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

  // all - computed: false, optional: true, required: false
  private _all = new GrantOwnershipOnAllOutputReference(this, "all");
  public get all() {
    return this._all;
  }
  public putAll(value: GrantOwnershipOnAll) {
    this._all.internalValue = value;
  }
  public resetAll() {
    this._all.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all.internalValue;
  }

  // future - computed: false, optional: true, required: false
  private _future = new GrantOwnershipOnFutureOutputReference(this, "future");
  public get future() {
    return this._future;
  }
  public putFuture(value: GrantOwnershipOnFuture) {
    this._future.internalValue = value;
  }
  public resetFuture() {
    this._future.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get futureInput() {
    return this._future.internalValue;
  }
}
export interface GrantOwnershipTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/grant_ownership#create GrantOwnership#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/grant_ownership#delete GrantOwnership#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/grant_ownership#read GrantOwnership#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/grant_ownership#update GrantOwnership#update}
  */
  readonly update?: string;
}

export function grantOwnershipTimeoutsToTerraform(struct?: GrantOwnershipTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function grantOwnershipTimeoutsToHclTerraform(struct?: GrantOwnershipTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GrantOwnershipTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GrantOwnershipTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GrantOwnershipTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/grant_ownership snowflake_grant_ownership}
*/
export class GrantOwnership extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_grant_ownership";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GrantOwnership resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GrantOwnership to import
  * @param importFromId The id of the existing GrantOwnership that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/grant_ownership#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GrantOwnership to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_grant_ownership", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/grant_ownership snowflake_grant_ownership} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GrantOwnershipConfig
  */
  public constructor(scope: Construct, id: string, config: GrantOwnershipConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_grant_ownership',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '2.4.0',
        providerVersionConstraint: ' ~> 2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountRoleName = config.accountRoleName;
    this._databaseRoleName = config.databaseRoleName;
    this._id = config.id;
    this._outboundPrivileges = config.outboundPrivileges;
    this._on.internalValue = config.on;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_role_name - computed: false, optional: true, required: false
  private _accountRoleName?: string; 
  public get accountRoleName() {
    return this.getStringAttribute('account_role_name');
  }
  public set accountRoleName(value: string) {
    this._accountRoleName = value;
  }
  public resetAccountRoleName() {
    this._accountRoleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountRoleNameInput() {
    return this._accountRoleName;
  }

  // database_role_name - computed: false, optional: true, required: false
  private _databaseRoleName?: string; 
  public get databaseRoleName() {
    return this.getStringAttribute('database_role_name');
  }
  public set databaseRoleName(value: string) {
    this._databaseRoleName = value;
  }
  public resetDatabaseRoleName() {
    this._databaseRoleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseRoleNameInput() {
    return this._databaseRoleName;
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

  // outbound_privileges - computed: false, optional: true, required: false
  private _outboundPrivileges?: string; 
  public get outboundPrivileges() {
    return this.getStringAttribute('outbound_privileges');
  }
  public set outboundPrivileges(value: string) {
    this._outboundPrivileges = value;
  }
  public resetOutboundPrivileges() {
    this._outboundPrivileges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundPrivilegesInput() {
    return this._outboundPrivileges;
  }

  // on - computed: false, optional: false, required: true
  private _on = new GrantOwnershipOnOutputReference(this, "on");
  public get on() {
    return this._on;
  }
  public putOn(value: GrantOwnershipOn) {
    this._on.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get onInput() {
    return this._on.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GrantOwnershipTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GrantOwnershipTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_role_name: cdktf.stringToTerraform(this._accountRoleName),
      database_role_name: cdktf.stringToTerraform(this._databaseRoleName),
      id: cdktf.stringToTerraform(this._id),
      outbound_privileges: cdktf.stringToTerraform(this._outboundPrivileges),
      on: grantOwnershipOnToTerraform(this._on.internalValue),
      timeouts: grantOwnershipTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_role_name: {
        value: cdktf.stringToHclTerraform(this._accountRoleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_role_name: {
        value: cdktf.stringToHclTerraform(this._databaseRoleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      outbound_privileges: {
        value: cdktf.stringToHclTerraform(this._outboundPrivileges),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      on: {
        value: grantOwnershipOnToHclTerraform(this._on.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GrantOwnershipOnList",
      },
      timeouts: {
        value: grantOwnershipTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GrantOwnershipTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
