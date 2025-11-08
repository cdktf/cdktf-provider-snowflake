/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/external_volume
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ExternalVolumeConfig extends cdktf.TerraformMetaArguments {
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether write operations are allowed for the external volume; must be set to TRUE for Iceberg tables that use Snowflake as the catalog. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/external_volume#allow_writes ExternalVolume#allow_writes}
  */
  readonly allowWrites?: string;
  /**
  * Specifies a comment for the external volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/external_volume#comment ExternalVolume#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/external_volume#id ExternalVolume#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Identifier for the external volume; must be unique for your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/external_volume#name ExternalVolume#name}
  */
  readonly name: string;
  /**
  * storage_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/external_volume#storage_location ExternalVolume#storage_location}
  */
  readonly storageLocation: ExternalVolumeStorageLocation[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/external_volume#timeouts ExternalVolume#timeouts}
  */
  readonly timeouts?: ExternalVolumeTimeouts;
}
export interface ExternalVolumeDescribeOutput {
}

export function externalVolumeDescribeOutputToTerraform(struct?: ExternalVolumeDescribeOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function externalVolumeDescribeOutputToHclTerraform(struct?: ExternalVolumeDescribeOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ExternalVolumeDescribeOutputOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ExternalVolumeDescribeOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalVolumeDescribeOutput | undefined) {
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

  // parent - computed: true, optional: false, required: false
  public get parent() {
    return this.getStringAttribute('parent');
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

export class ExternalVolumeDescribeOutputList extends cdktf.ComplexList {

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
  public get(index: number): ExternalVolumeDescribeOutputOutputReference {
    return new ExternalVolumeDescribeOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ExternalVolumeShowOutput {
}

export function externalVolumeShowOutputToTerraform(struct?: ExternalVolumeShowOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function externalVolumeShowOutputToHclTerraform(struct?: ExternalVolumeShowOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ExternalVolumeShowOutputOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ExternalVolumeShowOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalVolumeShowOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_writes - computed: true, optional: false, required: false
  public get allowWrites() {
    return this.getBooleanAttribute('allow_writes');
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class ExternalVolumeShowOutputList extends cdktf.ComplexList {

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
  public get(index: number): ExternalVolumeShowOutputOutputReference {
    return new ExternalVolumeShowOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ExternalVolumeStorageLocation {
  /**
  * Specifies the ID for your Office 365 tenant that the allowed and blocked storage accounts belong to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/external_volume#azure_tenant_id ExternalVolume#azure_tenant_id}
  */
  readonly azureTenantId?: string;
  /**
  * Specifies the ID for the KMS-managed key used to encrypt files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/external_volume#encryption_kms_key_id ExternalVolume#encryption_kms_key_id}
  */
  readonly encryptionKmsKeyId?: string;
  /**
  * Specifies the encryption type used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/external_volume#encryption_type ExternalVolume#encryption_type}
  */
  readonly encryptionType?: string;
  /**
  * Specifies the case-sensitive Amazon Resource Name (ARN) of the AWS identity and access management (IAM) role that grants privileges on the S3 bucket containing your data files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/external_volume#storage_aws_role_arn ExternalVolume#storage_aws_role_arn}
  */
  readonly storageAwsRoleArn?: string;
  /**
  * Specifies the base URL for your cloud storage location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/external_volume#storage_base_url ExternalVolume#storage_base_url}
  */
  readonly storageBaseUrl: string;
  /**
  * Name of the storage location. Must be unique for the external volume. Do not use the name `terraform_provider_sentinel_storage_location` - this is reserved for the provider for performing update operations. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/external_volume#storage_location_name ExternalVolume#storage_location_name}
  */
  readonly storageLocationName: string;
  /**
  * Specifies the cloud storage provider that stores your data files. Valid values are (case-insensitive): `GCS` | `AZURE` | `S3` | `S3GOV`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/external_volume#storage_provider ExternalVolume#storage_provider}
  */
  readonly storageProvider: string;
}

export function externalVolumeStorageLocationToTerraform(struct?: ExternalVolumeStorageLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azure_tenant_id: cdktf.stringToTerraform(struct!.azureTenantId),
    encryption_kms_key_id: cdktf.stringToTerraform(struct!.encryptionKmsKeyId),
    encryption_type: cdktf.stringToTerraform(struct!.encryptionType),
    storage_aws_role_arn: cdktf.stringToTerraform(struct!.storageAwsRoleArn),
    storage_base_url: cdktf.stringToTerraform(struct!.storageBaseUrl),
    storage_location_name: cdktf.stringToTerraform(struct!.storageLocationName),
    storage_provider: cdktf.stringToTerraform(struct!.storageProvider),
  }
}


export function externalVolumeStorageLocationToHclTerraform(struct?: ExternalVolumeStorageLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    azure_tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.azureTenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption_kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.encryptionKmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption_type: {
      value: cdktf.stringToHclTerraform(struct!.encryptionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_aws_role_arn: {
      value: cdktf.stringToHclTerraform(struct!.storageAwsRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_base_url: {
      value: cdktf.stringToHclTerraform(struct!.storageBaseUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_location_name: {
      value: cdktf.stringToHclTerraform(struct!.storageLocationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_provider: {
      value: cdktf.stringToHclTerraform(struct!.storageProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalVolumeStorageLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ExternalVolumeStorageLocation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._azureTenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureTenantId = this._azureTenantId;
    }
    if (this._encryptionKmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionKmsKeyId = this._encryptionKmsKeyId;
    }
    if (this._encryptionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionType = this._encryptionType;
    }
    if (this._storageAwsRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageAwsRoleArn = this._storageAwsRoleArn;
    }
    if (this._storageBaseUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageBaseUrl = this._storageBaseUrl;
    }
    if (this._storageLocationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageLocationName = this._storageLocationName;
    }
    if (this._storageProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageProvider = this._storageProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalVolumeStorageLocation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._azureTenantId = undefined;
      this._encryptionKmsKeyId = undefined;
      this._encryptionType = undefined;
      this._storageAwsRoleArn = undefined;
      this._storageBaseUrl = undefined;
      this._storageLocationName = undefined;
      this._storageProvider = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._azureTenantId = value.azureTenantId;
      this._encryptionKmsKeyId = value.encryptionKmsKeyId;
      this._encryptionType = value.encryptionType;
      this._storageAwsRoleArn = value.storageAwsRoleArn;
      this._storageBaseUrl = value.storageBaseUrl;
      this._storageLocationName = value.storageLocationName;
      this._storageProvider = value.storageProvider;
    }
  }

  // azure_tenant_id - computed: false, optional: true, required: false
  private _azureTenantId?: string; 
  public get azureTenantId() {
    return this.getStringAttribute('azure_tenant_id');
  }
  public set azureTenantId(value: string) {
    this._azureTenantId = value;
  }
  public resetAzureTenantId() {
    this._azureTenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureTenantIdInput() {
    return this._azureTenantId;
  }

  // encryption_kms_key_id - computed: false, optional: true, required: false
  private _encryptionKmsKeyId?: string; 
  public get encryptionKmsKeyId() {
    return this.getStringAttribute('encryption_kms_key_id');
  }
  public set encryptionKmsKeyId(value: string) {
    this._encryptionKmsKeyId = value;
  }
  public resetEncryptionKmsKeyId() {
    this._encryptionKmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKmsKeyIdInput() {
    return this._encryptionKmsKeyId;
  }

  // encryption_type - computed: false, optional: true, required: false
  private _encryptionType?: string; 
  public get encryptionType() {
    return this.getStringAttribute('encryption_type');
  }
  public set encryptionType(value: string) {
    this._encryptionType = value;
  }
  public resetEncryptionType() {
    this._encryptionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionTypeInput() {
    return this._encryptionType;
  }

  // storage_aws_external_id - computed: true, optional: false, required: false
  public get storageAwsExternalId() {
    return this.getStringAttribute('storage_aws_external_id');
  }

  // storage_aws_role_arn - computed: false, optional: true, required: false
  private _storageAwsRoleArn?: string; 
  public get storageAwsRoleArn() {
    return this.getStringAttribute('storage_aws_role_arn');
  }
  public set storageAwsRoleArn(value: string) {
    this._storageAwsRoleArn = value;
  }
  public resetStorageAwsRoleArn() {
    this._storageAwsRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAwsRoleArnInput() {
    return this._storageAwsRoleArn;
  }

  // storage_base_url - computed: false, optional: false, required: true
  private _storageBaseUrl?: string; 
  public get storageBaseUrl() {
    return this.getStringAttribute('storage_base_url');
  }
  public set storageBaseUrl(value: string) {
    this._storageBaseUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageBaseUrlInput() {
    return this._storageBaseUrl;
  }

  // storage_location_name - computed: false, optional: false, required: true
  private _storageLocationName?: string; 
  public get storageLocationName() {
    return this.getStringAttribute('storage_location_name');
  }
  public set storageLocationName(value: string) {
    this._storageLocationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageLocationNameInput() {
    return this._storageLocationName;
  }

  // storage_provider - computed: false, optional: false, required: true
  private _storageProvider?: string; 
  public get storageProvider() {
    return this.getStringAttribute('storage_provider');
  }
  public set storageProvider(value: string) {
    this._storageProvider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageProviderInput() {
    return this._storageProvider;
  }
}

export class ExternalVolumeStorageLocationList extends cdktf.ComplexList {
  public internalValue? : ExternalVolumeStorageLocation[] | cdktf.IResolvable

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
  public get(index: number): ExternalVolumeStorageLocationOutputReference {
    return new ExternalVolumeStorageLocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ExternalVolumeTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/external_volume#create ExternalVolume#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/external_volume#delete ExternalVolume#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/external_volume#read ExternalVolume#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/external_volume#update ExternalVolume#update}
  */
  readonly update?: string;
}

export function externalVolumeTimeoutsToTerraform(struct?: ExternalVolumeTimeouts | cdktf.IResolvable): any {
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


export function externalVolumeTimeoutsToHclTerraform(struct?: ExternalVolumeTimeouts | cdktf.IResolvable): any {
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

export class ExternalVolumeTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ExternalVolumeTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ExternalVolumeTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/external_volume snowflake_external_volume}
*/
export class ExternalVolume extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_external_volume";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ExternalVolume resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ExternalVolume to import
  * @param importFromId The id of the existing ExternalVolume that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/external_volume#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ExternalVolume to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_external_volume", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/external_volume snowflake_external_volume} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ExternalVolumeConfig
  */
  public constructor(scope: Construct, id: string, config: ExternalVolumeConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_external_volume',
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
    this._allowWrites = config.allowWrites;
    this._comment = config.comment;
    this._id = config.id;
    this._name = config.name;
    this._storageLocation.internalValue = config.storageLocation;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_writes - computed: false, optional: true, required: false
  private _allowWrites?: string; 
  public get allowWrites() {
    return this.getStringAttribute('allow_writes');
  }
  public set allowWrites(value: string) {
    this._allowWrites = value;
  }
  public resetAllowWrites() {
    this._allowWrites = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowWritesInput() {
    return this._allowWrites;
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
  private _describeOutput = new ExternalVolumeDescribeOutputList(this, "describe_output", false);
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

  // show_output - computed: true, optional: false, required: false
  private _showOutput = new ExternalVolumeShowOutputList(this, "show_output", false);
  public get showOutput() {
    return this._showOutput;
  }

  // storage_location - computed: false, optional: false, required: true
  private _storageLocation = new ExternalVolumeStorageLocationList(this, "storage_location", false);
  public get storageLocation() {
    return this._storageLocation;
  }
  public putStorageLocation(value: ExternalVolumeStorageLocation[] | cdktf.IResolvable) {
    this._storageLocation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageLocationInput() {
    return this._storageLocation.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ExternalVolumeTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ExternalVolumeTimeouts) {
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
      allow_writes: cdktf.stringToTerraform(this._allowWrites),
      comment: cdktf.stringToTerraform(this._comment),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      storage_location: cdktf.listMapper(externalVolumeStorageLocationToTerraform, true)(this._storageLocation.internalValue),
      timeouts: externalVolumeTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_writes: {
        value: cdktf.stringToHclTerraform(this._allowWrites),
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
      storage_location: {
        value: cdktf.listMapperHcl(externalVolumeStorageLocationToHclTerraform, true)(this._storageLocation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ExternalVolumeStorageLocationList",
      },
      timeouts: {
        value: externalVolumeTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ExternalVolumeTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
