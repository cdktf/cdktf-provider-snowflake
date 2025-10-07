/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/notification_integration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NotificationIntegrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * AWS IAM role ARN for notification integration to assume. Required for AWS_SNS provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/notification_integration#aws_sns_role_arn NotificationIntegration#aws_sns_role_arn}
  */
  readonly awsSnsRoleArn?: string;
  /**
  * AWS SNS Topic ARN for notification integration to connect to. Required for AWS_SNS provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/notification_integration#aws_sns_topic_arn NotificationIntegration#aws_sns_topic_arn}
  */
  readonly awsSnsTopicArn?: string;
  /**
  * AWS SQS queue ARN for notification integration to connect to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/notification_integration#aws_sqs_arn NotificationIntegration#aws_sqs_arn}
  */
  readonly awsSqsArn?: string;
  /**
  * AWS IAM role ARN for notification integration to assume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/notification_integration#aws_sqs_role_arn NotificationIntegration#aws_sqs_role_arn}
  */
  readonly awsSqsRoleArn?: string;
  /**
  * The queue ID for the Azure Queue Storage queue created for Event Grid notifications. Required for AZURE_STORAGE_QUEUE provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/notification_integration#azure_storage_queue_primary_uri NotificationIntegration#azure_storage_queue_primary_uri}
  */
  readonly azureStorageQueuePrimaryUri?: string;
  /**
  * The ID of the Azure Active Directory tenant used for identity management. Required for AZURE_STORAGE_QUEUE provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/notification_integration#azure_tenant_id NotificationIntegration#azure_tenant_id}
  */
  readonly azureTenantId?: string;
  /**
  * A comment for the integration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/notification_integration#comment NotificationIntegration#comment}
  */
  readonly comment?: string;
  /**
  * Direction of the cloud messaging with respect to Snowflake (required only for error notifications)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/notification_integration#direction NotificationIntegration#direction}
  */
  readonly direction?: string;
  /**
  * (Default: `true`) 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/notification_integration#enabled NotificationIntegration#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The subscription id that Snowflake will listen to when using the GCP_PUBSUB provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/notification_integration#gcp_pubsub_subscription_name NotificationIntegration#gcp_pubsub_subscription_name}
  */
  readonly gcpPubsubSubscriptionName?: string;
  /**
  * The topic id that Snowflake will use to push notifications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/notification_integration#gcp_pubsub_topic_name NotificationIntegration#gcp_pubsub_topic_name}
  */
  readonly gcpPubsubTopicName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/notification_integration#id NotificationIntegration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/notification_integration#name NotificationIntegration#name}
  */
  readonly name: string;
  /**
  * The third-party cloud message queuing service (supported values: AZURE_STORAGE_QUEUE, AWS_SNS, GCP_PUBSUB; AWS_SQS is deprecated and will be removed in the future provider versions)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/notification_integration#notification_provider NotificationIntegration#notification_provider}
  */
  readonly notificationProvider: string;
  /**
  * (Default: `QUEUE`) A type of integration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/notification_integration#type NotificationIntegration#type}
  */
  readonly type?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/notification_integration#timeouts NotificationIntegration#timeouts}
  */
  readonly timeouts?: NotificationIntegrationTimeouts;
}
export interface NotificationIntegrationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/notification_integration#create NotificationIntegration#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/notification_integration#delete NotificationIntegration#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/notification_integration#read NotificationIntegration#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/notification_integration#update NotificationIntegration#update}
  */
  readonly update?: string;
}

export function notificationIntegrationTimeoutsToTerraform(struct?: NotificationIntegrationTimeouts | cdktf.IResolvable): any {
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


export function notificationIntegrationTimeoutsToHclTerraform(struct?: NotificationIntegrationTimeouts | cdktf.IResolvable): any {
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

export class NotificationIntegrationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NotificationIntegrationTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NotificationIntegrationTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/notification_integration snowflake_notification_integration}
*/
export class NotificationIntegration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_notification_integration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NotificationIntegration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NotificationIntegration to import
  * @param importFromId The id of the existing NotificationIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/notification_integration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NotificationIntegration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_notification_integration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.8.0/docs/resources/notification_integration snowflake_notification_integration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NotificationIntegrationConfig
  */
  public constructor(scope: Construct, id: string, config: NotificationIntegrationConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_notification_integration',
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
    this._awsSnsRoleArn = config.awsSnsRoleArn;
    this._awsSnsTopicArn = config.awsSnsTopicArn;
    this._awsSqsArn = config.awsSqsArn;
    this._awsSqsRoleArn = config.awsSqsRoleArn;
    this._azureStorageQueuePrimaryUri = config.azureStorageQueuePrimaryUri;
    this._azureTenantId = config.azureTenantId;
    this._comment = config.comment;
    this._direction = config.direction;
    this._enabled = config.enabled;
    this._gcpPubsubSubscriptionName = config.gcpPubsubSubscriptionName;
    this._gcpPubsubTopicName = config.gcpPubsubTopicName;
    this._id = config.id;
    this._name = config.name;
    this._notificationProvider = config.notificationProvider;
    this._type = config.type;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_sns_external_id - computed: true, optional: false, required: false
  public get awsSnsExternalId() {
    return this.getStringAttribute('aws_sns_external_id');
  }

  // aws_sns_iam_user_arn - computed: true, optional: false, required: false
  public get awsSnsIamUserArn() {
    return this.getStringAttribute('aws_sns_iam_user_arn');
  }

  // aws_sns_role_arn - computed: false, optional: true, required: false
  private _awsSnsRoleArn?: string; 
  public get awsSnsRoleArn() {
    return this.getStringAttribute('aws_sns_role_arn');
  }
  public set awsSnsRoleArn(value: string) {
    this._awsSnsRoleArn = value;
  }
  public resetAwsSnsRoleArn() {
    this._awsSnsRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSnsRoleArnInput() {
    return this._awsSnsRoleArn;
  }

  // aws_sns_topic_arn - computed: false, optional: true, required: false
  private _awsSnsTopicArn?: string; 
  public get awsSnsTopicArn() {
    return this.getStringAttribute('aws_sns_topic_arn');
  }
  public set awsSnsTopicArn(value: string) {
    this._awsSnsTopicArn = value;
  }
  public resetAwsSnsTopicArn() {
    this._awsSnsTopicArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSnsTopicArnInput() {
    return this._awsSnsTopicArn;
  }

  // aws_sqs_arn - computed: false, optional: true, required: false
  private _awsSqsArn?: string; 
  public get awsSqsArn() {
    return this.getStringAttribute('aws_sqs_arn');
  }
  public set awsSqsArn(value: string) {
    this._awsSqsArn = value;
  }
  public resetAwsSqsArn() {
    this._awsSqsArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSqsArnInput() {
    return this._awsSqsArn;
  }

  // aws_sqs_external_id - computed: true, optional: false, required: false
  public get awsSqsExternalId() {
    return this.getStringAttribute('aws_sqs_external_id');
  }

  // aws_sqs_iam_user_arn - computed: true, optional: false, required: false
  public get awsSqsIamUserArn() {
    return this.getStringAttribute('aws_sqs_iam_user_arn');
  }

  // aws_sqs_role_arn - computed: false, optional: true, required: false
  private _awsSqsRoleArn?: string; 
  public get awsSqsRoleArn() {
    return this.getStringAttribute('aws_sqs_role_arn');
  }
  public set awsSqsRoleArn(value: string) {
    this._awsSqsRoleArn = value;
  }
  public resetAwsSqsRoleArn() {
    this._awsSqsRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSqsRoleArnInput() {
    return this._awsSqsRoleArn;
  }

  // azure_storage_queue_primary_uri - computed: false, optional: true, required: false
  private _azureStorageQueuePrimaryUri?: string; 
  public get azureStorageQueuePrimaryUri() {
    return this.getStringAttribute('azure_storage_queue_primary_uri');
  }
  public set azureStorageQueuePrimaryUri(value: string) {
    this._azureStorageQueuePrimaryUri = value;
  }
  public resetAzureStorageQueuePrimaryUri() {
    this._azureStorageQueuePrimaryUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureStorageQueuePrimaryUriInput() {
    return this._azureStorageQueuePrimaryUri;
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

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // direction - computed: false, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
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

  // gcp_pubsub_service_account - computed: true, optional: false, required: false
  public get gcpPubsubServiceAccount() {
    return this.getStringAttribute('gcp_pubsub_service_account');
  }

  // gcp_pubsub_subscription_name - computed: false, optional: true, required: false
  private _gcpPubsubSubscriptionName?: string; 
  public get gcpPubsubSubscriptionName() {
    return this.getStringAttribute('gcp_pubsub_subscription_name');
  }
  public set gcpPubsubSubscriptionName(value: string) {
    this._gcpPubsubSubscriptionName = value;
  }
  public resetGcpPubsubSubscriptionName() {
    this._gcpPubsubSubscriptionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpPubsubSubscriptionNameInput() {
    return this._gcpPubsubSubscriptionName;
  }

  // gcp_pubsub_topic_name - computed: false, optional: true, required: false
  private _gcpPubsubTopicName?: string; 
  public get gcpPubsubTopicName() {
    return this.getStringAttribute('gcp_pubsub_topic_name');
  }
  public set gcpPubsubTopicName(value: string) {
    this._gcpPubsubTopicName = value;
  }
  public resetGcpPubsubTopicName() {
    this._gcpPubsubTopicName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpPubsubTopicNameInput() {
    return this._gcpPubsubTopicName;
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

  // notification_provider - computed: false, optional: false, required: true
  private _notificationProvider?: string; 
  public get notificationProvider() {
    return this.getStringAttribute('notification_provider');
  }
  public set notificationProvider(value: string) {
    this._notificationProvider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationProviderInput() {
    return this._notificationProvider;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NotificationIntegrationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NotificationIntegrationTimeouts) {
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
      aws_sns_role_arn: cdktf.stringToTerraform(this._awsSnsRoleArn),
      aws_sns_topic_arn: cdktf.stringToTerraform(this._awsSnsTopicArn),
      aws_sqs_arn: cdktf.stringToTerraform(this._awsSqsArn),
      aws_sqs_role_arn: cdktf.stringToTerraform(this._awsSqsRoleArn),
      azure_storage_queue_primary_uri: cdktf.stringToTerraform(this._azureStorageQueuePrimaryUri),
      azure_tenant_id: cdktf.stringToTerraform(this._azureTenantId),
      comment: cdktf.stringToTerraform(this._comment),
      direction: cdktf.stringToTerraform(this._direction),
      enabled: cdktf.booleanToTerraform(this._enabled),
      gcp_pubsub_subscription_name: cdktf.stringToTerraform(this._gcpPubsubSubscriptionName),
      gcp_pubsub_topic_name: cdktf.stringToTerraform(this._gcpPubsubTopicName),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      notification_provider: cdktf.stringToTerraform(this._notificationProvider),
      type: cdktf.stringToTerraform(this._type),
      timeouts: notificationIntegrationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aws_sns_role_arn: {
        value: cdktf.stringToHclTerraform(this._awsSnsRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_sns_topic_arn: {
        value: cdktf.stringToHclTerraform(this._awsSnsTopicArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_sqs_arn: {
        value: cdktf.stringToHclTerraform(this._awsSqsArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_sqs_role_arn: {
        value: cdktf.stringToHclTerraform(this._awsSqsRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_storage_queue_primary_uri: {
        value: cdktf.stringToHclTerraform(this._azureStorageQueuePrimaryUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_tenant_id: {
        value: cdktf.stringToHclTerraform(this._azureTenantId),
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
      direction: {
        value: cdktf.stringToHclTerraform(this._direction),
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
      gcp_pubsub_subscription_name: {
        value: cdktf.stringToHclTerraform(this._gcpPubsubSubscriptionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gcp_pubsub_topic_name: {
        value: cdktf.stringToHclTerraform(this._gcpPubsubTopicName),
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
      notification_provider: {
        value: cdktf.stringToHclTerraform(this._notificationProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: notificationIntegrationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NotificationIntegrationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
