/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_authentication_integration_with_authorization_code_grant
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies a comment for the integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_authentication_integration_with_authorization_code_grant#comment ApiAuthenticationIntegrationWithAuthorizationCodeGrant#comment}
  */
  readonly comment?: string;
  /**
  * Specifies whether this security integration is enabled or disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_authentication_integration_with_authorization_code_grant#enabled ApiAuthenticationIntegrationWithAuthorizationCodeGrant#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_authentication_integration_with_authorization_code_grant#id ApiAuthenticationIntegrationWithAuthorizationCodeGrant#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_authentication_integration_with_authorization_code_grant#name ApiAuthenticationIntegrationWithAuthorizationCodeGrant#name}
  */
  readonly name: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the default lifetime of the OAuth access token (in seconds) issued by an OAuth server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_authentication_integration_with_authorization_code_grant#oauth_access_token_validity ApiAuthenticationIntegrationWithAuthorizationCodeGrant#oauth_access_token_validity}
  */
  readonly oauthAccessTokenValidity?: number;
  /**
  * Specifies a list of scopes to use when making a request from the OAuth by a role with USAGE on the integration during the OAuth client credentials flow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_authentication_integration_with_authorization_code_grant#oauth_allowed_scopes ApiAuthenticationIntegrationWithAuthorizationCodeGrant#oauth_allowed_scopes}
  */
  readonly oauthAllowedScopes?: string[];
  /**
  * Specifies the URL for authenticating to the external service. If removed from the config, the resource is recreated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_authentication_integration_with_authorization_code_grant#oauth_authorization_endpoint ApiAuthenticationIntegrationWithAuthorizationCodeGrant#oauth_authorization_endpoint}
  */
  readonly oauthAuthorizationEndpoint?: string;
  /**
  * Specifies that POST is used as the authentication method to the external service. If removed from the config, the resource is recreated. Valid values are (case-insensitive): `CLIENT_SECRET_POST`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_authentication_integration_with_authorization_code_grant#oauth_client_auth_method ApiAuthenticationIntegrationWithAuthorizationCodeGrant#oauth_client_auth_method}
  */
  readonly oauthClientAuthMethod?: string;
  /**
  * Specifies the client ID for the OAuth application in the external service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_authentication_integration_with_authorization_code_grant#oauth_client_id ApiAuthenticationIntegrationWithAuthorizationCodeGrant#oauth_client_id}
  */
  readonly oauthClientId: string;
  /**
  * Specifies the client secret for the OAuth application in the ServiceNow instance from the previous step. The connector uses this to request an access token from the ServiceNow instance. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_authentication_integration_with_authorization_code_grant#oauth_client_secret ApiAuthenticationIntegrationWithAuthorizationCodeGrant#oauth_client_secret}
  */
  readonly oauthClientSecret: string;
  /**
  * Specifies the value to determine the validity of the refresh token obtained from the OAuth server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_authentication_integration_with_authorization_code_grant#oauth_refresh_token_validity ApiAuthenticationIntegrationWithAuthorizationCodeGrant#oauth_refresh_token_validity}
  */
  readonly oauthRefreshTokenValidity?: number;
  /**
  * Specifies the token endpoint used by the client to obtain an access token by presenting its authorization grant or refresh token. The token endpoint is used with every authorization grant except for the implicit grant type (since an access token is issued directly). If removed from the config, the resource is recreated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_authentication_integration_with_authorization_code_grant#oauth_token_endpoint ApiAuthenticationIntegrationWithAuthorizationCodeGrant#oauth_token_endpoint}
  */
  readonly oauthTokenEndpoint?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_authentication_integration_with_authorization_code_grant#timeouts ApiAuthenticationIntegrationWithAuthorizationCodeGrant#timeouts}
  */
  readonly timeouts?: ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeouts;
}
export interface ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthType {
}

export function apiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeToTerraform(struct?: ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function apiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeToHclTerraform(struct?: ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthType | undefined) {
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

export class ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeList extends cdktf.ComplexList {

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
  public get(index: number): ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference {
    return new ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputComment {
}

export function apiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentToTerraform(struct?: ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputComment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function apiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentToHclTerraform(struct?: ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputComment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputComment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputComment | undefined) {
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

export class ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentList extends cdktf.ComplexList {

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
  public get(index: number): ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference {
    return new ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabled {
}

export function apiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledToTerraform(struct?: ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function apiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledToHclTerraform(struct?: ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabled | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabled | undefined) {
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

export class ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledList extends cdktf.ComplexList {

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
  public get(index: number): ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference {
    return new ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidity {
}

export function apiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityToTerraform(struct?: ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function apiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityToHclTerraform(struct?: ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidity | undefined) {
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

export class ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityList extends cdktf.ComplexList {

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
  public get(index: number): ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference {
    return new ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopes {
}

export function apiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesToTerraform(struct?: ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function apiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesToHclTerraform(struct?: ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopes | undefined) {
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

export class ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesList extends cdktf.ComplexList {

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
  public get(index: number): ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference {
    return new ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpoint {
}

export function apiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointToTerraform(struct?: ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function apiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointToHclTerraform(struct?: ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpoint | undefined) {
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

export class ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointList extends cdktf.ComplexList {

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
  public get(index: number): ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference {
    return new ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethod {
}

export function apiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodToTerraform(struct?: ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function apiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodToHclTerraform(struct?: ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethod | undefined) {
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

export class ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodList extends cdktf.ComplexList {

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
  public get(index: number): ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference {
    return new ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrant {
}

export function apiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantToTerraform(struct?: ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrant): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function apiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantToHclTerraform(struct?: ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrant): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrant | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrant | undefined) {
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

export class ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantList extends cdktf.ComplexList {

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
  public get(index: number): ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference {
    return new ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidity {
}

export function apiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityToTerraform(struct?: ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function apiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityToHclTerraform(struct?: ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidity | undefined) {
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

export class ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityList extends cdktf.ComplexList {

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
  public get(index: number): ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference {
    return new ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpoint {
}

export function apiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointToTerraform(struct?: ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function apiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointToHclTerraform(struct?: ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpoint | undefined) {
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

export class ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointList extends cdktf.ComplexList {

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
  public get(index: number): ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference {
    return new ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegration {
}

export function apiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationToTerraform(struct?: ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function apiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationToHclTerraform(struct?: ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegration | undefined) {
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

export class ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationList extends cdktf.ComplexList {

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
  public get(index: number): ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference {
    return new ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutput {
}

export function apiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputToTerraform(struct?: ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function apiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputToHclTerraform(struct?: ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auth_type - computed: true, optional: false, required: false
  private _authType = new ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputAuthTypeList(this, "auth_type", false);
  public get authType() {
    return this._authType;
  }

  // comment - computed: true, optional: false, required: false
  private _comment = new ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputCommentList(this, "comment", false);
  public get comment() {
    return this._comment;
  }

  // enabled - computed: true, optional: false, required: false
  private _enabled = new ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputEnabledList(this, "enabled", false);
  public get enabled() {
    return this._enabled;
  }

  // oauth_access_token_validity - computed: true, optional: false, required: false
  private _oauthAccessTokenValidity = new ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAccessTokenValidityList(this, "oauth_access_token_validity", false);
  public get oauthAccessTokenValidity() {
    return this._oauthAccessTokenValidity;
  }

  // oauth_allowed_scopes - computed: true, optional: false, required: false
  private _oauthAllowedScopes = new ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAllowedScopesList(this, "oauth_allowed_scopes", false);
  public get oauthAllowedScopes() {
    return this._oauthAllowedScopes;
  }

  // oauth_authorization_endpoint - computed: true, optional: false, required: false
  private _oauthAuthorizationEndpoint = new ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthAuthorizationEndpointList(this, "oauth_authorization_endpoint", false);
  public get oauthAuthorizationEndpoint() {
    return this._oauthAuthorizationEndpoint;
  }

  // oauth_client_auth_method - computed: true, optional: false, required: false
  private _oauthClientAuthMethod = new ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthClientAuthMethodList(this, "oauth_client_auth_method", false);
  public get oauthClientAuthMethod() {
    return this._oauthClientAuthMethod;
  }

  // oauth_grant - computed: true, optional: false, required: false
  private _oauthGrant = new ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthGrantList(this, "oauth_grant", false);
  public get oauthGrant() {
    return this._oauthGrant;
  }

  // oauth_refresh_token_validity - computed: true, optional: false, required: false
  private _oauthRefreshTokenValidity = new ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthRefreshTokenValidityList(this, "oauth_refresh_token_validity", false);
  public get oauthRefreshTokenValidity() {
    return this._oauthRefreshTokenValidity;
  }

  // oauth_token_endpoint - computed: true, optional: false, required: false
  private _oauthTokenEndpoint = new ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOauthTokenEndpointList(this, "oauth_token_endpoint", false);
  public get oauthTokenEndpoint() {
    return this._oauthTokenEndpoint;
  }

  // parent_integration - computed: true, optional: false, required: false
  private _parentIntegration = new ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputParentIntegrationList(this, "parent_integration", false);
  public get parentIntegration() {
    return this._parentIntegration;
  }
}

export class ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputList extends cdktf.ComplexList {

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
  public get(index: number): ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference {
    return new ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutput {
}

export function apiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputToTerraform(struct?: ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function apiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputToHclTerraform(struct?: ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutput | undefined) {
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

export class ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputList extends cdktf.ComplexList {

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
  public get(index: number): ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference {
    return new ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_authentication_integration_with_authorization_code_grant#create ApiAuthenticationIntegrationWithAuthorizationCodeGrant#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_authentication_integration_with_authorization_code_grant#delete ApiAuthenticationIntegrationWithAuthorizationCodeGrant#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_authentication_integration_with_authorization_code_grant#read ApiAuthenticationIntegrationWithAuthorizationCodeGrant#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_authentication_integration_with_authorization_code_grant#update ApiAuthenticationIntegrationWithAuthorizationCodeGrant#update}
  */
  readonly update?: string;
}

export function apiAuthenticationIntegrationWithAuthorizationCodeGrantTimeoutsToTerraform(struct?: ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeouts | cdktf.IResolvable): any {
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


export function apiAuthenticationIntegrationWithAuthorizationCodeGrantTimeoutsToHclTerraform(struct?: ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeouts | cdktf.IResolvable): any {
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

export class ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_authentication_integration_with_authorization_code_grant snowflake_api_authentication_integration_with_authorization_code_grant}
*/
export class ApiAuthenticationIntegrationWithAuthorizationCodeGrant extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_api_authentication_integration_with_authorization_code_grant";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiAuthenticationIntegrationWithAuthorizationCodeGrant resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiAuthenticationIntegrationWithAuthorizationCodeGrant to import
  * @param importFromId The id of the existing ApiAuthenticationIntegrationWithAuthorizationCodeGrant that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_authentication_integration_with_authorization_code_grant#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiAuthenticationIntegrationWithAuthorizationCodeGrant to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_api_authentication_integration_with_authorization_code_grant", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/api_authentication_integration_with_authorization_code_grant snowflake_api_authentication_integration_with_authorization_code_grant} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig
  */
  public constructor(scope: Construct, id: string, config: ApiAuthenticationIntegrationWithAuthorizationCodeGrantConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_api_authentication_integration_with_authorization_code_grant',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '2.4.0',
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
    this._enabled = config.enabled;
    this._id = config.id;
    this._name = config.name;
    this._oauthAccessTokenValidity = config.oauthAccessTokenValidity;
    this._oauthAllowedScopes = config.oauthAllowedScopes;
    this._oauthAuthorizationEndpoint = config.oauthAuthorizationEndpoint;
    this._oauthClientAuthMethod = config.oauthClientAuthMethod;
    this._oauthClientId = config.oauthClientId;
    this._oauthClientSecret = config.oauthClientSecret;
    this._oauthRefreshTokenValidity = config.oauthRefreshTokenValidity;
    this._oauthTokenEndpoint = config.oauthTokenEndpoint;
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

  // describe_output - computed: true, optional: false, required: false
  private _describeOutput = new ApiAuthenticationIntegrationWithAuthorizationCodeGrantDescribeOutputList(this, "describe_output", false);
  public get describeOutput() {
    return this._describeOutput;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
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

  // oauth_access_token_validity - computed: false, optional: true, required: false
  private _oauthAccessTokenValidity?: number; 
  public get oauthAccessTokenValidity() {
    return this.getNumberAttribute('oauth_access_token_validity');
  }
  public set oauthAccessTokenValidity(value: number) {
    this._oauthAccessTokenValidity = value;
  }
  public resetOauthAccessTokenValidity() {
    this._oauthAccessTokenValidity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthAccessTokenValidityInput() {
    return this._oauthAccessTokenValidity;
  }

  // oauth_allowed_scopes - computed: false, optional: true, required: false
  private _oauthAllowedScopes?: string[]; 
  public get oauthAllowedScopes() {
    return cdktf.Fn.tolist(this.getListAttribute('oauth_allowed_scopes'));
  }
  public set oauthAllowedScopes(value: string[]) {
    this._oauthAllowedScopes = value;
  }
  public resetOauthAllowedScopes() {
    this._oauthAllowedScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthAllowedScopesInput() {
    return this._oauthAllowedScopes;
  }

  // oauth_authorization_endpoint - computed: false, optional: true, required: false
  private _oauthAuthorizationEndpoint?: string; 
  public get oauthAuthorizationEndpoint() {
    return this.getStringAttribute('oauth_authorization_endpoint');
  }
  public set oauthAuthorizationEndpoint(value: string) {
    this._oauthAuthorizationEndpoint = value;
  }
  public resetOauthAuthorizationEndpoint() {
    this._oauthAuthorizationEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthAuthorizationEndpointInput() {
    return this._oauthAuthorizationEndpoint;
  }

  // oauth_client_auth_method - computed: false, optional: true, required: false
  private _oauthClientAuthMethod?: string; 
  public get oauthClientAuthMethod() {
    return this.getStringAttribute('oauth_client_auth_method');
  }
  public set oauthClientAuthMethod(value: string) {
    this._oauthClientAuthMethod = value;
  }
  public resetOauthClientAuthMethod() {
    this._oauthClientAuthMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthClientAuthMethodInput() {
    return this._oauthClientAuthMethod;
  }

  // oauth_client_id - computed: false, optional: false, required: true
  private _oauthClientId?: string; 
  public get oauthClientId() {
    return this.getStringAttribute('oauth_client_id');
  }
  public set oauthClientId(value: string) {
    this._oauthClientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthClientIdInput() {
    return this._oauthClientId;
  }

  // oauth_client_secret - computed: false, optional: false, required: true
  private _oauthClientSecret?: string; 
  public get oauthClientSecret() {
    return this.getStringAttribute('oauth_client_secret');
  }
  public set oauthClientSecret(value: string) {
    this._oauthClientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthClientSecretInput() {
    return this._oauthClientSecret;
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

  // oauth_token_endpoint - computed: false, optional: true, required: false
  private _oauthTokenEndpoint?: string; 
  public get oauthTokenEndpoint() {
    return this.getStringAttribute('oauth_token_endpoint');
  }
  public set oauthTokenEndpoint(value: string) {
    this._oauthTokenEndpoint = value;
  }
  public resetOauthTokenEndpoint() {
    this._oauthTokenEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthTokenEndpointInput() {
    return this._oauthTokenEndpoint;
  }

  // show_output - computed: true, optional: false, required: false
  private _showOutput = new ApiAuthenticationIntegrationWithAuthorizationCodeGrantShowOutputList(this, "show_output", false);
  public get showOutput() {
    return this._showOutput;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeouts) {
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
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      oauth_access_token_validity: cdktf.numberToTerraform(this._oauthAccessTokenValidity),
      oauth_allowed_scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._oauthAllowedScopes),
      oauth_authorization_endpoint: cdktf.stringToTerraform(this._oauthAuthorizationEndpoint),
      oauth_client_auth_method: cdktf.stringToTerraform(this._oauthClientAuthMethod),
      oauth_client_id: cdktf.stringToTerraform(this._oauthClientId),
      oauth_client_secret: cdktf.stringToTerraform(this._oauthClientSecret),
      oauth_refresh_token_validity: cdktf.numberToTerraform(this._oauthRefreshTokenValidity),
      oauth_token_endpoint: cdktf.stringToTerraform(this._oauthTokenEndpoint),
      timeouts: apiAuthenticationIntegrationWithAuthorizationCodeGrantTimeoutsToTerraform(this._timeouts.internalValue),
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
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      oauth_access_token_validity: {
        value: cdktf.numberToHclTerraform(this._oauthAccessTokenValidity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      oauth_allowed_scopes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._oauthAllowedScopes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      oauth_authorization_endpoint: {
        value: cdktf.stringToHclTerraform(this._oauthAuthorizationEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth_client_auth_method: {
        value: cdktf.stringToHclTerraform(this._oauthClientAuthMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth_client_id: {
        value: cdktf.stringToHclTerraform(this._oauthClientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth_client_secret: {
        value: cdktf.stringToHclTerraform(this._oauthClientSecret),
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
      oauth_token_endpoint: {
        value: cdktf.stringToHclTerraform(this._oauthTokenEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: apiAuthenticationIntegrationWithAuthorizationCodeGrantTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApiAuthenticationIntegrationWithAuthorizationCodeGrantTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
