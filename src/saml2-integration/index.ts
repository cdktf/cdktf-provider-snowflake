/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/saml2_integration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Saml2IntegrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * A list of regular expressions that email addresses are matched against to authenticate with a SAML2 security integration. If this field changes value from non-empty to empty, the whole resource is recreated because of Snowflake limitations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/saml2_integration#allowed_email_patterns Saml2Integration#allowed_email_patterns}
  */
  readonly allowedEmailPatterns?: string[];
  /**
  * A list of email domains that can authenticate with a SAML2 security integration. If this field changes value from non-empty to empty, the whole resource is recreated because of Snowflake limitations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/saml2_integration#allowed_user_domains Saml2Integration#allowed_user_domains}
  */
  readonly allowedUserDomains?: string[];
  /**
  * Specifies a comment for the integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/saml2_integration#comment Saml2Integration#comment}
  */
  readonly comment?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether this security integration is enabled or disabled. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/saml2_integration#enabled Saml2Integration#enabled}
  */
  readonly enabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/saml2_integration#id Saml2Integration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the name of the SAML2 integration. This name follows the rules for Object Identifiers. The name should be unique among security integrations in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/saml2_integration#name Saml2Integration#name}
  */
  readonly name: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) The Boolean indicating if the Log In With button will be shown on the login page. TRUE: displays the Log in With button on the login page. FALSE: does not display the Log in With button on the login page. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/saml2_integration#saml2_enable_sp_initiated Saml2Integration#saml2_enable_sp_initiated}
  */
  readonly saml2EnableSpInitiated?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) The Boolean indicating whether users, during the initial authentication flow, are forced to authenticate again to access Snowflake. When set to TRUE, Snowflake sets the ForceAuthn SAML parameter to TRUE in the outgoing request from Snowflake to the identity provider. TRUE: forces users to authenticate again to access Snowflake, even if a valid session with the identity provider exists. FALSE: does not force users to authenticate again to access Snowflake. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/saml2_integration#saml2_force_authn Saml2Integration#saml2_force_authn}
  */
  readonly saml2ForceAuthn?: string;
  /**
  * The string containing the IdP EntityID / Issuer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/saml2_integration#saml2_issuer Saml2Integration#saml2_issuer}
  */
  readonly saml2Issuer: string;
  /**
  * The endpoint to which Snowflake redirects users after clicking the Log Out button in the classic Snowflake web interface. Snowflake terminates the Snowflake session upon redirecting to the specified endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/saml2_integration#saml2_post_logout_redirect_url Saml2Integration#saml2_post_logout_redirect_url}
  */
  readonly saml2PostLogoutRedirectUrl?: string;
  /**
  * The string describing the IdP. Valid options are: `OKTA` | `ADFS` | `CUSTOM`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/saml2_integration#saml2_provider Saml2Integration#saml2_provider}
  */
  readonly saml2Provider: string;
  /**
  * The SAML NameID format allows Snowflake to set an expectation of the identifying attribute of the user (i.e. SAML Subject) in the SAML assertion from the IdP to ensure a valid authentication to Snowflake. Valid options are: `urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified` | `urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress` | `urn:oasis:names:tc:SAML:1.1:nameid-format:X509SubjectName` | `urn:oasis:names:tc:SAML:1.1:nameid-format:WindowsDomainQualifiedName` | `urn:oasis:names:tc:SAML:2.0:nameid-format:kerberos` | `urn:oasis:names:tc:SAML:2.0:nameid-format:persistent` | `urn:oasis:names:tc:SAML:2.0:nameid-format:transient`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/saml2_integration#saml2_requested_nameid_format Saml2Integration#saml2_requested_nameid_format}
  */
  readonly saml2RequestedNameidFormat?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) The Boolean indicating whether SAML requests are signed. TRUE: allows SAML requests to be signed. FALSE: does not allow SAML requests to be signed. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/saml2_integration#saml2_sign_request Saml2Integration#saml2_sign_request}
  */
  readonly saml2SignRequest?: string;
  /**
  * The string containing the Snowflake Assertion Consumer Service URL to which the IdP will send its SAML authentication response back to Snowflake. This property will be set in the SAML authentication request generated by Snowflake when initiating a SAML SSO operation with the IdP. If an incorrect value is specified, Snowflake returns an error message indicating the acceptable values to use. Because Okta does not support underscores in URLs, the underscore in the account name must be converted to a hyphen. See [docs](https://docs.snowflake.com/en/user-guide/organizations-connect#okta-urls).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/saml2_integration#saml2_snowflake_acs_url Saml2Integration#saml2_snowflake_acs_url}
  */
  readonly saml2SnowflakeAcsUrl?: string;
  /**
  * The string containing the EntityID / Issuer for the Snowflake service provider. If an incorrect value is specified, Snowflake returns an error message indicating the acceptable values to use. Because Okta does not support underscores in URLs, the underscore in the account name must be converted to a hyphen. See [docs](https://docs.snowflake.com/en/user-guide/organizations-connect#okta-urls).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/saml2_integration#saml2_snowflake_issuer_url Saml2Integration#saml2_snowflake_issuer_url}
  */
  readonly saml2SnowflakeIssuerUrl?: string;
  /**
  * The string containing the label to display after the Log In With button on the login page. If this field changes value from non-empty to empty, the whole resource is recreated because of Snowflake limitations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/saml2_integration#saml2_sp_initiated_login_page_label Saml2Integration#saml2_sp_initiated_login_page_label}
  */
  readonly saml2SpInitiatedLoginPageLabel?: string;
  /**
  * The string containing the IdP SSO URL, where the user should be redirected by Snowflake (the Service Provider) with a SAML AuthnRequest message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/saml2_integration#saml2_sso_url Saml2Integration#saml2_sso_url}
  */
  readonly saml2SsoUrl: string;
  /**
  * The Base64 encoded IdP signing certificate on a single line without the leading -----BEGIN CERTIFICATE----- and ending -----END CERTIFICATE----- markers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/saml2_integration#saml2_x509_cert Saml2Integration#saml2_x509_cert}
  */
  readonly saml2X509Cert: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/saml2_integration#timeouts Saml2Integration#timeouts}
  */
  readonly timeouts?: Saml2IntegrationTimeouts;
}
export interface Saml2IntegrationDescribeOutputAllowedEmailPatterns {
}

export function saml2IntegrationDescribeOutputAllowedEmailPatternsToTerraform(struct?: Saml2IntegrationDescribeOutputAllowedEmailPatterns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function saml2IntegrationDescribeOutputAllowedEmailPatternsToHclTerraform(struct?: Saml2IntegrationDescribeOutputAllowedEmailPatterns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Saml2IntegrationDescribeOutputAllowedEmailPatterns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Saml2IntegrationDescribeOutputAllowedEmailPatterns | undefined) {
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

export class Saml2IntegrationDescribeOutputAllowedEmailPatternsList extends cdktf.ComplexList {

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
  public get(index: number): Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference {
    return new Saml2IntegrationDescribeOutputAllowedEmailPatternsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Saml2IntegrationDescribeOutputAllowedUserDomains {
}

export function saml2IntegrationDescribeOutputAllowedUserDomainsToTerraform(struct?: Saml2IntegrationDescribeOutputAllowedUserDomains): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function saml2IntegrationDescribeOutputAllowedUserDomainsToHclTerraform(struct?: Saml2IntegrationDescribeOutputAllowedUserDomains): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Saml2IntegrationDescribeOutputAllowedUserDomains | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Saml2IntegrationDescribeOutputAllowedUserDomains | undefined) {
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

export class Saml2IntegrationDescribeOutputAllowedUserDomainsList extends cdktf.ComplexList {

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
  public get(index: number): Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference {
    return new Saml2IntegrationDescribeOutputAllowedUserDomainsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Saml2IntegrationDescribeOutputComment {
}

export function saml2IntegrationDescribeOutputCommentToTerraform(struct?: Saml2IntegrationDescribeOutputComment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function saml2IntegrationDescribeOutputCommentToHclTerraform(struct?: Saml2IntegrationDescribeOutputComment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class Saml2IntegrationDescribeOutputCommentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Saml2IntegrationDescribeOutputComment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Saml2IntegrationDescribeOutputComment | undefined) {
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

export class Saml2IntegrationDescribeOutputCommentList extends cdktf.ComplexList {

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
  public get(index: number): Saml2IntegrationDescribeOutputCommentOutputReference {
    return new Saml2IntegrationDescribeOutputCommentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Saml2IntegrationDescribeOutputSaml2DigestMethodsUsed {
}

export function saml2IntegrationDescribeOutputSaml2DigestMethodsUsedToTerraform(struct?: Saml2IntegrationDescribeOutputSaml2DigestMethodsUsed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function saml2IntegrationDescribeOutputSaml2DigestMethodsUsedToHclTerraform(struct?: Saml2IntegrationDescribeOutputSaml2DigestMethodsUsed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Saml2IntegrationDescribeOutputSaml2DigestMethodsUsed | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Saml2IntegrationDescribeOutputSaml2DigestMethodsUsed | undefined) {
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

export class Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList extends cdktf.ComplexList {

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
  public get(index: number): Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference {
    return new Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Saml2IntegrationDescribeOutputSaml2EnableSpInitiated {
}

export function saml2IntegrationDescribeOutputSaml2EnableSpInitiatedToTerraform(struct?: Saml2IntegrationDescribeOutputSaml2EnableSpInitiated): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function saml2IntegrationDescribeOutputSaml2EnableSpInitiatedToHclTerraform(struct?: Saml2IntegrationDescribeOutputSaml2EnableSpInitiated): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Saml2IntegrationDescribeOutputSaml2EnableSpInitiated | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Saml2IntegrationDescribeOutputSaml2EnableSpInitiated | undefined) {
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

export class Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList extends cdktf.ComplexList {

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
  public get(index: number): Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference {
    return new Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Saml2IntegrationDescribeOutputSaml2ForceAuthn {
}

export function saml2IntegrationDescribeOutputSaml2ForceAuthnToTerraform(struct?: Saml2IntegrationDescribeOutputSaml2ForceAuthn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function saml2IntegrationDescribeOutputSaml2ForceAuthnToHclTerraform(struct?: Saml2IntegrationDescribeOutputSaml2ForceAuthn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Saml2IntegrationDescribeOutputSaml2ForceAuthn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Saml2IntegrationDescribeOutputSaml2ForceAuthn | undefined) {
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

export class Saml2IntegrationDescribeOutputSaml2ForceAuthnList extends cdktf.ComplexList {

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
  public get(index: number): Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference {
    return new Saml2IntegrationDescribeOutputSaml2ForceAuthnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Saml2IntegrationDescribeOutputSaml2Issuer {
}

export function saml2IntegrationDescribeOutputSaml2IssuerToTerraform(struct?: Saml2IntegrationDescribeOutputSaml2Issuer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function saml2IntegrationDescribeOutputSaml2IssuerToHclTerraform(struct?: Saml2IntegrationDescribeOutputSaml2Issuer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class Saml2IntegrationDescribeOutputSaml2IssuerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Saml2IntegrationDescribeOutputSaml2Issuer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Saml2IntegrationDescribeOutputSaml2Issuer | undefined) {
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

export class Saml2IntegrationDescribeOutputSaml2IssuerList extends cdktf.ComplexList {

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
  public get(index: number): Saml2IntegrationDescribeOutputSaml2IssuerOutputReference {
    return new Saml2IntegrationDescribeOutputSaml2IssuerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrl {
}

export function saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlToTerraform(struct?: Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlToHclTerraform(struct?: Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrl | undefined) {
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

export class Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList extends cdktf.ComplexList {

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
  public get(index: number): Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference {
    return new Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Saml2IntegrationDescribeOutputSaml2Provider {
}

export function saml2IntegrationDescribeOutputSaml2ProviderToTerraform(struct?: Saml2IntegrationDescribeOutputSaml2Provider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function saml2IntegrationDescribeOutputSaml2ProviderToHclTerraform(struct?: Saml2IntegrationDescribeOutputSaml2Provider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class Saml2IntegrationDescribeOutputSaml2ProviderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Saml2IntegrationDescribeOutputSaml2Provider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Saml2IntegrationDescribeOutputSaml2Provider | undefined) {
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

export class Saml2IntegrationDescribeOutputSaml2ProviderList extends cdktf.ComplexList {

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
  public get(index: number): Saml2IntegrationDescribeOutputSaml2ProviderOutputReference {
    return new Saml2IntegrationDescribeOutputSaml2ProviderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Saml2IntegrationDescribeOutputSaml2RequestedNameidFormat {
}

export function saml2IntegrationDescribeOutputSaml2RequestedNameidFormatToTerraform(struct?: Saml2IntegrationDescribeOutputSaml2RequestedNameidFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function saml2IntegrationDescribeOutputSaml2RequestedNameidFormatToHclTerraform(struct?: Saml2IntegrationDescribeOutputSaml2RequestedNameidFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Saml2IntegrationDescribeOutputSaml2RequestedNameidFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Saml2IntegrationDescribeOutputSaml2RequestedNameidFormat | undefined) {
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

export class Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList extends cdktf.ComplexList {

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
  public get(index: number): Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference {
    return new Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Saml2IntegrationDescribeOutputSaml2SignRequest {
}

export function saml2IntegrationDescribeOutputSaml2SignRequestToTerraform(struct?: Saml2IntegrationDescribeOutputSaml2SignRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function saml2IntegrationDescribeOutputSaml2SignRequestToHclTerraform(struct?: Saml2IntegrationDescribeOutputSaml2SignRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Saml2IntegrationDescribeOutputSaml2SignRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Saml2IntegrationDescribeOutputSaml2SignRequest | undefined) {
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

export class Saml2IntegrationDescribeOutputSaml2SignRequestList extends cdktf.ComplexList {

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
  public get(index: number): Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference {
    return new Saml2IntegrationDescribeOutputSaml2SignRequestOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsed {
}

export function saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedToTerraform(struct?: Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedToHclTerraform(struct?: Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsed | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsed | undefined) {
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

export class Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList extends cdktf.ComplexList {

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
  public get(index: number): Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference {
    return new Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrl {
}

export function saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlToTerraform(struct?: Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlToHclTerraform(struct?: Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrl | undefined) {
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

export class Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList extends cdktf.ComplexList {

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
  public get(index: number): Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference {
    return new Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrl {
}

export function saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlToTerraform(struct?: Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlToHclTerraform(struct?: Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrl | undefined) {
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

export class Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList extends cdktf.ComplexList {

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
  public get(index: number): Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference {
    return new Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Saml2IntegrationDescribeOutputSaml2SnowflakeMetadata {
}

export function saml2IntegrationDescribeOutputSaml2SnowflakeMetadataToTerraform(struct?: Saml2IntegrationDescribeOutputSaml2SnowflakeMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function saml2IntegrationDescribeOutputSaml2SnowflakeMetadataToHclTerraform(struct?: Saml2IntegrationDescribeOutputSaml2SnowflakeMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Saml2IntegrationDescribeOutputSaml2SnowflakeMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Saml2IntegrationDescribeOutputSaml2SnowflakeMetadata | undefined) {
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

export class Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList extends cdktf.ComplexList {

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
  public get(index: number): Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference {
    return new Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabel {
}

export function saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelToTerraform(struct?: Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelToHclTerraform(struct?: Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabel | undefined) {
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

export class Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList extends cdktf.ComplexList {

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
  public get(index: number): Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference {
    return new Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Saml2IntegrationDescribeOutputSaml2SsoUrl {
}

export function saml2IntegrationDescribeOutputSaml2SsoUrlToTerraform(struct?: Saml2IntegrationDescribeOutputSaml2SsoUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function saml2IntegrationDescribeOutputSaml2SsoUrlToHclTerraform(struct?: Saml2IntegrationDescribeOutputSaml2SsoUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Saml2IntegrationDescribeOutputSaml2SsoUrl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Saml2IntegrationDescribeOutputSaml2SsoUrl | undefined) {
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

export class Saml2IntegrationDescribeOutputSaml2SsoUrlList extends cdktf.ComplexList {

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
  public get(index: number): Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference {
    return new Saml2IntegrationDescribeOutputSaml2SsoUrlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Saml2IntegrationDescribeOutput {
}

export function saml2IntegrationDescribeOutputToTerraform(struct?: Saml2IntegrationDescribeOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function saml2IntegrationDescribeOutputToHclTerraform(struct?: Saml2IntegrationDescribeOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class Saml2IntegrationDescribeOutputOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Saml2IntegrationDescribeOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Saml2IntegrationDescribeOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_email_patterns - computed: true, optional: false, required: false
  private _allowedEmailPatterns = new Saml2IntegrationDescribeOutputAllowedEmailPatternsList(this, "allowed_email_patterns", false);
  public get allowedEmailPatterns() {
    return this._allowedEmailPatterns;
  }

  // allowed_user_domains - computed: true, optional: false, required: false
  private _allowedUserDomains = new Saml2IntegrationDescribeOutputAllowedUserDomainsList(this, "allowed_user_domains", false);
  public get allowedUserDomains() {
    return this._allowedUserDomains;
  }

  // comment - computed: true, optional: false, required: false
  private _comment = new Saml2IntegrationDescribeOutputCommentList(this, "comment", false);
  public get comment() {
    return this._comment;
  }

  // saml2_digest_methods_used - computed: true, optional: false, required: false
  private _saml2DigestMethodsUsed = new Saml2IntegrationDescribeOutputSaml2DigestMethodsUsedList(this, "saml2_digest_methods_used", false);
  public get saml2DigestMethodsUsed() {
    return this._saml2DigestMethodsUsed;
  }

  // saml2_enable_sp_initiated - computed: true, optional: false, required: false
  private _saml2EnableSpInitiated = new Saml2IntegrationDescribeOutputSaml2EnableSpInitiatedList(this, "saml2_enable_sp_initiated", false);
  public get saml2EnableSpInitiated() {
    return this._saml2EnableSpInitiated;
  }

  // saml2_force_authn - computed: true, optional: false, required: false
  private _saml2ForceAuthn = new Saml2IntegrationDescribeOutputSaml2ForceAuthnList(this, "saml2_force_authn", false);
  public get saml2ForceAuthn() {
    return this._saml2ForceAuthn;
  }

  // saml2_issuer - computed: true, optional: false, required: false
  private _saml2Issuer = new Saml2IntegrationDescribeOutputSaml2IssuerList(this, "saml2_issuer", false);
  public get saml2Issuer() {
    return this._saml2Issuer;
  }

  // saml2_post_logout_redirect_url - computed: true, optional: false, required: false
  private _saml2PostLogoutRedirectUrl = new Saml2IntegrationDescribeOutputSaml2PostLogoutRedirectUrlList(this, "saml2_post_logout_redirect_url", false);
  public get saml2PostLogoutRedirectUrl() {
    return this._saml2PostLogoutRedirectUrl;
  }

  // saml2_provider - computed: true, optional: false, required: false
  private _saml2Provider = new Saml2IntegrationDescribeOutputSaml2ProviderList(this, "saml2_provider", false);
  public get saml2Provider() {
    return this._saml2Provider;
  }

  // saml2_requested_nameid_format - computed: true, optional: false, required: false
  private _saml2RequestedNameidFormat = new Saml2IntegrationDescribeOutputSaml2RequestedNameidFormatList(this, "saml2_requested_nameid_format", false);
  public get saml2RequestedNameidFormat() {
    return this._saml2RequestedNameidFormat;
  }

  // saml2_sign_request - computed: true, optional: false, required: false
  private _saml2SignRequest = new Saml2IntegrationDescribeOutputSaml2SignRequestList(this, "saml2_sign_request", false);
  public get saml2SignRequest() {
    return this._saml2SignRequest;
  }

  // saml2_signature_methods_used - computed: true, optional: false, required: false
  private _saml2SignatureMethodsUsed = new Saml2IntegrationDescribeOutputSaml2SignatureMethodsUsedList(this, "saml2_signature_methods_used", false);
  public get saml2SignatureMethodsUsed() {
    return this._saml2SignatureMethodsUsed;
  }

  // saml2_snowflake_acs_url - computed: true, optional: false, required: false
  private _saml2SnowflakeAcsUrl = new Saml2IntegrationDescribeOutputSaml2SnowflakeAcsUrlList(this, "saml2_snowflake_acs_url", false);
  public get saml2SnowflakeAcsUrl() {
    return this._saml2SnowflakeAcsUrl;
  }

  // saml2_snowflake_issuer_url - computed: true, optional: false, required: false
  private _saml2SnowflakeIssuerUrl = new Saml2IntegrationDescribeOutputSaml2SnowflakeIssuerUrlList(this, "saml2_snowflake_issuer_url", false);
  public get saml2SnowflakeIssuerUrl() {
    return this._saml2SnowflakeIssuerUrl;
  }

  // saml2_snowflake_metadata - computed: true, optional: false, required: false
  private _saml2SnowflakeMetadata = new Saml2IntegrationDescribeOutputSaml2SnowflakeMetadataList(this, "saml2_snowflake_metadata", false);
  public get saml2SnowflakeMetadata() {
    return this._saml2SnowflakeMetadata;
  }

  // saml2_sp_initiated_login_page_label - computed: true, optional: false, required: false
  private _saml2SpInitiatedLoginPageLabel = new Saml2IntegrationDescribeOutputSaml2SpInitiatedLoginPageLabelList(this, "saml2_sp_initiated_login_page_label", false);
  public get saml2SpInitiatedLoginPageLabel() {
    return this._saml2SpInitiatedLoginPageLabel;
  }

  // saml2_sso_url - computed: true, optional: false, required: false
  private _saml2SsoUrl = new Saml2IntegrationDescribeOutputSaml2SsoUrlList(this, "saml2_sso_url", false);
  public get saml2SsoUrl() {
    return this._saml2SsoUrl;
  }
}

export class Saml2IntegrationDescribeOutputList extends cdktf.ComplexList {

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
  public get(index: number): Saml2IntegrationDescribeOutputOutputReference {
    return new Saml2IntegrationDescribeOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Saml2IntegrationShowOutput {
}

export function saml2IntegrationShowOutputToTerraform(struct?: Saml2IntegrationShowOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function saml2IntegrationShowOutputToHclTerraform(struct?: Saml2IntegrationShowOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class Saml2IntegrationShowOutputOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Saml2IntegrationShowOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Saml2IntegrationShowOutput | undefined) {
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

export class Saml2IntegrationShowOutputList extends cdktf.ComplexList {

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
  public get(index: number): Saml2IntegrationShowOutputOutputReference {
    return new Saml2IntegrationShowOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Saml2IntegrationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/saml2_integration#create Saml2Integration#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/saml2_integration#delete Saml2Integration#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/saml2_integration#read Saml2Integration#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/saml2_integration#update Saml2Integration#update}
  */
  readonly update?: string;
}

export function saml2IntegrationTimeoutsToTerraform(struct?: Saml2IntegrationTimeouts | cdktf.IResolvable): any {
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


export function saml2IntegrationTimeoutsToHclTerraform(struct?: Saml2IntegrationTimeouts | cdktf.IResolvable): any {
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

export class Saml2IntegrationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Saml2IntegrationTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Saml2IntegrationTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/saml2_integration snowflake_saml2_integration}
*/
export class Saml2Integration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_saml2_integration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Saml2Integration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Saml2Integration to import
  * @param importFromId The id of the existing Saml2Integration that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/saml2_integration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Saml2Integration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_saml2_integration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/saml2_integration snowflake_saml2_integration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Saml2IntegrationConfig
  */
  public constructor(scope: Construct, id: string, config: Saml2IntegrationConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_saml2_integration',
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
    this._allowedEmailPatterns = config.allowedEmailPatterns;
    this._allowedUserDomains = config.allowedUserDomains;
    this._comment = config.comment;
    this._enabled = config.enabled;
    this._id = config.id;
    this._name = config.name;
    this._saml2EnableSpInitiated = config.saml2EnableSpInitiated;
    this._saml2ForceAuthn = config.saml2ForceAuthn;
    this._saml2Issuer = config.saml2Issuer;
    this._saml2PostLogoutRedirectUrl = config.saml2PostLogoutRedirectUrl;
    this._saml2Provider = config.saml2Provider;
    this._saml2RequestedNameidFormat = config.saml2RequestedNameidFormat;
    this._saml2SignRequest = config.saml2SignRequest;
    this._saml2SnowflakeAcsUrl = config.saml2SnowflakeAcsUrl;
    this._saml2SnowflakeIssuerUrl = config.saml2SnowflakeIssuerUrl;
    this._saml2SpInitiatedLoginPageLabel = config.saml2SpInitiatedLoginPageLabel;
    this._saml2SsoUrl = config.saml2SsoUrl;
    this._saml2X509Cert = config.saml2X509Cert;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_email_patterns - computed: false, optional: true, required: false
  private _allowedEmailPatterns?: string[]; 
  public get allowedEmailPatterns() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_email_patterns'));
  }
  public set allowedEmailPatterns(value: string[]) {
    this._allowedEmailPatterns = value;
  }
  public resetAllowedEmailPatterns() {
    this._allowedEmailPatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedEmailPatternsInput() {
    return this._allowedEmailPatterns;
  }

  // allowed_user_domains - computed: false, optional: true, required: false
  private _allowedUserDomains?: string[]; 
  public get allowedUserDomains() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_user_domains'));
  }
  public set allowedUserDomains(value: string[]) {
    this._allowedUserDomains = value;
  }
  public resetAllowedUserDomains() {
    this._allowedUserDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedUserDomainsInput() {
    return this._allowedUserDomains;
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
  private _describeOutput = new Saml2IntegrationDescribeOutputList(this, "describe_output", false);
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

  // saml2_enable_sp_initiated - computed: false, optional: true, required: false
  private _saml2EnableSpInitiated?: string; 
  public get saml2EnableSpInitiated() {
    return this.getStringAttribute('saml2_enable_sp_initiated');
  }
  public set saml2EnableSpInitiated(value: string) {
    this._saml2EnableSpInitiated = value;
  }
  public resetSaml2EnableSpInitiated() {
    this._saml2EnableSpInitiated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saml2EnableSpInitiatedInput() {
    return this._saml2EnableSpInitiated;
  }

  // saml2_force_authn - computed: false, optional: true, required: false
  private _saml2ForceAuthn?: string; 
  public get saml2ForceAuthn() {
    return this.getStringAttribute('saml2_force_authn');
  }
  public set saml2ForceAuthn(value: string) {
    this._saml2ForceAuthn = value;
  }
  public resetSaml2ForceAuthn() {
    this._saml2ForceAuthn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saml2ForceAuthnInput() {
    return this._saml2ForceAuthn;
  }

  // saml2_issuer - computed: false, optional: false, required: true
  private _saml2Issuer?: string; 
  public get saml2Issuer() {
    return this.getStringAttribute('saml2_issuer');
  }
  public set saml2Issuer(value: string) {
    this._saml2Issuer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get saml2IssuerInput() {
    return this._saml2Issuer;
  }

  // saml2_post_logout_redirect_url - computed: false, optional: true, required: false
  private _saml2PostLogoutRedirectUrl?: string; 
  public get saml2PostLogoutRedirectUrl() {
    return this.getStringAttribute('saml2_post_logout_redirect_url');
  }
  public set saml2PostLogoutRedirectUrl(value: string) {
    this._saml2PostLogoutRedirectUrl = value;
  }
  public resetSaml2PostLogoutRedirectUrl() {
    this._saml2PostLogoutRedirectUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saml2PostLogoutRedirectUrlInput() {
    return this._saml2PostLogoutRedirectUrl;
  }

  // saml2_provider - computed: false, optional: false, required: true
  private _saml2Provider?: string; 
  public get saml2Provider() {
    return this.getStringAttribute('saml2_provider');
  }
  public set saml2Provider(value: string) {
    this._saml2Provider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get saml2ProviderInput() {
    return this._saml2Provider;
  }

  // saml2_requested_nameid_format - computed: false, optional: true, required: false
  private _saml2RequestedNameidFormat?: string; 
  public get saml2RequestedNameidFormat() {
    return this.getStringAttribute('saml2_requested_nameid_format');
  }
  public set saml2RequestedNameidFormat(value: string) {
    this._saml2RequestedNameidFormat = value;
  }
  public resetSaml2RequestedNameidFormat() {
    this._saml2RequestedNameidFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saml2RequestedNameidFormatInput() {
    return this._saml2RequestedNameidFormat;
  }

  // saml2_sign_request - computed: false, optional: true, required: false
  private _saml2SignRequest?: string; 
  public get saml2SignRequest() {
    return this.getStringAttribute('saml2_sign_request');
  }
  public set saml2SignRequest(value: string) {
    this._saml2SignRequest = value;
  }
  public resetSaml2SignRequest() {
    this._saml2SignRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saml2SignRequestInput() {
    return this._saml2SignRequest;
  }

  // saml2_snowflake_acs_url - computed: false, optional: true, required: false
  private _saml2SnowflakeAcsUrl?: string; 
  public get saml2SnowflakeAcsUrl() {
    return this.getStringAttribute('saml2_snowflake_acs_url');
  }
  public set saml2SnowflakeAcsUrl(value: string) {
    this._saml2SnowflakeAcsUrl = value;
  }
  public resetSaml2SnowflakeAcsUrl() {
    this._saml2SnowflakeAcsUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saml2SnowflakeAcsUrlInput() {
    return this._saml2SnowflakeAcsUrl;
  }

  // saml2_snowflake_issuer_url - computed: false, optional: true, required: false
  private _saml2SnowflakeIssuerUrl?: string; 
  public get saml2SnowflakeIssuerUrl() {
    return this.getStringAttribute('saml2_snowflake_issuer_url');
  }
  public set saml2SnowflakeIssuerUrl(value: string) {
    this._saml2SnowflakeIssuerUrl = value;
  }
  public resetSaml2SnowflakeIssuerUrl() {
    this._saml2SnowflakeIssuerUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saml2SnowflakeIssuerUrlInput() {
    return this._saml2SnowflakeIssuerUrl;
  }

  // saml2_sp_initiated_login_page_label - computed: false, optional: true, required: false
  private _saml2SpInitiatedLoginPageLabel?: string; 
  public get saml2SpInitiatedLoginPageLabel() {
    return this.getStringAttribute('saml2_sp_initiated_login_page_label');
  }
  public set saml2SpInitiatedLoginPageLabel(value: string) {
    this._saml2SpInitiatedLoginPageLabel = value;
  }
  public resetSaml2SpInitiatedLoginPageLabel() {
    this._saml2SpInitiatedLoginPageLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saml2SpInitiatedLoginPageLabelInput() {
    return this._saml2SpInitiatedLoginPageLabel;
  }

  // saml2_sso_url - computed: false, optional: false, required: true
  private _saml2SsoUrl?: string; 
  public get saml2SsoUrl() {
    return this.getStringAttribute('saml2_sso_url');
  }
  public set saml2SsoUrl(value: string) {
    this._saml2SsoUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get saml2SsoUrlInput() {
    return this._saml2SsoUrl;
  }

  // saml2_x509_cert - computed: false, optional: false, required: true
  private _saml2X509Cert?: string; 
  public get saml2X509Cert() {
    return this.getStringAttribute('saml2_x509_cert');
  }
  public set saml2X509Cert(value: string) {
    this._saml2X509Cert = value;
  }
  // Temporarily expose input value. Use with caution.
  public get saml2X509CertInput() {
    return this._saml2X509Cert;
  }

  // show_output - computed: true, optional: false, required: false
  private _showOutput = new Saml2IntegrationShowOutputList(this, "show_output", false);
  public get showOutput() {
    return this._showOutput;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new Saml2IntegrationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: Saml2IntegrationTimeouts) {
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
      allowed_email_patterns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedEmailPatterns),
      allowed_user_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedUserDomains),
      comment: cdktf.stringToTerraform(this._comment),
      enabled: cdktf.stringToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      saml2_enable_sp_initiated: cdktf.stringToTerraform(this._saml2EnableSpInitiated),
      saml2_force_authn: cdktf.stringToTerraform(this._saml2ForceAuthn),
      saml2_issuer: cdktf.stringToTerraform(this._saml2Issuer),
      saml2_post_logout_redirect_url: cdktf.stringToTerraform(this._saml2PostLogoutRedirectUrl),
      saml2_provider: cdktf.stringToTerraform(this._saml2Provider),
      saml2_requested_nameid_format: cdktf.stringToTerraform(this._saml2RequestedNameidFormat),
      saml2_sign_request: cdktf.stringToTerraform(this._saml2SignRequest),
      saml2_snowflake_acs_url: cdktf.stringToTerraform(this._saml2SnowflakeAcsUrl),
      saml2_snowflake_issuer_url: cdktf.stringToTerraform(this._saml2SnowflakeIssuerUrl),
      saml2_sp_initiated_login_page_label: cdktf.stringToTerraform(this._saml2SpInitiatedLoginPageLabel),
      saml2_sso_url: cdktf.stringToTerraform(this._saml2SsoUrl),
      saml2_x509_cert: cdktf.stringToTerraform(this._saml2X509Cert),
      timeouts: saml2IntegrationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_email_patterns: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedEmailPatterns),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      allowed_user_domains: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedUserDomains),
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
      saml2_enable_sp_initiated: {
        value: cdktf.stringToHclTerraform(this._saml2EnableSpInitiated),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      saml2_force_authn: {
        value: cdktf.stringToHclTerraform(this._saml2ForceAuthn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      saml2_issuer: {
        value: cdktf.stringToHclTerraform(this._saml2Issuer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      saml2_post_logout_redirect_url: {
        value: cdktf.stringToHclTerraform(this._saml2PostLogoutRedirectUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      saml2_provider: {
        value: cdktf.stringToHclTerraform(this._saml2Provider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      saml2_requested_nameid_format: {
        value: cdktf.stringToHclTerraform(this._saml2RequestedNameidFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      saml2_sign_request: {
        value: cdktf.stringToHclTerraform(this._saml2SignRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      saml2_snowflake_acs_url: {
        value: cdktf.stringToHclTerraform(this._saml2SnowflakeAcsUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      saml2_snowflake_issuer_url: {
        value: cdktf.stringToHclTerraform(this._saml2SnowflakeIssuerUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      saml2_sp_initiated_login_page_label: {
        value: cdktf.stringToHclTerraform(this._saml2SpInitiatedLoginPageLabel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      saml2_sso_url: {
        value: cdktf.stringToHclTerraform(this._saml2SsoUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      saml2_x509_cert: {
        value: cdktf.stringToHclTerraform(this._saml2X509Cert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: saml2IntegrationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "Saml2IntegrationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
