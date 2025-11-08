/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/listing
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ListingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the application package attached to the listing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/listing#application_package Listing#application_package}
  */
  readonly applicationPackage?: string;
  /**
  * Specifies a comment for the listing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/listing#comment Listing#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/listing#id Listing#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the listing identifier (name). It must be unique within the organization, regardless of which Snowflake region the account is located in. Must start with an alphabetic character and cannot contain spaces or special characters except for underscores.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/listing#name Listing#name}
  */
  readonly name: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Determines if the listing should be published.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/listing#publish Listing#publish}
  */
  readonly publish?: string;
  /**
  * Specifies the identifier for the share to attach to the listing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/listing#share Listing#share}
  */
  readonly share?: string;
  /**
  * manifest block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/listing#manifest Listing#manifest}
  */
  readonly manifest: ListingManifest;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/listing#timeouts Listing#timeouts}
  */
  readonly timeouts?: ListingTimeouts;
}
export interface ListingShowOutput {
}

export function listingShowOutputToTerraform(struct?: ListingShowOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function listingShowOutputToHclTerraform(struct?: ListingShowOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ListingShowOutputOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ListingShowOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ListingShowOutput | undefined) {
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

  // detailed_target_accounts - computed: true, optional: false, required: false
  public get detailedTargetAccounts() {
    return this.getStringAttribute('detailed_target_accounts');
  }

  // distribution - computed: true, optional: false, required: false
  public get distribution() {
    return this.getStringAttribute('distribution');
  }

  // global_name - computed: true, optional: false, required: false
  public get globalName() {
    return this.getStringAttribute('global_name');
  }

  // is_application - computed: true, optional: false, required: false
  public get isApplication() {
    return this.getBooleanAttribute('is_application');
  }

  // is_by_request - computed: true, optional: false, required: false
  public get isByRequest() {
    return this.getBooleanAttribute('is_by_request');
  }

  // is_limited_trial - computed: true, optional: false, required: false
  public get isLimitedTrial() {
    return this.getBooleanAttribute('is_limited_trial');
  }

  // is_monetized - computed: true, optional: false, required: false
  public get isMonetized() {
    return this.getBooleanAttribute('is_monetized');
  }

  // is_mountless_queryable - computed: true, optional: false, required: false
  public get isMountlessQueryable() {
    return this.getBooleanAttribute('is_mountless_queryable');
  }

  // is_targeted - computed: true, optional: false, required: false
  public get isTargeted() {
    return this.getBooleanAttribute('is_targeted');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // organization_profile_name - computed: true, optional: false, required: false
  public get organizationProfileName() {
    return this.getStringAttribute('organization_profile_name');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // owner_role_type - computed: true, optional: false, required: false
  public get ownerRoleType() {
    return this.getStringAttribute('owner_role_type');
  }

  // profile - computed: true, optional: false, required: false
  public get profile() {
    return this.getStringAttribute('profile');
  }

  // published_on - computed: true, optional: false, required: false
  public get publishedOn() {
    return this.getStringAttribute('published_on');
  }

  // regions - computed: true, optional: false, required: false
  public get regions() {
    return this.getStringAttribute('regions');
  }

  // rejected_on - computed: true, optional: false, required: false
  public get rejectedOn() {
    return this.getStringAttribute('rejected_on');
  }

  // review_state - computed: true, optional: false, required: false
  public get reviewState() {
    return this.getStringAttribute('review_state');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // subtitle - computed: true, optional: false, required: false
  public get subtitle() {
    return this.getStringAttribute('subtitle');
  }

  // target_accounts - computed: true, optional: false, required: false
  public get targetAccounts() {
    return this.getStringAttribute('target_accounts');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }

  // uniform_listing_locator - computed: true, optional: false, required: false
  public get uniformListingLocator() {
    return this.getStringAttribute('uniform_listing_locator');
  }

  // updated_on - computed: true, optional: false, required: false
  public get updatedOn() {
    return this.getStringAttribute('updated_on');
  }
}

export class ListingShowOutputList extends cdktf.ComplexList {

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
  public get(index: number): ListingShowOutputOutputReference {
    return new ListingShowOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ListingManifestFromStage {
  /**
  * Location of the manifest file in the stage. If not specified, the manifest file will be expected to be at the root of the stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/listing#location Listing#location}
  */
  readonly location?: string;
  /**
  * Identifier of the stage where the manifest file is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/listing#stage Listing#stage}
  */
  readonly stage: string;
  /**
  * Specifies a comment for the listing version. Whenever a new version is created, this comment will be associated with it. The comment on the version will be visible in the [SHOW VERSIONS IN LISTING](https://docs.snowflake.com/en/sql-reference/sql/show-versions-in-listing) command output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/listing#version_comment Listing#version_comment}
  */
  readonly versionComment?: string;
  /**
  * Represents manifest version name. It's case-sensitive and used in manifest versioning. Version name should be specified or changed whenever any changes in the manifest should be applied to the listing. Later on the versions of the listing can be analyzed by calling the [SHOW VERSIONS IN LISTING](https://docs.snowflake.com/en/sql-reference/sql/show-versions-in-listing) command. The resource does not track the changes on the specified stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/listing#version_name Listing#version_name}
  */
  readonly versionName?: string;
}

export function listingManifestFromStageToTerraform(struct?: ListingManifestFromStageOutputReference | ListingManifestFromStage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    location: cdktf.stringToTerraform(struct!.location),
    stage: cdktf.stringToTerraform(struct!.stage),
    version_comment: cdktf.stringToTerraform(struct!.versionComment),
    version_name: cdktf.stringToTerraform(struct!.versionName),
  }
}


export function listingManifestFromStageToHclTerraform(struct?: ListingManifestFromStageOutputReference | ListingManifestFromStage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stage: {
      value: cdktf.stringToHclTerraform(struct!.stage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_comment: {
      value: cdktf.stringToHclTerraform(struct!.versionComment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_name: {
      value: cdktf.stringToHclTerraform(struct!.versionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ListingManifestFromStageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ListingManifestFromStage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._stage !== undefined) {
      hasAnyValues = true;
      internalValueResult.stage = this._stage;
    }
    if (this._versionComment !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionComment = this._versionComment;
    }
    if (this._versionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionName = this._versionName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ListingManifestFromStage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._location = undefined;
      this._stage = undefined;
      this._versionComment = undefined;
      this._versionName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._location = value.location;
      this._stage = value.stage;
      this._versionComment = value.versionComment;
      this._versionName = value.versionName;
    }
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // stage - computed: false, optional: false, required: true
  private _stage?: string; 
  public get stage() {
    return this.getStringAttribute('stage');
  }
  public set stage(value: string) {
    this._stage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stageInput() {
    return this._stage;
  }

  // version_comment - computed: false, optional: true, required: false
  private _versionComment?: string; 
  public get versionComment() {
    return this.getStringAttribute('version_comment');
  }
  public set versionComment(value: string) {
    this._versionComment = value;
  }
  public resetVersionComment() {
    this._versionComment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionCommentInput() {
    return this._versionComment;
  }

  // version_name - computed: false, optional: true, required: false
  private _versionName?: string; 
  public get versionName() {
    return this.getStringAttribute('version_name');
  }
  public set versionName(value: string) {
    this._versionName = value;
  }
  public resetVersionName() {
    this._versionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionNameInput() {
    return this._versionName;
  }
}
export interface ListingManifest {
  /**
  * Manifest provided as a string. Wrapping `$$` signs are added by the provider automatically; do not include them. For more information on manifest syntax, see [Listing manifest reference](https://docs.snowflake.com/en/progaccess/listing-manifest-reference). Also, the [multiline string syntax](https://developer.hashicorp.com/terraform/language/expressions/strings#heredoc-strings) is a must here. A proper YAML indentation (2 spaces) is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/listing#from_string Listing#from_string}
  */
  readonly fromString?: string;
  /**
  * from_stage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/listing#from_stage Listing#from_stage}
  */
  readonly fromStage?: ListingManifestFromStage;
}

export function listingManifestToTerraform(struct?: ListingManifestOutputReference | ListingManifest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from_string: cdktf.stringToTerraform(struct!.fromString),
    from_stage: listingManifestFromStageToTerraform(struct!.fromStage),
  }
}


export function listingManifestToHclTerraform(struct?: ListingManifestOutputReference | ListingManifest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from_string: {
      value: cdktf.stringToHclTerraform(struct!.fromString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    from_stage: {
      value: listingManifestFromStageToHclTerraform(struct!.fromStage),
      isBlock: true,
      type: "list",
      storageClassType: "ListingManifestFromStageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ListingManifestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ListingManifest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fromString !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromString = this._fromString;
    }
    if (this._fromStage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromStage = this._fromStage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ListingManifest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fromString = undefined;
      this._fromStage.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fromString = value.fromString;
      this._fromStage.internalValue = value.fromStage;
    }
  }

  // from_string - computed: false, optional: true, required: false
  private _fromString?: string; 
  public get fromString() {
    return this.getStringAttribute('from_string');
  }
  public set fromString(value: string) {
    this._fromString = value;
  }
  public resetFromString() {
    this._fromString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromStringInput() {
    return this._fromString;
  }

  // from_stage - computed: false, optional: true, required: false
  private _fromStage = new ListingManifestFromStageOutputReference(this, "from_stage");
  public get fromStage() {
    return this._fromStage;
  }
  public putFromStage(value: ListingManifestFromStage) {
    this._fromStage.internalValue = value;
  }
  public resetFromStage() {
    this._fromStage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromStageInput() {
    return this._fromStage.internalValue;
  }
}
export interface ListingTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/listing#create Listing#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/listing#delete Listing#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/listing#read Listing#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/listing#update Listing#update}
  */
  readonly update?: string;
}

export function listingTimeoutsToTerraform(struct?: ListingTimeouts | cdktf.IResolvable): any {
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


export function listingTimeoutsToHclTerraform(struct?: ListingTimeouts | cdktf.IResolvable): any {
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

export class ListingTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ListingTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ListingTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/listing snowflake_listing}
*/
export class Listing extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_listing";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Listing resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Listing to import
  * @param importFromId The id of the existing Listing that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/listing#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Listing to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_listing", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/listing snowflake_listing} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ListingConfig
  */
  public constructor(scope: Construct, id: string, config: ListingConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_listing',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '2.10.1',
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
    this._applicationPackage = config.applicationPackage;
    this._comment = config.comment;
    this._id = config.id;
    this._name = config.name;
    this._publish = config.publish;
    this._share = config.share;
    this._manifest.internalValue = config.manifest;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_package - computed: false, optional: true, required: false
  private _applicationPackage?: string; 
  public get applicationPackage() {
    return this.getStringAttribute('application_package');
  }
  public set applicationPackage(value: string) {
    this._applicationPackage = value;
  }
  public resetApplicationPackage() {
    this._applicationPackage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationPackageInput() {
    return this._applicationPackage;
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

  // publish - computed: false, optional: true, required: false
  private _publish?: string; 
  public get publish() {
    return this.getStringAttribute('publish');
  }
  public set publish(value: string) {
    this._publish = value;
  }
  public resetPublish() {
    this._publish = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishInput() {
    return this._publish;
  }

  // share - computed: false, optional: true, required: false
  private _share?: string; 
  public get share() {
    return this.getStringAttribute('share');
  }
  public set share(value: string) {
    this._share = value;
  }
  public resetShare() {
    this._share = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shareInput() {
    return this._share;
  }

  // show_output - computed: true, optional: false, required: false
  private _showOutput = new ListingShowOutputList(this, "show_output", false);
  public get showOutput() {
    return this._showOutput;
  }

  // manifest - computed: false, optional: false, required: true
  private _manifest = new ListingManifestOutputReference(this, "manifest");
  public get manifest() {
    return this._manifest;
  }
  public putManifest(value: ListingManifest) {
    this._manifest.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get manifestInput() {
    return this._manifest.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ListingTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ListingTimeouts) {
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
      application_package: cdktf.stringToTerraform(this._applicationPackage),
      comment: cdktf.stringToTerraform(this._comment),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      publish: cdktf.stringToTerraform(this._publish),
      share: cdktf.stringToTerraform(this._share),
      manifest: listingManifestToTerraform(this._manifest.internalValue),
      timeouts: listingTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_package: {
        value: cdktf.stringToHclTerraform(this._applicationPackage),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      publish: {
        value: cdktf.stringToHclTerraform(this._publish),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      share: {
        value: cdktf.stringToHclTerraform(this._share),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      manifest: {
        value: listingManifestToHclTerraform(this._manifest.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ListingManifestList",
      },
      timeouts: {
        value: listingTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ListingTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
