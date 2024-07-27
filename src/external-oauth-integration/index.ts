// https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/external_oauth_integration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ExternalOauthIntegrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies a comment for the OAuth integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/external_oauth_integration#comment ExternalOauthIntegration#comment}
  */
  readonly comment?: string;
  /**
  * Specifies whether to initiate operation of the integration or suspend it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/external_oauth_integration#enabled ExternalOauthIntegration#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Specifies the list of roles that the client can set as the primary role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/external_oauth_integration#external_oauth_allowed_roles_list ExternalOauthIntegration#external_oauth_allowed_roles_list}
  */
  readonly externalOauthAllowedRolesList?: string[];
  /**
  * Specifies whether the OAuth client or user can use a role that is not defined in the OAuth access token. Valid values are (case-insensitive): `DISABLE` | `ENABLE` | `ENABLE_FOR_PRIVILEGE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/external_oauth_integration#external_oauth_any_role_mode ExternalOauthIntegration#external_oauth_any_role_mode}
  */
  readonly externalOauthAnyRoleMode?: string;
  /**
  * Specifies additional values that can be used for the access token's audience validation on top of using the Customer's Snowflake Account URL 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/external_oauth_integration#external_oauth_audience_list ExternalOauthIntegration#external_oauth_audience_list}
  */
  readonly externalOauthAudienceList?: string[];
  /**
  * Specifies the list of roles that a client cannot set as the primary role. By default, this list includes the ACCOUNTADMIN, ORGADMIN and SECURITYADMIN roles. To remove these privileged roles from the list, use the ALTER ACCOUNT command to set the EXTERNAL_OAUTH_ADD_PRIVILEGED_ROLES_TO_BLOCKED_LIST account parameter to FALSE. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/external_oauth_integration#external_oauth_blocked_roles_list ExternalOauthIntegration#external_oauth_blocked_roles_list}
  */
  readonly externalOauthBlockedRolesList?: string[];
  /**
  * Specifies the URL to define the OAuth 2.0 authorization server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/external_oauth_integration#external_oauth_issuer ExternalOauthIntegration#external_oauth_issuer}
  */
  readonly externalOauthIssuer: string;
  /**
  * Specifies the endpoint or a list of endpoints from which to download public keys or certificates to validate an External OAuth access token. The maximum number of URLs that can be specified in the list is 3. If removed from the config, the resource is recreated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/external_oauth_integration#external_oauth_jws_keys_url ExternalOauthIntegration#external_oauth_jws_keys_url}
  */
  readonly externalOauthJwsKeysUrl?: string[];
  /**
  * Specifies a Base64-encoded RSA public key, without the -----BEGIN PUBLIC KEY----- and -----END PUBLIC KEY----- headers. If removed from the config, the resource is recreated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/external_oauth_integration#external_oauth_rsa_public_key ExternalOauthIntegration#external_oauth_rsa_public_key}
  */
  readonly externalOauthRsaPublicKey?: string;
  /**
  * Specifies a second RSA public key, without the -----BEGIN PUBLIC KEY----- and -----END PUBLIC KEY----- headers. Used for key rotation. If removed from the config, the resource is recreated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/external_oauth_integration#external_oauth_rsa_public_key_2 ExternalOauthIntegration#external_oauth_rsa_public_key_2}
  */
  readonly externalOauthRsaPublicKey2?: string;
  /**
  * Specifies the scope delimiter in the authorization token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/external_oauth_integration#external_oauth_scope_delimiter ExternalOauthIntegration#external_oauth_scope_delimiter}
  */
  readonly externalOauthScopeDelimiter?: string;
  /**
  * Specifies the access token claim to map the access token to an account role. If removed from the config, the resource is recreated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/external_oauth_integration#external_oauth_scope_mapping_attribute ExternalOauthIntegration#external_oauth_scope_mapping_attribute}
  */
  readonly externalOauthScopeMappingAttribute?: string;
  /**
  * Indicates which Snowflake user record attribute should be used to map the access token to a Snowflake user record. Valid values are (case-insensitive): `LOGIN_NAME` | `EMAIL_ADDRESS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/external_oauth_integration#external_oauth_snowflake_user_mapping_attribute ExternalOauthIntegration#external_oauth_snowflake_user_mapping_attribute}
  */
  readonly externalOauthSnowflakeUserMappingAttribute: string;
  /**
  * Specifies the access token claim or claims that can be used to map the access token to a Snowflake user record. If removed from the config, the resource is recreated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/external_oauth_integration#external_oauth_token_user_mapping_claim ExternalOauthIntegration#external_oauth_token_user_mapping_claim}
  */
  readonly externalOauthTokenUserMappingClaim: string[];
  /**
  * Specifies the OAuth 2.0 authorization server to be Okta, Microsoft Azure AD, Ping Identity PingFederate, or a Custom OAuth 2.0 authorization server. Valid values are (case-insensitive): `OKTA` | `AZURE` | `PING_FEDERATE` | `CUSTOM`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/external_oauth_integration#external_oauth_type ExternalOauthIntegration#external_oauth_type}
  */
  readonly externalOauthType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/external_oauth_integration#id ExternalOauthIntegration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the name of the External Oath integration. This name follows the rules for Object Identifiers. The name should be unique among security integrations in your account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/external_oauth_integration#name ExternalOauthIntegration#name}
  */
  readonly name: string;
}
export interface ExternalOauthIntegrationDescribeOutputComment {
}

export function externalOauthIntegrationDescribeOutputCommentToTerraform(struct?: ExternalOauthIntegrationDescribeOutputComment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function externalOauthIntegrationDescribeOutputCommentToHclTerraform(struct?: ExternalOauthIntegrationDescribeOutputComment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ExternalOauthIntegrationDescribeOutputCommentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ExternalOauthIntegrationDescribeOutputComment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalOauthIntegrationDescribeOutputComment | undefined) {
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

export class ExternalOauthIntegrationDescribeOutputCommentList extends cdktf.ComplexList {

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
  public get(index: number): ExternalOauthIntegrationDescribeOutputCommentOutputReference {
    return new ExternalOauthIntegrationDescribeOutputCommentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ExternalOauthIntegrationDescribeOutputEnabled {
}

export function externalOauthIntegrationDescribeOutputEnabledToTerraform(struct?: ExternalOauthIntegrationDescribeOutputEnabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function externalOauthIntegrationDescribeOutputEnabledToHclTerraform(struct?: ExternalOauthIntegrationDescribeOutputEnabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ExternalOauthIntegrationDescribeOutputEnabledOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ExternalOauthIntegrationDescribeOutputEnabled | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalOauthIntegrationDescribeOutputEnabled | undefined) {
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

export class ExternalOauthIntegrationDescribeOutputEnabledList extends cdktf.ComplexList {

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
  public get(index: number): ExternalOauthIntegrationDescribeOutputEnabledOutputReference {
    return new ExternalOauthIntegrationDescribeOutputEnabledOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStruct {
}

export function externalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructToTerraform(struct?: ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function externalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructToHclTerraform(struct?: ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStruct | undefined) {
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

export class ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructList extends cdktf.ComplexList {

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
  public get(index: number): ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference {
    return new ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleMode {
}

export function externalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeToTerraform(struct?: ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function externalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeToHclTerraform(struct?: ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleMode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleMode | undefined) {
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

export class ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeList extends cdktf.ComplexList {

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
  public get(index: number): ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference {
    return new ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStruct {
}

export function externalOauthIntegrationDescribeOutputExternalOauthAudienceListStructToTerraform(struct?: ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function externalOauthIntegrationDescribeOutputExternalOauthAudienceListStructToHclTerraform(struct?: ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStruct | undefined) {
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

export class ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructList extends cdktf.ComplexList {

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
  public get(index: number): ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference {
    return new ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStruct {
}

export function externalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructToTerraform(struct?: ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function externalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructToHclTerraform(struct?: ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStruct | undefined) {
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

export class ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructList extends cdktf.ComplexList {

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
  public get(index: number): ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference {
    return new ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ExternalOauthIntegrationDescribeOutputExternalOauthIssuer {
}

export function externalOauthIntegrationDescribeOutputExternalOauthIssuerToTerraform(struct?: ExternalOauthIntegrationDescribeOutputExternalOauthIssuer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function externalOauthIntegrationDescribeOutputExternalOauthIssuerToHclTerraform(struct?: ExternalOauthIntegrationDescribeOutputExternalOauthIssuer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ExternalOauthIntegrationDescribeOutputExternalOauthIssuer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalOauthIntegrationDescribeOutputExternalOauthIssuer | undefined) {
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

export class ExternalOauthIntegrationDescribeOutputExternalOauthIssuerList extends cdktf.ComplexList {

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
  public get(index: number): ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference {
    return new ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrl {
}

export function externalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlToTerraform(struct?: ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function externalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlToHclTerraform(struct?: ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrl | undefined) {
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

export class ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlList extends cdktf.ComplexList {

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
  public get(index: number): ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference {
    return new ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey {
}

export function externalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyToTerraform(struct?: ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function externalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyToHclTerraform(struct?: ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey | undefined) {
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

export class ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyList extends cdktf.ComplexList {

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
  public get(index: number): ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference {
    return new ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2 {
}

export function externalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2ToTerraform(struct?: ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function externalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2ToHclTerraform(struct?: ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2 | undefined) {
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

export class ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2List extends cdktf.ComplexList {

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
  public get(index: number): ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference {
    return new ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiter {
}

export function externalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterToTerraform(struct?: ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function externalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterToHclTerraform(struct?: ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiter | undefined) {
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

export class ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterList extends cdktf.ComplexList {

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
  public get(index: number): ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference {
    return new ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttribute {
}

export function externalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeToTerraform(struct?: ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttribute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function externalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeToHclTerraform(struct?: ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttribute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttribute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttribute | undefined) {
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

export class ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeList extends cdktf.ComplexList {

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
  public get(index: number): ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference {
    return new ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaim {
}

export function externalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimToTerraform(struct?: ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaim): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function externalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimToHclTerraform(struct?: ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaim): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaim | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaim | undefined) {
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

export class ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimList extends cdktf.ComplexList {

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
  public get(index: number): ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference {
    return new ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ExternalOauthIntegrationDescribeOutput {
}

export function externalOauthIntegrationDescribeOutputToTerraform(struct?: ExternalOauthIntegrationDescribeOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function externalOauthIntegrationDescribeOutputToHclTerraform(struct?: ExternalOauthIntegrationDescribeOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ExternalOauthIntegrationDescribeOutputOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ExternalOauthIntegrationDescribeOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalOauthIntegrationDescribeOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comment - computed: true, optional: false, required: false
  private _comment = new ExternalOauthIntegrationDescribeOutputCommentList(this, "comment", false);
  public get comment() {
    return this._comment;
  }

  // enabled - computed: true, optional: false, required: false
  private _enabled = new ExternalOauthIntegrationDescribeOutputEnabledList(this, "enabled", false);
  public get enabled() {
    return this._enabled;
  }

  // external_oauth_allowed_roles_list - computed: true, optional: false, required: false
  private _externalOauthAllowedRolesList = new ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructList(this, "external_oauth_allowed_roles_list", false);
  public get externalOauthAllowedRolesList() {
    return this._externalOauthAllowedRolesList;
  }

  // external_oauth_any_role_mode - computed: true, optional: false, required: false
  private _externalOauthAnyRoleMode = new ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeList(this, "external_oauth_any_role_mode", false);
  public get externalOauthAnyRoleMode() {
    return this._externalOauthAnyRoleMode;
  }

  // external_oauth_audience_list - computed: true, optional: false, required: false
  private _externalOauthAudienceList = new ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructList(this, "external_oauth_audience_list", false);
  public get externalOauthAudienceList() {
    return this._externalOauthAudienceList;
  }

  // external_oauth_blocked_roles_list - computed: true, optional: false, required: false
  private _externalOauthBlockedRolesList = new ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructList(this, "external_oauth_blocked_roles_list", false);
  public get externalOauthBlockedRolesList() {
    return this._externalOauthBlockedRolesList;
  }

  // external_oauth_issuer - computed: true, optional: false, required: false
  private _externalOauthIssuer = new ExternalOauthIntegrationDescribeOutputExternalOauthIssuerList(this, "external_oauth_issuer", false);
  public get externalOauthIssuer() {
    return this._externalOauthIssuer;
  }

  // external_oauth_jws_keys_url - computed: true, optional: false, required: false
  private _externalOauthJwsKeysUrl = new ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlList(this, "external_oauth_jws_keys_url", false);
  public get externalOauthJwsKeysUrl() {
    return this._externalOauthJwsKeysUrl;
  }

  // external_oauth_rsa_public_key - computed: true, optional: false, required: false
  private _externalOauthRsaPublicKey = new ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyList(this, "external_oauth_rsa_public_key", false);
  public get externalOauthRsaPublicKey() {
    return this._externalOauthRsaPublicKey;
  }

  // external_oauth_rsa_public_key_2 - computed: true, optional: false, required: false
  private _externalOauthRsaPublicKey2 = new ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2List(this, "external_oauth_rsa_public_key_2", false);
  public get externalOauthRsaPublicKey2() {
    return this._externalOauthRsaPublicKey2;
  }

  // external_oauth_scope_delimiter - computed: true, optional: false, required: false
  private _externalOauthScopeDelimiter = new ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterList(this, "external_oauth_scope_delimiter", false);
  public get externalOauthScopeDelimiter() {
    return this._externalOauthScopeDelimiter;
  }

  // external_oauth_snowflake_user_mapping_attribute - computed: true, optional: false, required: false
  private _externalOauthSnowflakeUserMappingAttribute = new ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeList(this, "external_oauth_snowflake_user_mapping_attribute", false);
  public get externalOauthSnowflakeUserMappingAttribute() {
    return this._externalOauthSnowflakeUserMappingAttribute;
  }

  // external_oauth_token_user_mapping_claim - computed: true, optional: false, required: false
  private _externalOauthTokenUserMappingClaim = new ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimList(this, "external_oauth_token_user_mapping_claim", false);
  public get externalOauthTokenUserMappingClaim() {
    return this._externalOauthTokenUserMappingClaim;
  }
}

export class ExternalOauthIntegrationDescribeOutputList extends cdktf.ComplexList {

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
  public get(index: number): ExternalOauthIntegrationDescribeOutputOutputReference {
    return new ExternalOauthIntegrationDescribeOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStruct {
}

export function externalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructToTerraform(struct?: ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function externalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructToHclTerraform(struct?: ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStruct | undefined) {
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

export class ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructList extends cdktf.ComplexList {

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
  public get(index: number): ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference {
    return new ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ExternalOauthIntegrationRelatedParameters {
}

export function externalOauthIntegrationRelatedParametersToTerraform(struct?: ExternalOauthIntegrationRelatedParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function externalOauthIntegrationRelatedParametersToHclTerraform(struct?: ExternalOauthIntegrationRelatedParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ExternalOauthIntegrationRelatedParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ExternalOauthIntegrationRelatedParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalOauthIntegrationRelatedParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // external_oauth_add_privileged_roles_to_blocked_list - computed: true, optional: false, required: false
  private _externalOauthAddPrivilegedRolesToBlockedList = new ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructList(this, "external_oauth_add_privileged_roles_to_blocked_list", false);
  public get externalOauthAddPrivilegedRolesToBlockedList() {
    return this._externalOauthAddPrivilegedRolesToBlockedList;
  }
}

export class ExternalOauthIntegrationRelatedParametersList extends cdktf.ComplexList {

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
  public get(index: number): ExternalOauthIntegrationRelatedParametersOutputReference {
    return new ExternalOauthIntegrationRelatedParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ExternalOauthIntegrationShowOutput {
}

export function externalOauthIntegrationShowOutputToTerraform(struct?: ExternalOauthIntegrationShowOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function externalOauthIntegrationShowOutputToHclTerraform(struct?: ExternalOauthIntegrationShowOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ExternalOauthIntegrationShowOutputOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ExternalOauthIntegrationShowOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalOauthIntegrationShowOutput | undefined) {
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

export class ExternalOauthIntegrationShowOutputList extends cdktf.ComplexList {

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
  public get(index: number): ExternalOauthIntegrationShowOutputOutputReference {
    return new ExternalOauthIntegrationShowOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/external_oauth_integration snowflake_external_oauth_integration}
*/
export class ExternalOauthIntegration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_external_oauth_integration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ExternalOauthIntegration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ExternalOauthIntegration to import
  * @param importFromId The id of the existing ExternalOauthIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/external_oauth_integration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ExternalOauthIntegration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_external_oauth_integration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.94.0/docs/resources/external_oauth_integration snowflake_external_oauth_integration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ExternalOauthIntegrationConfig
  */
  public constructor(scope: Construct, id: string, config: ExternalOauthIntegrationConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_external_oauth_integration',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '0.94.0',
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
    this._externalOauthAllowedRolesList = config.externalOauthAllowedRolesList;
    this._externalOauthAnyRoleMode = config.externalOauthAnyRoleMode;
    this._externalOauthAudienceList = config.externalOauthAudienceList;
    this._externalOauthBlockedRolesList = config.externalOauthBlockedRolesList;
    this._externalOauthIssuer = config.externalOauthIssuer;
    this._externalOauthJwsKeysUrl = config.externalOauthJwsKeysUrl;
    this._externalOauthRsaPublicKey = config.externalOauthRsaPublicKey;
    this._externalOauthRsaPublicKey2 = config.externalOauthRsaPublicKey2;
    this._externalOauthScopeDelimiter = config.externalOauthScopeDelimiter;
    this._externalOauthScopeMappingAttribute = config.externalOauthScopeMappingAttribute;
    this._externalOauthSnowflakeUserMappingAttribute = config.externalOauthSnowflakeUserMappingAttribute;
    this._externalOauthTokenUserMappingClaim = config.externalOauthTokenUserMappingClaim;
    this._externalOauthType = config.externalOauthType;
    this._id = config.id;
    this._name = config.name;
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
  private _describeOutput = new ExternalOauthIntegrationDescribeOutputList(this, "describe_output", false);
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

  // external_oauth_allowed_roles_list - computed: false, optional: true, required: false
  private _externalOauthAllowedRolesList?: string[]; 
  public get externalOauthAllowedRolesList() {
    return cdktf.Fn.tolist(this.getListAttribute('external_oauth_allowed_roles_list'));
  }
  public set externalOauthAllowedRolesList(value: string[]) {
    this._externalOauthAllowedRolesList = value;
  }
  public resetExternalOauthAllowedRolesList() {
    this._externalOauthAllowedRolesList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalOauthAllowedRolesListInput() {
    return this._externalOauthAllowedRolesList;
  }

  // external_oauth_any_role_mode - computed: false, optional: true, required: false
  private _externalOauthAnyRoleMode?: string; 
  public get externalOauthAnyRoleMode() {
    return this.getStringAttribute('external_oauth_any_role_mode');
  }
  public set externalOauthAnyRoleMode(value: string) {
    this._externalOauthAnyRoleMode = value;
  }
  public resetExternalOauthAnyRoleMode() {
    this._externalOauthAnyRoleMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalOauthAnyRoleModeInput() {
    return this._externalOauthAnyRoleMode;
  }

  // external_oauth_audience_list - computed: false, optional: true, required: false
  private _externalOauthAudienceList?: string[]; 
  public get externalOauthAudienceList() {
    return cdktf.Fn.tolist(this.getListAttribute('external_oauth_audience_list'));
  }
  public set externalOauthAudienceList(value: string[]) {
    this._externalOauthAudienceList = value;
  }
  public resetExternalOauthAudienceList() {
    this._externalOauthAudienceList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalOauthAudienceListInput() {
    return this._externalOauthAudienceList;
  }

  // external_oauth_blocked_roles_list - computed: false, optional: true, required: false
  private _externalOauthBlockedRolesList?: string[]; 
  public get externalOauthBlockedRolesList() {
    return cdktf.Fn.tolist(this.getListAttribute('external_oauth_blocked_roles_list'));
  }
  public set externalOauthBlockedRolesList(value: string[]) {
    this._externalOauthBlockedRolesList = value;
  }
  public resetExternalOauthBlockedRolesList() {
    this._externalOauthBlockedRolesList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalOauthBlockedRolesListInput() {
    return this._externalOauthBlockedRolesList;
  }

  // external_oauth_issuer - computed: false, optional: false, required: true
  private _externalOauthIssuer?: string; 
  public get externalOauthIssuer() {
    return this.getStringAttribute('external_oauth_issuer');
  }
  public set externalOauthIssuer(value: string) {
    this._externalOauthIssuer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalOauthIssuerInput() {
    return this._externalOauthIssuer;
  }

  // external_oauth_jws_keys_url - computed: false, optional: true, required: false
  private _externalOauthJwsKeysUrl?: string[]; 
  public get externalOauthJwsKeysUrl() {
    return cdktf.Fn.tolist(this.getListAttribute('external_oauth_jws_keys_url'));
  }
  public set externalOauthJwsKeysUrl(value: string[]) {
    this._externalOauthJwsKeysUrl = value;
  }
  public resetExternalOauthJwsKeysUrl() {
    this._externalOauthJwsKeysUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalOauthJwsKeysUrlInput() {
    return this._externalOauthJwsKeysUrl;
  }

  // external_oauth_rsa_public_key - computed: false, optional: true, required: false
  private _externalOauthRsaPublicKey?: string; 
  public get externalOauthRsaPublicKey() {
    return this.getStringAttribute('external_oauth_rsa_public_key');
  }
  public set externalOauthRsaPublicKey(value: string) {
    this._externalOauthRsaPublicKey = value;
  }
  public resetExternalOauthRsaPublicKey() {
    this._externalOauthRsaPublicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalOauthRsaPublicKeyInput() {
    return this._externalOauthRsaPublicKey;
  }

  // external_oauth_rsa_public_key_2 - computed: false, optional: true, required: false
  private _externalOauthRsaPublicKey2?: string; 
  public get externalOauthRsaPublicKey2() {
    return this.getStringAttribute('external_oauth_rsa_public_key_2');
  }
  public set externalOauthRsaPublicKey2(value: string) {
    this._externalOauthRsaPublicKey2 = value;
  }
  public resetExternalOauthRsaPublicKey2() {
    this._externalOauthRsaPublicKey2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalOauthRsaPublicKey2Input() {
    return this._externalOauthRsaPublicKey2;
  }

  // external_oauth_scope_delimiter - computed: false, optional: true, required: false
  private _externalOauthScopeDelimiter?: string; 
  public get externalOauthScopeDelimiter() {
    return this.getStringAttribute('external_oauth_scope_delimiter');
  }
  public set externalOauthScopeDelimiter(value: string) {
    this._externalOauthScopeDelimiter = value;
  }
  public resetExternalOauthScopeDelimiter() {
    this._externalOauthScopeDelimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalOauthScopeDelimiterInput() {
    return this._externalOauthScopeDelimiter;
  }

  // external_oauth_scope_mapping_attribute - computed: false, optional: true, required: false
  private _externalOauthScopeMappingAttribute?: string; 
  public get externalOauthScopeMappingAttribute() {
    return this.getStringAttribute('external_oauth_scope_mapping_attribute');
  }
  public set externalOauthScopeMappingAttribute(value: string) {
    this._externalOauthScopeMappingAttribute = value;
  }
  public resetExternalOauthScopeMappingAttribute() {
    this._externalOauthScopeMappingAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalOauthScopeMappingAttributeInput() {
    return this._externalOauthScopeMappingAttribute;
  }

  // external_oauth_snowflake_user_mapping_attribute - computed: false, optional: false, required: true
  private _externalOauthSnowflakeUserMappingAttribute?: string; 
  public get externalOauthSnowflakeUserMappingAttribute() {
    return this.getStringAttribute('external_oauth_snowflake_user_mapping_attribute');
  }
  public set externalOauthSnowflakeUserMappingAttribute(value: string) {
    this._externalOauthSnowflakeUserMappingAttribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalOauthSnowflakeUserMappingAttributeInput() {
    return this._externalOauthSnowflakeUserMappingAttribute;
  }

  // external_oauth_token_user_mapping_claim - computed: false, optional: false, required: true
  private _externalOauthTokenUserMappingClaim?: string[]; 
  public get externalOauthTokenUserMappingClaim() {
    return cdktf.Fn.tolist(this.getListAttribute('external_oauth_token_user_mapping_claim'));
  }
  public set externalOauthTokenUserMappingClaim(value: string[]) {
    this._externalOauthTokenUserMappingClaim = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalOauthTokenUserMappingClaimInput() {
    return this._externalOauthTokenUserMappingClaim;
  }

  // external_oauth_type - computed: false, optional: false, required: true
  private _externalOauthType?: string; 
  public get externalOauthType() {
    return this.getStringAttribute('external_oauth_type');
  }
  public set externalOauthType(value: string) {
    this._externalOauthType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalOauthTypeInput() {
    return this._externalOauthType;
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

  // related_parameters - computed: true, optional: false, required: false
  private _relatedParameters = new ExternalOauthIntegrationRelatedParametersList(this, "related_parameters", false);
  public get relatedParameters() {
    return this._relatedParameters;
  }

  // show_output - computed: true, optional: false, required: false
  private _showOutput = new ExternalOauthIntegrationShowOutputList(this, "show_output", false);
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
      external_oauth_allowed_roles_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._externalOauthAllowedRolesList),
      external_oauth_any_role_mode: cdktf.stringToTerraform(this._externalOauthAnyRoleMode),
      external_oauth_audience_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._externalOauthAudienceList),
      external_oauth_blocked_roles_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._externalOauthBlockedRolesList),
      external_oauth_issuer: cdktf.stringToTerraform(this._externalOauthIssuer),
      external_oauth_jws_keys_url: cdktf.listMapper(cdktf.stringToTerraform, false)(this._externalOauthJwsKeysUrl),
      external_oauth_rsa_public_key: cdktf.stringToTerraform(this._externalOauthRsaPublicKey),
      external_oauth_rsa_public_key_2: cdktf.stringToTerraform(this._externalOauthRsaPublicKey2),
      external_oauth_scope_delimiter: cdktf.stringToTerraform(this._externalOauthScopeDelimiter),
      external_oauth_scope_mapping_attribute: cdktf.stringToTerraform(this._externalOauthScopeMappingAttribute),
      external_oauth_snowflake_user_mapping_attribute: cdktf.stringToTerraform(this._externalOauthSnowflakeUserMappingAttribute),
      external_oauth_token_user_mapping_claim: cdktf.listMapper(cdktf.stringToTerraform, false)(this._externalOauthTokenUserMappingClaim),
      external_oauth_type: cdktf.stringToTerraform(this._externalOauthType),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
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
      external_oauth_allowed_roles_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._externalOauthAllowedRolesList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      external_oauth_any_role_mode: {
        value: cdktf.stringToHclTerraform(this._externalOauthAnyRoleMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_oauth_audience_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._externalOauthAudienceList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      external_oauth_blocked_roles_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._externalOauthBlockedRolesList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      external_oauth_issuer: {
        value: cdktf.stringToHclTerraform(this._externalOauthIssuer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_oauth_jws_keys_url: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._externalOauthJwsKeysUrl),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      external_oauth_rsa_public_key: {
        value: cdktf.stringToHclTerraform(this._externalOauthRsaPublicKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_oauth_rsa_public_key_2: {
        value: cdktf.stringToHclTerraform(this._externalOauthRsaPublicKey2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_oauth_scope_delimiter: {
        value: cdktf.stringToHclTerraform(this._externalOauthScopeDelimiter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_oauth_scope_mapping_attribute: {
        value: cdktf.stringToHclTerraform(this._externalOauthScopeMappingAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_oauth_snowflake_user_mapping_attribute: {
        value: cdktf.stringToHclTerraform(this._externalOauthSnowflakeUserMappingAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_oauth_token_user_mapping_claim: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._externalOauthTokenUserMappingClaim),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      external_oauth_type: {
        value: cdktf.stringToHclTerraform(this._externalOauthType),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
