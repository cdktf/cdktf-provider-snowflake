// https://registry.terraform.io/providers/snowflake-labs/snowflake/0.62.0/docs/resources/database
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.62.0/docs/resources/database#comment Database#comment}
  */
  readonly comment?: string;
  /**
  * Number of days for which Snowflake retains historical data for performing Time Travel actions (SELECT, CLONE, UNDROP) on the object. A value of 0 effectively disables Time Travel for the specified database, schema, or table. For more information, see Understanding & Using Time Travel.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.62.0/docs/resources/database#data_retention_time_in_days Database#data_retention_time_in_days}
  */
  readonly dataRetentionTimeInDays?: number;
  /**
  * Specify a database to create a clone from.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.62.0/docs/resources/database#from_database Database#from_database}
  */
  readonly fromDatabase?: string;
  /**
  * Specify a fully-qualified path to a database to create a replica from. A fully qualified path follows the format of "<organization_name>"."<account_name>"."<db_name>". An example would be: "myorg1"."account1"."db1"
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.62.0/docs/resources/database#from_replica Database#from_replica}
  */
  readonly fromReplica?: string;
  /**
  * Specify a provider and a share in this map to create a database from a share.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.62.0/docs/resources/database#from_share Database#from_share}
  */
  readonly fromShare?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.62.0/docs/resources/database#id Database#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies a database as transient. Transient databases do not have a Fail-safe period so they do not incur additional storage costs once they leave Time Travel; however, this means they are also not protected by Fail-safe in the event of a data loss.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.62.0/docs/resources/database#is_transient Database#is_transient}
  */
  readonly isTransient?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.62.0/docs/resources/database#name Database#name}
  */
  readonly name: string;
  /**
  * replication_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.62.0/docs/resources/database#replication_configuration Database#replication_configuration}
  */
  readonly replicationConfiguration?: DatabaseReplicationConfiguration;
  /**
  * tag block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.62.0/docs/resources/database#tag Database#tag}
  */
  readonly tag?: DatabaseTag[] | cdktf.IResolvable;
}
export interface DatabaseReplicationConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.62.0/docs/resources/database#accounts Database#accounts}
  */
  readonly accounts: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.62.0/docs/resources/database#ignore_edition_check Database#ignore_edition_check}
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
export interface DatabaseTag {
  /**
  * Name of the database that the tag was created in.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.62.0/docs/resources/database#database Database#database}
  */
  readonly database?: string;
  /**
  * Tag name, e.g. department.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.62.0/docs/resources/database#name Database#name}
  */
  readonly name: string;
  /**
  * Name of the schema that the tag was created in.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.62.0/docs/resources/database#schema Database#schema}
  */
  readonly schema?: string;
  /**
  * Tag value, e.g. marketing_info.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.62.0/docs/resources/database#value Database#value}
  */
  readonly value: string;
}

export function databaseTagToTerraform(struct?: DatabaseTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    name: cdktf.stringToTerraform(struct!.name),
    schema: cdktf.stringToTerraform(struct!.schema),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class DatabaseTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseTag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseTag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._database = undefined;
      this._name = undefined;
      this._schema = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._database = value.database;
      this._name = value.name;
      this._schema = value.schema;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DatabaseTagList extends cdktf.ComplexList {
  public internalValue? : DatabaseTag[] | cdktf.IResolvable

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
  public get(index: number): DatabaseTagOutputReference {
    return new DatabaseTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.62.0/docs/resources/database snowflake_database}
*/
export class Database extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_database";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.62.0/docs/resources/database snowflake_database} Resource
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
        providerVersion: '0.62.0',
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
    this._tag.internalValue = config.tag;
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

  // tag - computed: false, optional: true, required: false
  private _tag = new DatabaseTagList(this, "tag", false);
  public get tag() {
    return this._tag;
  }
  public putTag(value: DatabaseTag[] | cdktf.IResolvable) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
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
      tag: cdktf.listMapper(databaseTagToTerraform, true)(this._tag.internalValue),
    };
  }
}
