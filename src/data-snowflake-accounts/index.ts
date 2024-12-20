/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.0/docs/data-sources/accounts
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSnowflakeAccountsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.0/docs/data-sources/accounts#id DataSnowflakeAccounts#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.0/docs/data-sources/accounts#like DataSnowflakeAccounts#like}
  */
  readonly like?: string;
  /**
  * Includes dropped accounts that have not yet been deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.0/docs/data-sources/accounts#with_history DataSnowflakeAccounts#with_history}
  */
  readonly withHistory?: boolean | cdktf.IResolvable;
}
export interface DataSnowflakeAccountsAccountsShowOutput {
}

export function dataSnowflakeAccountsAccountsShowOutputToTerraform(struct?: DataSnowflakeAccountsAccountsShowOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSnowflakeAccountsAccountsShowOutputToHclTerraform(struct?: DataSnowflakeAccountsAccountsShowOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeAccountsAccountsShowOutputOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSnowflakeAccountsAccountsShowOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeAccountsAccountsShowOutput | undefined) {
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

  // account_locator_url - computed: true, optional: false, required: false
  public get accountLocatorUrl() {
    return this.getStringAttribute('account_locator_url');
  }

  // account_name - computed: true, optional: false, required: false
  public get accountName() {
    return this.getStringAttribute('account_name');
  }

  // account_old_url_last_used - computed: true, optional: false, required: false
  public get accountOldUrlLastUsed() {
    return this.getStringAttribute('account_old_url_last_used');
  }

  // account_old_url_saved_on - computed: true, optional: false, required: false
  public get accountOldUrlSavedOn() {
    return this.getStringAttribute('account_old_url_saved_on');
  }

  // account_url - computed: true, optional: false, required: false
  public get accountUrl() {
    return this.getStringAttribute('account_url');
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // consumption_billing_entity_name - computed: true, optional: false, required: false
  public get consumptionBillingEntityName() {
    return this.getStringAttribute('consumption_billing_entity_name');
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // dropped_on - computed: true, optional: false, required: false
  public get droppedOn() {
    return this.getStringAttribute('dropped_on');
  }

  // edition - computed: true, optional: false, required: false
  public get edition() {
    return this.getStringAttribute('edition');
  }

  // is_events_account - computed: true, optional: false, required: false
  public get isEventsAccount() {
    return this.getBooleanAttribute('is_events_account');
  }

  // is_org_admin - computed: true, optional: false, required: false
  public get isOrgAdmin() {
    return this.getBooleanAttribute('is_org_admin');
  }

  // is_organization_account - computed: true, optional: false, required: false
  public get isOrganizationAccount() {
    return this.getBooleanAttribute('is_organization_account');
  }

  // managed_accounts - computed: true, optional: false, required: false
  public get managedAccounts() {
    return this.getNumberAttribute('managed_accounts');
  }

  // marketplace_consumer_billing_entity_name - computed: true, optional: false, required: false
  public get marketplaceConsumerBillingEntityName() {
    return this.getStringAttribute('marketplace_consumer_billing_entity_name');
  }

  // marketplace_provider_billing_entity_name - computed: true, optional: false, required: false
  public get marketplaceProviderBillingEntityName() {
    return this.getStringAttribute('marketplace_provider_billing_entity_name');
  }

  // moved_on - computed: true, optional: false, required: false
  public get movedOn() {
    return this.getStringAttribute('moved_on');
  }

  // moved_to_organization - computed: true, optional: false, required: false
  public get movedToOrganization() {
    return this.getStringAttribute('moved_to_organization');
  }

  // old_account_url - computed: true, optional: false, required: false
  public get oldAccountUrl() {
    return this.getStringAttribute('old_account_url');
  }

  // organization_name - computed: true, optional: false, required: false
  public get organizationName() {
    return this.getStringAttribute('organization_name');
  }

  // organization_old_url - computed: true, optional: false, required: false
  public get organizationOldUrl() {
    return this.getStringAttribute('organization_old_url');
  }

  // organization_old_url_last_used - computed: true, optional: false, required: false
  public get organizationOldUrlLastUsed() {
    return this.getStringAttribute('organization_old_url_last_used');
  }

  // organization_old_url_saved_on - computed: true, optional: false, required: false
  public get organizationOldUrlSavedOn() {
    return this.getStringAttribute('organization_old_url_saved_on');
  }

  // organization_url_expiration_on - computed: true, optional: false, required: false
  public get organizationUrlExpirationOn() {
    return this.getStringAttribute('organization_url_expiration_on');
  }

  // region_group - computed: true, optional: false, required: false
  public get regionGroup() {
    return this.getStringAttribute('region_group');
  }

  // restored_on - computed: true, optional: false, required: false
  public get restoredOn() {
    return this.getStringAttribute('restored_on');
  }

  // scheduled_deletion_time - computed: true, optional: false, required: false
  public get scheduledDeletionTime() {
    return this.getStringAttribute('scheduled_deletion_time');
  }

  // snowflake_region - computed: true, optional: false, required: false
  public get snowflakeRegion() {
    return this.getStringAttribute('snowflake_region');
  }
}

export class DataSnowflakeAccountsAccountsShowOutputList extends cdktf.ComplexList {

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
  public get(index: number): DataSnowflakeAccountsAccountsShowOutputOutputReference {
    return new DataSnowflakeAccountsAccountsShowOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeAccountsAccounts {
}

export function dataSnowflakeAccountsAccountsToTerraform(struct?: DataSnowflakeAccountsAccounts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSnowflakeAccountsAccountsToHclTerraform(struct?: DataSnowflakeAccountsAccounts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeAccountsAccountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSnowflakeAccountsAccounts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeAccountsAccounts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // show_output - computed: true, optional: false, required: false
  private _showOutput = new DataSnowflakeAccountsAccountsShowOutputList(this, "show_output", false);
  public get showOutput() {
    return this._showOutput;
  }
}

export class DataSnowflakeAccountsAccountsList extends cdktf.ComplexList {

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
  public get(index: number): DataSnowflakeAccountsAccountsOutputReference {
    return new DataSnowflakeAccountsAccountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.0/docs/data-sources/accounts snowflake_accounts}
*/
export class DataSnowflakeAccounts extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_accounts";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSnowflakeAccounts resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSnowflakeAccounts to import
  * @param importFromId The id of the existing DataSnowflakeAccounts that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.0/docs/data-sources/accounts#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSnowflakeAccounts to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_accounts", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.0/docs/data-sources/accounts snowflake_accounts} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSnowflakeAccountsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSnowflakeAccountsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'snowflake_accounts',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '1.0.0',
        providerVersionConstraint: ' ~> 1.0'
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
    this._like = config.like;
    this._withHistory = config.withHistory;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accounts - computed: true, optional: false, required: false
  private _accounts = new DataSnowflakeAccountsAccountsList(this, "accounts", false);
  public get accounts() {
    return this._accounts;
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

  // like - computed: false, optional: true, required: false
  private _like?: string; 
  public get like() {
    return this.getStringAttribute('like');
  }
  public set like(value: string) {
    this._like = value;
  }
  public resetLike() {
    this._like = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get likeInput() {
    return this._like;
  }

  // with_history - computed: false, optional: true, required: false
  private _withHistory?: boolean | cdktf.IResolvable; 
  public get withHistory() {
    return this.getBooleanAttribute('with_history');
  }
  public set withHistory(value: boolean | cdktf.IResolvable) {
    this._withHistory = value;
  }
  public resetWithHistory() {
    this._withHistory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withHistoryInput() {
    return this._withHistory;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      like: cdktf.stringToTerraform(this._like),
      with_history: cdktf.booleanToTerraform(this._withHistory),
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
      like: {
        value: cdktf.stringToHclTerraform(this._like),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      with_history: {
        value: cdktf.booleanToHclTerraform(this._withHistory),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
