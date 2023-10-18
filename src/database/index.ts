/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/database
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/database#comment Database#comment}
  */
  readonly comment?: string;
  /**
  * Number of days for which Snowflake retains historical data for performing Time Travel actions (SELECT, CLONE, UNDROP) on the object. A value of 0 effectively disables Time Travel for the specified database, schema, or table. For more information, see Understanding & Using Time Travel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/database#data_retention_time_in_days Database#data_retention_time_in_days}
  */
  readonly dataRetentionTimeInDays?: number;
  /**
  * Specify a database to create a clone from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/database#from_database Database#from_database}
  */
  readonly fromDatabase?: string;
  /**
  * Specify a fully-qualified path to a database to create a replica from. A fully qualified path follows the format of "<organization_name>"."<account_name>"."<db_name>". An example would be: "myorg1"."account1"."db1"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/database#from_replica Database#from_replica}
  */
  readonly fromReplica?: string;
  /**
  * Specify a provider and a share in this map to create a database from a share.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/database#from_share Database#from_share}
  */
  readonly fromShare?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/database#id Database#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies a database as transient. Transient databases do not have a Fail-safe period so they do not incur additional storage costs once they leave Time Travel; however, this means they are also not protected by Fail-safe in the event of a data loss.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/database#is_transient Database#is_transient}
  */
  readonly isTransient?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/database#name Database#name}
  */
  readonly name: string;
  /**
  * replication_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/database#replication_configuration Database#replication_configuration}
  */
  readonly replicationConfiguration?: DatabaseReplicationConfiguration;
}
export interface DatabaseReplicationConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/database#accounts Database#accounts}
  */
  readonly accounts: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/database#ignore_edition_check Database#ignore_edition_check}
  */
  readonly ignoreEditionCheck?: boolean | cdktf.IResolvable;
}

export function databaseReplicationConfigurationToTerraform(struct?: DatabaseReplicationConfigurationOutputReference | DatabaseReplicationConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accounts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accounts),
    ignore_edition_check: cdktf.booleanToTerraform(struct!.ignoreEditionCheck),
  }
}

export class DatabaseReplicationConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseReplicationConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accounts !== undefined) {
      hasAnyValues = true;
      internalValueResult.accounts = this._accounts;
    }
    if (this._ignoreEditionCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreEditionCheck = this._ignoreEditionCheck;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseReplicationConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accounts = undefined;
      this._ignoreEditionCheck = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accounts = value.accounts;
      this._ignoreEditionCheck = value.ignoreEditionCheck;
    }
  }

  // accounts - computed: false, optional: false, required: true
  private _accounts?: string[]; 
  public get accounts() {
    return this.getListAttribute('accounts');
  }
  public set accounts(value: string[]) {
    this._accounts = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountsInput() {
    return this._accounts;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/database snowflake_database}
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
  * @param importFromId The id of the existing Database that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/database#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Database to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_database", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.74.0/docs/resources/database snowflake_database} Resource
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
        providerVersion: '0.74.0',
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
    this._comment = config.comment;
    this._dataRetentionTimeInDays = config.dataRetentionTimeInDays;
    this._fromDatabase = config.fromDatabase;
    this._fromReplica = config.fromReplica;
    this._fromShare = config.fromShare;
    this._id = config.id;
    this._isTransient = config.isTransient;
    this._name = config.name;
    this._replicationConfiguration.internalValue = config.replicationConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // data_retention_time_in_days - computed: false, optional: true, required: false
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

  // from_database - computed: false, optional: true, required: false
  private _fromDatabase?: string; 
  public get fromDatabase() {
    return this.getStringAttribute('from_database');
  }
  public set fromDatabase(value: string) {
    this._fromDatabase = value;
  }
  public resetFromDatabase() {
    this._fromDatabase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromDatabaseInput() {
    return this._fromDatabase;
  }

  // from_replica - computed: false, optional: true, required: false
  private _fromReplica?: string; 
  public get fromReplica() {
    return this.getStringAttribute('from_replica');
  }
  public set fromReplica(value: string) {
    this._fromReplica = value;
  }
  public resetFromReplica() {
    this._fromReplica = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromReplicaInput() {
    return this._fromReplica;
  }

  // from_share - computed: false, optional: true, required: false
  private _fromShare?: { [key: string]: string }; 
  public get fromShare() {
    return this.getStringMapAttribute('from_share');
  }
  public set fromShare(value: { [key: string]: string }) {
    this._fromShare = value;
  }
  public resetFromShare() {
    this._fromShare = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromShareInput() {
    return this._fromShare;
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

  // replication_configuration - computed: false, optional: true, required: false
  private _replicationConfiguration = new DatabaseReplicationConfigurationOutputReference(this, "replication_configuration");
  public get replicationConfiguration() {
    return this._replicationConfiguration;
  }
  public putReplicationConfiguration(value: DatabaseReplicationConfiguration) {
    this._replicationConfiguration.internalValue = value;
  }
  public resetReplicationConfiguration() {
    this._replicationConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationConfigurationInput() {
    return this._replicationConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      data_retention_time_in_days: cdktf.numberToTerraform(this._dataRetentionTimeInDays),
      from_database: cdktf.stringToTerraform(this._fromDatabase),
      from_replica: cdktf.stringToTerraform(this._fromReplica),
      from_share: cdktf.hashMapper(cdktf.stringToTerraform)(this._fromShare),
      id: cdktf.stringToTerraform(this._id),
      is_transient: cdktf.booleanToTerraform(this._isTransient),
      name: cdktf.stringToTerraform(this._name),
      replication_configuration: databaseReplicationConfigurationToTerraform(this._replicationConfiguration.internalValue),
    };
  }
}
