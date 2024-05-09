// https://registry.terraform.io/providers/snowflake-labs/snowflake/0.90.0/docs/data-sources/failover_groups
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSnowflakeFailoverGroupsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.90.0/docs/data-sources/failover_groups#id DataSnowflakeFailoverGroups#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the identifier for the account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.90.0/docs/data-sources/failover_groups#in_account DataSnowflakeFailoverGroups#in_account}
  */
  readonly inAccount?: string;
}
export interface DataSnowflakeFailoverGroupsFailoverGroups {
}

export function dataSnowflakeFailoverGroupsFailoverGroupsToTerraform(struct?: DataSnowflakeFailoverGroupsFailoverGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSnowflakeFailoverGroupsFailoverGroupsToHclTerraform(struct?: DataSnowflakeFailoverGroupsFailoverGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeFailoverGroupsFailoverGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSnowflakeFailoverGroupsFailoverGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeFailoverGroupsFailoverGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_locator - computed: true, optional: false, required: false
  public get accountLocator() {
    return this.getStringAttribute('account_locator');
  }

  // account_name - computed: true, optional: false, required: false
  public get accountName() {
    return this.getStringAttribute('account_name');
  }

  // allowed_accounts - computed: true, optional: false, required: false
  public get allowedAccounts() {
    return this.getListAttribute('allowed_accounts');
  }

  // allowed_integration_types - computed: true, optional: false, required: false
  public get allowedIntegrationTypes() {
    return this.getListAttribute('allowed_integration_types');
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // is_primary - computed: true, optional: false, required: false
  public get isPrimary() {
    return this.getBooleanAttribute('is_primary');
  }

  // next_scheduled_refresh - computed: true, optional: false, required: false
  public get nextScheduledRefresh() {
    return this.getStringAttribute('next_scheduled_refresh');
  }

  // object_types - computed: true, optional: false, required: false
  public get objectTypes() {
    return this.getListAttribute('object_types');
  }

  // organization_name - computed: true, optional: false, required: false
  public get organizationName() {
    return this.getStringAttribute('organization_name');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // primary - computed: true, optional: false, required: false
  public get primary() {
    return this.getStringAttribute('primary');
  }

  // region_group - computed: true, optional: false, required: false
  public get regionGroup() {
    return this.getStringAttribute('region_group');
  }

  // replication_schedule - computed: true, optional: false, required: false
  public get replicationSchedule() {
    return this.getStringAttribute('replication_schedule');
  }

  // secondary_state - computed: true, optional: false, required: false
  public get secondaryState() {
    return this.getStringAttribute('secondary_state');
  }

  // snowflake_region - computed: true, optional: false, required: false
  public get snowflakeRegion() {
    return this.getStringAttribute('snowflake_region');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataSnowflakeFailoverGroupsFailoverGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataSnowflakeFailoverGroupsFailoverGroupsOutputReference {
    return new DataSnowflakeFailoverGroupsFailoverGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.90.0/docs/data-sources/failover_groups snowflake_failover_groups}
*/
export class DataSnowflakeFailoverGroups extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_failover_groups";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSnowflakeFailoverGroups resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSnowflakeFailoverGroups to import
  * @param importFromId The id of the existing DataSnowflakeFailoverGroups that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.90.0/docs/data-sources/failover_groups#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSnowflakeFailoverGroups to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_failover_groups", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.90.0/docs/data-sources/failover_groups snowflake_failover_groups} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSnowflakeFailoverGroupsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSnowflakeFailoverGroupsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'snowflake_failover_groups',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '0.90.0',
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
    this._inAccount = config.inAccount;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // failover_groups - computed: true, optional: false, required: false
  private _failoverGroups = new DataSnowflakeFailoverGroupsFailoverGroupsList(this, "failover_groups", false);
  public get failoverGroups() {
    return this._failoverGroups;
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

  // in_account - computed: false, optional: true, required: false
  private _inAccount?: string; 
  public get inAccount() {
    return this.getStringAttribute('in_account');
  }
  public set inAccount(value: string) {
    this._inAccount = value;
  }
  public resetInAccount() {
    this._inAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inAccountInput() {
    return this._inAccount;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      in_account: cdktf.stringToTerraform(this._inAccount),
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
      in_account: {
        value: cdktf.stringToHclTerraform(this._inAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
