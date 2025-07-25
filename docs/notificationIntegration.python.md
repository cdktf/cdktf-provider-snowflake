# `notificationIntegration` Submodule <a name="`notificationIntegration` Submodule" id="@cdktf/provider-snowflake.notificationIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NotificationIntegration <a name="NotificationIntegration" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/notification_integration snowflake_notification_integration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import notification_integration

notificationIntegration.NotificationIntegration(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  notification_provider: str,
  aws_sns_role_arn: str = None,
  aws_sns_topic_arn: str = None,
  aws_sqs_arn: str = None,
  aws_sqs_role_arn: str = None,
  azure_storage_queue_primary_uri: str = None,
  azure_tenant_id: str = None,
  comment: str = None,
  direction: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  gcp_pubsub_subscription_name: str = None,
  gcp_pubsub_topic_name: str = None,
  id: str = None,
  timeouts: NotificationIntegrationTimeouts = None,
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/notification_integration#name NotificationIntegration#name}. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.notificationProvider">notification_provider</a></code> | <code>str</code> | The third-party cloud message queuing service (supported values: AZURE_STORAGE_QUEUE, AWS_SNS, GCP_PUBSUB; |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.awsSnsRoleArn">aws_sns_role_arn</a></code> | <code>str</code> | AWS IAM role ARN for notification integration to assume. Required for AWS_SNS provider. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.awsSnsTopicArn">aws_sns_topic_arn</a></code> | <code>str</code> | AWS SNS Topic ARN for notification integration to connect to. Required for AWS_SNS provider. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.awsSqsArn">aws_sqs_arn</a></code> | <code>str</code> | AWS SQS queue ARN for notification integration to connect to. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.awsSqsRoleArn">aws_sqs_role_arn</a></code> | <code>str</code> | AWS IAM role ARN for notification integration to assume. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.azureStorageQueuePrimaryUri">azure_storage_queue_primary_uri</a></code> | <code>str</code> | The queue ID for the Azure Queue Storage queue created for Event Grid notifications. Required for AZURE_STORAGE_QUEUE provider. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.azureTenantId">azure_tenant_id</a></code> | <code>str</code> | The ID of the Azure Active Directory tenant used for identity management. Required for AZURE_STORAGE_QUEUE provider. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.comment">comment</a></code> | <code>str</code> | A comment for the integration. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.direction">direction</a></code> | <code>str</code> | Direction of the cloud messaging with respect to Snowflake (required only for error notifications). |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | (Default: `true`). |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.gcpPubsubSubscriptionName">gcp_pubsub_subscription_name</a></code> | <code>str</code> | The subscription id that Snowflake will listen to when using the GCP_PUBSUB provider. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.gcpPubsubTopicName">gcp_pubsub_topic_name</a></code> | <code>str</code> | The topic id that Snowflake will use to push notifications. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/notification_integration#id NotificationIntegration#id}. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationTimeouts">NotificationIntegrationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.type">type</a></code> | <code>str</code> | (Default: `QUEUE`) A type of integration. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/notification_integration#name NotificationIntegration#name}.

---

##### `notification_provider`<sup>Required</sup> <a name="notification_provider" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.notificationProvider"></a>

- *Type:* str

The third-party cloud message queuing service (supported values: AZURE_STORAGE_QUEUE, AWS_SNS, GCP_PUBSUB;

AWS_SQS is deprecated and will be removed in the future provider versions)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/notification_integration#notification_provider NotificationIntegration#notification_provider}

---

##### `aws_sns_role_arn`<sup>Optional</sup> <a name="aws_sns_role_arn" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.awsSnsRoleArn"></a>

- *Type:* str

AWS IAM role ARN for notification integration to assume. Required for AWS_SNS provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/notification_integration#aws_sns_role_arn NotificationIntegration#aws_sns_role_arn}

---

##### `aws_sns_topic_arn`<sup>Optional</sup> <a name="aws_sns_topic_arn" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.awsSnsTopicArn"></a>

- *Type:* str

AWS SNS Topic ARN for notification integration to connect to. Required for AWS_SNS provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/notification_integration#aws_sns_topic_arn NotificationIntegration#aws_sns_topic_arn}

---

##### `aws_sqs_arn`<sup>Optional</sup> <a name="aws_sqs_arn" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.awsSqsArn"></a>

- *Type:* str

AWS SQS queue ARN for notification integration to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/notification_integration#aws_sqs_arn NotificationIntegration#aws_sqs_arn}

---

##### `aws_sqs_role_arn`<sup>Optional</sup> <a name="aws_sqs_role_arn" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.awsSqsRoleArn"></a>

- *Type:* str

AWS IAM role ARN for notification integration to assume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/notification_integration#aws_sqs_role_arn NotificationIntegration#aws_sqs_role_arn}

---

##### `azure_storage_queue_primary_uri`<sup>Optional</sup> <a name="azure_storage_queue_primary_uri" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.azureStorageQueuePrimaryUri"></a>

- *Type:* str

The queue ID for the Azure Queue Storage queue created for Event Grid notifications. Required for AZURE_STORAGE_QUEUE provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/notification_integration#azure_storage_queue_primary_uri NotificationIntegration#azure_storage_queue_primary_uri}

---

##### `azure_tenant_id`<sup>Optional</sup> <a name="azure_tenant_id" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.azureTenantId"></a>

- *Type:* str

The ID of the Azure Active Directory tenant used for identity management. Required for AZURE_STORAGE_QUEUE provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/notification_integration#azure_tenant_id NotificationIntegration#azure_tenant_id}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.comment"></a>

- *Type:* str

A comment for the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/notification_integration#comment NotificationIntegration#comment}

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.direction"></a>

- *Type:* str

Direction of the cloud messaging with respect to Snowflake (required only for error notifications).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/notification_integration#direction NotificationIntegration#direction}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

(Default: `true`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/notification_integration#enabled NotificationIntegration#enabled}

---

##### `gcp_pubsub_subscription_name`<sup>Optional</sup> <a name="gcp_pubsub_subscription_name" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.gcpPubsubSubscriptionName"></a>

- *Type:* str

The subscription id that Snowflake will listen to when using the GCP_PUBSUB provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/notification_integration#gcp_pubsub_subscription_name NotificationIntegration#gcp_pubsub_subscription_name}

---

##### `gcp_pubsub_topic_name`<sup>Optional</sup> <a name="gcp_pubsub_topic_name" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.gcpPubsubTopicName"></a>

- *Type:* str

The topic id that Snowflake will use to push notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/notification_integration#gcp_pubsub_topic_name NotificationIntegration#gcp_pubsub_topic_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/notification_integration#id NotificationIntegration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationTimeouts">NotificationIntegrationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/notification_integration#timeouts NotificationIntegration#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.Initializer.parameter.type"></a>

- *Type:* str

(Default: `QUEUE`) A type of integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/notification_integration#type NotificationIntegration#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetAwsSnsRoleArn">reset_aws_sns_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetAwsSnsTopicArn">reset_aws_sns_topic_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetAwsSqsArn">reset_aws_sqs_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetAwsSqsRoleArn">reset_aws_sqs_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetAzureStorageQueuePrimaryUri">reset_azure_storage_queue_primary_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetAzureTenantId">reset_azure_tenant_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetDirection">reset_direction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetGcpPubsubSubscriptionName">reset_gcp_pubsub_subscription_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetGcpPubsubTopicName">reset_gcp_pubsub_topic_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/notification_integration#create NotificationIntegration#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/notification_integration#delete NotificationIntegration#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/notification_integration#read NotificationIntegration#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/notification_integration#update NotificationIntegration#update}.

---

##### `reset_aws_sns_role_arn` <a name="reset_aws_sns_role_arn" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetAwsSnsRoleArn"></a>

```python
def reset_aws_sns_role_arn() -> None
```

##### `reset_aws_sns_topic_arn` <a name="reset_aws_sns_topic_arn" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetAwsSnsTopicArn"></a>

```python
def reset_aws_sns_topic_arn() -> None
```

##### `reset_aws_sqs_arn` <a name="reset_aws_sqs_arn" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetAwsSqsArn"></a>

```python
def reset_aws_sqs_arn() -> None
```

##### `reset_aws_sqs_role_arn` <a name="reset_aws_sqs_role_arn" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetAwsSqsRoleArn"></a>

```python
def reset_aws_sqs_role_arn() -> None
```

##### `reset_azure_storage_queue_primary_uri` <a name="reset_azure_storage_queue_primary_uri" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetAzureStorageQueuePrimaryUri"></a>

```python
def reset_azure_storage_queue_primary_uri() -> None
```

##### `reset_azure_tenant_id` <a name="reset_azure_tenant_id" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetAzureTenantId"></a>

```python
def reset_azure_tenant_id() -> None
```

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_direction` <a name="reset_direction" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetDirection"></a>

```python
def reset_direction() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_gcp_pubsub_subscription_name` <a name="reset_gcp_pubsub_subscription_name" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetGcpPubsubSubscriptionName"></a>

```python
def reset_gcp_pubsub_subscription_name() -> None
```

##### `reset_gcp_pubsub_topic_name` <a name="reset_gcp_pubsub_topic_name" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetGcpPubsubTopicName"></a>

```python
def reset_gcp_pubsub_topic_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a NotificationIntegration resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.isConstruct"></a>

```python
from cdktf_cdktf_provider_snowflake import notification_integration

notificationIntegration.NotificationIntegration.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_snowflake import notification_integration

notificationIntegration.NotificationIntegration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_snowflake import notification_integration

notificationIntegration.NotificationIntegration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_snowflake import notification_integration

notificationIntegration.NotificationIntegration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a NotificationIntegration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NotificationIntegration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NotificationIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/notification_integration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NotificationIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSnsExternalId">aws_sns_external_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSnsIamUserArn">aws_sns_iam_user_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSqsExternalId">aws_sqs_external_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSqsIamUserArn">aws_sqs_iam_user_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.fullyQualifiedName">fully_qualified_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.gcpPubsubServiceAccount">gcp_pubsub_service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationTimeoutsOutputReference">NotificationIntegrationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSnsRoleArnInput">aws_sns_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSnsTopicArnInput">aws_sns_topic_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSqsArnInput">aws_sqs_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSqsRoleArnInput">aws_sqs_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.azureStorageQueuePrimaryUriInput">azure_storage_queue_primary_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.azureTenantIdInput">azure_tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.directionInput">direction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.gcpPubsubSubscriptionNameInput">gcp_pubsub_subscription_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.gcpPubsubTopicNameInput">gcp_pubsub_topic_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.notificationProviderInput">notification_provider_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationTimeouts">NotificationIntegrationTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSnsRoleArn">aws_sns_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSnsTopicArn">aws_sns_topic_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSqsArn">aws_sqs_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSqsRoleArn">aws_sqs_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.azureStorageQueuePrimaryUri">azure_storage_queue_primary_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.azureTenantId">azure_tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.direction">direction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.gcpPubsubSubscriptionName">gcp_pubsub_subscription_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.gcpPubsubTopicName">gcp_pubsub_topic_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.notificationProvider">notification_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `aws_sns_external_id`<sup>Required</sup> <a name="aws_sns_external_id" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSnsExternalId"></a>

```python
aws_sns_external_id: str
```

- *Type:* str

---

##### `aws_sns_iam_user_arn`<sup>Required</sup> <a name="aws_sns_iam_user_arn" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSnsIamUserArn"></a>

```python
aws_sns_iam_user_arn: str
```

- *Type:* str

---

##### `aws_sqs_external_id`<sup>Required</sup> <a name="aws_sqs_external_id" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSqsExternalId"></a>

```python
aws_sqs_external_id: str
```

- *Type:* str

---

##### `aws_sqs_iam_user_arn`<sup>Required</sup> <a name="aws_sqs_iam_user_arn" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSqsIamUserArn"></a>

```python
aws_sqs_iam_user_arn: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `fully_qualified_name`<sup>Required</sup> <a name="fully_qualified_name" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.fullyQualifiedName"></a>

```python
fully_qualified_name: str
```

- *Type:* str

---

##### `gcp_pubsub_service_account`<sup>Required</sup> <a name="gcp_pubsub_service_account" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.gcpPubsubServiceAccount"></a>

```python
gcp_pubsub_service_account: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.timeouts"></a>

```python
timeouts: NotificationIntegrationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationTimeoutsOutputReference">NotificationIntegrationTimeoutsOutputReference</a>

---

##### `aws_sns_role_arn_input`<sup>Optional</sup> <a name="aws_sns_role_arn_input" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSnsRoleArnInput"></a>

```python
aws_sns_role_arn_input: str
```

- *Type:* str

---

##### `aws_sns_topic_arn_input`<sup>Optional</sup> <a name="aws_sns_topic_arn_input" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSnsTopicArnInput"></a>

```python
aws_sns_topic_arn_input: str
```

- *Type:* str

---

##### `aws_sqs_arn_input`<sup>Optional</sup> <a name="aws_sqs_arn_input" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSqsArnInput"></a>

```python
aws_sqs_arn_input: str
```

- *Type:* str

---

##### `aws_sqs_role_arn_input`<sup>Optional</sup> <a name="aws_sqs_role_arn_input" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSqsRoleArnInput"></a>

```python
aws_sqs_role_arn_input: str
```

- *Type:* str

---

##### `azure_storage_queue_primary_uri_input`<sup>Optional</sup> <a name="azure_storage_queue_primary_uri_input" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.azureStorageQueuePrimaryUriInput"></a>

```python
azure_storage_queue_primary_uri_input: str
```

- *Type:* str

---

##### `azure_tenant_id_input`<sup>Optional</sup> <a name="azure_tenant_id_input" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.azureTenantIdInput"></a>

```python
azure_tenant_id_input: str
```

- *Type:* str

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `direction_input`<sup>Optional</sup> <a name="direction_input" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.directionInput"></a>

```python
direction_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `gcp_pubsub_subscription_name_input`<sup>Optional</sup> <a name="gcp_pubsub_subscription_name_input" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.gcpPubsubSubscriptionNameInput"></a>

```python
gcp_pubsub_subscription_name_input: str
```

- *Type:* str

---

##### `gcp_pubsub_topic_name_input`<sup>Optional</sup> <a name="gcp_pubsub_topic_name_input" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.gcpPubsubTopicNameInput"></a>

```python
gcp_pubsub_topic_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `notification_provider_input`<sup>Optional</sup> <a name="notification_provider_input" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.notificationProviderInput"></a>

```python
notification_provider_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, NotificationIntegrationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationTimeouts">NotificationIntegrationTimeouts</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `aws_sns_role_arn`<sup>Required</sup> <a name="aws_sns_role_arn" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSnsRoleArn"></a>

```python
aws_sns_role_arn: str
```

- *Type:* str

---

##### `aws_sns_topic_arn`<sup>Required</sup> <a name="aws_sns_topic_arn" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSnsTopicArn"></a>

```python
aws_sns_topic_arn: str
```

- *Type:* str

---

##### `aws_sqs_arn`<sup>Required</sup> <a name="aws_sqs_arn" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSqsArn"></a>

```python
aws_sqs_arn: str
```

- *Type:* str

---

##### `aws_sqs_role_arn`<sup>Required</sup> <a name="aws_sqs_role_arn" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.awsSqsRoleArn"></a>

```python
aws_sqs_role_arn: str
```

- *Type:* str

---

##### `azure_storage_queue_primary_uri`<sup>Required</sup> <a name="azure_storage_queue_primary_uri" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.azureStorageQueuePrimaryUri"></a>

```python
azure_storage_queue_primary_uri: str
```

- *Type:* str

---

##### `azure_tenant_id`<sup>Required</sup> <a name="azure_tenant_id" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.azureTenantId"></a>

```python
azure_tenant_id: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.direction"></a>

```python
direction: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `gcp_pubsub_subscription_name`<sup>Required</sup> <a name="gcp_pubsub_subscription_name" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.gcpPubsubSubscriptionName"></a>

```python
gcp_pubsub_subscription_name: str
```

- *Type:* str

---

##### `gcp_pubsub_topic_name`<sup>Required</sup> <a name="gcp_pubsub_topic_name" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.gcpPubsubTopicName"></a>

```python
gcp_pubsub_topic_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `notification_provider`<sup>Required</sup> <a name="notification_provider" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.notificationProvider"></a>

```python
notification_provider: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NotificationIntegrationConfig <a name="NotificationIntegrationConfig" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import notification_integration

notificationIntegration.NotificationIntegrationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  notification_provider: str,
  aws_sns_role_arn: str = None,
  aws_sns_topic_arn: str = None,
  aws_sqs_arn: str = None,
  aws_sqs_role_arn: str = None,
  azure_storage_queue_primary_uri: str = None,
  azure_tenant_id: str = None,
  comment: str = None,
  direction: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  gcp_pubsub_subscription_name: str = None,
  gcp_pubsub_topic_name: str = None,
  id: str = None,
  timeouts: NotificationIntegrationTimeouts = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/notification_integration#name NotificationIntegration#name}. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.notificationProvider">notification_provider</a></code> | <code>str</code> | The third-party cloud message queuing service (supported values: AZURE_STORAGE_QUEUE, AWS_SNS, GCP_PUBSUB; |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.awsSnsRoleArn">aws_sns_role_arn</a></code> | <code>str</code> | AWS IAM role ARN for notification integration to assume. Required for AWS_SNS provider. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.awsSnsTopicArn">aws_sns_topic_arn</a></code> | <code>str</code> | AWS SNS Topic ARN for notification integration to connect to. Required for AWS_SNS provider. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.awsSqsArn">aws_sqs_arn</a></code> | <code>str</code> | AWS SQS queue ARN for notification integration to connect to. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.awsSqsRoleArn">aws_sqs_role_arn</a></code> | <code>str</code> | AWS IAM role ARN for notification integration to assume. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.azureStorageQueuePrimaryUri">azure_storage_queue_primary_uri</a></code> | <code>str</code> | The queue ID for the Azure Queue Storage queue created for Event Grid notifications. Required for AZURE_STORAGE_QUEUE provider. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.azureTenantId">azure_tenant_id</a></code> | <code>str</code> | The ID of the Azure Active Directory tenant used for identity management. Required for AZURE_STORAGE_QUEUE provider. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.comment">comment</a></code> | <code>str</code> | A comment for the integration. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.direction">direction</a></code> | <code>str</code> | Direction of the cloud messaging with respect to Snowflake (required only for error notifications). |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | (Default: `true`). |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.gcpPubsubSubscriptionName">gcp_pubsub_subscription_name</a></code> | <code>str</code> | The subscription id that Snowflake will listen to when using the GCP_PUBSUB provider. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.gcpPubsubTopicName">gcp_pubsub_topic_name</a></code> | <code>str</code> | The topic id that Snowflake will use to push notifications. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/notification_integration#id NotificationIntegration#id}. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationTimeouts">NotificationIntegrationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.type">type</a></code> | <code>str</code> | (Default: `QUEUE`) A type of integration. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/notification_integration#name NotificationIntegration#name}.

---

##### `notification_provider`<sup>Required</sup> <a name="notification_provider" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.notificationProvider"></a>

```python
notification_provider: str
```

- *Type:* str

The third-party cloud message queuing service (supported values: AZURE_STORAGE_QUEUE, AWS_SNS, GCP_PUBSUB;

AWS_SQS is deprecated and will be removed in the future provider versions)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/notification_integration#notification_provider NotificationIntegration#notification_provider}

---

##### `aws_sns_role_arn`<sup>Optional</sup> <a name="aws_sns_role_arn" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.awsSnsRoleArn"></a>

```python
aws_sns_role_arn: str
```

- *Type:* str

AWS IAM role ARN for notification integration to assume. Required for AWS_SNS provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/notification_integration#aws_sns_role_arn NotificationIntegration#aws_sns_role_arn}

---

##### `aws_sns_topic_arn`<sup>Optional</sup> <a name="aws_sns_topic_arn" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.awsSnsTopicArn"></a>

```python
aws_sns_topic_arn: str
```

- *Type:* str

AWS SNS Topic ARN for notification integration to connect to. Required for AWS_SNS provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/notification_integration#aws_sns_topic_arn NotificationIntegration#aws_sns_topic_arn}

---

##### `aws_sqs_arn`<sup>Optional</sup> <a name="aws_sqs_arn" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.awsSqsArn"></a>

```python
aws_sqs_arn: str
```

- *Type:* str

AWS SQS queue ARN for notification integration to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/notification_integration#aws_sqs_arn NotificationIntegration#aws_sqs_arn}

---

##### `aws_sqs_role_arn`<sup>Optional</sup> <a name="aws_sqs_role_arn" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.awsSqsRoleArn"></a>

```python
aws_sqs_role_arn: str
```

- *Type:* str

AWS IAM role ARN for notification integration to assume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/notification_integration#aws_sqs_role_arn NotificationIntegration#aws_sqs_role_arn}

---

##### `azure_storage_queue_primary_uri`<sup>Optional</sup> <a name="azure_storage_queue_primary_uri" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.azureStorageQueuePrimaryUri"></a>

```python
azure_storage_queue_primary_uri: str
```

- *Type:* str

The queue ID for the Azure Queue Storage queue created for Event Grid notifications. Required for AZURE_STORAGE_QUEUE provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/notification_integration#azure_storage_queue_primary_uri NotificationIntegration#azure_storage_queue_primary_uri}

---

##### `azure_tenant_id`<sup>Optional</sup> <a name="azure_tenant_id" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.azureTenantId"></a>

```python
azure_tenant_id: str
```

- *Type:* str

The ID of the Azure Active Directory tenant used for identity management. Required for AZURE_STORAGE_QUEUE provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/notification_integration#azure_tenant_id NotificationIntegration#azure_tenant_id}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

A comment for the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/notification_integration#comment NotificationIntegration#comment}

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.direction"></a>

```python
direction: str
```

- *Type:* str

Direction of the cloud messaging with respect to Snowflake (required only for error notifications).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/notification_integration#direction NotificationIntegration#direction}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

(Default: `true`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/notification_integration#enabled NotificationIntegration#enabled}

---

##### `gcp_pubsub_subscription_name`<sup>Optional</sup> <a name="gcp_pubsub_subscription_name" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.gcpPubsubSubscriptionName"></a>

```python
gcp_pubsub_subscription_name: str
```

- *Type:* str

The subscription id that Snowflake will listen to when using the GCP_PUBSUB provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/notification_integration#gcp_pubsub_subscription_name NotificationIntegration#gcp_pubsub_subscription_name}

---

##### `gcp_pubsub_topic_name`<sup>Optional</sup> <a name="gcp_pubsub_topic_name" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.gcpPubsubTopicName"></a>

```python
gcp_pubsub_topic_name: str
```

- *Type:* str

The topic id that Snowflake will use to push notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/notification_integration#gcp_pubsub_topic_name NotificationIntegration#gcp_pubsub_topic_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/notification_integration#id NotificationIntegration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.timeouts"></a>

```python
timeouts: NotificationIntegrationTimeouts
```

- *Type:* <a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationTimeouts">NotificationIntegrationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/notification_integration#timeouts NotificationIntegration#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationConfig.property.type"></a>

```python
type: str
```

- *Type:* str

(Default: `QUEUE`) A type of integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/notification_integration#type NotificationIntegration#type}

---

### NotificationIntegrationTimeouts <a name="NotificationIntegrationTimeouts" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import notification_integration

notificationIntegration.NotificationIntegrationTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/notification_integration#create NotificationIntegration#create}. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/notification_integration#delete NotificationIntegration#delete}. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/notification_integration#read NotificationIntegration#read}. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/notification_integration#update NotificationIntegration#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/notification_integration#create NotificationIntegration#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/notification_integration#delete NotificationIntegration#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/notification_integration#read NotificationIntegration#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/notification_integration#update NotificationIntegration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NotificationIntegrationTimeoutsOutputReference <a name="NotificationIntegrationTimeoutsOutputReference" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import notification_integration

notificationIntegration.NotificationIntegrationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationTimeouts">NotificationIntegrationTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NotificationIntegrationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-snowflake.notificationIntegration.NotificationIntegrationTimeouts">NotificationIntegrationTimeouts</a>]

---



