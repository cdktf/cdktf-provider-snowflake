/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Login name of the initial administrative user of the account. A new user is created in the new account with this name and password and granted the ACCOUNTADMIN role in the account. A login name can be any string consisting of letters, numbers, and underscores. Login names are always case-insensitive. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/account#admin_name Account#admin_name}
  */
  readonly adminName: string;
  /**
  * Password for the initial administrative user of the account. Either admin_password or admin_rsa_public_key has to be specified. This field cannot be used whenever admin_user_type is set to SERVICE. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/account#admin_password Account#admin_password}
  */
  readonly adminPassword?: string;
  /**
  * Assigns a public key to the initial administrative user of the account. Either admin_password or admin_rsa_public_key has to be specified. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/account#admin_rsa_public_key Account#admin_rsa_public_key}
  */
  readonly adminRsaPublicKey?: string;
  /**
  * Used for setting the type of the first user that is assigned the ACCOUNTADMIN role during account creation. Valid options are: `PERSON` | `SERVICE` | `LEGACY_SERVICE` External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/account#admin_user_type Account#admin_user_type}
  */
  readonly adminUserType?: string;
  /**
  * Specifies a comment for the account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/account#comment Account#comment}
  */
  readonly comment?: string;
  /**
  * Determines which billing entity is responsible for the account's consumption-based billing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/account#consumption_billing_entity Account#consumption_billing_entity}
  */
  readonly consumptionBillingEntity?: string;
  /**
  * Snowflake Edition of the account. See more about Snowflake Editions in the [official documentation](https://docs.snowflake.com/en/user-guide/intro-editions). Valid options are: `STANDARD` | `ENTERPRISE` | `BUSINESS_CRITICAL`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/account#edition Account#edition}
  */
  readonly edition: string;
  /**
  * Email address of the initial administrative user of the account. This email address is used to send any notifications about the account. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/account#email Account#email}
  */
  readonly email: string;
  /**
  * First name of the initial administrative user of the account. This field cannot be used whenever admin_user_type is set to SERVICE. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/account#first_name Account#first_name}
  */
  readonly firstName?: string;
  /**
  * Specifies the number of days during which the account can be restored (“undropped”). The minimum is 3 days and the maximum is 90 days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/account#grace_period_in_days Account#grace_period_in_days}
  */
  readonly gracePeriodInDays: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/account#id Account#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Sets an account property that determines whether the ORGADMIN role is enabled in the account. Only an organization administrator (i.e. user with the ORGADMIN role) can set the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/account#is_org_admin Account#is_org_admin}
  */
  readonly isOrgAdmin?: string;
  /**
  * Last name of the initial administrative user of the account. This field cannot be used whenever admin_user_type is set to SERVICE. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/account#last_name Account#last_name}
  */
  readonly lastName?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether the new user created to administer the account is forced to change their password upon first login into the account. This field cannot be used whenever admin_user_type is set to SERVICE. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/account#must_change_password Account#must_change_password}
  */
  readonly mustChangePassword?: string;
  /**
  * Specifies the identifier (i.e. name) for the account. It must be unique within an organization, regardless of which Snowflake Region the account is in and must start with an alphabetic character and cannot contain spaces or special characters except for underscores (_). Note that if the account name includes underscores, features that do not accept account names with underscores (e.g. Okta SSO or SCIM) can reference a version of the account name that substitutes hyphens (-) for the underscores.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/account#name Account#name}
  */
  readonly name: string;
  /**
  * [Snowflake Region ID](https://docs.snowflake.com/en/user-guide/admin-account-identifier.html#label-snowflake-region-ids) of the region where the account is created. If no value is provided, Snowflake creates the account in the same Snowflake Region as the current account (i.e. the account in which the CREATE ACCOUNT statement is executed.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/account#region Account#region}
  */
  readonly region?: string;
  /**
  * ID of the region group where the account is created. To retrieve the region group ID for existing accounts in your organization, execute the [SHOW REGIONS](https://docs.snowflake.com/en/sql-reference/sql/show-regions) command. For information about when you might need to specify region group, see [Region groups](https://docs.snowflake.com/en/user-guide/admin-account-identifier.html#label-region-groups).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/account#region_group Account#region_group}
  */
  readonly regionGroup?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/account#timeouts Account#timeouts}
  */
  readonly timeouts?: AccountTimeouts;
}
export interface AccountShowOutput {
}

export function accountShowOutputToTerraform(struct?: AccountShowOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function accountShowOutputToHclTerraform(struct?: AccountShowOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AccountShowOutputOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccountShowOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountShowOutput | undefined) {
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

export class AccountShowOutputList extends cdktf.ComplexList {

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
  public get(index: number): AccountShowOutputOutputReference {
    return new AccountShowOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccountTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/account#create Account#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/account#delete Account#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/account#read Account#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/account#update Account#update}
  */
  readonly update?: string;
}

export function accountTimeoutsToTerraform(struct?: AccountTimeouts | cdktf.IResolvable): any {
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


export function accountTimeoutsToHclTerraform(struct?: AccountTimeouts | cdktf.IResolvable): any {
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

export class AccountTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AccountTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/account snowflake_account}
*/
export class Account extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Account resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Account to import
  * @param importFromId The id of the existing Account that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Account to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/account snowflake_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccountConfig
  */
  public constructor(scope: Construct, id: string, config: AccountConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_account',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '2.11.0',
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
    this._adminName = config.adminName;
    this._adminPassword = config.adminPassword;
    this._adminRsaPublicKey = config.adminRsaPublicKey;
    this._adminUserType = config.adminUserType;
    this._comment = config.comment;
    this._consumptionBillingEntity = config.consumptionBillingEntity;
    this._edition = config.edition;
    this._email = config.email;
    this._firstName = config.firstName;
    this._gracePeriodInDays = config.gracePeriodInDays;
    this._id = config.id;
    this._isOrgAdmin = config.isOrgAdmin;
    this._lastName = config.lastName;
    this._mustChangePassword = config.mustChangePassword;
    this._name = config.name;
    this._region = config.region;
    this._regionGroup = config.regionGroup;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_name - computed: false, optional: false, required: true
  private _adminName?: string; 
  public get adminName() {
    return this.getStringAttribute('admin_name');
  }
  public set adminName(value: string) {
    this._adminName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminNameInput() {
    return this._adminName;
  }

  // admin_password - computed: false, optional: true, required: false
  private _adminPassword?: string; 
  public get adminPassword() {
    return this.getStringAttribute('admin_password');
  }
  public set adminPassword(value: string) {
    this._adminPassword = value;
  }
  public resetAdminPassword() {
    this._adminPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPasswordInput() {
    return this._adminPassword;
  }

  // admin_rsa_public_key - computed: false, optional: true, required: false
  private _adminRsaPublicKey?: string; 
  public get adminRsaPublicKey() {
    return this.getStringAttribute('admin_rsa_public_key');
  }
  public set adminRsaPublicKey(value: string) {
    this._adminRsaPublicKey = value;
  }
  public resetAdminRsaPublicKey() {
    this._adminRsaPublicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminRsaPublicKeyInput() {
    return this._adminRsaPublicKey;
  }

  // admin_user_type - computed: false, optional: true, required: false
  private _adminUserType?: string; 
  public get adminUserType() {
    return this.getStringAttribute('admin_user_type');
  }
  public set adminUserType(value: string) {
    this._adminUserType = value;
  }
  public resetAdminUserType() {
    this._adminUserType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminUserTypeInput() {
    return this._adminUserType;
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

  // consumption_billing_entity - computed: false, optional: true, required: false
  private _consumptionBillingEntity?: string; 
  public get consumptionBillingEntity() {
    return this.getStringAttribute('consumption_billing_entity');
  }
  public set consumptionBillingEntity(value: string) {
    this._consumptionBillingEntity = value;
  }
  public resetConsumptionBillingEntity() {
    this._consumptionBillingEntity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumptionBillingEntityInput() {
    return this._consumptionBillingEntity;
  }

  // edition - computed: false, optional: false, required: true
  private _edition?: string; 
  public get edition() {
    return this.getStringAttribute('edition');
  }
  public set edition(value: string) {
    this._edition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get editionInput() {
    return this._edition;
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // first_name - computed: false, optional: true, required: false
  private _firstName?: string; 
  public get firstName() {
    return this.getStringAttribute('first_name');
  }
  public set firstName(value: string) {
    this._firstName = value;
  }
  public resetFirstName() {
    this._firstName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstNameInput() {
    return this._firstName;
  }

  // fully_qualified_name - computed: true, optional: false, required: false
  public get fullyQualifiedName() {
    return this.getStringAttribute('fully_qualified_name');
  }

  // grace_period_in_days - computed: false, optional: false, required: true
  private _gracePeriodInDays?: number; 
  public get gracePeriodInDays() {
    return this.getNumberAttribute('grace_period_in_days');
  }
  public set gracePeriodInDays(value: number) {
    this._gracePeriodInDays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gracePeriodInDaysInput() {
    return this._gracePeriodInDays;
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

  // is_org_admin - computed: false, optional: true, required: false
  private _isOrgAdmin?: string; 
  public get isOrgAdmin() {
    return this.getStringAttribute('is_org_admin');
  }
  public set isOrgAdmin(value: string) {
    this._isOrgAdmin = value;
  }
  public resetIsOrgAdmin() {
    this._isOrgAdmin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isOrgAdminInput() {
    return this._isOrgAdmin;
  }

  // last_name - computed: false, optional: true, required: false
  private _lastName?: string; 
  public get lastName() {
    return this.getStringAttribute('last_name');
  }
  public set lastName(value: string) {
    this._lastName = value;
  }
  public resetLastName() {
    this._lastName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastNameInput() {
    return this._lastName;
  }

  // must_change_password - computed: false, optional: true, required: false
  private _mustChangePassword?: string; 
  public get mustChangePassword() {
    return this.getStringAttribute('must_change_password');
  }
  public set mustChangePassword(value: string) {
    this._mustChangePassword = value;
  }
  public resetMustChangePassword() {
    this._mustChangePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mustChangePasswordInput() {
    return this._mustChangePassword;
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

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // region_group - computed: false, optional: true, required: false
  private _regionGroup?: string; 
  public get regionGroup() {
    return this.getStringAttribute('region_group');
  }
  public set regionGroup(value: string) {
    this._regionGroup = value;
  }
  public resetRegionGroup() {
    this._regionGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionGroupInput() {
    return this._regionGroup;
  }

  // show_output - computed: true, optional: false, required: false
  private _showOutput = new AccountShowOutputList(this, "show_output", false);
  public get showOutput() {
    return this._showOutput;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AccountTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AccountTimeouts) {
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
      admin_name: cdktf.stringToTerraform(this._adminName),
      admin_password: cdktf.stringToTerraform(this._adminPassword),
      admin_rsa_public_key: cdktf.stringToTerraform(this._adminRsaPublicKey),
      admin_user_type: cdktf.stringToTerraform(this._adminUserType),
      comment: cdktf.stringToTerraform(this._comment),
      consumption_billing_entity: cdktf.stringToTerraform(this._consumptionBillingEntity),
      edition: cdktf.stringToTerraform(this._edition),
      email: cdktf.stringToTerraform(this._email),
      first_name: cdktf.stringToTerraform(this._firstName),
      grace_period_in_days: cdktf.numberToTerraform(this._gracePeriodInDays),
      id: cdktf.stringToTerraform(this._id),
      is_org_admin: cdktf.stringToTerraform(this._isOrgAdmin),
      last_name: cdktf.stringToTerraform(this._lastName),
      must_change_password: cdktf.stringToTerraform(this._mustChangePassword),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      region_group: cdktf.stringToTerraform(this._regionGroup),
      timeouts: accountTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_name: {
        value: cdktf.stringToHclTerraform(this._adminName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      admin_password: {
        value: cdktf.stringToHclTerraform(this._adminPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      admin_rsa_public_key: {
        value: cdktf.stringToHclTerraform(this._adminRsaPublicKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      admin_user_type: {
        value: cdktf.stringToHclTerraform(this._adminUserType),
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
      consumption_billing_entity: {
        value: cdktf.stringToHclTerraform(this._consumptionBillingEntity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      edition: {
        value: cdktf.stringToHclTerraform(this._edition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email: {
        value: cdktf.stringToHclTerraform(this._email),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      first_name: {
        value: cdktf.stringToHclTerraform(this._firstName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      grace_period_in_days: {
        value: cdktf.numberToHclTerraform(this._gracePeriodInDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_org_admin: {
        value: cdktf.stringToHclTerraform(this._isOrgAdmin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      last_name: {
        value: cdktf.stringToHclTerraform(this._lastName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      must_change_password: {
        value: cdktf.stringToHclTerraform(this._mustChangePassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region_group: {
        value: cdktf.stringToHclTerraform(this._regionGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: accountTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AccountTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
