// https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/grant_privileges_to_database_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GrantPrivilegesToDatabaseRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Grant all privileges on the database role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/grant_privileges_to_database_role#all_privileges GrantPrivilegesToDatabaseRole#all_privileges}
  */
  readonly allPrivileges?: boolean | cdktf.IResolvable;
  /**
  * If true, the resource will always produce a “plan” and on “apply” it will re-grant defined privileges. It is supposed to be used only in “grant privileges on all X’s in database / schema Y” or “grant all privileges to X” scenarios to make sure that every new object in a given database / schema is granted by the account role and every new privilege is granted to the database role. Important note: this flag is not compliant with the Terraform assumptions of the config being eventually convergent (producing an empty plan).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/grant_privileges_to_database_role#always_apply GrantPrivilegesToDatabaseRole#always_apply}
  */
  readonly alwaysApply?: boolean | cdktf.IResolvable;
  /**
  * This is a helper field and should not be set. Its main purpose is to help to achieve the functionality described by the always_apply field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/grant_privileges_to_database_role#always_apply_trigger GrantPrivilegesToDatabaseRole#always_apply_trigger}
  */
  readonly alwaysApplyTrigger?: string;
  /**
  * The fully qualified name of the database role to which privileges will be granted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/grant_privileges_to_database_role#database_role_name GrantPrivilegesToDatabaseRole#database_role_name}
  */
  readonly databaseRoleName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/grant_privileges_to_database_role#id GrantPrivilegesToDatabaseRole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The fully qualified name of the database on which privileges will be granted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/grant_privileges_to_database_role#on_database GrantPrivilegesToDatabaseRole#on_database}
  */
  readonly onDatabase?: string;
  /**
  * The privileges to grant on the database role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/grant_privileges_to_database_role#privileges GrantPrivilegesToDatabaseRole#privileges}
  */
  readonly privileges?: string[];
  /**
  * If specified, allows the recipient role to grant the privileges to other roles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/grant_privileges_to_database_role#with_grant_option GrantPrivilegesToDatabaseRole#with_grant_option}
  */
  readonly withGrantOption?: boolean | cdktf.IResolvable;
  /**
  * on_schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/grant_privileges_to_database_role#on_schema GrantPrivilegesToDatabaseRole#on_schema}
  */
  readonly onSchema?: GrantPrivilegesToDatabaseRoleOnSchema;
  /**
  * on_schema_object block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/grant_privileges_to_database_role#on_schema_object GrantPrivilegesToDatabaseRole#on_schema_object}
  */
  readonly onSchemaObject?: GrantPrivilegesToDatabaseRoleOnSchemaObject;
}
export interface GrantPrivilegesToDatabaseRoleOnSchema {
  /**
  * The fully qualified name of the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/grant_privileges_to_database_role#all_schemas_in_database GrantPrivilegesToDatabaseRole#all_schemas_in_database}
  */
  readonly allSchemasInDatabase?: string;
  /**
  * The fully qualified name of the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/grant_privileges_to_database_role#future_schemas_in_database GrantPrivilegesToDatabaseRole#future_schemas_in_database}
  */
  readonly futureSchemasInDatabase?: string;
  /**
  * The fully qualified name of the schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/grant_privileges_to_database_role#schema_name GrantPrivilegesToDatabaseRole#schema_name}
  */
  readonly schemaName?: string;
}

export function grantPrivilegesToDatabaseRoleOnSchemaToTerraform(struct?: GrantPrivilegesToDatabaseRoleOnSchemaOutputReference | GrantPrivilegesToDatabaseRoleOnSchema): any {
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


export function grantPrivilegesToDatabaseRoleOnSchemaToHclTerraform(struct?: GrantPrivilegesToDatabaseRoleOnSchemaOutputReference | GrantPrivilegesToDatabaseRoleOnSchema): any {
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

export class GrantPrivilegesToDatabaseRoleOnSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GrantPrivilegesToDatabaseRoleOnSchema | undefined {
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

  public set internalValue(value: GrantPrivilegesToDatabaseRoleOnSchema | undefined) {
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
export interface GrantPrivilegesToDatabaseRoleOnSchemaObjectAll {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/grant_privileges_to_database_role#in_database GrantPrivilegesToDatabaseRole#in_database}
  */
  readonly inDatabase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/grant_privileges_to_database_role#in_schema GrantPrivilegesToDatabaseRole#in_schema}
  */
  readonly inSchema?: string;
  /**
  * The plural object type of the schema object on which privileges will be granted. Valid values are: ALERTS | DYNAMIC TABLES | EVENT TABLES | FILE FORMATS | FUNCTIONS | PROCEDURES | SECRETS | SEQUENCES | PIPES | MASKING POLICIES | PASSWORD POLICIES | ROW ACCESS POLICIES | SESSION POLICIES | TAGS | STAGES | STREAMS | TABLES | EXTERNAL TABLES | TASKS | VIEWS | MATERIALIZED VIEWS | NETWORK RULES | PACKAGES POLICIES | ICEBERG TABLES
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/grant_privileges_to_database_role#object_type_plural GrantPrivilegesToDatabaseRole#object_type_plural}
  */
  readonly objectTypePlural: string;
}

export function grantPrivilegesToDatabaseRoleOnSchemaObjectAllToTerraform(struct?: GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference | GrantPrivilegesToDatabaseRoleOnSchemaObjectAll): any {
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


export function grantPrivilegesToDatabaseRoleOnSchemaObjectAllToHclTerraform(struct?: GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference | GrantPrivilegesToDatabaseRoleOnSchemaObjectAll): any {
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

export class GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GrantPrivilegesToDatabaseRoleOnSchemaObjectAll | undefined {
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

  public set internalValue(value: GrantPrivilegesToDatabaseRoleOnSchemaObjectAll | undefined) {
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
export interface GrantPrivilegesToDatabaseRoleOnSchemaObjectFuture {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/grant_privileges_to_database_role#in_database GrantPrivilegesToDatabaseRole#in_database}
  */
  readonly inDatabase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/grant_privileges_to_database_role#in_schema GrantPrivilegesToDatabaseRole#in_schema}
  */
  readonly inSchema?: string;
  /**
  * The plural object type of the schema object on which privileges will be granted. Valid values are: ALERTS | DYNAMIC TABLES | EVENT TABLES | FILE FORMATS | FUNCTIONS | PROCEDURES | SECRETS | SEQUENCES | PIPES | MASKING POLICIES | PASSWORD POLICIES | ROW ACCESS POLICIES | SESSION POLICIES | TAGS | STAGES | STREAMS | TABLES | EXTERNAL TABLES | TASKS | VIEWS | MATERIALIZED VIEWS | NETWORK RULES | PACKAGES POLICIES | ICEBERG TABLES
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/grant_privileges_to_database_role#object_type_plural GrantPrivilegesToDatabaseRole#object_type_plural}
  */
  readonly objectTypePlural: string;
}

export function grantPrivilegesToDatabaseRoleOnSchemaObjectFutureToTerraform(struct?: GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference | GrantPrivilegesToDatabaseRoleOnSchemaObjectFuture): any {
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


export function grantPrivilegesToDatabaseRoleOnSchemaObjectFutureToHclTerraform(struct?: GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference | GrantPrivilegesToDatabaseRoleOnSchemaObjectFuture): any {
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

export class GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GrantPrivilegesToDatabaseRoleOnSchemaObjectFuture | undefined {
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

  public set internalValue(value: GrantPrivilegesToDatabaseRoleOnSchemaObjectFuture | undefined) {
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
export interface GrantPrivilegesToDatabaseRoleOnSchemaObject {
  /**
  * The fully qualified name of the object on which privileges will be granted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/grant_privileges_to_database_role#object_name GrantPrivilegesToDatabaseRole#object_name}
  */
  readonly objectName?: string;
  /**
  * The object type of the schema object on which privileges will be granted. Valid values are: ALERT | DYNAMIC TABLE | EVENT TABLE | FILE FORMAT | FUNCTION | PROCEDURE | SECRET | SEQUENCE | PIPE | MASKING POLICY | PASSWORD POLICY | ROW ACCESS POLICY | SESSION POLICY | TAG | STAGE | STREAM | TABLE | EXTERNAL TABLE | TASK | VIEW | MATERIALIZED VIEW | NETWORK RULE | PACKAGES POLICY | ICEBERG TABLE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/grant_privileges_to_database_role#object_type GrantPrivilegesToDatabaseRole#object_type}
  */
  readonly objectType?: string;
  /**
  * all block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/grant_privileges_to_database_role#all GrantPrivilegesToDatabaseRole#all}
  */
  readonly all?: GrantPrivilegesToDatabaseRoleOnSchemaObjectAll;
  /**
  * future block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/grant_privileges_to_database_role#future GrantPrivilegesToDatabaseRole#future}
  */
  readonly future?: GrantPrivilegesToDatabaseRoleOnSchemaObjectFuture;
}

export function grantPrivilegesToDatabaseRoleOnSchemaObjectToTerraform(struct?: GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference | GrantPrivilegesToDatabaseRoleOnSchemaObject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object_name: cdktf.stringToTerraform(struct!.objectName),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    all: grantPrivilegesToDatabaseRoleOnSchemaObjectAllToTerraform(struct!.all),
    future: grantPrivilegesToDatabaseRoleOnSchemaObjectFutureToTerraform(struct!.future),
  }
}


export function grantPrivilegesToDatabaseRoleOnSchemaObjectToHclTerraform(struct?: GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference | GrantPrivilegesToDatabaseRoleOnSchemaObject): any {
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
      value: grantPrivilegesToDatabaseRoleOnSchemaObjectAllToHclTerraform(struct!.all),
      isBlock: true,
      type: "list",
      storageClassType: "GrantPrivilegesToDatabaseRoleOnSchemaObjectAllList",
    },
    future: {
      value: grantPrivilegesToDatabaseRoleOnSchemaObjectFutureToHclTerraform(struct!.future),
      isBlock: true,
      type: "list",
      storageClassType: "GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GrantPrivilegesToDatabaseRoleOnSchemaObject | undefined {
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

  public set internalValue(value: GrantPrivilegesToDatabaseRoleOnSchemaObject | undefined) {
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
  private _all = new GrantPrivilegesToDatabaseRoleOnSchemaObjectAllOutputReference(this, "all");
  public get all() {
    return this._all;
  }
  public putAll(value: GrantPrivilegesToDatabaseRoleOnSchemaObjectAll) {
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
  private _future = new GrantPrivilegesToDatabaseRoleOnSchemaObjectFutureOutputReference(this, "future");
  public get future() {
    return this._future;
  }
  public putFuture(value: GrantPrivilegesToDatabaseRoleOnSchemaObjectFuture) {
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
* Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/grant_privileges_to_database_role snowflake_grant_privileges_to_database_role}
*/
export class GrantPrivilegesToDatabaseRole extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_grant_privileges_to_database_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GrantPrivilegesToDatabaseRole resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GrantPrivilegesToDatabaseRole to import
  * @param importFromId The id of the existing GrantPrivilegesToDatabaseRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/grant_privileges_to_database_role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GrantPrivilegesToDatabaseRole to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_grant_privileges_to_database_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.87.2/docs/resources/grant_privileges_to_database_role snowflake_grant_privileges_to_database_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GrantPrivilegesToDatabaseRoleConfig
  */
  public constructor(scope: Construct, id: string, config: GrantPrivilegesToDatabaseRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_grant_privileges_to_database_role',
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
    this._allPrivileges = config.allPrivileges;
    this._alwaysApply = config.alwaysApply;
    this._alwaysApplyTrigger = config.alwaysApplyTrigger;
    this._databaseRoleName = config.databaseRoleName;
    this._id = config.id;
    this._onDatabase = config.onDatabase;
    this._privileges = config.privileges;
    this._withGrantOption = config.withGrantOption;
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

  // always_apply - computed: false, optional: true, required: false
  private _alwaysApply?: boolean | cdktf.IResolvable; 
  public get alwaysApply() {
    return this.getBooleanAttribute('always_apply');
  }
  public set alwaysApply(value: boolean | cdktf.IResolvable) {
    this._alwaysApply = value;
  }
  public resetAlwaysApply() {
    this._alwaysApply = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysApplyInput() {
    return this._alwaysApply;
  }

  // always_apply_trigger - computed: false, optional: true, required: false
  private _alwaysApplyTrigger?: string; 
  public get alwaysApplyTrigger() {
    return this.getStringAttribute('always_apply_trigger');
  }
  public set alwaysApplyTrigger(value: string) {
    this._alwaysApplyTrigger = value;
  }
  public resetAlwaysApplyTrigger() {
    this._alwaysApplyTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysApplyTriggerInput() {
    return this._alwaysApplyTrigger;
  }

  // database_role_name - computed: false, optional: false, required: true
  private _databaseRoleName?: string; 
  public get databaseRoleName() {
    return this.getStringAttribute('database_role_name');
  }
  public set databaseRoleName(value: string) {
    this._databaseRoleName = value;
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

  // on_schema - computed: false, optional: true, required: false
  private _onSchema = new GrantPrivilegesToDatabaseRoleOnSchemaOutputReference(this, "on_schema");
  public get onSchema() {
    return this._onSchema;
  }
  public putOnSchema(value: GrantPrivilegesToDatabaseRoleOnSchema) {
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
  private _onSchemaObject = new GrantPrivilegesToDatabaseRoleOnSchemaObjectOutputReference(this, "on_schema_object");
  public get onSchemaObject() {
    return this._onSchemaObject;
  }
  public putOnSchemaObject(value: GrantPrivilegesToDatabaseRoleOnSchemaObject) {
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
      always_apply: cdktf.booleanToTerraform(this._alwaysApply),
      always_apply_trigger: cdktf.stringToTerraform(this._alwaysApplyTrigger),
      database_role_name: cdktf.stringToTerraform(this._databaseRoleName),
      id: cdktf.stringToTerraform(this._id),
      on_database: cdktf.stringToTerraform(this._onDatabase),
      privileges: cdktf.listMapper(cdktf.stringToTerraform, false)(this._privileges),
      with_grant_option: cdktf.booleanToTerraform(this._withGrantOption),
      on_schema: grantPrivilegesToDatabaseRoleOnSchemaToTerraform(this._onSchema.internalValue),
      on_schema_object: grantPrivilegesToDatabaseRoleOnSchemaObjectToTerraform(this._onSchemaObject.internalValue),
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
      always_apply: {
        value: cdktf.booleanToHclTerraform(this._alwaysApply),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      always_apply_trigger: {
        value: cdktf.stringToHclTerraform(this._alwaysApplyTrigger),
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
      on_database: {
        value: cdktf.stringToHclTerraform(this._onDatabase),
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
      with_grant_option: {
        value: cdktf.booleanToHclTerraform(this._withGrantOption),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      on_schema: {
        value: grantPrivilegesToDatabaseRoleOnSchemaToHclTerraform(this._onSchema.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GrantPrivilegesToDatabaseRoleOnSchemaList",
      },
      on_schema_object: {
        value: grantPrivilegesToDatabaseRoleOnSchemaObjectToHclTerraform(this._onSchemaObject.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GrantPrivilegesToDatabaseRoleOnSchemaObjectList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
