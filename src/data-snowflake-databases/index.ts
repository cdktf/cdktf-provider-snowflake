// https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/data-sources/databases
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSnowflakeDatabasesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optionally includes dropped databases that have not yet been purged The output also includes an additional `dropped_on` column
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/data-sources/databases#history DataSnowflakeDatabases#history}
  */
  readonly history?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/data-sources/databases#id DataSnowflakeDatabases#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Optionally filters the databases by a pattern
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/data-sources/databases#pattern DataSnowflakeDatabases#pattern}
  */
  readonly pattern?: string;
  /**
  * Optionally filters the databases by a pattern
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/data-sources/databases#starts_with DataSnowflakeDatabases#starts_with}
  */
  readonly startsWith?: string;
  /**
  * Optionally returns only the columns `created_on` and `name` in the results
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/data-sources/databases#terse DataSnowflakeDatabases#terse}
  */
  readonly terse?: boolean | cdktf.IResolvable;
}
export interface DataSnowflakeDatabasesDatabasesReplicationConfiguration {
}

export function dataSnowflakeDatabasesDatabasesReplicationConfigurationToTerraform(struct?: DataSnowflakeDatabasesDatabasesReplicationConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataSnowflakeDatabasesDatabasesReplicationConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSnowflakeDatabasesDatabasesReplicationConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeDatabasesDatabasesReplicationConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // accounts - computed: true, optional: false, required: false
  public get accounts() {
    return this.getListAttribute('accounts');
  }

  // ignore_edition_check - computed: true, optional: false, required: false
  public get ignoreEditionCheck() {
    return this.getBooleanAttribute('ignore_edition_check');
  }
}

export class DataSnowflakeDatabasesDatabasesReplicationConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataSnowflakeDatabasesDatabasesReplicationConfigurationOutputReference {
    return new DataSnowflakeDatabasesDatabasesReplicationConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeDatabasesDatabases {
}

export function dataSnowflakeDatabasesDatabasesToTerraform(struct?: DataSnowflakeDatabasesDatabases): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataSnowflakeDatabasesDatabasesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSnowflakeDatabasesDatabases | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeDatabasesDatabases | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // is_current - computed: true, optional: false, required: false
  public get isCurrent() {
    return this.getBooleanAttribute('is_current');
  }

  // is_default - computed: true, optional: false, required: false
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // options - computed: true, optional: false, required: false
  public get options() {
    return this.getStringAttribute('options');
  }

  // origin - computed: true, optional: false, required: false
  public get origin() {
    return this.getStringAttribute('origin');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // replication_configuration - computed: true, optional: false, required: false
  private _replicationConfiguration = new DataSnowflakeDatabasesDatabasesReplicationConfigurationList(this, "replication_configuration", false);
  public get replicationConfiguration() {
    return this._replicationConfiguration;
  }

  // retention_time - computed: true, optional: false, required: false
  public get retentionTime() {
    return this.getNumberAttribute('retention_time');
  }
}

export class DataSnowflakeDatabasesDatabasesList extends cdktf.ComplexList {

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
  public get(index: number): DataSnowflakeDatabasesDatabasesOutputReference {
    return new DataSnowflakeDatabasesDatabasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/data-sources/databases snowflake_databases}
*/
export class DataSnowflakeDatabases extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_databases";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSnowflakeDatabases resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSnowflakeDatabases to import
  * @param importFromId The id of the existing DataSnowflakeDatabases that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/data-sources/databases#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSnowflakeDatabases to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_databases", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/data-sources/databases snowflake_databases} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSnowflakeDatabasesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSnowflakeDatabasesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'snowflake_databases',
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
    this._history = config.history;
    this._id = config.id;
    this._pattern = config.pattern;
    this._startsWith = config.startsWith;
    this._terse = config.terse;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // databases - computed: true, optional: false, required: false
  private _databases = new DataSnowflakeDatabasesDatabasesList(this, "databases", false);
  public get databases() {
    return this._databases;
  }

  // history - computed: false, optional: true, required: false
  private _history?: boolean | cdktf.IResolvable; 
  public get history() {
    return this.getBooleanAttribute('history');
  }
  public set history(value: boolean | cdktf.IResolvable) {
    this._history = value;
  }
  public resetHistory() {
    this._history = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get historyInput() {
    return this._history;
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

  // pattern - computed: false, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }

  // starts_with - computed: false, optional: true, required: false
  private _startsWith?: string; 
  public get startsWith() {
    return this.getStringAttribute('starts_with');
  }
  public set startsWith(value: string) {
    this._startsWith = value;
  }
  public resetStartsWith() {
    this._startsWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startsWithInput() {
    return this._startsWith;
  }

  // terse - computed: false, optional: true, required: false
  private _terse?: boolean | cdktf.IResolvable; 
  public get terse() {
    return this.getBooleanAttribute('terse');
  }
  public set terse(value: boolean | cdktf.IResolvable) {
    this._terse = value;
  }
  public resetTerse() {
    this._terse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terseInput() {
    return this._terse;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      history: cdktf.booleanToTerraform(this._history),
      id: cdktf.stringToTerraform(this._id),
      pattern: cdktf.stringToTerraform(this._pattern),
      starts_with: cdktf.stringToTerraform(this._startsWith),
      terse: cdktf.booleanToTerraform(this._terse),
    };
  }
}
