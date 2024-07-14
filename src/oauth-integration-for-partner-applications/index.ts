// https://registry.terraform.io/providers/snowflake-labs/snowflake/0.93.0/docs/resources/oauth_integration_for_partner_applications
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OauthIntegrationForPartnerApplicationsConfig extends cdktf.TerraformMetaArguments {
  /**
  * A set of Snowflake roles that a user cannot explicitly consent to using after authenticating.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.93.0/docs/resources/oauth_integration_for_partner_applications#blocked_roles_list OauthIntegrationForPartnerApplications#blocked_roles_list}
  */
  readonly blockedRolesList: string[];
  /**
  * Specifies a comment for the OAuth integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.93.0/docs/resources/oauth_integration_for_partner_applications#comment OauthIntegrationForPartnerApplications#comment}
  */
  readonly comment?: string;
  /**
  * Specifies whether this OAuth integration is enabled or disabled. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.93.0/docs/resources/oauth_integration_for_partner_applications#enabled OauthIntegrationForPartnerApplications#enabled}
  */
  readonly enabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.93.0/docs/resources/oauth_integration_for_partner_applications#id OauthIntegrationForPartnerApplications#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the name of the OAuth integration. This name follows the rules for Object Identifiers. The name should be unique among security integrations in your account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.93.0/docs/resources/oauth_integration_for_partner_applications#name OauthIntegrationForPartnerApplications#name}
  */
  readonly name: string;
  /**
  * Creates an OAuth interface between Snowflake and a partner application. Valid options are: [LOOKER TABLEAU_DESKTOP TABLEAU_SERVER]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.93.0/docs/resources/oauth_integration_for_partner_applications#oauth_client OauthIntegrationForPartnerApplications#oauth_client}
  */
  readonly oauthClient: string;
  /**
  * Specifies whether to allow the client to exchange a refresh token for an access token when the current access token has expired. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.93.0/docs/resources/oauth_integration_for_partner_applications#oauth_issue_refresh_tokens OauthIntegrationForPartnerApplications#oauth_issue_refresh_tokens}
  */
  readonly oauthIssueRefreshTokens?: string;
  /**
  * Specifies the client URI. After a user is authenticated, the web browser is redirected to this URI. The field should be only set when OAUTH_CLIENT = LOOKER. In any other case the field should be left out empty. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.93.0/docs/resources/oauth_integration_for_partner_applications#oauth_redirect_uri OauthIntegrationForPartnerApplications#oauth_redirect_uri}
  */
  readonly oauthRedirectUri?: string;
  /**
  * Specifies how long refresh tokens should be valid (in seconds). OAUTH_ISSUE_REFRESH_TOKENS must be set to TRUE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.93.0/docs/resources/oauth_integration_for_partner_applications#oauth_refresh_token_validity OauthIntegrationForPartnerApplications#oauth_refresh_token_validity}
  */
  readonly oauthRefreshTokenValidity?: number;
  /**
  * Specifies whether default secondary roles set in the user properties are activated by default in the session being opened. Valid options are: [IMPLICIT NONE]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.93.0/docs/resources/oauth_integration_for_partner_applications#oauth_use_secondary_roles OauthIntegrationForPartnerApplications#oauth_use_secondary_roles}
  */
  readonly oauthUseSecondaryRoles?: string;
}
export interface OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStruct {
}

export function oauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructToTerraform(struct?: OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function oauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructToHclTerraform(struct?: OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructList extends cdktf.ComplexList {

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
  public get(index: number): OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructOutputReference {
    return new OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OauthIntegrationForPartnerApplicationsDescribeOutputComment {
}

export function oauthIntegrationForPartnerApplicationsDescribeOutputCommentToTerraform(struct?: OauthIntegrationForPartnerApplicationsDescribeOutputComment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function oauthIntegrationForPartnerApplicationsDescribeOutputCommentToHclTerraform(struct?: OauthIntegrationForPartnerApplicationsDescribeOutputComment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OauthIntegrationForPartnerApplicationsDescribeOutputCommentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OauthIntegrationForPartnerApplicationsDescribeOutputComment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OauthIntegrationForPartnerApplicationsDescribeOutputComment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class OauthIntegrationForPartnerApplicationsDescribeOutputCommentList extends cdktf.ComplexList {

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
  public get(index: number): OauthIntegrationForPartnerApplicationsDescribeOutputCommentOutputReference {
    return new OauthIntegrationForPartnerApplicationsDescribeOutputCommentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OauthIntegrationForPartnerApplicationsDescribeOutputEnabled {
}

export function oauthIntegrationForPartnerApplicationsDescribeOutputEnabledToTerraform(struct?: OauthIntegrationForPartnerApplicationsDescribeOutputEnabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function oauthIntegrationForPartnerApplicationsDescribeOutputEnabledToHclTerraform(struct?: OauthIntegrationForPartnerApplicationsDescribeOutputEnabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OauthIntegrationForPartnerApplicationsDescribeOutputEnabledOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OauthIntegrationForPartnerApplicationsDescribeOutputEnabled | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OauthIntegrationForPartnerApplicationsDescribeOutputEnabled | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class OauthIntegrationForPartnerApplicationsDescribeOutputEnabledList extends cdktf.ComplexList {

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
  public get(index: number): OauthIntegrationForPartnerApplicationsDescribeOutputEnabledOutputReference {
    return new OauthIntegrationForPartnerApplicationsDescribeOutputEnabledOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicy {
}

export function oauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyToTerraform(struct?: OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function oauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyToHclTerraform(struct?: OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyList extends cdktf.ComplexList {

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
  public get(index: number): OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyOutputReference {
    return new OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUri {
}

export function oauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriToTerraform(struct?: OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUri): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function oauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriToHclTerraform(struct?: OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUri): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUri | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUri | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriList extends cdktf.ComplexList {

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
  public get(index: number): OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference {
    return new OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpoints {
}

export function oauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsToTerraform(struct?: OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function oauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsToHclTerraform(struct?: OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsList extends cdktf.ComplexList {

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
  public get(index: number): OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference {
    return new OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpoints {
}

export function oauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsToTerraform(struct?: OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function oauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsToHclTerraform(struct?: OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsList extends cdktf.ComplexList {

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
  public get(index: number): OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsOutputReference {
    return new OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpoint {
}

export function oauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointToTerraform(struct?: OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function oauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointToHclTerraform(struct?: OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointList extends cdktf.ComplexList {

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
  public get(index: number): OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointOutputReference {
    return new OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientId {
}

export function oauthIntegrationForPartnerApplicationsDescribeOutputOauthClientIdToTerraform(struct?: OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientId): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function oauthIntegrationForPartnerApplicationsDescribeOutputOauthClientIdToHclTerraform(struct?: OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientId): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientIdOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientId | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientId | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientIdList extends cdktf.ComplexList {

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
  public get(index: number): OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientIdOutputReference {
    return new OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientIdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2Fp {
}

export function oauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpToTerraform(struct?: OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2Fp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function oauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpToHclTerraform(struct?: OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2Fp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2Fp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2Fp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpList extends cdktf.ComplexList {

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
  public get(index: number): OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpOutputReference {
    return new OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFp {
}

export function oauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpToTerraform(struct?: OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function oauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpToHclTerraform(struct?: OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpList extends cdktf.ComplexList {

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
  public get(index: number): OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpOutputReference {
    return new OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientType {
}

export function oauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeToTerraform(struct?: OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function oauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeToHclTerraform(struct?: OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeList extends cdktf.ComplexList {

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
  public get(index: number): OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeOutputReference {
    return new OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkce {
}

export function oauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceToTerraform(struct?: OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkce): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function oauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceToHclTerraform(struct?: OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkce): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkce | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkce | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceList extends cdktf.ComplexList {

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
  public get(index: number): OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceOutputReference {
    return new OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokens {
}

export function oauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensToTerraform(struct?: OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokens): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function oauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensToHclTerraform(struct?: OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokens): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokens | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokens | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensList extends cdktf.ComplexList {

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
  public get(index: number): OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensOutputReference {
    return new OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OauthIntegrationForPartnerApplicationsDescribeOutputOauthRedirectUri {
}

export function oauthIntegrationForPartnerApplicationsDescribeOutputOauthRedirectUriToTerraform(struct?: OauthIntegrationForPartnerApplicationsDescribeOutputOauthRedirectUri): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function oauthIntegrationForPartnerApplicationsDescribeOutputOauthRedirectUriToHclTerraform(struct?: OauthIntegrationForPartnerApplicationsDescribeOutputOauthRedirectUri): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OauthIntegrationForPartnerApplicationsDescribeOutputOauthRedirectUriOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OauthIntegrationForPartnerApplicationsDescribeOutputOauthRedirectUri | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OauthIntegrationForPartnerApplicationsDescribeOutputOauthRedirectUri | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class OauthIntegrationForPartnerApplicationsDescribeOutputOauthRedirectUriList extends cdktf.ComplexList {

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
  public get(index: number): OauthIntegrationForPartnerApplicationsDescribeOutputOauthRedirectUriOutputReference {
    return new OauthIntegrationForPartnerApplicationsDescribeOutputOauthRedirectUriOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidity {
}

export function oauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityToTerraform(struct?: OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function oauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityToHclTerraform(struct?: OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityList extends cdktf.ComplexList {

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
  public get(index: number): OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityOutputReference {
    return new OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpoint {
}

export function oauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointToTerraform(struct?: OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function oauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointToHclTerraform(struct?: OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointList extends cdktf.ComplexList {

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
  public get(index: number): OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointOutputReference {
    return new OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRoles {
}

export function oauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesToTerraform(struct?: OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRoles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function oauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesToHclTerraform(struct?: OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRoles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRoles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRoles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesList extends cdktf.ComplexList {

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
  public get(index: number): OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesOutputReference {
    return new OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStruct {
}

export function oauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructToTerraform(struct?: OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function oauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructToHclTerraform(struct?: OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructList extends cdktf.ComplexList {

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
  public get(index: number): OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructOutputReference {
    return new OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OauthIntegrationForPartnerApplicationsDescribeOutput {
}

export function oauthIntegrationForPartnerApplicationsDescribeOutputToTerraform(struct?: OauthIntegrationForPartnerApplicationsDescribeOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function oauthIntegrationForPartnerApplicationsDescribeOutputToHclTerraform(struct?: OauthIntegrationForPartnerApplicationsDescribeOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OauthIntegrationForPartnerApplicationsDescribeOutputOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OauthIntegrationForPartnerApplicationsDescribeOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OauthIntegrationForPartnerApplicationsDescribeOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // blocked_roles_list - computed: true, optional: false, required: false
  private _blockedRolesList = new OauthIntegrationForPartnerApplicationsDescribeOutputBlockedRolesListStructList(this, "blocked_roles_list", false);
  public get blockedRolesList() {
    return this._blockedRolesList;
  }

  // comment - computed: true, optional: false, required: false
  private _comment = new OauthIntegrationForPartnerApplicationsDescribeOutputCommentList(this, "comment", false);
  public get comment() {
    return this._comment;
  }

  // enabled - computed: true, optional: false, required: false
  private _enabled = new OauthIntegrationForPartnerApplicationsDescribeOutputEnabledList(this, "enabled", false);
  public get enabled() {
    return this._enabled;
  }

  // network_policy - computed: true, optional: false, required: false
  private _networkPolicy = new OauthIntegrationForPartnerApplicationsDescribeOutputNetworkPolicyList(this, "network_policy", false);
  public get networkPolicy() {
    return this._networkPolicy;
  }

  // oauth_allow_non_tls_redirect_uri - computed: true, optional: false, required: false
  private _oauthAllowNonTlsRedirectUri = new OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowNonTlsRedirectUriList(this, "oauth_allow_non_tls_redirect_uri", false);
  public get oauthAllowNonTlsRedirectUri() {
    return this._oauthAllowNonTlsRedirectUri;
  }

  // oauth_allowed_authorization_endpoints - computed: true, optional: false, required: false
  private _oauthAllowedAuthorizationEndpoints = new OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedAuthorizationEndpointsList(this, "oauth_allowed_authorization_endpoints", false);
  public get oauthAllowedAuthorizationEndpoints() {
    return this._oauthAllowedAuthorizationEndpoints;
  }

  // oauth_allowed_token_endpoints - computed: true, optional: false, required: false
  private _oauthAllowedTokenEndpoints = new OauthIntegrationForPartnerApplicationsDescribeOutputOauthAllowedTokenEndpointsList(this, "oauth_allowed_token_endpoints", false);
  public get oauthAllowedTokenEndpoints() {
    return this._oauthAllowedTokenEndpoints;
  }

  // oauth_authorization_endpoint - computed: true, optional: false, required: false
  private _oauthAuthorizationEndpoint = new OauthIntegrationForPartnerApplicationsDescribeOutputOauthAuthorizationEndpointList(this, "oauth_authorization_endpoint", false);
  public get oauthAuthorizationEndpoint() {
    return this._oauthAuthorizationEndpoint;
  }

  // oauth_client_id - computed: true, optional: false, required: false
  private _oauthClientId = new OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientIdList(this, "oauth_client_id", false);
  public get oauthClientId() {
    return this._oauthClientId;
  }

  // oauth_client_rsa_public_key_2_fp - computed: true, optional: false, required: false
  private _oauthClientRsaPublicKey2Fp = new OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKey2FpList(this, "oauth_client_rsa_public_key_2_fp", false);
  public get oauthClientRsaPublicKey2Fp() {
    return this._oauthClientRsaPublicKey2Fp;
  }

  // oauth_client_rsa_public_key_fp - computed: true, optional: false, required: false
  private _oauthClientRsaPublicKeyFp = new OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientRsaPublicKeyFpList(this, "oauth_client_rsa_public_key_fp", false);
  public get oauthClientRsaPublicKeyFp() {
    return this._oauthClientRsaPublicKeyFp;
  }

  // oauth_client_type - computed: true, optional: false, required: false
  private _oauthClientType = new OauthIntegrationForPartnerApplicationsDescribeOutputOauthClientTypeList(this, "oauth_client_type", false);
  public get oauthClientType() {
    return this._oauthClientType;
  }

  // oauth_enforce_pkce - computed: true, optional: false, required: false
  private _oauthEnforcePkce = new OauthIntegrationForPartnerApplicationsDescribeOutputOauthEnforcePkceList(this, "oauth_enforce_pkce", false);
  public get oauthEnforcePkce() {
    return this._oauthEnforcePkce;
  }

  // oauth_issue_refresh_tokens - computed: true, optional: false, required: false
  private _oauthIssueRefreshTokens = new OauthIntegrationForPartnerApplicationsDescribeOutputOauthIssueRefreshTokensList(this, "oauth_issue_refresh_tokens", false);
  public get oauthIssueRefreshTokens() {
    return this._oauthIssueRefreshTokens;
  }

  // oauth_redirect_uri - computed: true, optional: false, required: false
  private _oauthRedirectUri = new OauthIntegrationForPartnerApplicationsDescribeOutputOauthRedirectUriList(this, "oauth_redirect_uri", false);
  public get oauthRedirectUri() {
    return this._oauthRedirectUri;
  }

  // oauth_refresh_token_validity - computed: true, optional: false, required: false
  private _oauthRefreshTokenValidity = new OauthIntegrationForPartnerApplicationsDescribeOutputOauthRefreshTokenValidityList(this, "oauth_refresh_token_validity", false);
  public get oauthRefreshTokenValidity() {
    return this._oauthRefreshTokenValidity;
  }

  // oauth_token_endpoint - computed: true, optional: false, required: false
  private _oauthTokenEndpoint = new OauthIntegrationForPartnerApplicationsDescribeOutputOauthTokenEndpointList(this, "oauth_token_endpoint", false);
  public get oauthTokenEndpoint() {
    return this._oauthTokenEndpoint;
  }

  // oauth_use_secondary_roles - computed: true, optional: false, required: false
  private _oauthUseSecondaryRoles = new OauthIntegrationForPartnerApplicationsDescribeOutputOauthUseSecondaryRolesList(this, "oauth_use_secondary_roles", false);
  public get oauthUseSecondaryRoles() {
    return this._oauthUseSecondaryRoles;
  }

  // pre_authorized_roles_list - computed: true, optional: false, required: false
  private _preAuthorizedRolesList = new OauthIntegrationForPartnerApplicationsDescribeOutputPreAuthorizedRolesListStructList(this, "pre_authorized_roles_list", false);
  public get preAuthorizedRolesList() {
    return this._preAuthorizedRolesList;
  }
}

export class OauthIntegrationForPartnerApplicationsDescribeOutputList extends cdktf.ComplexList {

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
  public get(index: number): OauthIntegrationForPartnerApplicationsDescribeOutputOutputReference {
    return new OauthIntegrationForPartnerApplicationsDescribeOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OauthIntegrationForPartnerApplicationsShowOutput {
}

export function oauthIntegrationForPartnerApplicationsShowOutputToTerraform(struct?: OauthIntegrationForPartnerApplicationsShowOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function oauthIntegrationForPartnerApplicationsShowOutputToHclTerraform(struct?: OauthIntegrationForPartnerApplicationsShowOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OauthIntegrationForPartnerApplicationsShowOutputOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OauthIntegrationForPartnerApplicationsShowOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OauthIntegrationForPartnerApplicationsShowOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // integration_type - computed: true, optional: false, required: false
  public get integrationType() {
    return this.getStringAttribute('integration_type');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class OauthIntegrationForPartnerApplicationsShowOutputList extends cdktf.ComplexList {

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
  public get(index: number): OauthIntegrationForPartnerApplicationsShowOutputOutputReference {
    return new OauthIntegrationForPartnerApplicationsShowOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.93.0/docs/resources/oauth_integration_for_partner_applications snowflake_oauth_integration_for_partner_applications}
*/
export class OauthIntegrationForPartnerApplications extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_oauth_integration_for_partner_applications";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OauthIntegrationForPartnerApplications resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OauthIntegrationForPartnerApplications to import
  * @param importFromId The id of the existing OauthIntegrationForPartnerApplications that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.93.0/docs/resources/oauth_integration_for_partner_applications#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OauthIntegrationForPartnerApplications to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_oauth_integration_for_partner_applications", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.93.0/docs/resources/oauth_integration_for_partner_applications snowflake_oauth_integration_for_partner_applications} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OauthIntegrationForPartnerApplicationsConfig
  */
  public constructor(scope: Construct, id: string, config: OauthIntegrationForPartnerApplicationsConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_oauth_integration_for_partner_applications',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '0.93.0',
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
    this._blockedRolesList = config.blockedRolesList;
    this._comment = config.comment;
    this._enabled = config.enabled;
    this._id = config.id;
    this._name = config.name;
    this._oauthClient = config.oauthClient;
    this._oauthIssueRefreshTokens = config.oauthIssueRefreshTokens;
    this._oauthRedirectUri = config.oauthRedirectUri;
    this._oauthRefreshTokenValidity = config.oauthRefreshTokenValidity;
    this._oauthUseSecondaryRoles = config.oauthUseSecondaryRoles;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // blocked_roles_list - computed: false, optional: false, required: true
  private _blockedRolesList?: string[]; 
  public get blockedRolesList() {
    return cdktf.Fn.tolist(this.getListAttribute('blocked_roles_list'));
  }
  public set blockedRolesList(value: string[]) {
    this._blockedRolesList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedRolesListInput() {
    return this._blockedRolesList;
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

  // describe_output - computed: true, optional: false, required: false
  private _describeOutput = new OauthIntegrationForPartnerApplicationsDescribeOutputList(this, "describe_output", false);
  public get describeOutput() {
    return this._describeOutput;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: string; 
  public get enabled() {
    return this.getStringAttribute('enabled');
  }
  public set enabled(value: string) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // oauth_client - computed: false, optional: false, required: true
  private _oauthClient?: string; 
  public get oauthClient() {
    return this.getStringAttribute('oauth_client');
  }
  public set oauthClient(value: string) {
    this._oauthClient = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthClientInput() {
    return this._oauthClient;
  }

  // oauth_issue_refresh_tokens - computed: false, optional: true, required: false
  private _oauthIssueRefreshTokens?: string; 
  public get oauthIssueRefreshTokens() {
    return this.getStringAttribute('oauth_issue_refresh_tokens');
  }
  public set oauthIssueRefreshTokens(value: string) {
    this._oauthIssueRefreshTokens = value;
  }
  public resetOauthIssueRefreshTokens() {
    this._oauthIssueRefreshTokens = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthIssueRefreshTokensInput() {
    return this._oauthIssueRefreshTokens;
  }

  // oauth_redirect_uri - computed: false, optional: true, required: false
  private _oauthRedirectUri?: string; 
  public get oauthRedirectUri() {
    return this.getStringAttribute('oauth_redirect_uri');
  }
  public set oauthRedirectUri(value: string) {
    this._oauthRedirectUri = value;
  }
  public resetOauthRedirectUri() {
    this._oauthRedirectUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthRedirectUriInput() {
    return this._oauthRedirectUri;
  }

  // oauth_refresh_token_validity - computed: false, optional: true, required: false
  private _oauthRefreshTokenValidity?: number; 
  public get oauthRefreshTokenValidity() {
    return this.getNumberAttribute('oauth_refresh_token_validity');
  }
  public set oauthRefreshTokenValidity(value: number) {
    this._oauthRefreshTokenValidity = value;
  }
  public resetOauthRefreshTokenValidity() {
    this._oauthRefreshTokenValidity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthRefreshTokenValidityInput() {
    return this._oauthRefreshTokenValidity;
  }

  // oauth_use_secondary_roles - computed: false, optional: true, required: false
  private _oauthUseSecondaryRoles?: string; 
  public get oauthUseSecondaryRoles() {
    return this.getStringAttribute('oauth_use_secondary_roles');
  }
  public set oauthUseSecondaryRoles(value: string) {
    this._oauthUseSecondaryRoles = value;
  }
  public resetOauthUseSecondaryRoles() {
    this._oauthUseSecondaryRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthUseSecondaryRolesInput() {
    return this._oauthUseSecondaryRoles;
  }

  // show_output - computed: true, optional: false, required: false
  private _showOutput = new OauthIntegrationForPartnerApplicationsShowOutputList(this, "show_output", false);
  public get showOutput() {
    return this._showOutput;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      blocked_roles_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._blockedRolesList),
      comment: cdktf.stringToTerraform(this._comment),
      enabled: cdktf.stringToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      oauth_client: cdktf.stringToTerraform(this._oauthClient),
      oauth_issue_refresh_tokens: cdktf.stringToTerraform(this._oauthIssueRefreshTokens),
      oauth_redirect_uri: cdktf.stringToTerraform(this._oauthRedirectUri),
      oauth_refresh_token_validity: cdktf.numberToTerraform(this._oauthRefreshTokenValidity),
      oauth_use_secondary_roles: cdktf.stringToTerraform(this._oauthUseSecondaryRoles),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      blocked_roles_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._blockedRolesList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.stringToHclTerraform(this._enabled),
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
      oauth_client: {
        value: cdktf.stringToHclTerraform(this._oauthClient),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth_issue_refresh_tokens: {
        value: cdktf.stringToHclTerraform(this._oauthIssueRefreshTokens),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth_redirect_uri: {
        value: cdktf.stringToHclTerraform(this._oauthRedirectUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth_refresh_token_validity: {
        value: cdktf.numberToHclTerraform(this._oauthRefreshTokenValidity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      oauth_use_secondary_roles: {
        value: cdktf.stringToHclTerraform(this._oauthUseSecondaryRoles),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
