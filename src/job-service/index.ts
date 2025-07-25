/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/job_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface JobServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies a comment for the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/job_service#comment JobService#comment}
  */
  readonly comment?: string;
  /**
  * Specifies the name of the compute pool in your account on which to run the service. Identifiers with special or lower-case characters are not supported. This limitation in the provider follows the limitation in Snowflake (see [docs](https://docs.snowflake.com/en/sql-reference/sql/create-compute-pool)). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/job_service#compute_pool JobService#compute_pool}
  */
  readonly computePool: string;
  /**
  * The database in which to create the service. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/job_service#database JobService#database}
  */
  readonly database: string;
  /**
  * Specifies the names of the external access integrations that allow your service to access external sites.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/job_service#external_access_integrations JobService#external_access_integrations}
  */
  readonly externalAccessIntegrations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/job_service#id JobService#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the identifier for the service; must be unique for the schema in which the service is created. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/job_service#name JobService#name}
  */
  readonly name: string;
  /**
  * Warehouse to use if a service container connects to Snowflake to execute a query but does not explicitly specify a warehouse to use. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/job_service#query_warehouse JobService#query_warehouse}
  */
  readonly queryWarehouse?: string;
  /**
  * The schema in which to create the service. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/job_service#schema JobService#schema}
  */
  readonly schema: string;
  /**
  * from_specification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/job_service#from_specification JobService#from_specification}
  */
  readonly fromSpecification?: JobServiceFromSpecification;
  /**
  * from_specification_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/job_service#from_specification_template JobService#from_specification_template}
  */
  readonly fromSpecificationTemplate?: JobServiceFromSpecificationTemplate;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/job_service#timeouts JobService#timeouts}
  */
  readonly timeouts?: JobServiceTimeouts;
}
export interface JobServiceDescribeOutput {
}

export function jobServiceDescribeOutputToTerraform(struct?: JobServiceDescribeOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function jobServiceDescribeOutputToHclTerraform(struct?: JobServiceDescribeOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class JobServiceDescribeOutputOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JobServiceDescribeOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobServiceDescribeOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_resume - computed: true, optional: false, required: false
  public get autoResume() {
    return this.getBooleanAttribute('auto_resume');
  }

  // auto_suspend_secs - computed: true, optional: false, required: false
  public get autoSuspendSecs() {
    return this.getNumberAttribute('auto_suspend_secs');
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // compute_pool - computed: true, optional: false, required: false
  public get computePool() {
    return this.getStringAttribute('compute_pool');
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // current_instances - computed: true, optional: false, required: false
  public get currentInstances() {
    return this.getNumberAttribute('current_instances');
  }

  // database_name - computed: true, optional: false, required: false
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }

  // dns_name - computed: true, optional: false, required: false
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }

  // external_access_integrations - computed: true, optional: false, required: false
  public get externalAccessIntegrations() {
    return cdktf.Fn.tolist(this.getListAttribute('external_access_integrations'));
  }

  // is_async_job - computed: true, optional: false, required: false
  public get isAsyncJob() {
    return this.getBooleanAttribute('is_async_job');
  }

  // is_job - computed: true, optional: false, required: false
  public get isJob() {
    return this.getBooleanAttribute('is_job');
  }

  // is_upgrading - computed: true, optional: false, required: false
  public get isUpgrading() {
    return this.getBooleanAttribute('is_upgrading');
  }

  // managing_object_domain - computed: true, optional: false, required: false
  public get managingObjectDomain() {
    return this.getStringAttribute('managing_object_domain');
  }

  // managing_object_name - computed: true, optional: false, required: false
  public get managingObjectName() {
    return this.getStringAttribute('managing_object_name');
  }

  // max_instances - computed: true, optional: false, required: false
  public get maxInstances() {
    return this.getNumberAttribute('max_instances');
  }

  // min_instances - computed: true, optional: false, required: false
  public get minInstances() {
    return this.getNumberAttribute('min_instances');
  }

  // min_ready_instances - computed: true, optional: false, required: false
  public get minReadyInstances() {
    return this.getNumberAttribute('min_ready_instances');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // owner_role_type - computed: true, optional: false, required: false
  public get ownerRoleType() {
    return this.getStringAttribute('owner_role_type');
  }

  // query_warehouse - computed: true, optional: false, required: false
  public get queryWarehouse() {
    return this.getStringAttribute('query_warehouse');
  }

  // resumed_on - computed: true, optional: false, required: false
  public get resumedOn() {
    return this.getStringAttribute('resumed_on');
  }

  // schema_name - computed: true, optional: false, required: false
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }

  // spec - computed: true, optional: false, required: false
  public get spec() {
    return this.getStringAttribute('spec');
  }

  // spec_digest - computed: true, optional: false, required: false
  public get specDigest() {
    return this.getStringAttribute('spec_digest');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // suspended_on - computed: true, optional: false, required: false
  public get suspendedOn() {
    return this.getStringAttribute('suspended_on');
  }

  // target_instances - computed: true, optional: false, required: false
  public get targetInstances() {
    return this.getNumberAttribute('target_instances');
  }

  // updated_on - computed: true, optional: false, required: false
  public get updatedOn() {
    return this.getStringAttribute('updated_on');
  }
}

export class JobServiceDescribeOutputList extends cdktf.ComplexList {

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
  public get(index: number): JobServiceDescribeOutputOutputReference {
    return new JobServiceDescribeOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobServiceShowOutput {
}

export function jobServiceShowOutputToTerraform(struct?: JobServiceShowOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function jobServiceShowOutputToHclTerraform(struct?: JobServiceShowOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class JobServiceShowOutputOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JobServiceShowOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobServiceShowOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_resume - computed: true, optional: false, required: false
  public get autoResume() {
    return this.getBooleanAttribute('auto_resume');
  }

  // auto_suspend_secs - computed: true, optional: false, required: false
  public get autoSuspendSecs() {
    return this.getNumberAttribute('auto_suspend_secs');
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // compute_pool - computed: true, optional: false, required: false
  public get computePool() {
    return this.getStringAttribute('compute_pool');
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // current_instances - computed: true, optional: false, required: false
  public get currentInstances() {
    return this.getNumberAttribute('current_instances');
  }

  // database_name - computed: true, optional: false, required: false
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }

  // dns_name - computed: true, optional: false, required: false
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }

  // external_access_integrations - computed: true, optional: false, required: false
  public get externalAccessIntegrations() {
    return cdktf.Fn.tolist(this.getListAttribute('external_access_integrations'));
  }

  // is_async_job - computed: true, optional: false, required: false
  public get isAsyncJob() {
    return this.getBooleanAttribute('is_async_job');
  }

  // is_job - computed: true, optional: false, required: false
  public get isJob() {
    return this.getBooleanAttribute('is_job');
  }

  // is_upgrading - computed: true, optional: false, required: false
  public get isUpgrading() {
    return this.getBooleanAttribute('is_upgrading');
  }

  // managing_object_domain - computed: true, optional: false, required: false
  public get managingObjectDomain() {
    return this.getStringAttribute('managing_object_domain');
  }

  // managing_object_name - computed: true, optional: false, required: false
  public get managingObjectName() {
    return this.getStringAttribute('managing_object_name');
  }

  // max_instances - computed: true, optional: false, required: false
  public get maxInstances() {
    return this.getNumberAttribute('max_instances');
  }

  // min_instances - computed: true, optional: false, required: false
  public get minInstances() {
    return this.getNumberAttribute('min_instances');
  }

  // min_ready_instances - computed: true, optional: false, required: false
  public get minReadyInstances() {
    return this.getNumberAttribute('min_ready_instances');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // owner_role_type - computed: true, optional: false, required: false
  public get ownerRoleType() {
    return this.getStringAttribute('owner_role_type');
  }

  // query_warehouse - computed: true, optional: false, required: false
  public get queryWarehouse() {
    return this.getStringAttribute('query_warehouse');
  }

  // resumed_on - computed: true, optional: false, required: false
  public get resumedOn() {
    return this.getStringAttribute('resumed_on');
  }

  // schema_name - computed: true, optional: false, required: false
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }

  // spec_digest - computed: true, optional: false, required: false
  public get specDigest() {
    return this.getStringAttribute('spec_digest');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // suspended_on - computed: true, optional: false, required: false
  public get suspendedOn() {
    return this.getStringAttribute('suspended_on');
  }

  // target_instances - computed: true, optional: false, required: false
  public get targetInstances() {
    return this.getNumberAttribute('target_instances');
  }

  // updated_on - computed: true, optional: false, required: false
  public get updatedOn() {
    return this.getStringAttribute('updated_on');
  }
}

export class JobServiceShowOutputList extends cdktf.ComplexList {

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
  public get(index: number): JobServiceShowOutputOutputReference {
    return new JobServiceShowOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobServiceFromSpecification {
  /**
  * The file name of the service specification. Example: `spec.yaml`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/job_service#file JobService#file}
  */
  readonly file?: string;
  /**
  * The path to the service specification file on the given stage. When the path is specified, the `/` character is automatically added as a path prefix. Example: `path/to/spec`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/job_service#path JobService#path}
  */
  readonly path?: string;
  /**
  * The fully qualified name of the stage containing the service specification file. At symbol (`@`) is added automatically. Example: `"\"<db_name>\".\"<schema_name>\".\"<stage_name>\""`. For more information about this resource, see [docs](./stage).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/job_service#stage JobService#stage}
  */
  readonly stage?: string;
  /**
  * The embedded text of the service specification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/job_service#text JobService#text}
  */
  readonly text?: string;
}

export function jobServiceFromSpecificationToTerraform(struct?: JobServiceFromSpecificationOutputReference | JobServiceFromSpecification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file: cdktf.stringToTerraform(struct!.file),
    path: cdktf.stringToTerraform(struct!.path),
    stage: cdktf.stringToTerraform(struct!.stage),
    text: cdktf.stringToTerraform(struct!.text),
  }
}


export function jobServiceFromSpecificationToHclTerraform(struct?: JobServiceFromSpecificationOutputReference | JobServiceFromSpecification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file: {
      value: cdktf.stringToHclTerraform(struct!.file),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
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
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobServiceFromSpecificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobServiceFromSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._file !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._stage !== undefined) {
      hasAnyValues = true;
      internalValueResult.stage = this._stage;
    }
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobServiceFromSpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._file = undefined;
      this._path = undefined;
      this._stage = undefined;
      this._text = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._file = value.file;
      this._path = value.path;
      this._stage = value.stage;
      this._text = value.text;
    }
  }

  // file - computed: false, optional: true, required: false
  private _file?: string; 
  public get file() {
    return this.getStringAttribute('file');
  }
  public set file(value: string) {
    this._file = value;
  }
  public resetFile() {
    this._file = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // stage - computed: false, optional: true, required: false
  private _stage?: string; 
  public get stage() {
    return this.getStringAttribute('stage');
  }
  public set stage(value: string) {
    this._stage = value;
  }
  public resetStage() {
    this._stage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stageInput() {
    return this._stage;
  }

  // text - computed: false, optional: true, required: false
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }
}
export interface JobServiceFromSpecificationTemplateUsing {
  /**
  * The name of the template variable. The provider wraps it in double quotes by default, so be aware of that while referencing the argument in the spec definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/job_service#key JobService#key}
  */
  readonly key: string;
  /**
  * The value to assign to the variable in the template. The provider wraps it in `$$` by default, so be aware of that while referencing the argument in the spec definition. The value must either be alphanumeric or valid JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/job_service#value JobService#value}
  */
  readonly value: string;
}

export function jobServiceFromSpecificationTemplateUsingToTerraform(struct?: JobServiceFromSpecificationTemplateUsing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function jobServiceFromSpecificationTemplateUsingToHclTerraform(struct?: JobServiceFromSpecificationTemplateUsing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobServiceFromSpecificationTemplateUsingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JobServiceFromSpecificationTemplateUsing | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobServiceFromSpecificationTemplateUsing | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class JobServiceFromSpecificationTemplateUsingList extends cdktf.ComplexList {
  public internalValue? : JobServiceFromSpecificationTemplateUsing[] | cdktf.IResolvable

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
  public get(index: number): JobServiceFromSpecificationTemplateUsingOutputReference {
    return new JobServiceFromSpecificationTemplateUsingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JobServiceFromSpecificationTemplate {
  /**
  * The file name of the service specification template. Example: `spec.yaml`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/job_service#file JobService#file}
  */
  readonly file?: string;
  /**
  * The path to the service specification template file on the given stage. When the path is specified, the `/` character is automatically added as a path prefix. Example: `path/to/spec`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/job_service#path JobService#path}
  */
  readonly path?: string;
  /**
  * The fully qualified name of the stage containing the service specification template file. At symbol (`@`) is added automatically. Example: `"\"<db_name>\".\"<schema_name>\".\"<stage_name>\""`. For more information about this resource, see [docs](./stage).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/job_service#stage JobService#stage}
  */
  readonly stage?: string;
  /**
  * The embedded text of the service specification template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/job_service#text JobService#text}
  */
  readonly text?: string;
  /**
  * using block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/job_service#using JobService#using}
  */
  readonly using: JobServiceFromSpecificationTemplateUsing[] | cdktf.IResolvable;
}

export function jobServiceFromSpecificationTemplateToTerraform(struct?: JobServiceFromSpecificationTemplateOutputReference | JobServiceFromSpecificationTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file: cdktf.stringToTerraform(struct!.file),
    path: cdktf.stringToTerraform(struct!.path),
    stage: cdktf.stringToTerraform(struct!.stage),
    text: cdktf.stringToTerraform(struct!.text),
    using: cdktf.listMapper(jobServiceFromSpecificationTemplateUsingToTerraform, true)(struct!.using),
  }
}


export function jobServiceFromSpecificationTemplateToHclTerraform(struct?: JobServiceFromSpecificationTemplateOutputReference | JobServiceFromSpecificationTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file: {
      value: cdktf.stringToHclTerraform(struct!.file),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
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
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    using: {
      value: cdktf.listMapperHcl(jobServiceFromSpecificationTemplateUsingToHclTerraform, true)(struct!.using),
      isBlock: true,
      type: "list",
      storageClassType: "JobServiceFromSpecificationTemplateUsingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JobServiceFromSpecificationTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JobServiceFromSpecificationTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._file !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._stage !== undefined) {
      hasAnyValues = true;
      internalValueResult.stage = this._stage;
    }
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    if (this._using?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.using = this._using?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JobServiceFromSpecificationTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._file = undefined;
      this._path = undefined;
      this._stage = undefined;
      this._text = undefined;
      this._using.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._file = value.file;
      this._path = value.path;
      this._stage = value.stage;
      this._text = value.text;
      this._using.internalValue = value.using;
    }
  }

  // file - computed: false, optional: true, required: false
  private _file?: string; 
  public get file() {
    return this.getStringAttribute('file');
  }
  public set file(value: string) {
    this._file = value;
  }
  public resetFile() {
    this._file = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // stage - computed: false, optional: true, required: false
  private _stage?: string; 
  public get stage() {
    return this.getStringAttribute('stage');
  }
  public set stage(value: string) {
    this._stage = value;
  }
  public resetStage() {
    this._stage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stageInput() {
    return this._stage;
  }

  // text - computed: false, optional: true, required: false
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }

  // using - computed: false, optional: false, required: true
  private _using = new JobServiceFromSpecificationTemplateUsingList(this, "using", false);
  public get using() {
    return this._using;
  }
  public putUsing(value: JobServiceFromSpecificationTemplateUsing[] | cdktf.IResolvable) {
    this._using.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usingInput() {
    return this._using.internalValue;
  }
}
export interface JobServiceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/job_service#create JobService#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/job_service#delete JobService#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/job_service#read JobService#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/job_service#update JobService#update}
  */
  readonly update?: string;
}

export function jobServiceTimeoutsToTerraform(struct?: JobServiceTimeouts | cdktf.IResolvable): any {
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


export function jobServiceTimeoutsToHclTerraform(struct?: JobServiceTimeouts | cdktf.IResolvable): any {
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

export class JobServiceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): JobServiceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: JobServiceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/job_service snowflake_job_service}
*/
export class JobService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_job_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a JobService resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the JobService to import
  * @param importFromId The id of the existing JobService that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/job_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the JobService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_job_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/job_service snowflake_job_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options JobServiceConfig
  */
  public constructor(scope: Construct, id: string, config: JobServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_job_service',
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
    this._computePool = config.computePool;
    this._database = config.database;
    this._externalAccessIntegrations = config.externalAccessIntegrations;
    this._id = config.id;
    this._name = config.name;
    this._queryWarehouse = config.queryWarehouse;
    this._schema = config.schema;
    this._fromSpecification.internalValue = config.fromSpecification;
    this._fromSpecificationTemplate.internalValue = config.fromSpecificationTemplate;
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

  // compute_pool - computed: false, optional: false, required: true
  private _computePool?: string; 
  public get computePool() {
    return this.getStringAttribute('compute_pool');
  }
  public set computePool(value: string) {
    this._computePool = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computePoolInput() {
    return this._computePool;
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
  private _describeOutput = new JobServiceDescribeOutputList(this, "describe_output", false);
  public get describeOutput() {
    return this._describeOutput;
  }

  // external_access_integrations - computed: false, optional: true, required: false
  private _externalAccessIntegrations?: string[]; 
  public get externalAccessIntegrations() {
    return cdktf.Fn.tolist(this.getListAttribute('external_access_integrations'));
  }
  public set externalAccessIntegrations(value: string[]) {
    this._externalAccessIntegrations = value;
  }
  public resetExternalAccessIntegrations() {
    this._externalAccessIntegrations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalAccessIntegrationsInput() {
    return this._externalAccessIntegrations;
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

  // query_warehouse - computed: false, optional: true, required: false
  private _queryWarehouse?: string; 
  public get queryWarehouse() {
    return this.getStringAttribute('query_warehouse');
  }
  public set queryWarehouse(value: string) {
    this._queryWarehouse = value;
  }
  public resetQueryWarehouse() {
    this._queryWarehouse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryWarehouseInput() {
    return this._queryWarehouse;
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

  // service_type - computed: true, optional: false, required: false
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }

  // show_output - computed: true, optional: false, required: false
  private _showOutput = new JobServiceShowOutputList(this, "show_output", false);
  public get showOutput() {
    return this._showOutput;
  }

  // from_specification - computed: false, optional: true, required: false
  private _fromSpecification = new JobServiceFromSpecificationOutputReference(this, "from_specification");
  public get fromSpecification() {
    return this._fromSpecification;
  }
  public putFromSpecification(value: JobServiceFromSpecification) {
    this._fromSpecification.internalValue = value;
  }
  public resetFromSpecification() {
    this._fromSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromSpecificationInput() {
    return this._fromSpecification.internalValue;
  }

  // from_specification_template - computed: false, optional: true, required: false
  private _fromSpecificationTemplate = new JobServiceFromSpecificationTemplateOutputReference(this, "from_specification_template");
  public get fromSpecificationTemplate() {
    return this._fromSpecificationTemplate;
  }
  public putFromSpecificationTemplate(value: JobServiceFromSpecificationTemplate) {
    this._fromSpecificationTemplate.internalValue = value;
  }
  public resetFromSpecificationTemplate() {
    this._fromSpecificationTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromSpecificationTemplateInput() {
    return this._fromSpecificationTemplate.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new JobServiceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: JobServiceTimeouts) {
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
      compute_pool: cdktf.stringToTerraform(this._computePool),
      database: cdktf.stringToTerraform(this._database),
      external_access_integrations: cdktf.listMapper(cdktf.stringToTerraform, false)(this._externalAccessIntegrations),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      query_warehouse: cdktf.stringToTerraform(this._queryWarehouse),
      schema: cdktf.stringToTerraform(this._schema),
      from_specification: jobServiceFromSpecificationToTerraform(this._fromSpecification.internalValue),
      from_specification_template: jobServiceFromSpecificationTemplateToTerraform(this._fromSpecificationTemplate.internalValue),
      timeouts: jobServiceTimeoutsToTerraform(this._timeouts.internalValue),
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
      compute_pool: {
        value: cdktf.stringToHclTerraform(this._computePool),
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
      external_access_integrations: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._externalAccessIntegrations),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      query_warehouse: {
        value: cdktf.stringToHclTerraform(this._queryWarehouse),
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
      from_specification: {
        value: jobServiceFromSpecificationToHclTerraform(this._fromSpecification.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "JobServiceFromSpecificationList",
      },
      from_specification_template: {
        value: jobServiceFromSpecificationTemplateToHclTerraform(this._fromSpecificationTemplate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "JobServiceFromSpecificationTemplateList",
      },
      timeouts: {
        value: jobServiceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "JobServiceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
