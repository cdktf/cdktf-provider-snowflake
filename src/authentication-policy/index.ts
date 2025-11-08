/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/authentication_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthenticationPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * A list of authentication methods that are allowed during login. Valid values are (case-insensitive): `ALL` | `SAML` | `PASSWORD` | `OAUTH` | `KEYPAIR` | `PROGRAMMATIC_ACCESS_TOKEN` | `WORKLOAD_IDENTITY`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/authentication_policy#authentication_methods AuthenticationPolicy#authentication_methods}
  */
  readonly authenticationMethods?: string[];
  /**
  * A list of clients that can authenticate with Snowflake. If a client tries to connect, and the client is not one of the valid `client_types`, then the login attempt fails. Valid values are (case-insensitive): `ALL` | `SNOWFLAKE_UI` | `DRIVERS` | `SNOWSQL` | `SNOWFLAKE_CLI`. The `client_types` property of an authentication policy is a best effort method to block user logins based on specific clients. It should not be used as the sole control to establish a security boundary.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/authentication_policy#client_types AuthenticationPolicy#client_types}
  */
  readonly clientTypes?: string[];
  /**
  * Specifies a comment for the authentication policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/authentication_policy#comment AuthenticationPolicy#comment}
  */
  readonly comment?: string;
  /**
  * The database in which to create the authentication policy. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/authentication_policy#database AuthenticationPolicy#database}
  */
  readonly database: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/authentication_policy#id AuthenticationPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A list of authentication methods that enforce multi-factor authentication (MFA) during login. Authentication methods not listed in this parameter do not prompt for multi-factor authentication. Allowed values are `ALL` | `SAML` | `PASSWORD`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/authentication_policy#mfa_authentication_methods AuthenticationPolicy#mfa_authentication_methods}
  */
  readonly mfaAuthenticationMethods?: string[];
  /**
  * Determines whether a user must enroll in multi-factor authentication. Valid values are (case-insensitive): `REQUIRED` | `REQUIRED_PASSWORD_ONLY` | `OPTIONAL`. When REQUIRED is specified, Enforces users to enroll in MFA. If this value is used, then the `client_types` parameter must include `snowflake_ui`, because Snowsight is the only place users can enroll in multi-factor authentication (MFA). Note that when you set this value to OPTIONAL, and your account setup forces users to enroll in MFA, then Snowflake may set quietly this value to `REQUIRED_PASSWORD_ONLY`, which may cause permadiff. In this case, you may want to adjust this field value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/authentication_policy#mfa_enrollment AuthenticationPolicy#mfa_enrollment}
  */
  readonly mfaEnrollment?: string;
  /**
  * Specifies the identifier for the authentication policy. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/authentication_policy#name AuthenticationPolicy#name}
  */
  readonly name: string;
  /**
  * The schema in which to create the authentication policy. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/authentication_policy#schema AuthenticationPolicy#schema}
  */
  readonly schema: string;
  /**
  * A list of security integrations the authentication policy is associated with. This parameter has no effect when `saml` or `oauth` are not in the `authentication_methods` list. All values in the `security_integrations` list must be compatible with the values in the `authentication_methods` list. For example, if `security_integrations` contains a SAML security integration, and `authentication_methods` contains OAUTH, then you cannot create the authentication policy. To allow all security integrations use `ALL` as parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/authentication_policy#security_integrations AuthenticationPolicy#security_integrations}
  */
  readonly securityIntegrations?: string[];
  /**
  * mfa_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/authentication_policy#mfa_policy AuthenticationPolicy#mfa_policy}
  */
  readonly mfaPolicy?: AuthenticationPolicyMfaPolicy;
  /**
  * pat_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/authentication_policy#pat_policy AuthenticationPolicy#pat_policy}
  */
  readonly patPolicy?: AuthenticationPolicyPatPolicy;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/authentication_policy#timeouts AuthenticationPolicy#timeouts}
  */
  readonly timeouts?: AuthenticationPolicyTimeouts;
  /**
  * workload_identity_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/authentication_policy#workload_identity_policy AuthenticationPolicy#workload_identity_policy}
  */
  readonly workloadIdentityPolicy?: AuthenticationPolicyWorkloadIdentityPolicy;
}
export interface AuthenticationPolicyDescribeOutput {
}

export function authenticationPolicyDescribeOutputToTerraform(struct?: AuthenticationPolicyDescribeOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function authenticationPolicyDescribeOutputToHclTerraform(struct?: AuthenticationPolicyDescribeOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AuthenticationPolicyDescribeOutputOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AuthenticationPolicyDescribeOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthenticationPolicyDescribeOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authentication_methods - computed: true, optional: false, required: false
  public get authenticationMethods() {
    return this.getStringAttribute('authentication_methods');
  }

  // client_types - computed: true, optional: false, required: false
  public get clientTypes() {
    return this.getStringAttribute('client_types');
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // mfa_authentication_methods - computed: true, optional: false, required: false
  public get mfaAuthenticationMethods() {
    return this.getStringAttribute('mfa_authentication_methods');
  }

  // mfa_enrollment - computed: true, optional: false, required: false
  public get mfaEnrollment() {
    return this.getStringAttribute('mfa_enrollment');
  }

  // mfa_policy - computed: true, optional: false, required: false
  public get mfaPolicy() {
    return this.getStringAttribute('mfa_policy');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // pat_policy - computed: true, optional: false, required: false
  public get patPolicy() {
    return this.getStringAttribute('pat_policy');
  }

  // security_integrations - computed: true, optional: false, required: false
  public get securityIntegrations() {
    return this.getStringAttribute('security_integrations');
  }

  // workload_identity_policy - computed: true, optional: false, required: false
  public get workloadIdentityPolicy() {
    return this.getStringAttribute('workload_identity_policy');
  }
}

export class AuthenticationPolicyDescribeOutputList extends cdktf.ComplexList {

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
  public get(index: number): AuthenticationPolicyDescribeOutputOutputReference {
    return new AuthenticationPolicyDescribeOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AuthenticationPolicyShowOutput {
}

export function authenticationPolicyShowOutputToTerraform(struct?: AuthenticationPolicyShowOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function authenticationPolicyShowOutputToHclTerraform(struct?: AuthenticationPolicyShowOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AuthenticationPolicyShowOutputOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AuthenticationPolicyShowOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthenticationPolicyShowOutput | undefined) {
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

  // database_name - computed: true, optional: false, required: false
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // options - computed: true, optional: false, required: false
  public get options() {
    return this.getStringAttribute('options');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // owner_role_type - computed: true, optional: false, required: false
  public get ownerRoleType() {
    return this.getStringAttribute('owner_role_type');
  }

  // schema_name - computed: true, optional: false, required: false
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }
}

export class AuthenticationPolicyShowOutputList extends cdktf.ComplexList {

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
  public get(index: number): AuthenticationPolicyShowOutputOutputReference {
    return new AuthenticationPolicyShowOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AuthenticationPolicyMfaPolicy {
  /**
  * Specifies the allowed methods for the MFA policy. Valid values are: `ALL` | `PASSKEY` | `TOTP` | `DUO`. These values are case-sensitive due to Terraform limitations (it's a nested field). Prefer using uppercased values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/authentication_policy#allowed_methods AuthenticationPolicy#allowed_methods}
  */
  readonly allowedMethods?: string[];
  /**
  * Determines whether multi-factor authentication (MFA) is enforced on external authentication. Valid values are (case-insensitive): `ALL` | `NONE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/authentication_policy#enforce_mfa_on_external_authentication AuthenticationPolicy#enforce_mfa_on_external_authentication}
  */
  readonly enforceMfaOnExternalAuthentication?: string;
}

export function authenticationPolicyMfaPolicyToTerraform(struct?: AuthenticationPolicyMfaPolicyOutputReference | AuthenticationPolicyMfaPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedMethods),
    enforce_mfa_on_external_authentication: cdktf.stringToTerraform(struct!.enforceMfaOnExternalAuthentication),
  }
}


export function authenticationPolicyMfaPolicyToHclTerraform(struct?: AuthenticationPolicyMfaPolicyOutputReference | AuthenticationPolicyMfaPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedMethods),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    enforce_mfa_on_external_authentication: {
      value: cdktf.stringToHclTerraform(struct!.enforceMfaOnExternalAuthentication),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthenticationPolicyMfaPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AuthenticationPolicyMfaPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedMethods = this._allowedMethods;
    }
    if (this._enforceMfaOnExternalAuthentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforceMfaOnExternalAuthentication = this._enforceMfaOnExternalAuthentication;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthenticationPolicyMfaPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedMethods = undefined;
      this._enforceMfaOnExternalAuthentication = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedMethods = value.allowedMethods;
      this._enforceMfaOnExternalAuthentication = value.enforceMfaOnExternalAuthentication;
    }
  }

  // allowed_methods - computed: false, optional: true, required: false
  private _allowedMethods?: string[]; 
  public get allowedMethods() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_methods'));
  }
  public set allowedMethods(value: string[]) {
    this._allowedMethods = value;
  }
  public resetAllowedMethods() {
    this._allowedMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedMethodsInput() {
    return this._allowedMethods;
  }

  // enforce_mfa_on_external_authentication - computed: false, optional: true, required: false
  private _enforceMfaOnExternalAuthentication?: string; 
  public get enforceMfaOnExternalAuthentication() {
    return this.getStringAttribute('enforce_mfa_on_external_authentication');
  }
  public set enforceMfaOnExternalAuthentication(value: string) {
    this._enforceMfaOnExternalAuthentication = value;
  }
  public resetEnforceMfaOnExternalAuthentication() {
    this._enforceMfaOnExternalAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceMfaOnExternalAuthenticationInput() {
    return this._enforceMfaOnExternalAuthentication;
  }
}
export interface AuthenticationPolicyPatPolicy {
  /**
  * Specifies the default expiration time (in days) for a programmatic access token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/authentication_policy#default_expiry_in_days AuthenticationPolicy#default_expiry_in_days}
  */
  readonly defaultExpiryInDays?: number;
  /**
  * Specifies the maximum number of days that can be set for the expiration time for a programmatic access token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/authentication_policy#max_expiry_in_days AuthenticationPolicy#max_expiry_in_days}
  */
  readonly maxExpiryInDays?: number;
  /**
  * Specifies the network policy evaluation for the PAT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/authentication_policy#network_policy_evaluation AuthenticationPolicy#network_policy_evaluation}
  */
  readonly networkPolicyEvaluation?: string;
}

export function authenticationPolicyPatPolicyToTerraform(struct?: AuthenticationPolicyPatPolicyOutputReference | AuthenticationPolicyPatPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_expiry_in_days: cdktf.numberToTerraform(struct!.defaultExpiryInDays),
    max_expiry_in_days: cdktf.numberToTerraform(struct!.maxExpiryInDays),
    network_policy_evaluation: cdktf.stringToTerraform(struct!.networkPolicyEvaluation),
  }
}


export function authenticationPolicyPatPolicyToHclTerraform(struct?: AuthenticationPolicyPatPolicyOutputReference | AuthenticationPolicyPatPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_expiry_in_days: {
      value: cdktf.numberToHclTerraform(struct!.defaultExpiryInDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_expiry_in_days: {
      value: cdktf.numberToHclTerraform(struct!.maxExpiryInDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    network_policy_evaluation: {
      value: cdktf.stringToHclTerraform(struct!.networkPolicyEvaluation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthenticationPolicyPatPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AuthenticationPolicyPatPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultExpiryInDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultExpiryInDays = this._defaultExpiryInDays;
    }
    if (this._maxExpiryInDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxExpiryInDays = this._maxExpiryInDays;
    }
    if (this._networkPolicyEvaluation !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPolicyEvaluation = this._networkPolicyEvaluation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthenticationPolicyPatPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultExpiryInDays = undefined;
      this._maxExpiryInDays = undefined;
      this._networkPolicyEvaluation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultExpiryInDays = value.defaultExpiryInDays;
      this._maxExpiryInDays = value.maxExpiryInDays;
      this._networkPolicyEvaluation = value.networkPolicyEvaluation;
    }
  }

  // default_expiry_in_days - computed: false, optional: true, required: false
  private _defaultExpiryInDays?: number; 
  public get defaultExpiryInDays() {
    return this.getNumberAttribute('default_expiry_in_days');
  }
  public set defaultExpiryInDays(value: number) {
    this._defaultExpiryInDays = value;
  }
  public resetDefaultExpiryInDays() {
    this._defaultExpiryInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultExpiryInDaysInput() {
    return this._defaultExpiryInDays;
  }

  // max_expiry_in_days - computed: false, optional: true, required: false
  private _maxExpiryInDays?: number; 
  public get maxExpiryInDays() {
    return this.getNumberAttribute('max_expiry_in_days');
  }
  public set maxExpiryInDays(value: number) {
    this._maxExpiryInDays = value;
  }
  public resetMaxExpiryInDays() {
    this._maxExpiryInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxExpiryInDaysInput() {
    return this._maxExpiryInDays;
  }

  // network_policy_evaluation - computed: false, optional: true, required: false
  private _networkPolicyEvaluation?: string; 
  public get networkPolicyEvaluation() {
    return this.getStringAttribute('network_policy_evaluation');
  }
  public set networkPolicyEvaluation(value: string) {
    this._networkPolicyEvaluation = value;
  }
  public resetNetworkPolicyEvaluation() {
    this._networkPolicyEvaluation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPolicyEvaluationInput() {
    return this._networkPolicyEvaluation;
  }
}
export interface AuthenticationPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/authentication_policy#create AuthenticationPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/authentication_policy#delete AuthenticationPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/authentication_policy#read AuthenticationPolicy#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/authentication_policy#update AuthenticationPolicy#update}
  */
  readonly update?: string;
}

export function authenticationPolicyTimeoutsToTerraform(struct?: AuthenticationPolicyTimeouts | cdktf.IResolvable): any {
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


export function authenticationPolicyTimeoutsToHclTerraform(struct?: AuthenticationPolicyTimeouts | cdktf.IResolvable): any {
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

export class AuthenticationPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AuthenticationPolicyTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AuthenticationPolicyTimeouts | cdktf.IResolvable | undefined) {
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
export interface AuthenticationPolicyWorkloadIdentityPolicy {
  /**
  * Specifies the list of AWS account IDs allowed by the authentication policy during workload identity authentication of type `AWS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/authentication_policy#allowed_aws_accounts AuthenticationPolicy#allowed_aws_accounts}
  */
  readonly allowedAwsAccounts?: string[];
  /**
  * Specifies the list of Azure Entra ID issuers allowed by the authentication policy during workload identity authentication of type `AZURE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/authentication_policy#allowed_azure_issuers AuthenticationPolicy#allowed_azure_issuers}
  */
  readonly allowedAzureIssuers?: string[];
  /**
  * Specifies the list of OIDC issuers allowed by the authentication policy during workload identity authentication of type `OIDC`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/authentication_policy#allowed_oidc_issuers AuthenticationPolicy#allowed_oidc_issuers}
  */
  readonly allowedOidcIssuers?: string[];
  /**
  * Specifies the allowed providers for the workload identity policy. Valid values are: `ALL` | `AWS` | `AZURE` | `GCP` | `OIDC`. These values are case-sensitive due to Terraform limitations (it's a nested field). Prefer using uppercased values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/authentication_policy#allowed_providers AuthenticationPolicy#allowed_providers}
  */
  readonly allowedProviders?: string[];
}

export function authenticationPolicyWorkloadIdentityPolicyToTerraform(struct?: AuthenticationPolicyWorkloadIdentityPolicyOutputReference | AuthenticationPolicyWorkloadIdentityPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_aws_accounts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedAwsAccounts),
    allowed_azure_issuers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedAzureIssuers),
    allowed_oidc_issuers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedOidcIssuers),
    allowed_providers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedProviders),
  }
}


export function authenticationPolicyWorkloadIdentityPolicyToHclTerraform(struct?: AuthenticationPolicyWorkloadIdentityPolicyOutputReference | AuthenticationPolicyWorkloadIdentityPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_aws_accounts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedAwsAccounts),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    allowed_azure_issuers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedAzureIssuers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    allowed_oidc_issuers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedOidcIssuers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    allowed_providers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedProviders),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthenticationPolicyWorkloadIdentityPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AuthenticationPolicyWorkloadIdentityPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedAwsAccounts !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedAwsAccounts = this._allowedAwsAccounts;
    }
    if (this._allowedAzureIssuers !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedAzureIssuers = this._allowedAzureIssuers;
    }
    if (this._allowedOidcIssuers !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedOidcIssuers = this._allowedOidcIssuers;
    }
    if (this._allowedProviders !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedProviders = this._allowedProviders;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthenticationPolicyWorkloadIdentityPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedAwsAccounts = undefined;
      this._allowedAzureIssuers = undefined;
      this._allowedOidcIssuers = undefined;
      this._allowedProviders = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedAwsAccounts = value.allowedAwsAccounts;
      this._allowedAzureIssuers = value.allowedAzureIssuers;
      this._allowedOidcIssuers = value.allowedOidcIssuers;
      this._allowedProviders = value.allowedProviders;
    }
  }

  // allowed_aws_accounts - computed: false, optional: true, required: false
  private _allowedAwsAccounts?: string[]; 
  public get allowedAwsAccounts() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_aws_accounts'));
  }
  public set allowedAwsAccounts(value: string[]) {
    this._allowedAwsAccounts = value;
  }
  public resetAllowedAwsAccounts() {
    this._allowedAwsAccounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedAwsAccountsInput() {
    return this._allowedAwsAccounts;
  }

  // allowed_azure_issuers - computed: false, optional: true, required: false
  private _allowedAzureIssuers?: string[]; 
  public get allowedAzureIssuers() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_azure_issuers'));
  }
  public set allowedAzureIssuers(value: string[]) {
    this._allowedAzureIssuers = value;
  }
  public resetAllowedAzureIssuers() {
    this._allowedAzureIssuers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedAzureIssuersInput() {
    return this._allowedAzureIssuers;
  }

  // allowed_oidc_issuers - computed: false, optional: true, required: false
  private _allowedOidcIssuers?: string[]; 
  public get allowedOidcIssuers() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_oidc_issuers'));
  }
  public set allowedOidcIssuers(value: string[]) {
    this._allowedOidcIssuers = value;
  }
  public resetAllowedOidcIssuers() {
    this._allowedOidcIssuers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedOidcIssuersInput() {
    return this._allowedOidcIssuers;
  }

  // allowed_providers - computed: false, optional: true, required: false
  private _allowedProviders?: string[]; 
  public get allowedProviders() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_providers'));
  }
  public set allowedProviders(value: string[]) {
    this._allowedProviders = value;
  }
  public resetAllowedProviders() {
    this._allowedProviders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedProvidersInput() {
    return this._allowedProviders;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/authentication_policy snowflake_authentication_policy}
*/
export class AuthenticationPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_authentication_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AuthenticationPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AuthenticationPolicy to import
  * @param importFromId The id of the existing AuthenticationPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/authentication_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AuthenticationPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_authentication_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/authentication_policy snowflake_authentication_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthenticationPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: AuthenticationPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_authentication_policy',
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
    this._authenticationMethods = config.authenticationMethods;
    this._clientTypes = config.clientTypes;
    this._comment = config.comment;
    this._database = config.database;
    this._id = config.id;
    this._mfaAuthenticationMethods = config.mfaAuthenticationMethods;
    this._mfaEnrollment = config.mfaEnrollment;
    this._name = config.name;
    this._schema = config.schema;
    this._securityIntegrations = config.securityIntegrations;
    this._mfaPolicy.internalValue = config.mfaPolicy;
    this._patPolicy.internalValue = config.patPolicy;
    this._timeouts.internalValue = config.timeouts;
    this._workloadIdentityPolicy.internalValue = config.workloadIdentityPolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication_methods - computed: false, optional: true, required: false
  private _authenticationMethods?: string[]; 
  public get authenticationMethods() {
    return cdktf.Fn.tolist(this.getListAttribute('authentication_methods'));
  }
  public set authenticationMethods(value: string[]) {
    this._authenticationMethods = value;
  }
  public resetAuthenticationMethods() {
    this._authenticationMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationMethodsInput() {
    return this._authenticationMethods;
  }

  // client_types - computed: false, optional: true, required: false
  private _clientTypes?: string[]; 
  public get clientTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('client_types'));
  }
  public set clientTypes(value: string[]) {
    this._clientTypes = value;
  }
  public resetClientTypes() {
    this._clientTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientTypesInput() {
    return this._clientTypes;
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

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // describe_output - computed: true, optional: false, required: false
  private _describeOutput = new AuthenticationPolicyDescribeOutputList(this, "describe_output", false);
  public get describeOutput() {
    return this._describeOutput;
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

  // mfa_authentication_methods - computed: false, optional: true, required: false
  private _mfaAuthenticationMethods?: string[]; 
  public get mfaAuthenticationMethods() {
    return cdktf.Fn.tolist(this.getListAttribute('mfa_authentication_methods'));
  }
  public set mfaAuthenticationMethods(value: string[]) {
    this._mfaAuthenticationMethods = value;
  }
  public resetMfaAuthenticationMethods() {
    this._mfaAuthenticationMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mfaAuthenticationMethodsInput() {
    return this._mfaAuthenticationMethods;
  }

  // mfa_enrollment - computed: false, optional: true, required: false
  private _mfaEnrollment?: string; 
  public get mfaEnrollment() {
    return this.getStringAttribute('mfa_enrollment');
  }
  public set mfaEnrollment(value: string) {
    this._mfaEnrollment = value;
  }
  public resetMfaEnrollment() {
    this._mfaEnrollment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mfaEnrollmentInput() {
    return this._mfaEnrollment;
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

  // schema - computed: false, optional: false, required: true
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }

  // security_integrations - computed: false, optional: true, required: false
  private _securityIntegrations?: string[]; 
  public get securityIntegrations() {
    return cdktf.Fn.tolist(this.getListAttribute('security_integrations'));
  }
  public set securityIntegrations(value: string[]) {
    this._securityIntegrations = value;
  }
  public resetSecurityIntegrations() {
    this._securityIntegrations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityIntegrationsInput() {
    return this._securityIntegrations;
  }

  // show_output - computed: true, optional: false, required: false
  private _showOutput = new AuthenticationPolicyShowOutputList(this, "show_output", false);
  public get showOutput() {
    return this._showOutput;
  }

  // mfa_policy - computed: false, optional: true, required: false
  private _mfaPolicy = new AuthenticationPolicyMfaPolicyOutputReference(this, "mfa_policy");
  public get mfaPolicy() {
    return this._mfaPolicy;
  }
  public putMfaPolicy(value: AuthenticationPolicyMfaPolicy) {
    this._mfaPolicy.internalValue = value;
  }
  public resetMfaPolicy() {
    this._mfaPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mfaPolicyInput() {
    return this._mfaPolicy.internalValue;
  }

  // pat_policy - computed: false, optional: true, required: false
  private _patPolicy = new AuthenticationPolicyPatPolicyOutputReference(this, "pat_policy");
  public get patPolicy() {
    return this._patPolicy;
  }
  public putPatPolicy(value: AuthenticationPolicyPatPolicy) {
    this._patPolicy.internalValue = value;
  }
  public resetPatPolicy() {
    this._patPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patPolicyInput() {
    return this._patPolicy.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AuthenticationPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AuthenticationPolicyTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // workload_identity_policy - computed: false, optional: true, required: false
  private _workloadIdentityPolicy = new AuthenticationPolicyWorkloadIdentityPolicyOutputReference(this, "workload_identity_policy");
  public get workloadIdentityPolicy() {
    return this._workloadIdentityPolicy;
  }
  public putWorkloadIdentityPolicy(value: AuthenticationPolicyWorkloadIdentityPolicy) {
    this._workloadIdentityPolicy.internalValue = value;
  }
  public resetWorkloadIdentityPolicy() {
    this._workloadIdentityPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadIdentityPolicyInput() {
    return this._workloadIdentityPolicy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authentication_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(this._authenticationMethods),
      client_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._clientTypes),
      comment: cdktf.stringToTerraform(this._comment),
      database: cdktf.stringToTerraform(this._database),
      id: cdktf.stringToTerraform(this._id),
      mfa_authentication_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(this._mfaAuthenticationMethods),
      mfa_enrollment: cdktf.stringToTerraform(this._mfaEnrollment),
      name: cdktf.stringToTerraform(this._name),
      schema: cdktf.stringToTerraform(this._schema),
      security_integrations: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityIntegrations),
      mfa_policy: authenticationPolicyMfaPolicyToTerraform(this._mfaPolicy.internalValue),
      pat_policy: authenticationPolicyPatPolicyToTerraform(this._patPolicy.internalValue),
      timeouts: authenticationPolicyTimeoutsToTerraform(this._timeouts.internalValue),
      workload_identity_policy: authenticationPolicyWorkloadIdentityPolicyToTerraform(this._workloadIdentityPolicy.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authentication_methods: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._authenticationMethods),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      client_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._clientTypes),
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
      database: {
        value: cdktf.stringToHclTerraform(this._database),
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
      mfa_authentication_methods: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._mfaAuthenticationMethods),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      mfa_enrollment: {
        value: cdktf.stringToHclTerraform(this._mfaEnrollment),
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
      schema: {
        value: cdktf.stringToHclTerraform(this._schema),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_integrations: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityIntegrations),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      mfa_policy: {
        value: authenticationPolicyMfaPolicyToHclTerraform(this._mfaPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AuthenticationPolicyMfaPolicyList",
      },
      pat_policy: {
        value: authenticationPolicyPatPolicyToHclTerraform(this._patPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AuthenticationPolicyPatPolicyList",
      },
      timeouts: {
        value: authenticationPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AuthenticationPolicyTimeouts",
      },
      workload_identity_policy: {
        value: authenticationPolicyWorkloadIdentityPolicyToHclTerraform(this._workloadIdentityPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AuthenticationPolicyWorkloadIdentityPolicyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
