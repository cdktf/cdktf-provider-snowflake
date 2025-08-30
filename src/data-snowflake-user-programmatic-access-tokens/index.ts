/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/snowflakedb/snowflake/2.6.0/docs/data-sources/user_programmatic_access_tokens
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSnowflakeUserProgrammaticAccessTokensConfig extends cdktf.TerraformMetaArguments {
  /**
  * Returns programmatic access tokens for the specified user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.6.0/docs/data-sources/user_programmatic_access_tokens#for_user DataSnowflakeUserProgrammaticAccessTokens#for_user}
  */
  readonly forUser: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.6.0/docs/data-sources/user_programmatic_access_tokens#id DataSnowflakeUserProgrammaticAccessTokens#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutput {
}

export function dataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputToTerraform(struct?: DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputToHclTerraform(struct?: DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutput | undefined) {
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

export class DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList extends cdktf.ComplexList {

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
  public get(index: number): DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference {
    return new DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokens {
}

export function dataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensToTerraform(struct?: DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokens): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensToHclTerraform(struct?: DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokens): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokens | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokens | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // show_output - computed: true, optional: false, required: false
  private _showOutput = new DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensShowOutputList(this, "show_output", false);
  public get showOutput() {
    return this._showOutput;
  }
}

export class DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList extends cdktf.ComplexList {

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
  public get(index: number): DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference {
    return new DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.6.0/docs/data-sources/user_programmatic_access_tokens snowflake_user_programmatic_access_tokens}
*/
export class DataSnowflakeUserProgrammaticAccessTokens extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_user_programmatic_access_tokens";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSnowflakeUserProgrammaticAccessTokens resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSnowflakeUserProgrammaticAccessTokens to import
  * @param importFromId The id of the existing DataSnowflakeUserProgrammaticAccessTokens that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.6.0/docs/data-sources/user_programmatic_access_tokens#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSnowflakeUserProgrammaticAccessTokens to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_user_programmatic_access_tokens", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.6.0/docs/data-sources/user_programmatic_access_tokens snowflake_user_programmatic_access_tokens} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSnowflakeUserProgrammaticAccessTokensConfig
  */
  public constructor(scope: Construct, id: string, config: DataSnowflakeUserProgrammaticAccessTokensConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_user_programmatic_access_tokens',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '2.6.0',
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
    this._forUser = config.forUser;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // for_user - computed: false, optional: false, required: true
  private _forUser?: string; 
  public get forUser() {
    return this.getStringAttribute('for_user');
  }
  public set forUser(value: string) {
    this._forUser = value;
  }
  // Temporarily expose input value. Use with caution.
  public get forUserInput() {
    return this._forUser;
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

  // user_programmatic_access_tokens - computed: true, optional: false, required: false
  private _userProgrammaticAccessTokens = new DataSnowflakeUserProgrammaticAccessTokensUserProgrammaticAccessTokensList(this, "user_programmatic_access_tokens", false);
  public get userProgrammaticAccessTokens() {
    return this._userProgrammaticAccessTokens;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      for_user: cdktf.stringToTerraform(this._forUser),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      for_user: {
        value: cdktf.stringToHclTerraform(this._forUser),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
