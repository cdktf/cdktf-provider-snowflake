// https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/api_authentication_integration_with_jwt_bearer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiAuthenticationIntegrationWithJwtBearerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies a comment for the integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/api_authentication_integration_with_jwt_bearer#comment ApiAuthenticationIntegrationWithJwtBearer#comment}
  */
  readonly comment?: string;
  /**
  * Specifies whether this security integration is enabled or disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/api_authentication_integration_with_jwt_bearer#enabled ApiAuthenticationIntegrationWithJwtBearer#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/api_authentication_integration_with_jwt_bearer#id ApiAuthenticationIntegrationWithJwtBearer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](https://github.com/Snowflake-Labs/terraform-provider-snowflake/blob/main/docs/technical-documentation/identifiers_rework_design_decisions.md#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/api_authentication_integration_with_jwt_bearer#name ApiAuthenticationIntegrationWithJwtBearer#name}
  */
  readonly name: string;
  /**
  * Specifies the default lifetime of the OAuth access token (in seconds) issued by an OAuth server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/api_authentication_integration_with_jwt_bearer#oauth_access_token_validity ApiAuthenticationIntegrationWithJwtBearer#oauth_access_token_validity}
  */
  readonly oauthAccessTokenValidity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/api_authentication_integration_with_jwt_bearer#oauth_assertion_issuer ApiAuthenticationIntegrationWithJwtBearer#oauth_assertion_issuer}
  */
  readonly oauthAssertionIssuer: string;
  /**
  * Specifies the URL for authenticating to the external service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/api_authentication_integration_with_jwt_bearer#oauth_authorization_endpoint ApiAuthenticationIntegrationWithJwtBearer#oauth_authorization_endpoint}
  */
  readonly oauthAuthorizationEndpoint?: string;
  /**
  * Specifies that POST is used as the authentication method to the external service. If removed from the config, the resource is recreated. Valid values are (case-insensitive): `CLIENT_SECRET_POST`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/api_authentication_integration_with_jwt_bearer#oauth_client_auth_method ApiAuthenticationIntegrationWithJwtBearer#oauth_client_auth_method}
  */
  readonly oauthClientAuthMethod?: string;
  /**
  * Specifies the client ID for the OAuth application in the external service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/api_authentication_integration_with_jwt_bearer#oauth_client_id ApiAuthenticationIntegrationWithJwtBearer#oauth_client_id}
  */
  readonly oauthClientId: string;
  /**
  * Specifies the client secret for the OAuth application in the ServiceNow instance from the previous step. The connector uses this to request an access token from the ServiceNow instance. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/api_authentication_integration_with_jwt_bearer#oauth_client_secret ApiAuthenticationIntegrationWithJwtBearer#oauth_client_secret}
  */
  readonly oauthClientSecret: string;
  /**
  * Specifies the value to determine the validity of the refresh token obtained from the OAuth server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/api_authentication_integration_with_jwt_bearer#oauth_refresh_token_validity ApiAuthenticationIntegrationWithJwtBearer#oauth_refresh_token_validity}
  */
  readonly oauthRefreshTokenValidity?: number;
  /**
  * Specifies the token endpoint used by the client to obtain an access token by presenting its authorization grant or refresh token. The token endpoint is used with every authorization grant except for the implicit grant type (since an access token is issued directly). If removed from the config, the resource is recreated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/api_authentication_integration_with_jwt_bearer#oauth_token_endpoint ApiAuthenticationIntegrationWithJwtBearer#oauth_token_endpoint}
  */
  readonly oauthTokenEndpoint?: string;
}
export interface ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthType {
}

export function apiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeToTerraform(struct?: ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function apiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeToHclTerraform(struct?: ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthType | undefined) {
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

export class ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeList extends cdktf.ComplexList {

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
  public get(index: number): ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference {
    return new ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiAuthenticationIntegrationWithJwtBearerDescribeOutputComment {
}

export function apiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentToTerraform(struct?: ApiAuthenticationIntegrationWithJwtBearerDescribeOutputComment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function apiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentToHclTerraform(struct?: ApiAuthenticationIntegrationWithJwtBearerDescribeOutputComment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiAuthenticationIntegrationWithJwtBearerDescribeOutputComment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiAuthenticationIntegrationWithJwtBearerDescribeOutputComment | undefined) {
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

export class ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentList extends cdktf.ComplexList {

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
  public get(index: number): ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference {
    return new ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabled {
}

export function apiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledToTerraform(struct?: ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function apiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledToHclTerraform(struct?: ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabled | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabled | undefined) {
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

export class ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledList extends cdktf.ComplexList {

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
  public get(index: number): ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference {
    return new ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidity {
}

export function apiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityToTerraform(struct?: ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function apiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityToHclTerraform(struct?: ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidity | undefined) {
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

export class ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityList extends cdktf.ComplexList {

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
  public get(index: number): ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference {
    return new ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopes {
}

export function apiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesToTerraform(struct?: ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function apiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesToHclTerraform(struct?: ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopes | undefined) {
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

export class ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesList extends cdktf.ComplexList {

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
  public get(index: number): ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference {
    return new ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpoint {
}

export function apiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointToTerraform(struct?: ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function apiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointToHclTerraform(struct?: ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpoint | undefined) {
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

export class ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointList extends cdktf.ComplexList {

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
  public get(index: number): ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference {
    return new ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethod {
}

export function apiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodToTerraform(struct?: ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function apiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodToHclTerraform(struct?: ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethod | undefined) {
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

export class ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodList extends cdktf.ComplexList {

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
  public get(index: number): ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference {
    return new ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientId {
}

export function apiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdToTerraform(struct?: ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientId): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function apiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdToHclTerraform(struct?: ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientId): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientId | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientId | undefined) {
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

export class ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdList extends cdktf.ComplexList {

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
  public get(index: number): ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference {
    return new ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrant {
}

export function apiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantToTerraform(struct?: ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrant): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function apiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantToHclTerraform(struct?: ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrant): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrant | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrant | undefined) {
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

export class ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantList extends cdktf.ComplexList {

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
  public get(index: number): ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference {
    return new ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidity {
}

export function apiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityToTerraform(struct?: ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function apiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityToHclTerraform(struct?: ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidity | undefined) {
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

export class ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityList extends cdktf.ComplexList {

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
  public get(index: number): ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference {
    return new ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpoint {
}

export function apiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointToTerraform(struct?: ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function apiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointToHclTerraform(struct?: ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpoint | undefined) {
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

export class ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointList extends cdktf.ComplexList {

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
  public get(index: number): ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference {
    return new ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegration {
}

export function apiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationToTerraform(struct?: ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function apiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationToHclTerraform(struct?: ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegration | undefined) {
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

export class ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationList extends cdktf.ComplexList {

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
  public get(index: number): ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference {
    return new ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiAuthenticationIntegrationWithJwtBearerDescribeOutput {
}

export function apiAuthenticationIntegrationWithJwtBearerDescribeOutputToTerraform(struct?: ApiAuthenticationIntegrationWithJwtBearerDescribeOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function apiAuthenticationIntegrationWithJwtBearerDescribeOutputToHclTerraform(struct?: ApiAuthenticationIntegrationWithJwtBearerDescribeOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiAuthenticationIntegrationWithJwtBearerDescribeOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiAuthenticationIntegrationWithJwtBearerDescribeOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auth_type - computed: true, optional: false, required: false
  private _authType = new ApiAuthenticationIntegrationWithJwtBearerDescribeOutputAuthTypeList(this, "auth_type", false);
  public get authType() {
    return this._authType;
  }

  // comment - computed: true, optional: false, required: false
  private _comment = new ApiAuthenticationIntegrationWithJwtBearerDescribeOutputCommentList(this, "comment", false);
  public get comment() {
    return this._comment;
  }

  // enabled - computed: true, optional: false, required: false
  private _enabled = new ApiAuthenticationIntegrationWithJwtBearerDescribeOutputEnabledList(this, "enabled", false);
  public get enabled() {
    return this._enabled;
  }

  // oauth_access_token_validity - computed: true, optional: false, required: false
  private _oauthAccessTokenValidity = new ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAccessTokenValidityList(this, "oauth_access_token_validity", false);
  public get oauthAccessTokenValidity() {
    return this._oauthAccessTokenValidity;
  }

  // oauth_allowed_scopes - computed: true, optional: false, required: false
  private _oauthAllowedScopes = new ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAllowedScopesList(this, "oauth_allowed_scopes", false);
  public get oauthAllowedScopes() {
    return this._oauthAllowedScopes;
  }

  // oauth_authorization_endpoint - computed: true, optional: false, required: false
  private _oauthAuthorizationEndpoint = new ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthAuthorizationEndpointList(this, "oauth_authorization_endpoint", false);
  public get oauthAuthorizationEndpoint() {
    return this._oauthAuthorizationEndpoint;
  }

  // oauth_client_auth_method - computed: true, optional: false, required: false
  private _oauthClientAuthMethod = new ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientAuthMethodList(this, "oauth_client_auth_method", false);
  public get oauthClientAuthMethod() {
    return this._oauthClientAuthMethod;
  }

  // oauth_client_id - computed: true, optional: false, required: false
  private _oauthClientId = new ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthClientIdList(this, "oauth_client_id", false);
  public get oauthClientId() {
    return this._oauthClientId;
  }

  // oauth_grant - computed: true, optional: false, required: false
  private _oauthGrant = new ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthGrantList(this, "oauth_grant", false);
  public get oauthGrant() {
    return this._oauthGrant;
  }

  // oauth_refresh_token_validity - computed: true, optional: false, required: false
  private _oauthRefreshTokenValidity = new ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthRefreshTokenValidityList(this, "oauth_refresh_token_validity", false);
  public get oauthRefreshTokenValidity() {
    return this._oauthRefreshTokenValidity;
  }

  // oauth_token_endpoint - computed: true, optional: false, required: false
  private _oauthTokenEndpoint = new ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOauthTokenEndpointList(this, "oauth_token_endpoint", false);
  public get oauthTokenEndpoint() {
    return this._oauthTokenEndpoint;
  }

  // parent_integration - computed: true, optional: false, required: false
  private _parentIntegration = new ApiAuthenticationIntegrationWithJwtBearerDescribeOutputParentIntegrationList(this, "parent_integration", false);
  public get parentIntegration() {
    return this._parentIntegration;
  }
}

export class ApiAuthenticationIntegrationWithJwtBearerDescribeOutputList extends cdktf.ComplexList {

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
  public get(index: number): ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference {
    return new ApiAuthenticationIntegrationWithJwtBearerDescribeOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiAuthenticationIntegrationWithJwtBearerShowOutput {
}

export function apiAuthenticationIntegrationWithJwtBearerShowOutputToTerraform(struct?: ApiAuthenticationIntegrationWithJwtBearerShowOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function apiAuthenticationIntegrationWithJwtBearerShowOutputToHclTerraform(struct?: ApiAuthenticationIntegrationWithJwtBearerShowOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiAuthenticationIntegrationWithJwtBearerShowOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiAuthenticationIntegrationWithJwtBearerShowOutput | undefined) {
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

export class ApiAuthenticationIntegrationWithJwtBearerShowOutputList extends cdktf.ComplexList {

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
  public get(index: number): ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference {
    return new ApiAuthenticationIntegrationWithJwtBearerShowOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/api_authentication_integration_with_jwt_bearer snowflake_api_authentication_integration_with_jwt_bearer}
*/
export class ApiAuthenticationIntegrationWithJwtBearer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_api_authentication_integration_with_jwt_bearer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiAuthenticationIntegrationWithJwtBearer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiAuthenticationIntegrationWithJwtBearer to import
  * @param importFromId The id of the existing ApiAuthenticationIntegrationWithJwtBearer that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/api_authentication_integration_with_jwt_bearer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiAuthenticationIntegrationWithJwtBearer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_api_authentication_integration_with_jwt_bearer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/api_authentication_integration_with_jwt_bearer snowflake_api_authentication_integration_with_jwt_bearer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiAuthenticationIntegrationWithJwtBearerConfig
  */
  public constructor(scope: Construct, id: string, config: ApiAuthenticationIntegrationWithJwtBearerConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_api_authentication_integration_with_jwt_bearer',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '0.100.0',
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
    this._comment = config.comment;
    this._enabled = config.enabled;
    this._id = config.id;
    this._name = config.name;
    this._oauthAccessTokenValidity = config.oauthAccessTokenValidity;
    this._oauthAssertionIssuer = config.oauthAssertionIssuer;
    this._oauthAuthorizationEndpoint = config.oauthAuthorizationEndpoint;
    this._oauthClientAuthMethod = config.oauthClientAuthMethod;
    this._oauthClientId = config.oauthClientId;
    this._oauthClientSecret = config.oauthClientSecret;
    this._oauthRefreshTokenValidity = config.oauthRefreshTokenValidity;
    this._oauthTokenEndpoint = config.oauthTokenEndpoint;
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
  private _describeOutput = new ApiAuthenticationIntegrationWithJwtBearerDescribeOutputList(this, "describe_output", false);
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

  // oauth_assertion_issuer - computed: false, optional: false, required: true
  private _oauthAssertionIssuer?: string; 
  public get oauthAssertionIssuer() {
    return this.getStringAttribute('oauth_assertion_issuer');
  }
  public set oauthAssertionIssuer(value: string) {
    this._oauthAssertionIssuer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthAssertionIssuerInput() {
    return this._oauthAssertionIssuer;
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
  private _showOutput = new ApiAuthenticationIntegrationWithJwtBearerShowOutputList(this, "show_output", false);
  public get showOutput() {
    return this._showOutput;
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
      oauth_assertion_issuer: cdktf.stringToTerraform(this._oauthAssertionIssuer),
      oauth_authorization_endpoint: cdktf.stringToTerraform(this._oauthAuthorizationEndpoint),
      oauth_client_auth_method: cdktf.stringToTerraform(this._oauthClientAuthMethod),
      oauth_client_id: cdktf.stringToTerraform(this._oauthClientId),
      oauth_client_secret: cdktf.stringToTerraform(this._oauthClientSecret),
      oauth_refresh_token_validity: cdktf.numberToTerraform(this._oauthRefreshTokenValidity),
      oauth_token_endpoint: cdktf.stringToTerraform(this._oauthTokenEndpoint),
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
      oauth_assertion_issuer: {
        value: cdktf.stringToHclTerraform(this._oauthAssertionIssuer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
