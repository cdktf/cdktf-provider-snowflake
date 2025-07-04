/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/snowflakedb/snowflake/2.3.0/docs/data-sources/security_integrations
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSnowflakeSecurityIntegrationsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.3.0/docs/data-sources/security_integrations#id DataSnowflakeSecurityIntegrations#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.3.0/docs/data-sources/security_integrations#like DataSnowflakeSecurityIntegrations#like}
  */
  readonly like?: string;
  /**
  * (Default: `true`) Runs DESC SECURITY INTEGRATION for each security integration returned by SHOW SECURITY INTEGRATIONS. The output of describe is saved to the description field. By default this value is set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.3.0/docs/data-sources/security_integrations#with_describe DataSnowflakeSecurityIntegrations#with_describe}
  */
  readonly withDescribe?: boolean | cdktf.IResolvable;
}
export interface DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputAllowedEmailPatterns {
}

export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputAllowedEmailPatternsToTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputAllowedEmailPatterns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputAllowedEmailPatternsToHclTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputAllowedEmailPatterns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputAllowedEmailPatternsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputAllowedEmailPatterns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputAllowedEmailPatterns | undefined) {
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

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputAllowedEmailPatternsList extends cdktf.ComplexList {

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
  public get(index: number): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputAllowedEmailPatternsOutputReference {
    return new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputAllowedEmailPatternsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputAllowedUserDomains {
}

export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputAllowedUserDomainsToTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputAllowedUserDomains): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputAllowedUserDomainsToHclTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputAllowedUserDomains): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputAllowedUserDomainsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputAllowedUserDomains | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputAllowedUserDomains | undefined) {
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

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputAllowedUserDomainsList extends cdktf.ComplexList {

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
  public get(index: number): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputAllowedUserDomainsOutputReference {
    return new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputAllowedUserDomainsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputAuthType {
}

export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputAuthTypeToTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputAuthType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputAuthTypeToHclTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputAuthType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputAuthTypeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputAuthType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputAuthType | undefined) {
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

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputAuthTypeList extends cdktf.ComplexList {

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
  public get(index: number): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputAuthTypeOutputReference {
    return new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputAuthTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputBlockedRolesListStruct {
}

export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputBlockedRolesListStructToTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputBlockedRolesListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputBlockedRolesListStructToHclTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputBlockedRolesListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputBlockedRolesListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputBlockedRolesListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputBlockedRolesListStruct | undefined) {
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

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputBlockedRolesListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputBlockedRolesListStructOutputReference {
    return new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputBlockedRolesListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputComment {
}

export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputCommentToTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputComment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputCommentToHclTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputComment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputCommentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputComment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputComment | undefined) {
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

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputCommentList extends cdktf.ComplexList {

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
  public get(index: number): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputCommentOutputReference {
    return new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputCommentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputEnabled {
}

export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputEnabledToTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputEnabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputEnabledToHclTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputEnabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputEnabledOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputEnabled | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputEnabled | undefined) {
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

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputEnabledList extends cdktf.ComplexList {

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
  public get(index: number): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputEnabledOutputReference {
    return new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputEnabledOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthAllowedRolesListStruct {
}

export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthAllowedRolesListStructToTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthAllowedRolesListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthAllowedRolesListStructToHclTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthAllowedRolesListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthAllowedRolesListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthAllowedRolesListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthAllowedRolesListStruct | undefined) {
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

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthAllowedRolesListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthAllowedRolesListStructOutputReference {
    return new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthAllowedRolesListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthAnyRoleMode {
}

export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthAnyRoleModeToTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthAnyRoleMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthAnyRoleModeToHclTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthAnyRoleMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthAnyRoleModeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthAnyRoleMode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthAnyRoleMode | undefined) {
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

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthAnyRoleModeList extends cdktf.ComplexList {

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
  public get(index: number): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthAnyRoleModeOutputReference {
    return new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthAnyRoleModeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthAudienceListStruct {
}

export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthAudienceListStructToTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthAudienceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthAudienceListStructToHclTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthAudienceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthAudienceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthAudienceListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthAudienceListStruct | undefined) {
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

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthAudienceListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthAudienceListStructOutputReference {
    return new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthAudienceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthBlockedRolesListStruct {
}

export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthBlockedRolesListStructToTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthBlockedRolesListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthBlockedRolesListStructToHclTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthBlockedRolesListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthBlockedRolesListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthBlockedRolesListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthBlockedRolesListStruct | undefined) {
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

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthBlockedRolesListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthBlockedRolesListStructOutputReference {
    return new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthBlockedRolesListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthIssuer {
}

export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthIssuerToTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthIssuer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthIssuerToHclTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthIssuer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthIssuerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthIssuer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthIssuer | undefined) {
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

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthIssuerList extends cdktf.ComplexList {

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
  public get(index: number): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthIssuerOutputReference {
    return new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthIssuerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthJwsKeysUrl {
}

export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthJwsKeysUrlToTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthJwsKeysUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthJwsKeysUrlToHclTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthJwsKeysUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthJwsKeysUrlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthJwsKeysUrl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthJwsKeysUrl | undefined) {
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

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthJwsKeysUrlList extends cdktf.ComplexList {

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
  public get(index: number): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthJwsKeysUrlOutputReference {
    return new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthJwsKeysUrlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthRsaPublicKey {
}

export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthRsaPublicKeyToTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthRsaPublicKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthRsaPublicKeyToHclTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthRsaPublicKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthRsaPublicKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthRsaPublicKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthRsaPublicKey | undefined) {
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

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthRsaPublicKeyList extends cdktf.ComplexList {

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
  public get(index: number): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthRsaPublicKeyOutputReference {
    return new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthRsaPublicKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthRsaPublicKey2 {
}

export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthRsaPublicKey2ToTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthRsaPublicKey2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthRsaPublicKey2ToHclTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthRsaPublicKey2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthRsaPublicKey2OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthRsaPublicKey2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthRsaPublicKey2 | undefined) {
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

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthRsaPublicKey2List extends cdktf.ComplexList {

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
  public get(index: number): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthRsaPublicKey2OutputReference {
    return new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthRsaPublicKey2OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthScopeDelimiter {
}

export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthScopeDelimiterToTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthScopeDelimiter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthScopeDelimiterToHclTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthScopeDelimiter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthScopeDelimiterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthScopeDelimiter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthScopeDelimiter | undefined) {
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

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthScopeDelimiterList extends cdktf.ComplexList {

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
  public get(index: number): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthScopeDelimiterOutputReference {
    return new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthScopeDelimiterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthSnowflakeUserMappingAttribute {
}

export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthSnowflakeUserMappingAttributeToTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthSnowflakeUserMappingAttribute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthSnowflakeUserMappingAttributeToHclTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthSnowflakeUserMappingAttribute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthSnowflakeUserMappingAttribute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthSnowflakeUserMappingAttribute | undefined) {
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

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthSnowflakeUserMappingAttributeList extends cdktf.ComplexList {

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
  public get(index: number): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference {
    return new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthTokenUserMappingClaim {
}

export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthTokenUserMappingClaimToTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthTokenUserMappingClaim): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthTokenUserMappingClaimToHclTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthTokenUserMappingClaim): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthTokenUserMappingClaimOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthTokenUserMappingClaim | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthTokenUserMappingClaim | undefined) {
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

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthTokenUserMappingClaimList extends cdktf.ComplexList {

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
  public get(index: number): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthTokenUserMappingClaimOutputReference {
    return new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthTokenUserMappingClaimOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputNetworkPolicy {
}

export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputNetworkPolicyToTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputNetworkPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputNetworkPolicyToHclTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputNetworkPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputNetworkPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputNetworkPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputNetworkPolicy | undefined) {
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

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputNetworkPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputNetworkPolicyOutputReference {
    return new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputNetworkPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthAccessTokenValidity {
}

export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthAccessTokenValidityToTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthAccessTokenValidity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthAccessTokenValidityToHclTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthAccessTokenValidity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthAccessTokenValidityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthAccessTokenValidity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthAccessTokenValidity | undefined) {
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

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthAccessTokenValidityList extends cdktf.ComplexList {

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
  public get(index: number): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthAccessTokenValidityOutputReference {
    return new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthAccessTokenValidityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthAllowNonTlsRedirectUri {
}

export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthAllowNonTlsRedirectUriToTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthAllowNonTlsRedirectUri): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthAllowNonTlsRedirectUriToHclTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthAllowNonTlsRedirectUri): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthAllowNonTlsRedirectUri | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthAllowNonTlsRedirectUri | undefined) {
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

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthAllowNonTlsRedirectUriList extends cdktf.ComplexList {

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
  public get(index: number): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference {
    return new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthAllowNonTlsRedirectUriOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthAllowedAuthorizationEndpoints {
}

export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthAllowedAuthorizationEndpointsToTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthAllowedAuthorizationEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthAllowedAuthorizationEndpointsToHclTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthAllowedAuthorizationEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthAllowedAuthorizationEndpoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthAllowedAuthorizationEndpoints | undefined) {
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

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthAllowedAuthorizationEndpointsList extends cdktf.ComplexList {

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
  public get(index: number): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference {
    return new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthAllowedAuthorizationEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthAllowedScopes {
}

export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthAllowedScopesToTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthAllowedScopes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthAllowedScopesToHclTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthAllowedScopes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthAllowedScopesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthAllowedScopes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthAllowedScopes | undefined) {
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

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthAllowedScopesList extends cdktf.ComplexList {

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
  public get(index: number): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthAllowedScopesOutputReference {
    return new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthAllowedScopesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthAllowedTokenEndpoints {
}

export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthAllowedTokenEndpointsToTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthAllowedTokenEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthAllowedTokenEndpointsToHclTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthAllowedTokenEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthAllowedTokenEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthAllowedTokenEndpoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthAllowedTokenEndpoints | undefined) {
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

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthAllowedTokenEndpointsList extends cdktf.ComplexList {

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
  public get(index: number): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthAllowedTokenEndpointsOutputReference {
    return new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthAllowedTokenEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthAuthorizationEndpoint {
}

export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthAuthorizationEndpointToTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthAuthorizationEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthAuthorizationEndpointToHclTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthAuthorizationEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthAuthorizationEndpointOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthAuthorizationEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthAuthorizationEndpoint | undefined) {
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

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthAuthorizationEndpointList extends cdktf.ComplexList {

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
  public get(index: number): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthAuthorizationEndpointOutputReference {
    return new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthAuthorizationEndpointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthClientAuthMethod {
}

export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthClientAuthMethodToTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthClientAuthMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthClientAuthMethodToHclTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthClientAuthMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthClientAuthMethodOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthClientAuthMethod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthClientAuthMethod | undefined) {
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

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthClientAuthMethodList extends cdktf.ComplexList {

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
  public get(index: number): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthClientAuthMethodOutputReference {
    return new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthClientAuthMethodOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthClientRsaPublicKey2Fp {
}

export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthClientRsaPublicKey2FpToTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthClientRsaPublicKey2Fp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthClientRsaPublicKey2FpToHclTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthClientRsaPublicKey2Fp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthClientRsaPublicKey2FpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthClientRsaPublicKey2Fp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthClientRsaPublicKey2Fp | undefined) {
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

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthClientRsaPublicKey2FpList extends cdktf.ComplexList {

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
  public get(index: number): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthClientRsaPublicKey2FpOutputReference {
    return new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthClientRsaPublicKey2FpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthClientRsaPublicKeyFp {
}

export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthClientRsaPublicKeyFpToTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthClientRsaPublicKeyFp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthClientRsaPublicKeyFpToHclTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthClientRsaPublicKeyFp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthClientRsaPublicKeyFpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthClientRsaPublicKeyFp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthClientRsaPublicKeyFp | undefined) {
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

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthClientRsaPublicKeyFpList extends cdktf.ComplexList {

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
  public get(index: number): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthClientRsaPublicKeyFpOutputReference {
    return new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthClientRsaPublicKeyFpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthClientType {
}

export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthClientTypeToTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthClientType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthClientTypeToHclTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthClientType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthClientTypeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthClientType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthClientType | undefined) {
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

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthClientTypeList extends cdktf.ComplexList {

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
  public get(index: number): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthClientTypeOutputReference {
    return new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthClientTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthEnforcePkce {
}

export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthEnforcePkceToTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthEnforcePkce): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthEnforcePkceToHclTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthEnforcePkce): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthEnforcePkceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthEnforcePkce | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthEnforcePkce | undefined) {
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

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthEnforcePkceList extends cdktf.ComplexList {

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
  public get(index: number): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthEnforcePkceOutputReference {
    return new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthEnforcePkceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthGrant {
}

export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthGrantToTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthGrant): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthGrantToHclTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthGrant): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthGrantOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthGrant | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthGrant | undefined) {
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

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthGrantList extends cdktf.ComplexList {

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
  public get(index: number): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthGrantOutputReference {
    return new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthGrantOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthIssueRefreshTokens {
}

export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthIssueRefreshTokensToTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthIssueRefreshTokens): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthIssueRefreshTokensToHclTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthIssueRefreshTokens): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthIssueRefreshTokensOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthIssueRefreshTokens | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthIssueRefreshTokens | undefined) {
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

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthIssueRefreshTokensList extends cdktf.ComplexList {

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
  public get(index: number): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthIssueRefreshTokensOutputReference {
    return new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthIssueRefreshTokensOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthRefreshTokenValidity {
}

export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthRefreshTokenValidityToTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthRefreshTokenValidity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthRefreshTokenValidityToHclTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthRefreshTokenValidity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthRefreshTokenValidityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthRefreshTokenValidity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthRefreshTokenValidity | undefined) {
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

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthRefreshTokenValidityList extends cdktf.ComplexList {

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
  public get(index: number): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthRefreshTokenValidityOutputReference {
    return new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthRefreshTokenValidityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthTokenEndpoint {
}

export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthTokenEndpointToTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthTokenEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthTokenEndpointToHclTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthTokenEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthTokenEndpointOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthTokenEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthTokenEndpoint | undefined) {
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

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthTokenEndpointList extends cdktf.ComplexList {

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
  public get(index: number): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthTokenEndpointOutputReference {
    return new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthTokenEndpointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthUseSecondaryRoles {
}

export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthUseSecondaryRolesToTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthUseSecondaryRoles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthUseSecondaryRolesToHclTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthUseSecondaryRoles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthUseSecondaryRolesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthUseSecondaryRoles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthUseSecondaryRoles | undefined) {
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

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthUseSecondaryRolesList extends cdktf.ComplexList {

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
  public get(index: number): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthUseSecondaryRolesOutputReference {
    return new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthUseSecondaryRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputParentIntegration {
}

export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputParentIntegrationToTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputParentIntegration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputParentIntegrationToHclTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputParentIntegration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputParentIntegrationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputParentIntegration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputParentIntegration | undefined) {
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

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputParentIntegrationList extends cdktf.ComplexList {

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
  public get(index: number): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputParentIntegrationOutputReference {
    return new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputParentIntegrationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputPreAuthorizedRolesListStruct {
}

export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputPreAuthorizedRolesListStructToTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputPreAuthorizedRolesListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputPreAuthorizedRolesListStructToHclTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputPreAuthorizedRolesListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputPreAuthorizedRolesListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputPreAuthorizedRolesListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputPreAuthorizedRolesListStruct | undefined) {
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

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputPreAuthorizedRolesListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputPreAuthorizedRolesListStructOutputReference {
    return new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputPreAuthorizedRolesListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputRunAsRole {
}

export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputRunAsRoleToTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputRunAsRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputRunAsRoleToHclTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputRunAsRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputRunAsRoleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputRunAsRole | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputRunAsRole | undefined) {
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

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputRunAsRoleList extends cdktf.ComplexList {

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
  public get(index: number): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputRunAsRoleOutputReference {
    return new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputRunAsRoleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2DigestMethodsUsed {
}

export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2DigestMethodsUsedToTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2DigestMethodsUsed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2DigestMethodsUsedToHclTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2DigestMethodsUsed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2DigestMethodsUsedOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2DigestMethodsUsed | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2DigestMethodsUsed | undefined) {
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

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2DigestMethodsUsedList extends cdktf.ComplexList {

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
  public get(index: number): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2DigestMethodsUsedOutputReference {
    return new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2DigestMethodsUsedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2EnableSpInitiated {
}

export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2EnableSpInitiatedToTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2EnableSpInitiated): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2EnableSpInitiatedToHclTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2EnableSpInitiated): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2EnableSpInitiatedOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2EnableSpInitiated | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2EnableSpInitiated | undefined) {
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

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2EnableSpInitiatedList extends cdktf.ComplexList {

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
  public get(index: number): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2EnableSpInitiatedOutputReference {
    return new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2EnableSpInitiatedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2ForceAuthn {
}

export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2ForceAuthnToTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2ForceAuthn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2ForceAuthnToHclTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2ForceAuthn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2ForceAuthnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2ForceAuthn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2ForceAuthn | undefined) {
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

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2ForceAuthnList extends cdktf.ComplexList {

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
  public get(index: number): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2ForceAuthnOutputReference {
    return new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2ForceAuthnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2Issuer {
}

export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2IssuerToTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2Issuer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2IssuerToHclTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2Issuer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2IssuerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2Issuer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2Issuer | undefined) {
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

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2IssuerList extends cdktf.ComplexList {

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
  public get(index: number): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2IssuerOutputReference {
    return new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2IssuerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2PostLogoutRedirectUrl {
}

export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2PostLogoutRedirectUrlToTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2PostLogoutRedirectUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2PostLogoutRedirectUrlToHclTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2PostLogoutRedirectUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2PostLogoutRedirectUrlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2PostLogoutRedirectUrl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2PostLogoutRedirectUrl | undefined) {
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

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2PostLogoutRedirectUrlList extends cdktf.ComplexList {

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
  public get(index: number): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2PostLogoutRedirectUrlOutputReference {
    return new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2PostLogoutRedirectUrlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2Provider {
}

export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2ProviderToTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2Provider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2ProviderToHclTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2Provider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2ProviderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2Provider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2Provider | undefined) {
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

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2ProviderList extends cdktf.ComplexList {

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
  public get(index: number): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2ProviderOutputReference {
    return new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2ProviderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2RequestedNameidFormat {
}

export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2RequestedNameidFormatToTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2RequestedNameidFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2RequestedNameidFormatToHclTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2RequestedNameidFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2RequestedNameidFormatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2RequestedNameidFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2RequestedNameidFormat | undefined) {
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

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2RequestedNameidFormatList extends cdktf.ComplexList {

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
  public get(index: number): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2RequestedNameidFormatOutputReference {
    return new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2RequestedNameidFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2SignRequest {
}

export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2SignRequestToTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2SignRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2SignRequestToHclTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2SignRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2SignRequestOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2SignRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2SignRequest | undefined) {
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

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2SignRequestList extends cdktf.ComplexList {

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
  public get(index: number): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2SignRequestOutputReference {
    return new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2SignRequestOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2SignatureMethodsUsed {
}

export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2SignatureMethodsUsedToTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2SignatureMethodsUsed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2SignatureMethodsUsedToHclTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2SignatureMethodsUsed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2SignatureMethodsUsedOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2SignatureMethodsUsed | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2SignatureMethodsUsed | undefined) {
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

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2SignatureMethodsUsedList extends cdktf.ComplexList {

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
  public get(index: number): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2SignatureMethodsUsedOutputReference {
    return new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2SignatureMethodsUsedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2SnowflakeAcsUrl {
}

export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2SnowflakeAcsUrlToTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2SnowflakeAcsUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2SnowflakeAcsUrlToHclTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2SnowflakeAcsUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2SnowflakeAcsUrlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2SnowflakeAcsUrl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2SnowflakeAcsUrl | undefined) {
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

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2SnowflakeAcsUrlList extends cdktf.ComplexList {

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
  public get(index: number): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2SnowflakeAcsUrlOutputReference {
    return new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2SnowflakeAcsUrlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2SnowflakeIssuerUrl {
}

export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2SnowflakeIssuerUrlToTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2SnowflakeIssuerUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2SnowflakeIssuerUrlToHclTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2SnowflakeIssuerUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2SnowflakeIssuerUrlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2SnowflakeIssuerUrl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2SnowflakeIssuerUrl | undefined) {
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

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2SnowflakeIssuerUrlList extends cdktf.ComplexList {

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
  public get(index: number): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2SnowflakeIssuerUrlOutputReference {
    return new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2SnowflakeIssuerUrlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2SnowflakeMetadata {
}

export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2SnowflakeMetadataToTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2SnowflakeMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2SnowflakeMetadataToHclTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2SnowflakeMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2SnowflakeMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2SnowflakeMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2SnowflakeMetadata | undefined) {
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

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2SnowflakeMetadataList extends cdktf.ComplexList {

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
  public get(index: number): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2SnowflakeMetadataOutputReference {
    return new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2SnowflakeMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2SpInitiatedLoginPageLabel {
}

export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2SpInitiatedLoginPageLabelToTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2SpInitiatedLoginPageLabel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2SpInitiatedLoginPageLabelToHclTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2SpInitiatedLoginPageLabel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2SpInitiatedLoginPageLabel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2SpInitiatedLoginPageLabel | undefined) {
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

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2SpInitiatedLoginPageLabelList extends cdktf.ComplexList {

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
  public get(index: number): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference {
    return new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2SpInitiatedLoginPageLabelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2SsoUrl {
}

export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2SsoUrlToTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2SsoUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2SsoUrlToHclTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2SsoUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2SsoUrlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2SsoUrl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2SsoUrl | undefined) {
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

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2SsoUrlList extends cdktf.ComplexList {

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
  public get(index: number): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2SsoUrlOutputReference {
    return new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2SsoUrlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSyncPassword {
}

export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSyncPasswordToTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSyncPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSyncPasswordToHclTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSyncPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSyncPasswordOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSyncPassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSyncPassword | undefined) {
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

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSyncPasswordList extends cdktf.ComplexList {

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
  public get(index: number): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSyncPasswordOutputReference {
    return new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSyncPasswordOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutput {
}

export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputToTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputToHclTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_email_patterns - computed: true, optional: false, required: false
  private _allowedEmailPatterns = new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputAllowedEmailPatternsList(this, "allowed_email_patterns", false);
  public get allowedEmailPatterns() {
    return this._allowedEmailPatterns;
  }

  // allowed_user_domains - computed: true, optional: false, required: false
  private _allowedUserDomains = new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputAllowedUserDomainsList(this, "allowed_user_domains", false);
  public get allowedUserDomains() {
    return this._allowedUserDomains;
  }

  // auth_type - computed: true, optional: false, required: false
  private _authType = new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputAuthTypeList(this, "auth_type", false);
  public get authType() {
    return this._authType;
  }

  // blocked_roles_list - computed: true, optional: false, required: false
  private _blockedRolesList = new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputBlockedRolesListStructList(this, "blocked_roles_list", false);
  public get blockedRolesList() {
    return this._blockedRolesList;
  }

  // comment - computed: true, optional: false, required: false
  private _comment = new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputCommentList(this, "comment", false);
  public get comment() {
    return this._comment;
  }

  // enabled - computed: true, optional: false, required: false
  private _enabled = new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputEnabledList(this, "enabled", false);
  public get enabled() {
    return this._enabled;
  }

  // external_oauth_allowed_roles_list - computed: true, optional: false, required: false
  private _externalOauthAllowedRolesList = new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthAllowedRolesListStructList(this, "external_oauth_allowed_roles_list", false);
  public get externalOauthAllowedRolesList() {
    return this._externalOauthAllowedRolesList;
  }

  // external_oauth_any_role_mode - computed: true, optional: false, required: false
  private _externalOauthAnyRoleMode = new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthAnyRoleModeList(this, "external_oauth_any_role_mode", false);
  public get externalOauthAnyRoleMode() {
    return this._externalOauthAnyRoleMode;
  }

  // external_oauth_audience_list - computed: true, optional: false, required: false
  private _externalOauthAudienceList = new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthAudienceListStructList(this, "external_oauth_audience_list", false);
  public get externalOauthAudienceList() {
    return this._externalOauthAudienceList;
  }

  // external_oauth_blocked_roles_list - computed: true, optional: false, required: false
  private _externalOauthBlockedRolesList = new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthBlockedRolesListStructList(this, "external_oauth_blocked_roles_list", false);
  public get externalOauthBlockedRolesList() {
    return this._externalOauthBlockedRolesList;
  }

  // external_oauth_issuer - computed: true, optional: false, required: false
  private _externalOauthIssuer = new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthIssuerList(this, "external_oauth_issuer", false);
  public get externalOauthIssuer() {
    return this._externalOauthIssuer;
  }

  // external_oauth_jws_keys_url - computed: true, optional: false, required: false
  private _externalOauthJwsKeysUrl = new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthJwsKeysUrlList(this, "external_oauth_jws_keys_url", false);
  public get externalOauthJwsKeysUrl() {
    return this._externalOauthJwsKeysUrl;
  }

  // external_oauth_rsa_public_key - computed: true, optional: false, required: false
  private _externalOauthRsaPublicKey = new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthRsaPublicKeyList(this, "external_oauth_rsa_public_key", false);
  public get externalOauthRsaPublicKey() {
    return this._externalOauthRsaPublicKey;
  }

  // external_oauth_rsa_public_key_2 - computed: true, optional: false, required: false
  private _externalOauthRsaPublicKey2 = new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthRsaPublicKey2List(this, "external_oauth_rsa_public_key_2", false);
  public get externalOauthRsaPublicKey2() {
    return this._externalOauthRsaPublicKey2;
  }

  // external_oauth_scope_delimiter - computed: true, optional: false, required: false
  private _externalOauthScopeDelimiter = new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthScopeDelimiterList(this, "external_oauth_scope_delimiter", false);
  public get externalOauthScopeDelimiter() {
    return this._externalOauthScopeDelimiter;
  }

  // external_oauth_snowflake_user_mapping_attribute - computed: true, optional: false, required: false
  private _externalOauthSnowflakeUserMappingAttribute = new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthSnowflakeUserMappingAttributeList(this, "external_oauth_snowflake_user_mapping_attribute", false);
  public get externalOauthSnowflakeUserMappingAttribute() {
    return this._externalOauthSnowflakeUserMappingAttribute;
  }

  // external_oauth_token_user_mapping_claim - computed: true, optional: false, required: false
  private _externalOauthTokenUserMappingClaim = new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputExternalOauthTokenUserMappingClaimList(this, "external_oauth_token_user_mapping_claim", false);
  public get externalOauthTokenUserMappingClaim() {
    return this._externalOauthTokenUserMappingClaim;
  }

  // network_policy - computed: true, optional: false, required: false
  private _networkPolicy = new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputNetworkPolicyList(this, "network_policy", false);
  public get networkPolicy() {
    return this._networkPolicy;
  }

  // oauth_access_token_validity - computed: true, optional: false, required: false
  private _oauthAccessTokenValidity = new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthAccessTokenValidityList(this, "oauth_access_token_validity", false);
  public get oauthAccessTokenValidity() {
    return this._oauthAccessTokenValidity;
  }

  // oauth_allow_non_tls_redirect_uri - computed: true, optional: false, required: false
  private _oauthAllowNonTlsRedirectUri = new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthAllowNonTlsRedirectUriList(this, "oauth_allow_non_tls_redirect_uri", false);
  public get oauthAllowNonTlsRedirectUri() {
    return this._oauthAllowNonTlsRedirectUri;
  }

  // oauth_allowed_authorization_endpoints - computed: true, optional: false, required: false
  private _oauthAllowedAuthorizationEndpoints = new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthAllowedAuthorizationEndpointsList(this, "oauth_allowed_authorization_endpoints", false);
  public get oauthAllowedAuthorizationEndpoints() {
    return this._oauthAllowedAuthorizationEndpoints;
  }

  // oauth_allowed_scopes - computed: true, optional: false, required: false
  private _oauthAllowedScopes = new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthAllowedScopesList(this, "oauth_allowed_scopes", false);
  public get oauthAllowedScopes() {
    return this._oauthAllowedScopes;
  }

  // oauth_allowed_token_endpoints - computed: true, optional: false, required: false
  private _oauthAllowedTokenEndpoints = new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthAllowedTokenEndpointsList(this, "oauth_allowed_token_endpoints", false);
  public get oauthAllowedTokenEndpoints() {
    return this._oauthAllowedTokenEndpoints;
  }

  // oauth_authorization_endpoint - computed: true, optional: false, required: false
  private _oauthAuthorizationEndpoint = new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthAuthorizationEndpointList(this, "oauth_authorization_endpoint", false);
  public get oauthAuthorizationEndpoint() {
    return this._oauthAuthorizationEndpoint;
  }

  // oauth_client_auth_method - computed: true, optional: false, required: false
  private _oauthClientAuthMethod = new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthClientAuthMethodList(this, "oauth_client_auth_method", false);
  public get oauthClientAuthMethod() {
    return this._oauthClientAuthMethod;
  }

  // oauth_client_rsa_public_key_2_fp - computed: true, optional: false, required: false
  private _oauthClientRsaPublicKey2Fp = new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthClientRsaPublicKey2FpList(this, "oauth_client_rsa_public_key_2_fp", false);
  public get oauthClientRsaPublicKey2Fp() {
    return this._oauthClientRsaPublicKey2Fp;
  }

  // oauth_client_rsa_public_key_fp - computed: true, optional: false, required: false
  private _oauthClientRsaPublicKeyFp = new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthClientRsaPublicKeyFpList(this, "oauth_client_rsa_public_key_fp", false);
  public get oauthClientRsaPublicKeyFp() {
    return this._oauthClientRsaPublicKeyFp;
  }

  // oauth_client_type - computed: true, optional: false, required: false
  private _oauthClientType = new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthClientTypeList(this, "oauth_client_type", false);
  public get oauthClientType() {
    return this._oauthClientType;
  }

  // oauth_enforce_pkce - computed: true, optional: false, required: false
  private _oauthEnforcePkce = new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthEnforcePkceList(this, "oauth_enforce_pkce", false);
  public get oauthEnforcePkce() {
    return this._oauthEnforcePkce;
  }

  // oauth_grant - computed: true, optional: false, required: false
  private _oauthGrant = new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthGrantList(this, "oauth_grant", false);
  public get oauthGrant() {
    return this._oauthGrant;
  }

  // oauth_issue_refresh_tokens - computed: true, optional: false, required: false
  private _oauthIssueRefreshTokens = new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthIssueRefreshTokensList(this, "oauth_issue_refresh_tokens", false);
  public get oauthIssueRefreshTokens() {
    return this._oauthIssueRefreshTokens;
  }

  // oauth_refresh_token_validity - computed: true, optional: false, required: false
  private _oauthRefreshTokenValidity = new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthRefreshTokenValidityList(this, "oauth_refresh_token_validity", false);
  public get oauthRefreshTokenValidity() {
    return this._oauthRefreshTokenValidity;
  }

  // oauth_token_endpoint - computed: true, optional: false, required: false
  private _oauthTokenEndpoint = new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthTokenEndpointList(this, "oauth_token_endpoint", false);
  public get oauthTokenEndpoint() {
    return this._oauthTokenEndpoint;
  }

  // oauth_use_secondary_roles - computed: true, optional: false, required: false
  private _oauthUseSecondaryRoles = new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOauthUseSecondaryRolesList(this, "oauth_use_secondary_roles", false);
  public get oauthUseSecondaryRoles() {
    return this._oauthUseSecondaryRoles;
  }

  // parent_integration - computed: true, optional: false, required: false
  private _parentIntegration = new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputParentIntegrationList(this, "parent_integration", false);
  public get parentIntegration() {
    return this._parentIntegration;
  }

  // pre_authorized_roles_list - computed: true, optional: false, required: false
  private _preAuthorizedRolesList = new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputPreAuthorizedRolesListStructList(this, "pre_authorized_roles_list", false);
  public get preAuthorizedRolesList() {
    return this._preAuthorizedRolesList;
  }

  // run_as_role - computed: true, optional: false, required: false
  private _runAsRole = new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputRunAsRoleList(this, "run_as_role", false);
  public get runAsRole() {
    return this._runAsRole;
  }

  // saml2_digest_methods_used - computed: true, optional: false, required: false
  private _saml2DigestMethodsUsed = new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2DigestMethodsUsedList(this, "saml2_digest_methods_used", false);
  public get saml2DigestMethodsUsed() {
    return this._saml2DigestMethodsUsed;
  }

  // saml2_enable_sp_initiated - computed: true, optional: false, required: false
  private _saml2EnableSpInitiated = new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2EnableSpInitiatedList(this, "saml2_enable_sp_initiated", false);
  public get saml2EnableSpInitiated() {
    return this._saml2EnableSpInitiated;
  }

  // saml2_force_authn - computed: true, optional: false, required: false
  private _saml2ForceAuthn = new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2ForceAuthnList(this, "saml2_force_authn", false);
  public get saml2ForceAuthn() {
    return this._saml2ForceAuthn;
  }

  // saml2_issuer - computed: true, optional: false, required: false
  private _saml2Issuer = new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2IssuerList(this, "saml2_issuer", false);
  public get saml2Issuer() {
    return this._saml2Issuer;
  }

  // saml2_post_logout_redirect_url - computed: true, optional: false, required: false
  private _saml2PostLogoutRedirectUrl = new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2PostLogoutRedirectUrlList(this, "saml2_post_logout_redirect_url", false);
  public get saml2PostLogoutRedirectUrl() {
    return this._saml2PostLogoutRedirectUrl;
  }

  // saml2_provider - computed: true, optional: false, required: false
  private _saml2Provider = new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2ProviderList(this, "saml2_provider", false);
  public get saml2Provider() {
    return this._saml2Provider;
  }

  // saml2_requested_nameid_format - computed: true, optional: false, required: false
  private _saml2RequestedNameidFormat = new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2RequestedNameidFormatList(this, "saml2_requested_nameid_format", false);
  public get saml2RequestedNameidFormat() {
    return this._saml2RequestedNameidFormat;
  }

  // saml2_sign_request - computed: true, optional: false, required: false
  private _saml2SignRequest = new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2SignRequestList(this, "saml2_sign_request", false);
  public get saml2SignRequest() {
    return this._saml2SignRequest;
  }

  // saml2_signature_methods_used - computed: true, optional: false, required: false
  private _saml2SignatureMethodsUsed = new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2SignatureMethodsUsedList(this, "saml2_signature_methods_used", false);
  public get saml2SignatureMethodsUsed() {
    return this._saml2SignatureMethodsUsed;
  }

  // saml2_snowflake_acs_url - computed: true, optional: false, required: false
  private _saml2SnowflakeAcsUrl = new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2SnowflakeAcsUrlList(this, "saml2_snowflake_acs_url", false);
  public get saml2SnowflakeAcsUrl() {
    return this._saml2SnowflakeAcsUrl;
  }

  // saml2_snowflake_issuer_url - computed: true, optional: false, required: false
  private _saml2SnowflakeIssuerUrl = new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2SnowflakeIssuerUrlList(this, "saml2_snowflake_issuer_url", false);
  public get saml2SnowflakeIssuerUrl() {
    return this._saml2SnowflakeIssuerUrl;
  }

  // saml2_snowflake_metadata - computed: true, optional: false, required: false
  private _saml2SnowflakeMetadata = new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2SnowflakeMetadataList(this, "saml2_snowflake_metadata", false);
  public get saml2SnowflakeMetadata() {
    return this._saml2SnowflakeMetadata;
  }

  // saml2_sp_initiated_login_page_label - computed: true, optional: false, required: false
  private _saml2SpInitiatedLoginPageLabel = new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2SpInitiatedLoginPageLabelList(this, "saml2_sp_initiated_login_page_label", false);
  public get saml2SpInitiatedLoginPageLabel() {
    return this._saml2SpInitiatedLoginPageLabel;
  }

  // saml2_sso_url - computed: true, optional: false, required: false
  private _saml2SsoUrl = new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSaml2SsoUrlList(this, "saml2_sso_url", false);
  public get saml2SsoUrl() {
    return this._saml2SsoUrl;
  }

  // sync_password - computed: true, optional: false, required: false
  private _syncPassword = new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputSyncPasswordList(this, "sync_password", false);
  public get syncPassword() {
    return this._syncPassword;
  }
}

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputList extends cdktf.ComplexList {

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
  public get(index: number): DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOutputReference {
    return new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeSecurityIntegrationsSecurityIntegrationsShowOutput {
}

export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsShowOutputToTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsShowOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsShowOutputToHclTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrationsShowOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsShowOutputOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSnowflakeSecurityIntegrationsSecurityIntegrationsShowOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeSecurityIntegrationsSecurityIntegrationsShowOutput | undefined) {
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

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsShowOutputList extends cdktf.ComplexList {

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
  public get(index: number): DataSnowflakeSecurityIntegrationsSecurityIntegrationsShowOutputOutputReference {
    return new DataSnowflakeSecurityIntegrationsSecurityIntegrationsShowOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSnowflakeSecurityIntegrationsSecurityIntegrations {
}

export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsToTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSnowflakeSecurityIntegrationsSecurityIntegrationsToHclTerraform(struct?: DataSnowflakeSecurityIntegrationsSecurityIntegrations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSnowflakeSecurityIntegrationsSecurityIntegrations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSnowflakeSecurityIntegrationsSecurityIntegrations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // describe_output - computed: true, optional: false, required: false
  private _describeOutput = new DataSnowflakeSecurityIntegrationsSecurityIntegrationsDescribeOutputList(this, "describe_output", false);
  public get describeOutput() {
    return this._describeOutput;
  }

  // show_output - computed: true, optional: false, required: false
  private _showOutput = new DataSnowflakeSecurityIntegrationsSecurityIntegrationsShowOutputList(this, "show_output", false);
  public get showOutput() {
    return this._showOutput;
  }
}

export class DataSnowflakeSecurityIntegrationsSecurityIntegrationsList extends cdktf.ComplexList {

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
  public get(index: number): DataSnowflakeSecurityIntegrationsSecurityIntegrationsOutputReference {
    return new DataSnowflakeSecurityIntegrationsSecurityIntegrationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.3.0/docs/data-sources/security_integrations snowflake_security_integrations}
*/
export class DataSnowflakeSecurityIntegrations extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_security_integrations";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSnowflakeSecurityIntegrations resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSnowflakeSecurityIntegrations to import
  * @param importFromId The id of the existing DataSnowflakeSecurityIntegrations that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.3.0/docs/data-sources/security_integrations#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSnowflakeSecurityIntegrations to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_security_integrations", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.3.0/docs/data-sources/security_integrations snowflake_security_integrations} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSnowflakeSecurityIntegrationsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSnowflakeSecurityIntegrationsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'snowflake_security_integrations',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '2.3.0',
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
    this._id = config.id;
    this._like = config.like;
    this._withDescribe = config.withDescribe;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // like - computed: false, optional: true, required: false
  private _like?: string; 
  public get like() {
    return this.getStringAttribute('like');
  }
  public set like(value: string) {
    this._like = value;
  }
  public resetLike() {
    this._like = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get likeInput() {
    return this._like;
  }

  // security_integrations - computed: true, optional: false, required: false
  private _securityIntegrations = new DataSnowflakeSecurityIntegrationsSecurityIntegrationsList(this, "security_integrations", false);
  public get securityIntegrations() {
    return this._securityIntegrations;
  }

  // with_describe - computed: false, optional: true, required: false
  private _withDescribe?: boolean | cdktf.IResolvable; 
  public get withDescribe() {
    return this.getBooleanAttribute('with_describe');
  }
  public set withDescribe(value: boolean | cdktf.IResolvable) {
    this._withDescribe = value;
  }
  public resetWithDescribe() {
    this._withDescribe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withDescribeInput() {
    return this._withDescribe;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      like: cdktf.stringToTerraform(this._like),
      with_describe: cdktf.booleanToTerraform(this._withDescribe),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      like: {
        value: cdktf.stringToHclTerraform(this._like),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      with_describe: {
        value: cdktf.booleanToHclTerraform(this._withDescribe),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
