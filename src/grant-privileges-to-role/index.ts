// https://registry.terraform.io/providers/snowflake-labs/snowflake/0.91.0/docs/resources/grant_privileges_to_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GrantPrivilegesToRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Grant all privileges on the account role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.91.0/docs/resources/grant_privileges_to_role#all_privileges GrantPrivilegesToRole#all_privileges}
  */
  readonly allPrivileges?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.91.0/docs/resources/grant_privileges_to_role#id GrantPrivilegesToRole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * If true, the privileges will be granted on the account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.91.0/docs/resources/grant_privileges_to_role#on_account GrantPrivilegesToRole#on_account}
  */
  readonly onAccount?: boolean | cdktf.IResolvable;
  /**
  * The privileges to grant on the account role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.91.0/docs/resources/grant_privileges_to_role#privileges GrantPrivilegesToRole#privileges}
  */
  readonly privileges?: string[];
  /**
  * The fully qualified name of the role to which privileges will be granted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.91.0/docs/resources/grant_privileges_to_role#role_name GrantPrivilegesToRole#role_name}
  */
  readonly roleName: string;
  /**
  * Specifies whether the grantee can grant the privileges to other users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.91.0/docs/resources/grant_privileges_to_role#with_grant_option GrantPrivilegesToRole#with_grant_option}
  */
  readonly withGrantOption?: boolean | cdktf.IResolvable;
  /**
  * on_account_object block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.91.0/docs/resources/grant_privileges_to_role#on_account_object GrantPrivilegesToRole#on_account_object}
  */
  readonly onAccountObject?: GrantPrivilegesToRoleOnAccountObject;
  /**
  * on_schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.91.0/docs/resources/grant_privileges_to_role#on_schema GrantPrivilegesToRole#on_schema}
  */
  readonly onSchema?: GrantPrivilegesToRoleOnSchema;
  /**
  * on_schema_object block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.91.0/docs/resources/grant_privileges_to_role#on_schema_object GrantPrivilegesToRole#on_schema_object}
  */
  readonly onSchemaObject?: GrantPrivilegesToRoleOnSchemaObject;
}
export interface GrantPrivilegesToRoleOnAccountObject {
  /**
  * The fully qualified name of the object on which privileges will be granted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.91.0/docs/resources/grant_privileges_to_role#object_name GrantPrivilegesToRole#object_name}
  */
  readonly objectName: string;
  /**
  * The object type of the account object on which privileges will be granted. Valid values are: USER | RESOURCE MONITOR | WAREHOUSE | DATABASE | INTEGRATION | FAILOVER GROUP | REPLICATION GROUP | EXTERNAL VOLUME
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.91.0/docs/resources/grant_privileges_to_role#object_type GrantPrivilegesToRole#object_type}
  */
  readonly objectType: string;
}

export function grantPrivilegesToRoleOnAccountObjectToTerraform(struct?: GrantPrivilegesToRoleOnAccountObjectOutputReference | GrantPrivilegesToRoleOnAccountObject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object_name: cdktf.stringToTerraform(struct!.objectName),
    object_type: cdktf.stringToTerraform(struct!.objectType),
  }
}


export function grantPrivilegesToRoleOnAccountObjectToHclTerraform(struct?: GrantPrivilegesToRoleOnAccountObjectOutputReference | GrantPrivilegesToRoleOnAccountObject): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GrantPrivilegesToRoleOnAccountObjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GrantPrivilegesToRoleOnAccountObject | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GrantPrivilegesToRoleOnAccountObject | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._objectName = undefined;
      this._objectType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._objectName = value.objectName;
      this._objectType = value.objectType;
    }
  }

  // object_name - computed: false, optional: false, required: true
  private _objectName?: string; 
  public get objectName() {
    return this.getStringAttribute('object_name');
  }
  public set objectName(value: string) {
    this._objectName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectNameInput() {
    return this._objectName;
  }

  // object_type - computed: false, optional: false, required: true
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }
}
export interface GrantPrivilegesToRoleOnSchema {
  /**
  * The fully qualified name of the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.91.0/docs/resources/grant_privileges_to_role#all_schemas_in_database GrantPrivilegesToRole#all_schemas_in_database}
  */
  readonly allSchemasInDatabase?: string;
  /**
  * The fully qualified name of the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.91.0/docs/resources/grant_privileges_to_role#future_schemas_in_database GrantPrivilegesToRole#future_schemas_in_database}
  */
  readonly futureSchemasInDatabase?: string;
  /**
  * The fully qualified name of the schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.91.0/docs/resources/grant_privileges_to_role#schema_name GrantPrivilegesToRole#schema_name}
  */
  readonly schemaName?: string;
}

export function grantPrivilegesToRoleOnSchemaToTerraform(struct?: GrantPrivilegesToRoleOnSchemaOutputReference | GrantPrivilegesToRoleOnSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_schemas_in_database: cdktf.stringToTerraform(struct!.allSchemasInDatabase),
    future_schemas_in_database: cdktf.stringToTerraform(struct!.futureSchemasInDatabase),
    schema_name: cdktf.stringToTerraform(struct!.schemaName),
  }
}


export function grantPrivilegesToRoleOnSchemaToHclTerraform(struct?: GrantPrivilegesToRoleOnSchemaOutputReference | GrantPrivilegesToRoleOnSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_schemas_in_database: {
      value: cdktf.stringToHclTerraform(struct!.allSchemasInDatabase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    future_schemas_in_database: {
      value: cdktf.stringToHclTerraform(struct!.futureSchemasInDatabase),
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

export class GrantPrivilegesToRoleOnSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GrantPrivilegesToRoleOnSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allSchemasInDatabase !== undefined) {
      hasAnyValues = true;
      internalValueResult.allSchemasInDatabase = this._allSchemasInDatabase;
    }
    if (this._futureSchemasInDatabase !== undefined) {
      hasAnyValues = true;
      internalValueResult.futureSchemasInDatabase = this._futureSchemasInDatabase;
    }
    if (this._schemaName !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaName = this._schemaName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GrantPrivilegesToRoleOnSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allSchemasInDatabase = undefined;
      this._futureSchemasInDatabase = undefined;
      this._schemaName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allSchemasInDatabase = value.allSchemasInDatabase;
      this._futureSchemasInDatabase = value.futureSchemasInDatabase;
      this._schemaName = value.schemaName;
    }
  }

  // all_schemas_in_database - computed: false, optional: true, required: false
  private _allSchemasInDatabase?: string; 
  public get allSchemasInDatabase() {
    return this.getStringAttribute('all_schemas_in_database');
  }
  public set allSchemasInDatabase(value: string) {
    this._allSchemasInDatabase = value;
  }
  public resetAllSchemasInDatabase() {
    this._allSchemasInDatabase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allSchemasInDatabaseInput() {
    return this._allSchemasInDatabase;
  }

  // future_schemas_in_database - computed: false, optional: true, required: false
  private _futureSchemasInDatabase?: string; 
  public get futureSchemasInDatabase() {
    return this.getStringAttribute('future_schemas_in_database');
  }
  public set futureSchemasInDatabase(value: string) {
    this._futureSchemasInDatabase = value;
  }
  public resetFutureSchemasInDatabase() {
    this._futureSchemasInDatabase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get futureSchemasInDatabaseInput() {
    return this._futureSchemasInDatabase;
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
}
export interface GrantPrivilegesToRoleOnSchemaObjectAll {
  /**
  * The fully qualified name of the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.91.0/docs/resources/grant_privileges_to_role#in_database GrantPrivilegesToRole#in_database}
  */
  readonly inDatabase?: string;
  /**
  * The fully qualified name of the schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.91.0/docs/resources/grant_privileges_to_role#in_schema GrantPrivilegesToRole#in_schema}
  */
  readonly inSchema?: string;
  /**
  * The plural object type of the schema object on which privileges will be granted. Valid values are: AGGREGATION POLICIES | ALERTS | AUTHENTICATION POLICIES | DATA METRIC FUNCTIONS | DYNAMIC TABLES | EVENT TABLES | EXTERNAL TABLES | FILE FORMATS | FUNCTIONS | GIT REPOSITORIES | HYBRID TABLES | IMAGE REPOSITORIES | ICEBERG TABLES | MASKING POLICIES | MATERIALIZED VIEWS | MODELS | NETWORK RULES | PACKAGES POLICIES | PASSWORD POLICIES | PIPES | PROCEDURES | PROJECTION POLICIES | ROW ACCESS POLICIES | SECRETS | SERVICES | SESSION POLICIES | SEQUENCES | STAGES | STREAMS | TABLES | TAGS | TASKS | VIEWS | STREAMLITS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.91.0/docs/resources/grant_privileges_to_role#object_type_plural GrantPrivilegesToRole#object_type_plural}
  */
  readonly objectTypePlural: string;
}

export function grantPrivilegesToRoleOnSchemaObjectAllToTerraform(struct?: GrantPrivilegesToRoleOnSchemaObjectAllOutputReference | GrantPrivilegesToRoleOnSchemaObjectAll): any {
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


export function grantPrivilegesToRoleOnSchemaObjectAllToHclTerraform(struct?: GrantPrivilegesToRoleOnSchemaObjectAllOutputReference | GrantPrivilegesToRoleOnSchemaObjectAll): any {
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

export class GrantPrivilegesToRoleOnSchemaObjectAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GrantPrivilegesToRoleOnSchemaObjectAll | undefined {
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

  public set internalValue(value: GrantPrivilegesToRoleOnSchemaObjectAll | undefined) {
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
export interface GrantPrivilegesToRoleOnSchemaObjectFuture {
  /**
  * The fully qualified name of the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.91.0/docs/resources/grant_privileges_to_role#in_database GrantPrivilegesToRole#in_database}
  */
  readonly inDatabase?: string;
  /**
  * The fully qualified name of the schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.91.0/docs/resources/grant_privileges_to_role#in_schema GrantPrivilegesToRole#in_schema}
  */
  readonly inSchema?: string;
  /**
  * The plural object type of the schema object on which privileges will be granted. Valid values are: ALERTS | AUTHENTICATION POLICIES | DATA METRIC FUNCTIONS | DYNAMIC TABLES | EVENT TABLES | EXTERNAL TABLES | FILE FORMATS | FUNCTIONS | GIT REPOSITORIES | HYBRID TABLES | ICEBERG TABLES | MATERIALIZED VIEWS | MODELS | NETWORK RULES | PASSWORD POLICIES | PIPES | PROCEDURES | SECRETS | SERVICES | SEQUENCES | STAGES | STREAMS | TABLES | TASKS | VIEWS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.91.0/docs/resources/grant_privileges_to_role#object_type_plural GrantPrivilegesToRole#object_type_plural}
  */
  readonly objectTypePlural: string;
}

export function grantPrivilegesToRoleOnSchemaObjectFutureToTerraform(struct?: GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference | GrantPrivilegesToRoleOnSchemaObjectFuture): any {
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


export function grantPrivilegesToRoleOnSchemaObjectFutureToHclTerraform(struct?: GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference | GrantPrivilegesToRoleOnSchemaObjectFuture): any {
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

export class GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GrantPrivilegesToRoleOnSchemaObjectFuture | undefined {
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

  public set internalValue(value: GrantPrivilegesToRoleOnSchemaObjectFuture | undefined) {
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
export interface GrantPrivilegesToRoleOnSchemaObject {
  /**
  * The fully qualified name of the object on which privileges will be granted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.91.0/docs/resources/grant_privileges_to_role#object_name GrantPrivilegesToRole#object_name}
  */
  readonly objectName?: string;
  /**
  * The object type of the schema object on which privileges will be granted. Valid values are: AGGREGATION POLICY | ALERT | AUTHENTICATION POLICY | DATA METRIC FUNCTION | DYNAMIC TABLE | EVENT TABLE | EXTERNAL TABLE | FILE FORMAT | FUNCTION | GIT REPOSITORY | HYBRID TABLE | IMAGE REPOSITORY | ICEBERG TABLE | MASKING POLICY | MATERIALIZED VIEW | MODEL | NETWORK RULE | PACKAGES POLICY | PASSWORD POLICY | PIPE | PROCEDURE | PROJECTION POLICY | ROW ACCESS POLICY | SECRET | SERVICE | SESSION POLICY | SEQUENCE | STAGE | STREAM | TABLE | TAG | TASK | VIEW | STREAMLIT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.91.0/docs/resources/grant_privileges_to_role#object_type GrantPrivilegesToRole#object_type}
  */
  readonly objectType?: string;
  /**
  * all block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.91.0/docs/resources/grant_privileges_to_role#all GrantPrivilegesToRole#all}
  */
  readonly all?: GrantPrivilegesToRoleOnSchemaObjectAll;
  /**
  * future block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.91.0/docs/resources/grant_privileges_to_role#future GrantPrivilegesToRole#future}
  */
  readonly future?: GrantPrivilegesToRoleOnSchemaObjectFuture;
}

export function grantPrivilegesToRoleOnSchemaObjectToTerraform(struct?: GrantPrivilegesToRoleOnSchemaObjectOutputReference | GrantPrivilegesToRoleOnSchemaObject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object_name: cdktf.stringToTerraform(struct!.objectName),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    all: grantPrivilegesToRoleOnSchemaObjectAllToTerraform(struct!.all),
    future: grantPrivilegesToRoleOnSchemaObjectFutureToTerraform(struct!.future),
  }
}


export function grantPrivilegesToRoleOnSchemaObjectToHclTerraform(struct?: GrantPrivilegesToRoleOnSchemaObjectOutputReference | GrantPrivilegesToRoleOnSchemaObject): any {
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
      value: grantPrivilegesToRoleOnSchemaObjectAllToHclTerraform(struct!.all),
      isBlock: true,
      type: "list",
      storageClassType: "GrantPrivilegesToRoleOnSchemaObjectAllList",
    },
    future: {
      value: grantPrivilegesToRoleOnSchemaObjectFutureToHclTerraform(struct!.future),
      isBlock: true,
      type: "list",
      storageClassType: "GrantPrivilegesToRoleOnSchemaObjectFutureList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GrantPrivilegesToRoleOnSchemaObjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GrantPrivilegesToRoleOnSchemaObject | undefined {
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

  public set internalValue(value: GrantPrivilegesToRoleOnSchemaObject | undefined) {
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
  private _all = new GrantPrivilegesToRoleOnSchemaObjectAllOutputReference(this, "all");
  public get all() {
    return this._all;
  }
  public putAll(value: GrantPrivilegesToRoleOnSchemaObjectAll) {
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
  private _future = new GrantPrivilegesToRoleOnSchemaObjectFutureOutputReference(this, "future");
  public get future() {
    return this._future;
  }
  public putFuture(value: GrantPrivilegesToRoleOnSchemaObjectFuture) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.91.0/docs/resources/grant_privileges_to_role snowflake_grant_privileges_to_role}
*/
export class GrantPrivilegesToRole extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_grant_privileges_to_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GrantPrivilegesToRole resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GrantPrivilegesToRole to import
  * @param importFromId The id of the existing GrantPrivilegesToRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.91.0/docs/resources/grant_privileges_to_role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GrantPrivilegesToRole to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_grant_privileges_to_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.91.0/docs/resources/grant_privileges_to_role snowflake_grant_privileges_to_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GrantPrivilegesToRoleConfig
  */
  public constructor(scope: Construct, id: string, config: GrantPrivilegesToRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_grant_privileges_to_role',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '0.91.0',
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
    this._allPrivileges = config.allPrivileges;
    this._id = config.id;
    this._onAccount = config.onAccount;
    this._privileges = config.privileges;
    this._roleName = config.roleName;
    this._withGrantOption = config.withGrantOption;
    this._onAccountObject.internalValue = config.onAccountObject;
    this._onSchema.internalValue = config.onSchema;
    this._onSchemaObject.internalValue = config.onSchemaObject;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // all_privileges - computed: false, optional: true, required: false
  private _allPrivileges?: boolean | cdktf.IResolvable; 
  public get allPrivileges() {
    return this.getBooleanAttribute('all_privileges');
  }
  public set allPrivileges(value: boolean | cdktf.IResolvable) {
    this._allPrivileges = value;
  }
  public resetAllPrivileges() {
    this._allPrivileges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allPrivilegesInput() {
    return this._allPrivileges;
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

  // on_account - computed: false, optional: true, required: false
  private _onAccount?: boolean | cdktf.IResolvable; 
  public get onAccount() {
    return this.getBooleanAttribute('on_account');
  }
  public set onAccount(value: boolean | cdktf.IResolvable) {
    this._onAccount = value;
  }
  public resetOnAccount() {
    this._onAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onAccountInput() {
    return this._onAccount;
  }

  // privileges - computed: false, optional: true, required: false
  private _privileges?: string[]; 
  public get privileges() {
    return cdktf.Fn.tolist(this.getListAttribute('privileges'));
  }
  public set privileges(value: string[]) {
    this._privileges = value;
  }
  public resetPrivileges() {
    this._privileges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegesInput() {
    return this._privileges;
  }

  // role_name - computed: false, optional: false, required: true
  private _roleName?: string; 
  public get roleName() {
    return this.getStringAttribute('role_name');
  }
  public set roleName(value: string) {
    this._roleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleNameInput() {
    return this._roleName;
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

  // on_account_object - computed: false, optional: true, required: false
  private _onAccountObject = new GrantPrivilegesToRoleOnAccountObjectOutputReference(this, "on_account_object");
  public get onAccountObject() {
    return this._onAccountObject;
  }
  public putOnAccountObject(value: GrantPrivilegesToRoleOnAccountObject) {
    this._onAccountObject.internalValue = value;
  }
  public resetOnAccountObject() {
    this._onAccountObject.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onAccountObjectInput() {
    return this._onAccountObject.internalValue;
  }

  // on_schema - computed: false, optional: true, required: false
  private _onSchema = new GrantPrivilegesToRoleOnSchemaOutputReference(this, "on_schema");
  public get onSchema() {
    return this._onSchema;
  }
  public putOnSchema(value: GrantPrivilegesToRoleOnSchema) {
    this._onSchema.internalValue = value;
  }
  public resetOnSchema() {
    this._onSchema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onSchemaInput() {
    return this._onSchema.internalValue;
  }

  // on_schema_object - computed: false, optional: true, required: false
  private _onSchemaObject = new GrantPrivilegesToRoleOnSchemaObjectOutputReference(this, "on_schema_object");
  public get onSchemaObject() {
    return this._onSchemaObject;
  }
  public putOnSchemaObject(value: GrantPrivilegesToRoleOnSchemaObject) {
    this._onSchemaObject.internalValue = value;
  }
  public resetOnSchemaObject() {
    this._onSchemaObject.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onSchemaObjectInput() {
    return this._onSchemaObject.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      all_privileges: cdktf.booleanToTerraform(this._allPrivileges),
      id: cdktf.stringToTerraform(this._id),
      on_account: cdktf.booleanToTerraform(this._onAccount),
      privileges: cdktf.listMapper(cdktf.stringToTerraform, false)(this._privileges),
      role_name: cdktf.stringToTerraform(this._roleName),
      with_grant_option: cdktf.booleanToTerraform(this._withGrantOption),
      on_account_object: grantPrivilegesToRoleOnAccountObjectToTerraform(this._onAccountObject.internalValue),
      on_schema: grantPrivilegesToRoleOnSchemaToTerraform(this._onSchema.internalValue),
      on_schema_object: grantPrivilegesToRoleOnSchemaObjectToTerraform(this._onSchemaObject.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      all_privileges: {
        value: cdktf.booleanToHclTerraform(this._allPrivileges),
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
      on_account: {
        value: cdktf.booleanToHclTerraform(this._onAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      privileges: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._privileges),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      role_name: {
        value: cdktf.stringToHclTerraform(this._roleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      with_grant_option: {
        value: cdktf.booleanToHclTerraform(this._withGrantOption),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      on_account_object: {
        value: grantPrivilegesToRoleOnAccountObjectToHclTerraform(this._onAccountObject.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GrantPrivilegesToRoleOnAccountObjectList",
      },
      on_schema: {
        value: grantPrivilegesToRoleOnSchemaToHclTerraform(this._onSchema.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GrantPrivilegesToRoleOnSchemaList",
      },
      on_schema_object: {
        value: grantPrivilegesToRoleOnSchemaObjectToHclTerraform(this._onSchemaObject.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GrantPrivilegesToRoleOnSchemaObjectList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
