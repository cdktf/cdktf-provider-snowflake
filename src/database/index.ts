/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/database
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * The database parameter that specifies the default catalog to use for Iceberg tables. For more information, see [CATALOG](https://docs.snowflake.com/en/sql-reference/parameters#catalog).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/database#catalog Database#catalog}
  */
  readonly catalog?: string;
  /**
  * Specifies a comment for the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/database#comment Database#comment}
  */
  readonly comment?: string;
  /**
  * Specifies the number of days for which Time Travel actions (CLONE and UNDROP) can be performed on the database, as well as specifying the default Time Travel retention time for all schemas created in the database. For more details, see [Understanding & Using Time Travel](https://docs.snowflake.com/en/user-guide/data-time-travel).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/database#data_retention_time_in_days Database#data_retention_time_in_days}
  */
  readonly dataRetentionTimeInDays?: number;
  /**
  * Specifies a default collation specification for all schemas and tables added to the database. It can be overridden on schema or table level. For more information, see [collation specification](https://docs.snowflake.com/en/sql-reference/collation#label-collation-specification).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/database#default_ddl_collation Database#default_ddl_collation}
  */
  readonly defaultDdlCollation?: string;
  /**
  * Specifies whether to drop public schema on creation or not. Modifying the parameter after database is already created won't have any effect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/database#drop_public_schema_on_creation Database#drop_public_schema_on_creation}
  */
  readonly dropPublicSchemaOnCreation?: boolean | cdktf.IResolvable;
  /**
  * If true, enables stdout/stderr fast path logging for anonymous stored procedures.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/database#enable_console_output Database#enable_console_output}
  */
  readonly enableConsoleOutput?: boolean | cdktf.IResolvable;
  /**
  * The database parameter that specifies the default external volume to use for Iceberg tables. For more information, see [EXTERNAL_VOLUME](https://docs.snowflake.com/en/sql-reference/parameters#external-volume).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/database#external_volume Database#external_volume}
  */
  readonly externalVolume?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/database#id Database#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the database as transient. Transient databases do not have a Fail-safe period so they do not incur additional storage costs once they leave Time Travel; however, this means they are also not protected by Fail-safe in the event of a data loss.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/database#is_transient Database#is_transient}
  */
  readonly isTransient?: boolean | cdktf.IResolvable;
  /**
  * Specifies the severity level of messages that should be ingested and made available in the active event table. Valid options are: [TRACE DEBUG INFO WARN ERROR FATAL OFF]. Messages at the specified level (and at more severe levels) are ingested. For more information, see [LOG_LEVEL](https://docs.snowflake.com/en/sql-reference/parameters.html#label-log-level).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/database#log_level Database#log_level}
  */
  readonly logLevel?: string;
  /**
  * Object parameter that specifies the maximum number of days for which Snowflake can extend the data retention period for tables in the database to prevent streams on the tables from becoming stale. For a detailed description of this parameter, see [MAX_DATA_EXTENSION_TIME_IN_DAYS](https://docs.snowflake.com/en/sql-reference/parameters.html#label-max-data-extension-time-in-days).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/database#max_data_extension_time_in_days Database#max_data_extension_time_in_days}
  */
  readonly maxDataExtensionTimeInDays?: number;
  /**
  * Specifies the identifier for the database; must be unique for your account. As a best practice for [Database Replication and Failover](https://docs.snowflake.com/en/user-guide/db-replication-intro), it is recommended to give each secondary database the same name as its primary database. This practice supports referencing fully-qualified objects (i.e. '<db>.<schema>.<object>') by other objects in the same database, such as querying a fully-qualified table name in a view. If a secondary database has a different name from the primary database, then these object references would break in the secondary database. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/database#name Database#name}
  */
  readonly name: string;
  /**
  * If true, the case of quoted identifiers is ignored. For more information, see [QUOTED_IDENTIFIERS_IGNORE_CASE](https://docs.snowflake.com/en/sql-reference/parameters#quoted-identifiers-ignore-case).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/database#quoted_identifiers_ignore_case Database#quoted_identifiers_ignore_case}
  */
  readonly quotedIdentifiersIgnoreCase?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (�) in query results for an Iceberg table. You can only set this parameter for tables that use an external Iceberg catalog. For more information, see [REPLACE_INVALID_CHARACTERS](https://docs.snowflake.com/en/sql-reference/parameters#replace-invalid-characters).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/database#replace_invalid_characters Database#replace_invalid_characters}
  */
  readonly replaceInvalidCharacters?: boolean | cdktf.IResolvable;
  /**
  * The storage serialization policy for Iceberg tables that use Snowflake as the catalog. Valid options are: [COMPATIBLE OPTIMIZED]. COMPATIBLE: Snowflake performs encoding and compression of data files that ensures interoperability with third-party compute engines. OPTIMIZED: Snowflake performs encoding and compression of data files that ensures the best table performance within Snowflake. For more information, see [STORAGE_SERIALIZATION_POLICY](https://docs.snowflake.com/en/sql-reference/parameters#storage-serialization-policy).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/database#storage_serialization_policy Database#storage_serialization_policy}
  */
  readonly storageSerializationPolicy?: string;
  /**
  * How many times a task must fail in a row before it is automatically suspended. 0 disables auto-suspending. For more information, see [SUSPEND_TASK_AFTER_NUM_FAILURES](https://docs.snowflake.com/en/sql-reference/parameters#suspend-task-after-num-failures).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/database#suspend_task_after_num_failures Database#suspend_task_after_num_failures}
  */
  readonly suspendTaskAfterNumFailures?: number;
  /**
  * Maximum automatic retries allowed for a user task. For more information, see [TASK_AUTO_RETRY_ATTEMPTS](https://docs.snowflake.com/en/sql-reference/parameters#task-auto-retry-attempts).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/database#task_auto_retry_attempts Database#task_auto_retry_attempts}
  */
  readonly taskAutoRetryAttempts?: number;
  /**
  * Controls how trace events are ingested into the event table. Valid options are: `ALWAYS` | `ON_EVENT` | `PROPAGATE` | `OFF`. For information about levels, see [TRACE_LEVEL](https://docs.snowflake.com/en/sql-reference/parameters.html#label-trace-level).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/database#trace_level Database#trace_level}
  */
  readonly traceLevel?: string;
  /**
  * The initial size of warehouse to use for managed warehouses in the absence of history. For more information, see [USER_TASK_MANAGED_INITIAL_WAREHOUSE_SIZE](https://docs.snowflake.com/en/sql-reference/parameters#user-task-managed-initial-warehouse-size).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/database#user_task_managed_initial_warehouse_size Database#user_task_managed_initial_warehouse_size}
  */
  readonly userTaskManagedInitialWarehouseSize?: string;
  /**
  * Minimum amount of time between Triggered Task executions in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/database#user_task_minimum_trigger_interval_in_seconds Database#user_task_minimum_trigger_interval_in_seconds}
  */
  readonly userTaskMinimumTriggerIntervalInSeconds?: number;
  /**
  * User task execution timeout in milliseconds. For more information, see [USER_TASK_TIMEOUT_MS](https://docs.snowflake.com/en/sql-reference/parameters#user-task-timeout-ms).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/database#user_task_timeout_ms Database#user_task_timeout_ms}
  */
  readonly userTaskTimeoutMs?: number;
  /**
  * replication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/database#replication Database#replication}
  */
  readonly replication?: DatabaseReplication;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/database#timeouts Database#timeouts}
  */
  readonly timeouts?: DatabaseTimeouts;
}
export interface DatabaseReplicationEnableToAccount {
  /**
  * Specifies account identifier for which replication should be enabled. The account identifiers should be in the form of `"<organization_name>"."<account_name>"`. For more information about this resource, see [docs](./account).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/database#account_identifier Database#account_identifier}
  */
  readonly accountIdentifier: string;
  /**
  * Specifies if failover should be enabled for the specified account identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/database#with_failover Database#with_failover}
  */
  readonly withFailover?: boolean | cdktf.IResolvable;
}

export function databaseReplicationEnableToAccountToTerraform(struct?: DatabaseReplicationEnableToAccount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_identifier: cdktf.stringToTerraform(struct!.accountIdentifier),
    with_failover: cdktf.booleanToTerraform(struct!.withFailover),
  }
}


export function databaseReplicationEnableToAccountToHclTerraform(struct?: DatabaseReplicationEnableToAccount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_identifier: {
      value: cdktf.stringToHclTerraform(struct!.accountIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    with_failover: {
      value: cdktf.booleanToHclTerraform(struct!.withFailover),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseReplicationEnableToAccountOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseReplicationEnableToAccount | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountIdentifier = this._accountIdentifier;
    }
    if (this._withFailover !== undefined) {
      hasAnyValues = true;
      internalValueResult.withFailover = this._withFailover;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseReplicationEnableToAccount | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountIdentifier = undefined;
      this._withFailover = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountIdentifier = value.accountIdentifier;
      this._withFailover = value.withFailover;
    }
  }

  // account_identifier - computed: false, optional: false, required: true
  private _accountIdentifier?: string; 
  public get accountIdentifier() {
    return this.getStringAttribute('account_identifier');
  }
  public set accountIdentifier(value: string) {
    this._accountIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdentifierInput() {
    return this._accountIdentifier;
  }

  // with_failover - computed: false, optional: true, required: false
  private _withFailover?: boolean | cdktf.IResolvable; 
  public get withFailover() {
    return this.getBooleanAttribute('with_failover');
  }
  public set withFailover(value: boolean | cdktf.IResolvable) {
    this._withFailover = value;
  }
  public resetWithFailover() {
    this._withFailover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withFailoverInput() {
    return this._withFailover;
  }
}

export class DatabaseReplicationEnableToAccountList extends cdktf.ComplexList {
  public internalValue? : DatabaseReplicationEnableToAccount[] | cdktf.IResolvable

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
  public get(index: number): DatabaseReplicationEnableToAccountOutputReference {
    return new DatabaseReplicationEnableToAccountOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseReplication {
  /**
  * Allows replicating data to accounts on lower editions in either of the following scenarios: 1. The primary database is in a Business Critical (or higher) account but one or more of the accounts approved for replication are on lower editions. Business Critical Edition is intended for Snowflake accounts with extremely sensitive data. 2. The primary database is in a Business Critical (or higher) account and a signed business associate agreement is in place to store PHI data in the account per HIPAA and HITRUST regulations, but no such agreement is in place for one or more of the accounts approved for replication, regardless if they are Business Critical (or higher) accounts. Both scenarios are prohibited by default in an effort to help prevent account administrators for Business Critical (or higher) accounts from inadvertently replicating sensitive data to accounts on lower editions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/database#ignore_edition_check Database#ignore_edition_check}
  */
  readonly ignoreEditionCheck?: boolean | cdktf.IResolvable;
  /**
  * enable_to_account block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/database#enable_to_account Database#enable_to_account}
  */
  readonly enableToAccount: DatabaseReplicationEnableToAccount[] | cdktf.IResolvable;
}

export function databaseReplicationToTerraform(struct?: DatabaseReplicationOutputReference | DatabaseReplication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ignore_edition_check: cdktf.booleanToTerraform(struct!.ignoreEditionCheck),
    enable_to_account: cdktf.listMapper(databaseReplicationEnableToAccountToTerraform, true)(struct!.enableToAccount),
  }
}


export function databaseReplicationToHclTerraform(struct?: DatabaseReplicationOutputReference | DatabaseReplication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ignore_edition_check: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreEditionCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_to_account: {
      value: cdktf.listMapperHcl(databaseReplicationEnableToAccountToHclTerraform, true)(struct!.enableToAccount),
      isBlock: true,
      type: "list",
      storageClassType: "DatabaseReplicationEnableToAccountList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseReplicationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseReplication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ignoreEditionCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreEditionCheck = this._ignoreEditionCheck;
    }
    if (this._enableToAccount?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableToAccount = this._enableToAccount?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseReplication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ignoreEditionCheck = undefined;
      this._enableToAccount.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ignoreEditionCheck = value.ignoreEditionCheck;
      this._enableToAccount.internalValue = value.enableToAccount;
    }
  }

  // ignore_edition_check - computed: false, optional: true, required: false
  private _ignoreEditionCheck?: boolean | cdktf.IResolvable; 
  public get ignoreEditionCheck() {
    return this.getBooleanAttribute('ignore_edition_check');
  }
  public set ignoreEditionCheck(value: boolean | cdktf.IResolvable) {
    this._ignoreEditionCheck = value;
  }
  public resetIgnoreEditionCheck() {
    this._ignoreEditionCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreEditionCheckInput() {
    return this._ignoreEditionCheck;
  }

  // enable_to_account - computed: false, optional: false, required: true
  private _enableToAccount = new DatabaseReplicationEnableToAccountList(this, "enable_to_account", false);
  public get enableToAccount() {
    return this._enableToAccount;
  }
  public putEnableToAccount(value: DatabaseReplicationEnableToAccount[] | cdktf.IResolvable) {
    this._enableToAccount.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableToAccountInput() {
    return this._enableToAccount.internalValue;
  }
}
export interface DatabaseTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/database#create Database#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/database#delete Database#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/database#read Database#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/database#update Database#update}
  */
  readonly update?: string;
}

export function databaseTimeoutsToTerraform(struct?: DatabaseTimeouts | cdktf.IResolvable): any {
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


export function databaseTimeoutsToHclTerraform(struct?: DatabaseTimeouts | cdktf.IResolvable): any {
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

export class DatabaseTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabaseTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DatabaseTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/database snowflake_database}
*/
export class Database extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_database";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Database resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Database to import
  * @param importFromId The id of the existing Database that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/database#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Database to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_database", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/database snowflake_database} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabaseConfig
  */
  public constructor(scope: Construct, id: string, config: DatabaseConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_database',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '2.8.0',
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
    this._catalog = config.catalog;
    this._comment = config.comment;
    this._dataRetentionTimeInDays = config.dataRetentionTimeInDays;
    this._defaultDdlCollation = config.defaultDdlCollation;
    this._dropPublicSchemaOnCreation = config.dropPublicSchemaOnCreation;
    this._enableConsoleOutput = config.enableConsoleOutput;
    this._externalVolume = config.externalVolume;
    this._id = config.id;
    this._isTransient = config.isTransient;
    this._logLevel = config.logLevel;
    this._maxDataExtensionTimeInDays = config.maxDataExtensionTimeInDays;
    this._name = config.name;
    this._quotedIdentifiersIgnoreCase = config.quotedIdentifiersIgnoreCase;
    this._replaceInvalidCharacters = config.replaceInvalidCharacters;
    this._storageSerializationPolicy = config.storageSerializationPolicy;
    this._suspendTaskAfterNumFailures = config.suspendTaskAfterNumFailures;
    this._taskAutoRetryAttempts = config.taskAutoRetryAttempts;
    this._traceLevel = config.traceLevel;
    this._userTaskManagedInitialWarehouseSize = config.userTaskManagedInitialWarehouseSize;
    this._userTaskMinimumTriggerIntervalInSeconds = config.userTaskMinimumTriggerIntervalInSeconds;
    this._userTaskTimeoutMs = config.userTaskTimeoutMs;
    this._replication.internalValue = config.replication;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // catalog - computed: true, optional: true, required: false
  private _catalog?: string; 
  public get catalog() {
    return this.getStringAttribute('catalog');
  }
  public set catalog(value: string) {
    this._catalog = value;
  }
  public resetCatalog() {
    this._catalog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogInput() {
    return this._catalog;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // data_retention_time_in_days - computed: true, optional: true, required: false
  private _dataRetentionTimeInDays?: number; 
  public get dataRetentionTimeInDays() {
    return this.getNumberAttribute('data_retention_time_in_days');
  }
  public set dataRetentionTimeInDays(value: number) {
    this._dataRetentionTimeInDays = value;
  }
  public resetDataRetentionTimeInDays() {
    this._dataRetentionTimeInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataRetentionTimeInDaysInput() {
    return this._dataRetentionTimeInDays;
  }

  // default_ddl_collation - computed: true, optional: true, required: false
  private _defaultDdlCollation?: string; 
  public get defaultDdlCollation() {
    return this.getStringAttribute('default_ddl_collation');
  }
  public set defaultDdlCollation(value: string) {
    this._defaultDdlCollation = value;
  }
  public resetDefaultDdlCollation() {
    this._defaultDdlCollation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultDdlCollationInput() {
    return this._defaultDdlCollation;
  }

  // drop_public_schema_on_creation - computed: false, optional: true, required: false
  private _dropPublicSchemaOnCreation?: boolean | cdktf.IResolvable; 
  public get dropPublicSchemaOnCreation() {
    return this.getBooleanAttribute('drop_public_schema_on_creation');
  }
  public set dropPublicSchemaOnCreation(value: boolean | cdktf.IResolvable) {
    this._dropPublicSchemaOnCreation = value;
  }
  public resetDropPublicSchemaOnCreation() {
    this._dropPublicSchemaOnCreation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropPublicSchemaOnCreationInput() {
    return this._dropPublicSchemaOnCreation;
  }

  // enable_console_output - computed: true, optional: true, required: false
  private _enableConsoleOutput?: boolean | cdktf.IResolvable; 
  public get enableConsoleOutput() {
    return this.getBooleanAttribute('enable_console_output');
  }
  public set enableConsoleOutput(value: boolean | cdktf.IResolvable) {
    this._enableConsoleOutput = value;
  }
  public resetEnableConsoleOutput() {
    this._enableConsoleOutput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableConsoleOutputInput() {
    return this._enableConsoleOutput;
  }

  // external_volume - computed: true, optional: true, required: false
  private _externalVolume?: string; 
  public get externalVolume() {
    return this.getStringAttribute('external_volume');
  }
  public set externalVolume(value: string) {
    this._externalVolume = value;
  }
  public resetExternalVolume() {
    this._externalVolume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalVolumeInput() {
    return this._externalVolume;
  }

  // fully_qualified_name - computed: true, optional: false, required: false
  public get fullyQualifiedName() {
    return this.getStringAttribute('fully_qualified_name');
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

  // is_transient - computed: false, optional: true, required: false
  private _isTransient?: boolean | cdktf.IResolvable; 
  public get isTransient() {
    return this.getBooleanAttribute('is_transient');
  }
  public set isTransient(value: boolean | cdktf.IResolvable) {
    this._isTransient = value;
  }
  public resetIsTransient() {
    this._isTransient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isTransientInput() {
    return this._isTransient;
  }

  // log_level - computed: true, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }

  // max_data_extension_time_in_days - computed: true, optional: true, required: false
  private _maxDataExtensionTimeInDays?: number; 
  public get maxDataExtensionTimeInDays() {
    return this.getNumberAttribute('max_data_extension_time_in_days');
  }
  public set maxDataExtensionTimeInDays(value: number) {
    this._maxDataExtensionTimeInDays = value;
  }
  public resetMaxDataExtensionTimeInDays() {
    this._maxDataExtensionTimeInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDataExtensionTimeInDaysInput() {
    return this._maxDataExtensionTimeInDays;
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

  // quoted_identifiers_ignore_case - computed: true, optional: true, required: false
  private _quotedIdentifiersIgnoreCase?: boolean | cdktf.IResolvable; 
  public get quotedIdentifiersIgnoreCase() {
    return this.getBooleanAttribute('quoted_identifiers_ignore_case');
  }
  public set quotedIdentifiersIgnoreCase(value: boolean | cdktf.IResolvable) {
    this._quotedIdentifiersIgnoreCase = value;
  }
  public resetQuotedIdentifiersIgnoreCase() {
    this._quotedIdentifiersIgnoreCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotedIdentifiersIgnoreCaseInput() {
    return this._quotedIdentifiersIgnoreCase;
  }

  // replace_invalid_characters - computed: true, optional: true, required: false
  private _replaceInvalidCharacters?: boolean | cdktf.IResolvable; 
  public get replaceInvalidCharacters() {
    return this.getBooleanAttribute('replace_invalid_characters');
  }
  public set replaceInvalidCharacters(value: boolean | cdktf.IResolvable) {
    this._replaceInvalidCharacters = value;
  }
  public resetReplaceInvalidCharacters() {
    this._replaceInvalidCharacters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceInvalidCharactersInput() {
    return this._replaceInvalidCharacters;
  }

  // storage_serialization_policy - computed: true, optional: true, required: false
  private _storageSerializationPolicy?: string; 
  public get storageSerializationPolicy() {
    return this.getStringAttribute('storage_serialization_policy');
  }
  public set storageSerializationPolicy(value: string) {
    this._storageSerializationPolicy = value;
  }
  public resetStorageSerializationPolicy() {
    this._storageSerializationPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageSerializationPolicyInput() {
    return this._storageSerializationPolicy;
  }

  // suspend_task_after_num_failures - computed: true, optional: true, required: false
  private _suspendTaskAfterNumFailures?: number; 
  public get suspendTaskAfterNumFailures() {
    return this.getNumberAttribute('suspend_task_after_num_failures');
  }
  public set suspendTaskAfterNumFailures(value: number) {
    this._suspendTaskAfterNumFailures = value;
  }
  public resetSuspendTaskAfterNumFailures() {
    this._suspendTaskAfterNumFailures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspendTaskAfterNumFailuresInput() {
    return this._suspendTaskAfterNumFailures;
  }

  // task_auto_retry_attempts - computed: true, optional: true, required: false
  private _taskAutoRetryAttempts?: number; 
  public get taskAutoRetryAttempts() {
    return this.getNumberAttribute('task_auto_retry_attempts');
  }
  public set taskAutoRetryAttempts(value: number) {
    this._taskAutoRetryAttempts = value;
  }
  public resetTaskAutoRetryAttempts() {
    this._taskAutoRetryAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskAutoRetryAttemptsInput() {
    return this._taskAutoRetryAttempts;
  }

  // trace_level - computed: true, optional: true, required: false
  private _traceLevel?: string; 
  public get traceLevel() {
    return this.getStringAttribute('trace_level');
  }
  public set traceLevel(value: string) {
    this._traceLevel = value;
  }
  public resetTraceLevel() {
    this._traceLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get traceLevelInput() {
    return this._traceLevel;
  }

  // user_task_managed_initial_warehouse_size - computed: true, optional: true, required: false
  private _userTaskManagedInitialWarehouseSize?: string; 
  public get userTaskManagedInitialWarehouseSize() {
    return this.getStringAttribute('user_task_managed_initial_warehouse_size');
  }
  public set userTaskManagedInitialWarehouseSize(value: string) {
    this._userTaskManagedInitialWarehouseSize = value;
  }
  public resetUserTaskManagedInitialWarehouseSize() {
    this._userTaskManagedInitialWarehouseSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTaskManagedInitialWarehouseSizeInput() {
    return this._userTaskManagedInitialWarehouseSize;
  }

  // user_task_minimum_trigger_interval_in_seconds - computed: true, optional: true, required: false
  private _userTaskMinimumTriggerIntervalInSeconds?: number; 
  public get userTaskMinimumTriggerIntervalInSeconds() {
    return this.getNumberAttribute('user_task_minimum_trigger_interval_in_seconds');
  }
  public set userTaskMinimumTriggerIntervalInSeconds(value: number) {
    this._userTaskMinimumTriggerIntervalInSeconds = value;
  }
  public resetUserTaskMinimumTriggerIntervalInSeconds() {
    this._userTaskMinimumTriggerIntervalInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTaskMinimumTriggerIntervalInSecondsInput() {
    return this._userTaskMinimumTriggerIntervalInSeconds;
  }

  // user_task_timeout_ms - computed: true, optional: true, required: false
  private _userTaskTimeoutMs?: number; 
  public get userTaskTimeoutMs() {
    return this.getNumberAttribute('user_task_timeout_ms');
  }
  public set userTaskTimeoutMs(value: number) {
    this._userTaskTimeoutMs = value;
  }
  public resetUserTaskTimeoutMs() {
    this._userTaskTimeoutMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTaskTimeoutMsInput() {
    return this._userTaskTimeoutMs;
  }

  // replication - computed: false, optional: true, required: false
  private _replication = new DatabaseReplicationOutputReference(this, "replication");
  public get replication() {
    return this._replication;
  }
  public putReplication(value: DatabaseReplication) {
    this._replication.internalValue = value;
  }
  public resetReplication() {
    this._replication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationInput() {
    return this._replication.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DatabaseTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DatabaseTimeouts) {
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
      catalog: cdktf.stringToTerraform(this._catalog),
      comment: cdktf.stringToTerraform(this._comment),
      data_retention_time_in_days: cdktf.numberToTerraform(this._dataRetentionTimeInDays),
      default_ddl_collation: cdktf.stringToTerraform(this._defaultDdlCollation),
      drop_public_schema_on_creation: cdktf.booleanToTerraform(this._dropPublicSchemaOnCreation),
      enable_console_output: cdktf.booleanToTerraform(this._enableConsoleOutput),
      external_volume: cdktf.stringToTerraform(this._externalVolume),
      id: cdktf.stringToTerraform(this._id),
      is_transient: cdktf.booleanToTerraform(this._isTransient),
      log_level: cdktf.stringToTerraform(this._logLevel),
      max_data_extension_time_in_days: cdktf.numberToTerraform(this._maxDataExtensionTimeInDays),
      name: cdktf.stringToTerraform(this._name),
      quoted_identifiers_ignore_case: cdktf.booleanToTerraform(this._quotedIdentifiersIgnoreCase),
      replace_invalid_characters: cdktf.booleanToTerraform(this._replaceInvalidCharacters),
      storage_serialization_policy: cdktf.stringToTerraform(this._storageSerializationPolicy),
      suspend_task_after_num_failures: cdktf.numberToTerraform(this._suspendTaskAfterNumFailures),
      task_auto_retry_attempts: cdktf.numberToTerraform(this._taskAutoRetryAttempts),
      trace_level: cdktf.stringToTerraform(this._traceLevel),
      user_task_managed_initial_warehouse_size: cdktf.stringToTerraform(this._userTaskManagedInitialWarehouseSize),
      user_task_minimum_trigger_interval_in_seconds: cdktf.numberToTerraform(this._userTaskMinimumTriggerIntervalInSeconds),
      user_task_timeout_ms: cdktf.numberToTerraform(this._userTaskTimeoutMs),
      replication: databaseReplicationToTerraform(this._replication.internalValue),
      timeouts: databaseTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      catalog: {
        value: cdktf.stringToHclTerraform(this._catalog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_retention_time_in_days: {
        value: cdktf.numberToHclTerraform(this._dataRetentionTimeInDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_ddl_collation: {
        value: cdktf.stringToHclTerraform(this._defaultDdlCollation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      drop_public_schema_on_creation: {
        value: cdktf.booleanToHclTerraform(this._dropPublicSchemaOnCreation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_console_output: {
        value: cdktf.booleanToHclTerraform(this._enableConsoleOutput),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      external_volume: {
        value: cdktf.stringToHclTerraform(this._externalVolume),
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
      is_transient: {
        value: cdktf.booleanToHclTerraform(this._isTransient),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      log_level: {
        value: cdktf.stringToHclTerraform(this._logLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_data_extension_time_in_days: {
        value: cdktf.numberToHclTerraform(this._maxDataExtensionTimeInDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      quoted_identifiers_ignore_case: {
        value: cdktf.booleanToHclTerraform(this._quotedIdentifiersIgnoreCase),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      replace_invalid_characters: {
        value: cdktf.booleanToHclTerraform(this._replaceInvalidCharacters),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      storage_serialization_policy: {
        value: cdktf.stringToHclTerraform(this._storageSerializationPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      suspend_task_after_num_failures: {
        value: cdktf.numberToHclTerraform(this._suspendTaskAfterNumFailures),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      task_auto_retry_attempts: {
        value: cdktf.numberToHclTerraform(this._taskAutoRetryAttempts),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      trace_level: {
        value: cdktf.stringToHclTerraform(this._traceLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_task_managed_initial_warehouse_size: {
        value: cdktf.stringToHclTerraform(this._userTaskManagedInitialWarehouseSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_task_minimum_trigger_interval_in_seconds: {
        value: cdktf.numberToHclTerraform(this._userTaskMinimumTriggerIntervalInSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_task_timeout_ms: {
        value: cdktf.numberToHclTerraform(this._userTaskTimeoutMs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      replication: {
        value: databaseReplicationToHclTerraform(this._replication.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseReplicationList",
      },
      timeouts: {
        value: databaseTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatabaseTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
