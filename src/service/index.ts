/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether to automatically resume a service. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/service#auto_resume Service#auto_resume}
  */
  readonly autoResume?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the number of seconds of inactivity (service is idle) after which Snowflake automatically suspends the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/service#auto_suspend_secs Service#auto_suspend_secs}
  */
  readonly autoSuspendSecs?: number;
  /**
  * Specifies a comment for the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/service#comment Service#comment}
  */
  readonly comment?: string;
  /**
  * Specifies the name of the compute pool in your account on which to run the service. Identifiers with special or lower-case characters are not supported. This limitation in the provider follows the limitation in Snowflake (see [docs](https://docs.snowflake.com/en/sql-reference/sql/create-compute-pool)). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/service#compute_pool Service#compute_pool}
  */
  readonly computePool: string;
  /**
  * The database in which to create the service. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/service#database Service#database}
  */
  readonly database: string;
  /**
  * Specifies the names of the external access integrations that allow your service to access external sites.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/service#external_access_integrations Service#external_access_integrations}
  */
  readonly externalAccessIntegrations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/service#id Service#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the maximum number of service instances to run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/service#max_instances Service#max_instances}
  */
  readonly maxInstances?: number;
  /**
  * Specifies the minimum number of service instances to run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/service#min_instances Service#min_instances}
  */
  readonly minInstances?: number;
  /**
  * Indicates the minimum service instances that must be ready for Snowflake to consider the service is ready to process requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/service#min_ready_instances Service#min_ready_instances}
  */
  readonly minReadyInstances?: number;
  /**
  * Specifies the identifier for the service; must be unique for the schema in which the service is created. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/service#name Service#name}
  */
  readonly name: string;
  /**
  * Warehouse to use if a service container connects to Snowflake to execute a query but does not explicitly specify a warehouse to use. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/service#query_warehouse Service#query_warehouse}
  */
  readonly queryWarehouse?: string;
  /**
  * The schema in which to create the service. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/service#schema Service#schema}
  */
  readonly schema: string;
  /**
  * from_specification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/service#from_specification Service#from_specification}
  */
  readonly fromSpecification?: ServiceFromSpecification;
  /**
  * from_specification_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/service#from_specification_template Service#from_specification_template}
  */
  readonly fromSpecificationTemplate?: ServiceFromSpecificationTemplate;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/service#timeouts Service#timeouts}
  */
  readonly timeouts?: ServiceTimeouts;
}
export interface ServiceDescribeOutput {
}

export function serviceDescribeOutputToTerraform(struct?: ServiceDescribeOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function serviceDescribeOutputToHclTerraform(struct?: ServiceDescribeOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ServiceDescribeOutputOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceDescribeOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceDescribeOutput | undefined) {
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

export class ServiceDescribeOutputList extends cdktf.ComplexList {

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
  public get(index: number): ServiceDescribeOutputOutputReference {
    return new ServiceDescribeOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceShowOutput {
}

export function serviceShowOutputToTerraform(struct?: ServiceShowOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function serviceShowOutputToHclTerraform(struct?: ServiceShowOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ServiceShowOutputOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceShowOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceShowOutput | undefined) {
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

export class ServiceShowOutputList extends cdktf.ComplexList {

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
  public get(index: number): ServiceShowOutputOutputReference {
    return new ServiceShowOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceFromSpecification {
  /**
  * The file name of the service specification. Example: `spec.yaml`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/service#file Service#file}
  */
  readonly file?: string;
  /**
  * The path to the service specification file on the given stage. When the path is specified, the `/` character is automatically added as a path prefix. Example: `path/to/spec`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/service#path Service#path}
  */
  readonly path?: string;
  /**
  * The fully qualified name of the stage containing the service specification file. At symbol (`@`) is added automatically. Example: `"\"<db_name>\".\"<schema_name>\".\"<stage_name>\""`. For more information about this resource, see [docs](./stage).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/service#stage Service#stage}
  */
  readonly stage?: string;
  /**
  * The embedded text of the service specification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/service#text Service#text}
  */
  readonly text?: string;
}

export function serviceFromSpecificationToTerraform(struct?: ServiceFromSpecificationOutputReference | ServiceFromSpecification): any {
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


export function serviceFromSpecificationToHclTerraform(struct?: ServiceFromSpecificationOutputReference | ServiceFromSpecification): any {
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

export class ServiceFromSpecificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceFromSpecification | undefined {
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

  public set internalValue(value: ServiceFromSpecification | undefined) {
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
export interface ServiceFromSpecificationTemplateUsing {
  /**
  * The name of the template variable. The provider wraps it in double quotes by default, so be aware of that while referencing the argument in the spec definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/service#key Service#key}
  */
  readonly key: string;
  /**
  * The value to assign to the variable in the template. The provider wraps it in `$$` by default, so be aware of that while referencing the argument in the spec definition. The value must either be alphanumeric or valid JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/service#value Service#value}
  */
  readonly value: string;
}

export function serviceFromSpecificationTemplateUsingToTerraform(struct?: ServiceFromSpecificationTemplateUsing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function serviceFromSpecificationTemplateUsingToHclTerraform(struct?: ServiceFromSpecificationTemplateUsing | cdktf.IResolvable): any {
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

export class ServiceFromSpecificationTemplateUsingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceFromSpecificationTemplateUsing | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ServiceFromSpecificationTemplateUsing | cdktf.IResolvable | undefined) {
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

export class ServiceFromSpecificationTemplateUsingList extends cdktf.ComplexList {
  public internalValue? : ServiceFromSpecificationTemplateUsing[] | cdktf.IResolvable

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
  public get(index: number): ServiceFromSpecificationTemplateUsingOutputReference {
    return new ServiceFromSpecificationTemplateUsingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceFromSpecificationTemplate {
  /**
  * The file name of the service specification template. Example: `spec.yaml`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/service#file Service#file}
  */
  readonly file?: string;
  /**
  * The path to the service specification template file on the given stage. When the path is specified, the `/` character is automatically added as a path prefix. Example: `path/to/spec`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/service#path Service#path}
  */
  readonly path?: string;
  /**
  * The fully qualified name of the stage containing the service specification template file. At symbol (`@`) is added automatically. Example: `"\"<db_name>\".\"<schema_name>\".\"<stage_name>\""`. For more information about this resource, see [docs](./stage).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/service#stage Service#stage}
  */
  readonly stage?: string;
  /**
  * The embedded text of the service specification template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/service#text Service#text}
  */
  readonly text?: string;
  /**
  * using block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/service#using Service#using}
  */
  readonly using: ServiceFromSpecificationTemplateUsing[] | cdktf.IResolvable;
}

export function serviceFromSpecificationTemplateToTerraform(struct?: ServiceFromSpecificationTemplateOutputReference | ServiceFromSpecificationTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file: cdktf.stringToTerraform(struct!.file),
    path: cdktf.stringToTerraform(struct!.path),
    stage: cdktf.stringToTerraform(struct!.stage),
    text: cdktf.stringToTerraform(struct!.text),
    using: cdktf.listMapper(serviceFromSpecificationTemplateUsingToTerraform, true)(struct!.using),
  }
}


export function serviceFromSpecificationTemplateToHclTerraform(struct?: ServiceFromSpecificationTemplateOutputReference | ServiceFromSpecificationTemplate): any {
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
      value: cdktf.listMapperHcl(serviceFromSpecificationTemplateUsingToHclTerraform, true)(struct!.using),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceFromSpecificationTemplateUsingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceFromSpecificationTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceFromSpecificationTemplate | undefined {
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

  public set internalValue(value: ServiceFromSpecificationTemplate | undefined) {
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
  private _using = new ServiceFromSpecificationTemplateUsingList(this, "using", false);
  public get using() {
    return this._using;
  }
  public putUsing(value: ServiceFromSpecificationTemplateUsing[] | cdktf.IResolvable) {
    this._using.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usingInput() {
    return this._using.internalValue;
  }
}
export interface ServiceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/service#create Service#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/service#delete Service#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/service#read Service#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/service#update Service#update}
  */
  readonly update?: string;
}

export function serviceTimeoutsToTerraform(struct?: ServiceTimeouts | cdktf.IResolvable): any {
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


export function serviceTimeoutsToHclTerraform(struct?: ServiceTimeouts | cdktf.IResolvable): any {
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

export class ServiceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServiceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ServiceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/service snowflake_service}
*/
export class Service extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Service resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Service to import
  * @param importFromId The id of the existing Service that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Service to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/service snowflake_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_service',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '2.8.0',
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
    this._autoResume = config.autoResume;
    this._autoSuspendSecs = config.autoSuspendSecs;
    this._comment = config.comment;
    this._computePool = config.computePool;
    this._database = config.database;
    this._externalAccessIntegrations = config.externalAccessIntegrations;
    this._id = config.id;
    this._maxInstances = config.maxInstances;
    this._minInstances = config.minInstances;
    this._minReadyInstances = config.minReadyInstances;
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

  // auto_resume - computed: false, optional: true, required: false
  private _autoResume?: string; 
  public get autoResume() {
    return this.getStringAttribute('auto_resume');
  }
  public set autoResume(value: string) {
    this._autoResume = value;
  }
  public resetAutoResume() {
    this._autoResume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoResumeInput() {
    return this._autoResume;
  }

  // auto_suspend_secs - computed: false, optional: true, required: false
  private _autoSuspendSecs?: number; 
  public get autoSuspendSecs() {
    return this.getNumberAttribute('auto_suspend_secs');
  }
  public set autoSuspendSecs(value: number) {
    this._autoSuspendSecs = value;
  }
  public resetAutoSuspendSecs() {
    this._autoSuspendSecs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSuspendSecsInput() {
    return this._autoSuspendSecs;
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
  private _describeOutput = new ServiceDescribeOutputList(this, "describe_output", false);
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

  // max_instances - computed: false, optional: true, required: false
  private _maxInstances?: number; 
  public get maxInstances() {
    return this.getNumberAttribute('max_instances');
  }
  public set maxInstances(value: number) {
    this._maxInstances = value;
  }
  public resetMaxInstances() {
    this._maxInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInstancesInput() {
    return this._maxInstances;
  }

  // min_instances - computed: false, optional: true, required: false
  private _minInstances?: number; 
  public get minInstances() {
    return this.getNumberAttribute('min_instances');
  }
  public set minInstances(value: number) {
    this._minInstances = value;
  }
  public resetMinInstances() {
    this._minInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInstancesInput() {
    return this._minInstances;
  }

  // min_ready_instances - computed: false, optional: true, required: false
  private _minReadyInstances?: number; 
  public get minReadyInstances() {
    return this.getNumberAttribute('min_ready_instances');
  }
  public set minReadyInstances(value: number) {
    this._minReadyInstances = value;
  }
  public resetMinReadyInstances() {
    this._minReadyInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minReadyInstancesInput() {
    return this._minReadyInstances;
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
  private _showOutput = new ServiceShowOutputList(this, "show_output", false);
  public get showOutput() {
    return this._showOutput;
  }

  // from_specification - computed: false, optional: true, required: false
  private _fromSpecification = new ServiceFromSpecificationOutputReference(this, "from_specification");
  public get fromSpecification() {
    return this._fromSpecification;
  }
  public putFromSpecification(value: ServiceFromSpecification) {
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
  private _fromSpecificationTemplate = new ServiceFromSpecificationTemplateOutputReference(this, "from_specification_template");
  public get fromSpecificationTemplate() {
    return this._fromSpecificationTemplate;
  }
  public putFromSpecificationTemplate(value: ServiceFromSpecificationTemplate) {
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
  private _timeouts = new ServiceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ServiceTimeouts) {
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
      auto_resume: cdktf.stringToTerraform(this._autoResume),
      auto_suspend_secs: cdktf.numberToTerraform(this._autoSuspendSecs),
      comment: cdktf.stringToTerraform(this._comment),
      compute_pool: cdktf.stringToTerraform(this._computePool),
      database: cdktf.stringToTerraform(this._database),
      external_access_integrations: cdktf.listMapper(cdktf.stringToTerraform, false)(this._externalAccessIntegrations),
      id: cdktf.stringToTerraform(this._id),
      max_instances: cdktf.numberToTerraform(this._maxInstances),
      min_instances: cdktf.numberToTerraform(this._minInstances),
      min_ready_instances: cdktf.numberToTerraform(this._minReadyInstances),
      name: cdktf.stringToTerraform(this._name),
      query_warehouse: cdktf.stringToTerraform(this._queryWarehouse),
      schema: cdktf.stringToTerraform(this._schema),
      from_specification: serviceFromSpecificationToTerraform(this._fromSpecification.internalValue),
      from_specification_template: serviceFromSpecificationTemplateToTerraform(this._fromSpecificationTemplate.internalValue),
      timeouts: serviceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_resume: {
        value: cdktf.stringToHclTerraform(this._autoResume),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_suspend_secs: {
        value: cdktf.numberToHclTerraform(this._autoSuspendSecs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
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
      max_instances: {
        value: cdktf.numberToHclTerraform(this._maxInstances),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_instances: {
        value: cdktf.numberToHclTerraform(this._minInstances),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_ready_instances: {
        value: cdktf.numberToHclTerraform(this._minReadyInstances),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
        value: serviceFromSpecificationToHclTerraform(this._fromSpecification.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceFromSpecificationList",
      },
      from_specification_template: {
        value: serviceFromSpecificationTemplateToHclTerraform(this._fromSpecificationTemplate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceFromSpecificationTemplateList",
      },
      timeouts: {
        value: serviceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ServiceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
