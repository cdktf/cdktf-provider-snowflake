/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/user_programmatic_access_token
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserProgrammaticAccessTokenConfig extends cdktf.TerraformMetaArguments {
  /**
  * Descriptive comment about the programmatic access token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/user_programmatic_access_token#comment UserProgrammaticAccessToken#comment}
  */
  readonly comment?: string;
  /**
  * The number of days that the programmatic access token can be used for authentication. This field cannot be altered after the token is created. Instead, you must rotate the token with the `keeper` field. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/user_programmatic_access_token#days_to_expiry UserProgrammaticAccessToken#days_to_expiry}
  */
  readonly daysToExpiry?: number;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Disables or enables the programmatic access token. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/user_programmatic_access_token#disabled UserProgrammaticAccessToken#disabled}
  */
  readonly disabled?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) This field is only used when the token is rotated by changing the `keeper` field. Sets the expiration time of the existing token secret to expire after the specified number of hours. You can set this to a value of 0 to expire the current token secret immediately.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/user_programmatic_access_token#expire_rotated_token_after_hours UserProgrammaticAccessToken#expire_rotated_token_after_hours}
  */
  readonly expireRotatedTokenAfterHours?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/user_programmatic_access_token#id UserProgrammaticAccessToken#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Arbitrary string that, if and only if, changed from a non-empty to a different non-empty value (or known after apply), will trigger a key to be rotated. When you add this field to the configuration, or remove it from the configuration, the rotation is not triggered. When the token is rotated, the `token` and `rotated_token_name` fields are marked as computed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/user_programmatic_access_token#keeper UserProgrammaticAccessToken#keeper}
  */
  readonly keeper?: string;
  /**
  * The number of minutes during which a user can use this token to access Snowflake without being subject to an active network policy. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/user_programmatic_access_token#mins_to_bypass_network_policy_requirement UserProgrammaticAccessToken#mins_to_bypass_network_policy_requirement}
  */
  readonly minsToBypassNetworkPolicyRequirement?: number;
  /**
  * Specifies the name for the programmatic access token; must be unique for the user. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/user_programmatic_access_token#name UserProgrammaticAccessToken#name}
  */
  readonly name: string;
  /**
  * The name of the role used for privilege evaluation and object creation. This must be one of the roles that has already been granted to the user. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/user_programmatic_access_token#role_restriction UserProgrammaticAccessToken#role_restriction}
  */
  readonly roleRestriction?: string;
  /**
  * The name of the user that the token is associated with. A user cannot use another user's programmatic access token to authenticate. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/user_programmatic_access_token#user UserProgrammaticAccessToken#user}
  */
  readonly user: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/user_programmatic_access_token#timeouts UserProgrammaticAccessToken#timeouts}
  */
  readonly timeouts?: UserProgrammaticAccessTokenTimeouts;
}
export interface UserProgrammaticAccessTokenShowOutput {
}

export function userProgrammaticAccessTokenShowOutputToTerraform(struct?: UserProgrammaticAccessTokenShowOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function userProgrammaticAccessTokenShowOutputToHclTerraform(struct?: UserProgrammaticAccessTokenShowOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UserProgrammaticAccessTokenShowOutputOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserProgrammaticAccessTokenShowOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserProgrammaticAccessTokenShowOutput | undefined) {
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

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // expires_at - computed: true, optional: false, required: false
  public get expiresAt() {
    return this.getStringAttribute('expires_at');
  }

  // mins_to_bypass_network_policy_requirement - computed: true, optional: false, required: false
  public get minsToBypassNetworkPolicyRequirement() {
    return this.getNumberAttribute('mins_to_bypass_network_policy_requirement');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // role_restriction - computed: true, optional: false, required: false
  public get roleRestriction() {
    return this.getStringAttribute('role_restriction');
  }

  // rotated_to - computed: true, optional: false, required: false
  public get rotatedTo() {
    return this.getStringAttribute('rotated_to');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // user_name - computed: true, optional: false, required: false
  public get userName() {
    return this.getStringAttribute('user_name');
  }
}

export class UserProgrammaticAccessTokenShowOutputList extends cdktf.ComplexList {

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
  public get(index: number): UserProgrammaticAccessTokenShowOutputOutputReference {
    return new UserProgrammaticAccessTokenShowOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserProgrammaticAccessTokenTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/user_programmatic_access_token#create UserProgrammaticAccessToken#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/user_programmatic_access_token#delete UserProgrammaticAccessToken#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/user_programmatic_access_token#read UserProgrammaticAccessToken#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/user_programmatic_access_token#update UserProgrammaticAccessToken#update}
  */
  readonly update?: string;
}

export function userProgrammaticAccessTokenTimeoutsToTerraform(struct?: UserProgrammaticAccessTokenTimeouts | cdktf.IResolvable): any {
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


export function userProgrammaticAccessTokenTimeoutsToHclTerraform(struct?: UserProgrammaticAccessTokenTimeouts | cdktf.IResolvable): any {
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

export class UserProgrammaticAccessTokenTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UserProgrammaticAccessTokenTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: UserProgrammaticAccessTokenTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/user_programmatic_access_token snowflake_user_programmatic_access_token}
*/
export class UserProgrammaticAccessToken extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_user_programmatic_access_token";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserProgrammaticAccessToken resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserProgrammaticAccessToken to import
  * @param importFromId The id of the existing UserProgrammaticAccessToken that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/user_programmatic_access_token#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserProgrammaticAccessToken to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_user_programmatic_access_token", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/user_programmatic_access_token snowflake_user_programmatic_access_token} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserProgrammaticAccessTokenConfig
  */
  public constructor(scope: Construct, id: string, config: UserProgrammaticAccessTokenConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_user_programmatic_access_token',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '2.9.0',
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
    this._comment = config.comment;
    this._daysToExpiry = config.daysToExpiry;
    this._disabled = config.disabled;
    this._expireRotatedTokenAfterHours = config.expireRotatedTokenAfterHours;
    this._id = config.id;
    this._keeper = config.keeper;
    this._minsToBypassNetworkPolicyRequirement = config.minsToBypassNetworkPolicyRequirement;
    this._name = config.name;
    this._roleRestriction = config.roleRestriction;
    this._user = config.user;
    this._timeouts.internalValue = config.timeouts;
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

  // days_to_expiry - computed: false, optional: true, required: false
  private _daysToExpiry?: number; 
  public get daysToExpiry() {
    return this.getNumberAttribute('days_to_expiry');
  }
  public set daysToExpiry(value: number) {
    this._daysToExpiry = value;
  }
  public resetDaysToExpiry() {
    this._daysToExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysToExpiryInput() {
    return this._daysToExpiry;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: string; 
  public get disabled() {
    return this.getStringAttribute('disabled');
  }
  public set disabled(value: string) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // expire_rotated_token_after_hours - computed: false, optional: true, required: false
  private _expireRotatedTokenAfterHours?: number; 
  public get expireRotatedTokenAfterHours() {
    return this.getNumberAttribute('expire_rotated_token_after_hours');
  }
  public set expireRotatedTokenAfterHours(value: number) {
    this._expireRotatedTokenAfterHours = value;
  }
  public resetExpireRotatedTokenAfterHours() {
    this._expireRotatedTokenAfterHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expireRotatedTokenAfterHoursInput() {
    return this._expireRotatedTokenAfterHours;
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

  // keeper - computed: false, optional: true, required: false
  private _keeper?: string; 
  public get keeper() {
    return this.getStringAttribute('keeper');
  }
  public set keeper(value: string) {
    this._keeper = value;
  }
  public resetKeeper() {
    this._keeper = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keeperInput() {
    return this._keeper;
  }

  // mins_to_bypass_network_policy_requirement - computed: false, optional: true, required: false
  private _minsToBypassNetworkPolicyRequirement?: number; 
  public get minsToBypassNetworkPolicyRequirement() {
    return this.getNumberAttribute('mins_to_bypass_network_policy_requirement');
  }
  public set minsToBypassNetworkPolicyRequirement(value: number) {
    this._minsToBypassNetworkPolicyRequirement = value;
  }
  public resetMinsToBypassNetworkPolicyRequirement() {
    this._minsToBypassNetworkPolicyRequirement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minsToBypassNetworkPolicyRequirementInput() {
    return this._minsToBypassNetworkPolicyRequirement;
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

  // role_restriction - computed: false, optional: true, required: false
  private _roleRestriction?: string; 
  public get roleRestriction() {
    return this.getStringAttribute('role_restriction');
  }
  public set roleRestriction(value: string) {
    this._roleRestriction = value;
  }
  public resetRoleRestriction() {
    this._roleRestriction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleRestrictionInput() {
    return this._roleRestriction;
  }

  // rotated_token_name - computed: true, optional: false, required: false
  public get rotatedTokenName() {
    return this.getStringAttribute('rotated_token_name');
  }

  // show_output - computed: true, optional: false, required: false
  private _showOutput = new UserProgrammaticAccessTokenShowOutputList(this, "show_output", false);
  public get showOutput() {
    return this._showOutput;
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // user - computed: false, optional: false, required: true
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new UserProgrammaticAccessTokenTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: UserProgrammaticAccessTokenTimeouts) {
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
      comment: cdktf.stringToTerraform(this._comment),
      days_to_expiry: cdktf.numberToTerraform(this._daysToExpiry),
      disabled: cdktf.stringToTerraform(this._disabled),
      expire_rotated_token_after_hours: cdktf.numberToTerraform(this._expireRotatedTokenAfterHours),
      id: cdktf.stringToTerraform(this._id),
      keeper: cdktf.stringToTerraform(this._keeper),
      mins_to_bypass_network_policy_requirement: cdktf.numberToTerraform(this._minsToBypassNetworkPolicyRequirement),
      name: cdktf.stringToTerraform(this._name),
      role_restriction: cdktf.stringToTerraform(this._roleRestriction),
      user: cdktf.stringToTerraform(this._user),
      timeouts: userProgrammaticAccessTokenTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      days_to_expiry: {
        value: cdktf.numberToHclTerraform(this._daysToExpiry),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disabled: {
        value: cdktf.stringToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expire_rotated_token_after_hours: {
        value: cdktf.numberToHclTerraform(this._expireRotatedTokenAfterHours),
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
      keeper: {
        value: cdktf.stringToHclTerraform(this._keeper),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mins_to_bypass_network_policy_requirement: {
        value: cdktf.numberToHclTerraform(this._minsToBypassNetworkPolicyRequirement),
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
      role_restriction: {
        value: cdktf.stringToHclTerraform(this._roleRestriction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user: {
        value: cdktf.stringToHclTerraform(this._user),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: userProgrammaticAccessTokenTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "UserProgrammaticAccessTokenTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
