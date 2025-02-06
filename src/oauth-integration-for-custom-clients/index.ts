/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.3/docs/resources/oauth_integration_for_custom_clients
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OauthIntegrationForCustomClientsConfig extends cdktf.TerraformMetaArguments {
  /**
  * A set of Snowflake roles that a user cannot explicitly consent to using after authenticating. By default, this list includes the ACCOUNTADMIN, ORGADMIN and SECURITYADMIN roles. To remove these privileged roles from the list, use the ALTER ACCOUNT command to set the OAUTH_ADD_PRIVILEGED_ROLES_TO_BLOCKED_LIST account parameter to FALSE. For more information about this resource, see [docs](./account_role).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.3/docs/resources/oauth_integration_for_custom_clients#blocked_roles_list OauthIntegrationForCustomClients#blocked_roles_list}
  */
  readonly blockedRolesList?: string[];
  /**
  * Specifies a comment for the OAuth integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.3/docs/resources/oauth_integration_for_custom_clients#comment OauthIntegrationForCustomClients#comment}
  */
  readonly comment?: string;
  /**
  * Specifies whether this OAuth integration is enabled or disabled. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.3/docs/resources/oauth_integration_for_custom_clients#enabled OauthIntegrationForCustomClients#enabled}
  */
  readonly enabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.3/docs/resources/oauth_integration_for_custom_clients#id OauthIntegrationForCustomClients#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the name of the OAuth integration. This name follows the rules for Object Identifiers. The name should be unique among security integrations in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.3/docs/resources/oauth_integration_for_custom_clients#name OauthIntegrationForCustomClients#name}
  */
  readonly name: string;
  /**
  * Specifies an existing network policy. This network policy controls network traffic that is attempting to exchange an authorization code for an access or refresh token or to use a refresh token to obtain a new access token. For more information about this resource, see [docs](./network_policy).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.3/docs/resources/oauth_integration_for_custom_clients#network_policy OauthIntegrationForCustomClients#network_policy}
  */
  readonly networkPolicy?: string;
  /**
  * If true, allows setting oauth_redirect_uri to a URI not protected by TLS. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.3/docs/resources/oauth_integration_for_custom_clients#oauth_allow_non_tls_redirect_uri OauthIntegrationForCustomClients#oauth_allow_non_tls_redirect_uri}
  */
  readonly oauthAllowNonTlsRedirectUri?: string;
  /**
  * Specifies a Base64-encoded RSA public key, without the -----BEGIN PUBLIC KEY----- and -----END PUBLIC KEY----- headers. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.3/docs/resources/oauth_integration_for_custom_clients#oauth_client_rsa_public_key OauthIntegrationForCustomClients#oauth_client_rsa_public_key}
  */
  readonly oauthClientRsaPublicKey?: string;
  /**
  * Specifies a Base64-encoded RSA public key, without the -----BEGIN PUBLIC KEY----- and -----END PUBLIC KEY----- headers. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.3/docs/resources/oauth_integration_for_custom_clients#oauth_client_rsa_public_key_2 OauthIntegrationForCustomClients#oauth_client_rsa_public_key_2}
  */
  readonly oauthClientRsaPublicKey2?: string;
  /**
  * Specifies the type of client being registered. Snowflake supports both confidential and public clients. Valid options are: `PUBLIC` | `CONFIDENTIAL`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.3/docs/resources/oauth_integration_for_custom_clients#oauth_client_type OauthIntegrationForCustomClients#oauth_client_type}
  */
  readonly oauthClientType: string;
  /**
  * Boolean that specifies whether Proof Key for Code Exchange (PKCE) should be required for the integration. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.3/docs/resources/oauth_integration_for_custom_clients#oauth_enforce_pkce OauthIntegrationForCustomClients#oauth_enforce_pkce}
  */
  readonly oauthEnforcePkce?: string;
  /**
  * Specifies whether to allow the client to exchange a refresh token for an access token when the current access token has expired. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.3/docs/resources/oauth_integration_for_custom_clients#oauth_issue_refresh_tokens OauthIntegrationForCustomClients#oauth_issue_refresh_tokens}
  */
  readonly oauthIssueRefreshTokens?: string;
  /**
  * Specifies the client URI. After a user is authenticated, the web browser is redirected to this URI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.3/docs/resources/oauth_integration_for_custom_clients#oauth_redirect_uri OauthIntegrationForCustomClients#oauth_redirect_uri}
  */
  readonly oauthRedirectUri: string;
  /**
  * Specifies how long refresh tokens should be valid (in seconds). OAUTH_ISSUE_REFRESH_TOKENS must be set to TRUE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.3/docs/resources/oauth_integration_for_custom_clients#oauth_refresh_token_validity OauthIntegrationForCustomClients#oauth_refresh_token_validity}
  */
  readonly oauthRefreshTokenValidity?: number;
  /**
  * Specifies whether default secondary roles set in the user properties are activated by default in the session being opened. Valid options are: `IMPLICIT` | `NONE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.3/docs/resources/oauth_integration_for_custom_clients#oauth_use_secondary_roles OauthIntegrationForCustomClients#oauth_use_secondary_roles}
  */
  readonly oauthUseSecondaryRoles?: string;
  /**
  * A set of Snowflake roles that a user does not need to explicitly consent to using after authenticating. For more information about this resource, see [docs](./account_role).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.3/docs/resources/oauth_integration_for_custom_clients#pre_authorized_roles_list OauthIntegrationForCustomClients#pre_authorized_roles_list}
  */
  readonly preAuthorizedRolesList?: string[];
}
export interface OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStruct {
}

export function oauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructToTerraform(struct?: OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function oauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructToHclTerraform(struct?: OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStruct | undefined) {
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

export class OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructList extends cdktf.ComplexList {

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
  public get(index: number): OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructOutputReference {
    return new OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OauthIntegrationForCustomClientsDescribeOutputComment {
}

export function oauthIntegrationForCustomClientsDescribeOutputCommentToTerraform(struct?: OauthIntegrationForCustomClientsDescribeOutputComment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function oauthIntegrationForCustomClientsDescribeOutputCommentToHclTerraform(struct?: OauthIntegrationForCustomClientsDescribeOutputComment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OauthIntegrationForCustomClientsDescribeOutputCommentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OauthIntegrationForCustomClientsDescribeOutputComment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OauthIntegrationForCustomClientsDescribeOutputComment | undefined) {
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

export class OauthIntegrationForCustomClientsDescribeOutputCommentList extends cdktf.ComplexList {

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
  public get(index: number): OauthIntegrationForCustomClientsDescribeOutputCommentOutputReference {
    return new OauthIntegrationForCustomClientsDescribeOutputCommentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OauthIntegrationForCustomClientsDescribeOutputEnabled {
}

export function oauthIntegrationForCustomClientsDescribeOutputEnabledToTerraform(struct?: OauthIntegrationForCustomClientsDescribeOutputEnabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function oauthIntegrationForCustomClientsDescribeOutputEnabledToHclTerraform(struct?: OauthIntegrationForCustomClientsDescribeOutputEnabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OauthIntegrationForCustomClientsDescribeOutputEnabledOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OauthIntegrationForCustomClientsDescribeOutputEnabled | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OauthIntegrationForCustomClientsDescribeOutputEnabled | undefined) {
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

export class OauthIntegrationForCustomClientsDescribeOutputEnabledList extends cdktf.ComplexList {

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
  public get(index: number): OauthIntegrationForCustomClientsDescribeOutputEnabledOutputReference {
    return new OauthIntegrationForCustomClientsDescribeOutputEnabledOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OauthIntegrationForCustomClientsDescribeOutputNetworkPolicy {
}

export function oauthIntegrationForCustomClientsDescribeOutputNetworkPolicyToTerraform(struct?: OauthIntegrationForCustomClientsDescribeOutputNetworkPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function oauthIntegrationForCustomClientsDescribeOutputNetworkPolicyToHclTerraform(struct?: OauthIntegrationForCustomClientsDescribeOutputNetworkPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OauthIntegrationForCustomClientsDescribeOutputNetworkPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OauthIntegrationForCustomClientsDescribeOutputNetworkPolicy | undefined) {
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

export class OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyList extends cdktf.ComplexList {

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
  public get(index: number): OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyOutputReference {
    return new OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUri {
}

export function oauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriToTerraform(struct?: OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUri): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function oauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriToHclTerraform(struct?: OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUri): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUri | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUri | undefined) {
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

export class OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriList extends cdktf.ComplexList {

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
  public get(index: number): OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference {
    return new OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpoints {
}

export function oauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsToTerraform(struct?: OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function oauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsToHclTerraform(struct?: OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpoints | undefined) {
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

export class OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsList extends cdktf.ComplexList {

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
  public get(index: number): OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference {
    return new OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpoints {
}

export function oauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsToTerraform(struct?: OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function oauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsToHclTerraform(struct?: OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpoints | undefined) {
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

export class OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsList extends cdktf.ComplexList {

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
  public get(index: number): OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsOutputReference {
    return new OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpoint {
}

export function oauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointToTerraform(struct?: OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function oauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointToHclTerraform(struct?: OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpoint | undefined) {
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

export class OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointList extends cdktf.ComplexList {

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
  public get(index: number): OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointOutputReference {
    return new OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OauthIntegrationForCustomClientsDescribeOutputOauthClientId {
}

export function oauthIntegrationForCustomClientsDescribeOutputOauthClientIdToTerraform(struct?: OauthIntegrationForCustomClientsDescribeOutputOauthClientId): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function oauthIntegrationForCustomClientsDescribeOutputOauthClientIdToHclTerraform(struct?: OauthIntegrationForCustomClientsDescribeOutputOauthClientId): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OauthIntegrationForCustomClientsDescribeOutputOauthClientIdOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OauthIntegrationForCustomClientsDescribeOutputOauthClientId | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OauthIntegrationForCustomClientsDescribeOutputOauthClientId | undefined) {
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

export class OauthIntegrationForCustomClientsDescribeOutputOauthClientIdList extends cdktf.ComplexList {

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
  public get(index: number): OauthIntegrationForCustomClientsDescribeOutputOauthClientIdOutputReference {
    return new OauthIntegrationForCustomClientsDescribeOutputOauthClientIdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2Fp {
}

export function oauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpToTerraform(struct?: OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2Fp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function oauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpToHclTerraform(struct?: OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2Fp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2Fp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2Fp | undefined) {
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

export class OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpList extends cdktf.ComplexList {

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
  public get(index: number): OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpOutputReference {
    return new OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFp {
}

export function oauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpToTerraform(struct?: OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function oauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpToHclTerraform(struct?: OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFp | undefined) {
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

export class OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpList extends cdktf.ComplexList {

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
  public get(index: number): OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpOutputReference {
    return new OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OauthIntegrationForCustomClientsDescribeOutputOauthClientType {
}

export function oauthIntegrationForCustomClientsDescribeOutputOauthClientTypeToTerraform(struct?: OauthIntegrationForCustomClientsDescribeOutputOauthClientType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function oauthIntegrationForCustomClientsDescribeOutputOauthClientTypeToHclTerraform(struct?: OauthIntegrationForCustomClientsDescribeOutputOauthClientType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OauthIntegrationForCustomClientsDescribeOutputOauthClientType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OauthIntegrationForCustomClientsDescribeOutputOauthClientType | undefined) {
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

export class OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeList extends cdktf.ComplexList {

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
  public get(index: number): OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeOutputReference {
    return new OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkce {
}

export function oauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceToTerraform(struct?: OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkce): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function oauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceToHclTerraform(struct?: OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkce): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkce | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkce | undefined) {
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

export class OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceList extends cdktf.ComplexList {

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
  public get(index: number): OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceOutputReference {
    return new OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokens {
}

export function oauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensToTerraform(struct?: OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokens): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function oauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensToHclTerraform(struct?: OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokens): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokens | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokens | undefined) {
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

export class OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensList extends cdktf.ComplexList {

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
  public get(index: number): OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensOutputReference {
    return new OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUri {
}

export function oauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriToTerraform(struct?: OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUri): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function oauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriToHclTerraform(struct?: OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUri): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUri | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUri | undefined) {
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

export class OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriList extends cdktf.ComplexList {

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
  public get(index: number): OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriOutputReference {
    return new OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidity {
}

export function oauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityToTerraform(struct?: OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function oauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityToHclTerraform(struct?: OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidity | undefined) {
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

export class OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityList extends cdktf.ComplexList {

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
  public get(index: number): OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityOutputReference {
    return new OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpoint {
}

export function oauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointToTerraform(struct?: OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function oauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointToHclTerraform(struct?: OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpoint | undefined) {
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

export class OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointList extends cdktf.ComplexList {

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
  public get(index: number): OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointOutputReference {
    return new OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRoles {
}

export function oauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesToTerraform(struct?: OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRoles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function oauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesToHclTerraform(struct?: OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRoles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRoles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRoles | undefined) {
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

export class OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesList extends cdktf.ComplexList {

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
  public get(index: number): OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesOutputReference {
    return new OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStruct {
}

export function oauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructToTerraform(struct?: OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function oauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructToHclTerraform(struct?: OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStruct | undefined) {
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

export class OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructList extends cdktf.ComplexList {

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
  public get(index: number): OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructOutputReference {
    return new OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OauthIntegrationForCustomClientsDescribeOutput {
}

export function oauthIntegrationForCustomClientsDescribeOutputToTerraform(struct?: OauthIntegrationForCustomClientsDescribeOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function oauthIntegrationForCustomClientsDescribeOutputToHclTerraform(struct?: OauthIntegrationForCustomClientsDescribeOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OauthIntegrationForCustomClientsDescribeOutputOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OauthIntegrationForCustomClientsDescribeOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OauthIntegrationForCustomClientsDescribeOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // blocked_roles_list - computed: true, optional: false, required: false
  private _blockedRolesList = new OauthIntegrationForCustomClientsDescribeOutputBlockedRolesListStructList(this, "blocked_roles_list", false);
  public get blockedRolesList() {
    return this._blockedRolesList;
  }

  // comment - computed: true, optional: false, required: false
  private _comment = new OauthIntegrationForCustomClientsDescribeOutputCommentList(this, "comment", false);
  public get comment() {
    return this._comment;
  }

  // enabled - computed: true, optional: false, required: false
  private _enabled = new OauthIntegrationForCustomClientsDescribeOutputEnabledList(this, "enabled", false);
  public get enabled() {
    return this._enabled;
  }

  // network_policy - computed: true, optional: false, required: false
  private _networkPolicy = new OauthIntegrationForCustomClientsDescribeOutputNetworkPolicyList(this, "network_policy", false);
  public get networkPolicy() {
    return this._networkPolicy;
  }

  // oauth_allow_non_tls_redirect_uri - computed: true, optional: false, required: false
  private _oauthAllowNonTlsRedirectUri = new OauthIntegrationForCustomClientsDescribeOutputOauthAllowNonTlsRedirectUriList(this, "oauth_allow_non_tls_redirect_uri", false);
  public get oauthAllowNonTlsRedirectUri() {
    return this._oauthAllowNonTlsRedirectUri;
  }

  // oauth_allowed_authorization_endpoints - computed: true, optional: false, required: false
  private _oauthAllowedAuthorizationEndpoints = new OauthIntegrationForCustomClientsDescribeOutputOauthAllowedAuthorizationEndpointsList(this, "oauth_allowed_authorization_endpoints", false);
  public get oauthAllowedAuthorizationEndpoints() {
    return this._oauthAllowedAuthorizationEndpoints;
  }

  // oauth_allowed_token_endpoints - computed: true, optional: false, required: false
  private _oauthAllowedTokenEndpoints = new OauthIntegrationForCustomClientsDescribeOutputOauthAllowedTokenEndpointsList(this, "oauth_allowed_token_endpoints", false);
  public get oauthAllowedTokenEndpoints() {
    return this._oauthAllowedTokenEndpoints;
  }

  // oauth_authorization_endpoint - computed: true, optional: false, required: false
  private _oauthAuthorizationEndpoint = new OauthIntegrationForCustomClientsDescribeOutputOauthAuthorizationEndpointList(this, "oauth_authorization_endpoint", false);
  public get oauthAuthorizationEndpoint() {
    return this._oauthAuthorizationEndpoint;
  }

  // oauth_client_id - computed: true, optional: false, required: false
  private _oauthClientId = new OauthIntegrationForCustomClientsDescribeOutputOauthClientIdList(this, "oauth_client_id", false);
  public get oauthClientId() {
    return this._oauthClientId;
  }

  // oauth_client_rsa_public_key_2_fp - computed: true, optional: false, required: false
  private _oauthClientRsaPublicKey2Fp = new OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKey2FpList(this, "oauth_client_rsa_public_key_2_fp", false);
  public get oauthClientRsaPublicKey2Fp() {
    return this._oauthClientRsaPublicKey2Fp;
  }

  // oauth_client_rsa_public_key_fp - computed: true, optional: false, required: false
  private _oauthClientRsaPublicKeyFp = new OauthIntegrationForCustomClientsDescribeOutputOauthClientRsaPublicKeyFpList(this, "oauth_client_rsa_public_key_fp", false);
  public get oauthClientRsaPublicKeyFp() {
    return this._oauthClientRsaPublicKeyFp;
  }

  // oauth_client_type - computed: true, optional: false, required: false
  private _oauthClientType = new OauthIntegrationForCustomClientsDescribeOutputOauthClientTypeList(this, "oauth_client_type", false);
  public get oauthClientType() {
    return this._oauthClientType;
  }

  // oauth_enforce_pkce - computed: true, optional: false, required: false
  private _oauthEnforcePkce = new OauthIntegrationForCustomClientsDescribeOutputOauthEnforcePkceList(this, "oauth_enforce_pkce", false);
  public get oauthEnforcePkce() {
    return this._oauthEnforcePkce;
  }

  // oauth_issue_refresh_tokens - computed: true, optional: false, required: false
  private _oauthIssueRefreshTokens = new OauthIntegrationForCustomClientsDescribeOutputOauthIssueRefreshTokensList(this, "oauth_issue_refresh_tokens", false);
  public get oauthIssueRefreshTokens() {
    return this._oauthIssueRefreshTokens;
  }

  // oauth_redirect_uri - computed: true, optional: false, required: false
  private _oauthRedirectUri = new OauthIntegrationForCustomClientsDescribeOutputOauthRedirectUriList(this, "oauth_redirect_uri", false);
  public get oauthRedirectUri() {
    return this._oauthRedirectUri;
  }

  // oauth_refresh_token_validity - computed: true, optional: false, required: false
  private _oauthRefreshTokenValidity = new OauthIntegrationForCustomClientsDescribeOutputOauthRefreshTokenValidityList(this, "oauth_refresh_token_validity", false);
  public get oauthRefreshTokenValidity() {
    return this._oauthRefreshTokenValidity;
  }

  // oauth_token_endpoint - computed: true, optional: false, required: false
  private _oauthTokenEndpoint = new OauthIntegrationForCustomClientsDescribeOutputOauthTokenEndpointList(this, "oauth_token_endpoint", false);
  public get oauthTokenEndpoint() {
    return this._oauthTokenEndpoint;
  }

  // oauth_use_secondary_roles - computed: true, optional: false, required: false
  private _oauthUseSecondaryRoles = new OauthIntegrationForCustomClientsDescribeOutputOauthUseSecondaryRolesList(this, "oauth_use_secondary_roles", false);
  public get oauthUseSecondaryRoles() {
    return this._oauthUseSecondaryRoles;
  }

  // pre_authorized_roles_list - computed: true, optional: false, required: false
  private _preAuthorizedRolesList = new OauthIntegrationForCustomClientsDescribeOutputPreAuthorizedRolesListStructList(this, "pre_authorized_roles_list", false);
  public get preAuthorizedRolesList() {
    return this._preAuthorizedRolesList;
  }
}

export class OauthIntegrationForCustomClientsDescribeOutputList extends cdktf.ComplexList {

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
  public get(index: number): OauthIntegrationForCustomClientsDescribeOutputOutputReference {
    return new OauthIntegrationForCustomClientsDescribeOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OauthIntegrationForCustomClientsRelatedParametersOauthAddPrivilegedRolesToBlockedListStruct {
}

export function oauthIntegrationForCustomClientsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructToTerraform(struct?: OauthIntegrationForCustomClientsRelatedParametersOauthAddPrivilegedRolesToBlockedListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function oauthIntegrationForCustomClientsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructToHclTerraform(struct?: OauthIntegrationForCustomClientsRelatedParametersOauthAddPrivilegedRolesToBlockedListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OauthIntegrationForCustomClientsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OauthIntegrationForCustomClientsRelatedParametersOauthAddPrivilegedRolesToBlockedListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OauthIntegrationForCustomClientsRelatedParametersOauthAddPrivilegedRolesToBlockedListStruct | undefined) {
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

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class OauthIntegrationForCustomClientsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructList extends cdktf.ComplexList {

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
  public get(index: number): OauthIntegrationForCustomClientsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructOutputReference {
    return new OauthIntegrationForCustomClientsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OauthIntegrationForCustomClientsRelatedParameters {
}

export function oauthIntegrationForCustomClientsRelatedParametersToTerraform(struct?: OauthIntegrationForCustomClientsRelatedParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function oauthIntegrationForCustomClientsRelatedParametersToHclTerraform(struct?: OauthIntegrationForCustomClientsRelatedParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OauthIntegrationForCustomClientsRelatedParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OauthIntegrationForCustomClientsRelatedParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OauthIntegrationForCustomClientsRelatedParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // oauth_add_privileged_roles_to_blocked_list - computed: true, optional: false, required: false
  private _oauthAddPrivilegedRolesToBlockedList = new OauthIntegrationForCustomClientsRelatedParametersOauthAddPrivilegedRolesToBlockedListStructList(this, "oauth_add_privileged_roles_to_blocked_list", false);
  public get oauthAddPrivilegedRolesToBlockedList() {
    return this._oauthAddPrivilegedRolesToBlockedList;
  }
}

export class OauthIntegrationForCustomClientsRelatedParametersList extends cdktf.ComplexList {

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
  public get(index: number): OauthIntegrationForCustomClientsRelatedParametersOutputReference {
    return new OauthIntegrationForCustomClientsRelatedParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OauthIntegrationForCustomClientsShowOutput {
}

export function oauthIntegrationForCustomClientsShowOutputToTerraform(struct?: OauthIntegrationForCustomClientsShowOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function oauthIntegrationForCustomClientsShowOutputToHclTerraform(struct?: OauthIntegrationForCustomClientsShowOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OauthIntegrationForCustomClientsShowOutputOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OauthIntegrationForCustomClientsShowOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OauthIntegrationForCustomClientsShowOutput | undefined) {
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

export class OauthIntegrationForCustomClientsShowOutputList extends cdktf.ComplexList {

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
  public get(index: number): OauthIntegrationForCustomClientsShowOutputOutputReference {
    return new OauthIntegrationForCustomClientsShowOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.3/docs/resources/oauth_integration_for_custom_clients snowflake_oauth_integration_for_custom_clients}
*/
export class OauthIntegrationForCustomClients extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_oauth_integration_for_custom_clients";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OauthIntegrationForCustomClients resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OauthIntegrationForCustomClients to import
  * @param importFromId The id of the existing OauthIntegrationForCustomClients that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.3/docs/resources/oauth_integration_for_custom_clients#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OauthIntegrationForCustomClients to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_oauth_integration_for_custom_clients", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.3/docs/resources/oauth_integration_for_custom_clients snowflake_oauth_integration_for_custom_clients} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OauthIntegrationForCustomClientsConfig
  */
  public constructor(scope: Construct, id: string, config: OauthIntegrationForCustomClientsConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_oauth_integration_for_custom_clients',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '1.0.3',
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
    this._blockedRolesList = config.blockedRolesList;
    this._comment = config.comment;
    this._enabled = config.enabled;
    this._id = config.id;
    this._name = config.name;
    this._networkPolicy = config.networkPolicy;
    this._oauthAllowNonTlsRedirectUri = config.oauthAllowNonTlsRedirectUri;
    this._oauthClientRsaPublicKey = config.oauthClientRsaPublicKey;
    this._oauthClientRsaPublicKey2 = config.oauthClientRsaPublicKey2;
    this._oauthClientType = config.oauthClientType;
    this._oauthEnforcePkce = config.oauthEnforcePkce;
    this._oauthIssueRefreshTokens = config.oauthIssueRefreshTokens;
    this._oauthRedirectUri = config.oauthRedirectUri;
    this._oauthRefreshTokenValidity = config.oauthRefreshTokenValidity;
    this._oauthUseSecondaryRoles = config.oauthUseSecondaryRoles;
    this._preAuthorizedRolesList = config.preAuthorizedRolesList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // blocked_roles_list - computed: false, optional: true, required: false
  private _blockedRolesList?: string[]; 
  public get blockedRolesList() {
    return cdktf.Fn.tolist(this.getListAttribute('blocked_roles_list'));
  }
  public set blockedRolesList(value: string[]) {
    this._blockedRolesList = value;
  }
  public resetBlockedRolesList() {
    this._blockedRolesList = undefined;
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
  private _describeOutput = new OauthIntegrationForCustomClientsDescribeOutputList(this, "describe_output", false);
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

  // network_policy - computed: false, optional: true, required: false
  private _networkPolicy?: string; 
  public get networkPolicy() {
    return this.getStringAttribute('network_policy');
  }
  public set networkPolicy(value: string) {
    this._networkPolicy = value;
  }
  public resetNetworkPolicy() {
    this._networkPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPolicyInput() {
    return this._networkPolicy;
  }

  // oauth_allow_non_tls_redirect_uri - computed: false, optional: true, required: false
  private _oauthAllowNonTlsRedirectUri?: string; 
  public get oauthAllowNonTlsRedirectUri() {
    return this.getStringAttribute('oauth_allow_non_tls_redirect_uri');
  }
  public set oauthAllowNonTlsRedirectUri(value: string) {
    this._oauthAllowNonTlsRedirectUri = value;
  }
  public resetOauthAllowNonTlsRedirectUri() {
    this._oauthAllowNonTlsRedirectUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthAllowNonTlsRedirectUriInput() {
    return this._oauthAllowNonTlsRedirectUri;
  }

  // oauth_client_rsa_public_key - computed: false, optional: true, required: false
  private _oauthClientRsaPublicKey?: string; 
  public get oauthClientRsaPublicKey() {
    return this.getStringAttribute('oauth_client_rsa_public_key');
  }
  public set oauthClientRsaPublicKey(value: string) {
    this._oauthClientRsaPublicKey = value;
  }
  public resetOauthClientRsaPublicKey() {
    this._oauthClientRsaPublicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthClientRsaPublicKeyInput() {
    return this._oauthClientRsaPublicKey;
  }

  // oauth_client_rsa_public_key_2 - computed: false, optional: true, required: false
  private _oauthClientRsaPublicKey2?: string; 
  public get oauthClientRsaPublicKey2() {
    return this.getStringAttribute('oauth_client_rsa_public_key_2');
  }
  public set oauthClientRsaPublicKey2(value: string) {
    this._oauthClientRsaPublicKey2 = value;
  }
  public resetOauthClientRsaPublicKey2() {
    this._oauthClientRsaPublicKey2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthClientRsaPublicKey2Input() {
    return this._oauthClientRsaPublicKey2;
  }

  // oauth_client_type - computed: false, optional: false, required: true
  private _oauthClientType?: string; 
  public get oauthClientType() {
    return this.getStringAttribute('oauth_client_type');
  }
  public set oauthClientType(value: string) {
    this._oauthClientType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthClientTypeInput() {
    return this._oauthClientType;
  }

  // oauth_enforce_pkce - computed: false, optional: true, required: false
  private _oauthEnforcePkce?: string; 
  public get oauthEnforcePkce() {
    return this.getStringAttribute('oauth_enforce_pkce');
  }
  public set oauthEnforcePkce(value: string) {
    this._oauthEnforcePkce = value;
  }
  public resetOauthEnforcePkce() {
    this._oauthEnforcePkce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthEnforcePkceInput() {
    return this._oauthEnforcePkce;
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

  // oauth_redirect_uri - computed: false, optional: false, required: true
  private _oauthRedirectUri?: string; 
  public get oauthRedirectUri() {
    return this.getStringAttribute('oauth_redirect_uri');
  }
  public set oauthRedirectUri(value: string) {
    this._oauthRedirectUri = value;
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

  // pre_authorized_roles_list - computed: false, optional: true, required: false
  private _preAuthorizedRolesList?: string[]; 
  public get preAuthorizedRolesList() {
    return cdktf.Fn.tolist(this.getListAttribute('pre_authorized_roles_list'));
  }
  public set preAuthorizedRolesList(value: string[]) {
    this._preAuthorizedRolesList = value;
  }
  public resetPreAuthorizedRolesList() {
    this._preAuthorizedRolesList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preAuthorizedRolesListInput() {
    return this._preAuthorizedRolesList;
  }

  // related_parameters - computed: true, optional: false, required: false
  private _relatedParameters = new OauthIntegrationForCustomClientsRelatedParametersList(this, "related_parameters", false);
  public get relatedParameters() {
    return this._relatedParameters;
  }

  // show_output - computed: true, optional: false, required: false
  private _showOutput = new OauthIntegrationForCustomClientsShowOutputList(this, "show_output", false);
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
      network_policy: cdktf.stringToTerraform(this._networkPolicy),
      oauth_allow_non_tls_redirect_uri: cdktf.stringToTerraform(this._oauthAllowNonTlsRedirectUri),
      oauth_client_rsa_public_key: cdktf.stringToTerraform(this._oauthClientRsaPublicKey),
      oauth_client_rsa_public_key_2: cdktf.stringToTerraform(this._oauthClientRsaPublicKey2),
      oauth_client_type: cdktf.stringToTerraform(this._oauthClientType),
      oauth_enforce_pkce: cdktf.stringToTerraform(this._oauthEnforcePkce),
      oauth_issue_refresh_tokens: cdktf.stringToTerraform(this._oauthIssueRefreshTokens),
      oauth_redirect_uri: cdktf.stringToTerraform(this._oauthRedirectUri),
      oauth_refresh_token_validity: cdktf.numberToTerraform(this._oauthRefreshTokenValidity),
      oauth_use_secondary_roles: cdktf.stringToTerraform(this._oauthUseSecondaryRoles),
      pre_authorized_roles_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._preAuthorizedRolesList),
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
      network_policy: {
        value: cdktf.stringToHclTerraform(this._networkPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth_allow_non_tls_redirect_uri: {
        value: cdktf.stringToHclTerraform(this._oauthAllowNonTlsRedirectUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth_client_rsa_public_key: {
        value: cdktf.stringToHclTerraform(this._oauthClientRsaPublicKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth_client_rsa_public_key_2: {
        value: cdktf.stringToHclTerraform(this._oauthClientRsaPublicKey2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth_client_type: {
        value: cdktf.stringToHclTerraform(this._oauthClientType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth_enforce_pkce: {
        value: cdktf.stringToHclTerraform(this._oauthEnforcePkce),
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
      pre_authorized_roles_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._preAuthorizedRolesList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
